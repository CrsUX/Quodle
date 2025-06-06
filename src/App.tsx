import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, GamepadIcon } from 'lucide-react';
import { emotions, searchEmotions } from './data/emotions';
import { quotes, searchQuotes } from './data/quotes';
import { Emotion, Quote, GameState } from './types';
import QuodleGame from './components/QuodleGame';
import { getGameStats } from './utils/gameStorage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [filteredEmotions, setFilteredEmotions] = useState<Emotion[]>([]);
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [gameStats, setGameStats] = useState(getGameStats());
  const [selectedGameMode, setSelectedGameMode] = useState<'daily' | 'streaks'>('daily');
  const [gameState, setGameState] = useState<GameState>({
    mode: 'emotion',
    currentQuote: null,
    guesses: [],
    gameStatus: 'playing',
    maxGuesses: 4,
    score: 0,
    currentStreak: 0,
    highScore: gameStats.highScore,
    longestStreak: gameStats.longestStreak,
    gameMode: 'daily'
  });

  useEffect(() => {
    if (searchTerm.length > 0) {
      // Search emotions using enhanced search
      const emotionResults = searchEmotions(searchTerm);
      setFilteredEmotions(emotionResults);
      
      // Search quotes using enhanced search
      const quoteResults = searchQuotes(searchTerm).slice(0, 5); // Limit to 5 quote results
      
      setFilteredQuotes(quoteResults);
      setShowSuggestions(true);
    } else {
      setFilteredEmotions([]);
      setFilteredQuotes([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleEmotionSelect = (emotion: Emotion) => {
    const emotionQuotes = quotes.filter(quote => quote.emotion.id === emotion.id);
    if (emotionQuotes.length > 0) {
      const randomQuote = emotionQuotes[Math.floor(Math.random() * emotionQuotes.length)];
      setSelectedQuote(randomQuote);
      console.log('Selected quote:', randomQuote);
    }
    
    setSearchTerm('');
    setShowSuggestions(false);
  };

  const handleQuoteSelect = (quote: Quote) => {
    setSelectedQuote(quote);
    setSearchTerm('');
    setShowSuggestions(false);
  };
  const startGame = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const currentStats = getGameStats();
    const maxGuesses = selectedGameMode === 'streaks' ? 1 : 3; // 3 guesses for daily, 1 for streaks
    
    setGameState({
      mode: 'game',
      currentQuote: randomQuote,
      guesses: [],
      gameStatus: 'playing',
      maxGuesses,
      score: 0,
      currentStreak: 0,
      highScore: currentStats.highScore,
      longestStreak: currentStats.longestStreak,
      gameMode: selectedGameMode
    });
  };

  const handleGameBack = () => {
    setGameState(prev => ({ ...prev, mode: 'emotion' }));
  };

  const handlePlayAgain = (newGameState?: Partial<GameState>) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const currentStats = getGameStats();
    const maxGuesses = gameState.gameMode === 'streaks' ? 1 : 3;
    
    setGameState(prev => ({
      ...prev,
      currentQuote: randomQuote,
      guesses: [],
      gameStatus: 'playing',
      maxGuesses,
      highScore: currentStats.highScore,
      longestStreak: currentStats.longestStreak,
      ...newGameState
    }));
    setGameStats(currentStats);
  };

  const handleReset = () => {
    setSelectedQuote(null);
    setSearchTerm('');
    setShowSuggestions(false);
    setGameState(prev => ({ ...prev, mode: 'emotion' }));
  };

  const handleStatsUpdate = (newStats: any) => {
    setGameStats(newStats);
  };

  // Show game if in game mode
  if (gameState.mode === 'game' && gameState.currentQuote) {
    return (
      <QuodleGame
        quote={gameState.currentQuote}
        gameState={gameState}
        onBack={handleGameBack}
        onPlayAgain={handlePlayAgain}
        onStatsUpdate={handleStatsUpdate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <AnimatePresence mode="wait">
          {!selectedQuote ? (
            <div className="w-full h-full relative">
              {/* Top Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="absolute top-8 left-0 right-0 flex items-center justify-between px-8"
              >
                {/* Quodle Logo - Top Left */}
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Quodle
                </h1>
                
                {/* Play Button - Top Right */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startGame}
                  className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-500/30 rounded-2xl text-white transition-all duration-300"
                >
                  <GamepadIcon className="w-5 h-5" />
                  <span className="font-medium">Play Daily Quodle</span>
                </motion.button>
              </motion.div>

              {/* Centered Content */}
              <motion.div
                key="search-interface"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center justify-center min-h-screen"
              >
                <div className="w-full max-w-2xl mx-auto text-center">
                  {/* Main Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-16"
                  >
                    <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                      <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                        Find Wisdom for Your Emotions
                      </span>
                    </h2>
                  </motion.div>

                  {/* Search Interface */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative mb-16"
                  >
                    <div className="relative group">
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(255,255,255,0.1)",
                            "0 0 40px rgba(255,255,255,0.15)",
                            "0 0 20px rgba(255,255,255,0.1)"
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm"
                      />
                      <div className="relative flex items-center">
                        <Search className="absolute left-6 w-6 h-6 text-gray-400 z-10" />
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="How are you feeling today?"
                          className="w-full pl-16 pr-6 py-6 bg-transparent border border-white/10 rounded-2xl text-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Suggestions */}
                    <AnimatePresence>
                      {showSuggestions && (filteredEmotions.length > 0 || filteredQuotes.length > 0) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 right-0 mt-4 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden z-20"
                        >
                          {/* Emotion Results */}
                          {filteredEmotions.map((emotion, index) => (
                            <motion.button
                              key={emotion.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => handleEmotionSelect(emotion)}
                              className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors group flex items-center justify-between"
                            >
                              <div className="flex items-center space-x-4">
                                <span className="text-2xl">{emotion.icon}</span>
                                <div>
                                  <div className="text-white font-medium">{emotion.name}</div>
                                  <div className="text-gray-400 text-sm">{emotion.description}</div>
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </motion.button>
                          ))}
                          
                          {/* Quote Results */}
                          {filteredQuotes.length > 0 && filteredEmotions.length > 0 && (
                            <div className="border-t border-white/10 px-6 py-2">
                              <span className="text-xs text-gray-500 uppercase tracking-wide">Quotes</span>
                            </div>
                          )}
                          {filteredQuotes.map((quote, index) => (
                            <motion.button
                              key={quote.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (filteredEmotions.length + index) * 0.05 }}
                              onClick={() => handleQuoteSelect(quote)}
                              className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors group flex items-center justify-between"
                            >
                              <div className="flex items-center space-x-4">
                                <span className="text-2xl">{quote.emotion.icon}</span>
                                <div>
                                  <div className="text-white font-medium">"{quote.text.slice(0, 50)}..."</div>
                                  <div className="text-gray-400 text-sm">— {quote.author}</div>
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </motion.button>
                          ))}
                          
                          {/* No results message */}
                          {filteredEmotions.length === 0 && filteredQuotes.length === 0 && searchTerm.length > 0 && (
                            <div className="px-6 py-4 text-center text-gray-400">
                              <p className="text-sm">No results found for "{searchTerm}"</p>
                              <p className="text-xs mt-1">Try searching for emotions like "happy", "sad", "anxious", or authors like "Einstein", "Churchill"</p>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Popular emotions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    <p className="text-gray-500 text-sm mb-6">Popular emotions ({emotions.length} total)</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {emotions.slice(0, 12).map((emotion, index) => (
                        <motion.button
                          key={emotion.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEmotionSelect(emotion)}
                          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2"
                        >
                          <span>{emotion.icon}</span>
                          <span>{emotion.name}</span>
                        </motion.button>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs mt-4">
                      {quotes.length} inspiring quotes from history's greatest minds
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              key="quote-display"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-5xl mx-auto text-center"
            >
              {/* Quote */}
              <div className="relative z-10 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-3xl md:text-5xl font-light leading-tight mb-8 max-w-4xl mx-auto relative"
                  >
                    <span className="text-6xl text-white/20 font-serif absolute -left-8 -top-4">"</span>
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                      {selectedQuote.text}
                    </span>
                    <span className="text-6xl text-white/20 font-serif absolute -right-8 -bottom-4">"</span>
                  </motion.p>
                </motion.div>
              </div>

              {/* Author */}
              <div className="relative z-10 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-3xl font-semibold text-white mb-4">
                      — {selectedQuote.author}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {selectedQuote.authorBio}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Emotion indicator */}
              <div className="relative z-10 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                    <span className="text-2xl">{selectedQuote.emotion.icon}</span>
                    <span className="text-gray-300">
                      For when you're feeling {selectedQuote.emotion.name.toLowerCase()}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Back button */}
              <motion.button
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-300"
              >
                Find Another Quote
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;