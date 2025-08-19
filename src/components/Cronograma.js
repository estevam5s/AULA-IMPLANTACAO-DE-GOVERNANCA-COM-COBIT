import React from 'react';

const Cronograma = ({ className }) => {
  return (
    <div className={className || "content-section"}>
      <div className="section-title">📅 Cronograma do Curso</div>
      
      <div className="evolution-timeline">
        <div className="timeline-item">
          <div className="timeline-year">Semana 1</div>
          <strong>Aula 01 - Conceitos Fundamentais</strong>
          <p>• Eficácia vs Eficiência<br />• Frameworks para TI<br />• Evolução do COBIT<br />• 5 Fundamentos</p>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-year">Semana 2</div>
          <strong>Aula 02 - Estrutura do COBIT</strong>
          <p>• Governança vs Gerenciamento<br />• 5 Domínios/Processos<br />• Build vs Acquire<br />• Exercícios Práticos</p>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-year">Semana 3</div>
          <strong>Revisão e Avaliação</strong>
          <p>• Revisão geral do conteúdo<br />• Exercícios complementares<br />• Estudos de caso<br />• Avaliação final</p>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-year">Semana 4</div>
          <strong>Projeto Final</strong>
          <p>• Elaboração de projeto<br />• Aplicação prática<br />• Apresentação<br />• Feedback e certificação</p>
        </div>
      </div>

      <div className="highlight-box">
        <h4>📋 Entregas e Prazos</h4>
        <ul style={{ margin: '10px 0 0 20px' }}>
          <li><strong>Exercícios Aula 01:</strong> Até o final da Semana 1</li>
          <li><strong>Exercícios Aula 02:</strong> Até o final da Semana 2</li>
          <li><strong>Avaliação Intermediária:</strong> Semana 3</li>
          <li><strong>Projeto Final:</strong> Semana 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Cronograma;