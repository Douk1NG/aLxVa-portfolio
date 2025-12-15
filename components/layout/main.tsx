"use client"
import { useMediaQuery } from "@/hooks/use-media-query"
import { MobileMain } from "@/components/layout/main/mobile"
import { DesktopMain } from "@/components/layout/main/desktop"
import { MainSkeleton } from "@/components/layout/main/skeleton"
import { useEffect, useState } from "react"
import { sections } from "@/config/sections"

export default function Main() {
    const isMobile = useMediaQuery("(max-width: 768px)")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <MainSkeleton />
    }

    return (
        <main className="flex-1 overflow-hidden h-screen md:h-auto md:overflow-auto">
            {isMobile ? <MobileMain sections={sections} /> : <DesktopMain sections={sections} />}
        </main>
    )
}