import { Section } from "@/types/section"
import { motion } from "framer-motion"

export function Sections({ sections }: { sections: Section[] }) {
    return (
        <>
            {sections.map((section: Section) => (
                <motion.section
                    key={section.id}
                    id={section.id}
                    data-section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="container mx-auto space-y-32 min-h-screen flex flex-col snap-section"
                >
                    {section.component}
                </motion.section>
            ))}
        </>
    )
}
