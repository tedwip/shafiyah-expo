import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cpSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

function copyLegacyImages() {
  return {
    name: "copy-legacy-images",
    closeBundle() {
      const sourceDir = path.resolve(rootDir, "assets/images");
      const targetDir = path.resolve(rootDir, "dist/assets/images");

      if (existsSync(sourceDir)) {
        cpSync(sourceDir, targetDir, { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyLegacyImages()],
});
