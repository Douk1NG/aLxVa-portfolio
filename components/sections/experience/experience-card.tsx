import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Experience } from "@/types/experience"
import { useLanguageContext } from "@/hooks/useLanguage"

/**
 * Props for the ExperienceCard component
 */
export type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { t } = useLanguageContext();

  return (
    <Card className=" bg-card/20 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-primary">{t(experience.title)}</h3>
            <p className="text-lg text-accent font-medium">{experience.company}</p>
            <p className="mt-2 text-foreground">{t(experience.description)}</p>
          </div>
          <div className="space-y-2 text-sm text-foreground">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              {t(experience.period)}
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              {t(experience.location)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
