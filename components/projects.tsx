"use client"

import { useState } from "react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  image?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxesphere",
    description:
      "Web-based supermarket POS system with AI-assisted inventory suggestions and real-time sales tracking.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://luxesphere.vercel.app/",
    githubUrl: "https://github.com/Supun-Sanjana/Hotel-management-Frontend.git",
    image: "/lux.png",
  },
  {
    id: 2,
    title: "Client Sync",
    description:
      "Comprehensive student and instructor management dashboard for Android and web platforms with analytics.",
    tech: ["React", "Express", "MySQL", "Node js", "Tailwind CSS"],
    liveUrl: "https://client-sync-sig.vercel.app/",
    githubUrl: "https://github.com/Supun-Sanjana/ClientSync-Frontend.git",
    image: "/crm.png",
  },
  {
    id: 3,
    title: "Zenleaf",
    description:
      "Library management tool focused on children's reading habits with progress tracking and recommendations.",
    tech: ["PHP", "Tailwind CSS", "MySQL"],
    liveUrl: "https://zenleaf.nvtibaddegama.site/",
    githubUrl: "https://github.com/Supun-Sanjana/Zenleaf.git",
    image: "/zenleaf.png",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Real-time collaborative task management application with team workspaces and activity tracking.",
    tech: ["React","Tailwind CSS", "TypeScript", "Vercel v0" ],
    liveUrl: "https://sanjana-supun.vercel.app/",
    githubUrl: "https://github.com/Supun-Sanjana/Portfolio.git",
    image: "/port.png",
  },
  
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({})

  return (
    <div className="max-w-6xl mx-auto w-full animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Projects</h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Selected work and experiments showcasing my full-stack capabilities and design sensibility.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
            <div
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-accent/50"
            >
              {project.image && (
                <div className="relative w-full bg-muted overflow-hidden" style={{ aspectRatio: "400 / 250" }}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      imageLoaded[project.id] ? "opacity-100 scale-100" : "opacity-0 scale-110"
                    }`}
                    onLoadingComplete={() => setImageLoaded((prev) => ({ ...prev, [project.id]: true }))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
                </div>
              )}

              {/* Project Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-6 border-t border-border mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-semibold text-center hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex-1 px-4 py-2 border border-accent text-accent rounded-lg text-sm font-semibold text-center hover:bg-accent/10 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
