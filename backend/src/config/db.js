import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";

// Workaround: forces Google DNS to resolve MongoDB SRV records.
// Required due to ISP DNS (IPv6) not resolving querySrv correctly in local environment.
// This should not be necessary in properly configured production environments.
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
