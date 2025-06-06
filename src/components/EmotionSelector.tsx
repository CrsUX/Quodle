import React from 'react';
import { motion } from 'framer-motion';
import { Emotion } from '../types';

interface EmotionSelectorProps {
  emotions: Emotion[];
  onEmotionSelect: (emotion: Emotion) => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ emotions, onEmotionSelect }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            How are you feeling today?
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Select the emotion that resonates with you right now, and discover wisdom from history's greatest minds.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {emotions.map((emotion) => (
            <motion.button
              key={emotion.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onEmotionSelect(emotion)}
              className={`
                ${emotion.bgColor} ${emotion.borderColor} ${emotion.color}
                border-2 rounded-2xl p-8 text-left transition-all duration-300
                hover:shadow-xl hover:shadow-gray-200/50 group cursor-pointer
                focus:outline-none focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50
              `}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {emotion.icon}
                </span>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="text-gray-400 group-hover:text-gray-600 transition-colors"
                >
                  →
                </motion.div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {emotion.name}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {emotion.description}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EmotionSelector;