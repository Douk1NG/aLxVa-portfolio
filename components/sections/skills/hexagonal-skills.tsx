"use client"
import * as LucideIcons from "lucide-react"
import type { Skill, SkillCategory } from "@/types/skills"
import { LucideIcon } from "lucide-react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type GroupedSkills = Record<SkillCategory, Skill[]>

function groupSkills(skills: Skill[]): GroupedSkills {
  return skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || []
    acc[skill.category].push(skill)
    return acc
  }, {} as GroupedSkills)
}

function SkillLevelLegend() {
  return (
    <div className="grid grid-cols-2 md:flex items-center gap-6 mb-6 text-sm text-muted-foreground justify-center">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span>Expert</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <span>Advanced</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <span>Intermediate</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gray-500" />
        <span>Basic</span>
      </div>
    </div>
  )
}

function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = LucideIcons[skill.icon as keyof typeof LucideIcons] as LucideIcon
  return (
    <div
      key={skill.name}
      className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-full transition-colors"
    >
      <Icon className="text-primary" size={16} />
      <span className="text-sm text-muted-foreground">{skill.name}</span>
    </div>
  )
}

function SkillCard({
  category,
  skills,
  isExpanded,
  onToggle
}: {
  category: SkillCategory
  skills: Skill[]
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between group"
      >
        <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
          {category}
        </h3>
        {isExpanded ? (
          <ChevronUp className="text-muted-foreground group-hover:text-primary transition-colors" />
        ) : (
          <ChevronDown className="text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      )}
    </div>
  )
}

function HexagonalSkills({ skills }: { skills: Skill[] }) {
  const grouped = groupSkills(skills)
  const [expandedCategories, setExpandedCategories] = useState<SkillCategory[]>(
    Object.keys(grouped) as SkillCategory[]
  )

  const toggleCategory = (category: SkillCategory) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  // Split items into two columns
  const items = Object.entries(grouped) as [SkillCategory, Skill[]][]
  const midpoint = Math.ceil(items.length / 2)
  const leftColumn = items.slice(0, midpoint)
  const rightColumn = items.slice(midpoint)

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <SkillLevelLegend />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {leftColumn.map(([category, categorySkills]) => (
            <SkillCard
              key={category}
              category={category}
              skills={categorySkills}
              isExpanded={expandedCategories.includes(category)}
              onToggle={() => toggleCategory(category)}
            />
          ))}
        </div>
        <div className="space-y-6">
          {rightColumn.map(([category, categorySkills]) => (
            <SkillCard
              key={category}
              category={category}
              skills={categorySkills}
              isExpanded={expandedCategories.includes(category)}
              onToggle={() => toggleCategory(category)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HexagonalSkills
