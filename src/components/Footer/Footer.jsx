import React from "react";
import "./Footer.css";
import githubIcon from "../../assets/images/github-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <p className="footer__copyright">
        © 2024 Halil Aybar, Powered by News API
      </p>
      <div className="footer__links">
        <a href="/" className="footer__link">
          Home
        </a>
        <a href="https://tripleten.com" className="footer__link">
          TripleTen
        </a>
        <div className="footer__socials">
          <a
            href="https://github.com/halilaybarr"
            className="footer__social-icon"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="footer__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/halil-aybar/"
            className="footer__social-icon"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="footer__icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
