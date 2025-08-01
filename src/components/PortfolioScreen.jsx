import React from 'react';
import arrowIcon from '../assets/logos/arrow.svg';
import linkedinIcon from '../assets/logos/linkedin.svg';
import './PortfolioScreen.css';
import github from '../assets/logos/github.png'
import spaceloadSound from '../assets/sounds/spaceload.mp3';
import Whoosh from '../assets/sounds/whoosh-transition.mp3'
export default function PortfolioScreen({ onPlay }) {
  const handlePlayClick = () => {
    const audio1= new Audio(Whoosh)
    const audio2 = new Audio(spaceloadSound);
    const audio3 = new Audio(spaceloadSound);

    // Lire le premier son
    audio1.play().then(() => {
      // Quand il se termine, on lit le second
      audio1.addEventListener('ended', () => {
        audio2.play().then(() => {
      // Quand il se termine, on lit le second
      audio2.addEventListener('ended', () => {
        audio3.play()
      });
    })
      });
    });

    // Après environ 2 lectures (supposons 0.8s par son), on lance la suite
    setTimeout(() => {
      onPlay();
    }, 100); // Ajuste selon la durée réelle de ton son
  };

  return (
    <>
      <div className="portfolio-bg" />

      <div className="story-wrapper">
        <h1 className="story-title pixel-text">WELCOME PLAYER1</h1>
        <p className="story-subtitle pixel-text">PRESS PLAY TO ENTER STORY MODE</p>

        <div className="story-button-wrapper">
          <button className="story-button" onClick={handlePlayClick}>
            PLAY
          </button>
          <img src={arrowIcon} alt="Arrow" className="arrow-nudge" />
        </div>
      </div>

      <br />

      <div className="social-section">
        <p className="social-title pixel-text">FOLLOW ME AT</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/ikram-kadri-2159ab284/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a
            href="https://github.com/ikramkdr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" className="social-icon" />
          </a>
        </div>
                  <p id="source">this design is from <a href="https://www.figma.com/@Jayendra">Jayendra AWASTHI</a></p>

      </div>
    </>
  );
}
