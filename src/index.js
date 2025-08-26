import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Analytics simples
const updateVisitorCount = () => {
  let count = localStorage.getItem('cobit_visitor_count') || 0;
  count = parseInt(count) + 1;
  localStorage.setItem('cobit_visitor_count', count);
  console.log(`Visita número: ${count}`);
};

updateVisitorCount();
console.log('🚀 Sistema COBIT carregado com sucesso!');
console.log('📚 Navegue pelas abas para explorar o conteúdo');
console.log('💻 Nova seção Slides PPTX disponível!');
console.log('🤖 Use o assistente IA para tirar dúvidas');
console.log('⌨️ Atalhos: Ctrl+1-9 para navegação rápida');