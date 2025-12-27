"use client"

import { useState, useEffect } from "react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects")
      if (element) {
        const rect = element.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.75)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "Consumer Behavior Analysis",
      description:
        "In-depth analysis of how social media influences automotive purchase decisions with comprehensive data visualization and strategic recommendations.",
      company: "Maruti Suzuki",
      metrics: ["500+ Respondents", "12-Week Study", "Multi-channel Analysis"],
    },
    {
      title: "Digital Banking Adoption Study",
      description:
        "Comprehensive research on mobile banking adoption barriers and success factors with actionable improvement strategies for the banking sector.",
      company: "Banking Sector",
      metrics: ["300+ Interviews", "Trend Analysis", "Strategic Insights"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* CHANGE: Minimalist section header */}
        <div className="mb-12">
          <span className="inline-block text-sm font-semibold text-primary mb-4">PROJECTS</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">Research & Analysis</h2>
        </div>

        {/* CHANGE: Cleaner card layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-card border border-border rounded-lg transition-all duration-500 hover:border-primary/40 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm font-semibold text-primary">{project.company}</p>
                </div>

                <p className="text-foreground/70 leading-relaxed">{project.description}</p>

                <div className="space-y-3 pt-3">
                  <p className="text-xs font-bold uppercase text-foreground/50">Key Metrics</p>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
