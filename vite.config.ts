import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'image-uploader',
        configureServer(server) {
          server.middlewares.use('/api/upload-logo', (req, res) => {
            if (req.method === 'POST') {
              const chunks: Buffer[] = [];
              req.on('data', (chunk: Buffer) => chunks.push(chunk));
              req.on('end', () => {
                const buffer = Buffer.concat(chunks);
                const publicDir = path.resolve(__dirname, 'public');
                if (!fs.existsSync(publicDir)) {
                  fs.mkdirSync(publicDir, { recursive: true });
                }
                fs.writeFileSync(path.join(publicDir, 'logo.png'), buffer);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
              });
            } else {
              res.writeHead(405).end();
            }
          });

          server.middlewares.use('/api/upload-hero-image', (req, res) => {
            if (req.method === 'POST') {
              const chunks: Buffer[] = [];
              req.on('data', (chunk: Buffer) => chunks.push(chunk));
              req.on('end', () => {
                const buffer = Buffer.concat(chunks);
                const publicDir = path.resolve(__dirname, 'public');
                if (!fs.existsSync(publicDir)) {
                  fs.mkdirSync(publicDir, { recursive: true });
                }
                fs.writeFileSync(path.join(publicDir, 'nails.png'), buffer);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
              });
            } else {
              res.writeHead(405).end();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
