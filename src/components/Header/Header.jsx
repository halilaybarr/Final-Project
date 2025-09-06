import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = ({ currentUser, isLoggedIn, onOpenLoginModal, onLogout }) => {
  const handleSignInClick = () => {
    onOpenLoginModal();
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>
      <div className="header__nav">
        <Navigation isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <div className="header__user">
            <span className="header__username">{currentUser?.name}</span>
            <button
              className="header__logout"
              onClick={onLogout}
              aria-label="Logout"
            >
              <span className="header__logout-icon">↗</span>
            </button>
          </div>
        ) : (
          <button className="header__signin" onClick={handleSignInClick}>
            Sign in
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
