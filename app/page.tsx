"use client"
import { LanguageProvider } from "@/components/providers/language-provider";
import { Sidebar } from "@/components/layout/sidebar"

import Main from "@/components/layout/main"

export default function Home() {
  return (
    <LanguageProvider>
      <Main />
      <Sidebar className="sidebar" />
    </LanguageProvider>
  )
}