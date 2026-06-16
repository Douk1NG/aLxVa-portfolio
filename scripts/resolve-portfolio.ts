/**
 * Resolves portfolio.private.json (or portfolio.sample.json) into
 * data/portfolio.json for the app to import at build time.
 *
 * Usage: npx tsx scripts/resolve-portfolio.ts
 */

import fs from 'node:fs'
import path from 'node:path'

import {
  loadPortfolioData,
  resolvePortfolioDataPath,
} from './lib/load-portfolio-data'

const outputPath = path.join(process.cwd(), 'data/portfolio.json')
const data = loadPortfolioData()

fs.writeFileSync(outputPath, `${JSON.stringify(data, null, 2)}\n`, 'utf-8')

const relativeSource = path.relative(
  process.cwd(),
  resolvePortfolioDataPath(),
)
console.log(`Resolved data/portfolio.json from ${relativeSource}.`)
