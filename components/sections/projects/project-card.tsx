"use client"

import { ExternalLink } from "lucide-react"
import { SiGithub as Github} from '@icons-pack/react-simple-icons';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types/project"
import { useLanguageContext } from "@/hooks/useLanguage"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguageContext();

  return (
    <Card className="border-gray-700 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              {t('projects.code')}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
              onClick={() => window.open(project.demo, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {t('projects.demo')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
