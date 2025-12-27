"use client"

import { useState, useEffect } from "react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("experience")
      if (element) {
        const rect = element.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.75)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiences = [
    {
      type: "MBA Dissertation",
      title: "Social Media Advertising Impact Study",
      company: "Maruti Suzuki",
      location: "Bangalore",
      description:
        "Studied the impact of social media advertising on consumer purchase decisions in the automobile sector with comprehensive market research and strategic recommendations.",
      duration: "2024",
      tags: ["Marketing", "Consumer Behavior", "Digital Advertising"],
    },
    {
      type: "Organizational Study",
      title: "Mobile Banking Adoption Analysis",
      company: "Banking Sector",
      location: "Bangalore",
      description:
        "Studied customer attitudes towards mobile banking, analyzed survey data, and identified strategic measures to improve adoption of digital banking services.",
      duration: "2024",
      tags: ["Banking", "Customer Research", "Digital Transformation"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* CHANGE: New section header */}
        <div className="mb-12">
          <span className="inline-block text-sm font-semibold text-primary mb-4">EXPERIENCE</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">Notable Projects</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative p-8 md:p-10 bg-background border border-border rounded-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* CHANGE: Accent line on left instead of top */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-3">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <span className="text-primary font-bold whitespace-nowrap">{exp.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-foreground/60">
                  <span className="font-medium">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                <p className="text-foreground/70 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
