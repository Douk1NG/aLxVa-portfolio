"use client"
import { LanguageProvider } from "@/components/providers/language-provider";
import { Sidebar } from "@/components/layout/sidebar"
import { Footer } from "@/components/layout/footer"
import { sections } from "@/config/sections"

import Main from "@/components/layout/main"

export default function Home() {
  return (
    <LanguageProvider>
      <Main
        sections={sections}
      />
      <Sidebar
        sections={sections}
      />
      <Footer />
    </LanguageProvider>
  )
}