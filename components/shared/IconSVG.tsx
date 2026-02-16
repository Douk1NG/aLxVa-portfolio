import type { SvgIcon } from "@/types/svgIcons";
import { getAssetPath } from "@/lib/utils";
import Image from "next/image";

export default function IconSVG({ name }: { name: SvgIcon }) {
    return (
        <Image
            src={getAssetPath(`${name}.svg`)}
            alt={`${name} icon`}
            width={24}
            height={24}
            className="size-4"
        />
    );
}