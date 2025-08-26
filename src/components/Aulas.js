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
    const usage = JSON.parse(localStorage.getItem('cobit_usage') || '{}');
    usage['aula_view'] = (usage['aula_view'] || 0) + 1;
    localStorage.setItem('cobit_usage', JSON.stringify(usage));
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
          <h3>📘 Aula 01: Conceitos Fundamentais de Governança</h3>
          <p>Eficácia vs Eficiência, Frameworks para TI, Evolução do COBIT e os 5 Fundamentos essenciais.</p>
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
          <h3>📗 Aula 02: Estrutura e Domínios do COBIT</h3>
          <p>Governança vs Gerenciamento, os 5 Domínios (EDM, APO, BAI, DSS, MEA) e aplicações práticas.</p>
          <div className="card-footer">
            <span className="card-meta">Estrutura • Prática</span>
            <span className="card-action">Ver Conteúdo</span>
          </div>
        </div>

        <div 
          className="card pdf-card" 
          onClick={() => handleCardClick('aula03')}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-type">CONTEÚDO COMPLETO</div>
          <h3>📙 Aula 03: Modelo de Governança com COBIT</h3>
          <p>Framework genérico, 7 premissas de implantação, componentes de governança de TI e alinhamento estratégico.</p>
          <div className="card-footer">
            <span className="card-meta">Modelo • Estratégica</span>
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
            onClick={(e) => handleDownloadClick(e, 'Slides Aula 03')}
          >
            📄 Slides Aula 03
          </button>
          <button 
            className="pdf-download-item" 
            onClick={(e) => handleDownloadClick(e, 'Resumo Executivo')}
          >
            📋 Resumo Executivo
          </button>
          <button 
            className="pdf-download-item" 
            onClick={(e) => handleDownloadClick(e, 'Links Úteis')}
          >
            🔗 Links Úteis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aulas;