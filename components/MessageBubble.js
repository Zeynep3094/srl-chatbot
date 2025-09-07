import React from 'react';
import { Lightbulb } from 'lucide-react';

const MessageBubble = ({ message }) => {
  return (
    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        message.type === 'user' 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-100 text-gray-800'
      }`}>
        <p className="text-sm">{message.content}</p>
        
        {/* Strategy suggestions for bot messages */}
        {message.type === 'bot' && message.strategies && (
          <div className="mt-3 p-2 bg-white rounded border-l-4 border-blue-400">
            <div className="flex items-center text-xs text-gray-600 mb-1">
              <Lightbulb size={12} className="mr-1" />
              Writing Strategies
            </div>
            <ul className="text-xs space-y-1">
              {message.strategies.map((strategy, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <p className="text-xs mt-1 opacity-70">
          {message.timestamp.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
