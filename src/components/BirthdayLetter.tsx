import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Play, Pause, RotateCcw, FastForward } from 'lucide-react';

const letterContent = `Dearest Mine,

From the very first moment our eyes met across that coffee shop, my world became brighter, warmer, and infinitely more beautiful. 

Thank you for your gentle smile that cures any tough day, your infectious laughter that fills every room with magic, and your boundless kindness that inspires everyone around you.

Looking back at our timeline—every roadtrip under golden sunsets, every late night stargazing session, every quiet morning cup of tea—I realize how truly blessed I am to walk through this life by your side.

On your special birthday, I wish you endless joy, dreams fulfilled, and a heart overflowing with love. Today and every single day ahead, I promise to love you, cherish you, and hold your hand through every milestone yet to come.

Happy Birthday, my love! ❤️

Forever & Always,
Your Mickey`;

export const BirthdayLetter: React.FC = () => {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [speed] = useState(35); // ms per character

  useEffect(() => {
    if (!isTyping) return;

    if (displayedLength < letterContent.length) {
      const timeout = setTimeout(() => {
        setDisplayedLength((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedLength, isTyping, speed]);

  const handleSkip = () => {
    setDisplayedLength(letterContent.length);
    setIsTyping(false);
  };

  const handleReplay = () => {
    setDisplayedLength(0);
    setIsTyping(true);
  };

  const handleToggleTyping = () => {
    setIsTyping((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative max-w-2xl mx-auto my-8 p-6 sm:p-10 rounded-3xl glass-cream border-2 border-amberGold-500/50 shadow-[0_0_40px_rgba(212,175,55,0.3)] text-cream-900 overflow-hidden"
    >
      {/* Decorative Gold Corner Borders */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amberGold-500" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amberGold-500" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amberGold-500" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amberGold-500" />

      {/* Letter Header */}
      <div className="flex items-center justify-between border-b border-terracotta-500/20 pb-4 mb-6">
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-terracotta-500 fill-terracotta-500 animate-pulse" />
          <span className="font-serif font-bold text-lg text-terracotta-700 tracking-wide">
            A Letter for My love
          </span>
        </div>

        {/* Typewriter Control Bar */}
        <div className="flex items-center space-x-1.5 bg-cream-200/80 px-3 py-1 rounded-full border border-terracotta-500/20 text-xs text-cream-900 font-medium">
          <button
            onClick={handleToggleTyping}
            className="p-1 hover:text-terracotta-600 transition-colors"
            title={isTyping ? 'Pause typewriter' : 'Resume typewriter'}
          >
            {isTyping ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleSkip}
            className="p-1 hover:text-terracotta-600 transition-colors"
            title="Skip to end"
          >
            <FastForward className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleReplay}
            className="p-1 hover:text-terracotta-600 transition-colors"
            title="Replay typewriter"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Typewriter Text Display */}
      <div className="font-serif text-base sm:text-lg leading-relaxed text-cream-900 whitespace-pre-line min-h-[320px]">
        {letterContent.slice(0, displayedLength)}
        {isTyping && (
          <span className="inline-block w-2 h-5 ml-1 bg-terracotta-500 animate-pulse align-middle" />
        )}
      </div>

      {/* Footer Wax Seal Stamp Accent */}
      <div className="mt-8 pt-4 border-t border-terracotta-500/20 flex items-center justify-between">
        <div className="flex items-center space-x-1.5 text-xs text-terracotta-600 font-sans italic">
          <Sparkles className="w-4 h-4 text-amberGold-600" />
          <span>Written with endless love</span>
        </div>

        {/* Sealed with love badge */}
        <div className="w-10 h-10 rounded-full bg-terracotta-600 border-2 border-amberGold-400 flex items-center justify-center text-cream-100 shadow-md">
          <Heart className="w-5 h-5 fill-cream-100" />
        </div>
      </div>
    </motion.div>
  );
};
