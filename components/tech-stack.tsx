"use client"

interface TechCategory {
  name: string
  icon: string
  technologies: string[]
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend Development",
    icon: "🎨",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    technologies: ["Node.js", "Express", "PHP", "RESTful APIs"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    technologies: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    name: "ORM & Validation",
    icon: "🔒",
    technologies: ["Prisma", "Zod", "TypeScript"],
  },
  {
    name: "Development Tools",
    icon: "🛠️",
    technologies: ["Git", "GitHub", "VS Code", "WebStorm", "Postman"],
  },
  {
    name: "Design Tools",
    icon: "✨",
    technologies: ["Figma", "Framer", "Adobe XD"],
  },
  {
    name: "Deployment Tools",
    icon: "🚀",
    technologies: ["Vercel", "Render", "Neon"],
  },
  {
    name: "Languages",
    icon: "💻",
    technologies: ["Java", "JavaScript", "C#"],
  },
]

export default function TechStack() {
  return (
    <div className="max-w-6xl mx-auto w-full animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Tech Stack</h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Tools and technologies I use to design and build performant products.
        </p>
      </div>

      {/* Tech Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <div key={category.name} className="animate-fade-in-up" style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
            <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/50 space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">{category.name}</h3>
              </div>

              {/* Tech Items */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-gradient-to-r from-accent/10 to-accent/5 text-accent rounded-lg text-xs sm:text-sm font-medium border border-accent/20 hover:border-accent/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
