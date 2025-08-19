import { useState, useEffect } from 'react';

export const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  // Prevenção de spam
  const [lastMessageTime, setLastMessageTime] = useState(0);

  const canSendMessage = () => {
    const now = Date.now();
    const timeDiff = now - lastMessageTime;
    return timeDiff >= 2000; // 2 segundos entre mensagens
  };

  const updateLastMessageTime = () => {
    setLastMessageTime(Date.now());
  };

  // Persistir histórico
  useEffect(() => {
    const savedHistory = localStorage.getItem('cobit_chat_history');
    if (savedHistory) {
      try {
        setChatHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Erro ao carregar histórico do chat:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem('cobit_chat_history', JSON.stringify(chatHistory.slice(-20)));
    }
  }, [chatHistory]);

  return {
    messages,
    setMessages,
    isTyping,
    setIsTyping,
    chatHistory,
    setChatHistory,
    canSendMessage,
    updateLastMessageTime
  };
};

export default useChatbot;