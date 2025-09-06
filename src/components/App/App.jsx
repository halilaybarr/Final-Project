import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setError("");
    setHasSearched(true);
    setVisibleCards(3);

    try {
      const { fetchNews } = await import("../../utils/api.js");
      const today = new Date();
      const weekAgo = new Date();
      weekAgo.setDate(today.getDate() - 7);

      const articles = await fetchNews(
        searchQuery,
        "c336c646c8d44e399c65a611afacf0fd",
        weekAgo.toISOString().split("T")[0],
        today.toISOString().split("T")[0],
        100
      );

      if (articles.length === 0) {
        setError("Nothing Found");
      } else {
        setArticles(articles);
      }
    } catch (err) {
      setError(
        err.message ||
          "Sorry, something went wrong during the request. Please try again later."
      );
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const showMoreCards = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const handleLogin = async (credentials) => {
    try {
      const { authorize } = await import("../../utils/auth.js");
      const userData = await authorize(credentials);
      setCurrentUser(userData);
      setIsLoggedIn(true);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const handleRegister = async (userData) => {
    try {
      const { register } = await import("../../utils/auth.js");
      const newUser = await register(userData);
      setActiveModal("success");
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setSavedArticles([]);
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleSwitchToRegister = () => {
    setActiveModal("register");
  };

  const handleSwitchToLogin = () => {
    setActiveModal("login");
  };

  const handleSuccessModalClose = () => {
    setActiveModal("login");
  };

  const handleSaveArticle = async (article) => {
    if (!isLoggedIn) return;

    try {
      const { saveArticle } = await import("../../utils/savedArticlesAPI.js");
      const savedArticle = await saveArticle(article);
      setSavedArticles((prev) => [...prev, savedArticle]);
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  const isArticleSaved = (article) => {
    return savedArticles.some((saved) => saved.url === article.url);
  };

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onOpenLoginModal={handleOpenLoginModal}
        onLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              articles={articles}
              isLoading={isLoading}
              hasSearched={hasSearched}
              error={error}
              visibleCards={visibleCards}
              onSearch={handleSearch}
              onShowMore={showMoreCards}
              isLoggedIn={isLoggedIn}
              onSaveArticle={handleSaveArticle}
              isArticleSaved={isArticleSaved}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              savedArticles={savedArticles}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
            />
          }
        />
      </Routes>
      <Footer />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={handleCloseModal}
        onLogin={handleLogin}
        onSwitchToRegister={handleSwitchToRegister}
      />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={handleCloseModal}
        onRegister={handleRegister}
        onSwitchToLogin={handleSwitchToLogin}
      />

      <SuccessModal
        isOpen={activeModal === "success"}
        onClose={handleSuccessModalClose}
      />
    </Router>
  );
};

export default App;
