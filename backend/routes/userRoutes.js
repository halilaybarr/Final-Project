import express from "express";
import {
  register,
  login,
  getCurrentUser,
} from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";
import { validateRegister, validateLogin } from "../middleware/validation.js";

const router = express.Router();

// Public routes with validation
router.post("/signup", validateRegister, register);
router.post("/signin", validateLogin, login);

// Protected routes
router.get("/me", auth, getCurrentUser);

export default router;
