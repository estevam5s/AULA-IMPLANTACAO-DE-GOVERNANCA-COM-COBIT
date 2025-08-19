import React from 'react';

const Resumo = ({ className }) => {
  return (
    <div className={className || "content-section"}>
      <div className="section-title">📄 Resumo do Curso</div>
      
      <div className="concept-card">
        <h4>Conceitos Fundamentais</h4>
        <p><strong>Eficácia:</strong> Cumprir tarefas/funções determinadas</p>
        <p><strong>Eficiência:</strong> Cumprir tarefas otimizando recursos</p>
        <p><strong>Controle Interno:</strong> Garantir confiabilidade e conformidade</p>
      </div>

      <div className="concept-card">
        <h4>5 Fundamentos do COBIT</h4>
        <ol style={{ margin: '10px 0 0 20px' }}>
          <li>Atendimento das necessidades das partes interessadas</li>
          <li>Cobertura de todas as áreas da empresa</li>
          <li>Aplicação de estrutura integrada</li>
          <li>Habilitar abordagem holística</li>
          <li>Separar governança de gerenciamento</li>
        </ol>
      </div>

      <div className="concept-card">
        <h4>5 Domínios do COBIT</h4>
        <p><strong>EDM</strong> - Evaluate, Direct and Monitor (Governança)</p>
        <p><strong>APO</strong> - Align, Plan and Organise (Gerenciamento)</p>
        <p><strong>BAI</strong> - Build, Acquire and Implement (Gerenciamento)</p>
        <p><strong>DSS</strong> - Deliver, Service and Support (Gerenciamento)</p>
        <p><strong>MEA</strong> - Monitor, Evaluate and Assess (Gerenciamento)</p>
      </div>

      <div className="highlight-box">
        <h4>🎯 Pontos-Chave para Memorizar</h4>
        <ul style={{ margin: '10px 0 0 20px' }}>
          <li>COBIT integra governança de TI com governança corporativa</li>
          <li>Framework genérico aplicável a qualquer organização</li>
          <li>Separação clara entre governança (estratégico) e gerenciamento (operacional)</li>
          <li>Priorizar aquisição de soluções prontas sobre desenvolvimento interno</li>
          <li>TI deve demonstrar valor de forma transparente</li>
        </ul>
      </div>
    </div>
  );
};

export default Resumo;