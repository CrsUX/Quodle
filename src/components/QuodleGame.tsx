import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trophy, Target, RotateCcw, Lightbulb } from 'lucide-react';
import { Quote, GameState } from '../types';
import { getRandomAuthors } from '../data/authors';
import { calculateScore, updateGameStats, getGameStats } from '../utils/gameStorage';
import GameStats from './GameStats';
import GameModeToggle from './GameModeToggle';
import StreakNotification from './StreakNotification';

interface QuodleGameProps {
  quote: Quote;
  gameState: GameState;
  onBack: () => void;
  onPlayAgain: (newGameState?: Partial<GameState>) => void;
  onStatsUpdate: (stats: any) => void;
}

const QuodleGame: React.FC<QuodleGameProps> = ({ 
  quote, 
  gameState, 
  onBack, 
  onPlayAgain, 
  onStatsUpdate 
}) => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [showHint, setShowHint] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [showStreakNotification, setShowStreakNotification] = useState(false);
  const [streakData, setStreakData] = useState({ streak: 0, score: 0, isNewRecord: false });
  const maxGuesses = gameState.maxGuesses;
  const [selectedGameMode, setSelectedGameMode] = useState<'daily' | 'streaks'>(gameState.gameMode);

  useEffect(() => {
    // Generate multiple choice options
    const optionCount = gameState.gameMode === 'daily' ? 6 : 4; // 6 options for daily, 4 for streaks
    const randomAuthors = getRandomAuthors(quote.author, optionCount);
    const allOptions = [quote.author, ...randomAuthors].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
    
    // Reset game state
    setGuesses([]);
    setGameStatus('playing');
    setShowHint(false);
  }, [quote]);

  const handleGuess = (author: string) => {
    if (gameStatus !== 'playing') return;

    const newGuesses = [...guesses, author];
    setGuesses(newGuesses);

    if (author === quote.author) {
      setGameStatus('won');
      
      // Calculate score and update streaks
      const earnedScore = calculateScore(newGuesses.length, maxGuesses);
      const newCurrentStreak = gameState.currentStreak + 1;
      const newTotalScore = gameState.score + earnedScore;
      
      // Check for new records
      const currentStats = getGameStats();
      const isNewStreakRecord = newCurrentStreak > currentStats.longestStreak;
      const isNewScoreRecord = newTotalScore > currentStats.highScore;
      
      // Update game stats
      const updatedStats = updateGameStats(currentStats, true, newTotalScore, newCurrentStreak);
      onStatsUpdate(updatedStats);
      
      // Show streak notification
      setStreakData({
        streak: newCurrentStreak,
        score: earnedScore,
        isNewRecord: isNewStreakRecord || isNewScoreRecord
      });
      setShowStreakNotification(true);
      
      // Auto-progress to next quote in streaks mode
      if (gameState.gameMode === 'streaks') {
        setTimeout(() => {
          setShowStreakNotification(false);
          onPlayAgain({
            score: newTotalScore,
            currentStreak: newCurrentStreak
          });
        }, 2000); // Wait 2 seconds to show the streak notification
      }
      
    } else if (newGuesses.length >= maxGuesses) {
      setGameStatus('lost');
      
      // Reset streak on loss (especially important in streaks mode)
      const currentStats = getGameStats();
      const newScore = gameState.gameMode === 'streaks' ? 0 : gameState.score; // Reset score in streaks mode
      const updatedStats = updateGameStats(currentStats, false, newScore, 0);
      onStatsUpdate(updatedStats);
    }
  };

  const getGuessStatus = (author: string, index: number) => {
    if (index >= guesses.length) return 'unused';
    if (guesses[index] === quote.author) return 'correct';
    return 'incorrect';
  };

  const getHint = () => {
    const bio = quote.authorBio;
    const sentences = bio.split('.');
    return sentences[0] + '.';
  };

  const handlePlayAgain = () => {
    if (gameStatus === 'won') {
      // Continue streak
      const earnedScore = calculateScore(guesses.length, maxGuesses);
      const newCurrentStreak = gameState.currentStreak + 1;
      const newTotalScore = gameState.gameMode === 'streaks' 
        ? gameState.score + earnedScore 
        : gameState.score + earnedScore;
      
      onPlayAgain({
        score: newTotalScore,
        currentStreak: newCurrentStreak
      });
    } else {
      // Reset streak and score (especially in streaks mode)
      const newScore = gameState.gameMode === 'streaks' ? 0 : gameState.score;
      onPlayAgain({
        score: newScore,
        currentStreak: 0
      });
    }
  };

  const handleStreakNotificationComplete = () => {
    setShowStreakNotification(false);
  };

  const handleModeChange = (mode: 'daily' | 'streaks') => {
    setSelectedGameMode(mode);
    // Start a new game with the selected mode
    const maxGuesses = mode === 'streaks' ? 1 : 3;
    onPlayAgain({
      gameMode: mode,
      maxGuesses,
      score: mode === 'streaks' ? 0 : gameState.score,
      currentStreak: 0
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Streak Notification */}
      <StreakNotification
        streak={streakData.streak}
        score={streakData.score}
        isNewRecord={streakData.isNewRecord}
        show={showStreakNotification}
        onComplete={handleStreakNotificationComplete}
      />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Header */}
        <div className="relative mb-8">
          {/* Quodle Logo - Left aligned, clickable */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="absolute left-0 top-0 text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Quodle
          </motion.button>

          {/* Game Mode Toggle - Centered */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center space-y-2"
          >
            <GameModeToggle 
              gameMode={selectedGameMode} 
              onModeChange={handleModeChange} 
            />
            <p className="text-gray-400 text-xs">
              {selectedGameMode === 'daily' ? '3 Guesses, 6 Options' : '1 Guess Only!'}
            </p>
          </motion.div>

          {/* Hint Button - Right aligned */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setShowHint(!showHint)}
            className="absolute right-0 top-0 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <Lightbulb className="w-5 h-5" />
            <span>Hint</span>
          </motion.button>
        </div>

        {/* Game Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <GameStats
            score={gameState.score}
            currentStreak={gameState.currentStreak}
            highScore={gameState.highScore}
            longestStreak={gameState.longestStreak}
            isVisible={gameState.gameMode === 'streaks'}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Quote Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
              <p className="text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto relative py-4">
                <span className="text-4xl text-white/20 font-serif absolute -left-6 -top-2">"</span>
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  {quote.text}
                </span>
                <span className="text-4xl text-white/20 font-serif absolute -right-6 -bottom-2">"</span>
              </p>
            </div>

            {/* Hint */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 mb-8"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400 font-medium">Hint</span>
                  </div>
                  <p className="text-gray-300 text-sm">{getHint()}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Game Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  Guesses: {guesses.length}/{maxGuesses}
                </span>
              </div>
              {gameStatus === 'won' && (
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">Correct!</span>
                </div>
              )}
            </div>

            {/* Guess History */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {Array.from({ length: maxGuesses }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`
                    w-12 h-12 rounded-lg border-2 flex items-center justify-center text-sm font-bold
                    ${getGuessStatus('', index) === 'correct' ? 'bg-green-500/20 border-green-500 text-green-400' :
                      getGuessStatus('', index) === 'incorrect' ? 'bg-red-500/20 border-red-500 text-red-400' :
                      'bg-white/5 border-white/20 text-gray-500'}
                  `}
                >
                  {index < guesses.length ? (index + 1) : ''}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Game Result */}
          <AnimatePresence>
            {gameStatus !== 'playing' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="text-center mb-8"
              >
                <div className={`
                  inline-block px-8 py-4 rounded-2xl border-2 mb-6
                  ${gameStatus === 'won' 
                    ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border-red-500/30 text-red-400'}
                `}>
                  <h3 className="text-2xl font-bold mb-2">
                    {gameStatus === 'won' ? '🎉 Congratulations!' : '😔 Game Over'}
                  </h3>
                  <p className="text-lg">
                    {gameStatus === 'won' 
                      ? `You guessed it in ${guesses.length} ${guesses.length === 1 ? 'try' : 'tries'}!`
                      : `The answer was: ${quote.author}`}
                  </p>
                </div>

                {/* Author reveal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-6 max-w-lg mx-auto"
                >
                  <h4 className="text-2xl font-semibold text-white mb-4">{quote.author}</h4>
                  <p className="text-gray-400 leading-relaxed">{quote.authorBio}</p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayAgain}
                  className={`
                    flex items-center space-x-2 mx-auto px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300
                    ${gameState.gameMode === 'streaks' && gameStatus === 'won' ? 'opacity-50 pointer-events-none' : ''}
                  `}
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>
                    {gameState.gameMode === 'streaks' && gameStatus === 'won' 
                      ? 'Loading next quote...' 
                      : 'Play Again'}
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Answer Options */}
          {gameStatus === 'playing' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`grid gap-4 max-w-3xl mx-auto ${
                gameState.gameMode === 'daily' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1 md:grid-cols-2'
              }`}
            >
              {options.map((author, index) => (
                <motion.button
                  key={author}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleGuess(author)}
                  disabled={guesses.includes(author)}
                  className={`
                    p-4 rounded-2xl border-2 text-left transition-all duration-300
                    ${guesses.includes(author)
                      ? author === quote.author
                        ? 'bg-green-500/20 border-green-500 text-green-400 cursor-not-allowed'
                        : 'bg-red-500/20 border-red-500 text-red-400 cursor-not-allowed'
                      : 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                    }
                  `}
                >
                  <span className="font-medium">{author}</span>
                  {guesses.includes(author) && (
                    <span className="ml-2">
                      {author === quote.author ? '✓' : '✗'}
                    </span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuodleGame;