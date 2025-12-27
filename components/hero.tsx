"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 px-6 relative overflow-hidden">
      {/* CHANGE: Minimal subtle background elements */}
      <div className="absolute top-40 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30 animate-float-slow"></div>
      <div
        className="absolute bottom-32 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-20 animate-float-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="space-y-8 animate-slide-up">
          {/* CHANGE: Bold, large typography with refined styling */}
          <div>
            <h2 className="text-lg font-semibold text-primary mb-4">Hi, I'm</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight leading-none mb-6">
              Shreevatsa
              <br />
              <span className="text-primary">S Deshpande</span>
            </h1>
          </div>

          {/* CHANGE: Refined descriptor with accent color */}
          <div className="space-y-4 max-w-2xl">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              MBA Finance & Marketing | Business Analyst
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Strategic thinker with expertise in financial planning, market analysis, and data-driven insights.
              Specializing in digital transformation and business intelligence.
            </p>
          </div>

          {/* CHANGE: Updated CTA buttons with modern styling */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </a>
            <a
              href="#experience"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              Explore Work
            </a>
          </div>

          {/* CHANGE: Smooth scroll indicator */}
          <div className="flex justify-center pt-16 animate-pulse-soft">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
