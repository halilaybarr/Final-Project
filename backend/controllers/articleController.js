import Article from "../models/article.js";

// Get all saved articles for the current user
export const getSavedArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({ owner: req.user._id });
    res.json(articles);
  } catch (error) {
    next(error);
  }
};

// Save a new article
export const saveArticle = async (req, res, next) => {
  try {
    const { keyword, title, text, date, source, link, image } = req.body;

    const article = await Article.create({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
      owner: req.user._id,
    });

    res.status(201).json(article);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    next(error);
  }
};

// Delete a saved article
export const deleteArticle = async (req, res, next) => {
  try {
    const { articleId } = req.params;

    const article = await Article.findById(articleId);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Check if the article belongs to the current user
    if (article.owner.toString() !== req.user._id) {
      return res
        .status(403)
        .json({ message: "You don't have permission to delete this article" });
    }

    await Article.findByIdAndDelete(articleId);
    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    next(error);
  }
};
