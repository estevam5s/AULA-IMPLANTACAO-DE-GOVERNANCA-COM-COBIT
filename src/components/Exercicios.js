import React, { useState } from 'react';

const Exercicios = ({ className }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const exercises = [
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

  const selectOption = (exerciseId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [exerciseId]: optionId
    });
  };

  const checkAllAnswers = () => {
    setShowResults(true);
  };

  const resetExercises = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

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

  return (
    <div className={className || "content-section"}>
      <div className="section-title">📝 Exercícios Práticos</div>
      
      {exercises.map((exercise) => (
        <div key={exercise.id} className="exercise-card-quiz">
          <div className="exercise-question">{exercise.question}</div>
          <div className="exercise-options">
            {exercise.options.map((option) => (
              <div
                key={option.id}
                className={getOptionClass(exercise, option)}
                onClick={() => !showResults && selectOption(exercise.id, option.id)}
                style={{ cursor: showResults ? 'default' : 'pointer' }}
              >
                {option.text}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-20">
        <button className="nav-tab" onClick={checkAllAnswers} disabled={showResults}>
          ✅ Verificar Respostas
        </button>
        <button className="nav-tab" onClick={resetExercises} style={{ marginLeft: '10px' }}>
          🔄 Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Exercicios;