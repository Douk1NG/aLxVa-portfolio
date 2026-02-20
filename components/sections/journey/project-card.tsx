"use client"

import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SkillTag } from "@/components/sections/skills/skill-tag"
import { Project } from "@/types/project"
import { useJourney } from "@/hooks/useJourney"
import IconSVG from "@/components/shared/IconSVG"

type ProjectCardProps = {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { t, getSkillData } = useJourney();

    return (
        <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
            <CardHeader className="pb-2">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start flex-col  gap-2">
                        <CardTitle className="text-lg font-bold text-primary">
                            {t(project.title)}
                        </CardTitle>
                        <div className="flex gap-2">
                            {project.github && (
                                <Button variant="outline" size="sm" asChild className="h-8 gap-2">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <IconSVG name="github_light" />
                                        <span>Code</span>
                                    </a>
                                </Button>
                            )}
                            {project.demo && (
                                <Button variant="default" size="sm" asChild className="h-8 gap-2">
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
    );
}
