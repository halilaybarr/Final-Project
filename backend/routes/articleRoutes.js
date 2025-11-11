import express from "express";
import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
} from "../controllers/articleController.js";
import { auth } from "../middleware/auth.js";
import {
  validateArticle,
  validateArticleId,
} from "../middleware/validation.js";

const router = express.Router();

// All article routes require authentication
router.get("/", auth, getSavedArticles);
router.post("/", auth, validateArticle, saveArticle);
router.delete("/:articleId", auth, validateArticleId, deleteArticle);

export default router;
