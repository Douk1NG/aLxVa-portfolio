import { experienceData } from '@/data/experience-data'
import { Experience } from '@/types/experience'

export const useExperience = (): Experience[] => {
  return experienceData
}
