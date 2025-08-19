// Utilitários para o sistema COBIT

export const trackUsage = (action, element = '') => {
  const usage = JSON.parse(localStorage.getItem('cobit_usage') || '{}');
  const key = element ? `${action}_${element}` : action;
  usage[key] = (usage[key] || 0) + 1;
  localStorage.setItem('cobit_usage', JSON.stringify(usage));
  console.log('Ação rastreada:', key, 'Total:', usage[key]);
};

export const getUsageStats = () => {
  return JSON.parse(localStorage.getItem('cobit_usage') || '{}');
};

export const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleString('pt-BR');
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export const saveProgress = (section, aula = null) => {
  const progress = {
    section,
    aula,
    timestamp: Date.now()
  };
  localStorage.setItem('cobit_progress', JSON.stringify(progress));
};

export const loadProgress = () => {
  const saved = localStorage.getItem('cobit_progress');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error('Erro ao carregar progresso:', error);
    }
  }
  return null;
};

export const exportUserData = () => {
  const data = {
    progress: loadProgress(),
    usage: getUsageStats(),
    chatHistory: JSON.parse(localStorage.getItem('cobit_chat_history') || '[]'),
    timestamp: Date.now()
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cobit-dados-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const clearAllData = () => {
  const keys = ['cobit_progress', 'cobit_usage', 'cobit_chat_history', 'cobit_visitor_count'];
  keys.forEach(key => localStorage.removeItem(key));
  console.log('Todos os dados foram limpos');
};