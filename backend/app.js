import "express";
import "mongoose";
import "cors";
import "dotenv/config";

import userRoutes from "./routes/userRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("News Explorer Api is running...");
});

app.use("/users", userRoutes);
app.use("/articles", articleRoutes);

app.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

export default app;
