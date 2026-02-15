import { SkillGroup } from "@/types/skills"

const VARIANT_STYLES = {
    feature: "md:col-span-2 md:row-span-1 bg-linear-to-br from-card to-card/50",
    wide: "md:col-span-2",
    vertical: "md:col-span-1 md:row-span-2",
    default: "md:col-span-1",
} as const;

export function useSkillGroup(group: SkillGroup) {
    const variant = group.variant || "default";
    const className = VARIANT_STYLES[variant as keyof typeof VARIANT_STYLES] || VARIANT_STYLES.default;
    const isVertical = variant === 'vertical';

    return {
        className,
        isVertical,
        variant
    };
}
