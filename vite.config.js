import { resolve } from "path";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      preserveEntrySignatures: true,
      input: "src/application-root-config.js",
      output: {
        format: "system",
        entryFileNames: "src/[name].js",
      },
      external: ["preact", "systenjs"],
    },
  },
  lib: {
    entry: resolve(__dirname, "src/application-root-config.js"),
  },
  plugins: [preact(), basicSsl()],
  server: {
    https: false,
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: "@scotia",
  //       replacement: "/src",
  //     },
  //   ],
  // },
});
