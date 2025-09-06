import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn }) => (
  <nav className="navigation">
    <Link to="/" className="navigation__link">
      Home
    </Link>
    {isLoggedIn && (
      <Link to="/saved-news" className="navigation__link">
        Saved articles
      </Link>
    )}
  </nav>
);

export default Navigation;
