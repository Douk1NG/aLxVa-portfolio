import type { SkillGroup } from "@/types/skills"

export const skillsData: SkillGroup[] = [
  // {
  // // {
  // //   name: "DevOps & Cloud",
  // //   skills: [
  // // CI/CD, DOCKER, AWS, CLOUDFLARE, VPS, LINUX
  // //   ]
  // // },
  // {
  {
    name: "Tech Skills",
    subcategories: [
      {
        name: "Frontend Development",
        skills: [
          { name: "React", icon: "SquareCode", category: "frontend" },
          { name: "Next.js", icon: "Triangle", category: "frontend" },
          {
            name: "Tailwind", icon: "Wind", category: "frontend"
          },
          {
            name: "CSS3", icon: "Paintbrush", category: "frontend"
          },
          { name: "Zod", icon: "Shield", category: "frontend" },
        ]
      },
      {
        name: "Tools & Workflow",
        skills: [
          { name: "Git", icon: "GitBranch", category: "tools" },
        ]
      },
      {
        name: "Testing & Quality",
        skills: [
          { name: "Cypress", icon: "TestTube", category: "tools" },
        ]
      },
      {
        name: "Backend & Database",
        skills: [
          { name: "PostgreSQL", icon: "Database", category: "database" },
          { name: "REST APIs", icon: "Webhook", category: "backend" },
        ]
      },
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: "Brain", category: "tools" },
      { name: "Team Collaboration", icon: "Users", category: "tools" },
      { name: "Adaptability", icon: "Shuffle", category: "tools" },
      { name: "Communication", icon: "MessageSquare", category: "tools" },
    ]
  }
]

export const skillsName = skillsData.map((skill) => skill.name)
