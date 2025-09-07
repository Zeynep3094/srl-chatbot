import React from 'react';
import { Target, Edit3, Brain, CheckCircle } from 'lucide-react';

const PhaseIndicator = ({ phase, isActive }) => {
  const phases = {
    planning: { title: 'Planning', icon: Target, color: 'bg-blue-500' },
    drafting: { title: 'Drafting', icon: Edit3, color: 'bg-green-500' },
    revising: { title: 'Revising', icon: Brain, color: 'bg-yellow-500' },
    editing: { title: 'Editing', icon: CheckCircle, color: 'bg-purple-500' }
  };

  const PhaseIcon = phases[phase].icon;
  
  return (
    <div className={`flex items-center p-3 rounded-lg transition-all ${
      isActive 
        ? `${phases[phase].color} text-white shadow-lg` 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}>
      <PhaseIcon size={20} className="mr-2" />
      <div>
        <div className="font-medium text-sm">{phases[phase].title}</div>
      </div>
    </div>
  );
};

export default PhaseIndicator;
