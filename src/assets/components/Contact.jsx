import React from "react";
import profileImage from "../images/contact.png";
import "../styles/Contact.css"; // Ensure you have corresponding CSS

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="container">
      <div className="section">
        <div className="section-image-container">
          <img
            src={profileImage}
            alt="Mostafa Adel"
            className="section-image"
          />
        </div>
        <div className="section-text">
          <h1>Contact Me</h1>
          <p className="contact-text">
            If you'd like to get in touch, don't hesitate to reach out via email
            or phone using the contacts below.
          </p>

          <a href="mailto:mostafadelgouda@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> mostafadelgouda@gmail.com
          </a>

          <a href="tel:+201099768505">
            <FontAwesomeIcon icon={faPhone} /> (+20) 1099768505
          </a>

          <p>
            You can also connect with me through my social media accounts listed
            in the bottom bar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
