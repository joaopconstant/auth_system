import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import { AppError } from "./error.middleware.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("Unauthorized - No token provided", 401));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    next(new AppError("Unauthorized - Invalid token", 401));
  }
};
