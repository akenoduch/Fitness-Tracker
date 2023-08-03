// vite.config.ts
import { defineConfig } from "file:///app/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///app/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js";

// aliases.config.js
import path from "path";
var aliases_config_default = {
  $components: path.resolve("./src/components"),
  $assets: path.resolve("./src/assets"),
  $pages: path.resolve("./src/pages"),
  $helpers: path.resolve("./src/helpers"),
  $styles: path.resolve("./src/styles"),
  $types: path.resolve("./src/types"),
  $stores: path.resolve("./src/stores"),
  $policies: path.resolve("./src/policies")
};

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: aliases_config_default
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "$styles/variables.scss" as *;'
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYWxpYXNlcy5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSBcIkBzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGVcIjtcbmltcG9ydCBhbGlhc2VzIGZyb20gXCIuL2FsaWFzZXMuY29uZmlnLmpzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbc3ZlbHRlKCldLFxuXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogYWxpYXNlcyxcbiAgfSxcblxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQHVzZSBcIiRzdHlsZXMvdmFyaWFibGVzLnNjc3NcIiBhcyAqOycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2FwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2FwcC9hbGlhc2VzLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vYXBwL2FsaWFzZXMuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAkY29tcG9uZW50czogcGF0aC5yZXNvbHZlKFwiLi9zcmMvY29tcG9uZW50c1wiKSxcbiAgJGFzc2V0czogcGF0aC5yZXNvbHZlKFwiLi9zcmMvYXNzZXRzXCIpLFxuICAkcGFnZXM6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3BhZ2VzXCIpLFxuICAkaGVscGVyczogcGF0aC5yZXNvbHZlKFwiLi9zcmMvaGVscGVyc1wiKSxcbiAgJHN0eWxlczogcGF0aC5yZXNvbHZlKFwiLi9zcmMvc3R5bGVzXCIpLFxuICAkdHlwZXM6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3R5cGVzXCIpLFxuICAkc3RvcmVzOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9zdG9yZXNcIiksXG4gICRwb2xpY2llczogcGF0aC5yZXNvbHZlKFwiLi9zcmMvcG9saWNpZXNcIiksXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4TCxTQUFTLG9CQUFvQjtBQUMzTixTQUFTLGNBQWM7OztBQ0Q2SyxPQUFPLFVBQVU7QUFFck4sSUFBTyx5QkFBUTtBQUFBLEVBQ2IsYUFBYSxLQUFLLFFBQVEsa0JBQWtCO0FBQUEsRUFDNUMsU0FBUyxLQUFLLFFBQVEsY0FBYztBQUFBLEVBQ3BDLFFBQVEsS0FBSyxRQUFRLGFBQWE7QUFBQSxFQUNsQyxVQUFVLEtBQUssUUFBUSxlQUFlO0FBQUEsRUFDdEMsU0FBUyxLQUFLLFFBQVEsY0FBYztBQUFBLEVBQ3BDLFFBQVEsS0FBSyxRQUFRLGFBQWE7QUFBQSxFQUNsQyxTQUFTLEtBQUssUUFBUSxjQUFjO0FBQUEsRUFDcEMsV0FBVyxLQUFLLFFBQVEsZ0JBQWdCO0FBQzFDOzs7QUROQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsT0FBTyxDQUFDO0FBQUEsRUFFbEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
