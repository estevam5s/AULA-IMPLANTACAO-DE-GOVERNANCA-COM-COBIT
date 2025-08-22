import React, { useState, useEffect, useRef } from 'react';
import { 
  aulasData, 
  COURSE_CONTEXT, 
  practicalExamples, 
  GEMINI_API_KEY,
  GEMINI_API_URL
} from '../data/courseData';

const Chatbot = ({ className }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const chatSuggestions = [
    'O que é Governança de TI?',
    'Quais são os 5 princípios da Governança de TI?',
    'Diferença entre COBIT, ITIL e PMBOK',
    'O que é a norma ISO 38500?',
    'Benefícios da Governança de TI',
    'Estruturas de decisão na Governança',
    'Como implementar ITIL?',
    'Componentes da ISO 38500',
    'Frameworks de Governança',
    'ITIL vs outros frameworks'
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

  // Sistema IA para ITIL e Governança
  const processQuestion = async (question) => {
    console.log('🔍 Processando pergunta sobre Governança de TI/ITIL:', question);
    
    try {
      const aiResponse = await callGeminiAPI(question);
      console.log('✨ Resposta da IA:', aiResponse ? 'Sucesso' : 'Falhou');
      
      if (aiResponse && aiResponse.length > 50) {
        return aiResponse;
      }
      
      throw new Error('Resposta da IA insuficiente');
      
    } catch (error) {
      console.error('⚠️ Erro na IA, ativando sistema backup:', error);
      return generateBackupResponse(question);
    }
  };

  const callGeminiAPI = async (message) => {
    const enhancedContext = COURSE_CONTEXT + `

CONTEÚDO ADICIONAL DAS AULAS:
${Object.values(aulasData).map(aula => {
  const textContent = aula.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return `${aula.title}:\n${textContent.substring(0, 2000)}...`;
}).join('\n\n')}

EXEMPLOS PRÁTICOS:
${JSON.stringify(practicalExamples, null, 2)}

PERGUNTA DO USUÁRIO: "${message}"

Responda de forma didática, clara e sempre relacionada ao conteúdo do curso de Governança de TI com ITIL. Use exemplos práticos quando relevante.`;

    const requestBody = {
      contents: [{
        parts: [{
          text: enhancedContext
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.9,
        maxOutputTokens: 1500,
      }
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Resposta inválida da API');
    }
  };

  const generateBackupResponse = (question) => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes('governança') || lowerQ.includes('governance')) {
      return `**🏛️ Governança de TI - Sistema Backup Ativo**

A Governança de TI tem como objetivo principal **proteger o mercado de capitais e seus investidores**, garantindo que as informações estejam disponíveis para suporte à Governança Corporativa.

**🎯 5 Princípios Fundamentais:**
1. **Gestão de Riscos** - Gerir riscos inerentes às atividades
2. **Entrega de Valor** - Garantir benefícios em todos os setores
3. **Alinhamento Estratégico** - Alinhar TI aos objetivos empresariais
4. **Gestão de Recursos** - Gerenciar recursos de forma eficaz
5. **Mensuração de Desempenho** - Medir projetos e processos

A Governança de TI está **dentro** da Governança Corporativa, não sendo elemento isolado.`;
    }
    
    if (lowerQ.includes('itil')) {
      return `**⚙️ ITIL - Information Technology Infrastructure Library**

ITIL é um conjunto de práticas para gerenciamento de serviços de TI que alinha os serviços com as necessidades do negócio.

**📊 Características Principais:**
- Mais de **300 práticas de gestão** documentadas
- Framework voltado para gestão e melhoria de processos
- Foco na melhoria contínua dos serviços
- Abordagem baseada em valor para o cliente

**🎯 Objetivo:** Gerenciar serviços de TI de forma eficiente, garantindo que atendam às necessidades do negócio com qualidade e eficiência.`;
    }
    
    if (lowerQ.includes('iso') || lowerQ.includes('38500')) {
      return `**📋 NBR ISO/IEC 38500 - Governança Corporativa da TI**

Norma que fornece estrutura de princípios para dirigentes avaliarem, gerenciarem e monitorarem o uso da TI.

**🔧 6 Componentes Principais:**
1. **🔒 Responsabilidade** - Definição clara de responsabilidades
2. **🎯 Estratégia** - Alinhamento da TI com estratégia organizacional
3. **🛒 Aquisição** - Processos de aquisição e desenvolvimento
4. **📊 Desempenho** - Monitoramento e avaliação de performance
5. **✅ Conformidade** - Aderência a leis e regulamentos
6. **👥 Comportamento Humano** - Aspectos humanos e culturais`;
    }
    
    if (lowerQ.includes('framework') || lowerQ.includes('cobit') || lowerQ.includes('pmbok')) {
      return `**🔧 3 Principais Frameworks de Governança de TI**

**COBIT** - Control Objectives for Information and Related Technology
- Modelo de governança mais utilizado
- Foco em controle executivo e auditoria
- Técnicas de controle e gerenciamento

**ITIL** - Information Technology Infrastructure Library
- Conjunto de práticas para gerenciamento de serviços
- Mais de 300 políticas de gestão
- Voltado para gestão e melhoria de processos

**PMBOK** - Project Management Body of Knowledge
- Gerenciamento de projetos e melhores práticas
- Foco em gerenciamento de risco
- Orientado para desenvolvimento e profissionais`;
    }
    
    if (lowerQ.includes('decisão') || lowerQ.includes('estrutura')) {
      return `**🏛️ 6 Estruturas de Decisão na Governança de TI**

1. **🏰 Monarquia de Negócio** - Gerentes sênior de unidades decidem
2. **💻 Monarquia de TI** - Profissionais de TI centralizam decisões
3. **🏰 Feudalismo** - Cada unidade decide independentemente
4. **🤝 Federalismo** - Combinação sede + unidades de negócio
5. **👥 Duopólio de TI** - TI + unidade de negócio juntos
6. **🔀 Anarquia** - Decisões ad hoc por indivíduos/grupos

Cada estrutura tem aplicação específica dependendo do contexto organizacional.`;
    }
    
    return `**🤖 Assistente Governança de TI - Sistema Backup**

Posso ajudar com informações sobre:

**📚 Tópicos Disponíveis:**
- **Governança de TI** - Princípios, benefícios, objetivos
- **ITIL Framework** - Práticas, gerenciamento de serviços
- **ISO 38500** - Norma, componentes, implementação
- **Frameworks** - COBIT, ITIL, PMBOK comparações
- **Estruturas de Decisão** - 6 modelos organizacionais
- **Benefícios** - Produtividade, qualidade, custos, flexibilidade

🎯 **Reformule sua pergunta** especificando um destes tópicos para resposta detalhada!`;
  };

  const sendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;

    setInputValue('');
    addMessage(message, 'user');
    setIsTyping(true);

    try {
      const response = await processQuestion(message);
      setIsTyping(false);
      addMessage(response, 'assistant');
    } catch (error) {
      console.error('❌ Erro crítico no processamento:', error);
      setIsTyping(false);
      addMessage(
        '⚠️ **Sistema em Manutenção**\n\nOcorreu um erro inesperado. Tente novamente ou reformule sua pergunta sobre Governança de TI.\n\n*Sistema de backup ativo!*',
        'assistant',
        true
      );
    }
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
      <div className="section-title">🤖 Assistente de IA - Professor Virtual ITIL</div>
      
      <div className="chat-container">
        <div className="chat-header">
          <h3>Assistant Virtual de Governança de TI</h3>
          <div className="chat-status">
            <span>IA especializada em Governança de TI e ITIL!</span>
          </div>
        </div>

        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="welcome-message">
              <h4>👋 Olá! Sou seu Professor Virtual de Governança de TI</h4>
              <p>Tenho conhecimento completo sobre <strong>Governança de TI com ITIL</strong> e posso ajudar com qualquer conceito, exemplo prático ou dúvida sobre:</p>
              
              <div style={{ textAlign: 'left', margin: '20px 0', maxWidth: '600px' }}>
                <p><strong>🏛️ Governança de TI:</strong> 5 Princípios, 4 Benefícios, estruturas de decisão</p>
                <p><strong>⚙️ ITIL Framework:</strong> 300+ práticas, gerenciamento de serviços</p>
                <p><strong>📋 ISO 38500:</strong> 6 componentes, implementação prática</p>
                <p><strong>🔧 Frameworks:</strong> COBIT, ITIL, PMBOK - comparações e aplicações</p>
                <p><strong>📈 Implementação:</strong> Casos práticos, estruturas organizacionais</p>
              </div>

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
              placeholder="Pergunte sobre Governança de TI, ITIL, ISO 38500, frameworks..."
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

      <div className="ai-info-panel">
        <div className="ai-panel-header">
          <h4>🚀 Sistema IA Especializado</h4>
          <div className="ai-status-badge">ONLINE</div>
        </div>
        
        <div className="ai-capabilities">
          <div className="capability-item">
            <span className="capability-icon">🏛️</span>
            <div>
              <strong>Governança de TI Completa</strong>
              <p>5 Princípios, 4 Benefícios, estruturas de decisão</p>
            </div>
          </div>
          
          <div className="capability-item">
            <span className="capability-icon">⚙️</span>
            <div>
              <strong>ITIL Framework Expert</strong>
              <p>300+ práticas de gerenciamento de serviços</p>
            </div>
          </div>
          
          <div className="capability-item">
            <span className="capability-icon">📋</span>
            <div>
              <strong>ISO 38500 Specialist</strong>
              <p>6 componentes da norma internacional</p>
            </div>
          </div>
          
          <div className="capability-item">
            <span className="capability-icon">🔧</span>
            <div>
              <strong>Frameworks Comparativos</strong>
              <p>COBIT, ITIL, PMBOK - diferenças e aplicações</p>
            </div>
          </div>
        </div>
        
        <div className="performance-metrics">
          <div className="metric">
            <span className="metric-value">100%</span>
            <span className="metric-label">Cobertura ITIL</span>
          </div>
          <div className="metric">
            <span className="metric-value">AI+</span>
            <span className="metric-label">Tecnologia</span>
          </div>
          <div className="metric">
            <span className="metric-value">24/7</span>
            <span className="metric-label">Disponibilidade</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;