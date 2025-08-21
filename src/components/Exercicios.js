import React, { useState, useEffect } from 'react';
import { GEMINI_API_KEY, GEMINI_API_URL, aulasData, EXERCISE_PROMPTS, EXERCISE_LEVELS } from '../data/courseData';

const Exercicios = ({ className }) => {
  // Estados para configuração dos exercícios
  const [exerciseConfig, setExerciseConfig] = useState({
    quantidade: 5,
    aulas: ['aula01'], // aula01, aula02, ou ambas
    complexidade: 'medio', // basico, medio, avancado
    temperatura: 0.7, // 0.1 a 1.0 - criatividade da IA
    tipoQuestao: 'multipla_escolha', // multipla_escolha, verdadeiro_falso, dissertativa
    focoConteudo: 'geral', // geral, conceitos, aplicacao, casos_praticos
    evitarRepetidas: true, // evitar questões similares às já geradas
    incluirExplicacoes: true, // incluir explicações detalhadas
    dificuldadeGradual: false, // aumentar dificuldade progressivamente
  });

  // Estados para exercícios gerados
  const [generatedExercises, setGeneratedExercises] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [exerciseResults, setExerciseResults] = useState(null);
  const [knowledgeLevel, setKnowledgeLevel] = useState(null);
  const [exerciseHistory, setExerciseHistory] = useState([]); // Histórico para evitar repetições

  // Estados para modo de exercícios
  const [exerciseMode, setExerciseMode] = useState('config'); // config, generated, results

  // Exercícios estáticos originais (como fallback)
  const staticExercises = [
    {
      id: 'exercise1',
      question: '1. Qual a principal diferença entre eficácia e eficiência em TI?',
      options: [
        { id: 'a', text: 'a) Eficácia é fazer certo, eficiência é fazer rápido', correct: false },
        { id: 'b', text: 'b) Eficácia é cumprir as funções, eficiência é otimizar recursos', correct: true },
        { id: 'c', text: 'c) Não há diferença entre os conceitos', correct: false },
        { id: 'd', text: 'd) Eficiência é mais importante que eficácia', correct: false }
      ]
    },
    {
      id: 'exercise2',
      question: '2. Quantos domínios possui o COBIT e qual é focado exclusivamente em governança?',
      options: [
        { id: 'a', text: 'a) 4 domínios, sendo APO o de governança', correct: false },
        { id: 'b', text: 'b) 5 domínios, sendo EDM o de governança', correct: true },
        { id: 'c', text: 'c) 6 domínios, sendo MEA o de governança', correct: false },
        { id: 'd', text: 'd) 3 domínios, sendo DSS o de governança', correct: false }
      ]
    },
    {
      id: 'exercise3',
      question: '3. Qual é o objetivo principal do COBIT?',
      options: [
        { id: 'a', text: 'a) Substituir outros frameworks de TI', correct: false },
        { id: 'b', text: 'b) Ajudar empresas a atingir objetivos através de governança eficaz de TI', correct: true },
        { id: 'c', text: 'c) Apenas auditar sistemas de informação', correct: false },
        { id: 'd', text: 'd) Focar exclusivamente em gerenciamento operacional', correct: false }
      ]
    }
  ];

  // Carregar histórico de exercícios do localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('cobit_exercise_history');
    if (savedHistory) {
      try {
        setExerciseHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Erro ao carregar histórico de exercícios:', error);
      }
    }
  }, []);

  // Salvar histórico quando exercícios são gerados
  useEffect(() => {
    if (exerciseHistory.length > 0) {
      localStorage.setItem('cobit_exercise_history', JSON.stringify(exerciseHistory.slice(-50))); // Manter últimos 50
    }
  }, [exerciseHistory]);

  // Função para construir prompt inteligente baseado na configuração
  const buildIntelligentPrompt = () => {
    let context = "Baseado no conteúdo ESPECÍFICO das seguintes aulas do curso COBIT:\n\n";
    
    // Adicionar conteúdo específico das aulas selecionadas
    exerciseConfig.aulas.forEach(aulaId => {
      if (aulasData[aulaId]) {
        context += `${aulasData[aulaId].title}:\n`;
        const textContent = aulasData[aulaId].content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        context += textContent.substring(0, 3000) + "...\n\n";
      }
    });

    // Adicionar contexto específico baseado no foco do conteúdo
    const focoContextos = {
      'conceitos': 'Foque especificamente em DEFINIÇÕES, CONCEITOS FUNDAMENTAIS e TERMINOLOGIAS do COBIT.',
      'aplicacao': 'Foque em APLICAÇÃO PRÁTICA, IMPLEMENTAÇÃO e CASOS DE USO do COBIT em organizações.',
      'casos_praticos': 'Foque em CENÁRIOS REAIS, ESTUDOS DE CASO e SITUAÇÕES PRÁTICAS de implementação.',
      'geral': 'Aborde uma MIX EQUILIBRADO de conceitos, aplicações e casos práticos.'
    };

    context += `\nFOCO DO CONTEÚDO: ${focoContextos[exerciseConfig.focoConteudo]}\n`;

    // Histórico para evitar repetições
    if (exerciseConfig.evitarRepetidas && exerciseHistory.length > 0) {
      context += `\nEVITE GERAR questões similares a estas já criadas anteriormente:\n`;
      exerciseHistory.slice(-10).forEach((ex, idx) => {
        context += `${idx + 1}. ${ex.question}\n`;
      });
      context += "\nGere questões COMPLETAMENTE DIFERENTES e com ABORDAGENS DISTINTAS.\n";
    }

    // Configurações específicas por tipo de questão
    const tipoInstrucoes = {
      'multipla_escolha': 'múltipla escolha com 4 alternativas (a, b, c, d), sendo APENAS UMA correta',
      'verdadeiro_falso': 'verdadeiro ou falso com justificativa obrigatória',
      'dissertativa': 'dissertativas que exigem resposta elaborada'
    };

    // Configurações de complexidade
    const complexidadeMap = {
      'basico': 'BÁSICO (conceitos fundamentais, definições simples, identificação de elementos)',
      'medio': 'MÉDIO (aplicação prática, análise de cenários, comparações)',
      'avancado': 'AVANÇADO (análise crítica, resolução de problemas complexos, síntese de conhecimentos)'
    };

    // Configuração de dificuldade gradual
    const dificuldadeInstrucao = exerciseConfig.dificuldadeGradual ? 
      `\nORGANIZE as questões em ordem CRESCENTE de dificuldade (da mais fácil para a mais difícil).` : '';

    const prompt = `${context}

GERE EXATAMENTE ${exerciseConfig.quantidade} exercícios de ${tipoInstrucoes[exerciseConfig.tipoQuestao]} de nível ${complexidadeMap[exerciseConfig.complexidade]} sobre o conteúdo das aulas selecionadas.

REQUISITOS OBRIGATÓRIOS:
1. Questões devem ser ESPECÍFICAS do conteúdo COBIT apresentado nas aulas
2. EVITE questões genéricas ou superficiais
3. Cada questão deve abordar um ASPECTO DIFERENTE do conteúdo
4. ${exerciseConfig.incluirExplicacoes ? 'INCLUA explicação detalhada para cada resposta' : 'Explicações simples'}
5. Questões devem ser PRÁTICAS e APLICÁVEIS${dificuldadeInstrucao}

VARIAÇÃO OBRIGATÓRIA - Distribua as questões entre os seguintes TIPOS:
- Conceituais (definições e fundamentos)
- Comparativas (diferenças entre conceitos)
- Aplicativas (como implementar/usar)
- Analíticas (avaliar situações)
- Estratégicas (tomada de decisão)

FORMATO JSON OBRIGATÓRIO - Responda APENAS com JSON válido:
{
  "exercises": [
    {
      "id": "ex1",
      "type": "${exerciseConfig.tipoQuestao}",
      "category": "conceitual|comparativa|aplicativa|analitica|estrategica",
      "difficulty": "${exerciseConfig.complexidade}",
      "question": "Pergunta específica e detalhada aqui?",
      "options": [
        {"id": "a", "text": "a) Opção A detalhada", "correct": false},
        {"id": "b", "text": "b) Opção B detalhada", "correct": true},
        {"id": "c", "text": "c) Opção C detalhada", "correct": false},
        {"id": "d", "text": "d) Opção D detalhada", "correct": false}
      ],
      "explanation": "Explicação técnica detalhada da resposta correta com base no conteúdo da aula",
      "reference": "Referência específica da aula (ex: Aula 01 - Seção de Fundamentos)"
    }
  ]
}

IMPORTANTE: 
- NÃO repita questões do histórico fornecido
- Seja ESPECÍFICO e TÉCNICO
- Use terminologia correta do COBIT
- Questões devem ser desafiadoras mas justas
- VARIE os tópicos abordados dentro da aula selecionada`;

    return prompt;
  };

  // Função para gerar exercícios com IA melhorada
  const generateExercisesWithAI = async () => {
    setIsGenerating(true);
    
    try {
      const prompt = buildIntelligentPrompt();

      const requestBody = {
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: exerciseConfig.temperatura,
          topK: exerciseConfig.temperatura > 0.8 ? 40 : 20, // Mais variado se temperatura alta
          topP: exerciseConfig.temperatura > 0.8 ? 0.95 : 0.85,
          maxOutputTokens: 4096, // Aumentado para exercícios mais complexos
        }
      };

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        
        // Tentar extrair JSON da resposta
        let jsonString = aiResponse;
        
        // Limpar possível texto antes/depois do JSON
        const jsonStart = jsonString.indexOf('{');
        const jsonEnd = jsonString.lastIndexOf('}') + 1;
        
        if (jsonStart !== -1 && jsonEnd !== -1) {
          jsonString = jsonString.substring(jsonStart, jsonEnd);
        }

        try {
          const exercisesData = JSON.parse(jsonString);
          
          if (exercisesData.exercises && Array.isArray(exercisesData.exercises)) {
            // Adicionar timestamp e configuração aos exercícios
            const exercisesWithMetadata = exercisesData.exercises.map(ex => ({
              ...ex,
              timestamp: Date.now(),
              config: { ...exerciseConfig }
            }));

            setGeneratedExercises(exercisesWithMetadata);
            setExerciseMode('generated');
            setSelectedAnswers({});
            setShowResults(false);

            // Atualizar histórico para evitar repetições futuras
            if (exerciseConfig.evitarRepetidas) {
              const newHistory = [...exerciseHistory, ...exercisesWithMetadata];
              setExerciseHistory(newHistory.slice(-50)); // Manter últimos 50
            }

            // Analytics
            const usage = JSON.parse(localStorage.getItem('cobit_usage') || '{}');
            usage['ai_exercises_generated'] = (usage['ai_exercises_generated'] || 0) + 1;
            localStorage.setItem('cobit_usage', JSON.stringify(usage));

          } else {
            throw new Error('Formato de exercícios inválido');
          }
        } catch (parseError) {
          console.error('Erro ao fazer parse do JSON:', parseError);
          console.log('Resposta da IA:', aiResponse);
          throw new Error('Erro ao processar exercícios gerados pela IA');
        }
      }
    } catch (error) {
      console.error('Erro ao gerar exercícios:', error);
      alert('Erro ao gerar exercícios. Usando exercícios estáticos como fallback.');
      setGeneratedExercises(staticExercises);
      setExerciseMode('generated');
    }
    
    setIsGenerating(false);
  };

  // Função para selecionar resposta
  const selectOption = (exerciseId, optionId) => {
    if (showResults) return;
    
    setSelectedAnswers({
      ...selectedAnswers,
      [exerciseId]: optionId
    });
  };

  // Função para corrigir exercícios (mantida igual)
  const checkAllAnswers = () => {
    const exercises = exerciseMode === 'generated' ? generatedExercises : staticExercises;
    const results = exercises.map(exercise => {
      const selectedAnswer = selectedAnswers[exercise.id];
      const correctOption = exercise.options.find(opt => opt.correct);
      const selectedOption = exercise.options.find(opt => opt.id === selectedAnswer);
      
      return {
        exerciseId: exercise.id,
        question: exercise.question,
        selectedAnswer,
        correctAnswer: correctOption?.id,
        isCorrect: selectedAnswer === correctOption?.id,
        explanation: exercise.explanation || `A resposta correta é: ${correctOption?.text}`,
        selectedText: selectedOption?.text,
        correctText: correctOption?.text,
        category: exercise.category || 'geral',
        difficulty: exercise.difficulty || exerciseConfig.complexidade
      };
    });

    const correctCount = results.filter(r => r.isCorrect).length;
    const totalCount = results.length;
    const percentage = ((correctCount / totalCount) * 100).toFixed(1);

    // Análise por categoria
    const categoryAnalysis = {};
    results.forEach(result => {
      if (!categoryAnalysis[result.category]) {
        categoryAnalysis[result.category] = { correct: 0, total: 0 };
      }
      categoryAnalysis[result.category].total++;
      if (result.isCorrect) {
        categoryAnalysis[result.category].correct++;
      }
    });

    // Calcular nível de conhecimento
    let level = '';
    let levelColor = '';
    let recommendations = [];

    if (percentage >= 90) {
      level = 'Excelente';
      levelColor = '#00b894';
      recommendations = [
        'Conhecimento sólido dos conceitos COBIT',
        'Pronto para aplicação prática avançada',
        'Considere estudos de certificação ISACA',
        'Explore casos complexos de implementação'
      ];
    } else if (percentage >= 75) {
      level = 'Bom';
      levelColor = '#74b9ff';
      recommendations = [
        'Boa compreensão dos conceitos fundamentais',
        'Revise tópicos com erros específicos',
        'Pratique mais exercícios de aplicação',
        'Aprofunde conhecimento em áreas fracas'
      ];
    } else if (percentage >= 60) {
      level = 'Regular';
      levelColor = '#fdcb6e';
      recommendations = [
        'Conhecimento básico presente',
        'Necessário reforço significativo no estudo',
        'Revise o material das aulas detalhadamente',
        'Foque nos conceitos fundamentais primeiro'
      ];
    } else {
      level = 'Insuficiente';
      levelColor = '#e17055';
      recommendations = [
        'Retome o estudo completo do material',
        'Comece pelos conceitos mais básicos',
        'Use o assistente IA para esclarecer dúvidas',
        'Considere estudo adicional e revisão completa'
      ];
    }

    setExerciseResults({
      results,
      correctCount,
      totalCount,
      percentage,
      level,
      levelColor,
      recommendations,
      categoryAnalysis
    });

    setKnowledgeLevel({
      level,
      percentage,
      color: levelColor,
      recommendations
    });

    setShowResults(true);

    // Analytics detalhado
    const usage = JSON.parse(localStorage.getItem('cobit_usage') || '{}');
    usage['exercises_completed'] = (usage['exercises_completed'] || 0) + 1;
    usage['exercises_score_sum'] = (usage['exercises_score_sum'] || 0) + parseFloat(percentage);
    localStorage.setItem('cobit_usage', JSON.stringify(usage));
  };

  // Função para resetar exercícios
  const resetExercises = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setExerciseResults(null);
    setKnowledgeLevel(null);
  };

  // Função para voltar à configuração
  const backToConfig = () => {
    setExerciseMode('config');
    resetExercises();
    setGeneratedExercises([]);
  };

  // Função para limpar histórico
  const clearHistory = () => {
    setExerciseHistory([]);
    localStorage.removeItem('cobit_exercise_history');
    alert('Histórico de exercícios limpo! Agora a IA pode gerar qualquer tipo de questão novamente.');
  };

  // Função para obter classe da opção
  const getOptionClass = (exercise, option) => {
    if (!showResults) {
      return selectedAnswers[exercise.id] === option.id ? 'exercise-option selected' : 'exercise-option';
    }
    
    let baseClass = 'exercise-option';
    if (selectedAnswers[exercise.id] === option.id) {
      baseClass += ' selected';
    }
    if (option.correct) {
      baseClass += ' correct';
    } else if (selectedAnswers[exercise.id] === option.id && !option.correct) {
      baseClass += ' incorrect';
    }
    return baseClass;
  };

  // Renderizar configuração avançada de exercícios
  const renderExerciseConfig = () => (
    <div className="exercise-config">
      <div className="config-card">
        <h3>🎯 Gerar Exercícios Personalizados com IA Avançada</h3>
        <p>Configure exercícios inteligentes baseados nas aulas específicas com controle total sobre criatividade e precisão da IA:</p>

        <div className="config-grid">
          <div className="config-item">
            <label htmlFor="quantidade">📊 Quantidade de Exercícios:</label>
            <select 
              id="quantidade"
              value={exerciseConfig.quantidade} 
              onChange={(e) => setExerciseConfig({...exerciseConfig, quantidade: parseInt(e.target.value)})}
              className="config-select"
            >
              <option value={3}>3 exercícios</option>
              <option value={5}>5 exercícios</option>
              <option value={8}>8 exercícios</option>
              <option value={10}>10 exercícios</option>
              <option value={15}>15 exercícios</option>
              <option value={20}>20 exercícios</option>
            </select>
          </div>

          <div className="config-item">
            <label>📚 Conteúdo das Aulas:</label>
            <div className="checkbox-group">
              <label className="checkbox-item">
                <input 
                  type="checkbox" 
                  checked={exerciseConfig.aulas.includes('aula01')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setExerciseConfig({
                        ...exerciseConfig, 
                        aulas: [...exerciseConfig.aulas, 'aula01']
                      });
                    } else {
                      setExerciseConfig({
                        ...exerciseConfig, 
                        aulas: exerciseConfig.aulas.filter(a => a !== 'aula01')
                      });
                    }
                  }}
                />
                <span>Aula 01: Conceitos Fundamentais</span>
              </label>
              <label className="checkbox-item">
                <input 
                  type="checkbox" 
                  checked={exerciseConfig.aulas.includes('aula02')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setExerciseConfig({
                        ...exerciseConfig, 
                        aulas: [...exerciseConfig.aulas, 'aula02']
                      });
                    } else {
                      setExerciseConfig({
                        ...exerciseConfig, 
                        aulas: exerciseConfig.aulas.filter(a => a !== 'aula02')
                      });
                    }
                  }}
                />
                <span>Aula 02: Estrutura e Domínios</span>
              </label>
            </div>
          </div>

          <div className="config-item">
            <label htmlFor="complexidade">🎓 Nível de Complexidade:</label>
            <select 
              id="complexidade"
              value={exerciseConfig.complexidade} 
              onChange={(e) => setExerciseConfig({...exerciseConfig, complexidade: e.target.value})}
              className="config-select"
            >
              <option value="basico">Básico - Conceitos e definições</option>
              <option value="medio">Médio - Aplicação prática</option>
              <option value="avancado">Avançado - Análise crítica</option>
            </select>
          </div>

          <div className="config-item">
            <label htmlFor="temperatura">🌡️ Criatividade da IA:</label>
            <div className="temperature-container">
              <input 
                type="range" 
                id="temperatura"
                min="0.1" 
                max="1.0" 
                step="0.1"
                value={exerciseConfig.temperatura}
                onChange={(e) => setExerciseConfig({...exerciseConfig, temperatura: parseFloat(e.target.value)})}
                className="temperature-slider"
              />
              <div className="temperature-labels">
                <span className="temp-label">Conservadora</span>
                <span className="temp-value">{exerciseConfig.temperatura}</span>
                <span className="temp-label">Criativa</span>
              </div>
              <small className="temp-description">
                {exerciseConfig.temperatura <= 0.3 ? 'Questões mais previsíveis e focadas' :
                 exerciseConfig.temperatura <= 0.7 ? 'Equilibrio entre precisão e criatividade' :
                 'Questões mais criativas e variadas'}
              </small>
            </div>
          </div>

          <div className="config-item">
            <label htmlFor="tipoQuestao">❓ Tipo de Questão:</label>
            <select 
              id="tipoQuestao"
              value={exerciseConfig.tipoQuestao} 
              onChange={(e) => setExerciseConfig({...exerciseConfig, tipoQuestao: e.target.value})}
              className="config-select"
            >
              <option value="multipla_escolha">Múltipla Escolha (4 alternativas)</option>
              <option value="verdadeiro_falso">Verdadeiro ou Falso</option>
              <option value="dissertativa">Dissertativa</option>
            </select>
          </div>

          <div className="config-item">
            <label htmlFor="focoConteudo">🎯 Foco do Conteúdo:</label>
            <select 
              id="focoConteudo"
              value={exerciseConfig.focoConteudo} 
              onChange={(e) => setExerciseConfig({...exerciseConfig, focoConteudo: e.target.value})}
              className="config-select"
            >
              <option value="geral">Geral - Mix equilibrado</option>
              <option value="conceitos">Conceitos - Definições e terminologia</option>
              <option value="aplicacao">Aplicação - Implementação prática</option>
              <option value="casos_praticos">Casos Práticos - Cenários reais</option>
            </select>
          </div>
        </div>

        <div className="advanced-options">
          <h4>⚙️ Opções Avançadas</h4>
          <div className="options-grid">
            <label className="option-item">
              <input 
                type="checkbox" 
                checked={exerciseConfig.evitarRepetidas}
                onChange={(e) => setExerciseConfig({...exerciseConfig, evitarRepetidas: e.target.checked})}
              />
              <span>🚫 Evitar questões similares às anteriores</span>
            </label>
            
            <label className="option-item">
              <input 
                type="checkbox" 
                checked={exerciseConfig.incluirExplicacoes}
                onChange={(e) => setExerciseConfig({...exerciseConfig, incluirExplicacoes: e.target.checked})}
              />
              <span>📝 Incluir explicações detalhadas</span>
            </label>
            
            <label className="option-item">
              <input 
                type="checkbox" 
                checked={exerciseConfig.dificuldadeGradual}
                onChange={(e) => setExerciseConfig({...exerciseConfig, dificuldadeGradual: e.target.checked})}
              />
              <span>📈 Dificuldade gradual (fácil → difícil)</span>
            </label>
          </div>
        </div>

        <div className="config-actions">
          <button 
            className="generate-btn"
            onClick={generateExercisesWithAI}
            disabled={isGenerating || exerciseConfig.aulas.length === 0}
          >
            {isGenerating ? (
              <>
                <span className="loading-spinner"></span>
                Gerando exercícios inteligentes...
              </>
            ) : (
              <>
                🚀 Gerar Exercícios com IA Avançada
              </>
            )}
          </button>
          
          <button 
            className="static-btn"
            onClick={() => {
              setGeneratedExercises(staticExercises);
              setExerciseMode('generated');
              resetExercises();
            }}
          >
            📋 Usar Exercícios Padrão
          </button>

          {exerciseHistory.length > 0 && (
            <button 
              className="clear-history-btn"
              onClick={clearHistory}
              title="Limpar histórico para permitir questões repetidas"
            >
              🗑️ Limpar Histórico ({exerciseHistory.length})
            </button>
          )}
        </div>
      </div>

      <div className="highlight-box">
        <h4>🤖 IA Avançada para Exercícios</h4>
        <div className="ai-features">
          <div className="feature-item">
            <strong>🎯 Ultra Personalizado:</strong> Exercícios gerados especificamente do conteúdo exato das aulas selecionadas
          </div>
          <div className="feature-item">
            <strong>🧠 Inteligência Adaptativa:</strong> Controle total sobre criatividade e precisão da IA
          </div>
          <div className="feature-item">
            <strong>🔄 Sempre Único:</strong> Sistema anti-repetição garante exercícios diferentes
          </div>
          <div className="feature-item">
            <strong>📊 Análise Avançada:</strong> Feedback detalhado por categoria e nível
          </div>
          <div className="feature-item">
            <strong>🎓 Múltiplos Tipos:</strong> Múltipla escolha, V/F ou dissertativas
          </div>
          <div className="feature-item">
            <strong>📈 Progressão Smart:</strong> Dificuldade gradual opcional
          </div>
        </div>
      </div>
    </div>
  );

  // Renderizar exercícios gerados (versão melhorada)
  const renderGeneratedExercises = () => {
    const exercises = exerciseMode === 'generated' ? generatedExercises : staticExercises;
    
    return (
      <div className="generated-exercises">
        <div className="exercise-header">
          <h3>📝 Exercícios Inteligentes - {exerciseConfig.aulas.includes('aula01') && exerciseConfig.aulas.includes('aula02') ? 'Ambas as Aulas' : exerciseConfig.aulas.includes('aula01') ? 'Aula 01' : 'Aula 02'}</h3>
          <div className="exercise-info">
            <span>Quantidade: {exercises.length}</span>
            <span>Nível: {exerciseConfig.complexidade.charAt(0).toUpperCase() + exerciseConfig.complexidade.slice(1)}</span>
            <span>IA: {exerciseConfig.temperatura}</span>
          </div>
          <button className="back-btn" onClick={backToConfig}>
            ⬅ Voltar à Configuração
          </button>
        </div>

        {exercises.map((exercise, index) => (
          <div key={exercise.id} className="exercise-card-quiz">
            <div className="exercise-meta">
              {exercise.category && (
                <span className={`exercise-category ${exercise.category}`}>
                  {exercise.category.charAt(0).toUpperCase() + exercise.category.slice(1)}
                </span>
              )}
              {exercise.difficulty && (
                <span className={`exercise-difficulty ${exercise.difficulty}`}>
                  {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
                </span>
              )}
            </div>
            
            <div className="exercise-question">
              {exercise.question.startsWith(`${index + 1}.`) ? exercise.question : `${index + 1}. ${exercise.question}`}
            </div>
            
            <div className="exercise-options">
              {exercise.options.map((option) => (
                <div
                  key={option.id}
                  className={getOptionClass(exercise, option)}
                  onClick={() => selectOption(exercise.id, option.id)}
                  style={{ cursor: showResults ? 'default' : 'pointer' }}
                >
                  {option.text}
                </div>
              ))}
            </div>
            
            {showResults && exercise.explanation && (
              <div className="exercise-explanation">
                <strong>💡 Explicação:</strong> {exercise.explanation}
                {exercise.reference && (
                  <div className="exercise-reference">
                    <small><strong>📚 Referência:</strong> {exercise.reference}</small>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        <div className="exercise-actions">
          <button 
            className="nav-tab" 
            onClick={checkAllAnswers} 
            disabled={showResults || Object.keys(selectedAnswers).length !== exercises.length}
          >
            ✅ Corrigir Exercícios
          </button>
          <button className="nav-tab" onClick={resetExercises} style={{ marginLeft: '10px' }}>
            🔄 Tentar Novamente
          </button>
          <button className="nav-tab" onClick={backToConfig} style={{ marginLeft: '10px' }}>
            ⚙️ Nova Configuração
          </button>
        </div>

        {showResults && exerciseResults && (
          <div className="results-panel">
            <div className="results-header">
              <h3>📊 Análise Avançada de Resultados</h3>
              <div className="score-display">
                <span className="score-number" style={{ color: exerciseResults.levelColor }}>
                  {exerciseResults.correctCount}/{exerciseResults.totalCount}
                </span>
                <span className="score-percentage" style={{ color: exerciseResults.levelColor }}>
                  {exerciseResults.percentage}%
                </span>
              </div>
            </div>

            <div className="knowledge-level">
              <h4>🎓 Nível de Conhecimento: 
                <span style={{ color: exerciseResults.levelColor, marginLeft: '10px' }}>
                  {exerciseResults.level}
                </span>
              </h4>
              
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${exerciseResults.percentage}%`,
                    backgroundColor: exerciseResults.levelColor 
                  }}
                ></div>
              </div>

              {/* Análise por categoria */}
              {exerciseResults.categoryAnalysis && Object.keys(exerciseResults.categoryAnalysis).length > 1 && (
                <div className="category-analysis">
                  <h5>📊 Desempenho por Categoria:</h5>
                  <div className="category-grid">
                    {Object.entries(exerciseResults.categoryAnalysis).map(([category, data]) => (
                      <div key={category} className="category-item">
                        <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong>
                        <span>{data.correct}/{data.total} ({((data.correct/data.total)*100).toFixed(0)}%)</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="recommendations">
                <h5>📋 Recomendações Personalizadas:</h5>
                <ul>
                  {exerciseResults.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="detailed-results">
              <h5>📝 Análise Detalhada por Questão:</h5>
              {exerciseResults.results.map((result, index) => (
                <div key={result.exerciseId} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="result-header">
                    <span className="result-number">Questão {index + 1}</span>
                    <span className={`result-status ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                      {result.isCorrect ? '✅ Correta' : '❌ Incorreta'}
                    </span>
                    {result.category && (
                      <span className="result-category">{result.category}</span>
                    )}
                  </div>
                  {!result.isCorrect && (
                    <div className="result-details">
                      <p><strong>Sua resposta:</strong> {result.selectedText}</p>
                      <p><strong>Resposta correta:</strong> {result.correctText}</p>
                      <p><strong>Explicação:</strong> {result.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={className || "content-section"}>
      <div className="section-title">📝 Exercícios Inteligentes com IA Avançada</div>
      
      {exerciseMode === 'config' && renderExerciseConfig()}
      {exerciseMode === 'generated' && renderGeneratedExercises()}
    </div>
  );
};

export default Exercicios;