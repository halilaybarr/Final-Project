import { body, param, validationResult } from "express-validator";

// Middleware to check validation results
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};

// User registration validation
export const validateRegister = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  body("name")
    .trim()
    .isLength({ min: 2, max: 30 })
    .withMessage("Name must be between 2 and 30 characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name can only contain letters and spaces"),
  handleValidationErrors,
];

// User login validation
export const validateLogin = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  handleValidationErrors,
];

// Article creation validation
export const validateArticle = [
  body("keyword")
    .trim()
    .notEmpty()
    .withMessage("Keyword is required")
    .isLength({ max: 50 })
    .withMessage("Keyword must be less than 50 characters"),
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 200 })
    .withMessage("Title must be less than 200 characters"),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("Text is required")
    .isLength({ max: 1000 })
    .withMessage("Text must be less than 1000 characters"),
  body("date").trim().notEmpty().withMessage("Date is required"),
  body("source")
    .trim()
    .notEmpty()
    .withMessage("Source is required")
    .isLength({ max: 100 })
    .withMessage("Source must be less than 100 characters"),
  body("link")
    .trim()
    .notEmpty()
    .withMessage("Link is required")
    .isURL()
    .withMessage("Link must be a valid URL"),
  body("image")
    .trim()
    .notEmpty()
    .withMessage("Image is required")
    .isURL()
    .withMessage("Image must be a valid URL"),
  handleValidationErrors,
];

// Article ID validation
export const validateArticleId = [
  param("articleId").isMongoId().withMessage("Invalid article ID format"),
  handleValidationErrors,
];
