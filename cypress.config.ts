import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "cqfcjv",
  e2e: {
    baseUrl: "http://localhost:5173/",
    execTimeout: 8 * 1000,
  },
});
