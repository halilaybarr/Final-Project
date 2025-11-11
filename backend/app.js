import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import "dotenv/config";

import userRoutes from "./routes/userRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Security middleware
app.use(helmet()); // Secure HTTP headers
app.use(mongoSanitize()); // Prevent NoSQL injection

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(
  "/users/signin",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, // 5 login attempts per 15 minutes
    message: "Too many login attempts, please try again later.",
  })
);

app.use(
  "/users/signup",
  rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // 3 signup attempts per hour
    message: "Too many signup attempts, please try again later.",
  })
);

app.use("/api/", limiter); // Apply to all API routes

app.use(cors());
app.use(express.json({ limit: "10mb" })); // Limit payload size
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("News Explorer Api is running...");
});

app.use("/users", userRoutes);
app.use("/articles", articleRoutes);

app.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;
