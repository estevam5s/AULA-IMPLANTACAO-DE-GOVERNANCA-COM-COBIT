# COBIT - Sistema Interativo de Aprendizagem

Sistema interativo completo para o curso "Implantação de Governança com COBIT" desenvolvido em React.

## 🎯 Sobre o Projeto

Este sistema foi desenvolvido para apoiar o ensino da disciplina de Governança de TI utilizando o framework COBIT 2019, ministrada pelo Prof. Eder José Cassimiro.

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm start

# Construir para produção
npm run build
```

O sistema estará disponível em: http://localhost:3000

## ✨ Funcionalidades

- ✅ **Interface moderna e responsiva** com gradientes e animações
- ✅ **Sistema de navegação por abas** (8 seções principais)
- ✅ **Chatbot integrado com IA** (Google Gemini API)
- ✅ **Exercícios interativos** com feedback instantâneo
- ✅ **Material didático completo** das 2 aulas
- ✅ **Sistema de modais** para visualização de aulas
- ✅ **Persistência de dados** com LocalStorage
- ✅ **Analytics simples** de uso
- ✅ **Navegação por teclado** (Ctrl+1-8)
- ✅ **Sistema de sugestões** no chatbot
- ✅ **Prevenção de spam** no chat
- ✅ **Formatação de markdown** nas mensagens
- ✅ **Sistema de cronograma** interativo
- ✅ **Recursos adicionais** e bibliografia

## 📚 Conteúdo do Curso

### Aula 01: Conceitos Fundamentais
- Eficácia vs Eficiência em TI
- Frameworks para Tecnologia da Informação  
- Evolução histórica do COBIT
- Os 5 Fundamentos do COBIT
- Os 7 Habilitadores do Framework

### Aula 02: Estrutura e Domínios
- Governança vs Gerenciamento
- Os 5 Domínios/Processos do COBIT
- EDM - Evaluate, Direct and Monitor
- Processos de Gerenciamento (APO, BAI, DSS, MEA)
- Build vs Acquire - Decisões estratégicas

## 🤖 Assistente Virtual

O sistema inclui um assistente virtual integrado com Google Gemini que pode:
- Explicar conceitos do COBIT
- Ajudar com exercícios
- Fornecer casos práticos
- Esclarecer dúvidas sobre o curso

## 🛠 Tecnologias Utilizadas

- **React 18** - Framework principal
- **CSS3** - Estilos com gradientes e animações
- **Google Gemini API** - IA para chatbot
- **LocalStorage** - Persistência de dados
- **ES6+** - JavaScript moderno

## 📱 Design Responsivo

O sistema é totalmente responsivo e funciona em:
- 💻 Desktop
- 📱 Tablets
- 📱 Smartphones

## ⌨️ Atalhos de Teclado

- `Ctrl+1` - Visão Geral
- `Ctrl+2` - Ementa
- `Ctrl+3` - Aulas
- `Ctrl+4` - Exercícios
- `Ctrl+5` - Resumo
- `Ctrl+6` - Recursos
- `Ctrl+7` - Cronograma
- `Ctrl+8` - Chatbot
- `Esc` - Fechar modais

## 📊 Sistema de Avaliação

- **Participação**: 20%
- **Exercícios**: 30%
- **Projeto**: 25%
- **Avaliação Final**: 25%

## 🔧 Configuração da API

Para utilizar o chatbot, certifique-se de que a API key do Google Gemini está configurada em:
`src/data/courseData.js`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.js
│   ├── Navigation.js
│   ├── Overview.js
│   ├── Ementa.js
│   ├── Aulas.js
│   ├── Exercicios.js
│   ├── Resumo.js
│   ├── Recursos.js
│   ├── Cronograma.js
│   ├── Chatbot.js
│   ├── Footer.js
│   └── AulaModal.js
├── data/               # Dados do curso
│   └── courseData.js
├── hooks/              # Hooks customizados
│   └── useChatbot.js
├── styles/             # Estilos CSS
│   └── globals.css
├── utils/              # Utilitários
│   └── helpers.js
├── App.js              # Componente principal
└── index.js            # Ponto de entrada
```

## 📈 Analytics

O sistema coleta dados simples de uso (armazenados localmente):
- Navegação entre seções
- Interações com aulas
- Uso do chatbot
- Contagem de visitas

## 👨‍🏫 Professor

**Eder José Cassimiro**
- 14 anos como Professor na Estácio BH
- 22 anos de experiência em Docência no Ensino Superior
- 30+ anos como Profissional de TI
- Atual Auditor de Sistemas na CEMIG

## 📄 Licença

Este projeto é para uso educacional na disciplina de Governança de TI.

---

Desenvolvido com ❤️ para o ensino de COBIT 2019
