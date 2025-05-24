import { SectionHeading } from "@/components/shared/section-heading"
import { ContactForm } from "@/components/sections/contact/contact-form"
import { SocialLinks } from "@/components/sections/contact/social-links"

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Get In Touch" description="Let's discuss your next project or just say hello" />

        <div className="mt-12 space-y-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
