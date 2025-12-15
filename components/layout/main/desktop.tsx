import { Section } from "@/types/section"

export function DesktopMain({ sections }: { sections: Section[] }) {
    return (
        <>
            {sections.map((section: Section) => (
                <section
                    key={section.id}
                    id={section.id}
                    data-section
                    className="container mx-auto p-8 space-y-32 min-h-screen"
                >
                    {section.component}
                </section>
            ))}
        </>
    )
}
