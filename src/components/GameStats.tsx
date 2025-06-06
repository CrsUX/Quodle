import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Flame, Award } from 'lucide-react';

interface GameStatsProps {
  score: number;
  currentStreak: number;
  highScore: number;
  longestStreak: number;
  isVisible: boolean;
}

const GameStats: React.FC<GameStatsProps> = ({
  score,
  currentStreak,
  highScore,
  longestStreak,
  isVisible
}) => {
  if (!isVisible) return null;

  const stats = [
    {
      icon: Target,
      label: 'Score',
      value: score.toLocaleString(),
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Flame,
      label: 'Current Streak',
      value: currentStreak,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: Trophy,
      label: 'High Score',
      value: highScore.toLocaleString(),
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      icon: Award,
      label: 'Best Streak',
      value: longestStreak,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className={`
            ${stat.bgColor} ${stat.borderColor} border rounded-xl p-3 text-center
            backdrop-blur-sm
          `}
        >
          <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
          <div className={`text-lg font-bold ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-xs text-gray-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GameStats;