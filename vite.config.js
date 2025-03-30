import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MCK-Community-Portal/', // Add this line
  plugins: [react()],
});