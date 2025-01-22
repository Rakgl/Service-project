import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qrcode from 'qrcode-terminal';
import path from 'path';

// Vercel deployed URL
const DEPLOYED_URL = 'https://service-project-vmli.vercel.app/';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'vite-plugin-qrcode',
      configureServer() {
        qrcode.generate(DEPLOYED_URL, { small: true }, (qr) => {
          console.log('\nScan this QR code to access your deployed app:');
          console.log(DEPLOYED_URL);
          console.log(qr);
        });
      },
    },
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
});
