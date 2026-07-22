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
        orlando_linares: path.resolve(__dirname, 'orlando-linares.html'),
        enfoque: path.resolve(__dirname, 'enfoque.html'),
        articulos: path.resolve(__dirname, 'articulos.html'),
        articulo_identificar_procesos_ia: path.resolve(__dirname, 'articulo-identificar-procesos-ia.html'),
        articulo_digitalizacion_automatizacion_ia: path.resolve(__dirname, 'articulo-digitalizacion-automatizacion-ia.html'),
        articulo_roi_automatizacion: path.resolve(__dirname, 'articulo-roi-automatizacion.html'),
        articulo_proceso_as_is: path.resolve(__dirname, 'articulo-proceso-as-is.html'),
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

