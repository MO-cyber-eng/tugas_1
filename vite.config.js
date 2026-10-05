import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti 'tugas-1' sesuai dengan nama repositori GitHub Anda
export default defineConfig({
  plugins: [react()],
  base: '/tugas-1/', 
})