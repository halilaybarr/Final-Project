import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

const SavedNews = ({ savedArticles, currentUser, onRemoveArticle }) => {
  const getKeywordStats = () => {
    const keywords = {};
    savedArticles.forEach((article) => {
      if (article.keyword) {
        keywords[article.keyword] = (keywords[article.keyword] || 0) + 1;
      }
    });

    const sortedKeywords = Object.entries(keywords)
      .sort(([, a], [, b]) => b - a)
      .map(([keyword]) => keyword);

    return sortedKeywords;
  };

  const keywords = getKeywordStats();
  const keywordText =
    keywords.length > 2
      ? `${keywords.slice(0, 2).join(", ")}, and ${keywords.length - 2} other${
        keywords.length > 3 ? "s" : ""
      }`
      : keywords.join(", ");

  return (
    <main className="saved-news">
      <SavedNewsHeader
        userName={currentUser?.name}
        articleCount={savedArticles.length}
        keywords={keywordText}
      />

      {savedArticles.length > 0 && (
        <section className="saved-news__cards">
          <div className="saved-news__container">
            {savedArticles.map((article) => (
              <NewsCard
                key={article._id || article.url}
                article={article}
                isLoggedIn={true}
                isSaved={true}
                onSaveArticle={() => {}}
                onRemoveArticle={onRemoveArticle}
                showRemoveButton={true}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default SavedNews;
