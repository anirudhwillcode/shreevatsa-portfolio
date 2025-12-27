"use client"

import { useState, useEffect } from "react"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("education")
      if (element) {
        const rect = element.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.75)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const education = [
    {
      degree: "Master of Business Administration",
      specialization: "Finance & Marketing",
      school: "Bangalore Integrated Management Academy",
      university: "Bangalore University",
      year: "2023 - 2025",
      gpa: "7.31 CGPA",
    },
    {
      degree: "Bachelor of Commerce",
      school: "Sri Anupama Degree College",
      university: "Bangalore University",
      year: "2020 - 2023",
      gpa: "8.55 CGPA",
    },
    {
      degree: "12th Std / II PUC",
      school: "Sri Anupama Composite PU College",
      university: "Karnataka Board",
      year: "2019 - 2020",
      gpa: "8.71 CGPA",
    },
  ]

  return (
    <section id="education" className="py-20 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* CHANGE: Minimal section header */}
        <div className="mb-12">
          <span className="inline-block text-sm font-semibold text-primary mb-4">EDUCATION</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">Academic Foundation</h2>
        </div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group p-6 md:p-8 bg-background border border-border rounded-lg hover:border-primary/40 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
              }}
            >
              {/* CHANGE: Horizontal layout for education items */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  {edu.specialization && (
                    <p className="text-sm font-semibold text-primary mb-3">{edu.specialization}</p>
                  )}
                  <div className="text-sm text-foreground/60 space-y-1">
                    <p>{edu.school}</p>
                    <p>{edu.university}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{edu.gpa}</p>
                  <p className="text-sm text-foreground/60">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
