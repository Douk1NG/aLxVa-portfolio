/**
 * PORTFOLIO DATA EXPORTER
 * -----------------------
 * Outputs the portfolio JSON consumed by the Portfolio Management Tool.
 *
 * Usage: npx tsx scripts/export-data.ts
 */

import { loadPortfolioData } from './lib/load-portfolio-data'

async function exportData() {
  try {
    const data = loadPortfolioData()
    console.log(JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Failed to export data:', error)
    process.exit(1)
  }
}

exportData()
