"use client"

import { useEffect, useState } from "react"
import { useScrollspy } from "@/hooks/use-scrollspy"

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
          Supun
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414zm.464-4.536l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414zm-2.828 2.828l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 111.414-1.414zM3 11a1 1 0 100-2H2a1 1 0 000 2h1zm14 0a1 1 0 100-2h-1a1 1 0 000 2h1zm-9-8a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm6.556-2.464a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5.464 5.464a1 1 0 001.414-1.414L6.171 3.343A1 1 0 004.757 4.757l.707.707z"
                  clipRule="evenodd"
                />
              </svg>
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
