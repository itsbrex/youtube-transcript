import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) =>
        format === 'es'
          ? 'youtube-transcript.esm.js'
          : 'youtube-transcript.common.js',
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
});
