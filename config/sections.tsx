import { HeroSection } from "@/components/sections/hero/hero-section"
import { JourneySection } from "@/components/sections/journey/journey-section"
import { Section } from "@/types/section"
import { MapIcon, UserIcon } from "lucide-react"

export const sections: Section[] = [
  {
    id: 'about',
    label: 'About',
    icon: <UserIcon />,
    component: <HeroSection />
  },
  {
    id: 'journey',
    label: 'Journey',
    icon: <MapIcon />,
    component: <JourneySection />
  },
];
