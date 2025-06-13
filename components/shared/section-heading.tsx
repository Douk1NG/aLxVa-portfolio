interface SectionHeadingProps {
  title: string
  description?: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
    </div>
  )
}
