"use client"
import { Taskbar } from "@/components/layout/taskbar"
import { sections } from "@/config/sections"

import Main from "@/components/layout/main"
import Header from "@/components/layout/header"

export default function Home() {
  return (
    <>
      <Header
        sections={sections}
      />
      <Main
        sections={sections}
      />
      <Taskbar
        sections={sections}
      />
    </>
  )
}