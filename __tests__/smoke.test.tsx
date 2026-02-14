import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '@/app/page'

describe('Smoke Test: Home Page', () => {
    it('should render the portfolio without crashing', async () => {
        render(<Home />)

        // Wait for the main element to appear (after mounting)
        const mainElements = await screen.findAllByRole('main', {}, { timeout: 3000 })
        expect(mainElements.length).toBeGreaterThan(0)
    })

    it('should render navigation links', async () => {
        render(<Home />)

        // Wait for navigation role
        const navElements = await screen.findAllByRole('navigation', {}, { timeout: 3000 })
        expect(navElements.length).toBeGreaterThan(0)
    })

    it('should display the name in the hero section', async () => {
        render(<Home />)

        // Wait for hero name to be rendered
        const nameElements = await screen.findAllByText(/Dibey/i, {}, { timeout: 3000 })
        expect(nameElements.length).toBeGreaterThan(0)
    })
})
