import portfolioJson from '@/data/portfolio.json'
import type { PortfolioData } from '@/types/portfolio-data'

export const portfolioData = portfolioJson as PortfolioData

export const experienceData = portfolioData.experience
export const projectsData = portfolioData.projects
export const skillsData = portfolioData.skills
export const infoTags = portfolioData.info
