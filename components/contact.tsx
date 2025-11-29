"use client"

import { GithubIcon, Linkedin, LinkedinIcon, Mail } from "lucide-react"
import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission - integrate with your email service
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="max-w-3xl mx-auto w-full animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Contact Me</h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Let's connect! I'm open to freelance opportunities, collaborations, and interesting projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="animate-fade-in-up animation-delay-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50"
              disabled={isSubmitted}
            >
              {isSubmitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8 animate-fade-in-up animation-delay-2">
          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Email</h3>
            <a
              href="mailto:infor.ssupun@gmail.com"
              className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
            >
              infor.ssupun@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/supun-sanjana"
                className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:text-accent transition-all group"
                aria-label="GitHub"
              >
                
                <GithubIcon/>
              </a>
              <a
                href="#"
                className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:text-accent transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin/>
              </a>
              <a
                href="mailto:infor.ssupun@gmail.com"
                className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:text-accent transition-all group"
                aria-label="Email"
              >
                <Mail/>
              </a>
            </div>
          </div>

          {/* Resume/CV */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Resume</h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
