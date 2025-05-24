import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Experience } from "@/types/experience"

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="border-gray-700 bg-white/5 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
            <p className="text-lg text-cyan-400">{experience.company}</p>
            <p className="mt-2 text-gray-300">{experience.description}</p>
          </div>
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {experience.period}
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              {experience.location}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
