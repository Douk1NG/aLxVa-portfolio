"use client"
import { Sections } from "@/components/layout/main/sections"
import { MainSkeleton } from "@/components/layout/main/skeleton"
import { sections } from "@/config/sections"
import { useMounted } from "@/hooks/useMounted"

export default function Main() {
    const mounted = useMounted()

    if (!mounted) {
        return <MainSkeleton className='flex-1 snap-container' />
    }

    return (
        <main className='flex-1 snap-container'>
            <Sections sections={sections} />
        </main>
    )
}