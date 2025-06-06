export interface Quote {
  id: string;
  text: string;
  author: string;
  authorBio: string;
  emotion: Emotion;
}

export interface Emotion {
  id: string;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  keywords?: string[];
}

export interface GameState {
  mode: 'emotion' | 'game';
  currentQuote: Quote | null;
  guesses: string[];
  gameStatus: 'playing' | 'won' | 'lost';
  maxGuesses: number;
  score: number;
  currentStreak: number;
  highScore: number;
  longestStreak: number;
  gameMode: 'daily' | 'streaks';
}