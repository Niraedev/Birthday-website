import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingScene } from './components/LandingScene';
import { TimelineScene } from './components/TimelineScene';
import { ClimaxScene } from './components/ClimaxScene';
import { OutroScene } from './components/OutroScene';
import { CursorSparkles } from './components/CursorSparkles';

export const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;

      // Determine active scene based on viewport scroll position
      if (scrollY < windowH * 0.7) {
        setCurrentScene(0);
      } else if (scrollY < windowH * 3.2) {
        setCurrentScene(1);
      } else if (scrollY < windowH * 4.8) {
        setCurrentScene(2);
      } else {
        setCurrentScene(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToScene = (sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    const windowH = window.innerHeight;

    let targetY = 0;
    if (sceneIndex === 1) {
      const timelineElem = document.getElementById('timeline-section');
      targetY = timelineElem ? timelineElem.offsetTop - 60 : windowH;
    } else if (sceneIndex === 2) {
      const climaxElem = document.getElementById('climax-section');
      targetY = climaxElem ? climaxElem.offsetTop - 40 : windowH * 3.5;
    } else if (sceneIndex === 3) {
      const outroElem = document.getElementById('outro-section');
      targetY = outroElem ? outroElem.offsetTop - 40 : windowH * 5;
    }

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen bg-cream-900 text-cream-100 font-sans overflow-x-hidden selection:bg-terracotta-500 selection:text-white">
      {/* Interactive Cursor Micro-sparkles */}
      <CursorSparkles />

      {/* Navigation Bar */}
      <Navbar currentScene={currentScene} onNavigate={scrollToScene} />

      {/* Scene 1: Arrival (Landing Page) */}
      <div id="landing-section">
        <LandingScene onBegin={() => scrollToScene(1)} />
      </div>

      {/* Scene 2: The Timeline (Scrollable Story) */}
      <TimelineScene />

      {/* Scene 3: The Birthday Message (Climax) */}
      <ClimaxScene />

      {/* Scene 4: Shared Celebration (Outro) */}
      <OutroScene onReplay={() => scrollToScene(0)} />
    </div>
  );
};

export default App;
