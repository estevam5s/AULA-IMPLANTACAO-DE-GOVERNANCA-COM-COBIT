import React, { useState, useEffect } from 'react';
import { GEMINI_API_KEY, GEMINI_API_URL, aulasData, EXERCISE_LEVELS } from '../data/courseData';

const Exercicios = ({ className }) => {
  // Estados para configuração dos exercícios
  const [exerciseConfig, setExerciseConfig] = useState({
    quantidade: 5,
    aulas: ['aula01'],
    complexidade: 'medio',
    temperatura: 0.7,
    tipoQuestao: 'multipla_escolha',
    focoConteudo: 'geral',
    evitarRepetidas: true,
    incluirExplicacoes: true,
    dificuldadeGradual: false,
  });

  // Estados para exercícios gerados
  const [generatedExercises, setGeneratedExercises] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [exerciseResults, setExerciseResults] = useState(null);
  const [exerciseMode, setExerciseMode] = useState('config');

  // Exercícios estáticos sobre ITIL e Governança
  const staticExercises = [
    {
      id: 'exercise1',
      question: '1. Qual é o principal objetivo da Governança de TI?',
      options: [
        { id: 'a', text: 'a) Apenas gerenciar infraestrutura tecnológica', correct: false },
        { id: 'b', text: 'b) Proteger o mercado de capitais e seus investidores', correct: true },
        { id: 'c', text: 'c) Substituir a governança corporativa', correct: false },
        { id: 'd', text: 'd) Focar exclusivamente em redução de custos', correct: false }
      ]
    },
    {
      id: 'exercise2',
      question: '2. Quantos princípios possui a Governança de TI?',
      options: [
        { id: 'a', text: 'a) 3 princípios', correct: false },
        { id: 'b', text: 'b) 5 princípios', correct: true },
        { id: 'c', text: 'c) 7 princípios', correct: false },
        { id: 'd', text: 'd) 4 princípios', correct: false }
      ]
    },
    {
      id: 'exercise3',
      question: '3. O que significa ITIL?',
      options: [
        { id: 'a', text: 'a) Information Technology Infrastructure Library', correct: true },
        { id: 'b', text: 'b) International Technology Information Laboratory', correct: false },
        { id: 'c', text: 'c) Information Technology Integration Library', correct: false },
        { id: 'd', text: 'd) Interactive Technology Infrastructure Laboratory', correct: false }
      ]
    }
  ];

  // Função para construir prompt inteligente baseado na configuração
  const buildIntelligentPrompt = () => {
    let context = "Baseado no conteúdo ESPECÍFICO das seguintes aulas do curso Governança de TI com ITIL:\n\n";
    
    exerciseConfig.aulas.forEach(aulaId => {
      if (aulasData[aulaId]) {
        context += `${aulasData[aulaId].title}:\n`;
        const textContent = aulasData[aulaId].content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        context += textContent.substring(0, 3000) + "...\n\n";
      }
    });

    const focoContextos = {
      'conceitos': 'Foque especificamente em DEFINIÇÕES, CONCEITOS FUNDAMENTAIS e TERMINOLOGIAS da Governança de TI.',
      'aplicacao': 'Foque em APLICAÇÃO PRÁTICA, IMPLEMENTAÇÃO e CASOS DE USO de ITIL e Governança de TI.',
      'casos_praticos': 'Foque em CENÁRIOS REAIS, ESTUDOS DE CASO e SITUAÇÕES PRÁTICAS de implementação.',
      'geral': 'Aborde uma MIX EQUILIBRADO de conceitos, aplicações e casos práticos.'
    };

    context += `\nFOCO DO CONTEÚDO: ${focoContextos[exerciseConfig.focoConteudo]}\n`;

    const tipoInstrucoes = {
      'multipla_escolha': 'múltipla escolha com 4 alternativas (a, b, c, d), sendo APENAS UMA correta',
      'verdadeiro_falso': 'verdadeiro ou falso com justificativa obrigatória',
      'dissertativa': 'dissertativas que exigem resposta elaborada'
    };

    const complexidadeMap = {
      'basico': 'BÁSICO (conceitos fundamentais, definições simples, identificação de elementos)',
      'medio': 'MÉDIO (aplicação prática, análise de cenários, comparações)',
      'avancado': 'AVANÇADO (análise crítica, resolução de problemas complexos, síntese de conhecimentos)'
    };

    const prompt = `${context}

GERE EXATAMENTE ${exerciseConfig.quantidade} exercícios de ${tipoInstrucoes[exerciseConfig.tipoQuestao]} de nível ${complexidadeMap[exerciseConfig.complexidade]} sobre Governança de TI e ITIL.

REQUISITOS OBRIGATÓRIOS:
1. Questões devem ser ESPECÍFICAS do conteúdo das aulas sobre Governança de TI
2. EVITE questões genéricas ou superficiais
3. Cada questão deve abordar um ASPECTO DIFERENTE do conteúdo
4. ${exerciseConfig.incluirExplicacoes ? 'INCLUA explicação detalhada para cada resposta' : 'Explicações simples'}
5. Questões devem ser PRÁTICAS e APLICÁVEIS

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
      "question": "Pergunta específica sobre Governança de TI/ITIL aqui?",
      "options": [
        {"id": "a", "text": "a) Opção A detalhada", "correct": false},
        {"id": "b", "text": "b) Opção B detalhada", "correct": true},
        {"id": "c", "text": "c) Opção C detalhada", "correct": false},
        {"id": "d", "text": "d) Opção D detalhada", "correct": false}
      ],
      "explanation": "Explicação técnica detalhada da resposta correta com base no conteúdo da aula",
      "reference": "Referência específica da aula"
    }
  ]
}

IMPORTANTE: 
- Seja ESPECÍFICO sobre Governança de TI e ITIL
- Use terminologia correta dos frameworks
- Questões devem ser desafiadoras mas justas
- VARIE os tópicos abordados dentro da aula selecionada`;

    return prompt;
  };

  // Função para gerar exercícios com IA
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
          topK: exerciseConfig.temperatura > 0.8 ? 40 : 20,
          topP: exerciseConfig.temperatura > 0.8 ? 0.95 : 0.85,
          maxOutputTokens: 4096,
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
        
        let jsonString = aiResponse;
        const jsonStart = jsonString.indexOf('{');
        const jsonEnd = jsonString.lastIndexOf('}') + 1;
        
        if (jsonStart !== -1 && jsonEnd !== -1) {
          jsonString = jsonString.substring(jsonStart, jsonEnd);
        }

        try {
          const exercisesData = JSON.parse(jsonString);
          
          if (exercisesData.exercises && Array.isArray(exercisesData.exercises)) {
            const exercisesWithMetadata = exercisesData.exercises.map(ex => ({
              ...ex,
              timestamp: Date.now(),
              config: { ...exerciseConfig }
            }));

            setGeneratedExercises(exercisesWithMetadata);
            setExerciseMode('generated');
            setSelectedAnswers({});
            setShowResults(false);

            const usage = JSON.parse(localStorage.getItem('itil_usage') || '{}');
            usage['ai_exercises_generated'] = (usage['ai_exercises_generated'] || 0) + 1;
            localStorage.setItem('itil_usage', JSON.stringify(usage));

          } else {
            throw new Error('Formato de exercícios inválido');
          }
        } catch (parseError) {
          console.error('Erro ao fazer parse do JSON:', parseError);
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

  // Função para corrigir exercícios
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

    let level = '';
    let levelColor = '';
    let recommendations = [];

    if (percentage >= 90) {
      level = 'Excelente';
      levelColor = '#00b894';
      recommendations = [
        'Conhecimento sólido de Governança de TI e ITIL',
        'Pronto para aplicação prática avançada',
        'Considere certificações ITIL Foundation/Practitioner',
        'Explore casos complexos de implementação'
      ];
    } else if (percentage >= 75) {
      level = 'Bom';
      levelColor = '#74b9ff';
      recommendations = [
        'Boa compreensão dos conceitos fundamentais',
        'Revise tópicos com erros específicos',
        'Pratique mais exercícios de aplicação ITIL',
        'Aprofunde conhecimento em áreas fracas'
      ];
    } else if (percentage >= 60) {
      level = 'Regular';
      levelColor = '#fdcb6e';
      recommendations = [
        'Conhecimento básico presente',
        'Necessário reforço significativo no estudo',
        'Revise o material das aulas detalhadamente',
        'Foque nos princípios fundamentais primeiro'
      ];
    } else {
      level = 'Insuficiente';
      levelColor = '#e17055';
      recommendations = [
        'Retome o estudo completo do material',
        'Comece pelos conceitos mais básicos',
        'Use o assistente IA para esclarecer dúvidas',
        'Considere estudo adicional sobre ITIL'
      ];
    }

    setExerciseResults({
      results,
      correctCount,
      totalCount,
      percentage,
      level,
      levelColor,
      recommendations
    });

    setShowResults(true);

    const usage = JSON.parse(localStorage.getItem('itil_usage') || '{}');
    usage['exercises_completed'] = (usage['exercises_completed'] || 0) + 1;
    usage['exercises_score_sum'] = (usage['exercises_score_sum'] || 0) + parseFloat(percentage);
    localStorage.setItem('itil_usage', JSON.stringify(usage));
  };

  // Função para resetar exercícios
  const resetExercises = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setExerciseResults(null);
  };

  // Função para voltar à configuração
  const backToConfig = () => {
    setExerciseMode('config');
    resetExercises();
    setGeneratedExercises([]);
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

  // Renderizar configuração de exercícios
  const renderExerciseConfig = () => (
    <div className="exercise-config">
      <div className="config-card">
        <h3>🎯 Gerar Exercícios sobre Governança de TI e ITIL</h3>
        <p>Configure exercícios inteligentes baseados nas aulas específicas sobre Governança de TI:</p>

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
                <span>Aula 01: Princípios da Governança</span>
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
                <span>Aula 02: Processo de Decisão</span>
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
                Gerando exercícios sobre ITIL...
              </>
            ) : (
              <>
                🚀 Gerar Exercícios com IA
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
        </div>
      </div>
    </div>
  );

  // Renderizar exercícios gerados
  const renderGeneratedExercises = () => {
    const exercises = exerciseMode === 'generated' ? generatedExercises : staticExercises;
    
    return (
      <div className="generated-exercises">
        <div className="exercise-header">
          <h3>📝 Exercícios - Governança de TI e ITIL</h3>
          <div className="exercise-info">
            <span>Quantidade: {exercises.length}</span>
            <span>Nível: {exerciseConfig.complexidade.charAt(0).toUpperCase() + exerciseConfig.complexidade.slice(1)}</span>
          </div>
          <button className="back-btn" onClick={backToConfig}>
            ⬅ Voltar à Configuração
          </button>
        </div>

        {exercises.map((exercise, index) => (
          <div key={exercise.id} className="exercise-card-quiz">
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
              <h3>📊 Resultados - Governança de TI</h3>
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

              <div className="recommendations">
                <h5>📋 Recomendações Personalizadas:</h5>
                <ul>
                  {exerciseResults.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={className || "content-section"}>
      <div className="section-title">📝 Exercícios Inteligentes - Governança de TI</div>
      
      {exerciseMode === 'config' && renderExerciseConfig()}
      {exerciseMode === 'generated' && renderGeneratedExercises()}
    </div>
  );
};

export default Exercicios;