"use client"

import { Calendar, Building2, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SkillTag } from "@/components/sections/skills/skill-tag"
import { Experience } from "@/types/experience"
import { useJourney } from "@/hooks/useJourney"

type ExperienceCardProps = {
    experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    const { t, getSkillData } = useJourney();

    return (
        <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
            <CardHeader className="pb-2">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-between items-start gap-2">
                        <CardTitle className="text-lg font-bold text-primary truncate w-full">
                            {t(experience.title)}
                        </CardTitle>
                        <Badge variant="outline" className="w-fit flex gap-1 shrink-0 mt-2 md:mt-0">
                            <span className="flex gap-1">
                                <Calendar className="h-3 w-3" />
                                {t(experience.period)}
                            </span>
                            <span className="text-muted-foreground mx-1 hidden md:block">|</span>
                            <span className="hidden md:block text-muted-foreground ">{t(experience.duration)}</span>
                        </Badge>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 text-sm text-muted-foreground">
                        <span className="flex gap-2">
                            <Building2 className="h-4 w-4 shrink-0" />
                            <span className="truncate">{experience.company}</span>
                        </span>
                        <span className="md:block hidden">•</span>
                        <span className="flex gap-2">
                            <MapPin className="h-4 w-4 shrink-0" />
                            <span className="truncate">{t(experience.location)}</span>
                        </span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(experience.description)}
                </p>
                {experience.skills && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                        {experience.skills.map((skillName) => (
                            <SkillTag key={skillName} skill={getSkillData(skillName)} />
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
