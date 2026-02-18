"use client"
import { SectionHeading } from "@/components/shared/section-heading"
import { ContactForm } from "@/components/sections/contact/contact-form"
import { useLanguageContext } from "@/hooks/useLanguage"
import { socialData } from "@/data/social-data"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/shared/Icon"

export function ContactSection() {
  const { t } = useLanguageContext();

  return (
    <div className="flex flex-col gap-8 p-4 max-w-5xl mx-auto w-full">
      <SectionHeading
        title={t('contact.title')}
        subtitle={t('contact.description')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Side */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg h-full">
            <CardContent className="p-6 flex flex-col justify-center h-full gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">{t('contact.getInTouch')}</h3> {/* Needs translation key or hardcode fallback? better add key */}
                <p className="text-muted-foreground">
                  {t('contact.infoText') || "Feel free to reach out for collaborations or just a friendly hello"}
                </p>
              </div>

              <div className="space-y-4">
                {socialData.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors">
                      <social.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">{social.name}</p>
                      <p className="text-xs text-muted-foreground">{social.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Side */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
