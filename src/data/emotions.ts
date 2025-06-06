import { Emotion } from '../types';

export const emotions: Emotion[] = [
  // Core emotions
  {
    id: 'unmotivated',
    name: 'Unmotivated',
    description: 'Feeling stuck or lacking drive',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    icon: '⚡',
    keywords: ['lazy', 'procrastination', 'stuck', 'uninspired', 'apathetic', 'listless', 'sluggish', 'lethargic']
  },
  {
    id: 'anxious',
    name: 'Anxious',
    description: 'Overwhelmed by worry or stress',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    icon: '🌊',
    keywords: ['worried', 'stressed', 'nervous', 'fearful', 'panic', 'restless', 'uneasy', 'tense', 'apprehensive']
  },
  {
    id: 'discouraged',
    name: 'Discouraged',
    description: 'Feeling defeated or hopeless',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    icon: '🌱',
    keywords: ['defeated', 'hopeless', 'disappointed', 'dejected', 'downhearted', 'dispirited', 'demoralized']
  },
  {
    id: 'lonely',
    name: 'Lonely',
    description: 'Craving connection and understanding',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    icon: '🤝',
    keywords: ['isolated', 'alone', 'disconnected', 'solitary', 'abandoned', 'friendless', 'empty']
  },
  {
    id: 'overwhelmed',
    name: 'Overwhelmed',
    description: 'Too much to handle at once',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    icon: '🧘',
    keywords: ['stressed', 'overloaded', 'swamped', 'buried', 'drowning', 'exhausted', 'burned out']
  },
  {
    id: 'uncertain',
    name: 'Uncertain',
    description: 'Unclear about the path forward',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    icon: '🧭',
    keywords: ['confused', 'lost', 'doubtful', 'unsure', 'indecisive', 'questioning', 'puzzled']
  },
  {
    id: 'angry',
    name: 'Angry',
    description: 'Feeling frustrated or resentful',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    icon: '🕊️',
    keywords: ['frustrated', 'mad', 'furious', 'irritated', 'resentful', 'rage', 'annoyed', 'livid']
  },
  {
    id: 'tired',
    name: 'Tired',
    description: 'Exhausted and needing renewal',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    icon: '✨',
    keywords: ['exhausted', 'weary', 'drained', 'fatigued', 'worn out', 'depleted', 'burnout', 'sleepy']
  },
  {
    id: 'grateful',
    name: 'Grateful',
    description: 'Appreciating life\'s blessings',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    icon: '🙏',
    keywords: ['thankful', 'appreciative', 'blessed', 'content', 'satisfied', 'humble']
  },
  {
    id: 'inspired',
    name: 'Inspired',
    description: 'Feeling creative and motivated',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    icon: '💡',
    keywords: ['creative', 'energized', 'motivated', 'uplifted', 'enthusiastic', 'excited']
  },
  {
    id: 'heartbroken',
    name: 'Heartbroken',
    description: 'Dealing with loss or grief',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    icon: '💔',
    keywords: ['grief', 'loss', 'mourning', 'sorrow', 'devastated', 'broken', 'sad']
  },
  {
    id: 'proud',
    name: 'Proud',
    description: 'Celebrating achievements and growth',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    icon: '🏆',
    keywords: ['accomplished', 'successful', 'confident', 'satisfied', 'triumphant', 'victorious']
  },
  
  // Additional emotions for comprehensive coverage
  {
    id: 'jealous',
    name: 'Jealous',
    description: 'Envious of others\' success or possessions',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    icon: '👁️',
    keywords: ['envious', 'resentful', 'covetous', 'bitter', 'competitive', 'insecure']
  },
  {
    id: 'hopeful',
    name: 'Hopeful',
    description: 'Optimistic about the future',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    icon: '🌅',
    keywords: ['optimistic', 'positive', 'expectant', 'confident', 'believing', 'trusting']
  },
  {
    id: 'fearful',
    name: 'Fearful',
    description: 'Afraid of what might happen',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    icon: '🛡️',
    keywords: ['scared', 'afraid', 'terrified', 'worried', 'anxious', 'nervous', 'frightened']
  },
  {
    id: 'excited',
    name: 'Excited',
    description: 'Enthusiastic about upcoming events',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    icon: '🎉',
    keywords: ['enthusiastic', 'thrilled', 'eager', 'animated', 'energetic', 'pumped']
  },
  {
    id: 'peaceful',
    name: 'Peaceful',
    description: 'Calm and serene',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    icon: '🕊️',
    keywords: ['calm', 'serene', 'tranquil', 'relaxed', 'centered', 'balanced', 'zen']
  },
  {
    id: 'confused',
    name: 'Confused',
    description: 'Unable to understand or make sense of things',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    icon: '❓',
    keywords: ['puzzled', 'bewildered', 'perplexed', 'lost', 'unclear', 'muddled']
  },
  {
    id: 'disappointed',
    name: 'Disappointed',
    description: 'Let down by unmet expectations',
    color: 'text-slate-500',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    icon: '😔',
    keywords: ['let down', 'upset', 'dissatisfied', 'disillusioned', 'frustrated']
  },
  {
    id: 'stressed',
    name: 'Stressed',
    description: 'Under pressure and tension',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    icon: '⚡',
    keywords: ['pressured', 'tense', 'strained', 'overwhelmed', 'frazzled', 'wound up']
  },
  {
    id: 'content',
    name: 'Content',
    description: 'Satisfied and at peace',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    icon: '😌',
    keywords: ['satisfied', 'fulfilled', 'happy', 'pleased', 'comfortable', 'at ease']
  },
  {
    id: 'restless',
    name: 'Restless',
    description: 'Unable to rest or be still',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    icon: '🌪️',
    keywords: ['agitated', 'fidgety', 'impatient', 'unsettled', 'antsy', 'edgy']
  },
  {
    id: 'melancholy',
    name: 'Melancholy',
    description: 'A gentle sadness or pensiveness',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    icon: '🌧️',
    keywords: ['sad', 'pensive', 'wistful', 'sorrowful', 'mournful', 'reflective']
  },
  {
    id: 'determined',
    name: 'Determined',
    description: 'Resolved to achieve your goals',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    icon: '🎯',
    keywords: ['focused', 'driven', 'resolute', 'committed', 'persistent', 'dedicated']
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    description: 'Longing for the past',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    icon: '📸',
    keywords: ['wistful', 'reminiscent', 'sentimental', 'yearning', 'homesick']
  },
  {
    id: 'curious',
    name: 'Curious',
    description: 'Eager to learn and explore',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    icon: '🔍',
    keywords: ['inquisitive', 'interested', 'wondering', 'exploring', 'questioning']
  },
  {
    id: 'embarrassed',
    name: 'Embarrassed',
    description: 'Feeling awkward or self-conscious',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    icon: '😳',
    keywords: ['ashamed', 'awkward', 'self-conscious', 'humiliated', 'flustered']
  },
  {
    id: 'bored',
    name: 'Bored',
    description: 'Lacking interest or excitement',
    color: 'text-gray-500',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    icon: '😴',
    keywords: ['uninterested', 'dull', 'tedious', 'monotonous', 'unstimulated']
  }
];

// Enhanced search function
export const searchEmotions = (searchTerm: string): Emotion[] => {
  if (!searchTerm || searchTerm.length === 0) return [];
  
  const term = searchTerm.toLowerCase().trim();
  
  return emotions.filter(emotion => {
    // Search in emotion name
    if (emotion.name.toLowerCase().includes(term)) return true;
    
    // Search in emotion description
    if (emotion.description.toLowerCase().includes(term)) return true;
    
    // Search in keywords
    if (emotion.keywords && emotion.keywords.some(keyword => 
      keyword.toLowerCase().includes(term) || term.includes(keyword.toLowerCase())
    )) return true;
    
    return false;
  }).sort((a, b) => {
    // Prioritize exact name matches
    if (a.name.toLowerCase() === term) return -1;
    if (b.name.toLowerCase() === term) return 1;
    
    // Then prioritize name starts with
    if (a.name.toLowerCase().startsWith(term)) return -1;
    if (b.name.toLowerCase().startsWith(term)) return 1;
    
    // Then prioritize keyword exact matches
    const aExactKeyword = a.keywords?.some(k => k.toLowerCase() === term);
    const bExactKeyword = b.keywords?.some(k => k.toLowerCase() === term);
    if (aExactKeyword && !bExactKeyword) return -1;
    if (bExactKeyword && !aExactKeyword) return 1;
    
    return 0;
  });
};