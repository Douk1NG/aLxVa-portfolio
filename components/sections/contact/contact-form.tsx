"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { useLanguageContext } from "@/hooks/useLanguage"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useLanguageContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: t('contact.success.title'),
      description: t('contact.success.description'),
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <Card className=" bg-card/20 backdrop-blur-sm">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                {t('contact.name')}
              </Label>
              <Input
                id="name"
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
              placeholder={t('contact.message.placeholder')}
              required
              className="min-h-32  bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
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
