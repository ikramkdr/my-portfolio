import React, { useState } from 'react';
import './Level2Screen.css';
import FloatingCreature from './FloatingCreature';
import creature1 from '../assets/characters/ship.png';
import creature2 from '../assets/characters/rocket.svg';
import clickSound from '../assets/sounds/click.mp3';
import leftArrow from '../assets/logos/arrow-left.svg';
import rightArrow from '../assets/logos/arrow-right.svg';
import astronaut from '../assets/characters/astronaut.svg';
import spaceship from '../assets/characters/rocket.svg';
import background from '../assets/backgrounds/background1.svg';
import creature3 from '../assets/characters/micro.svg'
export default function Level2Screen({ onNextLevel }) {
  const [page, setPage] = useState(0);
  const playClickSound = () => {
  const audio = new Audio(clickSound);
  audio.play();
};

  const skillPages = [
    {
      title: 'WEB DEVELOPMENT SKILLS',
      skills: [
        { icon: '⭐', name: 'HTML/CSS' },
        { icon: '⚔️', name: 'JAVASCRIPT/TYPESCRIPT' },
        { icon: '⚡', name: 'REACT.JS + FRAMER MOTION' },
        { icon: '❤️', name: 'FASTAPI + REST APIS' },
        { icon: '🐙', name: 'GIT / GITHUB' },
        { icon: '🧪', name: 'RESPONSIVE DESIGN' },
      ],
      note: `THESE SKILLS ARE CONSTANTLY BEING UPGRADED \n\n CHARACTER SKILLS INCREASE AT HIGHER LEVEL`,
    },
    {
      title: 'MACHINE LEARNING SKILLS',
      skills: [
        { icon: '🐍', name: 'PYTHON (NUMPY, PANDAS, SCIKIT-LEARN)' },
        { icon: '🔥', name: 'PYTORCH' },
        { icon: '📊', name: 'MODEL EVALUATION & TUNING' },
        { icon: '⚙️', name: 'FEATURE ENGINEERING' },
        { icon: '⏳', name: 'DATASET PREPARATION & AUGMENTATION' },
      ],
      note: `THIS CHARACTER UNLOCKED TOOLS : Scikit-Learn, PyTorch.\n PS : MACHINE LEARNING ISN’T JUST PREDICTION. IT’S LEARNING FROM PATTERNS AND TURNING DATA INTO WISDOM.`,
    },
    {
      title: 'CYBERSECURITY & SYSTEMS',
      skills: [
        { icon: '💻', name: 'VULNERABILITY EXPLOITATION' },
        { icon: '🛠️', name: 'DOS ATTACKS & TRAFFIC MANIPULATION' },
        { icon: '📱', name: 'MALWARE ANALYSIS & REVERSE ENGINEERING' },
        { icon: '🛡️', name: 'SYSTEM FORENSICS' },
        { icon: '🛰️', name: 'NETWORK ANALYSIS & PACKET SNIFFING' },
      ],
      note: `THIS CHARACTER UNLOCKED TOOLS : Wireshark, nmap, IDA, Burp Suite, pymodbus, Shodan. \n PS : CYBERSECURITY ISN’T JUST DEFENSE. IT’S UNDERSTANDING THE ENEMY’S GAME FIRST.`,
    },
    {
      title: 'CHARACTER CREATIVE & PERSONAL SKILLS',
      skills: [
        { icon: '🎨', name: 'PIXEL UI DESIGN' },
        { icon: '🛰️', name: 'PROBLEM SOLVING' },
        { icon: '🌐', name: 'MULTILINGUAL' },
        { icon: '🚀', name: 'TEACHING/SHARING' },
        { icon: '📈', name: 'GROWTH MINDSET' },
      ],
      note: `THIS CHARACTER UNLOCKED TOOLS : FIGMA, ADOBE, CANVA AND CREATIVITY.\nPS : THIS CHARACTER SPEAKS ENGLISH, FRENCH, ITALIAN, ARABIC AND KABYLE.`,
    },
    {
      title: '👾LEVEL CLEARED👾',
      message: 'CLICK ON THE SHIP TO UNLOCK THE NEXT LEVEL',
    },
  ];

  const nextPage = () => {
  playClickSound();
  setPage((prev) => Math.min(prev + 1, skillPages.length - 1));
};

const prevPage = () => {
  playClickSound();
  setPage((prev) => Math.max(prev - 1, 0));
};

  return (
    <div className="level2-screen" style={{ backgroundImage: `url(${background})` }}>
        <FloatingCreature src={creature1} style={{ top: '10%', left: '5%' }} />
        <FloatingCreature src={creature3} style={{ top: '5%', left: '80%' }} />
           
      <h1 className="pixel-text level2-title">{skillPages[page].title}</h1>

      <div className="skill-box">
        <img src={leftArrow} alt="Left" className="arrow left" onClick={prevPage} />

        {page < skillPages.length - 1 ? (
          <>
            <div className="skills-left">
              {skillPages[page].skills.map((skill, index) => (
                <p key={index} className="skill-item">
                  <span>{skill.icon}</span> {skill.name}
                </p>
              ))}
            </div>
            <div className="separator-line"></div>
            <div className="skills-right">
              {(() => {
  const noteParts = skillPages[page].note.split('PS :');
  return (
    <p className="note-text">
      {noteParts[0]}
      {noteParts[1] && (
        <>
          <br />
          <span className="ps-animated">PS :{noteParts[1]}</span>
        </>
      )}
    </p>
  );
})()}

            </div>
          </>
        ) : (
          <div className="final-message">
            <p className="click-text">{skillPages[page].message}</p>
            <img
              src={spaceship}
              alt="spaceship"
              className="next-ship"
              onClick={onNextLevel}
            />
          </div>
        )}

        <img src={rightArrow} alt="Right" className="arrow right" onClick={nextPage} />
        <img src={astronaut} alt="Astronaut" className="astronaut" />
      </div>
      
    </div>
  );
}
