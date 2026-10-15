// Copies src/ to dist/ and replaces %STATICFORMS_API_KEY% with the value of
// the STATICFORMS_API_KEY environment variable (or a local .env file).
// Using plain HTML without a build step? Just paste your key into index.html.
import { cpSync, existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";

if (existsSync(".env")) process.loadEnvFile(".env");

const apiKey = process.env.STATICFORMS_API_KEY || "YOUR_API_KEY";

rmSync("dist", { recursive: true, force: true });
cpSync("src", "dist", { recursive: true });

const html = readFileSync("dist/index.html", "utf8");
writeFileSync("dist/index.html", html.replaceAll("%STATICFORMS_API_KEY%", apiKey));

console.log("Built dist/");
