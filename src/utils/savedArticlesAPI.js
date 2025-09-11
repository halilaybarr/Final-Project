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
          keyword: "Nature",
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
          keyword: "Technology",
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
          keyword: "Nature",
        },
        {
          _id: "65f7372b8bce9e7d331b11a2",
          title: "Yellowstone National Park Sees Record Wildlife Recovery",
          url: "https://example.com/news/yellowstone-wildlife-recovery",
          urlToImage:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
          description:
            "Conservation efforts in Yellowstone have led to the highest wildlife population numbers in decades, showcasing successful ecosystem restoration.",
          source: { name: "National Geographic" },
          publishedAt: "2025-09-04T12:20:00Z",
          keyword: "Yellowstone",
        },
        {
          _id: "65f7372c8bce9e7d331b11a3",
          title: "New Photography Techniques Capture Stunning Nature Scenes",
          url: "https://example.com/news/nature-photography-techniques",
          urlToImage:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
          description:
            "Professional photographers share innovative methods for capturing the beauty of natural landscapes and wildlife behavior.",
          source: { name: "Photography Weekly" },
          publishedAt: "2025-09-05T16:30:00Z",
          keyword: "Photography",
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
        _id: `65f7371e7bce9e7d331b11a${Math.floor(Math.random() * 1000)}`,
        url: article.url,
        title: article.title,
        urlToImage: article.urlToImage,
        description: article.description,
        source: article.source,
        publishedAt: article.publishedAt,
        keyword: article.keyword || "General",
        savedAt: new Date().toISOString(),
      });
    }, 600);
  });
}

export function removeArticle(articleId) {
  return new Promise((resolve, reject) => {
    if (!articleId) {
      reject(new Error("Article ID is required"));
      return;
    }

    setTimeout(() => {
      resolve({
        message: "Article removed successfully",
        deletedId: articleId,
      });
    }, 500);
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
