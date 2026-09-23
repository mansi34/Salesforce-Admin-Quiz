import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset paths so the built dist/index.html can be opened from disk.
  base: './',
  plugins: [react()],
});
