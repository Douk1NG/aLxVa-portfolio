"use client"
import { LanguageProvider } from "@/components/providers/language-provider";
import { MobileNavProvider } from "@/components/providers/mobile-nav-context";
import { Sidebar } from "@/components/layout/sidebar"

import Main from "@/components/layout/main"

export default function Home() {
  return (
    <LanguageProvider>
      <MobileNavProvider>
        <Main />
        <Sidebar />
      </MobileNavProvider>
    </LanguageProvider>
  )
}