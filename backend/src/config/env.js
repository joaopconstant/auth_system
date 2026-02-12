const { PORT, MONGODB_URI } = process.env;

if (!PORT) {
  throw new Error("PORT is not defined");
}

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

export { PORT, MONGODB_URI };
