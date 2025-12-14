import * as Icons from "lucide-react";
import type { LucideProps, LucideIcon } from "lucide-react";

export type LucideIconName = keyof typeof Icons;

export default function Icon({ icon, ...props }: LucideProps & { icon?: LucideIconName }) {
    if (!icon) return null;
    const Component = Icons[icon] as LucideIcon;
    return <Component {...props} />;
}
