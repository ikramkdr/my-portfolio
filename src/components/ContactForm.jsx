import React, { useState } from 'react';
import './ContactForm.css';
import background from '../assets/backgrounds/background1.svg';
import emailjs from '@emailjs/browser';
import instagramIcon from '../assets/logos/instagram.svg';
import linkedinIcon from '../assets/logos/linkedin.svg';
import githubIcon from '../assets/logos/github.png';


export default function ContactFormScreen({ onBack }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: email,
      reply_to: email,
      message,
    };

    emailjs.send(
      'service_oi2sj3d',        
      'template_l7z44bn',      
      templateParams,
      'S6GZz0HsDeP4ePrws'       
    )
      .then(() => {
        setStatus('Message sent successfully!');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send message.');
      });
  };

  return (
    <div className="contact-screen" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="contact-title">CONTACT ME</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">SEND</button>
        {status && <p className="form-status">{status}</p>}
      </form>
<div className="social-sidebar">
  <a href="https://www.instagram.com/kdr_ikr/" target="_blank" rel="noreferrer">
    <img src={instagramIcon} alt="Instagram" />
  </a>
  <a href="https://www.linkedin.com/in/ikram-kadri-2159ab284/" target="_blank" rel="noreferrer">
    <img src={linkedinIcon} alt="LinkedIn" />
  </a>
  <a href="https://github.com/ikramkdr" target="_blank" rel="noreferrer">
    <img src={githubIcon} alt="GitHub" />
  </a>
</div>

      <button className="back-button" onClick={onBack}>⬅ BACK</button>
    </div>
  );
}
