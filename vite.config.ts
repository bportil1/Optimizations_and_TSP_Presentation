import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    Icons({
      autoInstall: true, // Automatically install missing icons
    }),
  ],
  server: {
    mimeTypes: {
      'image/svg+xml': ['.svg'], // Add this to allow SVGs to be served with the right MIME type
    },
  },
})

