"use client"

import { useEffect, useState } from "react"

export function useScrollspy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 200) {
          current = id
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds])

  return activeSection
}
