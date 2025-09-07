export const writingPhases = {
  planning: { 
    title: 'Planning', 
    color: 'bg-blue-500',
    description: 'Setting goals and organizing your main ideas'
  },
  drafting: { 
    title: 'Drafting', 
    color: 'bg-green-500',
    description: 'Writing your first draft and getting ideas on paper'
  },
  revising: { 
    title: 'Revising', 
    color: 'bg-yellow-500',
    description: 'Reorganizing and improving your content'
  },
  editing: { 
    title: 'Editing', 
    color: 'bg-purple-500',
    description: 'Grammar, spelling, and final checks'
  }
};

export const writingStrategies = {
  planning: [
    "Use the 5W1H technique (Who, What, Where, When, Why, How)",
    "Create a mind map of your main ideas",
    "Identify your target audience",
    "Define your writing purpose clearly",
    "Brainstorm key points to cover",
    "Set specific writing goals"
  ],
  drafting: [
    "Don't aim for perfection, just write",
    "Develop your main ideas paragraph by paragraph",
    "Use transition sentences to connect ideas",
    "Don't self-criticize during the first draft",
    "Focus on getting your thoughts down",
    "Write freely without stopping to edit"
  ],
  revising: [
    "Is your main idea clearly expressed?",
    "Are your paragraphs in logical order?",
    "Do you have enough examples and details?",
    "Is your conclusion strong and effective?",
    "Does your writing flow smoothly?",
    "Have you addressed your audience appropriately?"
  ],
  editing: [
    "Check for grammar errors",
    "Correct spelling mistakes",
    "Look for word repetition",
    "Vary your sentence structures",
    "Check punctuation and capitalization",
    "Read aloud to catch errors"
  ]
};

export const generateBotResponse = (userMessage, phase) => {
  const responses = {
    planning: [
      "Great topic choice! Now let's set your writing goals. Why are you writing this piece?",
      "Who is your target audience? Understanding your readers will help shape your writing.",
      "Can you summarize your main idea in one sentence? What's the key message you want to convey?",
      "What main points or subtopics do you plan to cover in your writing?",
      "Let's brainstorm! What ideas come to mind when you think about this topic?",
      "Have you considered what you want your readers to think or feel after reading this?"
    ],
    drafting: [
      "Perfect! Time to start writing. Begin with your main idea clearly stated in the first paragraph.",
      "Remember, don't edit while drafting. Just get your ideas down on paper first.",
      "Organize each paragraph around one main idea to keep your writing focused.",
      "Use transition words and phrases to connect your paragraphs smoothly.",
      "Keep writing! You can always improve it later in the revision phase.",
      "Focus on expressing your thoughts clearly rather than perfect grammar right now."
    ],
    revising: [
      "Great progress! Let's review your work objectively. Is your main idea clearly expressed?",
      "Does the order of your paragraphs make sense? Can readers follow your logic?",
      "Are your examples sufficient? Do you need to add more details or explanations?",
      "Is your conclusion strong? Does it leave the desired impact on your readers?",
      "Check if your writing flows well from one idea to the next.",
      "Does your writing effectively address your intended audience?"
    ],
    editing: [
      "Final stage! Let's polish your writing. Check for any grammar errors in your sentences.",
      "Review spelling carefully, especially proper nouns and commonly confused words.",
      "Have you repeated the same words too often? Consider using synonyms for variety.",
      "Vary your sentence lengths - mix short and long sentences for better flow.",
      "Check your punctuation, especially commas and apostrophes.",
      "Try reading your work aloud to catch any remaining errors or awkward phrases."
    ]
  };

  return responses[phase][Math.floor(Math.random() * responses[phase].length)];
};
