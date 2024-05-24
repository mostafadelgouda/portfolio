import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/BotBar.css';

const BotBar = () => {
  return (
    <nav className="bot-bar">
      <div className="bot-bar-center">
        <ul>
          <li>
            <a href="https://github.com/mostafadelgouda" target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon icon={faGithub} />
              <span className="text"> GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/mostafadelgouda" target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="text"> LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mostafadelgouda" target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="text"> Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/mostafadelgouda" target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon icon={faFacebook} />
              <span className="text"> Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BotBar;
