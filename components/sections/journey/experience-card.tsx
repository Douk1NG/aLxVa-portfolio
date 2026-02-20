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
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-bold text-primary">
                            {t(experience.title)}
                        </CardTitle>
                        <Badge variant="outline" className="w-fit flex items-center gap-1 shrink-0">
                            <Calendar className="h-3 w-3" />
                            {t(experience.period)}
                            <span className="text-muted-foreground mx-1">|</span>
                            <span className="text-muted-foreground">{t(experience.duration)}</span>
                        </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4 shrink-0" />
                        <span className="truncate">{experience.company}</span>
                        <span className="text-xs">•</span>
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span className="truncate">{t(experience.location)}</span>
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
