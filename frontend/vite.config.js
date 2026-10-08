import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),

  ],

  server:{
    proxy:{
      "/api":{
        target: "https://task-management-app-yaw5.onrender.com",
        changeOrigin:true,
        secure:false
      }
    }
  }
})

