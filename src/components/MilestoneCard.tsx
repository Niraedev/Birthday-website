import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Calendar, MapPin } from 'lucide-react';

export interface MilestoneData {
  id: string;
  number: string;
  title: string;
  date: string;
  location: string;
  quote: string;
  graphic: React.ReactNode;
  accentColor: 'terracotta' | 'sage' | 'amber';
}

interface MilestoneCardProps {
  milestone: MilestoneData;
  index: number;
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone, index }) => {
  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);
  const isEven = index % 2 === 0;

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    const newHeart = { id: Date.now(), x: (Math.random() - 0.5) * 60 };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  const getAccentBorder = () => {
    switch (milestone.accentColor) {
      case 'terracotta':
        return 'border-terracotta-500/40 hover:border-terracotta-400 glow-border-terracotta';
      case 'sage':
        return 'border-sage-400/40 hover:border-sage-300';
      case 'amber':
        return 'border-amberGold-500/40 hover:border-amberGold-400 glow-border-amber';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
      className={`relative w-full max-w-md mx-auto my-8 ${
        index > 0 ? 'lg:-mt-48' : ''
      } ${
        isEven ? 'lg:mr-auto lg:ml-0' : 'lg:ml-auto lg:mr-0'
      }`}
    >
      {/* Node indicator dot on timeline */}
      <div className={`hidden lg:flex absolute top-8 transform -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-cream-900 border-2 border-amberGold-500 shadow-[0_0_15px_rgba(212,175,55,0.8)] ${
        isEven ? '-right-12 translate-x-1/2' : '-left-12 -translate-x-1/2'
      }`}>
        <Sparkles className="w-3.5 h-3.5 text-amberGold-500 animate-pulse" />
      </div>

      {/* Card Body Container - Short, Intimate Polaroid Keepsake Style */}
      <div className={`group relative rounded-2xl p-5 glass-warm border ${getAccentBorder()} transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden`}>
        
        {/* Card Number Tag */}
        <div className="absolute top-3 right-4 text-3xl font-serif font-bold text-cream-100/10 group-hover:text-amberGold-500/20 transition-colors">
          #{milestone.number}
        </div>

        {/* Media Placeholder: Handcrafted Procedural SVG Graphic */}
        <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 shadow-md bg-cream-900/60 border border-cream-100/10 group-hover:border-amberGold-500/30 transition-all">
          {milestone.graphic}
        </div>

        {/* Metadata Badges (Date & Location) */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-amberGold-300 mb-2">
          <span className="flex items-center space-x-1 bg-amberGold-500/15 px-2.5 py-0.5 rounded-full border border-amberGold-500/30">
            <Calendar className="w-3 h-3 text-amberGold-500" />
            <span>{milestone.date}</span>
          </span>
          <span className="flex items-center space-x-1 bg-terracotta-500/15 px-2.5 py-0.5 rounded-full border border-terracotta-500/30 text-terracotta-300">
            <MapPin className="w-3 h-3 text-terracotta-400" />
            <span>{milestone.location}</span>
          </span>
        </div>

        {/* Milestone Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-100 mb-2 tracking-wide group-hover:text-amberGold-300 transition-colors">
          {milestone.title}
        </h3>

        {/* Romantic Poetic Caption Quote */}
        <p className="font-serif italic text-cream-100/90 text-sm sm:text-base mb-4 border-l-2 border-amberGold-500/60 pl-3 py-0.5">
          "{milestone.quote}"
        </p>

        {/* Interactive Card Action Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-cream-100/10 text-xs">
          <span className="text-cream-200/40 italic font-mono text-[11px]">Keepsake</span>
          
          <div className="relative">
            <button
              onClick={handleLike}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-terracotta-500/20 hover:bg-terracotta-500/40 text-terracotta-300 border border-terracotta-500/40 transition-all text-xs font-medium active:scale-95"
            >
              <Heart className={`w-3.5 h-3.5 ${likes > 0 ? 'fill-terracotta-400 text-terracotta-400' : ''}`} />
              <span>{likes > 0 ? `${likes}` : 'Love'}</span>
            </button>

            {/* Floating Heart Particle Animation */}
            {hearts.map((h) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 1, y: 0, x: h.x, scale: 0.8 }}
                animate={{ opacity: 0, y: -40, scale: 1.4 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute left-1/2 bottom-full pointer-events-none text-terracotta-400"
              >
                <Heart className="w-4 h-4 fill-terracotta-400" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};
