import React, { useState, useEffect, useRef } from 'react';

const Chatbot = ({ className }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const chatSuggestions = [
    'O que é COBIT?',
    'Diferença entre governança e gerenciamento',
    'Explique os 5 fundamentos do COBIT',
    'O que significa EDM no COBIT?',
    'Build vs Acquire - quando usar?',
    'Como implementar COBIT na empresa?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatMessage = (content) => {
    let formatted = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace;">$1</code>')
      .replace(/\n/g, '<br>')
      .replace(/https?:\/\/[^\s]+/g, '<a href="$&" target="_blank" style="color: #3498db;">$&</a>');

    return formatted;
  };

  const addMessage = (content, sender, isError = false) => {
    const newMessage = {
      id: Date.now(),
      content,
      sender,
      timestamp: new Date().toLocaleTimeString(),
      isError
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;

    setInputValue('');
    addMessage(message, 'user');
    setIsTyping(true);

    // Simular resposta do chatbot (substitua pela integração real da API)
    setTimeout(() => {
      setIsTyping(false);
      
      // Resposta simulada baseada no conteúdo COBIT
      let response = '';
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('cobit')) {
        response = 'O COBIT (Control Objectives for Information and Related Technologies) é um framework de governança e gestão de TI que ajuda empresas a atingir seus objetivos através de governança eficaz. É aplicável a organizações de qualquer porte e natureza.';
      } else if (lowerMessage.includes('governança') || lowerMessage.includes('gerenciamento')) {
        response = 'A principal diferença é que **Governança** atua no nível estratégico (define o "que" fazer), enquanto **Gerenciamento** atua no nível operacional (define "como" fazer). A governança estabelece diretrizes e o gerenciamento as implementa.';
      } else if (lowerMessage.includes('fundamentos')) {
        response = 'Os 5 Fundamentos do COBIT são:\n1. Atendimento das necessidades das partes interessadas\n2. Cobertura de todas as áreas da empresa\n3. Aplicação de estrutura integrada\n4. Habilitar abordagem holística\n5. Separar governança de gerenciamento';
      } else if (lowerMessage.includes('edm')) {
        response = 'EDM significa **Evaluate, Direct and Monitor** (Avaliar, Dirigir e Monitorar). É o único domínio do COBIT focado exclusivamente em governança, contendo 5 processos de governança corporativa de TI.';
      } else if (lowerMessage.includes('build') || lowerMessage.includes('acquire')) {
        response = 'A regra atual é **priorizar aquisição** (Acquire) de soluções prontas do mercado com mínima personalização. Construir (Build) internamente só quando não existe solução no mercado ou representa diferencial competitivo estratégico.';
      } else {
        response = 'Interessante pergunta sobre COBIT! Posso ajudar com conceitos específicos como os 5 fundamentos, os domínios (EDM, APO, BAI, DSS, MEA), diferenças entre governança e gerenciamento, ou qualquer outro tópico do curso.';
      }
      
      addMessage(response, 'assistant');
    }, 1500);
  };

  const sendSuggestion = (suggestion) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
  };

  return (
    <div className={className || "content-section"}>
      <div className="section-title">🤖 Assistente de IA - Professor Virtual COBIT</div>
      
      <div className="chat-container">
        <div className="chat-header">
          <h3>Assistant Virtual de Governança</h3>
          <div className="chat-status">
            <span>Pronto para ajudar com suas dúvidas sobre COBIT!</span>
          </div>
        </div>

        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="welcome-message">
              <h4>👋 Olá! Sou seu Assistant Virtual de COBIT</h4>
              <p>Estou aqui para ajudar com dúvidas sobre <strong>Implantação de Governança com COBIT</strong>. Posso explicar conceitos, ajudar com exercícios, esclarecer sobre as aulas e muito mais!</p>
              <div className="chat-suggestions">
                {chatSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion-chip"
                    onClick={() => sendSuggestion(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-avatar">
                  {message.sender === 'user' ? '👤' : '🤖'}
                </div>
                <div>
                  <div
                    className={`message-content ${message.isError ? 'error-message' : ''}`}
                    dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                  />
                  <div className="message-time">{message.timestamp}</div>
                </div>
              </div>
            ))
          )}

          {isTyping && (
            <div className="typing-indicator" style={{ display: 'block' }}>
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <textarea
              ref={inputRef}
              className="chat-input"
              placeholder="Digite sua pergunta sobre COBIT, governança, exercícios..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              rows="1"
            />
            <button
              className="chat-send-btn"
              onClick={sendMessage}
              disabled={!inputValue.trim() || isTyping}
            >
              <span>➤</span>
            </button>
          </div>
        </div>
      </div>

      <div className="highlight-box">
        <h4>🎯 Como posso te ajudar?</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '15px' }}>
          <div style={{ padding: '15px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '10px' }}>
            <strong>📚 Explicar Conceitos</strong><br />
            <small>COBIT, governança, domínios, processos</small>
          </div>
          <div style={{ padding: '15px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '10px' }}>
            <strong>🏢 Casos Práticos</strong><br />
            <small>Implementação em organizações reais</small>
          </div>
          <div style={{ padding: '15px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '10px' }}>
            <strong>📝 Exercícios</strong><br />
            <small>Dicas e orientações para exercícios</small>
          </div>
          <div style={{ padding: '15px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '10px' }}>
            <strong>📅 Informações</strong><br />
            <small>Cronograma, avaliações, prazos</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;