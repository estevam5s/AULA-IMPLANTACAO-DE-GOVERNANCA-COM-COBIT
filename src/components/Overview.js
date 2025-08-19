import React from 'react';

const Overview = ({ className }) => {
  return (
    <div className={className || "content-section"}>
      <div className="section-title">📚 Visão Geral do Curso</div>
      
      <div className="highlight-box">
        <h4>🎯 Por que estudar COBIT?</h4>
        <p>O framework COBIT é <strong>essencial</strong> para qualquer profissional de TI que deseja trabalhar com governança e gestão, fornecendo:</p>
        <ul style={{ margin: '10px 0 0 20px' }}>
          <li><strong>Base sólida</strong> para implementação de governança de TI</li>
          <li><strong>Alinhamento estratégico</strong> entre TI e negócios</li>
          <li><strong>Melhores práticas</strong> reconhecidas globalmente</li>
          <li><strong>Fundamentos</strong> para carreiras em auditoria e consultoria</li>
        </ul>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">2</span>
          <span className="stat-label">Aulas Fundamentais</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5</span>
          <span className="stat-label">Fundamentos COBIT</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5</span>
          <span className="stat-label">Domínios/Processos</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Material Prático</span>
        </div>
      </div>

      <div className="highlight-box">
        <h4>🚀 Metodologia do Curso</h4>
        <div className="cards-grid">
          <div className="card">
            <h3>🔬 Teoria Fundamentada</h3>
            <p>Conceitos rigorosos baseados no COBIT 2019 oficial</p>
          </div>
          <div className="card">
            <h3>💼 Prática Empresarial</h3>
            <p>Exemplos reais e estudos de caso do mercado</p>
          </div>
          <div className="card">
            <h3>📊 Análise Comparativa</h3>
            <p>Comparação entre governança e gerenciamento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;