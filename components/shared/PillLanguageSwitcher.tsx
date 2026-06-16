import LanguageToggleButton from './LanguageToggleButton'

const PillLanguageSwitcher = () => {
  return (
    <div className="glass inline-flex items-center rounded-full p-1 shadow-lg relative h-11 gap-2">
      <LanguageToggleButton targetLanguage="en" />
      <LanguageToggleButton targetLanguage="es" />
    </div>
  )
}

export default PillLanguageSwitcher
