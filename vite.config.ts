import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        servicios: path.resolve(__dirname, 'servicios.html'),
        ai_lab: path.resolve(__dirname, 'ai_lab.html'),
        protocol_ai: path.resolve(__dirname, 'protocol-ai.html'),
        casos_de_uso: path.resolve(__dirname, 'casos_de_uso.html'),
        mvp_studio: path.resolve(__dirname, 'mvp_studio.html'),
        agendar_diagnostico: path.resolve(__dirname, 'agendar_diagnostico.html'),
        discovery_wizard: path.resolve(__dirname, 'discovery-wizard.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
      },
    },
  },
});

