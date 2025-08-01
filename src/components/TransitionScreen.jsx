import React, { useEffect, useState } from 'react';
import './TransitionScreen.css';

import creature1 from '../assets/characters/ship.png';
import creature2 from '../assets/characters/rocket.svg';
import whooshSound from '../assets/sounds/whoosh-transition.mp3';

import FloatingCreature from './FloatingCreature';

export default function TransitionScreen({ onLevelStart }) {
  const [step, setStep] = useState('loading'); // 'loading' → 'level1'

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep('level1');
    }, 5000); // wait 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    const audio = new Audio(whooshSound);
    audio.play();
    setTimeout(() => {
      onLevelStart(); // callback après le son
    }, 800); // attends 0.8s avant d'appeler le niveau suivant
  };

  return (
    <div className="transition-bg">
      {step === 'loading' ? (
        <div className="transition-text">
          <h1>INITIALIZING WORLD</h1>
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      ) : (
        <div className="level-container">
          <h1 className="level-text">LEVEL 1: Know about me</h1>
          <button className="start-button" onClick={handleStartClick}>
            START
          </button>
        </div>
      )}

      {/* Floating creatures */}
      <FloatingCreature src={creature1} style={{ top: '18%', left: '47%' }} />
      <FloatingCreature src={creature2} style={{ top: '35%', right: '10%' }} />
    </div>
  );
}
