"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { SectionName } from "@/types/section"

type MobileNavContextType = {
    activeSection: SectionName
    setActiveSection: (section: SectionName) => void
    scrollToSection: (section: SectionName) => void
    setScrollToSectionCallback: (callback: (section: SectionName) => void) => void
}

const MobileNavContext = createContext<MobileNavContextType | undefined>(undefined)

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
    // We use this to track what the "active" section is for highlighting buttons
    const [activeSection, setActiveSection] = useState<SectionName>("about")

    // This holds the function from the consumer (the Carousel) that will actually do the scrolling
    const [scrollCallback, setScrollCallback] = useState<((section: SectionName) => void) | null>(null)

    const setScrollToSectionCallback = useCallback((callback: (section: SectionName) => void) => {
        setScrollCallback(() => callback)
    }, [])

    const scrollToSection = useCallback((section: SectionName) => {
        if (scrollCallback) {
            scrollCallback(section)
            setActiveSection(section)
        }
    }, [scrollCallback])

    return (
        <MobileNavContext.Provider
            value={{
                activeSection,
                setActiveSection,
                scrollToSection,
                setScrollToSectionCallback,
            }}
        >
            {children}
        </MobileNavContext.Provider>
    )
}

export function useMobileNav() {
    const context = useContext(MobileNavContext)
    if (context === undefined) {
        throw new Error("useMobileNav must be used within a MobileNavProvider")
    }
    return context
}
