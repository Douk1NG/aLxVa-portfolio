import fs from 'node:fs'
import path from 'node:path'

import type { PortfolioData } from '@/types/portfolio-data'

const PRIVATE_FILE = 'portfolio.private.json'
const SAMPLE_FILE = 'portfolio.sample.json'

export function getPortfolioDataDir(): string {
  return path.join(process.cwd(), 'data')
}

export function getPrivatePortfolioPath(): string {
  return path.join(getPortfolioDataDir(), PRIVATE_FILE)
}

export function getSamplePortfolioPath(): string {
  return path.join(getPortfolioDataDir(), SAMPLE_FILE)
}

export function resolvePortfolioDataPath(): string {
  const privatePath = getPrivatePortfolioPath()

  if (fs.existsSync(privatePath)) {
    return privatePath
  }

  return getSamplePortfolioPath()
}

export function loadPortfolioData(): PortfolioData {
  const filePath = resolvePortfolioDataPath()
  const raw = fs.readFileSync(filePath, 'utf-8')

  return JSON.parse(raw) as PortfolioData
}
