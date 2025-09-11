import React from "react";
import "./SavedNewsHeader.css";

const SavedNewsHeader = ({ userName, articleCount, keywords }) => {
  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__label">Saved articles</p>
        <h1 className="saved-news-header__title">
          {userName}, you have {articleCount} saved article
          {articleCount !== 1 ? "s" : ""}
        </h1>
        {keywords && (
          <p className="saved-news-header__keywords">
            By keywords:{" "}
            <span className="saved-news-header__keywords-text">{keywords}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default SavedNewsHeader;
