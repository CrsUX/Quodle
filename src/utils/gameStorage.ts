// Local storage utilities for game data
export interface GameStats {
  highScore: number;
  longestStreak: number;
  totalGamesPlayed: number;
  totalCorrectGuesses: number;
}

const STORAGE_KEY = 'quodle-game-stats';

export const getGameStats = (): GameStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading game stats:', error);
  }
  
  return {
    highScore: 0,
    longestStreak: 0,
    totalGamesPlayed: 0,
    totalCorrectGuesses: 0
  };
};

export const saveGameStats = (stats: GameStats): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Error saving game stats:', error);
  }
};

export const calculateScore = (guessNumber: number, maxGuesses: number): number => {
  // More points for fewer guesses
  const basePoints = 100;
  const bonusPoints = Math.max(0, (maxGuesses - guessNumber) * 20);
  return basePoints + bonusPoints;
};

export const updateGameStats = (
  currentStats: GameStats,
  won: boolean,
  score: number,
  currentStreak: number
): GameStats => {
  const newStats = {
    ...currentStats,
    totalGamesPlayed: currentStats.totalGamesPlayed + 1,
    totalCorrectGuesses: won ? currentStats.totalCorrectGuesses + 1 : currentStats.totalCorrectGuesses,
    highScore: Math.max(currentStats.highScore, score),
    longestStreak: Math.max(currentStats.longestStreak, currentStreak)
  };
  
  saveGameStats(newStats);
  return newStats;
};