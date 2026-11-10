import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: https://lvb0799.github.io/BusanTravel/
export default defineConfig({
  plugins: [react()],
  base: '/BusanTravel/',
});
