import React, { useState } from "react";
import "./NewsCard.css";
import SaveTooltip from "../SaveTooltip/SaveTooltip";
import normalSave from "../../assets/images/normal-save.svg";
import hoverSave from "../../assets/images/hover-save.svg";
import markedSave from "../../assets/images/marked-save.svg";
import trashIcon from "../../assets/images/trash.svg";
import trashHoverIcon from "../../assets/images/trash-hover.svg";

const NewsCard = ({
  article,
  isLoggedIn = false,
  onSaveArticle,
  isArticleSaved,
  onRemoveArticle,
  showRemoveButton = false,
  isSaved = false,
  onOpenLoginModal,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
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
    if (!isLoggedIn) {
      return; // Do nothing when not logged in
    }
    if (onSaveArticle) {
      onSaveArticle(article);
    }
  };

  const handleSignInClick = () => {
    setShowTooltip(false);
    if (onOpenLoginModal) {
      onOpenLoginModal();
    }
  };

  const handleMouseEnter = () => {
    if (!isLoggedIn) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isLoggedIn) {
      setShowTooltip(false);
    }
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
            <img
              src={trashIcon}
              alt="Delete article"
              className="news-card__remove-icon"
            />
          </button>
          {article.keyword && (
            <div className="news-card__keyword">{article.keyword}</div>
          )}
        </>
      ) : (
        <div
          className="news-card__save-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`news-card__save-button ${
              !isLoggedIn ? "news-card__save-button_disabled" : ""
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
            <img
              src={
                isArticleCurrentlySaved
                  ? markedSave
                  : isLoggedIn
                  ? normalSave
                  : normalSave
              }
              alt="Save button"
              className="news-card__save-icon"
            />
          </button>
          <SaveTooltip
            isVisible={showTooltip}
            onSignInClick={handleSignInClick}
          />
        </div>
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
