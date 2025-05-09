// vite.config.ts
import { defineConfig } from "file:///Users/chudong/project/tools-monorepo/node_modules/.pnpm/vite@5.4.17_@types+node@22.14.1_less@4.3.0_sass@1.86.3_stylus@0.62.0_terser@5.39.0/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///Users/chudong/project/tools-monorepo/node_modules/.pnpm/@vitejs+plugin-vue@5.2.3_vite@5.4.17_@types+node@22.14.1_less@4.3.0_sass@1.86.3_stylus@0.62.0_go6z3tefsws3wdi7v2oslblfka/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///Users/chudong/project/tools-monorepo/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@22.14.1_rollup@4.39.0_typescript@5.8.3_vite@5.4.17_@types+n_zmp27njhd5iaq3ydw5bs3364h4/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/chudong/project/tools-monorepo/packages/i18n";
var vite_config_default = defineConfig({
  root: resolve(__vite_injected_original_dirname, "./src"),
  plugins: [
    vue(),
    dts({
      include: ["*.ts"],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(/src/, ""),
        content
      })
    })
  ],
  build: {
    outDir: resolve(__vite_injected_original_dirname, "dist"),
    emptyOutDir: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "BaotaI18n",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`
    },
    rollupOptions: {
      external: ["vue", "vue-i18n", "@vueuse/core"],
      output: {
        globals: {
          vue: "Vue",
          "vue-i18n": "VueI18n",
          "@vueuse/core": "VueUse"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2h1ZG9uZy9wcm9qZWN0L3Rvb2xzLW1vbm9yZXBvL3BhY2thZ2VzL2kxOG5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaHVkb25nL3Byb2plY3QvdG9vbHMtbW9ub3JlcG8vcGFja2FnZXMvaTE4bi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2h1ZG9uZy9wcm9qZWN0L3Rvb2xzLW1vbm9yZXBvL3BhY2thZ2VzL2kxOG4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRyb290OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG5cdHBsdWdpbnM6IFtcblx0XHR2dWUoKSxcblx0XHRkdHMoe1xuXHRcdFx0aW5jbHVkZTogWycqLnRzJ10sXG5cdFx0XHRiZWZvcmVXcml0ZUZpbGU6IChmaWxlUGF0aCwgY29udGVudCkgPT4gKHtcblx0XHRcdFx0ZmlsZVBhdGg6IGZpbGVQYXRoLnJlcGxhY2UoL3NyYy8sICcnKSxcblx0XHRcdFx0Y29udGVudCxcblx0XHRcdH0pLFxuXHRcdH0pLFxuXHRdLFxuXHRidWlsZDoge1xuXHRcdG91dERpcjogcmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0JyksXG5cdFx0ZW1wdHlPdXREaXI6IHRydWUsXG5cdFx0bGliOiB7XG5cdFx0XHRlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcblx0XHRcdG5hbWU6ICdCYW90YUkxOG4nLFxuXHRcdFx0Zm9ybWF0czogWydlcycsICdjanMnXSxcblx0XHRcdGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXQgPT09ICdlcycgPyAnbWpzJyA6ICdjanMnfWAsXG5cdFx0fSxcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRleHRlcm5hbDogWyd2dWUnLCAndnVlLWkxOG4nLCAnQHZ1ZXVzZS9jb3JlJ10sXG5cdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0Z2xvYmFsczoge1xuXHRcdFx0XHRcdHZ1ZTogJ1Z1ZScsXG5cdFx0XHRcdFx0J3Z1ZS1pMThuJzogJ1Z1ZUkxOG4nLFxuXHRcdFx0XHRcdCdAdnVldXNlL2NvcmUnOiAnVnVlVXNlJyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJVLFNBQVMsb0JBQW9CO0FBQ3hXLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE1BQU0sUUFBUSxrQ0FBVyxPQUFPO0FBQUEsRUFDaEMsU0FBUztBQUFBLElBQ1IsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLE1BQ0gsU0FBUyxDQUFDLE1BQU07QUFBQSxNQUNoQixpQkFBaUIsQ0FBQyxVQUFVLGFBQWE7QUFBQSxRQUN4QyxVQUFVLFNBQVMsUUFBUSxPQUFPLEVBQUU7QUFBQSxRQUNwQztBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixRQUFRLFFBQVEsa0NBQVcsTUFBTTtBQUFBLElBQ2pDLGFBQWE7QUFBQSxJQUNiLEtBQUs7QUFBQSxNQUNKLE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxXQUFXLFNBQVMsV0FBVyxPQUFPLFFBQVEsS0FBSztBQUFBLElBQy9EO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDZCxVQUFVLENBQUMsT0FBTyxZQUFZLGNBQWM7QUFBQSxNQUM1QyxRQUFRO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUixLQUFLO0FBQUEsVUFDTCxZQUFZO0FBQUEsVUFDWixnQkFBZ0I7QUFBQSxRQUNqQjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
