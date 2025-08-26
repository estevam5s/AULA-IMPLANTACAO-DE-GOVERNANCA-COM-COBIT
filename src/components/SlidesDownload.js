import React, { useState } from 'react';

const SlidesDownload = ({ className }) => {
  const [downloadStats, setDownloadStats] = useState(() => {
    const saved = localStorage.getItem('cobit_download_stats');
    return saved ? JSON.parse(saved) : {};
  });

  const slidesData = [
    {
      id: 'aula01',
      title: '📘 Aula 01: Conceitos Fundamentais de Governança',
      fileName: 'Aula 01_Gov_Cobit_Eder.pptx',
      filePath: '/slides/Aula 01_Gov_Cobit_Eder.pptx',
      description: 'Apresentação completa sobre eficácia vs eficiência, frameworks para TI, evolução do COBIT e os 5 fundamentos essenciais.',
      topics: [
        'Eficácia vs Eficiência',
        'Frameworks para TI',
        'Evolução histórica do COBIT',
        'Os 5 Fundamentos do COBIT',
        'Os 7 Habilitadores',
        'Controle Interno'
      ],
      professor: 'Prof. Eder José Cassimiro',
      slides: 28,
      size: '2.1 MB'
    },
    {
      id: 'aula02',
      title: '📗 Aula 02: Pensamento Computacional',
      fileName: 'Aula_02_Pensamento_Comp.pptx',
      filePath: '/slides/Aula_02_Pensamento_Comp.pptx',
      description: 'Estrutura e domínios do COBIT, governança vs gerenciamento, os 5 domínios e aplicações práticas.',
      topics: [
        'Pensamento Computacional',
        'Governança vs Gerenciamento',
        'Os 5 Domínios do COBIT',
        'EDM - Evaluate, Direct, Monitor',
        'Processos APO, BAI, DSS, MEA',
        'Build vs Acquire'
      ],
      professor: 'Prof. Eder José Cassimiro',
      slides: 35,
      size: '3.2 MB'
    },
    {
      id: 'aula03',
      title: '📙 Aula 03: Modelo de Governança',
      fileName: 'Aula 03_Gov_Cobit_Eder.pptx',
      filePath: '/slides/Aula 03_Gov_Cobit_Eder.pptx',
      description: 'Framework genérico, premissas de implantação, componentes de governança de TI e alinhamento estratégico.',
      topics: [
        'Framework genérico COBIT',
        '7 Premissas de implantação',
        'Componentes de governança TI',
        'Compliance interno e externo',
        'Alinhamento estratégico',
        'Plano de TI e SLA'
      ],
      professor: 'Prof. Eder José Cassimiro',
      slides: 42,
      size: '4.1 MB'
    }
  ];

  const handleDownload = (slide) => {
    // Atualizar estatísticas de download
    const newStats = { ...downloadStats };
    newStats[slide.id] = (newStats[slide.id] || 0) + 1;
    setDownloadStats(newStats);
    localStorage.setItem('cobit_download_stats', JSON.stringify(newStats));

    // Simular download - em um ambiente real, isso seria um link direto para o arquivo
    const link = document.createElement('a');
    link.href = slide.filePath;
    link.download = slide.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Feedback visual
    alert(`Iniciando download: ${slide.fileName}\\n\\n📊 Total de downloads desta aula: ${newStats[slide.id]}\\n\\n💡 Dica: Use os slides junto com o conteúdo interativo das aulas!`);

    // Analytics simples
    const usage = JSON.parse(localStorage.getItem('cobit_usage') || '{}');
    usage['slides_download'] = (usage['slides_download'] || 0) + 1;
    localStorage.setItem('cobit_usage', JSON.stringify(usage));
  };

  const handlePreview = (slide) => {
    alert(`📋 Prévia dos Slides: ${slide.title}\\n\\n📝 Tópicos principais:\\n${slide.topics.map(topic => `• ${topic}`).join('\\n')}\\n\\n👨‍🏫 Professor: ${slide.professor}\\n📊 Total de slides: ${slide.slides}\\n💾 Tamanho: ${slide.size}\\n\\n🎯 Para ver o conteúdo completo, faça o download!`);
  };

  const getTotalDownloads = () => {
    return Object.values(downloadStats).reduce((sum, count) => sum + count, 0);
  };

  return (
    <div className={className || "content-section"}>
      <div className="section-title">💻 Downloads - Slides das Aulas (PPTX)</div>
      
      <div className="highlight-box">
        <h4>📚 Apresentações do Professor Eder José Cassimiro</h4>
        <p>Faça o download das apresentações originais em PowerPoint (.pptx) usadas nas aulas presenciais. 
        Cada arquivo contém slides detalhados, diagramas e exemplos práticos do framework COBIT.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
          <div style={{ textAlign: 'center', padding: '15px', background: 'rgba(116, 185, 255, 0.1)', borderRadius: '10px' }}>
            <strong>3 Aulas</strong><br />
            <small>Slides disponíveis</small>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', background: 'rgba(108, 92, 231, 0.1)', borderRadius: '10px' }}>
            <strong>105+ Slides</strong><br />
            <small>Conteúdo total</small>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', background: 'rgba(253, 121, 168, 0.1)', borderRadius: '10px' }}>
            <strong>{getTotalDownloads()}</strong><br />
            <small>Downloads realizados</small>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', background: 'rgba(0, 184, 148, 0.1)', borderRadius: '10px' }}>
            <strong>9.4 MB</strong><br />
            <small>Tamanho total</small>
          </div>
        </div>
      </div>

      <div className="cards-grid">
        {slidesData.map((slide, index) => (
          <div key={slide.id} className="card pdf-card" style={{ position: 'relative' }}>
            {downloadStats[slide.id] && (
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#00b894',
                color: 'white',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {downloadStats[slide.id]}
              </div>
            )}
            
            <div className="card-type">SLIDES ORIGINAIS</div>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            
            <div style={{ margin: '15px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85em', color: '#666' }}>
                <span>📊 {slide.slides} slides</span>
                <span>💾 {slide.size}</span>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ fontSize: '0.9em' }}>📋 Conteúdo:</strong>
                <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 18px', fontSize: '0.85em', color: '#555' }}>
                  {slide.topics.slice(0, 3).map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                  {slide.topics.length > 3 && (
                    <li style={{ fontStyle: 'italic', color: '#888' }}>
                      +{slide.topics.length - 3} tópicos adicionais...
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="card-footer" style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => handlePreview(slide)}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  background: 'rgba(116, 185, 255, 0.1)',
                  border: '1px solid #74b9ff',
                  borderRadius: '6px',
                  color: '#0984e3',
                  cursor: 'pointer',
                  fontSize: '0.85em',
                  fontWeight: '500'
                }}
              >
                👁️ Prévia
              </button>
              <button
                onClick={() => handleDownload(slide)}
                style={{
                  flex: 2,
                  padding: '8px 12px',
                  background: 'linear-gradient(135deg, #0984e3, #74b9ff)',
                  border: 'none',
                  borderRadius: '6px',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '0.85em',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                ⬇️ Download PPTX
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="highlight-box">
        <h4>💡 Como usar os slides</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '15px' }}>
          <div>
            <h5>📱 Para Estudo</h5>
            <ul style={{ margin: '10px 0 0 20px', fontSize: '0.9em' }}>
              <li>Use junto com as aulas interativas</li>
              <li>Imprima slides-chave para anotações</li>
              <li>Revise antes das avaliações</li>
            </ul>
          </div>
          
          <div>
            <h5>🎯 Para Apresentações</h5>
            <ul style={{ margin: '10px 0 0 20px', fontSize: '0.9em' }}>
              <li>Adapte para seu contexto profissional</li>
              <li>Use como base para treinamentos</li>
              <li>Extraia diagramas e exemplos</li>
            </ul>
          </div>
          
          <div>
            <h5>📚 Para Referência</h5>
            <ul style={{ margin: '10px 0 0 20px', fontSize: '0.9em' }}>
              <li>Consulte definições específicas</li>
              <li>Encontre exemplos práticos</li>
              <li>Use como material de apoio</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h4>ℹ️ Informações Técnicas</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px', fontSize: '0.9em' }}>
          <div>
            <strong>📁 Formato:</strong><br />
            PowerPoint (.pptx)
          </div>
          <div>
            <strong>🔗 Compatibilidade:</strong><br />
            Office 2010+ / LibreOffice / Google Slides
          </div>
          <div>
            <strong>👨‍🏫 Autor:</strong><br />
            Prof. Eder José Cassimiro
          </div>
          <div>
            <strong>📅 Versão:</strong><br />
            Semestre Atual 2024/2025
          </div>
        </div>
        
        <p style={{ marginTop: '15px', fontSize: '0.85em', color: '#666', fontStyle: 'italic' }}>
          💡 <strong>Dica:</strong> Para melhor aproveitamento, faça o download dos slides e acompanhe junto com as aulas interativas 
          disponíveis na seção "🎓 Material das Aulas". Os slides complementam o conteúdo digital com visualizações 
          e diagramas detalhados.
        </p>
      </div>
    </div>
  );
};

export default SlidesDownload;