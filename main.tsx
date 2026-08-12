import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionProvider } from '@/components/providers/motion-provider'
import { LanguageProvider } from '@/components/providers/language-provider'
import Main from '@/components/main'
import './app/globals.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <MotionProvider>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </MotionProvider>
  </StrictMode>,
)
