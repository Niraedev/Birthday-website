import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Clock, Gift } from 'lucide-react';

interface NavbarProps {
  currentScene: number;
  onNavigate: (sceneIndex: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScene, onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = window.scrollY;
        setScrollProgress((current / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto glass-warm rounded-full px-5 py-2.5 flex items-center justify-between shadow-2xl border border-amberGold-500/20">
        
        {/* Brand Header */}
        <button 
          onClick={() => onNavigate(0)}
          className="flex items-center space-x-2 text-amberGold-300 hover:text-white transition-colors group"
        >
          <Sparkles className="w-5 h-5 text-amberGold-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-serif font-bold text-lg tracking-wide bg-gradient-to-r from-amberGold-300 via-cream-100 to-terracotta-300 bg-clip-text text-transparent">
            The Timeline of Us
          </span>
        </button>

        {/* Scene Navigation Links */}
        <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium">
          {[
            { id: 0, label: 'Arrival', icon: Sparkles },
            { id: 1, label: 'Our Story', icon: Clock },
            { id: 2, label: 'Birthday Wish', icon: Gift },
            { id: 3, label: 'New Memory', icon: Heart },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = currentScene === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 rounded-full flex items-center space-x-1.5 transition-all duration-300 ${
                  isActive
                    ? 'bg-terracotta-500/30 text-amberGold-300 border border-amberGold-500/40 shadow-inner'
                    : 'text-cream-200/70 hover:text-cream-100 hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amberGold-500' : 'opacity-60'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

      </div>

      {/* Thin scroll progress indicator line */}
      <div className="max-w-6xl mx-auto mt-1 px-4">
        <div className="h-0.5 w-full bg-cream-900/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-terracotta-500 via-amberGold-500 to-cream-100 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </header>
  );
};
