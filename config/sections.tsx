import { HeroSection } from "@/components/sections/hero/hero-section"
import { SkillsSection } from "@/components/sections/skills/skills-section"
import { ExperienceSection } from "@/components/sections/experience/experience-section"
import { ProjectsSection } from "@/components/sections/projects/projects-section"
import { ContactSection } from "@/components/sections/contact/contact-section"
import { Section } from "@/types/section"
import { BrainIcon, BriefcaseIcon, CodeIcon, MailIcon, UserIcon } from "lucide-react"

export const sections: Section[] = [
  {
    id: 'about',
    label: 'About',
    icon: <UserIcon />,
    component: <HeroSection />
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: <BrainIcon />,
    component: <SkillsSection />
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <CodeIcon />,
    component: <ProjectsSection />
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: <BriefcaseIcon />,
    component: <ExperienceSection />
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: <MailIcon />,
    component: <ContactSection />
  },
];