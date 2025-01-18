import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vite-react/', // Set the base URL
  plugins: [react()],
});
