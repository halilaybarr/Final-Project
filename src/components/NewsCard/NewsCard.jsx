import React from "react";

const NewsCard = ({ article, isLoggedIn = false, isSaved = false, onSave }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSaveClick = () => {
    if (!isLoggedIn) {
      return;
    }
    onSave && onSave(article);
  };

  return (
    <article className="news-card">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-card__image"
        />
      )}
      <div className="news-card__content">
        <div className="news-card__date">{formatDate(article.publishedAt)}</div>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <div className="news-card__source">{article.source.name}</div>
      </div>
      <button
        className={`news-card__save-button ${
          !isLoggedIn ? "news-card__save-button_inactive" : ""
        } ${isSaved ? "news-card__save-button_saved" : ""}`}
        onClick={handleSaveClick}
        aria-label={isSaved ? "Remove from saved" : "Save article"}
        title={!isLoggedIn ? "Sign in to save articles" : ""}
      >
        <i className="news-card__save-icon"></i>
      </button>
    </article>
  );
};

export default NewsCard;
