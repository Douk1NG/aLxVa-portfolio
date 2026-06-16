'use client'
import { LanguageProvider } from '@/components/providers/language-provider'

import Main from '@/components/main'

export default function Home() {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  )
}
