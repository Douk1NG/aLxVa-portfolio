
import type { SkillGroup } from "@/types/skills"

export const skillsData: SkillGroup[] = [
  {
    name: "Frontend Development",
    variant: "feature",
    icon: "LayoutTemplate",
    skills: [
      { name: "React", svg: "react_light", category: "frontend" },
      { name: "Next.js", svg: "next", category: "frontend" },
      { name: "Tailwind", svg: "tailwindcss", category: "frontend" },
      { name: "CSS3", svg: "css_old", category: "frontend" },
      { name: "Zod", svg: "zod", category: "frontend" },
      { name: "TypeScript", svg: "typescript", category: "frontend" },
      { name: "JavaScript", svg: "javascript", category: "frontend" },
      { name: "HTML5", svg: "html5", category: "frontend" },
      { name: "Zustand", svg: "zustand", category: "frontend" },
    ]
  },
  {
    name: "Backend Development",
    variant: "feature",
    icon: "Server",
    skills: [
      { name: "PostgreSQL", svg: "postgresql", category: "database" },
      { name: "PHP", svg: "php", category: "backend" },
      { name: "REST APIs", icon: "Webhook", category: "backend" },
    ]
  },
  {
    name: "Testing & Workflow",
    variant: "wide",
    icon: "Wrench",
    skills: [
      { name: "Cypress", icon: "TestTube", category: "tools" },
      { name: "Git", svg: "git", category: "tools" },
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
  }
]

export const skillsName = skillsData.map((skill) => skill.name)
