import React from 'react';

const Aulas = ({ onOpenAula, className }) => {
  const handleCardClick = (aulaId) => {
    console.log('Tentando abrir aula:', aulaId);
    if (onOpenAula) {
      onOpenAula(aulaId);
    } else {
      console.error('onOpenAula não está definido');
    }
    
    // Analytics simples
    const usage = JSON.parse(localStorage.getItem('itil_usage') || '{}');
    usage['aula_view'] = (usage['aula_view'] || 0) + 1;
    localStorage.setItem('itil_usage', JSON.stringify(usage));
  };

  const handleDownloadClick = (e, fileName) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`Download do arquivo: ${fileName}\n(Implementar integração real conforme necessário)`);
  };

  return (
    <div className={className || "content-section"}>
      <div className="section-title">🎓 Material das Aulas</div>
      
      <div className="cards-grid">
        <div 
          className="card pdf-card" 
          onClick={() => handleCardClick('aula01')}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-type">CONTEÚDO COMPLETO</div>
          <h3>📘 Aula 01: Princípios da Governança da Informação</h3>
          <p>Definição de Governança de TI, 5 Princípios fundamentais, 4 Benefícios principais e Frameworks essenciais.</p>
          <div className="card-footer">
            <span className="card-meta">Fundamentos • Teórica</span>
            <span className="card-action">Ver Conteúdo</span>
          </div>
        </div>

        <div 
          className="card pdf-card" 
          onClick={() => handleCardClick('aula02')}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-type">CONTEÚDO COMPLETO</div>
          <h3>📗 Aula 02: Processo de Decisão na Governança</h3>
          <p>6 Estruturas de Decisão, ISO 38500, ITIL Framework e aplicações práticas na gestão de serviços.</p>
          <div className="card-footer">
            <span className="card-meta">Prática • Frameworks</span>
            <span className="card-action">Ver Conteúdo</span>
          </div>
        </div>
      </div>

      <div className="highlight-box">
        <h4>📚 Materiais de Apoio</h4>
        <div className="pdf-download-grid">
          <button 
            className="pdf-download-item" 
            onClick={(e) => handleDownloadClick(e, 'Slides Aula 01')}
          >
            📄 Slides Aula 01
          </button>
          <button 
            className="pdf-download-item" 
            onClick={(e) => handleDownloadClick(e, 'Slides Aula 02')}
          >
            📄 Slides Aula 02
          </button>
          <button 
            className="pdf-download-item" 
            onClick={(e) => handleDownloadClick(e, 'Norma ISO 38500')}
          >
            📋 Norma ISO 38500
          </button>
          <button 
            className="pdf-download-item" 
            onClick={(e) => handleDownloadClick(e, 'Guia ITIL v4')}
          >
            🔗 Guia ITIL v4
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aulas;