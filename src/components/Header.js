import React from 'react';

const Header = () => {
  return (
    <header className="header animated">
      <h1>IMPLANTAÇÃO DE GOVERNANÇA COM COBIT</h1>
      <p className="subtitle">Curso Completo - Sistema Interativo de Aprendizagem</p>
      
      <div className="course-info">
        <div className="info-card">
          <strong>Professor</strong>
          Eder José Cassimiro
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
          COBIT 2019
        </div>
      </div>
      
      <div className="professor-info">
        <h3>Professor Eder José Cassimiro</h3>
        <div className="experience-grid">
          <div className="experience-item">
            <strong>14 anos</strong><br />
            Professor Estácio BH
          </div>
          <div className="experience-item">
            <strong>22 anos</strong><br />
            Docência Ensino Superior
          </div>
          <div className="experience-item">
            <strong>30+ anos</strong><br />
            Profissional de TI
          </div>
          <div className="experience-item">
            <strong>Atual</strong><br />
            Auditor de Sistemas - CEMIG
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;