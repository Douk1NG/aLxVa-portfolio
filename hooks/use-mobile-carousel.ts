"use client"

import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { useMobileNav } from "@/components/providers/mobile-nav-context"
import { Section } from "@/types/section"

export function useMobileCarousel(sections: Section[]) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const { setScrollToSectionCallback, setActiveSection } = useMobileNav()

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            const index = emblaApi.selectedScrollSnap()
            const section = sections[index]
            if (section) {
                setActiveSection(section.id)
                // Optionally update URL hash manually
                window.history.replaceState(null, '', `#${section.id}`)
            }
        }

        emblaApi.on("select", onSelect)

        // Register the callback to allow external control
        setScrollToSectionCallback((sectionId) => {
            const index = sections.findIndex((s) => s.id === sectionId)
            if (index !== -1) {
                emblaApi.scrollTo(index)
            }
        })

        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi, sections, setActiveSection, setScrollToSectionCallback])

    return { emblaRef, emblaApi }
}
