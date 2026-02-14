
import type { SkillGroup } from "@/types/skills"

export const skillsData: SkillGroup[] = [
  {
    name: "Frontend Development",
    variant: "feature",
    icon: "LayoutTemplate",
    skills: [
      { name: "React", icon: "SquareCode", category: "frontend" },
      { name: "Next.js", icon: "Triangle", category: "frontend" },
      { name: "Tailwind", icon: "Wind", category: "frontend" },
      { name: "CSS3", icon: "Paintbrush", category: "frontend" },
      { name: "Zod", icon: "Shield", category: "frontend" },
      { name: "TypeScript", icon: "Shield", category: "frontend" },
      { name: "JavaScript", icon: "Shield", category: "frontend" },
      { name: "HTML5", icon: "Shield", category: "frontend" },
      { name: "Zustand", icon: "Stamp", category: "frontend" },
    ]
  },
  {
    name: "Tools & Workflow",
    variant: "default",
    icon: "Wrench",
    skills: [
      { name: "Git", icon: "GitBranch", category: "tools" },
    ]
  },
  {
    name: "Backend & Database",
    variant: "vertical",
    icon: "Server",
    skills: [
      { name: "PostgreSQL", icon: "Database", category: "database" },
      { name: "REST APIs", icon: "Webhook", category: "backend" },
    ]
  },
  {
    name: "Soft Skills",
    variant: "wide",
    icon: "Users",
    skills: [
      { name: "Problem Solving", icon: "Brain", category: "tools" },
      { name: "Team Collaboration", icon: "Users", category: "tools" },
      { name: "Adaptability", icon: "Shuffle", category: "tools" },
      { name: "Communication", icon: "MessageSquare", category: "tools" },
    ]
  },
  {
    name: "Testing & Quality",
    variant: "default",
    icon: "ShieldCheck",
    skills: [
      { name: "Cypress", icon: "TestTube", category: "tools" },
    ]
  },
]

export const skillsName = skillsData.map((skill) => skill.name)
