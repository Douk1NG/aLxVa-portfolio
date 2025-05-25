import { Section } from "@/types/section"
import LanguageSwitcher from "@/components/shared/LanguageSwitcher"
export default function Main({sections}: {sections: Section[]}) {
    return (
        <main className="flex-1 overflow-auto">
        {sections.map((section: Section) => (
          <section
            key={section.id}
            id={section.id}
            data-section
            className="container mx-auto p-8 space-y-32 h-screen"
          >
            {section.component}
          </section>
        ))}
        <LanguageSwitcher />
      </main>
    )
}