"use client"

import { useEffect, useState } from "react"
import { useScrollspy } from "@/hooks/use-scrollspy"
import { Moon, Sun } from 'lucide-react';


export default function Navigation({ onToggleDarkMode, isDark }: { onToggleDarkMode: () => void; isDark: boolean }) {
  const [isSticky, setIsSticky] = useState(false)
  const activeSection = useScrollspy(["home", "projects", "tech-stack", "contact"])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? // Improved dark mode navbar contrast with darker background
            isDark
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-background/80 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent hover:from-accent hover:to-accent transition-all"
        >
          Supun.
        </button>

        <div className="hidden md:flex gap-1 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                activeSection === item.id ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={onToggleDarkMode}
            className="ml-4 p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun />
            ) : (
              <Moon />
            )}
          </button>
        </div>

        {/* Mobile menu button placeholder */}
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-muted transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
