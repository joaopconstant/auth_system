import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get(
  "/me",
  authMiddleware,
  asyncHandler(async (req, res) => {
    res.json({ message: "Me", userId: req.userId });
  }),
);

export default router;
