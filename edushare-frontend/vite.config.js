import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@login": path.resolve(import.meta.dirname, "./src/pages/login"),
      "@register": path.resolve(import.meta.dirname, "./src/pages/register"),
      "@forgot": path.resolve(import.meta.dirname, "./src/pages/forgot"),
      "@donor": path.resolve(import.meta.dirname, "./src/pages/donor"),
      "@school": path.resolve(import.meta.dirname, "./src/pages/school"),
      "@warehouse": path.resolve(import.meta.dirname, "./src/pages/warehouse"),
      "@volunteer": path.resolve(import.meta.dirname, "./src/pages/volunteer"),
      react: path.resolve(import.meta.dirname, "node_modules/react"),
      "react-dom": path.resolve(import.meta.dirname, "node_modules/react-dom"),
      "react-router-dom": path.resolve(import.meta.dirname, "node_modules/react-router-dom"),
      "lucide-react": path.resolve(import.meta.dirname, "node_modules/lucide-react"),
    },
  },
  server: {
    host: true,
    port: 5173,
    fs: {
      allow: [path.resolve(import.meta.dirname)],
    },
  },
})
