import React from 'react';
import { motion } from 'framer-motion';
import './StartScreen.css';
import rocket from '../assets/characters/rocket.svg';
import whooshSound from '../assets/sounds/whoosh-transition.mp3';

export default function StartScreen({ onStart }) {
  const handleStart = () => {
    const audio1 = new Audio(whooshSound);

    audio1.play();

    setTimeout(() => {
      onStart();
    }, 100);
  };

  return (
    <>
      {/* Fond en arrière-plan */}
      <div className="start-bg" />

      <motion.div
        className="startscreen-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Texte d'intro */}
        <motion.h1 
          className="intro-text pixel-text"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          WELCOME TO THE RETRO GAME
        </motion.h1>

        <motion.p 
          className="intro-subtext pixel-text"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          BE CAREFUL , YOU MAY GET LOST...
        </motion.p>

        {/* Rocket flottante */}
        <div className="character-container">
          <img src={rocket} alt="Rocket" className="character-img float-center" />
        </div>

        {/* Bouton Start */}
        <div className="mt-10">
          <button onClick={handleStart} className="cool-button">
            START
          </button>
        </div>
      </motion.div>
    </>
  );
}
