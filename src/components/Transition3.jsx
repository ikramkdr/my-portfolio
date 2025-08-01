import React, { useEffect, useState } from 'react';
import './TransitionScreen.css'; // On réutilise le même style
import creature1 from '../assets/characters/ship.png';
import creature2 from '../assets/characters/rocket.svg';
import whooshSound from '../assets/sounds/whoosh-transition.mp3';
import FloatingCreature from './FloatingCreature';

export default function Transition3({ onLevelStart }) {
  const [step, setStep] = useState('loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep('level3');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    const audio = new Audio(whooshSound);
    audio.play();
    setTimeout(() => {
      onLevelStart();
    }, 800);
  };

  return (
    <div className="transition-bg">
      {step === 'loading' ? (
        <div className="transition-text">
          <h1>LOADING WORLD</h1>
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
          <h1 className="level-text">LEVEL 3: MY PROJECTS</h1>
          <button className="start-button" onClick={handleStartClick}>
            START
          </button>
        </div>
      )}

      {/* Floating creatures */}
      <FloatingCreature src={creature1} style={{ top: '28%', left: '47%' }} />
      <FloatingCreature src={creature2} style={{ top: '35%', right: '20%' }} />
    </div>
  );
}
