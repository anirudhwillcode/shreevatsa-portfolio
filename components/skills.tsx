"use client"

import { useState, useEffect } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills")
      if (element) {
        const rect = element.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.75)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skillCategories = [
    {
      name: "Business",
      skills: [
        "MBA Finance",
        "MBA Marketing",
        "Strategic Thinking",
        "Financial Analysis",
        "Market Analysis",
        "Leadership",
      ],
    },
    {
      name: "Technical",
      skills: [
        "Advanced Excel",
        "Power BI",
        "Tally ERP-9",
        "Data Analysis",
        "Business Intelligence",
        "Risk Management",
      ],
    },
    {
      name: "Languages",
      skills: ["English", "Hindi", "Kannada"],
    },
    {
      name: "Certifications",
      skills: [
        "Business Analyst Certification",
        "Project Management",
        "Excel Training",
        "Power BI Certification",
        "Business Analytics",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* CHANGE: New section header style */}
        <div className="mb-12">
          <span className="inline-block text-sm font-semibold text-primary mb-4">EXPERTISE</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">Skills & Expertise</h2>
        </div>

        {/* CHANGE: Cleaner 2-column grid layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`group p-8 bg-card border border-border rounded-lg transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isVisible ? `${idx * 100}ms` : "0ms",
              }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
