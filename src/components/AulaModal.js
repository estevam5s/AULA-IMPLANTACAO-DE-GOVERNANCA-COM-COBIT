import React, { useEffect } from 'react';
import { aulasData } from '../data/courseData';

const AulaModal = ({ aulaId, onClose, onNavigate }) => {
  const aula = aulasData[aulaId];
  const aulaKeys = Object.keys(aulasData);
  const currentIndex = aulaKeys.indexOf(aulaId);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(aulaKeys[currentIndex - 1]);
      }
      if (e.key === 'ArrowRight' && currentIndex < aulaKeys.length - 1) {
        onNavigate(aulaKeys[currentIndex + 1]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, aulaKeys, onClose, onNavigate]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const navigateAula = (direction) => {
    if (direction === 'prev' && currentIndex > 0) {
      onNavigate(aulaKeys[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < aulaKeys.length - 1) {
      onNavigate(aulaKeys[currentIndex + 1]);
    }
  };

  if (!aula) {
    console.log('Aula não encontrada:', aulaId);
    return null;
  }

  return (
    <div className="modal" onClick={handleBackdropClick} style={{ display: 'flex' }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>&times;</button>
        
        <div className="aula-navigation">
          <button
            className="aula-nav-btn"
            onClick={() => navigateAula('prev')}
            disabled={currentIndex === 0}
          >
            ⬅ Anterior
          </button>
          <span style={{ fontWeight: 'bold', color: '#2c3e50' }}>{aula.title}</span>
          <button
            className="aula-nav-btn"
            onClick={() => navigateAula('next')}
            disabled={currentIndex === aulaKeys.length - 1}
          >
            Próxima ➡
          </button>
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: aula.content }} />
      </div>
    </div>
  );
};

export default AulaModal;