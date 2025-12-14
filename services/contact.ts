
export interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

export interface ContactResponse {
    ok: boolean
    error?: string
}

export async function sendContactForm(data: ContactFormData): Promise<ContactResponse> {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    const endpoint = `https://formspree.io/f/${formId}`

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            return { ok: true }
        } else {
            const errorData = await response.json()
            return { ok: false, error: errorData.error || "Failed to submit form" }
        }
    } catch (error) {
        console.error("Contact form service error:", error)
        return { ok: false, error: "Network error occurred" }
    }
}
