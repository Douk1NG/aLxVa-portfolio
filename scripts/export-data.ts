import fs from 'node:fs'
import path from 'node:path'

import { loadPortfolioData } from './lib/load-portfolio-data'

const EXPORTS_DIR = path.join(process.cwd(), 'exports')
const OUTPUT_FILE = path.join(EXPORTS_DIR, 'portfolio.json')

async function exportData() {
  try {
    const data = loadPortfolioData()
    const json = `${JSON.stringify(data)}\n`

    fs.mkdirSync(EXPORTS_DIR, { recursive: true })
    fs.writeFileSync(OUTPUT_FILE, json, 'utf-8')

    console.log(`Exported to ${path.relative(process.cwd(), OUTPUT_FILE)}`)
    console.log('Copy that file contents into the PORTFOLIO_DATA GitHub secret.')
  } catch (error) {
    console.error('Failed to export data:', error)
    process.exit(1)
  }
}

exportData()