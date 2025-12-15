"use client"

import { Section } from "@/types/section"
import { useMobileCarousel } from "@/hooks/use-mobile-carousel"

export function MobileMain({ sections }: { sections: Section[] }) {
    const { emblaRef } = useMobileCarousel(sections)

    return (
        <div className="md:hidden h-full pt-20" ref={emblaRef}>
            <div className="flex h-full touch-pan-y">
                {sections.map((section) => (
                    <div key={section.id} className="flex-[0_0_100%] min-w-0 relative h-full overflow-y-auto">
                        <section
                            // Remove ID and data-section to avoid duplicate IDs and Observer conflicts
                            className="container mx-auto p-4 min-h-full pb-24"
                        >
                            {section.component}
                        </section>
                    </div>
                ))}
            </div>
        </div>
    )
}
