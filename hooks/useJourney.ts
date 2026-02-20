import { experienceData } from "@/data/experience-data"
import { projectsData } from "@/data/projects-data"
import { useLanguageContext } from "@/hooks/useLanguage"
import { skillsData } from "@/data/skills-data"
import { SkillItem } from "@/types/skills"
import { Experience } from "@/types/experience"
import { Project } from "@/types/project"

export type JourneyHook = {
    t: (key: string) => string;
    experiences: Experience[];
    projects: Project[];
    getSkillData: (skillName: string) => SkillItem;
}

export const useJourney = (): JourneyHook => {
    const { t } = useLanguageContext();

    const getSkillData = (skillName: string): SkillItem => {
        const allSkills = skillsData.flatMap(group => group.skills);
        const foundSkill = allSkills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
        return foundSkill || { name: skillName, category: 'tools' };
    };

    return {
        t,
        experiences: experienceData,
        projects: projectsData,
        getSkillData
    };
};
