import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Flame } from 'lucide-react';

interface GameModeToggleProps {
  gameMode: 'daily' | 'streaks';
  onModeChange: (mode: 'daily' | 'streaks') => void;
}

const GameModeToggle: React.FC<GameModeToggleProps> = ({ gameMode, onModeChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center"
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 flex">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onModeChange('daily')}
          className={`
            flex items-center space-x-2 px-3 py-1.5 rounded-xl transition-all duration-300 text-sm
            ${gameMode === 'daily' 
              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
              : 'text-gray-400 hover:text-white'}
          `}
        >
          <Calendar className="w-3 h-3" />
          <span className="font-medium">Daily</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onModeChange('streaks')}
          className={`
            flex items-center space-x-2 px-3 py-1.5 rounded-xl transition-all duration-300 text-sm
            ${gameMode === 'streaks' 
              ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
              : 'text-gray-400 hover:text-white'}
          `}
        >
          <Flame className="w-3 h-3" />
          <span className="font-medium">Streaks</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameModeToggle;