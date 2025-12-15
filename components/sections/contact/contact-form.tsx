"use client"

import { CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguageContext } from "@/hooks/useLanguage"
import { useContactForm } from "@/hooks/use-contact-form"

export function ContactForm() {
  const { t } = useLanguageContext()
  const { isSubmitting, isSuccess, submitForm } = useContactForm()

  if (isSuccess) {
    return (
      <Card className="bg-card/20 backdrop-blur-sm">
        <CardContent className="p-8 text-center flex flex-col items-center justify-center space-y-4 min-h-[400px]">
          <div className="rounded-full bg-primary/10 p-6">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">{t("contact.success.title")}</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t("contact.success.description")}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card/20 backdrop-blur-sm md:mx-92">
      <CardContent className="p-8">
        <form onSubmit={submitForm} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                {t('contact.name')}
              </Label>
              <Input
                id="name"
                name="name"
                placeholder={t('contact.name.placeholder')}
                required
                className=" bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                {t('contact.email')}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('contact.email.placeholder')}
                required
                className=" bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">
              {t('contact.subject')}
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder={t('contact.subject.placeholder')}
              required
              className=" bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              {t('contact.message')}
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t('contact.message.placeholder')}
              required
              className="min-h-[35vh] bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {isSubmitting ? t('contact.sending') : t('contact.send')}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
