import React, { useState } from 'react';
import './Level3ScreenPt2.css';
import gifURL from '../assets/project-gifs/url-classification.gif';
import gifFace from '../assets/project-gifs/facial-recognition.gif';
import gifCarpool from '../assets/project-gifs/carpooling-app.gif';
import background from '../assets/backgrounds/background1.svg';
import leftArrow from '../assets/logos/arrow-left.svg';
import rightArrow from '../assets/logos/arrow-right.svg';
import cheerSound from '../assets/sounds/cheer.mp3'
import doctor from '../assets/characters/rocket.svg';
import clickSound from '../assets/sounds/click.mp3';

const projects = [
  {
    title: 'MALICIOUS URL CLASSIFICATION',
    gif: gifURL,
    description: `This project tackles the ever-growing threat of malicious URLs by combining advanced feature engineering and multiple machine learning models. I built a robust classification pipeline capable of identifying harmful links from legitimate ones with high accuracy. The system integrates Scikit-Learn models with PyTorch MLP and is deployable via a FastAPI web interface ,bringing cybersecurity to the hands of end-users in real time.`,
    link: 'https://github.com/ikramkdr/Malicious-URLs-Classification',
    stack: 'Python, Scikit-Learn, FastAPI, PyTorch, GridSearchCV'
  },
  {
    title: 'FACIAL RECOGNITION SYSTEM',
    gif: gifFace,
    description: `A dual-pipeline facial recognition system combining traditional image processing and deep learning. The first pipeline leverages LBP histograms with KNN/SVM for lightweight recognition. The second uses a CNN trained on the VGGFace2 dataset, offering robust performance even under extreme lighting conditions (dark, bright, shadow). The model was stress-tested for real-world reliability, simulating camera noise, distortion, and contrast variation.`,
    link: 'https://github.com/ikramkdr/Facial_recognition',
    stack: 'OpenCV, PyTorch, Google Colab'
  },
  {
    title: 'CARPOOLING WEB APP',
    gif: gifCarpool,
    description: `A full-stack ride-sharing platform designed from scratch to support dynamic trip creation, user registration, live search, and booking. The backend is built with Node.js and Express, connected to a relational MySQL database, and the frontend is developed with React, Vite, and TailwindCSS for a seamless, real-time experience.

Includes secure user authentication, ride filtering, and notification logic.
This project demonstrates real-time system design, database architecture, and full-stack scalability , making it much more than a CRUD app.`,
    link: 'https://github.com/ikramkdr/Carpooling-Web-App',
    stack: 'React, Node.js, Express, MySQL, Tailwind'
  },
  {
    title: '👾LEVEL CLEARED👾',
    gif: '',
    description: 'Click on the ship to unlock the next level.',
    link: '',
    stack: ''
  }
];

export default function Level3ScreenPt2({ onNextLevel }) {
  const [page, setPage] = useState(0);

  const handleArrowClick = (direction) => {
    const audio = new Audio(clickSound);
    audio.play();
    setPage((prev) => {
      if (direction === 'left') return Math.max(prev - 1, 0);
      if (direction === 'right') return Math.min(prev + 1, projects.length - 1);
    });
  };

  const current = projects[page];

  return (
  <div className="level3pt2-screen" style={{ backgroundImage: `url(${background})` }}>
    <h1 className="project-title">{current.title}</h1>

    {page < projects.length - 1 ? (
      <div className="project-box">
        <div className="project-left">
          <img src={current.gif} alt="project gif" className="project-gif" />
          <a href={current.link} target="_blank" rel="noreferrer" className="project-link">
            {current.title.split(' ')[0]} GITHUB LINK
          </a>
        </div>
        <div className="separator-line"></div>
        <div className="project-right">
          <p className="project-desc">{current.description}</p>
          <p className="project-stack">{current.stack}</p>
        </div>
      </div>
    ) : (
      <div className="final-screen">
        <p className="final-text">{current.description}</p>
        <img
  src={doctor}
  alt="doctor"
  className="next-doctor"
  onClick={() => {
    const cheer = new Audio(cheerSound);
    cheer.play();
    setTimeout(() => {
      onNextLevel();
    }, 100); // laisse le temps au son de jouer (1s)
  }}
/>

      </div>
    )}

    <img
      src={leftArrow}
      alt="left"
      className={`arrow arrow-left ${page === 0 ? 'disabled' : ''}`}
      onClick={() => handleArrowClick('left')}
    />
    <img
      src={rightArrow}
      alt="right"
      className={`arrow arrow-right ${page === projects.length - 1 ? 'disabled' : ''}`}
      onClick={() => handleArrowClick('right')}
    />
  </div>
);

}
