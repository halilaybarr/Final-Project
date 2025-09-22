import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = ({
  currentUser,
  isLoggedIn,
  onOpenLoginModal,
  onLogout,
  currentPath,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = currentPath === "/";
  const headerClass = isHomePage ? "header" : "header header_dark";

  const handleSignInClick = () => {
    onOpenLoginModal();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={headerClass}>
      <Link to="/" className="header__logo" onClick={closeMobileMenu}>
        NewsExplorer
      </Link>

      <button
        className={`header__menu-button ${
          isMobileMenuOpen ? "header__menu-button_active" : ""
        }`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className="header__menu-line"></span>
        <span className="header__menu-line"></span>
        <span className="header__menu-line"></span>
      </button>

      <div
        className={`header__nav ${isMobileMenuOpen ? "header__nav_open" : ""}`}
      >
        <Navigation
          isLoggedIn={isLoggedIn}
          onLinkClick={closeMobileMenu}
          currentPath={currentPath}
        />
        {isLoggedIn ? (
          <div className="header__user">
            <span className="header__username">{currentUser?.name}</span>
            <button
              className="header__logout"
              onClick={handleLogout}
              aria-label="Logout"
            >
              <span className="header__logout-text">Sign out</span>
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
