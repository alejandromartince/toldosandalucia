import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression';
import compression2 from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react(),

    // Gzip
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Solo comprime archivos > 1KB
    }),

    // Brotli (mejor compresión que Gzip)
    compression2({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa librerías pesadas para cargar solo cuando se usen
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          mui: ['@mui/material', '@mui/icons-material'],
          icons: ['react-icons'],
        },
      },
    },
  },
});
