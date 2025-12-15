import { Section } from "@/types/section"

export default function Main({ sections }: { sections: Section[] }) {
    return (
        <main className="flex-1 overflow-auto">
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
        </main>
    )
}