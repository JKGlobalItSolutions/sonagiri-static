import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sonagiri_static/',   // <--- important: match your repo name
  plugins: [react()],
})
