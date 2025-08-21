// Configurações da API Gemini
export const GEMINI_API_KEY = 'AIzaSyCRfarEDTrIlXNPdonkf-KNAU414KrGnEQ';
export const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Contexto base sobre a disciplina COBIT
export const COURSE_CONTEXT = `
Você é um assistente virtual especializado na disciplina "Implantação de Governança com COBIT", ministrada pelo Prof. Eder José Cassimiro.

INFORMAÇÕES DA DISCIPLINA:
- Professor: Eder José Cassimiro
- Experiência: 14 anos na Estácio BH, 22 anos docência, 30+ anos em TI, Auditor de Sistemas na CEMIG
- Framework: COBIT 2019
- Modalidade: Híbrida

CONTEÚDO DAS AULAS:

AULA 01 - CONCEITOS FUNDAMENTAIS:
- Eficácia vs Eficiência: Eficácia é cumprir tarefas/funções, eficiência é otimizar recursos
- Controle Interno: garantir confiabilidade das demonstrações financeiras e conformidade
- Frameworks para TI: necessidade de frameworks específicos como COBIT
- Evolução do COBIT: de auditoria para governança integrada (COBIT 5 em 2012)
- 5 Fundamentos: 1)Atender necessidades stakeholders, 2)Cobertura holística, 3)Estrutura integrada, 4)Abordagem holística, 5)Separar governança de gerenciamento
- 7 Habilitadores: Princípios/políticas, Processos, Estruturas organizacionais, Cultura/ética, Informação, Serviços/infraestrutura, Pessoas/competências

AULA 02 - ESTRUTURA DO COBIT:
- Governança vs Gerenciamento: estratégico vs operacional
- 5 Domínios: EDM (governança), APO, BAI, DSS, MEA (gerenciamento)
- EDM: Evaluate, Direct and Monitor
- APO: Align, Plan and Organise
- BAI: Build, Acquire and Implement
- DSS: Deliver, Service and Support  
- MEA: Monitor, Evaluate and Assess
- Build vs Acquire: priorizar aquisição de soluções prontas

AVALIAÇÃO:
- Participação: 20%
- Exercícios: 30%
- Projeto: 25%
- Avaliação Final: 25%

CRONOGRAMA:
- Semana 1: Aula 01 - Conceitos Fundamentais
- Semana 2: Aula 02 - Estrutura do COBIT
- Semana 3: Revisão e Avaliação
- Semana 4: Projeto Final

Responda sempre de forma didática, clara e sempre relacionada ao conteúdo do curso COBIT. Use exemplos práticos quando relevante.
`;

// Dados das aulas com o conteúdo original COMPLETO
export const aulasData = {
    'aula01': {
        title: '📘 Aula 01: Conceitos Fundamentais de Governança',
        content: `
        <h1>Aula 01: Conceitos Fundamentais de Governança</h1>
        
        <p><strong>Disciplina:</strong> Implantação de Governança com COBIT<br>
        <strong>Professor:</strong> Eder José Cassimiro<br>
        <strong>Duração:</strong> 2 horas</p>

        <h2>🎯 Passo 1: Conceitos Fundamentais</h2>
        <div class="step-content">
            <div class="step-counter">1.1</div>
            <div class="step-text">
                <h4>Eficácia vs Eficiência</h4>
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Conceito</th>
                                <th>Definição</th>
                                <th>Exemplo Prático</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Eficácia</strong></td>
                                <td>Cumprir as tarefas/funções determinadas</td>
                                <td>Sistema de folha de pagamento que funciona corretamente</td>
                            </tr>
                            <tr>
                                <td><strong>Eficiência</strong></td>
                                <td>Cumprir tarefas otimizando recursos (gastando menos do que fornece)</td>
                                <td>Automatização que custa menos que o processo manual</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">1.2</div>
            <div class="step-text">
                <h4>Controle Interno</h4>
                <div class="concept-card">
                    <h4>Objetivos do Controle Interno</h4>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Garantir confiabilidade das demonstrações financeiras</li>
                        <li>Assegurar conformidade com leis e regulamentos vigentes</li>
                    </ul>
                </div>
                <div class="example-box">
                    <strong>Exemplo Prático:</strong>
                    Um processo de automatização da folha de pagamento é eficaz se funciona, mas só é eficiente se seu custo mensal for inferior ao que seria gasto com pessoas fazendo o mesmo trabalho manualmente.
                </div>
            </div>
        </div>

        <h2>🏗️ Passo 2: Frameworks para TI</h2>
        <div class="step-content">
            <div class="step-counter">2.1</div>
            <div class="step-text">
                <h4>Necessidade de Framework Específico</h4>
                <div class="concept-card">
                    <h4>Por que COBIT e não apenas COSO?</h4>
                    <p><strong>COSO:</strong> Framework de controle interno geral, mas não trata especificamente de TI</p>
                    <p><strong>Solução:</strong> Utilizar frameworks específicos como COBIT ou ITIL v4 (que agora também aborda governança)</p>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">2.2</div>
            <div class="step-text">
                <h4>Geração de Valor</h4>
                <div class="highlight-box">
                    <h4>💎 A TI deve gerar valor demonstrável</h4>
                    <p>A área de TI deve:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Gerar valor real para a organização</li>
                        <li>Não ser apenas uma área de gastos</li>
                        <li>Demonstrar eficiência de forma transparente</li>
                        <li>Ter processos medidos e transparentes</li>
                        <li>Atender requisitos de conformidade legais e regulatórios</li>
                    </ul>
                </div>
            </div>
        </div>

        <h2>📈 Passo 3: Evolução Histórica do COBIT</h2>
        <div class="evolution-timeline">
            <div class="timeline-item">
                <div class="timeline-year">Início - Auditoria</div>
                <p>Primeiras versões focadas em auditoria de sistemas</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">Evolução - Controle</div>
                <p>Expansão para controles internos de TI</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">Crescimento - Gerenciamento</div>
                <p>Incorporação de práticas de gerenciamento de TI</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2012 - COBIT 5</div>
                <p><strong>Grande revolução:</strong> Integração da governança de TI com a governança corporativa. Versões anteriores tratavam governança de TI de forma isolada.</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2019 - COBIT 2019</div>
                <p>Versão ainda mais abrangente e atual</p>
            </div>
        </div>

        <h2>🌟 Passo 4: Características do COBIT 5</h2>
        <div class="step-content">
            <div class="step-counter">4.1</div>
            <div class="step-text">
                <h4>Visão Holística</h4>
                <div class="concept-card">
                    <h4>Por que holística?</h4>
                    <p><strong>Definição:</strong> Trata todas as necessidades e áreas da empresa</p>
                    <p><strong>Justificativa:</strong> A TI é pervasiva - está presente em todas as áreas da organização. Não existe área empresarial que não tenha pelo menos um mínimo de tecnologia da informação.</p>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">4.2</div>
            <div class="step-text">
                <h4>Framework Genérico</h4>
                <div class="concept-card">
                    <h4>Aplicabilidade Universal</h4>
                    <p>Definições genéricas aplicáveis a:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Qualquer tipo de organização</li>
                        <li>Qualquer tamanho de empresa</li>
                        <li>Desde pequenas empresas até corporações gigantes</li>
                    </ul>
                </div>
            </div>
        </div>

        <h2>🏛️ Passo 5: Os 5 Fundamentos do COBIT</h2>
        <div class="principles-grid">
            <div class="principle-card">
                <h3>Atendimento das Necessidades das Partes Interessadas</h3>
                <p>Foco em atender stakeholders e demonstrar valor gerado pela TI.</p>
            </div>
            <div class="principle-card">
                <h3>Cobertura de Todas as Áreas da Empresa</h3>
                <p>Visão do todo - abordagem holística que não deixa nenhuma área de fora.</p>
            </div>
            <div class="principle-card">
                <h3>Aplicação de Estrutura Integrada</h3>
                <p>Não ter vários frameworks trabalhando separadamente, mas uma única estrutura unificada.</p>
            </div>
            <div class="principle-card">
                <h3>Habilitar Abordagem Holística</h3>
                <p>Permitir que a governança trate a organização como um sistema integrado.</p>
            </div>
            <div class="principle-card">
                <h3>Separar Governança de Gerenciamento</h3>
                <p><strong>Fundamental:</strong> Distinção clara entre governança (estratégico) e gerenciamento (operacional).</p>
            </div>
        </div>

        <h2>🔧 Passo 6: Facilitadores/Habilitadores</h2>
        <div class="concept-card">
            <h4>Definição de Habilitadores</h4>
            <p>Fatores que, individual ou coletivamente, influenciam a forma como a governança e gerenciamento de TI funcionam.</p>
        </div>

        <h3 style="margin: 30px 0 15px 0; color: #2c3e50;">Estruturais</h3>
        <div class="enablers-grid">
            <div class="enabler-card">
                <div class="enabler-type">ESTRUTURAL</div>
                <h4>Princípios, Políticas e Modelos</h4>
                <p>Diretrizes fundamentais da organização</p>
            </div>
            <div class="enabler-card">
                <div class="enabler-type">ESTRUTURAL</div>
                <h4>Processos</h4>
                <p>Atividades organizadas para atingir objetivos</p>
            </div>
            <div class="enabler-card">
                <div class="enabler-type">ESTRUTURAL</div>
                <h4>Estruturas Organizacionais</h4>
                <p>Como a organização está estruturada</p>
            </div>
            <div class="enabler-card">
                <div class="enabler-type">ESTRUTURAL</div>
                <h4>Cultura, Ética e Comportamento</h4>
                <p>Aspectos humanos e culturais</p>
            </div>
        </div>

        <h3 style="margin: 30px 0 15px 0; color: #2c3e50;">Recursos</h3>
        <div class="enablers-grid">
            <div class="enabler-card resource">
                <div class="enabler-type">RECURSO</div>
                <h4>Informação</h4>
                <p><strong>Recurso mais valioso</strong> da organização</p>
            </div>
            <div class="enabler-card resource">
                <div class="enabler-type">RECURSO</div>
                <h4>Serviços, Infraestrutura e Aplicativos</h4>
                <p>Tecnologia e sistemas da organização</p>
            </div>
            <div class="enabler-card resource">
                <div class="enabler-type">RECURSO</div>
                <h4>Pessoas, Habilidades e Competências</h4>
                <p>Capital humano e conhecimento</p>
            </div>
        </div>

        <div class="highlight-box">
            <h4>🎯 Resumo da Aula 01</h4>
            <ul style="margin: 10px 0 0 20px;">
                <li><strong>Eficácia ≠ Eficiência:</strong> Fazer certo vs fazer gastando menos</li>
                <li><strong>COBIT evoluiu:</strong> De auditoria para governança integrada</li>
                <li><strong>5 Fundamentos:</strong> Base conceitual do framework</li>
                <li><strong>7 Habilitadores:</strong> Ferramentas para implementação</li>
                <li><strong>Visão Holística:</strong> TI e negócios integrados</li>
            </ul>
        </div>
        `
    },
    'aula02': {
        title: '📗 Aula 02: Estrutura e Domínios do COBIT',
        content: `
        <h1>Aula 02: Estrutura e Domínios do COBIT</h1>
        
        <p><strong>Disciplina:</strong> Implantação de Governança com COBIT<br>
        <strong>Professor:</strong> Eder José Cassimiro<br>
        <strong>Duração:</strong> 2 horas</p>

        <h2>🔄 Passo 7: Governança vs Gerenciamento</h2>
        <div class="step-content">
            <div class="step-counter">7.1</div>
            <div class="step-text">
                <h4>Separação Fundamental</h4>
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Aspecto</th>
                                <th>Governança</th>
                                <th>Gerenciamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Nível</strong></td>
                                <td>Estratégico</td>
                                <td>Execução/Operacional</td>
                            </tr>
                            <tr>
                                <td><strong>Função</strong></td>
                                <td>Define diretrizes, políticas e objetivos</td>
                                <td>Implementa e operacionaliza as diretrizes</td>
                            </tr>
                            <tr>
                                <td><strong>Responsabilidade</strong></td>
                                <td>Definir "o que" deve ser feito</td>
                                <td>Definir "como" fazer</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">7.2</div>
            <div class="step-text">
                <h4>Objetivo Principal do COBIT</h4>
                <div class="highlight-box">
                    <h4>🎯 Missão do COBIT</h4>
                    <p>Ajudar a empresa a atingir seus objetivos através da governança e gerenciamento eficaz de TI, separando adequadamente essas duas funções e demonstrando valor de forma clara para as partes interessadas.</p>
                </div>
            </div>
        </div>

        <h2>🌐 Passo 8: Governança Holística e Demonstração de Valor</h2>
        <div class="step-content">
            <div class="step-counter">8.1</div>
            <div class="step-text">
                <h4>Governança Holística</h4>
                <div class="concept-card">
                    <h4>Abordagem Completa</h4>
                    <p>Abranja todas as partes da empresa, não deixando nada do lado de fora. O COBIT é aplicável a empresas de qualquer natureza ou porte, fornecendo um conjunto de boas práticas genéricas.</p>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">8.2</div>
            <div class="step-text">
                <h4>Demonstração de Valor</h4>
                <div class="concept-card">
                    <h4>TI fora do isolamento</h4>
                    <p>A TI não só deve agregar valor para a empresa, mas isso deve ser demonstrado de forma clara para as partes interessadas, tirando a TI do isolamento em que vivia décadas atrás.</p>
                </div>
            </div>
        </div>

        <h2>⚙️ Passo 9: Os 5 Processos/Domínios do COBIT</h2>
        <div class="highlight-box">
            <h4>📊 Estrutura dos Domínios</h4>
            <p><strong>1 Domínio de Governança:</strong> EDM (Evaluate, Direct and Monitor)</p>
            <p><strong>4 Domínios de Gerenciamento:</strong> APO, BAI, DSS, MEA</p>
        </div>

        <div class="process-grid">
            <div class="process-card governance">
                <div class="process-type">GOVERNANÇA</div>
                <h3>EDM - Evaluate, Direct and Monitor</h3>
                <p><strong>Avaliar, Dirigir e Monitorar</strong></p>
                <p>Contém 5 processos de governança onde são definidas as práticas de avaliação, direção e monitoração. É o único domínio focado especificamente em governança.</p>
            </div>

            <div class="process-card">
                <div class="process-type">GERENCIAMENTO</div>
                <h3>APO - Align, Plan and Organise</h3>
                <p><strong>Alinhar, Planejar e Organizar</strong></p>
                <p>Tem abrangência estratégica e identifica formas através das quais a TI pode contribuir para atender os objetivos de negócio. Não determina os objetivos, mas como a TI pode agir para atendê-los.</p>
            </div>

            <div class="process-card">
                <div class="process-type">GERENCIAMENTO</div>
                <h3>BAI - Build, Acquire and Implement</h3>
                <p><strong>Construir, Adquirir e Implementar</strong></p>
                <p>Trata do processo de construção ou aquisição e implementação de soluções de TI. Inclui mudanças e manutenções de sistemas. Prioriza-se a aquisição de soluções prontas do mercado.</p>
            </div>

            <div class="process-card">
                <div class="process-type">GERENCIAMENTO</div>
                <h3>DSS - Deliver, Service and Support</h3>
                <p><strong>Entregar, Serviço e Suporte</strong></p>
                <p>O dia a dia da TI. Quando você já tem a solução implementada e vai utilizá-la para entregar valor para os usuários. É a parte do gerenciamento cotidiano da tecnologia da informação.</p>
            </div>

            <div class="process-card">
                <div class="process-type">GERENCIAMENTO</div>
                <h3>MEA - Monitor, Evaluate and Assess</h3>
                <p><strong>Monitorar, Avaliar e Medir</strong></p>
                <p>Assegura a qualidade dos processos, bem como governança e conformidade. Fornece subsídios para o domínio de governança através de mecanismos adequados de avaliação.</p>
            </div>
        </div>

        <h2>🏗️ Passo 10: Build vs Acquire - Boas Práticas</h2>
        <div class="step-content">
            <div class="step-counter">10.1</div>
            <div class="step-text">
                <h4>Regra Atual: Priorizar Aquisição</h4>
                <div class="concept-card">
                    <h4>Estratégia Recomendada</h4>
                    <p><strong>Regra:</strong> Sempre tentar adquirir soluções do mercado prontas e implementá-las com o mínimo de personalização possível.</p>
                </div>
                
                <div class="example-box">
                    <strong>Por que evitar desenvolvimento interno?</strong>
                    Desenvolver internamente significa ser responsável por:
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Desenvolvimento completo</li>
                        <li>Implementação</li>
                        <li>Suporte contínuo</li>
                    </ul>
                    Essas tarefas são pesadas e geralmente fogem da expertise e do negócio principal da empresa.
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">10.2</div>
            <div class="step-text">
                <h4>Quando Construir Internamente</h4>
                <div class="concept-card">
                    <h4>Exceções à Regra</h4>
                    <p>Eventualmente há necessidade de construir internamente quando:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Não existe solução pronta no mercado</li>
                        <li>As necessidades são muito específicas</li>
                        <li>Representa diferencial competitivo estratégico</li>
                    </ul>
                </div>
            </div>
        </div>

        <h2>🎯 Passo 11: Características Finais do Framework</h2>
        <div class="step-content">
            <div class="step-counter">11.1</div>
            <div class="step-text">
                <h4>Framework Genérico e Abrangente</h4>
                <div class="concept-card">
                    <h4>Aplicabilidade Universal</h4>
                    <p>O COBIT não é um "guia do como fazer" específico, mas sim um conjunto de boas práticas que podem ser aplicadas em organizações de qualquer natureza ou porte.</p>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">11.2</div>
            <div class="step-text">
                <h4>Conexão com Governança Corporativa</h4>
                <div class="concept-card">
                    <h4>Integração Estratégica</h4>
                    <p>A governança de TI está diretamente atrelada à governança corporativa, sendo partes distintas mas complementares do mesmo sistema organizacional.</p>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">11.3</div>
            <div class="step-text">
                <h4>Objetivo Final</h4>
                <div class="highlight-box">
                    <h4>🚀 Meta do COBIT</h4>
                    <p>Fornecer subsídios adequados para que o domínio de governança (EDM) seja efetivamente implementado na organização, criando valor demonstrável através de TI alinhada aos objetivos de negócio.</p>
                </div>
            </div>
        </div>

        <div class="highlight-box">
            <h4>🎯 Resumo da Aula 02</h4>
            <ul style="margin: 10px 0 0 20px;">
                <li><strong>Governança ≠ Gerenciamento:</strong> Estratégico vs Operacional</li>
                <li><strong>EDM é único de Governança:</strong> Os outros 4 são Gerenciamento</li>
                <li><strong>Cada domínio tem papel específico:</strong> APO planeja, BAI implementa, DSS opera, MEA monitora</li>
                <li><strong>Build vs Acquire:</strong> Priorize sempre aquisição, exceto quando há vantagem competitiva</li>
                <li><strong>Framework genérico:</strong> Aplicável a organizações de qualquer porte</li>
            </ul>
        </div>
        `
    }
};

// Dados dos exercícios
export const exercisesData = [
    {
        id: 'exercise1',
        question: '1. Qual a principal diferença entre eficácia e eficiência em TI?',
        options: [
            { id: 'a', text: 'a) Eficácia é fazer certo, eficiência é fazer rápido', correct: false },
            { id: 'b', text: 'b) Eficácia é cumprir as funções, eficiência é otimizar recursos', correct: true },
            { id: 'c', text: 'c) Não há diferença entre os conceitos', correct: false },
            { id: 'd', text: 'd) Eficiência é mais importante que eficácia', correct: false }
        ]
    },
    {
        id: 'exercise2',
        question: '2. Quantos domínios possui o COBIT e qual é focado exclusivamente em governança?',
        options: [
            { id: 'a', text: 'a) 4 domínios, sendo APO o de governança', correct: false },
            { id: 'b', text: 'b) 5 domínios, sendo EDM o de governança', correct: true },
            { id: 'c', text: 'c) 6 domínios, sendo MEA o de governança', correct: false },
            { id: 'd', text: 'd) 3 domínios, sendo DSS o de governança', correct: false }
        ]
    },
    {
        id: 'exercise3',
        question: '3. Qual é o objetivo principal do COBIT?',
        options: [
            { id: 'a', text: 'a) Substituir outros frameworks de TI', correct: false },
            { id: 'b', text: 'b) Ajudar empresas a atingir objetivos através de governança eficaz de TI', correct: true },
            { id: 'c', text: 'c) Apenas auditar sistemas de informação', correct: false },
            { id: 'd', text: 'd) Focar exclusivamente em gerenciamento operacional', correct: false }
        ]
    }
];

// Sugestões para o chatbot
export const chatSuggestions = [
    'O que é COBIT?',
    'Diferença entre governança e gerenciamento',
    'Explique os 5 fundamentos do COBIT',
    'O que significa EDM no COBIT?',
    'Build vs Acquire - quando usar?',
    'Como implementar COBIT na empresa?'
];

// Adicione no final do arquivo src/data/courseData.js

// Sistema de busca avançado para a IA
export const searchableContent = {
  keywords: {
    // Mapeamento de sinônimos e variações
    'cobit': ['cobit', 'framework', 'isaca', 'governanca de ti'],
    'eficacia': ['eficacia', 'eficaz', 'fazer certo', 'cumprir funcoes'],
    'eficiencia': ['eficiencia', 'eficiente', 'otimizar recursos', 'gastar menos'],
    'governanca': ['governanca', 'estrategico', 'conselho', 'diretoria', 'o que fazer'],
    'gerenciamento': ['gerenciamento', 'operacional', 'executivos', 'como fazer'],
    'edm': ['edm', 'evaluate', 'direct', 'monitor', 'avaliar', 'dirigir', 'monitorar'],
    'apo': ['apo', 'align', 'plan', 'organise', 'alinhar', 'planejar', 'organizar'],
    'bai': ['bai', 'build', 'acquire', 'implement', 'construir', 'adquirir', 'implementar'],
    'dss': ['dss', 'deliver', 'service', 'support', 'entregar', 'servico', 'suporte'],
    'mea': ['mea', 'monitor', 'evaluate', 'assess', 'monitorar', 'avaliar', 'medir']
  },
  
  // Banco de respostas pré-definidas para perguntas comuns
  commonQuestions: {
    'qual diferenca governanca gerenciamento': 'Governança define O QUE fazer (estratégico, conselho), Gerenciamento define COMO fazer (operacional, executivos).',
    'quantos dominios cobit': 'COBIT tem 5 domínios: 1 de Governança (EDM) e 4 de Gerenciamento (APO, BAI, DSS, MEA).',
    'build vs acquire': 'Regra atual: SEMPRE priorizar AQUISIÇÃO de soluções prontas. Construir internamente apenas quando não existe no mercado ou há vantagem competitiva.',
    'fundamentos cobit': 'São 5: 1)Atender stakeholders, 2)Cobertura holística, 3)Estrutura integrada, 4)Abordagem holística, 5)Separar governança de gerenciamento.'
  }
};

// Exemplos práticos detalhados
export const practicalExamples = {
  implementation: {
    scenario: 'Banco quer reduzir falhas em projetos de TI',
    before: 'Taxa de falha: 70%, custos altos, baixa satisfação',
    cobitImplementation: {
      edm: 'Criou Comitê de Governança de TI',
      apo: 'Implementou gestão de portfólio',
      bai: 'Padronizou processo de desenvolvimento',
      dss: 'Melhorou service desk e monitoramento',
      mea: 'Implementou auditoria contínua'
    },
    results: 'Taxa de sucesso: 90%, redução 25% custos, satisfação 85%'
  },
  
  buildVsAcquire: {
    scenario: 'Empresa precisa de sistema CRM',
    acquireOption: 'Salesforce: 2-3 meses, R$50-200/usuário/mês, suporte 24/7',
    buildOption: 'Desenvolvimento: 12-18 meses, R$500k-2M inicial, manutenção interna',
    recommendation: 'Acquire - 5x mais rápido e 3x mais barato'
  }
};

// Prompts específicos para geração de exercícios
export const EXERCISE_PROMPTS = {
  aula01: `
  CONTEÚDO AULA 01 - CONCEITOS FUNDAMENTAIS:
  
  1. EFICÁCIA VS EFICIÊNCIA:
  - Eficácia: Cumprir tarefas/funções determinadas (fazer a coisa certa)
  - Eficiência: Cumprir tarefas otimizando recursos (fazer gastando menos)
  - Exemplo: Sistema de folha que funciona (eficaz) vs custo menor que processo manual (eficiente)
  
  2. FRAMEWORKS PARA TI:
  - COSO: Framework geral, não específico para TI
  - COBIT: Framework específico para governança de TI
  - Necessidade de frameworks específicos para TI
  
  3. EVOLUÇÃO DO COBIT:
  - 1996: Início focado em auditoria
  - 2005: COBIT 4.0 primeira menção à governança
  - 2012: COBIT 5 - REVOLUÇÃO: integração com governança corporativa
  - 2019: COBIT 2019 versão atual
  
  4. 5 FUNDAMENTOS DO COBIT:
  1) Atendimento das necessidades das partes interessadas
  2) Cobertura de todas as áreas da empresa (visão holística)
  3) Aplicação de estrutura integrada
  4) Habilitar abordagem holística
  5) Separar governança de gerenciamento
  
  5. 7 HABILITADORES:
  Estruturais (4): Princípios/Políticas, Processos, Estruturas Organizacionais, Cultura/Ética
  Recursos (3): Informação (mais valioso), Serviços/Infraestrutura, Pessoas/Competências
  `,
  
  aula02: `
  CONTEÚDO AULA 02 - ESTRUTURA E DOMÍNIOS:
  
  1. GOVERNANÇA VS GERENCIAMENTO:
  - Governança: Estratégico, define "O QUE", Conselho/Diretoria, longo prazo
  - Gerenciamento: Operacional, define "COMO", Executivos/Gestores, curto/médio prazo
  
  2. OS 5 DOMÍNIOS DO COBIT:
  - 1 Governança: EDM (Evaluate, Direct, Monitor)
  - 4 Gerenciamento: APO, BAI, DSS, MEA
  
  3. DETALHES DOS DOMÍNIOS:
  - EDM: Único de governança, 5 processos, Conselho/Diretoria
  - APO: Align, Plan, Organise - planejamento estratégico de TI
  - BAI: Build, Acquire, Implement - REGRA: priorizar ACQUIRE (comprar)
  - DSS: Deliver, Service, Support - dia a dia da TI, operação
  - MEA: Monitor, Evaluate, Assess - qualidade, conformidade, alimenta EDM
  
  4. BUILD VS ACQUIRE:
  - REGRA: Sempre priorizar AQUISIÇÃO de soluções prontas
  - Build apenas quando: não existe no mercado, vantagem competitiva, necessidades muito específicas
  - Razões para Acquire: Time to market, custo previsível, manutenção do fornecedor
  
  5. CARACTERÍSTICAS FINAIS:
  - Framework genérico aplicável a qualquer organização
  - Integração com governança corporativa (não isolado)
  - Objetivo: habilitar EDM efetivamente, gerar valor demonstrável
  `
};

// Configurações de níveis de exercícios
export const EXERCISE_LEVELS = {
  basico: {
    description: 'Conceitos fundamentais e definições básicas',
    prompt: 'Foque em definições, conceitos básicos e identificação de elementos fundamentais'
  },
  medio: {
    description: 'Aplicação prática e análise de cenários',
    prompt: 'Inclua cenários práticos, aplicação de conceitos e análise de situações reais'
  },
  avancado: {
    description: 'Análise crítica e resolução de problemas complexos',
    prompt: 'Apresente situações complexas, análise crítica, comparações avançadas e resolução de problemas'
  }
};