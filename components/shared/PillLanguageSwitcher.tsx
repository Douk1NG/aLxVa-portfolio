import LanguageToggleButton from './LanguageToggleButton'

const PillLanguageSwitcher = () => {
  return (
    <div className="glass inline-flex items-center rounded-full border border-border/35 p-1 shadow-lg relative h-11 gap-0.5">
      <LanguageToggleButton targetLanguage="en" />
      <LanguageToggleButton targetLanguage="es" />
    </div>
  )
}

export default PillLanguageSwitcher
