import express from "express";
import authRoutes from "./routes/auth.routes.js";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/auth", authRoutes);
