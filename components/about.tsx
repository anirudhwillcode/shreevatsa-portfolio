"use client"

import { useState, useEffect } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about")
      if (element) {
        const rect = element.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.75)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* CHANGE: Simplified heading layout */}
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="mb-12">
            <span className="inline-block text-sm font-semibold text-primary mb-4">ABOUT</span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Strategic thinker & data-driven analyst
            </h2>
          </div>

          {/* CHANGE: Two-column layout with refined typography */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground/70 leading-relaxed">
                MBA graduate with dual specialization in Finance and Marketing. I combine analytical rigor with
                strategic business insights to drive meaningful impact across financial planning, market analysis, and
                data intelligence.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I specialize in translating complex financial data into actionable business strategies. With expertise
                in advanced analytics tools and business intelligence platforms, I help organizations make informed
                decisions.
              </p>
            </div>

            {/* CHANGE: Simplified role cards with clean design */}
            <div className="space-y-4">
              <div className="group p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
                <h3 className="font-bold text-lg text-foreground mb-2">Financial Analysis</h3>
                <p className="text-sm text-foreground/60">
                  Investment strategies, budget planning, and corporate financial assessment
                </p>
              </div>

              <div className="group p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
                <h3 className="font-bold text-lg text-foreground mb-2">Market Intelligence</h3>
                <p className="text-sm text-foreground/60">
                  Consumer insights, market trends, and strategic business positioning
                </p>
              </div>

              <div className="group p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
                <h3 className="font-bold text-lg text-foreground mb-2">Business Analytics</h3>
                <p className="text-sm text-foreground/60">
                  Data-driven insights, BI tools, and strategic recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
