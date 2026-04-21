import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          projects: path.resolve(__dirname, 'projects.html'),
          resume: path.resolve(__dirname, 'resume.html'),
          'project-neural-behavioral': path.resolve(__dirname, 'project-neural-behavioral.html'),
          'project-cognitive-load': path.resolve(__dirname, 'project-cognitive-load.html'),
          'project-home-brew': path.resolve(__dirname, 'project-home-brew.html'),
          'project-research': path.resolve(__dirname, 'project-research.html'),
          'project-ai-portfolio': path.resolve(__dirname, 'project-ai-portfolio.html'),
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
