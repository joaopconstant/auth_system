const { PORT, MONGODB_URI, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

if (!PORT) throw new Error("PORT is not defined");
if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined");
if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");

const config = {
  PORT: PORT || 3000,
  MONGODB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN: JWT_EXPIRES_IN || "1h",
};

export const {
  PORT: ENV_PORT,
  MONGODB_URI: ENV_MONGODB_URI,
  JWT_SECRET: ENV_JWT_SECRET,
  JWT_EXPIRES_IN: ENV_JWT_EXPIRES_IN,
} = config;

// Exporting original names for compatibility
export { PORT, MONGODB_URI, JWT_SECRET, JWT_EXPIRES_IN };

export default config;
