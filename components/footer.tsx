export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* CHANGE: Simplified footer with clean typography */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">Shreevatsa</h3>
            <p className="text-sm text-foreground/60">MBA Graduate • Finance & Marketing Specialist</p>
          </div>

          <div>
            <p className="font-bold text-foreground mb-3 text-sm uppercase">Quick Links</p>
            <div className="space-y-2 text-sm">
              <a href="#about" className="text-foreground/60 hover:text-primary transition-colors block">
                About
              </a>
              <a href="#experience" className="text-foreground/60 hover:text-primary transition-colors block">
                Experience
              </a>
              <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors block">
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold text-foreground mb-3 text-sm uppercase">Connect</p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:Shreevatsa978@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors block"
              >
                Email
              </a>
              <a href="tel:+919742907978" className="text-foreground/60 hover:text-primary transition-colors block">
                Phone
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-xs text-foreground/50">
            © {currentYear} Shreevatsa S Deshpande. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
