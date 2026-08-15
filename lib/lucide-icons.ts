import {
  Brain,
  Code2,
  Download,
  Mail,
  MapPin,
  MessageSquare,
  Shuffle,
  Users,
  Webhook,
  type LucideIcon,
} from 'lucide-react'
import type { LucideIconName } from '@/types/lucide-icon'

export const LUCIDE_ICONS: Record<
  LucideIconName,
  LucideIcon
> = {
  brain: Brain,
  'code-2': Code2,
  download: Download,
  mail: Mail,
  'map-pin': MapPin,
  'message-square': MessageSquare,
  shuffle: Shuffle,
  users: Users,
  webhook: Webhook,
}
