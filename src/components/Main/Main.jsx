import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import "./Main.css";

const Main = ({
  articles,
  isLoading,
  hasSearched,
  error,
  visibleCards,
  onSearch,
  onShowMore,
  isLoggedIn,
  onSaveArticle,
  isArticleSaved,
}) => {
  const displayedArticles = articles.slice(0, visibleCards);
  const hasMoreCards = articles.length > visibleCards;

  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />

      {hasSearched && (
        <section className="search-results">
          {isLoading && <Preloader />}

          {!isLoading && error && (
            <div className="search-results__error">
              <p>{error}</p>
            </div>
          )}

          {!isLoading && !error && articles.length > 0 && (
            <>
              <div className="search-results__info">
                <h2>Search results</h2>
              </div>
              <div className="search-results__cards">
                {displayedArticles.map((article, index) => (
                  <NewsCard
                    key={index}
                    article={article}
                    isLoggedIn={isLoggedIn}
                    onSaveArticle={onSaveArticle}
                    isArticleSaved={isArticleSaved}
                  />
                ))}
              </div>
              {hasMoreCards && (
                <button
                  className="search-results__show-more"
                  onClick={onShowMore}
                >
                  Show more
                </button>
              )}
            </>
          )}
        </section>
      )}

      <About />
    </main>
  );
};

export default Main;
