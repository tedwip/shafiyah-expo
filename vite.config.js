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

function inlineBuiltCss() {
  return {
    name: "inline-built-css",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      const htmlAsset = bundle["index.html"];

      if (!htmlAsset || htmlAsset.type !== "asset") {
        return;
      }

      let html = String(htmlAsset.source);

      for (const [fileName, asset] of Object.entries(bundle)) {
        if (asset.type !== "asset" || !fileName.endsWith(".css")) {
          continue;
        }

        const css = typeof asset.source === "string"
          ? asset.source
          : Buffer.from(asset.source).toString("utf8");
        const href = `/${fileName}`;
        const stylesheetLink = new RegExp(
          `<link\\s+rel="stylesheet"[^>]*href="${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`,
          "g",
        );

        html = html.replace(stylesheetLink, `<style>${css}</style>`);
        delete bundle[fileName];
      }

      htmlAsset.source = html;
    },
  };
}

export default defineConfig({
  plugins: [react(), copyLegacyImages(), inlineBuiltCss()],
});
