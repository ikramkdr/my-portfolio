// components/FloatingCreature.jsx
import React from 'react';
import './FloatingCreature.css';

export default function FloatingCreature({ src, style }) {
  return (
    <img src={src} alt="creature" className="floating-creature" style={style} />
  );
}
