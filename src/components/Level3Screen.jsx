import React from 'react';
import './Level3Screen.css';
import background from '../assets/backgrounds/background1.svg';

import FloatingCreature from './FloatingCreature';
import creature1 from '../assets/characters/ship.png';
import creature2 from '../assets/characters/rocket.svg';
import creature3 from '../assets/characters/micro.svg'
import spaceSound from '../assets/sounds/whoosh-transition.mp3';
import drProjectGuy from '../assets/characters/doctor.svg'; // 👈 import avatar
export default function Level3Screen({ onStartProjects }) {
  const handleClick = () => {
    const audio = new Audio(spaceSound);
    audio.play();
    setTimeout(() => {
      onStartProjects(); // Go to Level3ScreenPt2
    }, 800);
  };

  return (
    <div className="level3-screen" style={{ backgroundImage: `url(${background})` }}>
        <FloatingCreature src={creature1} style={{ top: '10%', left: '5%' }} />
        <FloatingCreature src={creature2} style={{ top: '90%', left: '34%' }} />
        <FloatingCreature src={creature3} style={{ top: '5%', left: '80%' }} />
<h1 className="project-title">PROJECT SHOWCASE</h1>

      <div className="speech-section">
        {/* ✅ Bulle au-dessus */}
        <div id="speech-bubble">
          <div id="bub-part-a"></div>
          <div id="bub-part-b"></div>
          <div id="bub-part-c"></div>
          <div id="speech-txt">
            HI THERE, THIS IS DR. PROJECTGUY AND HE WILL SHOW YOU SOME OF THE PROJECTS I HAVE
            WORKED ON AND SUCCESSFULLY COMPLETED. A SMALL DESCRIPTION WITH THE GITHUB LINK FOR
            EACH PROJECT WILL BE PROVIDED. TO SEE MY PROJECT JOURNEY VISIT MY
            <a href="https://github.com/ikramkdr" target="_blank" rel="noreferrer"> GITHUB </a>
            PROFILE.
          </div>
          <div id="bub-part-c"></div>
          <div id="bub-part-b"></div>
          <div id="bub-part-a"></div>

          {/* ✅ Flèche qui pointe vers le docteur */}
          <div id="speech-arrow">
            <div id="arrow-w"></div>
            <div id="arrow-x"></div>
            <div id="arrow-y"></div>
            <div id="arrow-z"></div>
          </div>
        </div>

        {/* ✅ Avatar en dessous */}
        <img src={drProjectGuy} alt="Dr ProjectGuy" className="project-guy" />
      </div>

      <button className="start-projects-btn" onClick={handleClick}>START</button>
    </div>
  );
}