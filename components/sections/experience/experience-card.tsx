import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <Card className="bg-card/40 backdrop-blur-md border-muted/40 transition-colors hover:bg-card/60">
      <CardContent className="p-4 sm:p-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-primary truncate pr-2">{t(experience.title)}</h3>
              <div className="flex items-center gap-2 text-base text-foreground/80 font-medium">
                <span>{experience.company}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0 md:justify-end">
              <Badge variant="secondary" className="h-7 px-3 text-sm font-normal">
                <Calendar className="mr-1 h-3.5 w-3.5" />
                {t(experience.period)}
              </Badge>
              <Badge variant="outline" className="h-7 px-3 text-sm font-normal text-muted-foreground border-muted">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                {t(experience.location)}
              </Badge>
            </div>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed">
            {t(experience.description)}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
