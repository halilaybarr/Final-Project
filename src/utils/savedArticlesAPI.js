const BASE_URL = "http://localhost:3001";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};

const getToken = () => {
  return localStorage.getItem("jwt");
};

export async function getItems() {
  const token = getToken();

  if (!token) {
    throw new Error("Not authenticated");
  }

  const response = await fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const articles = await handleResponse(response);

  // Transform backend data to match frontend format
  return articles.map((article) => ({
    _id: article._id,
    title: article.title,
    url: article.link,
    urlToImage: article.image,
    description: article.text,
    source: { name: article.source },
    publishedAt: article.date,
    keyword: article.keyword,
  }));
}

export async function saveArticle(article) {
  const token = getToken();

  if (!token) {
    throw new Error("Not authenticated");
  }

  if (!article || !article.title) {
    throw new Error("Invalid article data");
  }

  const response = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: article.keyword || "General",
      title: article.title,
      text: article.description || "",
      date: article.publishedAt || new Date().toISOString(),
      source: article.source?.name || "Unknown",
      link: article.url || "",
      image: article.urlToImage || "",
    }),
  });

  const savedArticle = await handleResponse(response);

  // Transform backend data to match frontend format
  return {
    _id: savedArticle._id,
    title: savedArticle.title,
    url: savedArticle.link,
    urlToImage: savedArticle.image,
    description: savedArticle.text,
    source: { name: savedArticle.source },
    publishedAt: savedArticle.date,
    keyword: savedArticle.keyword,
  };
}

export async function removeArticle(articleId) {
  const token = getToken();

  if (!token) {
    throw new Error("Not authenticated");
  }

  if (!articleId) {
    throw new Error("Article ID is required");
  }

  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return handleResponse(response);
}

export async function deleteArticle(articleId) {
  return removeArticle(articleId);
}
