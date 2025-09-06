import React from "react";
import "./NewsCard.css";

const NewsCard = ({
  article,
  isLoggedIn = false,
  onSaveArticle,
  isArticleSaved,
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
    if (!isLoggedIn || !onSaveArticle) {
      return;
    }
    onSaveArticle(article);
  };

  const handleCardClick = () => {
    if (article.url) {
      window.open(article.url, "_blank", "noopener,noreferrer");
    }
  };

  const isSaved = isArticleSaved && isArticleSaved(article);

  return (
    <article className="news-card" onClick={handleCardClick}>
      <img
        src={article.urlToImage || "/default-news-image.jpg"}
        alt={article.title}
        className="news-card__image"
      />
      <button
        className={`news-card__save-button ${
          !isLoggedIn ? "news-card__save-button_inactive" : ""
        } ${isSaved ? "news-card__save-button_saved" : ""}`}
        onClick={handleSaveClick}
        disabled={!isLoggedIn}
        aria-label={isSaved ? "Remove from saved" : "Save article"}
        title={
          !isLoggedIn
            ? "Sign in to save articles"
            : isSaved
            ? "Remove from saved"
            : "Save article"
        }
      >
        <span className="news-card__save-icon"></span>
      </button>
      <div className="news-card__content">
        <div className="news-card__date">{formatDate(article.publishedAt)}</div>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <div className="news-card__source">{article.source.name}</div>
      </div>
    </article>
  );
};

export default NewsCard;
