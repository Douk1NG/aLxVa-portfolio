import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function normalizeBase(
  rawPath: string | undefined,
): string {
  if (!rawPath) return '/'
  const withLeading = rawPath.startsWith('/')
    ? rawPath
    : `/${rawPath}`
  return withLeading.endsWith('/')
    ? withLeading
    : `${withLeading}/`
}

const base = normalizeBase(
  process.env.BASE_PATH || process.env.VITE_BASE_PATH,
)

export default defineConfig({
  plugins: [react()],
  base,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
  },
})
