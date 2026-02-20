"use client"

import { SectionHeading } from "@/components/shared/section-heading"
import { Briefcase, Code } from "lucide-react"
import { useJourney } from "../../../hooks/useJourney"
import { ExperienceCard } from "./experience-card"
import { ProjectCard } from "./project-card"

export function JourneySection() {
    const { t, experiences, projects } = useJourney();

    return (
        <div className="flex flex-col gap-8 p-4 max-w-7xl mx-auto w-full">
            <SectionHeading
                title={t('journey.title')}
                subtitle={t('journey.subtitle')}
            />

            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12">
                {/* Experience Section */}
                <div className="mb-12">
                    <div className="absolute -left-2.25 mt-1.5 h-4 w-4 rounded-full bg-primary" />
                    <h3 className="text-xl font-bold mb-6 ml-6 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {t('experience.title')}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-6">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </div>
                </div>

                {/* Projects Section */}
                <div>
                    <div className="absolute -left-2.25 mt-1.5 h-4 w-4 rounded-full bg-primary" />
                    <h3 className="text-xl font-bold mb-6 ml-6 flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        {t('projects.title')}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
