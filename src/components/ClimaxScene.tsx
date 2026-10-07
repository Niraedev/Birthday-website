import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CakeCanvas } from './CakeCanvas';
import { BirthdayLetter } from './BirthdayLetter';

export const ClimaxScene: React.FC = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  return (
    <section id="climax-section" className="relative min-h-screen py-20 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col justify-center items-center">
      
      {/* Climax Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-amberGold-300 text-xs font-semibold uppercase tracking-widest mb-3"
        >
          ✨ Chapter II • The Birthday Cake ❤️
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 mb-4 tracking-tight"
        >
          Make a Birthday Wish
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-cream-200/80 text-base sm:text-lg font-light font-sans"
        >
          Take a Long breath and blow out the digital candles to unlock your birthday letter.
        </motion.p>
      </div>

      {/* Interactive Birthday Cake */}
      <CakeCanvas onCandlesBlown={() => setCandlesBlown(true)} />

      {/* Unlocked Birthday Letter */}
      {candlesBlown && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full mt-6"
        >
          <BirthdayLetter />
        </motion.div>
      )}

    </section>
  );
};
