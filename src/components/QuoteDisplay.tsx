import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Twitter, Facebook, Copy } from 'lucide-react';
import { Quote } from '../types';

interface QuoteDisplayProps {
  quote: Quote;
  onBack: () => void;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ quote, onBack }) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = (platform: string) => {
    const text = `"${quote.text}" - ${quote.author}`;
    const url = window.location.href;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const words = quote.text.split(' ');

  return (
    <div className={`min-h-screen ${quote.emotion.bgColor} flex items-center justify-center px-4 relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent"></div>
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back</span>
      </motion.button>

      {/* Share Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-8 right-8 flex items-center space-x-3"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleShare('twitter')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          <Twitter className="w-5 h-5 text-gray-700" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleShare('facebook')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          <Facebook className="w-5 h-5 text-gray-700" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleShare('copy')}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors relative"
        >
          <Copy className="w-5 h-5 text-gray-700" />
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap"
            >
              Copied!
            </motion.span>
          )}
        </motion.button>
      </motion.div>

      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <div className="text-6xl text-gray-300 mb-4 font-serif">"</div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
              <div className="text-6xl text-gray-300 text-right font-serif">"</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className={`text-2xl font-semibold ${quote.emotion.color}`}>
                — {quote.author}
              </h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed max-w-lg">
                {quote.authorBio}
              </p>
            </motion.div>
          </motion.div>

          {/* Author Image Section */}
        </div>

        {/* Emotion Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className={`
            flex items-center space-x-3 px-6 py-3 rounded-full 
            ${quote.emotion.bgColor} ${quote.emotion.borderColor} border-2
          `}>
            <span className="text-2xl">{quote.emotion.icon}</span>
            <span className={`font-medium ${quote.emotion.color}`}>
              For when you're feeling {quote.emotion.name.toLowerCase()}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuoteDisplay;