"use client"
import { SkillGroup } from "@/types/skills"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/shared/Icon"
import { SkillTag } from "./components/skill-tag"
import { useLanguageContext } from "@/hooks/useLanguage"

export default function CompactSkills({ skills }: { skills: SkillGroup[] }) {
    const { t } = useLanguageContext();

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((group) => (
                    <Card key={group.name} className="h-full bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all border-primary/10">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Icon icon={group.icon} className="w-5 h-5" />
                                </div>
                                <CardTitle className="text-lg font-bold">
                                    {group.name} {/* TODO: Add translation support for group names if needed */}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <SkillTag key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
