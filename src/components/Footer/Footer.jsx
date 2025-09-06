import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <a href="/" className="footer__link">
          Home
        </a>
        <a href="https://tripleten.com" className="footer__link">
          TripleTen
        </a>
        <div className="footer__socials">
          <a
            href="https://github.com"
            className="footer__social"
            aria-label="GitHub"
          >
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            className="footer__social"
            aria-label="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
