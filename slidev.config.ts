import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
    theme: '@slidev/theme-penguin',
    plugins: [
    Icons({
      autoInstall: true, // Automatically install missing icons
    })
  ]
})

