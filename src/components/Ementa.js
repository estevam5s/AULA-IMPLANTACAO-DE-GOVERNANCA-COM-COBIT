import React from 'react';

const Ementa = ({ className }) => {
  return (
    <div className={className || "content-section"}>
      <div className="section-title">📋 Ementa da Disciplina</div>
      
      <div className="ementa-grid">
        <div className="unidade-card">
          <h4>📚 Unidade I: Conceitos Fundamentais</h4>
          <ul>
            <li>Eficácia vs Eficiência em TI</li>
            <li>Frameworks para Tecnologia da Informação</li>
            <li>Evolução histórica do COBIT</li>
            <li>Os 5 Fundamentos do COBIT</li>
            <li>Os 7 Habilitadores do Framework</li>
          </ul>
        </div>
        
        <div className="unidade-card">
          <h4>🏗️ Unidade II: Estrutura do COBIT</h4>
          <ul>
            <li>Governança vs Gerenciamento</li>
            <li>Os 5 Domínios/Processos do COBIT</li>
            <li>EDM - Evaluate, Direct and Monitor</li>
            <li>Processos de Gerenciamento (APO, BAI, DSS, MEA)</li>
            <li>Build vs Acquire - Decisões estratégicas</li>
          </ul>
        </div>
        
        <div className="unidade-card">
          <h4>🎯 Unidade III: Modelo de Governança</h4>
          <ul>
            <li>Framework genérico e adaptabilidade</li>
            <li>7 Premissas de implantação do modelo</li>
            <li>Componentes típicos de governança de TI</li>
            <li>Compliance interno e externo</li>
            <li>Alinhamento estratégico (estático vs dinâmico)</li>
            <li>Plano de TI e estratégias empresariais</li>
            <li>SLA e princípios de TI</li>
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
            <small>Implementação COBIT</small>
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