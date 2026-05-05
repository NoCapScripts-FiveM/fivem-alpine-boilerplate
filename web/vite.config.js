import { defineConfig } from "vite";
import AlpineVitePlugin from "./alpine-vite-plugin.js";
import path from "path";

export default defineConfig({
  base: "./",
  root: path.resolve(__dirname, "."),

  plugins: [AlpineVitePlugin()],

  build: {
    outDir: path.resolve(__dirname, "../ui"),
    emptyOutDir: true,

    cssCodeSplit: false,
    minify: "esbuild",

    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),

      output: {
        entryFileNames: "assets/index.js",

        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/index.css";
          }

          return "assets/[name].[ext]";
        },
      },
    },
  },
});
