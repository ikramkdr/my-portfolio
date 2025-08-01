import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import StartScreen from './components/StartScreen';
import PortfolioScreen from './components/PortfolioScreen';
import TransitionScreen from './components/TransitionScreen';
import Transition2 from './components/Transition2';
import Transition3 from './components/Transition3';
import ContactFormScreen from './components/ContactForm';
import Level1Screen from './components/Level1Screen';
import Level2Screen from './components/Level2Screen';
import Level3Screen from './components/Level3Screen';
import Transition4 from './components/Transition4'; 
import Level3ScreenPt2 from './components/Level3ScreenPt2'; 
import './index.css';

export default function App() {
  const [screen, setScreen] = useState('start');

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          {screen === 'start' && (
            <StartScreen key="start" onStart={() => setScreen('portfolio')} />
          )}
          {screen === 'portfolio' && (
            <PortfolioScreen key="portfolio" onPlay={() => setScreen('transition')} />
          )}
          {screen === 'transition' && (
            <TransitionScreen key="transition" onLevelStart={() => setScreen('level1')} />
          )}
          {screen === 'level1' && (
            <Level1Screen key="level1" onNextLevel={() => setScreen('transition2')} />
          )}
          {screen === 'transition2' && (
            <Transition2 key="transition2" onLevelStart={() => setScreen('level2')} />
          )}
          {screen === 'level2' && (
            <Level2Screen key="level2" onNextLevel={() => setScreen('transition3')} />
          )}
          {screen === 'transition3' && (
            <Transition3 key="transition3" onLevelStart={() => setScreen('level3')} />
          )}
          {screen === 'level3' && (
            <Level3Screen key="level3" onStartProjects={() => setScreen('level3pt2')} />
          )}
          {screen === 'level3pt2' && (
            <Level3ScreenPt2 key="level3pt2" onNextLevel={() => setScreen('transition4')} />
          )}
         {screen === 'transition4' && (
  <Transition4 key="transition4" onGoToLevel={(level) => setScreen(level)} />
)}
{screen === 'contact' && (
  <ContactFormScreen key="contact" onBack={() => setScreen('transition4')} />
)}


        </AnimatePresence>
      </div>
    </div>
  );
}
