import { registerUser, loginUser } from "../services/auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { AppError } from "../middlewares/error.middleware.js";

export const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError("Email and password are required", 400);
  }

  const result = await registerUser(email, password);

  res.status(201).json({
    message: "User created successfully",
    ...result,
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError("Email and password are required", 400);
  }

  const result = await loginUser(email, password);

  res.status(200).json({
    message: "Login successful",
    ...result,
  });
});
