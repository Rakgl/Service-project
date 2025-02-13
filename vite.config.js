import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(), // Adds React fast refresh and JSX support.
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Allows using "@" as an alias for your "src" folder.
    },
  },
});
