import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";

const AppContent = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [currentSearchKeyword, setCurrentSearchKeyword] = useState("");

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setError("");
    setHasSearched(true);
    setVisibleCards(3);
    setCurrentSearchKeyword(searchQuery);

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
      setCurrentUser({ name: userData.name });
      setIsLoggedIn(true);

      // Load saved articles after successful login
      try {
        const { getItems } = await import("../../utils/savedArticlesAPI.js");
        const userSavedArticles = await getItems();
        setSavedArticles(userSavedArticles);
      } catch (error) {
        console.error("Error loading saved articles:", error);
      }

      // Close modal and navigate to saved articles
      setActiveModal(null);
      navigate("/saved-news");

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

  const handleSuccessLogin = () => {
    setActiveModal(null);
    navigate("/saved-news");
  };

  const handleSaveArticle = async (article) => {
    if (!isLoggedIn) return;

    try {
      const { saveArticle } = await import("../../utils/savedArticlesAPI.js");
      const articleWithKeyword = {
        ...article,
        keyword: currentSearchKeyword,
      };
      const savedArticle = await saveArticle(articleWithKeyword);
      setSavedArticles((prev) => [...prev, savedArticle]);
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  const handleRemoveArticle = async (article) => {
    try {
      const { removeArticle } = await import("../../utils/savedArticlesAPI.js");
      await removeArticle(article._id || article.url);
      setSavedArticles((prev) =>
        prev.filter(
          (saved) =>
            (saved._id && saved._id !== article._id) ||
            saved.url !== article.url
        )
      );
    } catch (error) {
      console.error("Error removing article:", error);
    }
  };

  const isArticleSaved = (article) => {
    return savedArticles.some((saved) => saved.url === article.url);
  };

  return (
    <>
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
              onRemoveArticle={handleRemoveArticle}
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
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
