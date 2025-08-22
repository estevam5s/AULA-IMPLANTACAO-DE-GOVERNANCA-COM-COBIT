import React from 'react';

const Ementa = ({ className }) => {
  return (
    <div className={className || "content-section"}>
      <div className="section-title">📋 Ementa da Disciplina</div>
      
      <div className="ementa-grid">
        <div className="unidade-card">
          <h4>📚 Módulo 3: Princípios da Governança da Informação</h4>
          <ul>
            <li>Definição de Governança de TI</li>
            <li>Relação com Governança Corporativa</li>
            <li>Os 5 Princípios da Governança de TI</li>
            <li>4 Principais Benefícios</li>
            <li>Frameworks: COBIT, ITIL, PMBOK</li>
          </ul>
        </div>
        
        <div className="unidade-card">
          <h4>🏗️ Módulo 4: Processo de Decisão na Governança</h4>
          <ul>
            <li>6 Estruturas de Decisão</li>
            <li>NBR ISO/IEC 38500 - Norma de Governança</li>
            <li>ITIL - Gerenciamento de Serviços</li>
            <li>Componentes da ISO 38500</li>
            <li>Implementação Prática</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box">
        <h4>📊 Sistema de Avaliação</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' }}>
          <div style={{ textAlign: 'center', padding: '15px', background: 'rgba(116, 185, 255, 0.1)', borderRadius: '10px' }}>
            <strong>Participação: 20%</strong><br />
            <small>Engajamento e discussões</small>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', background: 'rgba(108, 92, 231, 0.1)', borderRadius: '10px' }}>
            <strong>Exercícios: 30%</strong><br />
            <small>Listas práticas</small>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', background: 'rgba(253, 121, 168, 0.1)', borderRadius: '10px' }}>
            <strong>Projeto: 25%</strong><br />
            <small>Implementação ITIL</small>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', background: 'rgba(0, 184, 148, 0.1)', borderRadius: '10px' }}>
            <strong>Avaliação: 25%</strong><br />
            <small>Prova final</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ementa;