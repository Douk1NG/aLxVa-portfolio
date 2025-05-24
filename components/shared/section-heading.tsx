interface SectionHeadingProps {
  title: string
  description?: string
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-gray-400">{description}</p>}
    </div>
  )
}
