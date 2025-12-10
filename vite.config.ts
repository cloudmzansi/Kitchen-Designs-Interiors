import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react/jsx-runtime'],
    esbuildOptions: {
      resolveExtensions: ['.jsx', '.js', '.ts', '.tsx'],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('yet-another-react-lightbox')) {
              return 'vendor-lightbox';
            }
            // Other node_modules go into vendor chunk
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      format: {
        comments: false,
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2015',
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
