import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Trophy, Star } from 'lucide-react';

interface StreakNotificationProps {
  streak: number;
  score: number;
  isNewRecord: boolean;
  show: boolean;
  onComplete: () => void;
}

const StreakNotification: React.FC<StreakNotificationProps> = ({
  streak,
  score,
  isNewRecord,
  show,
  onComplete
}) => {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(onComplete, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  const getStreakMessage = () => {
    if (streak === 1) return "Great start!";
    if (streak < 5) return `${streak} in a row!`;
    if (streak < 10) return `Amazing streak!`;
    if (streak < 20) return `Incredible!`;
    return `Legendary streak!`;
  };

  const getStreakEmoji = () => {
    if (streak < 3) return "🔥";
    if (streak < 5) return "🚀";
    if (streak < 10) return "⭐";
    if (streak < 20) return "💫";
    return "👑";
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -50 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 text-center max-w-sm mx-4"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 0.6,
                repeat: 1
              }}
              className="text-6xl mb-4"
            >
              {getStreakEmoji()}
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white mb-2"
            >
              {getStreakMessage()}
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center space-x-4 text-orange-400"
            >
              <div className="flex items-center space-x-1">
                <Flame className="w-5 h-5" />
                <span className="font-bold">{streak}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5" />
                <span className="font-bold">+{score}</span>
              </div>
            </motion.div>

            {isNewRecord && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex items-center justify-center space-x-2 text-yellow-400"
              >
                <Trophy className="w-5 h-5" />
                <span className="font-bold text-sm">New Record!</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StreakNotification;