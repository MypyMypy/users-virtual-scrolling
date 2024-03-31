import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mypymypy.github.io/users-virtual-scrolling/',
  plugins: [react()],
})
