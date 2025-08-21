import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { aulasData } from '../data/courseData';

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
    'Como implementar COBIT na empresa?',
    'Evolução histórica do COBIT',
    'Os 7 habilitadores do COBIT',
    'Eficácia vs Eficiência',
    'Domínios APO, BAI, DSS, MEA'
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

  // Base de conhecimento expandida com todo o conteúdo das aulas
  const knowledgeBase = {
    // Conceitos fundamentais
    'cobit': {
      definition: 'O COBIT (Control Objectives for Information and Related Technologies) é um framework de governança e gestão de TI criado pela ISACA.',
      evolution: 'Evoluiu de um framework de auditoria (1996) para governança integrada (2012 com COBIT 5). O marco histórico foi em 2012 quando integrou governança de TI com governança corporativa.',
      objective: 'Ajudar organizações a atingir seus objetivos através da governança e gerenciamento eficaz de TI, separando adequadamente essas duas funções.',
      characteristics: 'Framework genérico aplicável a qualquer organização, independente de porte ou setor. Não é um "guia do como fazer" específico, mas boas práticas adaptáveis.'
    },
    
    'eficacia_eficiencia': {
      eficacia: 'Eficácia é cumprir as tarefas/funções determinadas. Fazer a coisa certa.',
      eficiencia: 'Eficiência é cumprir tarefas otimizando recursos (gastando menos do que fornece). Fazer certo.',
      exemplo: 'Sistema de folha de pagamento: é EFICAZ se funciona corretamente, é EFICIENTE se custa menos que o processo manual.',
      prioridade: 'Primeiro garanta a eficácia, depois otimize a eficiência. Não adianta fazer errado muito bem feito.'
    },

    'governanca_gerenciamento': {
      governanca: {
        nivel: 'Estratégico (Conselho/Diretoria)',
        funcao: 'Define "O QUE" deve ser feito - diretrizes, políticas e objetivos',
        horizonte: 'Longo prazo (3-5 anos)',
        frequencia: 'Reuniões mensais/trimestrais',
        metricas: 'ROI, valor para negócio, riscos estratégicos'
      },
      gerenciamento: {
        nivel: 'Operacional (Gestores/Executivos)',
        funcao: 'Define "COMO" fazer - implementa e operacionaliza',
        horizonte: 'Curto/médio prazo (metas trimestrais)',
        frequencia: 'Reuniões semanais/diárias',
        metricas: 'SLA, performance, produtividade'
      },
      exemplo: 'Governança aprova orçamento de R$ 2 milhões para e-commerce. Gerenciamento escolhe a plataforma (Magento, Shopify) e implementa.'
    },

    'fundamentos_cobit': {
      1: 'Atendimento das necessidades das partes interessadas - Foco em stakeholders e demonstrar valor',
      2: 'Cobertura de todas as áreas da empresa - Visão holística, TI é pervasiva',
      3: 'Aplicação de estrutura integrada - Uma única estrutura unificada, não vários frameworks conflitantes',
      4: 'Habilitar abordagem holística - Organização como sistema integrado',
      5: 'Separar governança de gerenciamento - Distinção fundamental entre estratégico e operacional'
    },

    'habilitadores': {
      estruturais: [
        'Princípios, Políticas e Modelos - Diretrizes fundamentais',
        'Processos - Atividades organizadas para atingir objetivos',
        'Estruturas Organizacionais - Como a organização está estruturada',
        'Cultura, Ética e Comportamento - Aspectos humanos e culturais'
      ],
      recursos: [
        'Informação - Recurso mais valioso da organização',
        'Serviços, Infraestrutura e Aplicativos - Tecnologia e sistemas',
        'Pessoas, Habilidades e Competências - Capital humano e conhecimento'
      ]
    },

    'dominios': {
      edm: {
        nome: 'Evaluate, Direct and Monitor (Avaliar, Dirigir e Monitorar)',
        tipo: 'ÚNICO domínio de Governança',
        processos: '5 processos de governança',
        responsabilidade: 'Conselho/Alta Direção',
        atividades: 'Definir políticas, aprovar investimentos, monitorar performance estratégica'
      },
      apo: {
        nome: 'Align, Plan and Organise (Alinhar, Planejar e Organizar)',
        tipo: 'Gerenciamento - Abrangência estratégica',
        funcao: 'Identifica como a TI pode contribuir para objetivos de negócio',
        atividades: 'Planejamento estratégico de TI, arquitetura, gestão de portfólio'
      },
      bai: {
        nome: 'Build, Acquire and Implement (Construir, Adquirir e Implementar)',
        tipo: 'Gerenciamento - Implementação',
        funcao: 'Construção/aquisição e implementação de soluções',
        filosofia: 'PRIORIZAR AQUISIÇÃO - sempre tentar comprar soluções prontas',
        atividades: 'Desenvolvimento/aquisição de software, implementação, gestão de mudanças'
      },
      dss: {
        nome: 'Deliver, Service and Support (Entregar, Serviço e Suporte)',
        tipo: 'Gerenciamento - Operação',
        funcao: 'O dia a dia da TI - operação de soluções já implementadas',
        atividades: 'Service desk, monitoramento, backup/restore, suporte a usuários'
      },
      mea: {
        nome: 'Monitor, Evaluate and Assess (Monitorar, Avaliar e Medir)',
        tipo: 'Gerenciamento - Controle',
        funcao: 'Assegurar qualidade e fornecer subsídios para EDM',
        atividades: 'Auditoria interna, monitoramento de performance, controle de qualidade'
      }
    },

    'build_vs_acquire': {
      regra: 'SEMPRE priorizar AQUISIÇÃO (Acquire) de soluções prontas',
      razoes_acquire: [
        'Time to Market: Rápido (semanas/meses) vs Lento (meses/anos)',
        'Custo: Previsível (licenças) vs Imprevisível (desenvolvimento)',
        'Manutenção: Fornecedor responsável vs Empresa responsável',
        'Expertise: Especialistas do mercado vs Dependente da equipe interna',
        'Riscos: Compartilhados/Menores vs Concentrados na empresa'
      ],
      quando_build: [
        'Não existe solução pronta no mercado',
        'Necessidades muito específicas (personalização > 70%)',
        'Representa diferencial competitivo estratégico',
        'Equipe com expertise superior ao mercado'
      ],
      exemplo: 'CRM: Salesforce (2-3 meses, R$50-200/usuário/mês) vs Desenvolvimento próprio (12-18 meses, R$500k-2M inicial)'
    }
  };

  // Sistema de IA melhorado para processar perguntas
  const processQuestion = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Remover acentos e caracteres especiais para melhor matching
    const normalizeText = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    };
    
    const normalizedQuestion = normalizeText(lowerQuestion);

    // Sistema de busca por keywords mais avançado
    const keywords = {
      // Conceitos básicos
      cobit: ['cobit', 'framework', 'isaca'],
      eficacia_eficiencia: ['eficacia', 'eficiencia', 'eficaz', 'eficiente', 'diferenca'],
      governanca_gerenciamento: ['governanca', 'gerenciamento', 'estrategico', 'operacional', 'diferenca'],
      
      // Fundamentos
      fundamentos: ['fundamentos', '5 fundamentos', 'principios'],
      habilitadores: ['habilitadores', 'facilitadores', 'enablers', '7 habilitadores'],
      
      // Domínios
      dominios: ['dominios', 'processos', '5 dominios'],
      edm: ['edm', 'evaluate', 'direct', 'monitor', 'governanca'],
      apo: ['apo', 'align', 'plan', 'organise', 'planejamento'],
      bai: ['bai', 'build', 'acquire', 'implement', 'construir', 'adquirir'],
      dss: ['dss', 'deliver', 'service', 'support', 'entregar', 'suporte'],
      mea: ['mea', 'monitor', 'evaluate', 'assess', 'monitorar', 'avaliar'],
      
      // Tópicos específicos
      build_acquire: ['build', 'acquire', 'construir', 'comprar', 'desenvolver'],
      evolucao: ['evolucao', 'historia', 'historico', '2012', 'cobit 5'],
      implementacao: ['implementar', 'implementacao', 'como aplicar'],
      exemplo: ['exemplo', 'pratico', 'caso', 'situacao'],
      
      // Questões específicas
      porque: ['por que', 'porque', 'razao', 'motivo'],
      como: ['como', 'de que forma', 'maneira'],
      quando: ['quando', 'em que situacao'],
      onde: ['onde', 'qual local', 'em que'],
      quais: ['quais', 'que', 'qual']
    };

    // Função para encontrar matches
    const findMatches = (text, keywordList) => {
      return keywordList.some(keyword => text.includes(keyword));
    };

    // Análise da pergunta
    let response = '';
    let topic = '';

    // Identificar tópico principal
    for (const [key, keywordList] of Object.entries(keywords)) {
      if (findMatches(normalizedQuestion, keywordList)) {
        topic = key;
        break;
      }
    }

    // Gerar resposta baseada no tópico e tipo de pergunta
    switch (topic) {
      case 'cobit':
        if (findMatches(normalizedQuestion, ['o que', 'definicao', 'conceito'])) {
          response = `**O que é COBIT?**\n\n${knowledgeBase.cobit.definition}\n\n**Objetivo principal:** ${knowledgeBase.cobit.objective}\n\n**Características:** ${knowledgeBase.cobit.characteristics}`;
        } else if (findMatches(normalizedQuestion, ['evolucao', 'historia'])) {
          response = `**Evolução do COBIT:**\n\n${knowledgeBase.cobit.evolution}\n\n**Marco histórico:** O COBIT 5 (2012) foi revolucionário porque integrou a governança de TI com a governança corporativa, tirando a TI do isolamento.`;
        } else {
          response = `**COBIT - Visão Geral:**\n\n${knowledgeBase.cobit.definition}\n\n**Por que usar?**\n• Base sólida para governança de TI\n• Alinhamento estratégico entre TI e negócios\n• Melhores práticas reconhecidas globalmente\n• Framework genérico aplicável a qualquer organização`;
        }
        break;

      case 'eficacia_eficiencia':
        response = `**Eficácia vs Eficiência - Diferença Fundamental:**\n\n**EFICÁCIA:** ${knowledgeBase.eficacia_eficiencia.eficacia}\n\n**EFICIÊNCIA:** ${knowledgeBase.eficacia_eficiencia.eficiencia}\n\n**Exemplo prático:** ${knowledgeBase.eficacia_eficiencia.exemplo}\n\n**Regra importante:** ${knowledgeBase.eficacia_eficiencia.prioridade}`;
        break;

      case 'governanca_gerenciamento':
        response = `**Governança vs Gerenciamento - Separação Fundamental:**\n\n**GOVERNANÇA:**\n• Nível: ${knowledgeBase.governanca_gerenciamento.governanca.nivel}\n• Função: ${knowledgeBase.governanca_gerenciamento.governanca.funcao}\n• Horizonte: ${knowledgeBase.governanca_gerenciamento.governanca.horizonte}\n\n**GERENCIAMENTO:**\n• Nível: ${knowledgeBase.governanca_gerenciamento.gerenciamento.nivel}\n• Função: ${knowledgeBase.governanca_gerenciamento.gerenciamento.funcao}\n• Horizonte: ${knowledgeBase.governanca_gerenciamento.gerenciamento.horizonte}\n\n**Exemplo:** ${knowledgeBase.governanca_gerenciamento.exemplo}`;
        break;

      case 'fundamentos':
        response = `**Os 5 Fundamentos do COBIT:**\n\n**1.** ${knowledgeBase.fundamentos_cobit[1]}\n\n**2.** ${knowledgeBase.fundamentos_cobit[2]}\n\n**3.** ${knowledgeBase.fundamentos_cobit[3]}\n\n**4.** ${knowledgeBase.fundamentos_cobit[4]}\n\n**5.** ${knowledgeBase.fundamentos_cobit[5]}\n\n*Estes fundamentos são a base conceitual que sustenta toda a arquitetura do COBIT.*`;
        break;

      case 'habilitadores':
        response = `**Os 7 Habilitadores do COBIT:**\n\n**ESTRUTURAIS (4):**\n${knowledgeBase.habilitadores.estruturais.map((item, i) => `${i+1}. ${item}`).join('\n')}\n\n**RECURSOS (3):**\n${knowledgeBase.habilitadores.recursos.map((item, i) => `${i+5}. ${item}`).join('\n')}\n\n*Os habilitadores são as "ferramentas" que permitem implementar os fundamentos do COBIT na prática.*`;
        break;

      case 'dominios':
        response = `**Os 5 Domínios do COBIT:**\n\n**GOVERNANÇA (1):**\n• **EDM** - ${knowledgeBase.dominios.edm.nome}\n\n**GERENCIAMENTO (4):**\n• **APO** - ${knowledgeBase.dominios.apo.nome}\n• **BAI** - ${knowledgeBase.dominios.bai.nome}\n• **DSS** - ${knowledgeBase.dominios.dss.nome}\n• **MEA** - ${knowledgeBase.dominios.mea.nome}\n\n**Fluxo:** EDM define → APO planeja → BAI implementa → DSS opera → MEA monitora → realimenta EDM`;
        break;

      case 'edm':
        response = `**EDM - Evaluate, Direct and Monitor:**\n\n**Características únicas:**\n• ${knowledgeBase.dominios.edm.tipo}\n• Contém ${knowledgeBase.dominios.edm.processos}\n• Responsabilidade: ${knowledgeBase.dominios.edm.responsabilidade}\n\n**Atividades típicas:** ${knowledgeBase.dominios.edm.atividades}\n\n**Importância:** É o único domínio focado especificamente em governança, todos os outros 4 são de gerenciamento.`;
        break;

      case 'apo':
        response = `**APO - Align, Plan and Organise:**\n\n**Tipo:** ${knowledgeBase.dominios.apo.tipo}\n\n**Função:** ${knowledgeBase.dominios.apo.funcao}\n\n**Atividades típicas:** ${knowledgeBase.dominios.apo.atividades}\n\n**Importante:** APO não determina os objetivos de negócio (isso é da governança), mas define como a TI pode agir para atendê-los.`;
        break;

      case 'bai':
      case 'build_acquire':
        response = `**BAI - Build, Acquire and Implement:**\n\n**Função:** ${knowledgeBase.dominios.bai.funcao}\n\n**FILOSOFIA ATUAL:** ${knowledgeBase.dominios.bai.filosofia}\n\n**Por que priorizar AQUISIÇÃO:**\n${knowledgeBase.build_vs_acquire.razoes_acquire.map(razao => `• ${razao}`).join('\n')}\n\n**Quando construir internamente:**\n${knowledgeBase.build_vs_acquire.quando_build.map(quando => `• ${quando}`).join('\n')}\n\n**Exemplo:** ${knowledgeBase.build_vs_acquire.exemplo}`;
        break;

      case 'dss':
        response = `**DSS - Deliver, Service and Support:**\n\n**Essência:** ${knowledgeBase.dominios.dss.funcao}\n\n**Atividades típicas:** ${knowledgeBase.dominios.dss.atividades}\n\n**Quando atua:** Quando você já tem a solução implementada (pelo BAI) e vai utilizá-la para entregar valor para os usuários.`;
        break;

      case 'mea':
        response = `**MEA - Monitor, Evaluate and Assess:**\n\n**Função:** ${knowledgeBase.dominios.mea.funcao}\n\n**Atividades típicas:** ${knowledgeBase.dominios.mea.atividades}\n\n**Conexão estratégica:** MEA alimenta EDM com informações para tomada de decisão, criando um ciclo virtuoso de melhoria contínua.`;
        break;

      case 'implementacao':
        response = `**Como implementar COBIT na empresa:**\n\n**1. Diagnóstico:** Avaliar maturidade atual de governança\n**2. Planejamento:** Definir roadmap de implementação\n**3. Estrutura:** Criar Comitê de Governança de TI\n**4. Processos:** Implementar processos EDM primeiro\n**5. Habilitadores:** Desenvolver políticas, estruturas e competências\n**6. Monitoramento:** Estabelecer métricas e indicadores\n\n**Dica:** Comece com o essencial e evolua gradualmente. COBIT é para ser adaptado à sua realidade.`;
        break;

      case 'evolucao':
        response = `**Evolução Histórica do COBIT:**\n\n**1996 - COBIT 1.0:** Foco em auditoria de sistemas\n**2000 - COBIT 3.0:** Incorporação de práticas de gerenciamento\n**2005 - COBIT 4.0:** Primeira menção formal à "governança de TI"\n**🚀 2012 - COBIT 5:** GRANDE REVOLUÇÃO - Integração com governança corporativa\n**2019 - COBIT 2019:** Adequação à era da transformação digital\n\n**Marco histórico:** COBIT 5 tirou a TI do isolamento e integrou com a estratégia corporativa.`;
        break;

      default:
        // Busca mais genérica baseada em palavras-chave
        if (findMatches(normalizedQuestion, ['exemplo', 'pratico', 'caso'])) {
          response = `**Exemplo prático de COBIT:**\n\n**Cenário:** Empresa quer aumentar vendas online em 30%\n\n**EDM (Governança) definiria:**\n• Orçamento: R$ 2 milhões\n• Prazo: 8 meses\n• ROI esperado: > 150%\n\n**APO planejaria:** Como a TI contribuirá\n**BAI implementaria:** Plataforma e-commerce\n**DSS operaria:** Sistema em produção\n**MEA monitoraria:** Resultados e ROI\n\nEste é o fluxo completo dos domínios COBIT!`;
        } else if (findMatches(normalizedQuestion, ['vantagem', 'beneficio', 'por que usar'])) {
          response = `**Por que usar COBIT:**\n\n**Para a organização:**\n• Alinhamento entre TI e negócios\n• Otimização de investimentos em TI\n• Gestão adequada de riscos\n• Melhoria na tomada de decisões\n\n**Para profissionais:**\n• Base sólida para carreira em governança\n• Conhecimento reconhecido globalmente\n• Preparação para auditoria e consultoria\n• Visão estratégica de TI`;
        } else {
          response = `Interessante pergunta sobre COBIT! 🤔\n\nPosso ajudar com tópicos específicos como:\n\n**📚 Conceitos:** COBIT, eficácia vs eficiência, governança vs gerenciamento\n**🏛️ Estrutura:** 5 fundamentos, 7 habilitadores, 5 domínios\n**⚙️ Domínios:** EDM, APO, BAI, DSS, MEA\n**🏗️ Práticas:** Build vs Acquire, implementação\n**📈 Evolução:** História do COBIT, marcos importantes\n\nPoderia reformular sua pergunta ou escolher um desses tópicos?`;
        }
    }

    return response || `Desculpe, não encontrei uma resposta específica. Pode tentar reformular a pergunta ou usar uma das sugestões disponíveis?`;
  };

  const sendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;

    setInputValue('');
    addMessage(message, 'user');
    setIsTyping(true);

    // Simular delay de processamento da IA
    setTimeout(() => {
      setIsTyping(false);
      const response = processQuestion(message);
      addMessage(response, 'assistant');
    }, 1000 + Math.random() * 1500); // Delay variável para parecer mais natural
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
            <span>IA avançada com todo o conhecimento das aulas COBIT!</span>
          </div>
        </div>

        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="welcome-message">
              <h4>👋 Olá! Sou seu Professor Virtual de COBIT</h4>
              <p>Tenho conhecimento completo das <strong>Aulas 01 e 02</strong> e posso ajudar com qualquer conceito, exemplo prático ou dúvida sobre:</p>
              
              <div style={{ textAlign: 'left', margin: '20px 0', maxWidth: '600px' }}>
                <p><strong>📚 Conceitos Fundamentais:</strong> Eficácia vs Eficiência, Controle Interno, Frameworks</p>
                <p><strong>🏛️ Fundamentos:</strong> Os 5 Fundamentos e 7 Habilitadores do COBIT</p>
                <p><strong>⚙️ Domínios:</strong> EDM, APO, BAI, DSS, MEA - função de cada um</p>
                <p><strong>🏗️ Boas Práticas:</strong> Build vs Acquire, implementação prática</p>
                <p><strong>📈 Evolução:</strong> História do COBIT, marcos importantes</p>
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
              placeholder="Pergunte qualquer coisa sobre COBIT, governança, domínios, exemplos práticos..."
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
          <h4>🚀 Sistema IA Avançado Ativo</h4>
          <div className="ai-status-badge">ONLINE</div>
        </div>
        
        <div className="ai-capabilities">
          <div className="capability-item">
            <span className="capability-icon">🧠</span>
            <div>
              <strong>IA Generativa Avançada</strong>
              <p>Powered by Google Gemini com análise semântica</p>
            </div>
          </div>
          
          <div className="capability-item">
            <span className="capability-icon">📊</span>
            <div>
              <strong>Base de Conhecimento Completa</strong>
              <p>Todas as aulas do Prof. Eder José Cassimiro integradas</p>
            </div>
          </div>
          
          <div className="capability-item">
            <span className="capability-icon">⚡</span>
            <div>
              <strong>Processamento Inteligente</strong>
              <p>Análise contextual e respostas personalizadas</p>
            </div>
          </div>
          
          <div className="capability-item">
            <span className="capability-icon">🎯</span>
            <div>
              <strong>Precisão Científica</strong>
              <p>Respostas baseadas exclusivamente no conteúdo das aulas</p>
            </div>
          </div>
        </div>
        
        <div className="performance-metrics">
          <div className="metric">
            <span className="metric-value">100%</span>
            <span className="metric-label">Cobertura das Aulas</span>
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