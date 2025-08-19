import React from 'react';

const Recursos = ({ className }) => {
  return (
    <div className={className || "content-section"}>
      <div className="section-title">🔧 Recursos Adicionais</div>
      
      <div className="process-grid">
        <div className="process-card">
          <h3>📖 Materiais de Estudo</h3>
          <ul style={{ margin: '10px 0 0 20px' }}>
            <li>Slides das aulas em PDF</li>
            <li>Resumos executivos</li>
            <li>Mapas mentais</li>
            <li>Glossário de termos</li>
          </ul>
        </div>
        
        <div className="process-card governance">
          <h3>🎥 Conteúdo Multimídia</h3>
          <ul style={{ margin: '10px 0 0 20px' }}>
            <li>Vídeo-aulas gravadas</li>
            <li>Webinars complementares</li>
            <li>Estudos de caso</li>
            <li>Entrevistas com especialistas</li>
          </ul>
        </div>
        
        <div className="process-card">
          <h3>📚 Bibliografia</h3>
          <ul style={{ margin: '10px 0 0 20px' }}>
            <li>COBIT 2019 Framework</li>
            <li>Livros sobre Governança de TI</li>
            <li>Artigos acadêmicos</li>
            <li>Cases empresariais</li>
          </ul>
        </div>
        
        <div className="process-card governance">
          <h3>🔗 Links Úteis</h3>
          <ul style={{ margin: '10px 0 0 20px' }}>
            <li>Site oficial ISACA</li>
            <li>Documentação COBIT</li>
            <li>Comunidades de prática</li>
            <li>Fóruns de discussão</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recursos;