import React, { useState, useEffect } from 'react';
import './styles/globals.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import Ementa from './components/Ementa';
import Aulas from './components/Aulas';
import Exercicios from './components/Exercicios';
import Resumo from './components/Resumo';
import Recursos from './components/Recursos';
import Cronograma from './components/Cronograma';
import Chatbot from './components/Chatbot';
import SlidesDownload from './components/SlidesDownload';
import Footer from './components/Footer';
import AulaModal from './components/AulaModal';

const SECTIONS = {
  overview: 'overview',
  ementa: 'ementa',
  aulas: 'aulas',
  slides: 'slides',
  exercicios: 'exercicios',
  resumo: 'resumo',
  recursos: 'recursos',
  cronograma: 'cronograma',
  chatbot: 'chatbot'
};

function App() {
  const [currentSection, setCurrentSection] = useState('overview');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAula, setCurrentAula] = useState('aula01');

  useEffect(() => {
    // Auto-save progress
    const interval = setInterval(() => {
      localStorage.setItem('cobit_current_section', currentSection);
      localStorage.setItem('cobit_timestamp', new Date().getTime());
    }, 30000);

    return () => clearInterval(interval);
  }, [currentSection]);

  useEffect(() => {
    // Load saved progress
    const savedSection = localStorage.getItem('cobit_current_section');
    if (savedSection && savedSection !== 'overview') {
      setCurrentSection(savedSection);
    }

    // Animações de entrada
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animated');
      animatedElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.animationDelay = `${index * 0.2}s`;
        }, index * 100);
      });
    }, 100);
  }, []);

  const openAulaModal = (aulaId) => {
    console.log('Abrindo modal para aula:', aulaId);
    setCurrentAula(aulaId);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    console.log('Fechando modal');
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const renderCurrentSection = () => {
    const sectionProps = {
      className: "content-section active"
    };

    switch (currentSection) {
      case SECTIONS.overview:
        return <Overview {...sectionProps} />;
      case SECTIONS.ementa:
        return <Ementa {...sectionProps} />;
      case SECTIONS.aulas:
        return <Aulas onOpenAula={openAulaModal} {...sectionProps} />;
      case SECTIONS.slides:
        return <SlidesDownload {...sectionProps} />;
      case SECTIONS.exercicios:
        return <Exercicios {...sectionProps} />;
      case SECTIONS.resumo:
        return <Resumo {...sectionProps} />;
      case SECTIONS.recursos:
        return <Recursos {...sectionProps} />;
      case SECTIONS.cronograma:
        return <Cronograma {...sectionProps} />;
      case SECTIONS.chatbot:
        return <Chatbot {...sectionProps} />;
      default:
        return <Overview {...sectionProps} />;
    }
  };

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
      
      if (e.ctrlKey) {
        switch(e.key) {
          case '1':
            e.preventDefault();
            setCurrentSection('overview');
            break;
          case '2':
            e.preventDefault();
            setCurrentSection('ementa');
            break;
          case '3':
            e.preventDefault();
            setCurrentSection('aulas');
            break;
          case '4':
            e.preventDefault();
            setCurrentSection('slides');
            break;
          case '5':
            e.preventDefault();
            setCurrentSection('exercicios');
            break;
          case '6':
            e.preventDefault();
            setCurrentSection('resumo');
            break;
          case '7':
            e.preventDefault();
            setCurrentSection('recursos');
            break;
          case '8':
            e.preventDefault();
            setCurrentSection('cronograma');
            break;
          case '9':
            e.preventDefault();
            setCurrentSection('chatbot');
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Navigation 
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />
        {renderCurrentSection()}
        {modalOpen && (
          <AulaModal
            aulaId={currentAula}
            onClose={closeModal}
            onNavigate={setCurrentAula}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;