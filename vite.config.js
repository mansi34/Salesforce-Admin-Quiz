import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset paths so the built dist/index.html can be opened from disk.
  base: './',
  plugins: [react()],
  server: {
    // Vite's HMR client calls location.reload() the moment its websocket
    // reconnects, which is exactly what happens when the laptop wakes from
    // sleep mid-exam. Shutting the socket down removes that automatic refresh;
    // the trade-off is that code edits now need a manual browser reload.
    hmr: false,
    ws: false,
    // Must be explicit: the HMR client builds its retry URL from this value and
    // would otherwise throw on "localhost:undefined".
    port: 5173,
  },
});
