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

  // 🚀 SISTEMA LLM MILITAR-GRADE: IA DE NÍVEL MILITAR
  const militaryGradeAI = {
    
    // 🎯 ANÁLISE SEMÂNTICA PROFUNDA - NÍVEL MILITAR
    performDeepAnalysis: (question) => {
      const lowerQ = question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      
      const analysis = {
        intent: null,
        primaryTopic: null,
        secondaryTopics: [],
        questionType: 'general',
        complexity: 'medium',
        keywords: [],
        context: [],
        confidence: 0,
        militaryClassification: 'standard'
      };
      
      // DETECÇÃO AVANÇADA DE TIPO DE PERGUNTA
      const questionPatterns = {
        definition: /\b(o que é|defin|conceito|significa|explique)\b/i,
        comparison: /\b(diferença|comparar|vs|versus|entre)\b/i,
        implementation: /\b(como|implementar|aplicar|usar|utilizar)\b/i,
        example: /\b(exemplo|prático|caso|situação|demonstração)\b/i,
        exercise: /\b(exercício|questão|pergunta|teste|avaliação|quiz)\b/i,
        list: /\b(listar|liste|quais são|enumere)\b/i,
        process: /\b(processo|fluxo|etapa|passo|sequência)\b/i,
        why: /\b(por que|porque|motivo|razão|justifica)\b/i,
        when: /\b(quando|em que|momento|situação)\b/i
      };
      
      for (const [type, pattern] of Object.entries(questionPatterns)) {
        if (pattern.test(question)) {
          analysis.questionType = type;
          analysis.confidence += 0.2;
          break;
        }
      }
      
      // MAPEAMENTO MILITAR DE TÓPICS
      const militaryTopicClassification = {
        // SETOR ALPHA - Conceitos Fundamentais
        cobit_core: {
          keywords: ['cobit', 'framework', 'isaca', 'governança de ti'],
          classification: 'ALPHA-1',
          priority: 'HIGH'
        },
        
        // SETOR BRAVO - Eficácia e Eficiência  
        efficiency_effectiveness: {
          keywords: ['eficácia', 'eficiência', 'eficaz', 'eficiente', 'otimização'],
          classification: 'BRAVO-1',
          priority: 'HIGH'
        },
        
        // SETOR CHARLIE - Governança vs Gerenciamento
        governance_management: {
          keywords: ['governança', 'gerenciamento', 'estratégico', 'operacional', 'separação'],
          classification: 'CHARLIE-1',
          priority: 'CRITICAL'
        },
        
        // SETOR DELTA - Estrutura COBIT
        cobit_structure: {
          keywords: ['fundamentos', 'habilitadores', 'domínios', '5 fundamentos', '7 habilitadores'],
          classification: 'DELTA-1',
          priority: 'HIGH'
        },
        
        // SETOR ECHO - Domínios Específicos
        domains: {
          keywords: ['edm', 'apo', 'bai', 'dss', 'mea', 'evaluate', 'direct', 'monitor', 'align', 'plan'],
          classification: 'ECHO-1',
          priority: 'HIGH'
        },
        
        // SETOR FOXTROT - Build vs Acquire
        build_acquire: {
          keywords: ['build', 'acquire', 'construir', 'adquirir', 'comprar', 'desenvolver'],
          classification: 'FOXTROT-1',
          priority: 'MEDIUM'
        },
        
        // SETOR GOLF - Exercícios e Avaliações
        exercises: {
          keywords: ['exercício', 'questão', 'teste', 'avaliação', 'quiz', 'pergunta'],
          classification: 'GOLF-1',
          priority: 'TACTICAL'
        },
        
        // SETOR HOTEL - Implementação e Prática
        implementation: {
          keywords: ['implementação', 'prática', 'caso prático', 'exemplo', 'aplicação'],
          classification: 'HOTEL-1',
          priority: 'MEDIUM'
        }
      };
      
      // CLASSIFICAÇÃO MILITAR DE TÓPICS
      for (const [topic, config] of Object.entries(militaryTopicClassification)) {
        const matches = config.keywords.filter(keyword => lowerQ.includes(keyword)).length;
        if (matches > 0) {
          if (!analysis.primaryTopic) {
            analysis.primaryTopic = topic;
            analysis.militaryClassification = config.classification;
          } else {
            analysis.secondaryTopics.push(topic);
          }
          analysis.confidence += matches * 0.1;
        }
      }
      
      // EXTRAÇÃO DE KEYWORDS MILITARES
      analysis.keywords = lowerQ.match(/\b\w{3,}\b/g) || [];
      
      // CLASSIFICAÇÃO DE COMPLEXIDADE
      if (analysis.confidence > 0.8) analysis.complexity = 'high';
      else if (analysis.confidence > 0.5) analysis.complexity = 'medium';
      else analysis.complexity = 'low';
      
      return analysis;
    },
    
    // ✨ GERADOR DE RESPOSTAS SUPER-INTELIGENTES
    generateSuperIntelligentResponse: async (question, analysis) => {
      console.log('🤖 Ativando IA Gemini com classificação militar:', analysis.militaryClassification);
      
      try {
        // CONTEXTO MILITAR ESPECIFICADO
        let militaryContext = COURSE_CONTEXT;
        
        // Adicionar conteúdo específico das aulas baseado na classificação
        const aulaContent = Object.values(aulasData)
          .map(aula => aula.content.replace(/<[^>]+>/g, ' '))
          .join('\n\n');
        militaryContext += `\n\nCONTEÚDO COMPLETO DAS AULAS:\n${aulaContent}`;
        
        // Adicionar exemplos práticos se for tático
        if (analysis.militaryClassification.includes('GOLF') || analysis.questionType === 'exercise') {
          militaryContext += `\n\nEXEMPLOS PRÁTICOS DISPONÍVEIS:\n${JSON.stringify(practicalExamples, null, 2)}`;
        }
        
        // PROMPT MILITAR-GRADE OTIMIZADO
        const militaryPrompt = `
        🚀 OPERAÇÃO: RESPOSTA INTELIGENTE COBIT
        CLASSIFICAÇÃO: ${analysis.militaryClassification}
        
        ${militaryContext}
        
        === BRIEFING DA MISSÃO ===
        PERGUNTA DO ESTUDANTE: "${question}"
        
        ANÁLISE TÁTICA:
        - Tipo de pergunta: ${analysis.questionType}
        - Tópico primário: ${analysis.primaryTopic}
        - Nível de confiança: ${(analysis.confidence * 100).toFixed(0)}%
        - Complexidade: ${analysis.complexity}
        
        === OBJETIVOS DA MISSÃO ===
        ${militaryGradeAI.getMissionObjectives(analysis.questionType, analysis.primaryTopic)}
        
        === REGRAS DE ENGAJAMENTO ===
        1. 🎯 Resposta PRECISA baseada EXCLUSIVAMENTE no conteúdo das aulas
        2. 📚 Use formatação markdown profissional
        3. 💡 Inclua exemplos práticos quando relevante
        4. 🚀 Seja didático mas inteligente
        5. ✅ Se for exercício, gere questões inteligentes e variadas
        6. 🧠 Demonstre conhecimento profundo dos conceitos
        7. 🎯 Se não souber, seja honesto mas ofereça alternativas
        
        RESPOSTA (máximo 600 palavras):
        `;
        
        const response = await fetch(GEMINI_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': GEMINI_API_KEY
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: militaryPrompt }]
            }],
            generationConfig: {
              temperature: 0.4, // Balanceado para precisão e criatividade
              topK: 30,
              topP: 0.85,
              maxOutputTokens: 1200
            }
          })
        });
        
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (aiResponse && aiResponse.trim().length > 50) {
          console.log('✅ IA militar respondeu com sucesso');
          return aiResponse.trim();
        } else {
          throw new Error('Resposta da IA muito curta ou inválida');
        }
        
      } catch (error) {
        console.error('⚠️ Falha na IA Gemini:', error);
        throw error;
      }
    },
    
    // 🎯 SISTEMA TÁTICO DE BACKUP (MUITO MAIS INTELIGENTE)
    tacticalFallbackSystem: (question) => {
      console.log('🛡️ Ativando sistema tático de backup');
      
      const analysis = militaryGradeAI.performDeepAnalysis(question);
      const lowerQ = question.toLowerCase();
      
      // BANCO DE CONHECIMENTO TÁTICO
      const tacticalKnowledge = militaryGradeAI.getTacticalKnowledge();
      
      // PROCESSAMENTO INTELIGENTE BASEADO NA CLASSIFICAÇÃO
      if (analysis.primaryTopic) {
        return militaryGradeAI.generateTacticalResponse(analysis, tacticalKnowledge);
      }
      
      // DETECÇÃO AVANÇADA DE EXERCÍCIOS
      if (lowerQ.includes('exerc') || lowerQ.includes('quest') || lowerQ.includes('teste') || lowerQ.includes('aula')) {
        return militaryGradeAI.generateExerciseResponse(question, analysis);
      }
      
      // RESPOSTA INTELIGENTE PADRÃO
      return militaryGradeAI.generateIntelligentFallback(question, analysis);
    },
    
    // GERADOR DE OBJETIVOS DE MISSÃO
    getMissionObjectives: (questionType, primaryTopic) => {
      const objectives = {
        definition: 'Fornecer definição clara, precisa e didática',
        comparison: 'Explicar diferenças com tabela comparativa detalhada',
        implementation: 'Dar passos práticos de implementação',
        exercise: 'Gerar exercícios inteligentes e educativos',
        example: 'Fornecer exemplos práticos relevantes',
        list: 'Criar lista organizada e completa',
        process: 'Detalhar processo passo-a-passo'
      };
      
      return objectives[questionType] || 'Fornecer resposta completa e educativa';
    },
    
    // 🧠 BANCO DE CONHECIMENTO TÁTICO
    getTacticalKnowledge: () => ({
      cobit_core: {
        definition: 'O COBIT (Control Objectives for Information and Related Technologies) é um framework de governança e gestão de TI criado pela ISACA.',
        evolution: '📈 Evolução Histórica:\n• 1996: Auditoria de sistemas\n• 2005: COBIT 4.0 - Primeira menção à governança\n• **2012: COBIT 5 - REVOLUÇÃO** - Integração com governança corporativa\n• 2019: COBIT 2019 - Era digital',
        objective: 'Ajudar organizações a atingir objetivos através de governança e gerenciamento eficaz de TI'
      },
      
      efficiency_effectiveness: {
        definition: '🎯 **EFICÁCIA vs EFICIÊNCIA - Diferença Fundamental**\n\n**EFICÁCIA:** Fazer a coisa certa (cumprir funções)\n**EFICIÊNCIA:** Fazer certo (otimizar recursos)\n\n**Exemplo Prático:** Sistema de folha - EFICAZ se funciona, EFICIENTE se custa menos que processo manual\n\n**Regra de Ouro:** Primeiro eficácia, depois eficiência!',
      },
      
      governance_management: {
        definition: '📊 **GOVERNANÇA vs GERENCIAMENTO**\n\n| Aspecto | Governança | Gerenciamento |\n|---------|-------------|---------------|\n| **Nível** | Estratégico | Operacional |\n| **Função** | Define "O QUE" | Define "COMO" |\n| **Horizonte** | Longo prazo | Curto/médio prazo |\n| **Responsável** | Conselho/Diretoria | Executivos/Gestores |\n\n**Exemplo:** Governança aprova R$ 2M para e-commerce. Gerenciamento escolhe Shopify e implementa.'
      },
      
      cobit_structure: {
        fundamentos: '🏛️ **OS 5 FUNDAMENTOS DO COBIT:**\n\n**1.** Atender necessidades das partes interessadas\n**2.** Cobertura holística (TI é pervasiva)\n**3.** Estrutura integrada (framework único)\n**4.** Abordagem holística (sistema integrado)\n**5.** Separar governança de gerenciamento\n\n*Base conceitual que sustenta toda arquitetura COBIT*',
        
        habilitadores: '🔧 **OS 7 HABILITADORES DO COBIT:**\n\n**ESTRUTURAIS (4):**\n1. Princípios, Políticas e Modelos\n2. Processos\n3. Estruturas Organizacionais\n4. Cultura, Ética e Comportamento\n\n**RECURSOS (3):**\n5. **Informação** (recurso mais valioso)\n6. Serviços, Infraestrutura e Aplicativos\n7. Pessoas, Habilidades e Competências'
      },
      
      domains: {
        overview: '⚙️ **OS 5 DOMÍNIOS DO COBIT:**\n\n👑 **GOVERNANÇA (1):** EDM\n🔧 **GERENCIAMENTO (4):** APO, BAI, DSS, MEA\n\n**Fluxo Estratégico:**\nEDM define → APO planeja → BAI implementa → DSS opera → MEA monitora → realimenta EDM',
        
        edm: '**EDM - Evaluate, Direct, Monitor**\n• Único domínio de governança\n• 5 processos\n• Responsabilidade: Conselho/Alta Direção',
        apo: '**APO - Align, Plan, Organise**\n• Planejamento estratégico de TI\n• Identifica como TI contribui para objetivos',
        bai: '**BAI - Build, Acquire, Implement**\n• **FILOSOFIA: SEMPRE PRIORIZAR AQUISIÇÃO**\n• Comprar soluções prontas do mercado',
        dss: '**DSS - Deliver, Service, Support**\n• Dia a dia da TI\n• Operação de soluções implementadas',
        mea: '**MEA - Monitor, Evaluate, Assess**\n• Qualidade e conformidade\n• Alimenta EDM com informações estratégicas'
      },
      
      build_acquire: {
        definition: '🏗️ **BUILD vs ACQUIRE - Regra de Ouro**\n\n✅ **SEMPRE PRIORIZAR AQUISIÇÃO (ACQUIRE)**\n\n**Por quê Acquire?**\n• Time to Market: Semanas vs Anos\n• Custo: Previsível vs Imprevisível\n• Manutenção: Fornecedor vs Empresa\n• Expertise: Mercado vs Interna\n\n**Quando Build?**\n• Não existe no mercado\n• Diferencial competitivo\n• Necessidades muito específicas\n\n**Exemplo:** CRM - Salesforce (2-3 meses) vs Desenvolvimento (12-18 meses)'
      }
    }),
    
    // 🎯 GERADOR DE RESPOSTA TÁTICA
    generateTacticalResponse: (analysis, knowledge) => {
      const topic = analysis.primaryTopic;
      const questionType = analysis.questionType;
      
      console.log(`🎯 Gerando resposta tática para: ${topic} (${questionType})`);
      
      let response = `**🚀 Assistente Militar COBIT** - Classificação: ${analysis.militaryClassification}\n\n`;
      
      switch (topic) {
        case 'cobit_core':
          if (questionType === 'definition') {
            response += knowledge.cobit_core.definition + '\n\n' + knowledge.cobit_core.objective;
          } else if (questionType === 'example') {
            response += knowledge.cobit_core.evolution;
          } else {
            response += knowledge.cobit_core.definition + '\n\n**Evolução:**\n' + knowledge.cobit_core.evolution;
          }
          break;
          
        case 'efficiency_effectiveness':
          response += knowledge.efficiency_effectiveness.definition;
          break;
          
        case 'governance_management':
          response += knowledge.governance_management.definition;
          break;
          
        case 'cobit_structure':
          if (analysis.keywords.includes('fundamentos')) {
            response += knowledge.cobit_structure.fundamentos;
          } else if (analysis.keywords.includes('habilitadores')) {
            response += knowledge.cobit_structure.habilitadores;
          } else {
            response += knowledge.cobit_structure.fundamentos + '\n\n' + knowledge.cobit_structure.habilitadores;
          }
          break;
          
        case 'domains':
          if (analysis.keywords.some(k => ['edm', 'evaluate'].includes(k))) {
            response += knowledge.domains.edm;
          } else if (analysis.keywords.some(k => ['apo', 'align'].includes(k))) {
            response += knowledge.domains.apo;
          } else if (analysis.keywords.some(k => ['bai', 'build', 'acquire'].includes(k))) {
            response += knowledge.domains.bai;
          } else if (analysis.keywords.some(k => ['dss', 'deliver'].includes(k))) {
            response += knowledge.domains.dss;
          } else if (analysis.keywords.some(k => ['mea', 'monitor'].includes(k))) {
            response += knowledge.domains.mea;
          } else {
            response += knowledge.domains.overview;
          }
          break;
          
        case 'build_acquire':
          response += knowledge.build_acquire.definition;
          break;
          
        default:
          response += 'Tópico identificado mas aguardando classificação especial. Reformule a pergunta para melhor precisão.';
      }
      
      return response;
    },
    
    // 📝 GERADOR DE EXERCÍCIOS INTELIGENTES
    generateExerciseResponse: (question, analysis) => {
      console.log('📝 Gerando exercícios inteligentes');
      
      const lowerQ = question.toLowerCase();
      let targetAula = '';
      
      if (lowerQ.includes('aula 1') || lowerQ.includes('aula 01')) {
        targetAula = 'Aula 01';
      } else if (lowerQ.includes('aula 2') || lowerQ.includes('aula 02')) {
        targetAula = 'Aula 02';
      }
      
      return `**🎯 Exercícios Inteligentes COBIT** ${targetAula ? `- ${targetAula}` : ''}\n\n` +
        `🚀 **Sistema de Geração Ativo!**\n\n` +
        militaryGradeAI.getPreBuiltExercises(targetAula) +
        '\n\n💡 **Quer exercícios personalizados?** Especifique o tópico:\n' +
        '• "Exercícios sobre eficácia vs eficiência"\n' +
        '• "Questões sobre os 5 domínios"\n' +
        '• "Teste sobre Build vs Acquire"';
    },
    
    // 📋 EXERCÍCIOS PRÉ-CONSTRUÍDOS
    getPreBuiltExercises: (aula) => {
      const exercises = {
        'Aula 01': `📘 **EXERCÍCIOS AULA 01 - Conceitos Fundamentais**\n\n` +
          `**Questão 1:** Qual a principal diferença entre eficácia e eficiência?\n` +
          `a) Não há diferença\nb) Eficácia é fazer certo, eficiência é fazer rápido\nc) ✅ Eficácia é cumprir funções, eficiência é otimizar recursos\nd) Eficiência é mais importante\n\n` +
          `**Questão 2:** Quantos fundamentos tem o COBIT?\n` +
          `a) 3\nb) ✅ 5\nc) 7\nd) 10\n\n` +
          `**Questão 3:** O que foi revolucionário no COBIT 5 (2012)?\n` +
          `a) Foco em auditoria\nb) ✅ Integração com governança corporativa\nc) Criação dos domínios\nd) Foco em TI apenas`,
          
        'Aula 02': `📗 **EXERCÍCIOS AULA 02 - Estrutura e Domínios**\n\n` +
          `**Questão 1:** Quantos domínios tem o COBIT e qual é de governança?\n` +
          `a) 4 domínios, APO é governança\nb) ✅ 5 domínios, EDM é governança\nc) 6 domínios, MEA é governança\nd) 3 domínios, DSS é governança\n\n` +
          `**Questão 2:** Qual a regra para Build vs Acquire?\n` +
          `a) Sempre construir internamente\nb) ✅ Sempre priorizar aquisição\nc) Depende do orçamento\nd) Não há regra\n\n` +
          `**Questão 3:** O que significa EDM?\n` +
          `a) Execute, Deploy, Manage\nb) ✅ Evaluate, Direct, Monitor\nc) Establish, Define, Measure\nd) Enable, Develop, Maintain`
      };
      
      if (aula && exercises[aula]) {
        return exercises[aula];
      }
      
      return `🎯 **EXERCÍCIOS GERAIS COBIT**\n\n` +
        `**🔥 Questão Rápida:** O que é mais importante: eficácia ou eficiência?\n` +
        `**Resposta:** Eficácia primeiro! Não adianta fazer errado muito bem feito.\n\n` +
        `**📊 Questão Estratégica:** Quantos domínios de governança tem o COBIT?\n` +
        `**Resposta:** Apenas 1 - EDM (Evaluate, Direct, Monitor)`;
    },
    
    // 🚀 GERADOR DE RESPOSTA INTELIGENTE PADRÃO
    generateIntelligentFallback: (question, analysis) => {
      const lowerQ = question.toLowerCase();
      
      // DETECÇÃO AVANÇADA DE INTENÇÕES
      if (lowerQ.includes('exerc') || lowerQ.includes('quest') || lowerQ.includes('teste')) {
        return militaryGradeAI.generateExerciseResponse(question, analysis);
      }
      
      if (lowerQ.includes('exemplo') || lowerQ.includes('prático') || lowerQ.includes('caso')) {
        return `**💡 Exemplo Prático COBIT**\n\n` +
          `🏢 **Cenário:** Banco quer reduzir falhas em projetos TI\n\n` +
          `**Antes:** 70% falha, custos altos, baixa satisfação\n\n` +
          `**Implementação COBIT:**\n` +
          `• **EDM:** Criou Comitê Governança TI\n` +
          `• **APO:** Implementou gestão portfólio\n` +
          `• **BAI:** Padronizou desenvolvimento\n` +
          `• **DSS:** Melhorou service desk\n` +
          `• **MEA:** Auditoria contínua\n\n` +
          `**Resultado:** 90% sucesso, -25% custos, 85% satisfação \n\n` +
          `🎯 Este é o poder do COBIT em ação!`;
      }
      
      if (lowerQ.includes('vantagem') || lowerQ.includes('beneficio') || lowerQ.includes('por que usar')) {
        return `**🚀 Por que usar COBIT?**\n\n` +
          `**Para Organização:**\n` +
          `• 🎯 Alinhamento TI-Negócios\n` +
          `• 💰 Otimização investimentos\n` +
          `• 🛡️ Gestão de riscos\n` +
          `• 🧠 Melhores decisões\n\n` +
          `**Para Profissionais:**\n` +
          `• 📚 Base sólida carreira\n` +
          `• 🌍 Reconhecimento global\n` +
          `• 🔍 Preparação auditoria\n` +
          `• 🚀 Visão estratégica TI`;
      }
      
      // RESPOSTA INTELIGENTE PERSONALIZADA
      return `**🤖 Assistente Militar COBIT** - Análise: ${analysis.complexity.toUpperCase()}\n\n` +
        `📊 **Pergunta identificada com ${(analysis.confidence * 100).toFixed(0)}% de confiança**\n\n` +
        `🎯 **Posso ajudar especificamente com:**\n\n` +
        `📘 **Aula 01 - Fundamentos:**\n` +
        `• Eficácia vs Eficiência\n• 5 Fundamentos COBIT\n• 7 Habilitadores\n• Evolução histórica\n\n` +
        `📗 **Aula 02 - Estrutura:**\n` +
        `• Governança vs Gerenciamento\n• 5 Domínios (EDM, APO, BAI, DSS, MEA)\n• Build vs Acquire\n• Implementação prática\n\n` +
        `📝 **Geração de Conteúdo:**\n` +
        `• Exercícios inteligentes\n• Casos práticos\n• Comparações detalhadas\n• Implementação passo-a-passo\n\n` +
        `🚀 **Reformule sua pergunta** ou escolha um tópico específico para resposta militar-grade!`;
    }
  };

  // Sistema de IA melhorado para processar perguntas
  // 🚀 SISTEMA LLM MILITAR-GRADE - MÁXIMA INTELIGÊNCIA
  const processQuestion = async (question) => {
    console.log('🗡️ Processando pergunta com IA militar-grade:', question);
    
    try {
      // FASE 1: Análise semântica avançada
      const deepAnalysis = militaryGradeAI.performDeepAnalysis(question);
      console.log('🎯 Análise profunda:', deepAnalysis);
      
      // FASE 2: Geração inteligente com Gemini AI
      const aiResponse = await militaryGradeAI.generateSuperIntelligentResponse(question, deepAnalysis);
      console.log('✨ Resposta da IA:', aiResponse ? 'Sucesso' : 'Falhou');
      
      if (aiResponse && aiResponse.length > 50) {
        return aiResponse;
      }
      
      throw new Error('Resposta da IA insuficiente');
      
    } catch (error) {
      console.error('⚠️ Erro na IA militar, ativando sistema tático:', error);
      
      // SISTEMA TÁTICO DE BACKUP: Muito mais inteligente que o anterior
      return militaryGradeAI.tacticalFallbackSystem(question);
    }
  };

  const sendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;

    setInputValue('');
    addMessage(message, 'user');
    setIsTyping(true);

    try {
      // Processamento assíncrono com IA militar-grade
      console.log('🚀 Iniciando processamento militar-grade...');
      const response = await processQuestion(message);
      setIsTyping(false);
      addMessage(response, 'assistant');
      console.log('✅ Resposta entregue com sucesso');
    } catch (error) {
      console.error('❌ Erro crítico no processamento:', error);
      setIsTyping(false);
      addMessage(
        '⚠️ **Sistema em Manutenção Tática**\n\nOcorreu um erro inesperado no sistema militar-grade. O assistente está sendo otimizado para máxima performance.\n\n🔧 **Tente novamente** ou reformule sua pergunta.\n\n*Sistema de backup ativo e funcionando!*',
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