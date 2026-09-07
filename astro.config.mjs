import { defineConfig } from "astro/config";

// Change this to your real domain once you have one (used for RSS/canonical links).
const SITE_URL = "https://example.com";

// GitHub Pages project sites (username.github.io/REPO) need base set to "/REPO".
// - Cloudflare Pages: leave BASE_PATH as "/"
// - GitHub Pages user/org site (username.github.io): leave BASE_PATH as "/"
// - GitHub Pages project site (username.github.io/REPO): set BASE_PATH to "/REPO"
const BASE_PATH = "/";

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: "static",
  trailingSlash: "ignore",
});
