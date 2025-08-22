import React from 'react';

const Header = () => {
  return (
    <header className="header animated">
      <h1>GOVERNANÇA DE TI COM ITIL</h1>
      <p className="subtitle">Curso Completo - Sistema Interativo de Aprendizagem</p>
      
      <div className="course-info">
        <div className="info-card">
          <strong>Professora</strong>
          Dra. Eng. Maiara Heil
        </div>
        <div className="info-card">
          <strong>Disciplina</strong>
          Governança de TI
        </div>
        <div className="info-card">
          <strong>Modalidade</strong>
          Híbrida
        </div>
        <div className="info-card">
          <strong>Framework</strong>
          ITIL v4
        </div>
      </div>
      
      <div className="professor-info">
        <h3>Professora Dra. Eng. Maiara Heil</h3>
        <div className="experience-grid">
          <div className="experience-item">
            <strong>Doutora</strong><br />
            Engenharia
          </div>
          <div className="experience-item">
            <strong>Especialista</strong><br />
            Governança de TI
          </div>
          <div className="experience-item">
            <strong>Estácio</strong><br />
            Professora Titular
          </div>
          <div className="experience-item">
            <strong>ITIL v4</strong><br />
            Framework Expert
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;