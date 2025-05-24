import { Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Alex Chen. Built with <Code2 className="inline h-4 w-4 text-purple-400" /> and
          passion.
        </p>
      </div>
    </footer>
  )
}
