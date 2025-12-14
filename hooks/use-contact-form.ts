
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useLanguageContext } from "@/hooks/useLanguage"
import { sendContactForm, type ContactFormData } from "@/services/contact"

export function useContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const { toast } = useToast()
    const { t } = useLanguageContext()

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const formData = new FormData(form)

        // Basic validation / Type casting
        const data: ContactFormData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            subject: formData.get("subject") as string,
            message: formData.get("message") as string,
        }

        try {
            const result = await sendContactForm(data)

            if (result.ok) {
                toast({
                    title: t("contact.success.title"),
                    description: t("contact.success.description"),
                })
                setIsSuccess(true)
                form.reset()
            } else {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: result.error || t("contact.error.description") || "Something went wrong.",
                })
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: t("contact.error.description") || "Failed to send message.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        isSubmitting,
        isSuccess,
        submitForm,
    }
}
