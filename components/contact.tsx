"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* CHANGE: Centered minimal header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4">GET IN TOUCH</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Let's discuss your <br /> next opportunity
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Interested in collaborating or want to learn more? I'm always open to new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CHANGE: Contact info cards with clean design */}
          <div className="space-y-4">
            <a
              href="tel:+919742907978"
              className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300"
            >
              <p className="text-sm text-foreground/60 font-semibold mb-1">PHONE</p>
              <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                +91-9742907978
              </p>
            </a>

            <a
              href="mailto:Shreevatsa978@gmail.com"
              className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300"
            >
              <p className="text-sm text-foreground/60 font-semibold mb-1">EMAIL</p>
              <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors break-all">
                Shreevatsa978@gmail.com
              </p>
            </a>

            <div className="p-6 bg-card border border-border rounded-lg">
              <p className="text-sm text-foreground/60 font-semibold mb-1">LOCATION</p>
              <p className="text-lg font-bold text-foreground">Bangalore, India</p>
            </div>
          </div>

          {/* CHANGE: Refined contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-medium"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-medium"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-5 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none font-medium"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
              disabled={!formData.name || !formData.email || !formData.message}
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
