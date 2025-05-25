import { SectionHeading } from "@/components/shared/section-heading"
import { ContactForm } from "@/components/sections/contact/contact-form"
import { SocialLinks } from "@/components/sections/contact/social-links"
import { useLanguageContext } from "@/hooks/useLanguage"

export function ContactSection() {
  const { t } = useLanguageContext();

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title={t('contact.title')}
          description={t('contact.description')}
        />

        <div className="mt-12 space-y-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>
    </>
  )
}
