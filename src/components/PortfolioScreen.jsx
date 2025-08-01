import React from 'react';
import arrowIcon from '../assets/logos/arrow.svg';
import './PortfolioScreen.css';
import spaceloadSound from '../assets/sounds/spaceload.mp3';
import Whoosh from '../assets/sounds/whoosh-transition.mp3';

export default function PortfolioScreen({ onPlay, onViewPortfolio }) {
  const handlePlayClick = () => {
    const audio1 = new Audio(Whoosh);
    const audio2 = new Audio(spaceloadSound);
    const audio3 = new Audio(spaceloadSound);

    audio1.play().then(() => {
      audio1.addEventListener('ended', () => {
        audio2.play().then(() => {
          audio2.addEventListener('ended', () => {
            audio3.play();
          });
        });
      });
    });

    setTimeout(() => {
      onPlay();
    }, 100);
  };

  return (
    <><div className='story-background'>
     <div className="story-wrapper">
  <h1 className="story-title pixel-text">WELCOME PLAYER1</h1>
  <p className="story-subtitle pixel-text">CHOOSE HOW TO VIEW MY PORTFOLIO</p>

  {/* Conteneur principal texte + boutons */}
  <div className="content-wrapper">
    {/* Texte */}
    <div className="text-section">
      <p>
        {/* Ton texte si tu en as, sinon vide ou remove ce bloc */}
      </p>
    </div>

    {/* Boutons alignés en bas à gauche */}
    <div className="story-button-wrapper">
      <button className="story-button" onClick={onViewPortfolio}>
        Quick View
      </button>

      <button className="story-button" onClick={handlePlayClick}>
        PLAY GAME
      </button>
      <img src={arrowIcon} alt="Arrow" className="arrow-nudge" />
    </div>
  </div>

  <br />
  <p id="source">
    this design is from{' '}
    <a href="https://www.figma.com/@Jayendra" target="_blank" rel="noreferrer">
      Jayendra AWASTHI
    </a>
  </p>
</div></div>
 
      
    </>
  );
}
