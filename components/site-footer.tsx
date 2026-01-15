import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold tracking-tight mb-4">ELARION</h3>
            <p className="text-sm text-muted-foreground">AI, automation, and web solutions for the future.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services#ai-agents"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Agents & Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-data"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI & Data Science
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/strategy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Approach
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/ai-agents" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  Elarion AI
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Elarion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
