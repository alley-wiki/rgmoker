import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rgmoker/', // если сайт будет доступен по https://alley-wiki.github.io/rgmoker
  plugins: [react()],
});