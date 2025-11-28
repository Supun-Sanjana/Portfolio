"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const roles = ["Full-Stack Web Developer", "Software Developer", "UI Designer"]

  const [displayText, setDisplayText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 50 : 100
    const target = isDeleting ? 0 : currentRole.length

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && charIndex === 0) {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsDeleting(false)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center justify-center text-center space-y-8 animate-fade-in relative">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/40 to-accent/20 rounded-full blur-3xl animate-float opacity-60 dark:opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-purple-500/30 to-accent/20 rounded-full blur-3xl animate-float-delayed opacity-50 dark:opacity-30" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-tr from-blue-400/20 to-accent/30 rounded-full blur-3xl animate-float-slow opacity-45 dark:opacity-25" />
      </div>

      {/* Greeting */}
      <div className="text-sm sm:text-base font-medium text-accent animate-fade-in-up animation-delay-1">
        👋 Hi, I'm Supun
      </div>

      {/* Main heading with typing animation */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-pulse">|</span>
        </h1>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up animation-delay-2">
        I craft clean, performant web applications with thoughtful UI design at their core. Passionate about building
        experiences that balance aesthetics with functionality.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fade-in-up animation-delay-3">
        <button
          onClick={() => scrollToSection("projects")}
          className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          View Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
        >
          Contact Me
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="pt-16 animate-bounce animation-delay-4">
        <svg className="w-6 h-6 text-muted-foreground mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
