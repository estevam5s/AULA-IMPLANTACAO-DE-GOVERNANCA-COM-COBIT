import React from 'react';

const Navigation = ({ currentSection, onSectionChange }) => {
  const sections = [
    { id: 'overview', label: '📚 Visão Geral' },
    { id: 'ementa', label: '📋 Ementa' },
    { id: 'aulas', label: '🎓 Aulas' },
    { id: 'exercicios', label: '📝 Exercícios' },
    { id: 'resumo', label: '📄 Resumo' },
    { id: 'recursos', label: '🔧 Recursos' },
    { id: 'cronograma', label: '📅 Cronograma' },
    { id: 'chatbot', label: '🤖 Assistente IA' }
  ];

  const handleSectionChange = (sectionId) => {
    onSectionChange(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Analytics simples
    const usage = JSON.parse(localStorage.getItem('cobit_usage') || '{}');
    usage['section_view'] = (usage['section_view'] || 0) + 1;
    localStorage.setItem('cobit_usage', JSON.stringify(usage));
  };

  return (
    <nav className="nav-tabs">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`nav-tab ${currentSection === section.id ? 'active' : ''}`}
          onClick={() => handleSectionChange(section.id)}
        >
          {section.label}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;