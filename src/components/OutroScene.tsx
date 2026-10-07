import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus, X, Calendar, BookOpen, RotateCcw, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SavedMemory {
  id: string;
  title: string;
  date: string;
  note: string;
  sticker: string;
}

interface OutroSceneProps {
  onReplay: () => void;
}

export const OutroScene: React.FC<OutroSceneProps> = ({ onReplay }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memories, setMemories] = useState<SavedMemory[]>([]);
  
  // New memory form state
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [selectedSticker, setSelectedSticker] = useState('✨');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stickers = ['✨', '❤️', '🌟', '☕', '🎂', '🌅', '✈️', '🥂'];

  useEffect(() => {
    const saved = localStorage.getItem('timeline_of_us_memories');
    if (saved) {
      try {
        setMemories(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved memories', e);
      }
    } else {
      // Default initial future memory sample
      const initialMemories: SavedMemory[] = [
        {
          id: '1',
          title: 'Upcoming Autumn Getaway',
          date: 'October 2026',
          note: 'A cozy cabin stay surrounded by warm autumn foliage, hot chocolate, and endless laughter.',
          sticker: '🌅'
        }
      ];
      setMemories(initialMemories);
      localStorage.setItem('timeline_of_us_memories', JSON.stringify(initialMemories));
    }
  }, []);

  const handleCreateMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !note.trim()) return;

    const newMem: SavedMemory = {
      id: Date.now().toString(),
      title: title.trim(),
      date: date.trim() || 'Future Milestone',
      note: note.trim(),
      sticker: selectedSticker,
    };

    const updated = [newMem, ...memories];
    setMemories(updated);
    localStorage.setItem('timeline_of_us_memories', JSON.stringify(updated));

    setIsSubmitted(true);

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#d4af37', '#c86d51', '#fdfbf7'],
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setTitle('');
      setDate('');
      setNote('');
    }, 1500);
  };

  return (
    <section id="outro-section" className="relative min-h-screen py-20 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center justify-between">
      
      {/* Main Outro Container */}
      <div className="w-full text-center max-w-3xl mx-auto my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-amberGold-300 text-xs font-semibold uppercase tracking-widest mb-4"
        >
          ✨ Chapter III • The Next Chapter ❤️
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl font-bold text-cream-100 mb-6 tracking-tight"
        >
          Our Story Has Only Just Begun
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-cream-200/80 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 font-sans"
        >
          Every milestone we have shared is precious, but the best chapters are the ones we will write together tomorrow.
        </motion.p>

        {/* Primary Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-terracotta-500 via-amberGold-500 to-terracotta-500 text-cream-100 font-semibold text-lg shadow-[0_0_30px_rgba(200,109,81,0.5)] hover:shadow-[0_0_45px_rgba(212,175,55,0.8)] transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
          >
            <Plus className="w-5 h-5 text-amberGold-300" />
            <span>Make a New Memory</span>
          </button>

          <button
            onClick={onReplay}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-cream-900/80 text-cream-200 border border-amberGold-500/30 hover:border-amberGold-500 hover:text-white transition-all flex items-center justify-center space-x-2 text-base font-medium"
          >
            <RotateCcw className="w-4 h-4 text-amberGold-500" />
            <span>Replay Journey</span>
          </button>
        </motion.div>

        {/* Display Saved Future Memories Cards */}
        {memories.length > 0 && (
          <div className="text-left w-full mt-12">
            <h4 className="font-serif text-xl font-bold text-amberGold-300 mb-6 flex items-center space-x-2 border-b border-cream-100/10 pb-3">
              <BookOpen className="w-5 h-5 text-terracotta-400" />
              <span>Our Future Memory Wishlist ({memories.length})</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {memories.map((mem) => (
                <div
                  key={mem.id}
                  className="p-5 rounded-2xl glass-warm border border-amberGold-500/20 hover:border-amberGold-500/50 transition-all shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{mem.sticker}</span>
                    <span className="text-xs text-amberGold-300 bg-amberGold-500/10 px-2.5 py-0.5 rounded-full border border-amberGold-500/30 font-mono">
                      {mem.date}
                    </span>
                  </div>
                  <h5 className="font-serif font-bold text-cream-100 text-lg mb-1">{mem.title}</h5>
                  <p className="text-xs text-cream-200/75 leading-relaxed font-sans">{mem.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Modal: Make a New Memory */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cream-900/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl glass-warm border-2 border-amberGold-500/40 shadow-2xl text-cream-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-cream-200/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Title */}
              <div className="flex items-center space-x-2 mb-2 text-amberGold-300">
                <Heart className="w-5 h-5 fill-amberGold-500 text-amberGold-500" />
                <h3 className="font-serif text-2xl font-bold text-cream-100">Create a New Memory</h3>
              </div>
              <p className="text-xs text-cream-200/70 mb-6 font-sans">
                Write a wish, promise, or dream adventure to add to Sarah's birthday timeline.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-sage-400 animate-bounce" />
                  <h4 className="font-serif text-2xl font-bold text-cream-100">Memory Saved! ✨</h4>
                  <p className="text-xs text-cream-200/70">Added to your shared timeline wishlist.</p>
                </div>
              ) : (
                <form onSubmit={handleCreateMemory} className="space-y-4 text-left font-sans">
                  {/* Memory Title */}
                  <div>
                    <label className="block text-xs font-semibold text-cream-200/90 mb-1">
                      Memory Title / Adventure Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sunset Picnic in Amalfi"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-900/90 border border-cream-100/20 text-cream-100 text-sm focus:outline-none focus:border-amberGold-500 placeholder-cream-200/40"
                    />
                  </div>

                  {/* Date / Target Year */}
                  <div>
                    <label className="block text-xs font-semibold text-cream-200/90 mb-1 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-amberGold-500" />
                      <span>Target Date or Season</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Summer 2027"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-900/90 border border-cream-100/20 text-cream-100 text-sm focus:outline-none focus:border-amberGold-500 placeholder-cream-200/40"
                    />
                  </div>

                  {/* Sticker Emoji Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-cream-200/90 mb-1.5">
                      Choose Memory Symbol
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {stickers.map((st) => (
                        <button
                          type="button"
                          key={st}
                          onClick={() => setSelectedSticker(st)}
                          className={`w-9 h-9 rounded-xl text-lg flex items-center justify-center transition-all ${
                            selectedSticker === st
                              ? 'bg-amberGold-500 text-cream-900 scale-110 shadow-md'
                              : 'bg-cream-900/60 border border-cream-100/10 hover:bg-cream-900'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Wish / Note Details */}
                  <div>
                    <label className="block text-xs font-semibold text-cream-200/90 mb-1">
                      Your Special Wish / Promise *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write what you are excited to experience together..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-900/90 border border-cream-100/20 text-cream-100 text-sm focus:outline-none focus:border-amberGold-500 placeholder-cream-200/40 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-amberGold-500 to-terracotta-500 text-cream-100 font-semibold text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-all"
                  >
                    ✨ Save Memory Wish ✨
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer copyright note */}
      <footer className="w-full text-center py-6 border-t border-cream-100/10 text-xs text-cream-200/40">
        Crafted with endless love for Sarah's Birthday • The Timeline of Us
      </footer>

    </section>
  );
};
