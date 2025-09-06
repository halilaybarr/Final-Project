import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!query.trim()) {
      setError("Please enter a keyword");
      return;
    }

    onSearch(query.trim());
  };

  return (
    <section className="search-form">
      <div className="search-form__content">
        <h1 className="search-form__title">What's going on in the world?</h1>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </form>
        {error && (
          <div className="search-form__error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchForm;
