import React from "react";
import "./NewsCard.css";

const NewsCard = ({
  article,
  isLoggedIn = false,
  onSaveArticle,
  isArticleSaved,
  onRemoveArticle,
  showRemoveButton = false,
  isSaved = false,
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

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    if (onRemoveArticle) {
      onRemoveArticle(article);
    }
  };

  const handleCardClick = () => {
    if (article.url) {
      window.open(article.url, "_blank", "noopener,noreferrer");
    }
  };

  const isArticleCurrentlySaved = isArticleSaved
    ? isArticleSaved(article)
    : isSaved;

  return (
    <article className="news-card" onClick={handleCardClick}>
      <img
        src={article.urlToImage || "/default-news-image.jpg"}
        alt={article.title}
        className="news-card__image"
      />

      {showRemoveButton ? (
        <>
          <button
            className="news-card__remove-button"
            onClick={handleRemoveClick}
            aria-label="Remove from saved"
            title="Remove from saved"
          >
            <span className="news-card__remove-icon"></span>
          </button>
          {article.keyword && (
            <div className="news-card__keyword">{article.keyword}</div>
          )}
        </>
      ) : (
        <button
          className={`news-card__save-button ${
            !isLoggedIn ? "news-card__save-button_inactive" : ""
          } ${isArticleCurrentlySaved ? "news-card__save-button_saved" : ""}`}
          onClick={handleSaveClick}
          disabled={!isLoggedIn}
          aria-label={
            isArticleCurrentlySaved ? "Remove from saved" : "Save article"
          }
          title={
            !isLoggedIn
              ? "Sign in to save articles"
              : isArticleCurrentlySaved
              ? "Remove from saved"
              : "Save article"
          }
        >
          <span className="news-card__save-icon"></span>
        </button>
      )}

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
