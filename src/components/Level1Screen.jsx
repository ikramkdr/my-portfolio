import React from 'react';
import './Level1Screen.css';

import FloatingCreature from './FloatingCreature';
import creature1 from '../assets/characters/ship.png';
import creature2 from '../assets/characters/rocket.svg';

import background from '../assets/backgrounds/background1.svg';
import avatar from '../assets/characters/Me.jpg';
import spaceship from '../assets/characters/spaceship.svg';

import whooshSound from '../assets/sounds/whoosh-transition.mp3';

export default function Level1Screen({ onNextLevel }) {
  const handleNextLevel = () => {
    const audio = new Audio(whooshSound);
    audio.play();

    setTimeout(() => {
      onNextLevel();
    }, 800);
  };

  return (
    <div className="level1-screen" style={{ backgroundImage: `url(${background})` }}>
      <div className="level1-content">
        <h1 className="pixel-text level1-title typewriter-title">HI IT'S IKRAM!!</h1>

        <div className="level1-main">
          {/* Avatar + vaisseau */}
          <div className="level1-avatar-wrapper">
            <img src={spaceship} alt="Spaceship" className="spaceship-img" />
            <img src={avatar} alt="My Avatar" className="avatar-img float-avatar" />
          </div>

          {/* Texte descriptif */}
          <div className="bubble-style">
            <div className="level1-description">
              <p>
                I AM A 21-YEAR-OLD COMPUTER ENGINEERING STUDENT FROM ALGERIA,
                CURRENTLY STUDYING AT THE UNIVERSITY OF CAGLIARI IN ITALY.
                I WAS AWARDED a SCHOLARSHIP TO SPECIALIZE IN CYBERSECURITY AND
                ARTIFICIAL INTELLIGENCE HERE IN UNICA.
                I AM PASSIONATE ABOUT DESIGNING CREATIVE INTERFACES,
                BUILDING SMART SYSTEMS, AND EXPLORING THE LIMITS OF TECHNOLOGY
                TO SOLVE REAL-WORLD PROBLEMS.
              </p>
            </div>
          </div>
        </div>

        {/* Bouton vers next level */}
        <div className="level1-astronaut">
          <div className="speech-bubble" onClick={handleNextLevel}>
            <div className="speech-text-with-arrow">
              CLICK ME TO<br />ENTER NEXT LEVEL
            </div>
          </div>
        </div>
      </div>

      {/* Petites créatures flottantes */}
      <FloatingCreature src={creature1} style={{ top: '10%', left: '5%' }} />
      <FloatingCreature src={creature2} style={{ top: '25%', right: '8%' }} />
    </div>
  );
}
