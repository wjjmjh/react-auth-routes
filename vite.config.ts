import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/_colors.scss";
          @import "src/styles/_mixins.scss";
        `,
      },
    },
  },
});
