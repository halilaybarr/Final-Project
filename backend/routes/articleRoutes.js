import express from "express";
import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
} from "../controllers/articleController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// All article routes require authentication
router.get("/", auth, getSavedArticles);
router.post("/", auth, saveArticle);
router.delete("/:articleId", auth, deleteArticle);

export default router;
