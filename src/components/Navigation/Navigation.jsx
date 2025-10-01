import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn, onLinkClick, currentPath }) => (
  <nav className="navigation">
    <Link
      to="/"
      className={`navigation__link ${
        currentPath === "/" ? "navigation__link_active" : ""
      }`}
      onClick={onLinkClick}
    >
      Home
    </Link>
    {isLoggedIn && (
      <Link
        to="/saved-news"
        className={`navigation__link ${
          currentPath === "/saved-news" ? "navigation__link_active" : ""
        }`}
        onClick={onLinkClick}
      >
        Saved articles
      </Link>
    )}
  </nav>
);

export default Navigation;
