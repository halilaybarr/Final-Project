import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn, onLinkClick }) => (
  <nav className="navigation">
    <Link to="/" className="navigation__link" onClick={onLinkClick}>
      Home
    </Link>
    {isLoggedIn && (
      <Link to="/saved-news" className="navigation__link" onClick={onLinkClick}>
        Saved articles
      </Link>
    )}
  </nav>
);

export default Navigation;
