/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.tsx'],
    globals: true,
    testTimeout: 10000, // 10 seconds
    hookTimeout: 10000, // 10 seconds
    pool: 'threads',
    maxWorkers: 4,
    reporters: ['verbose'],
    outputFile: {
      json: './test-results.json',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      thresholds: {
        statements: 70,
        branches: 60,
        functions: 0,
        lines: 0
      },
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/out/**',
        '**/.next/**',
        '**/*.d.ts',
        '**/types/**',
        '**/test/**',
        '**/*.config.*',
        '**/*.setup.*',
        '**/scripts/**',
        '**/translations/**',
        '**/data/portfolio.json',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
