import React from 'react';
import { motion } from 'framer-motion';
import { MilestoneCard } from './MilestoneCard';
import type { MilestoneData } from './MilestoneCard';
import { FirstGlanceGraphic, MidnightTalksGraphic, SunsetRoadtripGraphic, EverydayMagicGraphic } from '../assets/SVGAssets';
import { Heart } from 'lucide-react';

export const TimelineScene: React.FC = () => {
  const milestones: MilestoneData[] = [
    {
      id: 'm1',
      number: '01',
      title: 'Our First Glance',
      date: 'The Beginning',
      location: 'Cozy Coffee Nook',
      quote: 'I knew right then that some people make the world feel instantly softer.',
      graphic: <FirstGlanceGraphic />,
      accentColor: 'terracotta',
    },
    {
      id: 'm2',
      number: '02',
      title: 'Midnight Whispers',
      date: 'Under the Twilight',
      location: 'The Ridge Overlook',
      quote: 'The universe felt endless, but all I could focus on was you beside me.',
      graphic: <MidnightTalksGraphic />,
      accentColor: 'amber',
    },
    {
      id: 'm3',
      number: '03',
      title: 'Sunset Roadtrip',
      date: 'First Great Adventure',
      location: 'Golden Coast Ridge',
      quote: 'Life is a journey, but every highway leads right back to your smile.',
      graphic: <SunsetRoadtripGraphic />,
      accentColor: 'sage',
    },
    {
      id: 'm4',
      number: '04',
      title: 'Everyday Magic',
      date: 'Every Single Day',
      location: 'Our Cozy Sanctuary',
      quote: 'With you, home is not a place... it is a feeling.',
      graphic: <EverydayMagicGraphic />,
      accentColor: 'terracotta',
    },
  ];

  return (
    <section id="timeline-section" className="relative min-h-screen py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Timeline Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-amberGold-300 text-xs font-semibold uppercase tracking-widest mb-3"
        >
          ✨ Chapter I • The Milestones ❤️
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-cream-100 mb-3 tracking-tight"
        >
          The Chapters of Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cream-200/70 text-sm sm:text-base font-light max-w-md mx-auto font-sans"
        >
          Key moments frozen in time, written in stars and quiet smiles.
        </motion.p>
      </div>

      {/* Vertical Timeline Track Line */}
      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 transform -translate-x-1/2 bg-gradient-to-b from-amberGold-500/20 via-terracotta-500/50 to-amberGold-500/20 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />

        {/* Milestone Cards Stack */}
        <div className="space-y-8 lg:space-y-0">
          {milestones.map((item, idx) => (
            <MilestoneCard key={item.id} milestone={item} index={idx} />
          ))}
        </div>
      </div>

      {/* End of Timeline Transition Decor */}
      <div className="text-center mt-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block p-3 rounded-full bg-terracotta-500/10 border border-amberGold-500/30 text-amberGold-300"
        >
          <Heart className="w-6 h-6 text-terracotta-400 fill-terracotta-400 animate-pulse" />
        </motion.div>
      </div>

    </section>
  );
};
