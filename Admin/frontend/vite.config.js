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
      "@login": path.resolve(import.meta.dirname, "../../Login/frontend/src"),
      "@register": path.resolve(import.meta.dirname, "../../Register/frontend/src"),
      "@forgot": path.resolve(import.meta.dirname, "../../ForgotPassword/frontend/src"),
      "@donor": path.resolve(import.meta.dirname, "../../Donor/frontend/src"),
      "@school": path.resolve(import.meta.dirname, "../../School/frontend/src"),
      "@warehouse": path.resolve(import.meta.dirname, "../../Warehouse/frontend/src"),
      "@volunteer": path.resolve(import.meta.dirname, "../../Volunteer/frontend/src"),
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
      allow: [path.resolve(import.meta.dirname, "../..")],
    },
  },
})
