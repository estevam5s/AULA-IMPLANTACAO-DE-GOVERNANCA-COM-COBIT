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

        <div class="content-toc">
            <h4>📋 Sumário da Aula</h4>
            <ul>
                <li><a href="#conceitos-fundamentais">1. Conceitos Fundamentais</a></li>
                <li><a href="#frameworks-ti">2. Frameworks para TI</a></li>
                <li><a href="#evolucao-cobit">3. Evolução Histórica do COBIT</a></li>
                <li><a href="#caracteristicas-cobit">4. Características do COBIT 5</a></li>
                <li><a href="#fundamentos-cobit">5. Os 5 Fundamentos do COBIT</a></li>
                <li><a href="#habilitadores">6. Facilitadores/Habilitadores</a></li>
            </ul>
        </div>

        <h2 id="conceitos-fundamentais">🎯 Passo 1: Conceitos Fundamentais</h2>
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
                                <th>Indicadores</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Eficácia</strong></td>
                                <td>Cumprir as tarefas/funções determinadas</td>
                                <td>Sistema de folha de pagamento que funciona corretamente</td>
                                <td>Taxa de conclusão, qualidade dos resultados</td>
                            </tr>
                            <tr>
                                <td><strong>Eficiência</strong></td>
                                <td>Cumprir tarefas otimizando recursos (gastando menos do que fornece)</td>
                                <td>Automatização que custa menos que o processo manual</td>
                                <td>Custo por transação, tempo de execução</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="concept-card">
                    <h4>Relação entre Eficácia e Eficiência</h4>
                    <p><strong>Cenário Ideal:</strong> Alta eficácia + Alta eficiência = Excelência operacional</p>
                    <p><strong>Cenário Problemático:</strong> Alta eficiência + Baixa eficácia = Fazer a coisa errada muito bem feito</p>
                    <p><strong>Prioridade:</strong> Primeiro garanta a eficácia, depois otimize a eficiência</p>
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
                        <li><strong>Confiabilidade:</strong> Garantir confiabilidade das demonstrações financeiras</li>
                        <li><strong>Conformidade:</strong> Assegurar conformidade com leis e regulamentos vigentes</li>
                        <li><strong>Eficácia:</strong> Promover eficácia e eficiência das operações</li>
                        <li><strong>Proteção:</strong> Proteger ativos da organização</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <strong>Exemplo Detalhado:</strong>
                    Um processo de automatização da folha de pagamento:
                    <br><br>
                    <strong>É EFICAZ quando:</strong> Processa todos os salários corretamente, sem erros de cálculo, dentro do prazo estabelecido.
                    <br><br>
                    <strong>É EFICIENTE quando:</strong> O custo mensal da automatização (software + manutenção + energia) é menor que o custo de fazer o mesmo processo manualmente (salários + benefícios dos funcionários que fariam esse trabalho).
                </div>
                
                <div class="highlight-box">
                    <h4>🔍 Análise Crítica</h4>
                    <p>Muitas organizações focam apenas na eficiência (redução de custos) sem garantir primeiro a eficácia. Isso pode levar a sistemas que funcionam mal, mas são baratos, resultando em prejuízos maiores a longo prazo.</p>
                </div>
            </div>
        </div>

        <h2 id="frameworks-ti">🏗️ Passo 2: Frameworks para TI</h2>
        <div class="step-content">
            <div class="step-counter">2.1</div>
            <div class="step-text">
                <h4>Necessidade de Framework Específico para TI</h4>
                <div class="concept-card">
                    <h4>Por que COBIT e não apenas COSO?</h4>
                    <p><strong>COSO:</strong> Committee of Sponsoring Organizations of the Treadway Commission</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Framework de controle interno geral e abrangente</li>
                        <li>Não trata especificamente das particularidades de TI</li>
                        <li>Focado em controles financeiros e de compliance</li>
                        <li>Não aborda aspectos técnicos e operacionais de TI</li>
                    </ul>
                    <br>
                    <p><strong>Solução:</strong> Utilizar frameworks específicos como:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>COBIT:</strong> Governança e gestão de TI</li>
                        <li><strong>ITIL v4:</strong> Gerenciamento de serviços (agora também aborda governança)</li>
                        <li><strong>ISO 27001:</strong> Segurança da informação</li>
                        <li><strong>PMBOK:</strong> Gerenciamento de projetos</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <strong>Comparação Prática:</strong>
                    <br><br>
                    <strong>COSO diria:</strong> "Tenha controles internos para seus processos financeiros"
                    <br>
                    <strong>COBIT especifica:</strong> "Como implementar controles específicos para sistemas ERP, backup de dados, segregação de funções em TI, gestão de mudanças em software, etc."
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">2.2</div>
            <div class="step-text">
                <h4>A TI Deve Gerar Valor Demonstrável</h4>
                <div class="highlight-box">
                    <h4>💎 Transformação do Papel da TI</h4>
                    <p><strong>Antes:</strong> TI era vista como "centro de custos" - apenas gastava dinheiro</p>
                    <p><strong>Agora:</strong> TI deve ser "geradora de valor" - demonstrar retorno sobre investimento</p>
                </div>
                
                <div class="concept-card">
                    <h4>Como a TI Deve Demonstrar Valor</h4>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>Quantitativo:</strong> ROI, redução de custos, aumento de receita, tempo economizado</li>
                        <li><strong>Qualitativo:</strong> Melhoria na satisfação do cliente, compliance, redução de riscos</li>
                        <li><strong>Estratégico:</strong> Habilitação de novos negócios, vantagem competitiva</li>
                        <li><strong>Operacional:</strong> Automação de processos, melhoria da qualidade</li>
                    </ul>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">70%</span>
                        <span class="stat-label">Das empresas não conseguem medir o valor de TI adequadamente</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">85%</span>
                        <span class="stat-label">Dos projetos de TI não entregam o valor esperado</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">60%</span>
                        <span class="stat-label">Do orçamento de TI é gasto em manutenção</span>
                    </div>
                </div>
                
                <div class="example-box">
                    <strong>Exemplo de Demonstração de Valor:</strong>
                    <br><br>
                    <strong>Projeto:</strong> Implementação de sistema CRM
                    <br>
                    <strong>Investimento:</strong> R$ 500.000
                    <br>
                    <strong>Retornos Mensuráveis:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Aumento de 15% na taxa de conversão de leads</li>
                        <li>Redução de 30% no tempo de resposta ao cliente</li>
                        <li>Economia de 20 horas/semana da equipe de vendas</li>
                        <li>ROI projetado: 200% em 18 meses</li>
                    </ul>
                </div>
            </div>
        </div>

        <h2 id="evolucao-cobit">📈 Passo 3: Evolução Histórica do COBIT</h2>
        <div class="evolution-timeline">
            <div class="timeline-item">
                <div class="timeline-year">1996 - COBIT 1.0</div>
                <strong>Início - Auditoria de Sistemas</strong>
                <p>• Criado pela ISACA (Information Systems Audit and Control Association)<br>
                • Foco: Auditoria de sistemas de informação<br>
                • Objetivo: Fornecer controles para auditores de TI<br>
                • Limitação: Abordagem muito técnica e restrita</p>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-year">1998 - COBIT 2.0</div>
                <strong>Expansão - Controles Internos</strong>
                <p>• Expansão para controles internos de TI<br>
                • Inclusão de objetivos de controle detalhados<br>
                • Maior alinhamento com necessidades de negócio<br>
                • Ainda focado principalmente em auditoria</p>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-year">2000 - COBIT 3.0</div>
                <strong>Crescimento - Gerenciamento</strong>
                <p>• Incorporação de práticas de gerenciamento de TI<br>
                • Introdução de métricas e indicadores<br>
                • Maior ênfase no alinhamento estratégico<br>
                • Reconhecimento internacional crescente</p>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-year">2005 - COBIT 4.0/4.1</div>
                <strong>Maturidade - Governança</strong>
                <p>• Primeira menção formal à "governança de TI"<br>
                • Modelo de maturidade aprimorado<br>
                • Integração com outros frameworks (ITIL, ISO)<br>
                • Adoção por grandes corporações mundiais</p>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-year">2012 - COBIT 5</div>
                <strong>🚀 GRANDE REVOLUÇÃO</strong>
                <div class="highlight-box">
                    <h4>Marco Histórico do COBIT 5</h4>
                    <p><strong>Mudança Paradigmática:</strong> Integração da governança de TI com a governança corporativa</p>
                    <br>
                    <p><strong>Antes do COBIT 5:</strong></p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Governança de TI tratada de forma isolada</li>
                        <li>TI vista como função separada do negócio</li>
                        <li>Foco principalmente interno (dentro da TI)</li>
                    </ul>
                    <br>
                    <p><strong>A partir do COBIT 5:</strong></p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>TI integrada à estratégia corporativa</li>
                        <li>Governança de TI como parte da governança corporativa</li>
                        <li>Visão holística de toda a organização</li>
                        <li>Foco em valor para o negócio</li>
                    </ul>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-year">2019 - COBIT 2019</div>
                <strong>Evolução - Adaptação Digital</strong>
                <p>• Adequação à era da transformação digital<br>
                • Maior flexibilidade e customização<br>
                • Integração com metodologias ágeis<br>
                • Ênfase em design thinking e inovação<br>
                • Versão atual e mais abrangente</p>
            </div>
        </div>

        <div class="concept-card">
            <h4>Impacto da Evolução do COBIT</h4>
            <p>A evolução do COBIT reflete a própria evolução do papel da TI nas organizações:</p>
            <ul style="margin: 10px 0 0 20px;">
                <li><strong>Anos 90:</strong> TI como suporte operacional</li>
                <li><strong>Anos 2000:</strong> TI como habilitadora de processos</li>
                <li><strong>Anos 2010:</strong> TI como parceira estratégica</li>
                <li><strong>Anos 2020:</strong> TI como motor da transformação digital</li>
            </ul>
        </div>

        <h2 id="caracteristicas-cobit">🌟 Passo 4: Características do COBIT 5</h2>
        <div class="step-content">
            <div class="step-counter">4.1</div>
            <div class="step-text">
                <h4>Visão Holística</h4>
                <div class="concept-card">
                    <h4>Por que a abordagem holística é fundamental?</h4>
                    <p><strong>Definição:</strong> Trata todas as necessidades e áreas da empresa de forma integrada</p>
                    <br>
                    <p><strong>Justificativa Técnica:</strong></p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>A TI é <strong>pervasiva</strong> - está presente em TODAS as áreas da organização</li>
                        <li>Não existe departamento moderno que não use tecnologia</li>
                        <li>Decisões de TI impactam múltiplas áreas simultaneamente</li>
                        <li>Problemas em uma área podem afetar toda a organização</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <strong>Exemplo da Pervasividade da TI:</strong>
                    <br><br>
                    <strong>Cenário:</strong> Atualização do sistema ERP
                    <br>
                    <strong>Áreas Impactadas:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Financeiro: Relatórios e fechamentos</li>
                        <li>RH: Folha de pagamento e benefícios</li>
                        <li>Vendas: Pedidos e faturamento</li>
                        <li>Compras: Requisições e aprovações</li>
                        <li>Produção: Planejamento e controle</li>
                        <li>Logística: Expedição e recebimento</li>
                    </ul>
                    <strong>Conclusão:</strong> Uma decisão "técnica" de TI afeta toda a empresa
                </div>
                
                <div class="process-grid">
                    <div class="process-card">
                        <h3>🔄 Interconexão Sistêmica</h3>
                        <p>Cada sistema se conecta com vários outros, criando uma rede complexa de dependências</p>
                    </div>
                    <div class="process-card governance">
                        <h3>📊 Dados Compartilhados</h3>
                        <p>Informações fluem entre departamentos, exigindo consistência e integridade</p>
                    </div>
                    <div class="process-card">
                        <h3>⚡ Impacto Instantâneo</h3>
                        <p>Mudanças em TI têm efeito imediato em processos de negócio</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">4.2</div>
            <div class="step-text">
                <h4>Framework Genérico e Universal</h4>
                <div class="concept-card">
                    <h4>Aplicabilidade Universal do COBIT</h4>
                    <p><strong>Filosofia de Design:</strong> Definições genéricas que se adaptam a qualquer contexto</p>
                    <br>
                    <p><strong>Aplicável a:</strong></p>
                    <div class="enablers-grid">
                        <div class="enabler-card">
                            <div class="enabler-type">TAMANHO</div>
                            <h4>Micro a Grandes Corporações</h4>
                            <p>Desde startups até multinacionais</p>
                        </div>
                        <div class="enabler-card resource">
                            <div class="enabler-type">SETOR</div>
                            <h4>Qualquer Indústria</h4>
                            <p>Privado, público, terceiro setor</p>
                        </div>
                        <div class="enabler-card">
                            <div class="enabler-type">GEOGRAFIA</div>
                            <h4>Qualquer País/Cultura</h4>
                            <p>Adaptável a diferentes regulamentações</p>
                        </div>
                        <div class="enabler-card resource">
                            <div class="enabler-type">MATURIDADE</div>
                            <h4>Qualquer Nível de TI</h4>
                            <p>Do básico ao mais avançado</p>
                        </div>
                    </div>
                </div>
                
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de Organização</th>
                                <th>Como o COBIT se Adapta</th>
                                <th>Exemplo de Aplicação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Startup Tecnológica</strong></td>
                                <td>Foco em processos essenciais, governança lean</td>
                                <td>Controles básicos de segurança e backup</td>
                            </tr>
                            <tr>
                                <td><strong>Banco</strong></td>
                                <td>Ênfase em compliance, riscos e auditoria</td>
                                <td>Controles rigorosos, segregação de funções</td>
                            </tr>
                            <tr>
                                <td><strong>Hospital</strong></td>
                                <td>Foco em disponibilidade e proteção de dados</td>
                                <td>Sistemas críticos 24/7, LGPD para dados de saúde</td>
                            </tr>
                            <tr>
                                <td><strong>ONG</strong></td>
                                <td>Otimização de recursos limitados</td>
                                <td>Priorização de investimentos, transparência</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <h2 id="fundamentos-cobit">🏛️ Passo 5: Os 5 Fundamentos do COBIT</h2>
        <div class="concept-card">
            <h4>Introdução aos Fundamentos</h4>
            <p>Os 5 Fundamentos são os <strong>princípios fundamentais</strong> que sustentam toda a arquitetura do COBIT. Eles definem a essência filosófica e prática do framework.</p>
        </div>

        <div class="principles-grid">
            <div class="principle-card">
                <h3>1. Atendimento das Necessidades das Partes Interessadas</h3>
                <div class="concept-card" style="margin: 15px 0; background: rgba(255,255,255,0.2);">
                    <h4>Stakeholders Principais:</h4>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>Acionistas:</strong> Retorno sobre investimento</li>
                        <li><strong>Clientes:</strong> Qualidade e disponibilidade de serviços</li>
                        <li><strong>Funcionários:</strong> Ferramentas adequadas para trabalho</li>
                        <li><strong>Reguladores:</strong> Compliance e transparência</li>
                        <li><strong>Parceiros:</strong> Integração e confiabilidade</li>
                    </ul>
                </div>
                <p><strong>Foco:</strong> Demonstrar valor tangível para cada grupo de interesse e balancear necessidades conflitantes.</p>
            </div>
            
            <div class="principle-card">
                <h3>2. Cobertura de Todas as Áreas da Empresa</h3>
                <div class="concept-card" style="margin: 15px 0; background: rgba(255,255,255,0.2);">
                    <h4>Dimensões da Cobertura:</h4>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>Funcional:</strong> Todos os departamentos</li>
                        <li><strong>Hierárquica:</strong> Estratégico ao operacional</li>
                        <li><strong>Temporal:</strong> Planejamento ao controle</li>
                        <li><strong>Tecnológica:</strong> Infraestrutura às aplicações</li>
                    </ul>
                </div>
                <p><strong>Princípio:</strong> Visão do todo - abordagem holística que não deixa lacunas ou pontos cegos organizacionais.</p>
            </div>
            
            <div class="principle-card">
                <h3>3. Aplicação de Estrutura Integrada</h3>
                <div class="concept-card" style="margin: 15px 0; background: rgba(255,255,255,0.2);">
                    <h4>Integração vs. Fragmentação:</h4>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>Evitar:</strong> Múltiplos frameworks conflitantes</li>
                        <li><strong>Buscar:</strong> Uma única estrutura unificada</li>
                        <li><strong>Compatibilidade:</strong> Com ISO, ITIL, PMBOK</li>
                        <li><strong>Sinergia:</strong> Frameworks se complementam</li>
                    </ul>
                </div>
                <p><strong>Resultado:</strong> Eliminação de redundâncias, conflitos e lacunas entre diferentes metodologias.</p>
            </div>
            
            <div class="principle-card">
                <h3>4. Habilitar Abordagem Holística</h3>
                <div class="concept-card" style="margin: 15px 0; background: rgba(255,255,255,0.2);">
                    <h4>Elementos da Abordagem Holística:</h4>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>Sistêmica:</strong> Organização como sistema</li>
                        <li><strong>Integrada:</strong> Conexões entre componentes</li>
                        <li><strong>Balanceada:</strong> Múltiplas perspectivas</li>
                        <li><strong>Dinâmica:</strong> Adaptável a mudanças</li>
                    </ul>
                </div>
                <p><strong>Capacitação:</strong> Permitir que a governança trate a organização como um organismo integrado e interdependente.</p>
            </div>
            
            <div class="principle-card">
                <h3>5. Separar Governança de Gerenciamento</h3>
                <div class="highlight-box" style="margin: 15px 0; background: rgba(255,255,255,0.3);">
                    <h4>🎯 FUNDAMENTAL - Distinção Crucial</h4>
                    <div class="comparison-table" style="margin: 10px 0;">
                        <table style="width: 100%; font-size: 0.9rem;">
                            <thead>
                                <tr style="background: rgba(255,255,255,0.9); color: #2c3e50;">
                                    <th>Governança</th>
                                    <th>Gerenciamento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: rgba(255,255,255,0.1);">
                                    <td>Define "O QUE"</td>
                                    <td>Define "COMO"</td>
                                </tr>
                                <tr style="background: rgba(255,255,255,0.05);">
                                    <td>Estratégico</td>
                                    <td>Operacional</td>
                                </tr>
                                <tr style="background: rgba(255,255,255,0.1);">
                                    <td>Conselho/Diretoria</td>
                                    <td>Gestores/Executivos</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p><strong>Importância:</strong> Evita conflitos de interesse e garante supervisão adequada das atividades de TI.</p>
            </div>
        </div>

        <div class="highlight-box">
            <h4>🔗 Interrelação dos Fundamentos</h4>
            <p>Os 5 fundamentos não funcionam isoladamente. Eles se complementam e se reforçam mutuamente:</p>
            <ul style="margin: 10px 0 0 20px;">
                <li>Para <strong>atender stakeholders</strong> (1), é preciso <strong>cobrir toda a empresa</strong> (2)</li>
                <li>A <strong>estrutura integrada</strong> (3) facilita a <strong>abordagem holística</strong> (4)</li>
                <li>A <strong>separação governança/gerenciamento</strong> (5) garante foco adequado em cada nível</li>
            </ul>
        </div>

        <h2 id="habilitadores">🔧 Passo 6: Facilitadores/Habilitadores (Enablers)</h2>
        <div class="concept-card">
            <h4>Definição de Habilitadores</h4>
            <p><strong>Conceito:</strong> Fatores que, individual ou coletivamente, influenciam a forma como a governança e gerenciamento de TI funcionam na prática.</p>
            <p><strong>Função:</strong> São as "ferramentas" que permitem implementar os fundamentos do COBIT na realidade organizacional.</p>
        </div>

        <div class="comparison-table">
            <table>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Habilitador</th>
                        <th>Descrição</th>
                        <th>Exemplo Prático</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="4"><strong>ESTRUTURAIS</strong><br><small>Como a organização se estrutura</small></td>
                        <td>Princípios, Políticas e Modelos</td>
                        <td>Diretrizes fundamentais da organização</td>
                        <td>Política de Segurança da Informação</td>
                    </tr>
                    <tr>
                        <td>Processos</td>
                        <td>Atividades organizadas para atingir objetivos</td>
                        <td>Processo de Gestão de Mudanças</td>
                    </tr>
                    <tr>
                        <td>Estruturas Organizacionais</td>
                        <td>Como a organização está estruturada</td>
                        <td>Comitê de Governança de TI</td>
                    </tr>
                    <tr>
                        <td>Cultura, Ética e Comportamento</td>
                        <td>Aspectos humanos e culturais</td>
                        <td>Cultura de segurança e compliance</td>
                    </tr>
                    <tr>
                        <td rowspan="3"><strong>RECURSOS</strong><br><small>O que a organização utiliza</small></td>
                        <td>Informação</td>
                        <td><strong>Recurso mais valioso</strong> da organização</td>
                        <td>Base de dados de clientes, relatórios gerenciais</td>
                    </tr>
                    <tr>
                        <td>Serviços, Infraestrutura e Aplicativos</td>
                        <td>Tecnologia e sistemas da organização</td>
                        <td>ERP, CRM, Data Center, Cloud</td>
                    </tr>
                    <tr>
                        <td>Pessoas, Habilidades e Competências</td>
                        <td>Capital humano e conhecimento</td>
                        <td>Equipe de TI, treinamentos, certificações</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 style="margin: 30px 0 15px 0; color: #2c3e50;">Detalhamento dos Habilitadores Estruturais</h3>
        <div class="enablers-grid">
            <div class="enabler-card">
                <div class="enabler-type">ESTRUTURAL</div>
                <h4>1. Princípios, Políticas e Modelos</h4>
                <div class="concept-card" style="margin: 10px 0; background: rgba(255,255,255,0.2);">
                    <strong>Exemplos:</strong>
                    <ul style="margin: 5px 0 0 15px; font-size: 0.9rem;">
                        <li>Política de Uso de TI</li>
                        <li>Código de Ética Digital</li>
                        <li>Modelo de Três Linhas de Defesa</li>
                        <li>Princípios de Arquitetura</li>
                    </ul>
                </div>
                <p>Base normativa que orienta todas as decisões de TI</p>
            </div>
            
            <div class="enabler-card">
                <div class="enabler-type">ESTRUTURAL</div>
                <h4>2. Processos</h4>
                <div class="concept-card" style="margin: 10px 0; background: rgba(255,255,255,0.2);">
                    <strong>Tipos:</strong>
                    <ul style="margin: 5px 0 0 15px; font-size: 0.9rem;">
                        <li>Processos de Governança (EDM)</li>
                        <li>Processos de Gestão (APO, BAI, DSS, MEA)</li>
                        <li>Processos de Suporte</li>
                        <li>Processos de Negócio</li>
                    </ul>
                </div>
                <p>Sequência de atividades que transformam entradas em saídas de valor</p>
            </div>
            
            <div class="enabler-card">
                <div class="enabler-type">ESTRUTURAL</div>
                <h4>3. Estruturas Organizacionais</h4>
                <div class="concept-card" style="margin: 10px 0; background: rgba(255,255,255,0.2);">
                    <strong>Elementos:</strong>
                    <ul style="margin: 5px 0 0 15px; font-size: 0.9rem;">
                        <li>Organograma de TI</li>
                        <li>Comitês de Governança</li>
                        <li>Papéis e Responsabilidades</li>
                        <li>Matriz RACI</li>
                    </ul>
                </div>
                <p>Define quem faz o quê, quando e como na organização</p>
            </div>
            
            <div class="enabler-card">
                <div class="enabler-type">ESTRUTURAL</div>
                <h4>4. Cultura, Ética e Comportamento</h4>
                <div class="concept-card" style="margin: 10px 0; background: rgba(255,255,255,0.2);">
                    <strong>Aspectos:</strong>
                    <ul style="margin: 5px 0 0 15px; font-size: 0.9rem;">
                        <li>Cultura de Inovação</li>
                        <li>Tolerância a Riscos</li>
                        <li>Colaboração</li>
                        <li>Transparência</li>
                    </ul>
                </div>
                <p>O "DNA" organizacional que influencia todas as decisões</p>
            </div>
        </div>

        <h3 style="margin: 30px 0 15px 0; color: #2c3e50;">Detalhamento dos Recursos</h3>
        <div class="enablers-grid">
            <div class="enabler-card resource">
                <div class="enabler-type">RECURSO</div>
                <h4>5. Informação</h4>
                <div class="highlight-box" style="margin: 10px 0; background: rgba(255,255,255,0.3);">
                    <strong>🏆 RECURSO MAIS VALIOSO</strong>
                    <p style="margin: 5px 0; font-size: 0.9rem;">Na era digital, informação é o ativo mais importante da organização</p>
                </div>
                <div class="concept-card" style="margin: 10px 0; background: rgba(255,255,255,0.2);">
                    <strong>Características:</strong>
                    <ul style="margin: 5px 0 0 15px; font-size: 0.9rem;">
                        <li>Qualidade e Integridade</li>
                        <li>Disponibilidade e Acessibilidade</li>
                        <li>Segurança e Confidencialidade</li>
                        <li>Relevância e Oportunidade</li>
                    </ul>
                </div>
            </div>
            
            <div class="enabler-card resource">
                <div class="enabler-type">RECURSO</div>
                <h4>6. Serviços, Infraestrutura e Aplicativos</h4>
                <div class="concept-card" style="margin: 10px 0; background: rgba(255,255,255,0.2);">
                    <strong>Componentes:</strong>
                    <ul style="margin: 5px 0 0 15px; font-size: 0.9rem;">
                        <li>Hardware e Infraestrutura</li>
                        <li>Software e Aplicações</li>
                        <li>Redes e Comunicações</li>
                        <li>Serviços de Cloud</li>
                    </ul>
                </div>
                <p>A base tecnológica que suporta todos os processos organizacionais</p>
            </div>
            
            <div class="enabler-card resource">
                <div class="enabler-type">RECURSO</div>
                <h4>7. Pessoas, Habilidades e Competências</h4>
                <div class="concept-card" style="margin: 10px 0; background: rgba(255,255,255,0.2);">
                    <strong>Dimensões:</strong>
                    <ul style="margin: 5px 0 0 15px; font-size: 0.9rem;">
                        <li>Competências Técnicas</li>
                        <li>Habilidades de Negócio</li>
                        <li>Capacidades de Liderança</li>
                        <li>Cultura de Aprendizado</li>
                    </ul>
                </div>
                <p>O capital humano que operacionaliza todos os outros habilitadores</p>
            </div>
        </div>

        <div class="highlight-box">
            <h4>🔗 Interação Entre Habilitadores</h4>
            <p>Os habilitadores funcionam como um <strong>sistema integrado</strong>:</p>
            <ul style="margin: 10px 0 0 20px;">
                <li><strong>Políticas</strong> orientam <strong>processos</strong></li>
                <li><strong>Estruturas</strong> definem <strong>pessoas</strong> responsáveis</li>
                <li><strong>Cultura</strong> influencia comportamento das <strong>pessoas</strong></li>
                <li><strong>Tecnologia</strong> suporta <strong>processos</strong></li>
                <li><strong>Informação</strong> flui através de todos os habilitadores</li>
            </ul>
        </div>

        <div class="highlight-box">
            <h4>🎯 Resumo Executivo da Aula 01</h4>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number">2</span>
                    <span class="stat-label">Conceitos Fundamentais (Eficácia vs Eficiência)</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">5</span>
                    <span class="stat-label">Fundamentos do COBIT</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">7</span>
                    <span class="stat-label">Habilitadores do Framework</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">25+</span>
                    <span class="stat-label">Anos de Evolução do COBIT</span>
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <strong>Pontos-Chave para Memorizar:</strong>
                <ul style="margin: 10px 0 0 20px;">
                    <li><strong>Eficácia ≠ Eficiência:</strong> Fazer certo vs fazer gastando menos (priorize eficácia primeiro)</li>
                    <li><strong>COBIT evoluiu:</strong> De auditoria (1996) para governança integrada (2012)</li>
                    <li><strong>5 Fundamentos:</strong> Base conceitual que sustenta todo o framework</li>
                    <li><strong>7 Habilitadores:</strong> Ferramentas práticas para implementação (4 estruturais + 3 recursos)</li>
                    <li><strong>Visão Holística:</strong> TI pervasiva exige abordagem integrada de toda a organização</li>
                    <li><strong>Framework Genérico:</strong> Aplicável a qualquer organização, independente de porte ou setor</li>
                </ul>
            </div>
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

        <div class="content-toc">
            <h4>📋 Sumário da Aula</h4>
            <ul>
                <li><a href="#governanca-gerenciamento">7. Governança vs Gerenciamento</a></li>
                <li><a href="#valor-holistica">8. Governança Holística e Demonstração de Valor</a></li>
                <li><a href="#dominios-cobit">9. Os 5 Processos/Domínios do COBIT</a></li>
                <li><a href="#build-acquire">10. Build vs Acquire - Boas Práticas</a></li>
                <li><a href="#caracteristicas-finais">11. Características Finais do Framework</a></li>
            </ul>
        </div>

        <h2 id="governanca-gerenciamento">🔄 Passo 7: Governança vs Gerenciamento</h2>
        <div class="step-content">
            <div class="step-counter">7.1</div>
            <div class="step-text">
                <h4>Separação Fundamental - Base Teórica</h4>
                <div class="highlight-box">
                    <h4>🎯 Por que Separar Governança de Gerenciamento?</h4>
                    <p><strong>Conflito de Interesses:</strong> Quem executa não pode se auto-supervisionar adequadamente</p>
                    <p><strong>Especialização:</strong> Competências diferentes exigem focos diferentes</p>
                    <p><strong>Accountability:</strong> Responsabilidades claras geram melhor prestação de contas</p>
                </div>

                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Dimensão</th>
                                <th>Governança</th>
                                <th>Gerenciamento</th>
                                <th>Exemplo Prático</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Nível Hierárquico</strong></td>
                                <td>Conselho/Diretoria</td>
                                <td>Executivos/Gestores</td>
                                <td>Conselho define política; CTO implementa</td>
                            </tr>
                            <tr>
                                <td><strong>Horizonte Temporal</strong></td>
                                <td>Longo prazo (estratégico)</td>
                                <td>Médio/Curto prazo (tático/operacional)</td>
                                <td>Conselho: visão 3-5 anos; Gestão: metas trimestrais</td>
                            </tr>
                            <tr>
                                <td><strong>Função Principal</strong></td>
                                <td>Define diretrizes, políticas e objetivos</td>
                                <td>Implementa e operacionaliza as diretrizes</td>
                                <td>Política de Cloud vs Migração para AWS</td>
                            </tr>
                            <tr>
                                <td><strong>Responsabilidade</strong></td>
                                <td>Definir "O QUE" deve ser feito</td>
                                <td>Definir "COMO" fazer</td>
                                <td>"Reduzir custos de TI" vs "Consolidar servidores"</td>
                            </tr>
                            <tr>
                                <td><strong>Tipo de Decisão</strong></td>
                                <td>Estratégicas e de investimento</td>
                                <td>Operacionais e de implementação</td>
                                <td>Aprovar orçamento vs Escolher fornecedor</td>
                            </tr>
                            <tr>
                                <td><strong>Frequência de Reuniões</strong></td>
                                <td>Mensal/Trimestral</td>
                                <td>Semanal/Diária</td>
                                <td>Comitê de TI vs Stand-up diário</td>
                            </tr>
                            <tr>
                                <td><strong>Métricas de Interesse</strong></td>
                                <td>ROI, valor para negócio, riscos</td>
                                <td>SLA, performance, produtividade</td>
                                <td>% ROI projetos vs Uptime servidores</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="process-grid">
                    <div class="process-card governance">
                        <div class="process-type">GOVERNANÇA</div>
                        <h3>Papéis Típicos</h3>
                        <ul style="margin: 10px 0 0 20px;">
                            <li>Conselho de Administração</li>
                            <li>Comitê de Governança de TI</li>
                            <li>Chief Information Officer (CIO)</li>
                            <li>Chief Digital Officer (CDO)</li>
                            <li>Auditoria Interna</li>
                        </ul>
                    </div>
                    
                    <div class="process-card">
                        <div class="process-type">GERENCIAMENTO</div>
                        <h3>Papéis Típicos</h3>
                        <ul style="margin: 10px 0 0 20px;">
                            <li>Chief Technology Officer (CTO)</li>
                            <li>Gerentes de TI</li>
                            <li>Arquitetos de Soluções</li>
                            <li>Líderes de Projeto</li>
                            <li>Administradores de Sistema</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">7.2</div>
            <div class="step-text">
                <h4>Objetivo Principal do COBIT</h4>
                <div class="highlight-box">
                    <h4>🎯 Missão Central do COBIT</h4>
                    <p style="font-size: 1.1rem; text-align: center; font-weight: 600; margin: 15px 0;">
                        "Ajudar organizações a atingir seus <strong>objetivos de negócio</strong> através da governança e gerenciamento <strong>eficaz de TI</strong>, separando adequadamente essas duas funções e demonstrando <strong>valor de forma clara</strong> para as partes interessadas."
                    </p>
                </div>

                <div class="enablers-grid">
                    <div class="enabler-card">
                        <div class="enabler-type">OBJETIVO</div>
                        <h4>Alinhar TI com Negócio</h4>
                        <p>TI não é fim em si mesma, mas meio para atingir objetivos organizacionais</p>
                    </div>
                    <div class="enabler-card resource">
                        <div class="enabler-type">MÉTODO</div>
                        <h4>Governança Eficaz</h4>
                        <p>Estruturas, processos e mecanismos adequados de direção e controle</p>
                    </div>
                    <div class="enabler-card">
                        <div class="enabler-type">RESULTADO</div>
                        <h4>Valor Demonstrável</h4>
                        <p>Benefícios tangíveis e mensuráveis para stakeholders</p>
                    </div>
                </div>

                <div class="example-box">
                    <strong>Exemplo de Aplicação Prática:</strong>
                    <br><br>
                    <strong>Situação:</strong> Empresa quer aumentar vendas online em 30%
                    <br><br>
                    <strong>Governança definiria:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Orçamento de R$ 2 milhões para projeto e-commerce</li>
                        <li>Prazo máximo de 8 meses para implementação</li>
                        <li>Critérios de sucesso: 30% aumento vendas, ROI > 150%</li>
                        <li>Comitê de acompanhamento mensal</li>
                    </ul>
                    <br>
                    <strong>Gerenciamento executaria:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Seleção de plataforma e-commerce (Magento, Shopify, etc.)</li>
                        <li>Contratação de fornecedores e equipe</li>
                        <li>Desenvolvimento e testes da solução</li>
                        <li>Treinamento de usuários e go-live</li>
                    </ul>
                </div>
            </div>
        </div>

        <h2 id="valor-holistica">🌐 Passo 8: Governança Holística e Demonstração de Valor</h2>
        <div class="step-content">
            <div class="step-counter">8.1</div>
            <div class="step-text">
                <h4>Governança Holística</h4>
                <div class="concept-card">
                    <h4>Abordagem Sistêmica Completa</h4>
                    <p><strong>Filosofia:</strong> Abranja todas as partes da empresa, não deixando nada do lado de fora</p>
                    <p><strong>Aplicabilidade:</strong> O COBIT é aplicável a empresas de qualquer natureza ou porte, fornecendo um conjunto de boas práticas genéricas</p>
                </div>

                <div class="process-grid">
                    <div class="process-card">
                        <h3>🔄 Integração Vertical</h3>
                        <p>Do estratégico ao operacional, todos os níveis organizacionais conectados</p>
                        <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                            <li>Conselho → Diretoria → Gerência → Operação</li>
                        </ul>
                    </div>
                    <div class="process-card governance">
                        <h3>↔️ Integração Horizontal</h3>
                        <p>Todos os departamentos e funções da organização</p>
                        <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                            <li>Vendas ↔ Marketing ↔ Financeiro ↔ RH ↔ Operações</li>
                        </ul>
                    </div>
                    <div class="process-card">
                        <h3>⏰ Integração Temporal</h3>
                        <p>Passado, presente e futuro considerados nas decisões</p>
                        <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                            <li>Lições aprendidas → Situação atual → Planejamento</li>
                        </ul>
                    </div>
                </div>

                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de Organização</th>
                                <th>Características</th>
                                <th>Adaptação do COBIT</th>
                                <th>Benefícios Específicos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Startup (10-50 funcionários)</strong></td>
                                <td>Ágil, recursos limitados, crescimento rápido</td>
                                <td>Processos essenciais, controles básicos</td>
                                <td>Escalabilidade, fundação sólida</td>
                            </tr>
                            <tr>
                                <td><strong>Empresa Média (200-1000)</strong></td>
                                <td>Estruturada, múltiplos sistemas, compliance</td>
                                <td>Governança formal, processos definidos</td>
                                <td>Eficiência, controle de riscos</td>
                            </tr>
                            <tr>
                                <td><strong>Multinacional (10.000+)</strong></td>
                                <td>Complexa, múltiplas geografias, regulações</td>
                                <td>Governança robusta, padronização global</td>
                                <td>Consistência, economia de escala</td>
                            </tr>
                            <tr>
                                <td><strong>Órgão Público</strong></td>
                                <td>Transparência, prestação de contas, eficiência</td>
                                <td>Foco em compliance, transparência</td>
                                <td>Accountability, otimização recursos públicos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">8.2</div>
            <div class="step-text">
                <h4>Demonstração de Valor - TI Fora do Isolamento</h4>
                <div class="concept-card">
                    <h4>Transformação Histórica do Papel da TI</h4>
                    <div class="evolution-timeline">
                        <div class="timeline-item">
                            <div class="timeline-year">Anos 70-80</div>
                            <strong>Era do Isolamento</strong>
                            <p>• TI como "caixa preta"<br>• Departamento técnico isolado<br>• Foco interno em tecnologia<br>• Pouca comunicação com negócio</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">Anos 90</div>
                            <strong>Era da Integração</strong>
                            <p>• TI começa a se alinhar ao negócio<br>• Foco em processos<br>• ERPs e sistemas integrados<br>• Métricas operacionais</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">Anos 2000</div>
                            <strong>Era da Parceria</strong>
                            <p>• TI como parceira estratégica<br>• Participação em decisões de negócio<br>• Métricas de valor<br>• Governança de TI</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">Anos 2010+</div>
                            <strong>Era da Transformação</strong>
                            <p>• TI lidera transformação digital<br>• Inovação e disrupção<br>• Agilidade e adaptabilidade<br>• Valor como vantagem competitiva</p>
                        </div>
                    </div>
                </div>

                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">75%</span>
                        <span class="stat-label">Das iniciativas de TI ainda falham em demonstrar valor claro</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">60%</span>
                        <span class="stat-label">Dos CEOs não confiam totalmente em seus CIOs</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">40%</span>
                        <span class="stat-label">Do orçamento de TI é "invisível" para o negócio</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">3x</span>
                        <span class="stat-label">Maior probabilidade de sucesso com governança adequada</span>
                    </div>
                </div>

                <div class="highlight-box">
                    <h4>🎯 Mecanismos de Demonstração de Valor</h4>
                    <div class="enablers-grid">
                        <div class="enabler-card">
                            <div class="enabler-type">COMUNICAÇÃO</div>
                            <h4>Linguagem de Negócio</h4>
                            <p>Traduzir tecnologia em impactos de negócio compreensíveis</p>
                        </div>
                        <div class="enabler-card resource">
                            <div class="enabler-type">MÉTRICAS</div>
                            <h4>KPIs de Valor</h4>
                            <p>Indicadores que conectam TI aos resultados organizacionais</p>
                        </div>
                        <div class="enabler-card">
                            <div class="enabler-type">TRANSPARÊNCIA</div>
                            <h4>Prestação de Contas</h4>
                            <p>Relatórios regulares e processos auditáveis</p>
                        </div>
                        <div class="enabler-card resource">
                            <div class="enabler-type">ALINHAMENTO</div>
                            <h4>Participação Estratégica</h4>
                            <p>TI presente nas decisões estratégicas da organização</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h2 id="dominios-cobit">⚙️ Passo 9: Os 5 Processos/Domínios do COBIT</h2>
        <div class="highlight-box">
            <h4>📊 Arquitetura dos Domínios</h4>
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Quantidade</th>
                            <th>Domínios</th>
                            <th>Foco Principal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Governança</strong></td>
                            <td>1</td>
                            <td>EDM</td>
                            <td>Avaliação, Direção e Monitoração estratégica</td>
                        </tr>
                        <tr>
                            <td><strong>Gerenciamento</strong></td>
                            <td>4</td>
                            <td>APO, BAI, DSS, MEA</td>
                            <td>Implementação e operação</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="concept-card">
            <h4>Lógica da Estrutura dos Domínios</h4>
            <p><strong>Proporção 1:4:</strong> Para cada atividade de governança, há quatro de gerenciamento</p>
            <p><strong>Razão:</strong> Governança define diretrizes (poucas), gerenciamento executa (muitas atividades)</p>
        </div>

        <div class="process-grid">
            <div class="process-card governance">
                <div class="process-type">GOVERNANÇA</div>
                <h3>EDM - Evaluate, Direct and Monitor</h3>
                <p><strong>Tradução:</strong> Avaliar, Dirigir e Monitorar</p>
                
                <div class="concept-card" style="margin: 15px 0; background: rgba(255,255,255,0.2);">
                    <h4>Características Únicas:</h4>
                    <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                        <li><strong>Único domínio</strong> focado especificamente em governança</li>
                        <li>Contém <strong>5 processos</strong> de governança</li>
                        <li>Responsabilidade do <strong>Conselho/Alta Direção</strong></li>
                        <li>Foco em <strong>valor e estratégia</strong></li>
                    </ul>
                </div>

                <div class="example-box" style="background: rgba(255,255,255,0.1); color: white;">
                    <strong>Processos EDM:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>EDM01:</strong> Assegurar definição e manutenção do framework de governança</li>
                        <li><strong>EDM02:</strong> Assegurar entrega de benefícios</li>
                        <li><strong>EDM03:</strong> Assegurar otimização de riscos</li>
                        <li><strong>EDM04:</strong> Assegurar otimização de recursos</li>
                        <li><strong>EDM05:</strong> Assegurar transparência para stakeholders</li>
                    </ul>
                </div>

                <p><strong>Atividades Típicas:</strong> Definir políticas, aprovar investimentos, monitorar performance estratégica, avaliar riscos corporativos</p>
            </div>

            <div class="process-card">
                <div class="process-type">GERENCIAMENTO</div>
                <h3>APO - Align, Plan and Organise</h3>
                <p><strong>Tradução:</strong> Alinhar, Planejar e Organizar</p>
                
                <div class="concept-card" style="margin: 15px 0; background: rgba(255,255,255,0.2);">
                    <h4>Características:</h4>
                    <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                        <li>Abrangência <strong>estratégica</strong> no gerenciamento</li>
                        <li>Identifica <strong>como a TI contribui</strong> para objetivos de negócio</li>
                        <li><strong>Não determina</strong> os objetivos (isso é da governança)</li>
                        <li>Define <strong>como agir</strong> para atendê-los</li>
                    </ul>
                </div>

                <div class="example-box" style="background: rgba(255,255,255,0.1); color: white;">
                    <strong>Exemplos de Processos APO:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>APO01:</strong> Gerenciar o framework de gestão de TI</li>
                        <li><strong>APO02:</strong> Gerenciar estratégia</li>
                        <li><strong>APO03:</strong> Gerenciar arquitetura empresarial</li>
                        <li><strong>APO07:</strong> Gerenciar recursos humanos</li>
                        <li><strong>APO13:</strong> Gerenciar segurança</li>
                    </ul>
                </div>

                <p><strong>Atividades Típicas:</strong> Planejamento estratégico de TI, definição de arquitetura, gestão de portfólio, planejamento de recursos</p>
            </div>

            <div class="process-card">
                <div class="process-type">GERENCIAMENTO</div>
                <h3>BAI - Build, Acquire and Implement</h3>
                <p><strong>Tradução:</strong> Construir, Adquirir e Implementar</p>
                
                <div class="concept-card" style="margin: 15px 0; background: rgba(255,255,255,0.2);">
                    <h4>Escopo:</h4>
                    <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                        <li>Construção ou <strong>aquisição</strong> de soluções</li>
                        <li><strong>Implementação</strong> de soluções de TI</li>
                        <li><strong>Mudanças</strong> e manutenções de sistemas</li>
                        <li><strong>Prioriza aquisição</strong> de soluções prontas</li>
                    </ul>
                </div>

                <div class="highlight-box" style="margin: 15px 0; background: rgba(255,255,255,0.3); color: #2d3436;">
                    <h4>🏗️ Filosofia Build vs Acquire</h4>
                    <p><strong>Regra Atual:</strong> Sempre priorizar ACQUIRE (aquisição)</p>
                    <p><strong>Exceção:</strong> BUILD apenas quando não há solução no mercado ou representa vantagem competitiva única</p>
                </div>

                <p><strong>Atividades Típicas:</strong> Desenvolvimento/aquisição de software, implementação de sistemas, gestão de mudanças, manutenção de aplicações</p>
            </div>

            <div class="process-card">
                <div class="process-type">GERENCIAMENTO</div>
                <h3>DSS - Deliver, Service and Support</h3>
                <p><strong>Tradução:</strong> Entregar, Serviço e Suporte</p>
                
                <div class="concept-card" style="margin: 15px 0; background: rgba(255,255,255,0.2);">
                    <h4>Essência:</h4>
                    <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                        <li><strong>Dia a dia</strong> da TI</li>
                        <li>Operação de soluções <strong>já implementadas</strong></li>
                        <li>Entrega de <strong>valor para usuários</strong></li>
                        <li>Gerenciamento <strong>cotidiano</strong> da tecnologia</li>
                    </ul>
                </div>

                <div class="example-box" style="background: rgba(255,255,255,0.1); color: white;">
                    <strong>Exemplos de Atividades DSS:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>DSS01:</strong> Gerenciar operações</li>
                        <li><strong>DSS02:</strong> Gerenciar requisições e incidentes de serviço</li>
                        <li><strong>DSS03:</strong> Gerenciar problemas</li>
                        <li><strong>DSS04:</strong> Gerenciar continuidade</li>
                        <li><strong>DSS06:</strong> Gerenciar controles de processos de negócio</li>
                    </ul>
                </div>

                <p><strong>Atividades Típicas:</strong> Service desk, monitoramento de sistemas, backup/restore, manutenção preventiva, suporte a usuários</p>
            </div>

            <div class="process-card">
                <div class="process-type">GERENCIAMENTO</div>
                <h3>MEA - Monitor, Evaluate and Assess</h3>
                <p><strong>Tradução:</strong> Monitorar, Avaliar e Medir</p>
                
                <div class="concept-card" style="margin: 15px 0; background: rgba(255,255,255,0.2);">
                    <h4>Funções Críticas:</h4>
                    <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                        <li>Assegurar <strong>qualidade</strong> dos processos</li>
                        <li>Garantir <strong>governança e conformidade</strong></li>
                        <li>Fornecer <strong>subsídios para EDM</strong></li>
                        <li>Mecanismos de <strong>avaliação</strong> adequados</li>
                    </ul>
                </div>

                <div class="highlight-box" style="margin: 15px 0; background: rgba(255,255,255,0.3); color: #2d3436;">
                    <h4>🔗 Conexão com Governança</h4>
                    <p><strong>Papel Estratégico:</strong> MEA alimenta EDM com informações para tomada de decisão</p>
                    <p><strong>Ciclo Virtuoso:</strong> EDM define diretrizes → MEA monitora resultados → EDM ajusta diretrizes</p>
                </div>

                <p><strong>Atividades Típicas:</strong> Auditoria interna, monitoramento de performance, avaliação de riscos, controle de qualidade, relatórios gerenciais</p>
            </div>
        </div>

        <div class="concept-card">
            <h4>Fluxo de Interação Entre Domínios</h4>
            <div class="evolution-timeline">
                <div class="timeline-item">
                    <div class="timeline-year">1. EDM</div>
                    <strong>Governança Define</strong>
                    <p>Políticas, objetivos, orçamentos e diretrizes estratégicas</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">2. APO</div>
                    <strong>Planejamento Estratégico</strong>
                    <p>Como a TI vai contribuir para atingir os objetivos definidos</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">3. BAI</div>
                    <strong>Implementação</strong>
                    <p>Construção/aquisição das soluções planejadas</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">4. DSS</div>
                    <strong>Operação</strong>
                    <p>Entrega de valor através da operação das soluções</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">5. MEA</div>
                    <strong>Monitoramento</strong>
                    <p>Avaliação dos resultados e feedback para governança</p>
                </div>
            </div>
        </div>

        <h2 id="build-acquire">🏗️ Passo 10: Build vs Acquire - Boas Práticas Modernas</h2>
        <div class="step-content">
            <div class="step-counter">10.1</div>
            <div class="step-text">
                <h4>Paradigma Atual: Priorizar Aquisição (Acquire)</h4>
                <div class="highlight-box">
                    <h4>🎯 Regra de Ouro Moderna</h4>
                    <p style="font-size: 1.1rem; text-align: center; font-weight: 600;">
                        "Sempre tentar <strong>ADQUIRIR</strong> soluções do mercado prontas e implementá-las com o <strong>mínimo de personalização</strong> possível."
                    </p>
                </div>
                
                <div class="concept-card">
                    <h4>Razões Estratégicas para Priorizar Aquisição</h4>
                    <div class="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Aspecto</th>
                                    <th>Acquire (Comprar)</th>
                                    <th>Build (Construir)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Time to Market</strong></td>
                                    <td>✅ Rápido (semanas/meses)</td>
                                    <td>❌ Lento (meses/anos)</td>
                                </tr>
                                <tr>
                                    <td><strong>Custo Inicial</strong></td>
                                    <td>✅ Previsível (licenças)</td>
                                    <td>❌ Imprevisível (desenvolvimento)</td>
                                </tr>
                                <tr>
                                    <td><strong>Manutenção</strong></td>
                                    <td>✅ Fornecedor responsável</td>
                                    <td>❌ Empresa responsável</td>
                                </tr>
                                <tr>
                                    <td><strong>Atualizações</strong></td>
                                    <td>✅ Automáticas do fornecedor</td>
                                    <td>❌ Desenvolvimento interno</td>
                                </tr>
                                <tr>
                                    <td><strong>Expertise</strong></td>
                                    <td>✅ Especialistas do mercado</td>
                                    <td>❌ Dependente da equipe interna</td>
                                </tr>
                                <tr>
                                    <td><strong>Riscos</strong></td>
                                    <td>✅ Compartilhados/Menores</td>
                                    <td>❌ Concentrados na empresa</td>
                                </tr>
                                <tr>
                                    <td><strong>Escalabilidade</strong></td>
                                    <td>✅ Testada no mercado</td>
                                    <td>❌ Incerta</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="example-box">
                    <strong>Exemplo Detalhado: Sistema CRM</strong>
                    <br><br>
                    <strong>Cenário:</strong> Empresa precisa de CRM para gestão de vendas
                    <br><br>
                    <strong>Opção ACQUIRE (Recomendada):</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>Soluções:</strong> Salesforce, HubSpot, Pipedrive</li>
                        <li><strong>Tempo:</strong> 2-3 meses para implementação</li>
                        <li><strong>Custo:</strong> R$ 50-200/usuário/mês</li>
                        <li><strong>Manutenção:</strong> Fornecedor responsável</li>
                        <li><strong>Atualizações:</strong> Automáticas trimestrais</li>
                        <li><strong>Suporte:</strong> 24/7 do fornecedor</li>
                    </ul>
                    <br>
                    <strong>Opção BUILD (Não recomendada):</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>Desenvolvimento:</strong> 12-18 meses</li>
                        <li><strong>Custo inicial:</strong> R$ 500.000 - R$ 2.000.000</li>
                        <li><strong>Manutenção:</strong> R$ 20.000-50.000/mês (equipe interna)</li>
                        <li><strong>Atualizações:</strong> Dependem de equipe interna</li>
                        <li><strong>Suporte:</strong> Apenas horário comercial</li>
                    </ul>
                    <br>
                    <strong>Conclusão:</strong> Acquire é 5x mais rápido e 3x mais barato
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">10.2</div>
            <div class="step-text">
                <h4>Quando Construir Internamente (Build) - Exceções Estratégicas</h4>
                <div class="concept-card">
                    <h4>Critérios para Considerar BUILD</h4>
                    <div class="enablers-grid">
                        <div class="enabler-card">
                            <div class="enabler-type">EXCLUSIVIDADE</div>
                            <h4>Não Existe no Mercado</h4>
                            <p>Solução verdadeiramente única, sem alternativas comerciais viáveis</p>
                        </div>
                        <div class="enabler-card resource">
                            <div class="enabler-type">VANTAGEM</div>
                            <h4>Diferencial Competitivo</h4>
                            <p>Representa vantagem competitiva estratégica e sustentável</p>
                        </div>
                        <div class="enabler-card">
                            <div class="enabler-type">NECESSIDADE</div>
                            <h4>Requisitos Muito Específicos</h4>
                            <p>Personalização necessária seria > 70% da solução</p>
                        </div>
                        <div class="enabler-card resource">
                            <div class="enabler-type">CAPACIDADE</div>
                            <h4>Expertise Interna</h4>
                            <p>Equipe com conhecimento superior ao mercado</p>
                        </div>
                    </div>
                </div>

                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Setor</th>
                                <th>Exemplo BUILD Justificado</th>
                                <th>Razão Estratégica</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Fintech</strong></td>
                                <td>Algoritmo proprietário de análise de crédito</td>
                                <td>Core business, vantagem competitiva direta</td>
                            </tr>
                            <tr>
                                <td><strong>Games</strong></td>
                                <td>Engine de jogo customizada</td>
                                <td>Diferenciação técnica e performance</td>
                            </tr>
                            <tr>
                                <td><strong>E-commerce</strong></td>
                                <td>Sistema de recomendação por IA</td>
                                <td>Algoritmo proprietário, dados únicos</td>
                            </tr>
                            <tr>
                                <td><strong>Manufatura</strong></td>
                                <td>Sistema de controle de produção</td>
                                <td>Processo produtivo muito específico</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="highlight-box">
                    <h4>⚠️ Riscos do BUILD - Por que Evitar</h4>
                    <p>Desenvolver internamente significa a empresa se tornar responsável por:</p>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>Desenvolvimento completo:</strong> Análise, design, codificação, testes</li>
                        <li><strong>Implementação:</strong> Deploy, migração de dados, treinamento</li>
                        <li><strong>Suporte contínuo:</strong> Manutenção, correção de bugs, helpdesk</li>
                        <li><strong>Evolução:</strong> Novas funcionalidades, atualizações de segurança</li>
                        <li><strong>Infraestrutura:</strong> Servidores, backup, disaster recovery</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>Impacto:</strong> Essas tarefas são pesadas e geralmente fogem da expertise e do negócio principal da empresa, desviando recursos de atividades estratégicas.</p>
                </div>

                <div class="example-box">
                    <strong>Case Real: Por que o Facebook Construiu Internamente</strong>
                    <br><br>
                    <strong>Contexto:</strong> Rede social em 2004
                    <br>
                    <strong>Decisão:</strong> Build (construir)
                    <br>
                    <strong>Justificativas Válidas:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Não existiam soluções de rede social no mercado</li>
                        <li>Core business era exatamente a tecnologia</li>
                        <li>Vantagem competitiva dependia da tecnologia proprietária</li>
                        <li>Equipe com expertise superior ao mercado na época</li>
                    </ul>
                    <br>
                    <strong>Resultado:</strong> Sucesso porque atendia a TODOS os critérios para BUILD
                    <br>
                    <strong>Lição:</strong> Mesmo o Facebook hoje COMPRA muitas tecnologias (WhatsApp, Instagram, Oculus) ao invés de construir tudo internamente
                </div>
            </div>
        </div>

        <h2 id="caracteristicas-finais">🎯 Passo 11: Características Finais do Framework</h2>
        <div class="step-content">
            <div class="step-counter">11.1</div>
            <div class="step-text">
                <h4>Framework Genérico e Abrangente</h4>
                <div class="concept-card">
                    <h4>Filosofia de Design do COBIT</h4>
                    <p><strong>Conceito:</strong> O COBIT não é um "guia do como fazer" prescritivo e específico</p>
                    <p><strong>Abordagem:</strong> Conjunto de boas práticas genéricas que podem ser adaptadas</p>
                    <p><strong>Flexibilidade:</strong> Aplicável a organizações de qualquer natureza ou porte</p>
                </div>

                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>O que o COBIT É</th>
                                <th>O que o COBIT NÃO É</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>✅ Framework de boas práticas</td>
                                <td>❌ Manual de procedimentos</td>
                            </tr>
                            <tr>
                                <td>✅ Diretrizes genéricas adaptáveis</td>
                                <td>❌ Receita pronta para implementar</td>
                            </tr>
                            <tr>
                                <td>✅ Estrutura conceitual</td>
                                <td>❌ Solução tecnológica</td>
                            </tr>
                            <tr>
                                <td>✅ Orientação para tomada de decisão</td>
                                <td>❌ Decisões prontas</td>
                            </tr>
                            <tr>
                                <td>✅ Base para customização</td>
                                <td>❌ Implementação padronizada</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="enablers-grid">
                    <div class="enabler-card">
                        <div class="enabler-type">ADAPTABILIDADE</div>
                        <h4>Customização Necessária</h4>
                        <p>Cada organização deve adaptar o COBIT à sua realidade específica</p>
                    </div>
                    <div class="enabler-card resource">
                        <div class="enabler-type">ESCALABILIDADE</div>
                        <h4>Implementação Gradual</h4>
                        <p>Permite começar simples e evoluir conforme maturidade</p>
                    </div>
                    <div class="enabler-card">
                        <div class="enabler-type">COMPATIBILIDADE</div>
                        <h4>Integração com Outros Frameworks</h4>
                        <p>Funciona bem com ITIL, ISO 27001, PMBOK, etc.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">11.2</div>
            <div class="step-text">
                <h4>Conexão com Governança Corporativa</h4>
                <div class="concept-card">
                    <h4>Integração Estratégica Fundamental</h4>
                    <p><strong>Princípio:</strong> A governança de TI está diretamente atrelada à governança corporativa</p>
                    <p><strong>Relacionamento:</strong> Partes distintas mas complementares do mesmo sistema organizacional</p>
                    <p><strong>Evolução:</strong> Marco do COBIT 5 - sair do isolamento para integração</p>
                </div>

                <div class="evolution-timeline">
                    <div class="timeline-item">
                        <div class="timeline-year">Governança Corporativa</div>
                        <strong>Nível Organizacional</strong>
                        <p>• Define missão, visão e valores<br>• Estabelece estratégia corporativa<br>• Supervisiona performance geral<br>• Gerencia riscos corporativos</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">Governança de TI</div>
                        <strong>Nível Tecnológico</strong>
                        <p>• Alinha TI com estratégia corporativa<br>• Otimiza valor de investimentos em TI<br>• Gerencia riscos específicos de TI<br>• Assegura conformidade em TI</p>
                    </div>
                </div>

                <div class="process-grid">
                    <div class="process-card governance">
                        <h3>🏢 Governança Corporativa</h3>
                        <p><strong>Responsabilidades:</strong></p>
                        <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                            <li>Estratégia de negócio</li>
                            <li>Alocação de capital</li>
                            <li>Gestão de stakeholders</li>
                            <li>Compliance regulatório</li>
                            <li>Gestão de performance</li>
                        </ul>
                    </div>
                    <div class="process-card">
                        <h3>💻 Governança de TI</h3>
                        <p><strong>Responsabilidades:</strong></p>
                        <ul style="margin: 10px 0 0 20px; font-size: 0.9rem;">
                            <li>Estratégia de TI alinhada</li>
                            <li>Investimentos em tecnologia</li>
                            <li>Gestão de riscos de TI</li>
                            <li>Compliance tecnológico</li>
                            <li>Performance de TI</li>
                        </ul>
                    </div>
                </div>

                <div class="highlight-box">
                    <h4>🔗 Pontos de Integração</h4>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>Estratégia:</strong> TI deve habilitar objetivos de negócio</li>
                        <li><strong>Orçamento:</strong> Investimentos em TI aprovados pela governança corporativa</li>
                        <li><strong>Riscos:</strong> Riscos de TI impactam riscos corporativos</li>
                        <li><strong>Compliance:</strong> Regulamentações afetam TI e negócio simultaneamente</li>
                        <li><strong>Performance:</strong> Métricas de TI contribuem para métricas corporativas</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="step-content">
            <div class="step-counter">11.3</div>
            <div class="step-text">
                <h4>Objetivo Final do COBIT</h4>
                <div class="highlight-box">
                    <h4>🚀 Meta Suprema do Framework</h4>
                    <p style="font-size: 1.2rem; text-align: center; font-weight: 600; margin: 20px 0;">
                        "Fornecer <strong>subsídios adequados</strong> para que o domínio de governança <strong>(EDM)</strong> seja <strong>efetivamente implementado</strong> na organização, criando <strong>valor demonstrável</strong> através de TI alinhada aos <strong>objetivos de negócio</strong>."
                    </p>
                </div>

                <div class="concept-card">
                    <h4>Decomposição do Objetivo Final</h4>
                    <div class="enablers-grid">
                        <div class="enabler-card">
                            <div class="enabler-type">SUBSÍDIOS</div>
                            <h4>Ferramentas e Processos</h4>
                            <p>Frameworks, metodologias, métricas e controles necessários</p>
                        </div>
                        <div class="enabler-card resource">
                            <div class="enabler-type">EDM</div>
                            <h4>Governança Efetiva</h4>
                            <p>Implementação real e funcional dos processos de governança</p>
                        </div>
                        <div class="enabler-card">
                            <div class="enabler-type">VALOR</div>
                            <h4>Benefícios Demonstráveis</h4>
                            <p>Resultados tangíveis e mensuráveis para a organização</p>
                        </div>
                        <div class="enabler-card resource">
                            <div class="enabler-type">ALINHAMENTO</div>
                            <h4>TI ↔ Negócio</h4>
                            <p>Tecnologia servindo aos objetivos organizacionais</p>
                        </div>
                    </div>
                </div>

                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">5</span>
                        <span class="stat-label">Domínios Integrados (1 Governança + 4 Gerenciamento)</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">40</span>
                        <span class="stat-label">Processos Detalhados no COBIT 2019</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">7</span>
                        <span class="stat-label">Habilitadores para Implementação</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">100%</span>
                        <span class="stat-label">Cobertura da Organização</span>
                    </div>
                </div>

                <div class="example-box">
                    <strong>Exemplo de Sucesso na Implementação:</strong>
                    <br><br>
                    <strong>Empresa:</strong> Banco médio porte (5.000 funcionários)
                    <br>
                    <strong>Desafio:</strong> Alta taxa de falhas em projetos de TI (70%)
                    <br>
                    <strong>Implementação COBIT:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li><strong>EDM:</strong> Criou Comitê de Governança de TI</li>
                        <li><strong>APO:</strong> Implementou gestão de portfólio</li>
                        <li><strong>BAI:</strong> Padronizou processo de desenvolvimento</li>
                        <li><strong>DSS:</strong> Melhorou service desk e monitoramento</li>
                        <li><strong>MEA:</strong> Implementou auditoria contínua</li>
                    </ul>
                    <br>
                    <strong>Resultados em 2 anos:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Taxa de sucesso de projetos: 70% → 90%</li>
                        <li>Redução de custos operacionais: 25%</li>
                        <li>Tempo médio de desenvolvimento: -40%</li>
                        <li>Satisfação de usuários: 60% → 85%</li>
                        <li>ROI em TI: 150% → 280%</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="highlight-box">
            <h4>🎯 Resumo Executivo da Aula 02</h4>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number">1:4</span>
                    <span class="stat-label">Proporção Governança:Gerenciamento</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">5</span>
                    <span class="stat-label">Domínios Interconectados</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">80%</span>
                    <span class="stat-label">dos casos devem priorizar Acquire vs Build</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Integração com Governança Corporativa</span>
                </div>
            </div>
            
            <div style="margin-top: 25px;">
                <strong>🔑 Pontos-Chave para Memorizar:</strong>
                <ul style="margin: 15px 0 0 20px; line-height: 1.8;">
                    <li><strong>Governança ≠ Gerenciamento:</strong> Estratégico (O QUE) vs Operacional (COMO) - separação fundamental</li>
                    <li><strong>EDM é único de Governança:</strong> Todos os outros 4 domínios (APO, BAI, DSS, MEA) são de Gerenciamento</li>
                    <li><strong>Fluxo lógico dos domínios:</strong> EDM define → APO planeja → BAI implementa → DSS opera → MEA monitora → realimenta EDM</li>
                    <li><strong>Build vs Acquire:</strong> SEMPRE priorize aquisição, construa internamente APENAS quando há vantagem competitiva ou não existe no mercado</li>
                    <li><strong>Framework genérico:</strong> Boas práticas adaptáveis, não receita pronta - cada organização customiza conforme sua realidade</li>
                    <li><strong>Integração corporativa:</strong> Governança de TI é parte da governança corporativa, não função isolada</li>
                    <li><strong>Objetivo final:</strong> Habilitar EDM para gerar valor demonstrável através de TI alinhada ao negócio</li>
                </ul>
            </div>

            <div style="margin-top: 25px; padding: 20px; background: rgba(52, 152, 219, 0.1); border-radius: 10px;">
                <h4 style="color: #2980b9; margin-bottom: 15px;">📚 Consolidação do Aprendizado</h4>
                <p><strong>Ao final desta aula, você deve ser capaz de:</strong></p>
                <ul style="margin: 10px 0 0 20px;">
                    <li>Distinguir claramente governança de gerenciamento em qualquer contexto</li>
                    <li>Explicar o papel específico de cada um dos 5 domínios do COBIT</li>
                    <li>Justificar quando escolher entre Build vs Acquire</li>
                    <li>Compreender como o COBIT se integra à governança corporativa</li>
                    <li>Aplicar os conceitos em cenários reais de sua organização</li>
                </ul>
            </div>
        </div>

        <div class="concept-card">
            <h4>🔄 Preparação para Próximos Passos</h4>
            <p>Com o conhecimento dos conceitos fundamentais (Aula 01) e da estrutura dos domínios (Aula 02), você está preparado para:</p>
            <ul style="margin: 10px 0 0 20px;">
                <li><strong>Aplicação prática:</strong> Avaliar a maturidade de governança em sua organização</li>
                <li><strong>Implementação:</strong> Definir por onde começar a implementação do COBIT</li>
                <li><strong>Medição:</strong> Estabelecer métricas de sucesso para iniciativas de governança</li>
                <li><strong>Evolução:</strong> Planejar a evolução gradual da maturidade de TI</li>
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