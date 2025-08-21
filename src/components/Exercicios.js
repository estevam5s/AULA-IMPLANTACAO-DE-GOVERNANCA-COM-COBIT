import React, { useState, useEffect } from 'react';
import { GEMINI_API_KEY, GEMINI_API_URL, aulasData } from '../data/courseData';

const Exercicios = ({ className }) => {
  // Estados para configuração dos exercícios
  const [exerciseConfig, setExerciseConfig] = useState({
    quantidade: 5,
    aulas: ['aula01'], // aula01, aula02, ou ambas
    complexidade: 'medio' // basico, medio, avancado
  });

  // Estados para exercícios gerados
  const [generatedExercises, setGeneratedExercises] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [exerciseResults, setExerciseResults] = useState(null);
  const [knowledgeLevel, setKnowledgeLevel] = useState(null);

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

  // Função para gerar exercícios com IA
  const generateExercisesWithAI = async () => {
    setIsGenerating(true);
    
    try {
      // Construir contexto baseado nas aulas selecionadas
      let context = "Baseado no conteúdo das seguintes aulas do curso COBIT:\n\n";
      
      exerciseConfig.aulas.forEach(aulaId => {
        if (aulasData[aulaId]) {
          context += `${aulasData[aulaId].title}:\n`;
          // Extrair texto sem HTML para o contexto
          const textContent = aulasData[aulaId].content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
          context += textContent.substring(0, 2000) + "...\n\n";
        }
      });

      const complexityMap = {
        'basico': 'básico (conceitos fundamentais e definições)',
        'medio': 'médio (aplicação prática e análise)',
        'avancado': 'avançado (análise crítica e resolução de problemas)'
      };

      const prompt = `${context}

GERE ${exerciseConfig.quantidade} exercícios de múltipla escolha de nível ${complexityMap[exerciseConfig.complexidade]} sobre o conteúdo das aulas selecionadas.

FORMATO OBRIGATÓRIO - Responda APENAS com JSON válido neste formato exato:
{
  "exercises": [
    {
      "id": "ex1",
      "question": "Pergunta aqui?",
      "options": [
        {"id": "a", "text": "a) Opção A", "correct": false},
        {"id": "b", "text": "b) Opção B", "correct": true},
        {"id": "c", "text": "c) Opção C", "correct": false},
        {"id": "d", "text": "d) Opção D", "correct": false}
      ],
      "explanation": "Explicação da resposta correta"
    }
  ]
}

REGRAS:
- Sempre 4 alternativas (a, b, c, d)
- Apenas UMA alternativa correta por questão
- Questões devem ser específicas do conteúdo COBIT apresentado
- Incluir explicação para cada resposta
- JSON deve ser válido e parseable
- Não incluir texto antes ou depois do JSON`;

      const requestBody = {
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
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
            setGeneratedExercises(exercisesData.exercises);
            setExerciseMode('generated');
            setSelectedAnswers({});
            setShowResults(false);
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
        correctText: correctOption?.text
      };
    });

    const correctCount = results.filter(r => r.isCorrect).length;
    const totalCount = results.length;
    const percentage = ((correctCount / totalCount) * 100).toFixed(1);

    // Calcular nível de conhecimento
    let level = '';
    let levelColor = '';
    let recommendations = [];

    if (percentage >= 90) {
      level = 'Excelente';
      levelColor = '#00b894';
      recommendations = [
        'Conhecimento sólido dos conceitos COBIT',
        'Pronto para aplicação prática',
        'Considere estudos avançados ou certificação'
      ];
    } else if (percentage >= 75) {
      level = 'Bom';
      levelColor = '#74b9ff';
      recommendations = [
        'Boa compreensão dos conceitos',
        'Revise tópicos com erros',
        'Pratique mais exercícios específicos'
      ];
    } else if (percentage >= 60) {
      level = 'Regular';
      levelColor = '#fdcb6e';
      recommendations = [
        'Conhecimento básico presente',
        'Necessário reforço no estudo',
        'Revise o material das aulas'
      ];
    } else {
      level = 'Insuficiente';
      levelColor = '#e17055';
      recommendations = [
        'Retome o estudo do material',
        'Foque nos conceitos fundamentais',
        'Busque ajuda do assistente IA'
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

    setKnowledgeLevel({
      level,
      percentage,
      color: levelColor,
      recommendations
    });

    setShowResults(true);
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
        <h3>🎯 Gerar Exercícios Personalizados</h3>
        <p>Configure os exercícios de acordo com suas necessidades de estudo:</p>

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
                Gerando exercícios...
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

      <div className="highlight-box">
        <h4>🤖 Geração Inteligente de Exercícios</h4>
        <div className="ai-features">
          <div className="feature-item">
            <strong>🎯 Personalizado:</strong> Exercícios gerados especificamente baseados no conteúdo das aulas selecionadas
          </div>
          <div className="feature-item">
            <strong>📊 Adaptativo:</strong> Nível de dificuldade ajustável conforme seu conhecimento
          </div>
          <div className="feature-item">
            <strong>🔄 Sempre Novo:</strong> Exercícios diferentes a cada geração
          </div>
          <div className="feature-item">
            <strong>📝 Feedback Detalhado:</strong> Explicações completas para cada resposta
          </div>
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
          <h3>📝 Exercícios - {exerciseConfig.aulas.includes('aula01') && exerciseConfig.aulas.includes('aula02') ? 'Ambas as Aulas' : exerciseConfig.aulas.includes('aula01') ? 'Aula 01' : 'Aula 02'}</h3>
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
            disabled={showResults || Object.keys(selectedAnswers).length === 0}
          >
            ✅ Corrigir Exercícios
          </button>
          <button className="nav-tab" onClick={resetExercises} style={{ marginLeft: '10px' }}>
            🔄 Tentar Novamente
          </button>
        </div>

        {showResults && exerciseResults && (
          <div className="results-panel">
            <div className="results-header">
              <h3>📊 Resultados da Avaliação</h3>
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
                <h5>📋 Recomendações de Estudo:</h5>
                <ul>
                  {exerciseResults.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="detailed-results">
              <h5>📝 Análise Detalhada:</h5>
              {exerciseResults.results.map((result, index) => (
                <div key={result.exerciseId} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="result-header">
                    <span className="result-number">Questão {index + 1}</span>
                    <span className={`result-status ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                      {result.isCorrect ? '✅ Correta' : '❌ Incorreta'}
                    </span>
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
      <div className="section-title">📝 Exercícios Inteligentes com IA</div>
      
      {exerciseMode === 'config' && renderExerciseConfig()}
      {exerciseMode === 'generated' && renderGeneratedExercises()}
    </div>
  );
};

export default Exercicios;