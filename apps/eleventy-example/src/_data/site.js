import { existsSync } from "node:fs";

// Load a local .env file when present (Vercel injects variables directly)
if (existsSync(".env")) process.loadEnvFile(".env");

export default {
  staticformsApiKey: process.env.STATICFORMS_API_KEY || "YOUR_API_KEY",
};
