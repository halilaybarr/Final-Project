import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);

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

  return (
    <Router>
      <Header />
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
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
