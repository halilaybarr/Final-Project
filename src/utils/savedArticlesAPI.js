export function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          _id: "65f7368dfb74bd6a92114c85",
          title: "Scientists Discover New Species of Deep-Sea Fish",
          url: "https://example.com/news/deep-sea-fish-discovery",
          urlToImage:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
          description:
            "Marine biologists have identified a previously unknown species of bioluminescent fish in the Pacific Ocean depths.",
          source: { name: "Science Daily" },
          publishedAt: "2025-09-01T10:30:00Z",
        },
        {
          _id: "65f7371e7bce9e7d331b11a0",
          title: "Revolutionary AI Technology Transforms Healthcare",
          url: "https://example.com/news/ai-healthcare-breakthrough",
          urlToImage:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
          description:
            "A new artificial intelligence system can now diagnose rare diseases with 95% accuracy, potentially saving thousands of lives.",
          source: { name: "Tech Health News" },
          publishedAt: "2025-09-02T14:15:00Z",
        },
        {
          _id: "65f7372a8bce9e7d331b11a1",
          title: "Climate Change: Arctic Ice Reaches Record Low",
          url: "https://example.com/news/arctic-ice-record-low",
          urlToImage:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
          description:
            "Satellite data shows Arctic sea ice has reached its lowest extent since measurements began, raising concerns about global warming acceleration.",
          source: { name: "Environmental Monitor" },
          publishedAt: "2025-09-03T08:45:00Z",
        },
      ]);
    }, 800);
  });
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    if (!article || !article.title) {
      reject(new Error("Invalid article data"));
      return;
    }

    setTimeout(() => {
      resolve({
        _id: "65f7371e7bce9e7d331b11a0",
        url: article.url,
        title: article.title,
        urlToImage: article.urlToImage,
        description: article.description,
        source: article.source,
        publishedAt: article.publishedAt,
        savedAt: new Date().toISOString(),
      });
    }, 600);
  });
}

export function deleteArticle(articleId) {
  return new Promise((resolve, reject) => {
    if (!articleId) {
      reject(new Error("Article ID is required"));
      return;
    }

    setTimeout(() => {
      resolve({
        message: "Article deleted successfully",
        deletedId: articleId,
      });
    }, 500);
  });
}
