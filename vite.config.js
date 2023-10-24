import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // nested: resolve(__dirname, 'nested/secondpage.html'),
      },
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "img/[name]-[hash][extname]";
          }

          if (/\.mp3$/.test(name ?? "")) {
            return "audios/[name][extname]";
          }

          if (/\.(woff|woff2)$/.test(name ?? "")) {
            return "fonts/[name][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "css/[name]-[hash][extname]";
          }

          // default value
          return "dist/others/[name]-[hash][extname]";
        },
      },
    },
  },
});
