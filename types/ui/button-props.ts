import { type VariantProps } from "class-variance-authority"
import { type ButtonHTMLAttributes } from "react"
import { type buttonVariants } from "@/components/ui/button"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }