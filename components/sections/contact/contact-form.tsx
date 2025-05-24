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

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <Card className="border-gray-700 bg-white/5 backdrop-blur-sm">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                required
                className="border-gray-600 bg-white/10 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="border-gray-600 bg-white/10 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-gray-300">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              required
              className="border-gray-600 bg-white/10 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project..."
              required
              className="min-h-32 border-gray-600 bg-white/10 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
