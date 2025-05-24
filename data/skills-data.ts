import type { Skill } from "@/types/skills"

export const skillsData: Skill[] = [
  // Web/Frontend
  { name: "React", level: "expert", icon: "SquareCode" },
  { name: "Next.js", level: "expert", icon: "Triangle" },
  { name: "TypeScript", level: "advanced", icon: "FileType" },
  { name: "JavaScript", level: "expert", icon: "FileJson" },
  { name: "HTML", level: "expert", icon: "FileText" },
  { name: "CSS", level: "expert", icon: "Paintbrush" },
  { name: "Tailwind", level: "advanced", icon: "Wind" },
  { name: "Redux", level: "intermediate", icon: "Repeat" },

  // Backend
  { name: "Node.js", level: "advanced", icon: "Server" },
  { name: "Express", level: "advanced", icon: "ServerCog" },
  { name: "Python", level: "intermediate", icon: "FileCode" },
  { name: "PostgreSQL", level: "advanced", icon: "Database" },
  { name: "MongoDB", level: "intermediate", icon: "Layers" },
  { name: "GraphQL", level: "intermediate", icon: "Network" },
  { name: "REST", level: "expert", icon: "Webhook" },

  // DevOps
  { name: "AWS", level: "intermediate", icon: "Cloud" },
  { name: "Docker", level: "intermediate", icon: "Box" },
  { name: "CI/CD", level: "intermediate", icon: "GitMerge" },
  { name: "Vercel", level: "advanced", icon: "Triangle" },
  { name: "Netlify", level: "intermediate", icon: "Globe" },

  // Tools
  { name: "Git", level: "expert", icon: "GitBranch" },
  { name: "GitHub", level: "advanced", icon: "Github" },
  { name: "VS Code", level: "expert", icon: "Code" },
  { name: "Figma", level: "intermediate", icon: "Figma" },
  { name: "Agile", level: "advanced", icon: "ListTodo" },
  { name: "Jira", level: "intermediate", icon: "LayoutDashboard" },
]
