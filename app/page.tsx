"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark
    setIsDark(shouldBeDark)
    updateTheme(shouldBeDark)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    updateTheme(!isDark)
  }

  return (
    <div className="bg-background text-foreground">
      <Navigation onToggleDarkMode={toggleDarkMode} isDark={isDark} />
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>
        <section id="projects" className="min-h-screen py-20 px-4 bg-background">
          <Projects />
        </section>
        <section id="tech-stack" className="min-h-screen py-20 px-4 bg-background">
          <TechStack />
        </section>
        <section id="contact" className="min-h-screen py-20 px-4 bg-background">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
