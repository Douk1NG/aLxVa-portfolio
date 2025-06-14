import { useFloatingTriangles } from "@/hooks/useFloatingTriangles"
import { Triangle } from "@/types/triangle"

export default function FloatingTriangles() {
  const triangles = useFloatingTriangles()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {triangles.map((triangle: Triangle) => (
        <div
          key={triangle.id}
          className="absolute"
          style={{
            left: `${triangle.x}%`,
            top: `${triangle.y}%`,
            transform: `rotate(${triangle.rotation}deg)`,
            opacity: triangle.opacity,
          }}
        >
          <svg
            width={triangle.size}
            height={triangle.size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10L90 80H10L50 10Z"
              className="stroke-primary"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}