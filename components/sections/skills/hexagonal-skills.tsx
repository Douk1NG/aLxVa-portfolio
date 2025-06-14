"use client"
import * as LucideIcons from "lucide-react"
import type { Skill } from "@/types/skills"
import { LucideIcon } from "lucide-react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// Group skills by group property
type GroupedSkills = Record<string, Skill[]>

function groupSkills(skills: Skill[]): GroupedSkills {
  return skills.reduce((acc, skill) => {
    acc[skill.group] = acc[skill.group] || []
    acc[skill.group].push(skill)
    return acc
  }, {} as GroupedSkills)
}

function groupBySubcategory(skills: Skill[]) {
  return skills.reduce((acc, skill) => {
    if (skill.subcategory) {
      acc[skill.subcategory] = acc[skill.subcategory] || []
      acc[skill.subcategory].push(skill)
    }
    return acc
  }, {} as Record<string, Skill[]>)
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

function SkillBadge({ skill, showLevel }: { skill: Skill; showLevel: boolean }) {
  const Icon = LucideIcons[skill.icon as keyof typeof LucideIcons] as LucideIcon
  return (
    <div
      key={skill.name}
      className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-full transition-colors relative"
    >
      <Icon className="text-primary" size={16} />
      <span className="text-sm text-muted-foreground">{skill.name}</span>
      {showLevel && (
        <div className={`absolute -right-1 -top-1 w-2 h-2 rounded-full
          ${skill.level === 'expert' ? 'bg-green-500' :
            skill.level === 'advanced' ? 'bg-blue-500' :
            skill.level === 'intermediate' ? 'bg-yellow-500' : 'bg-gray-500'}`}
        />
      )}
    </div>
  )
}

function FrontendSkills({ skills }: { skills: Skill[] }) {
  const subcategorized = groupBySubcategory(skills)
  return (
    <div className="space-y-4">
      {Object.entries(subcategorized).map(([subcategory, subcategorySkills]) => (
        <div key={subcategory}>
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">{subcategory}</h4>
          <div className="flex flex-wrap gap-2">
            {subcategorySkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} showLevel={true} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function RegularSkills({ skills, showLevel }: { skills: Skill[]; showLevel: boolean }) {
  return (
    <div className="flex flex-wrap gap-2 h-full items-start">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} skill={skill} showLevel={showLevel} />
      ))}
    </div>
  )
}

function SkillCard({
  group,
  skills,
  isExpanded,
  onToggle
}: {
  group: string
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
          {group}
        </h3>
        {isExpanded ? (
          <ChevronUp className="text-muted-foreground group-hover:text-primary transition-colors" />
        ) : (
          <ChevronDown className="text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4">
          {group === "Frontend Development" ? (
            <FrontendSkills skills={skills} />
          ) : (
            <RegularSkills
              skills={skills}
              showLevel={group !== "Soft Skills"}
            />
          )}
        </div>
      )}
    </div>
  )
}

function HexagonalSkills({ skills }: { skills: Skill[] }) {
  const grouped = groupSkills(skills)
  // Initialize with all groups expanded
  const [expandedGroups, setExpandedGroups] = useState<string[]>(
    Object.keys(grouped)
  )

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev =>
      prev.includes(group)
        ? prev.filter(g => g !== group)
        : [...prev, group]
    )
  }

  // Split items into two columns
  const items = Object.entries(grouped)
  const midpoint = Math.ceil(items.length / 2)
  const leftColumn = items.slice(0, midpoint)
  const rightColumn = items.slice(midpoint)

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <SkillLevelLegend />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {leftColumn.map(([group, groupSkills]) => (
            <SkillCard
              key={group}
              group={group}
              skills={groupSkills}
              isExpanded={expandedGroups.includes(group)}
              onToggle={() => toggleGroup(group)}
            />
          ))}
        </div>
        <div className="space-y-6">
          {rightColumn.map(([group, groupSkills]) => (
            <SkillCard
              key={group}
              group={group}
              skills={groupSkills}
              isExpanded={expandedGroups.includes(group)}
              onToggle={() => toggleGroup(group)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HexagonalSkills
