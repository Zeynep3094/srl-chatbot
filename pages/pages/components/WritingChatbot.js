import React, { useState, useRef, useEffect } from 'react';
import { Send, FileText, Lightbulb } from 'lucide-react';
import PhaseIndicator from './PhaseIndicator';
import MessageBubble from './MessageBubble';
import { writingPhases, writingStrategies, generateBotResponse } from '../utils/writingStrategies';

const WritingChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your SRL writing assistant. I\'m here to help you develop your writing skills. What would you like to write about today?',
      timestamp: new Date(),
      category: 'greeting'
    }
  ]);
  const [input, setInput] = useState('');
  const [currentPhase, setCurrentPhase] = useState('planning');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date(),
      category: 'user-input'
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);

    // Simulated AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: generateBotResponse(input, currentPhase),
        timestamp: new Date(),
        category: 'guidance',
        strategies: writingStrategies[currentPhase].slice(0, 2)
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handlePhaseChange = (newPhase) => {
    setCurrentPhase(newPhase);
    const phaseChangeMessage = {
      id: messages.length + 1,
      type: 'bot',
      content: `Let's move to the ${writingPhases[newPhase].title} phase! ${writingPhases[newPhase].description}`,
      timestamp: new Date(),
      category: 'phase-change',
      strategies: writingStrategies[newPhase]
    };
    setMessages(prev => [...prev, phaseChangeMessage]);
  };

  const quickActions = [
    { text: "How do I choose a writing topic?", emoji: "📝" },
    { text: "How can I create an idea map?", emoji: "🗺️" },
    { text: "How do I connect my paragraphs?", emoji: "🔗" },
    { text: "How can I review my writing?", emoji: "👁️" }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex items-center">
          <FileText className="mr-3" size={24} />
          <div>
            <h1 className="text-xl font-bold">Writing Skill Assistant</h1>
            <p className="text-blue-100">Your Self-Regulated Learning writing companion</p>
          </div>
        </div>
      </div>

      {/* Writing Phases */}
      <div className="p-4 border-b bg-gray-50">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Writing Process Phases</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Object.keys(writingPhases).map((phase) => (
            <button
              key={phase}
              onClick={() => handlePhaseChange(phase)}
              className="text-left"
            >
              <PhaseIndicator phase={phase} isActive={currentPhase === phase} />
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`What would you like to work on in the ${writingPhases[currentPhase].title} phase?`}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send size={18} />
          </button>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-3 flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <button 
              key={index}
              onClick={() => setInput(action.text)}
              className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs hover:bg-gray-50"
            >
              {action.emoji} {action.text.split(' ').slice(0, 3).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WritingChatbot;
