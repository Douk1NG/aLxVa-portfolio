"use client"
import { SectionHeading } from "@/components/shared/section-heading"
import { experienceData } from "@/data/experience-data"
import { projectsData } from "@/data/projects-data"
import { useLanguageContext } from "@/hooks/useLanguage"
import { Briefcase, Building2, Calendar, MapPin, Github, ExternalLink, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { SkillTag } from "@/components/sections/skills/components/skill-tag"
import { skillsData } from "@/data/skills-data"
import { SkillItem } from "@/types/skills"

// Helper to find skill icon/data
const getSkillData = (skillName: string): SkillItem => {
    const allSkills = skillsData.flatMap(group => group.skills);
    const foundSkill = allSkills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
    return foundSkill || { name: skillName, category: 'tools' }; // Fallback
}

export function JourneySection() {
    const { t } = useLanguageContext();

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
                        {experienceData.map((exp, index) => (
                            <Card key={index} className="bg-card/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                                <CardHeader className="pb-2">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg font-bold text-primary">
                                                {t(exp.title)}
                                            </CardTitle>
                                            <Badge variant="outline" className="w-fit flex items-center gap-1 shrink-0">
                                                <Calendar className="h-3 w-3" />
                                                {t(exp.period)}
                                                <span className="text-muted-foreground mx-1">|</span>
                                                <span className="text-muted-foreground">{t(exp.duration)}</span>
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Building2 className="h-4 w-4 shrink-0" />
                                            <span className="truncate">{exp.company}</span>
                                            <span className="text-xs">•</span>
                                            <MapPin className="h-4 w-4 shrink-0" />
                                            <span className="truncate">{t(exp.location)}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {t(exp.description)}
                                    </p>
                                    {exp.skills && (
                                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                                            {exp.skills.map((skillName) => (
                                                <SkillTag key={skillName} skill={getSkillData(skillName)} />
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
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
                        {projectsData.map((project, index) => (
                            <Card key={index} className="bg-card/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                                <CardHeader className="pb-2">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg font-bold text-primary">
                                                {t(project.title)}
                                            </CardTitle>
                                            <div className="flex gap-2">
                                                {project.github && (
                                                    <Button variant="outline" size="sm" asChild className="h-8 gap-2">
                                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                            <Github className="h-4 w-4" />
                                                            <span>Code</span>
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.demo && (
                                                    <Button variant="outline" size="sm" asChild className="h-8 gap-2">
                                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-4 w-4" />
                                                            <span>Demo</span>
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {t(project.description)}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                                        {project.tech.map((tech) => (
                                            <SkillTag key={tech} skill={getSkillData(tech)} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
