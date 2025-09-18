const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const fetchNews = async (query, apiKey, from, to, pageSize) => {
  if (!query || !query.trim()) {
    throw new Error("Please enter a keyword");
  }

  const url = `${newsApiBaseUrl}?q=${encodeURIComponent(
    query,
  )}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}&language=en`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Sorry, something went wrong during the request. Please try again later.",
    );
  }

  const data = await response.json();
  return data.articles || [];
};
