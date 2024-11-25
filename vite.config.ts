import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "./manifest.json"),
          dest: "./",
        },
        {
          src: path.resolve(__dirname, "./src/assets/icons"),
          dest: "./assets",
        },
        {
          src: './node_modules/@beeq/core/dist/beeq/svg/*',
          dest: 'svg',
        },
      ],
    }),
    nodePolyfills({ include: ["os"] }),
  ],
});
