import React from 'react';
import './Transition4.css';
import background from '../assets/backgrounds/background3.svg';

export default function Transition4({ onGoToLevel }) {
  return (
    <div className="transition4-screen" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="final-title-affichage">👾 CONGRATULATIONS 👾</h1>

      <p className="final-subtext">
        YOU HAVE CLEARED ALL THE LEVELS <br />
        YOU CAN GO BACK TO ANY LEVEL YOU WANT
      </p>

      <p className="final-subtext">
        OR CONTACT ME FOR WORK  .
         OR MAYBE FOR A CUP OF COFFEE ☕
      </p>

      <button
  className="contact-button"
  onClick={() => onGoToLevel('contact')}
>
  CONTACT ME
</button>


      <div className="level-links">
  <a href="#" onClick={() => onGoToLevel('transition')}>LEVEL 1</a>
  <a href="#" onClick={() => onGoToLevel('transition2')}>LEVEL 2</a>
  <a href="#" onClick={() => onGoToLevel('transition3')}>LEVEL 3</a>
</div>

    </div>
  );
}
