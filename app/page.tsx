"use client"
import { useState, useEffect } from "react"
import { Taskbar } from "@/components/layout/taskbar"
import { Section } from "@/types/section"
import { sections } from "@/config/sections"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-900 flex">
      {/* Main Content Area */}
      <main className="flex-1 overflow-auto scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700/50 hover:scrollbar-thumb-slate-600/50">
        <div className="container mx-auto p-8 space-y-32">
          {sections.map((section: Section) => (
            <section
              key={section.id}
              id={section.id}
              className="min-h-screen flex items-center scroll-mt-8"
            >
              {section.component}
            </section>
          ))}
        </div>
      </main>

      {/* Taskbar Navigation */}
      <Taskbar
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </div>
  )
}