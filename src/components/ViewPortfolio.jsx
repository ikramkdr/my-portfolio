import React, { useState } from 'react';
import './ViewPortfolio.css';
import spaceship from '../assets/characters/spaceship.svg';
import avatar from '../assets/characters/Me.jpg';
import creature2 from '../assets/characters/micro.svg';
import FloatingCreature from './FloatingCreature';
import creature1 from '../assets/characters/ship.png';
import creature3 from '../assets/characters/rocket.svg';
import gifMaliciousURL from '../assets/project-gifs/url-classification.gif';
import gifFacialRecognition from '../assets/project-gifs/facial-recognition.gif';
import gifCarpooling from '../assets/project-gifs/carpooling-app.gif';
import instagramIcon from '../assets/logos/instagram.svg';
import linkedinIcon from '../assets/logos/linkedin.svg';
import githubIcon from '../assets/logos/github.png';


import emailjs from '@emailjs/browser';  // N'oublie pas d'installer emailjs

export default function ViewPortfolio({ onBack }) {
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
      .catch(() => {
        setStatus('Failed to send message.');
      });
  };

  return (
    <div className="view-portfolio-container">
      <FloatingCreature src={creature1} style={{ top: '23%', left: '5%' }} />
      <FloatingCreature src={creature3} style={{ width: '100px', top: '5%', left: '89%' }} />
      <FloatingCreature src={creature2} style={{ top: '59%', left: '86%' }} />
      <FloatingCreature src={creature3} style={{ top: '74%', left: '8%' }} />
      <FloatingCreature src={creature1} style={{ top: '90%', left: '89%' }} />
      <button className="backK-button" onClick={onBack}>← Back</button>

      <div className="blue-box">
        {/* About Me Section */}
        <section className="section about-me">
          <h1>ABOUT ME</h1>
          <div className="about-me-box">
            <div className="about-me-left">
             <img src={spaceship} alt="Spaceship" className="spaceshippp-img" />
<img src={avatar} alt="Avatar" className="avatarr-img" />
 </div>
            <div className="about-me-right">
              <p>
                              <h2 id="salutation">HII! I AM IKRAM</h2>

                I’m a 21-year-old Computer Engineering student from Algeria, currently studying at the University of Cagliari in Italy.<br />
                Awarded the FORMED scholarship, I specialize in Cybersecurity and Artificial Intelligence.<br />
                I’m passionate about designing innovative user interfaces, building intelligent systems, and exploring the cutting edge of technology to solve real-world problems.<br />
                Through my projects and studies, I strive to combine creativity and technical expertise to deliver impactful solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section skills">
          <h1>MY SKILLS</h1>
          <table className="skills-table">
            <tbody>
              <tr>
                <th>Web Development</th>
                <td>
                  <ul>
                    <li>⭐ HTML/CSS</li>
                    <li>⚔️ JAVASCRIPT/TYPESCRIPT</li>
                    <li>⚡ REACT.JS + FRAMER MOTION</li>
                    <li>❤️ FASTAPI + REST APIS</li>
                    <li>🐙 GIT / GITHUB</li>
                    <li>🧪 RESPONSIVE DESIGN</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Machine Learning Skills</th>
                <td>
                  <ul>
                    <li>🐍 PYTHON (NUMPY, PANDAS, SCIKIT-LEARN)</li>
                    <li>🔥 PYTORCH</li>
                    <li>📊 MODEL EVALUATION & TUNING</li>
                    <li>⚙️ FEATURE ENGINEERING</li>
                    <li>⏳ DATASET PREPARATION & AUGMENTATION</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Cybersecurity & Systems</th>
                <td>
                  <ul>
                    <li>💻 VULNERABILITY EXPLOITATION</li>
                    <li>🛠️ DOS ATTACKS & TRAFFIC MANIPULATION</li>
                    <li>📱 MALWARE ANALYSIS & REVERSE ENGINEERING</li>
                    <li>🛡️ SYSTEM FORENSICS</li>
                    <li>🛰️ NETWORK ANALYSIS & PACKET SNIFFING</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Projects Section */}
        <section className="projects">
          <h1>MY PROJECTS</h1>
          <ul>
            <li className="project-item">
              <img src={gifMaliciousURL} alt="Malicious URL Classification" className="project-gif" />
              <div>
                <strong>Malicious URL Classification:</strong><br />
                Developed a high-accuracy machine learning pipeline that detects and classifies malicious URLs. The system combines advanced feature engineering with multiple models, deployed via a user-friendly FastAPI interface for real-time cybersecurity protection.<a href='https://github.com/ikramkdr/Malicious-URLs-Classification'>Github</a>
              </div>
            </li>
            <li className="project-item">
              <img src={gifFacialRecognition} alt="Facial Recognition System" className="project-gif" />
              <div>
                <strong>Facial Recognition System:</strong><br />
                Designed a dual-pipeline facial recognition solution integrating traditional image processing  and deep learning. Tested extensively for robustness under varying lighting conditions to ensure reliable performance.<a href='https://github.com/ikramkdr/Facial_recognition'>Github</a>
              </div>
            </li>
            <li className="project-item">
              <img src={gifCarpooling} alt="Carpooling Web App" className="project-gif" />
              <div>
                <strong>Carpooling Web App:</strong><br />
                Built a full-stack carpooling platform featuring user registration, dynamic ride creation, search, and booking functionalities. Leveraged React for the frontend and Node.js with MySQL for backend services, emphasizing real-time interaction and scalability.<a href='https://github.com/ikramkdr/Carpooling-Web-App'>Github</a>
              </div>
            </li>
          </ul>
        </section>

        {/* Contact Me Section */}
        <section className="section contact-me">
          <h1>CONTACT ME</h1>
<p className="contact-intro">
  Feel free to reach out! Whether you have questions, project ideas, or just want to say hi, I’m here to connect.
</p>

          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            const templateParams = {
              from_name: email,
              reply_to: email,
              message,
            };
            emailjs.send('service_oi2sj3d', 'template_l7z44bn', templateParams, 'S6GZz0HsDeP4ePrws')
              .then(() => {
                setStatus('Message sent successfully!');
                setEmail('');
                setMessage('');
              })
              .catch(() => setStatus('Failed to send message.'));
          }}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
            <button type="submit">SEND</button>
            {status && <p className="form-status">{status}</p>}
          </form>
 <p className="find-me-text">
  </p>

  <div className="social-sidebar">
    <a href="https://github.com/ikramkdr" target="_blank" rel="noreferrer">
      <img src={githubIcon} alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/ikram-kadri-2159ab284/" target="_blank" rel="noreferrer">
      <img src={linkedinIcon} alt="LinkedIn" />
    </a>
    <a href="https://www.instagram.com/kdr_ikr/" target="_blank" rel="noreferrer">
      <img src={instagramIcon} alt="Instagram" />
    </a>
  </div>
        </section>
      </div>
    </div>
  );
}
