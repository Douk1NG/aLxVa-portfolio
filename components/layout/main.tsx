"use client"
import { useMediaQuery } from "@/hooks/use-media-query"
import { MobileMain } from "@/components/layout/main/mobile"
import { DesktopMain } from "@/components/layout/main/desktop"
import { MainSkeleton } from "@/components/layout/main/skeleton"
import { sections } from "@/config/sections"
import { useMounted } from "@/hooks/useMounted"

export default function Main() {
    const isMobile = useMediaQuery("(max-width: 768px)")
    const mounted = useMounted()

    const containerClasses = mounted
        ? `flex-1 ${!isMobile ? 'snap-container' : 'overflow-hidden h-screen md:h-auto md:overflow-auto'}`
        : 'flex-1 snap-container'; // Match server snapshot (isMobile=false)

    if (!mounted) {
        return <MainSkeleton className={containerClasses} />
    }

    return (
        <main className={containerClasses}>
            {isMobile ? <MobileMain sections={sections} /> : <DesktopMain sections={sections} />}
        </main>
    )
}