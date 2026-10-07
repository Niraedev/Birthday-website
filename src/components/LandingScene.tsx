import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import { AmbientRoomCanvas } from './AmbientRoomCanvas';

interface LandingSceneProps {
  onBegin: () => void;
}

export const LandingScene: React.FC<LandingSceneProps> = ({ onBegin }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background candlelit room visual */}
      <AmbientRoomCanvas intensity="full" />

      {/* Hero Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-12 px-6 rounded-3xl glass-warm border border-amberGold-500/20 shadow-2xl backdrop-blur-md">
        
        {/* Top Header Text with Emojis (No pill box, no rotating star icon) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amberGold-300 text-sm font-medium tracking-wider mb-6"
        >
          ✨ A Special Birthday Celebration ❤️
        </motion.div>

        {/* Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream-100 mb-6 leading-tight"
        >
          Happy Birthday, <span className="bg-gradient-to-r from-amberGold-300 via-terracotta-300 to-cream-100 bg-clip-text text-transparent italic">Sarah!</span>
          <br />
          <span className="text-2xl sm:text-4xl md:text-5xl font-normal text-cream-200/90 block mt-2">
            Welcome to Your Story.
          </span>
        </motion.h1>

        {/* Sans-serif Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl font-light text-cream-200/80 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          Your story is our story. Step into the moments that make us... a journey through shared memories written in stars, quiet giggles, and endless love.
        </motion.p>

        {/* Soft Golden Glowing Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative inline-block"
        >
          <button
            onClick={onBegin}
            className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full text-lg font-semibold text-cream-900 bg-gradient-to-r from-amberGold-500 via-amberGold-300 to-amberGold-500 bg-size-200 shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:shadow-[0_0_40px_rgba(212,175,55,0.9)] transform hover:-translate-y-1 transition-all duration-300 animate-soft-glow"
          >
            <span>Begin Our Journey</span>
            <Sparkles className="w-5 h-5 text-cream-900 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Gentle Bounce Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
          className="mt-14 flex flex-col items-center justify-center text-xs font-medium tracking-widest text-cream-200/60 uppercase cursor-pointer"
          onClick={onBegin}
        >
          <span className="mb-1">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-amberGold-500" />
        </motion.div>

      </div>
    </section>
  );
};
