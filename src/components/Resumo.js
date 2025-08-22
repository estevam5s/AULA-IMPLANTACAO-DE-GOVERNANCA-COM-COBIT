import React from 'react';

const Resumo = ({ className }) => {
  return (
    <div className={className || "content-section"}>
      <div className="section-title">📄 Resumo do Curso</div>
      
      <div className="concept-card">
        <h4>Conceitos Fundamentais</h4>
        <p><strong>Governança de TI:</strong> Proteção do mercado de capitais e seus investidores</p>
        <p><strong>ITIL:</strong> Conjunto de práticas para gerenciamento de serviços de TI</p>
        <p><strong>ISO 38500:</strong> Norma para Governança Corporativa da TI</p>
      </div>

      <div className="concept-card">
        <h4>5 Princípios da Governança de TI</h4>
        <ol style={{ margin: '10px 0 0 20px' }}>
          <li>Gestão de Riscos</li>
          <li>Entrega de Valor</li>
          <li>Alinhamento Estratégico</li>
          <li>Gestão de Recursos</li>
          <li>Mensuração de Desempenho</li>
        </ol>
      </div>

      <div className="concept-card">
        <h4>4 Benefícios da Governança de TI</h4>
        <p><strong>📈 Produtividade:</strong> Análises de desempenho e automação</p>
        <p><strong>✅ Qualidade:</strong> Conformidade com requisitos e padrões</p>
        <p><strong>💰 Redução de Custos:</strong> Otimização de processos e recursos</p>
        <p><strong>🔄 Flexibilidade:</strong> Infraestrutura ágil e adaptável</p>
      </div>

      <div className="concept-card">
        <h4>6 Estruturas de Decisão</h4>
        <p><strong>🏰 Monarquia de Negócio:</strong> Gerentes sênior de unidades</p>
        <p><strong>💻 Monarquia de TI:</strong> Profissionais de TI centralizados</p>
        <p><strong>🏰 Feudalismo:</strong> Decisões independentes por área</p>
        <p><strong>🤝 Federalismo:</strong> Combinação sede e unidades</p>
        <p><strong>👥 Duopólio de TI:</strong> TI + unidade de negócio</p>
        <p><strong>🔀 Anarquia:</strong> Decisões ad hoc individuais</p>
      </div>

      <div className="highlight-box">
        <h4>🎯 Pontos-Chave para Memorizar</h4>
        <ul style={{ margin: '10px 0 0 20px' }}>
          <li>Governança de TI integra com governança corporativa</li>
          <li>ITIL possui mais de 300 práticas de gerenciamento</li>
          <li>ISO 38500 tem 6 componentes principais</li>
          <li>Frameworks: COBIT (governança), ITIL (serviços), PMBOK (projetos)</li>
          <li>Foco na entrega de valor e alinhamento estratégico</li>
        </ul>
      </div>
    </div>
  );
};

export default Resumo;