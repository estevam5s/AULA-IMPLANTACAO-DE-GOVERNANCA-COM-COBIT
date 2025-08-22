import React from 'react';

const Overview = ({ className }) => {
  return (
    <div className={className || "content-section"}>
      <div className="section-title">📚 Visão Geral do Curso</div>
      
      <div className="highlight-box">
        <h4>🎯 Por que estudar Governança de TI com ITIL?</h4>
        <p>A combinação de <strong>Governança de TI</strong> com <strong>ITIL</strong> é essencial para profissionais que desejam excellence em gestão de TI, fornecendo:</p>
        <ul style={{ margin: '10px 0 0 20px' }}>
          <li><strong>Proteção do mercado</strong> de capitais e investidores</li>
          <li><strong>Alinhamento estratégico</strong> entre TI e negócios</li>
          <li><strong>Gerenciamento de serviços</strong> com mais de 300 práticas</li>
          <li><strong>Fundamentos</strong> para carreiras em gestão e consultoria</li>
        </ul>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">2</span>
          <span className="stat-label">Aulas Essenciais</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5</span>
          <span className="stat-label">Princípios Governança</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">6</span>
          <span className="stat-label">Estruturas Decisão</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">300+</span>
          <span className="stat-label">Práticas ITIL</span>
        </div>
      </div>

      <div className="highlight-box">
        <h4>🚀 Metodologia do Curso</h4>
        <div className="cards-grid">
          <div className="card">
            <h3>🏛️ Governança Estratégica</h3>
            <p>Conceitos fundamentais baseados na ISO 38500 e melhores práticas</p>
          </div>
          <div className="card">
            <h3>⚙️ ITIL Prático</h3>
            <p>Framework completo para gerenciamento de serviços de TI</p>
          </div>
          <div className="card">
            <h3>📊 Análise de Casos</h3>
            <p>Estudos reais de implementação e estruturas de decisão</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;