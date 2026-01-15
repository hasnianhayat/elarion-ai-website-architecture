"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#00a3a3]/30 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-lg shadow-[#00a3a3]/5">
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-3xl font-black tracking-tight text-[#00a3a3] group-hover:scale-105 transition-transform">
            ELARION
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="/"
            className="text-base font-bold text-foreground/80 transition-all duration-300 hover:text-[#00a3a3] hover:scale-110 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a3a3] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/services"
            className="text-base font-bold text-foreground/80 transition-all duration-300 hover:text-[#00a3a3] hover:scale-110 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a3a3] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/case-studies"
            className="text-base font-bold text-foreground/80 transition-all duration-300 hover:text-[#00a3a3] hover:scale-110 relative group"
          >
            Case Studies
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a3a3] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/strategy"
            className="text-base font-bold text-foreground/80 transition-all duration-300 hover:text-[#00a3a3] hover:scale-110 relative group"
          >
            Strategy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a3a3] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/proof"
            className="text-base font-bold text-foreground/80 transition-all duration-300 hover:text-[#00a3a3] hover:scale-110 relative group"
          >
            Proof
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a3a3] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/about"
            className="text-base font-bold text-foreground/80 transition-all duration-300 hover:text-[#00a3a3] hover:scale-110 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a3a3] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="text-base font-bold text-foreground/80 transition-all duration-300 hover:text-[#00a3a3] hover:scale-110 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a3a3] transition-all duration-300 group-hover:w-full" />
          </Link>
          <ThemeToggle />
          <Button
            asChild
            className="bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 font-bold shadow-lg shadow-[#00a3a3]/30 hover:shadow-xl hover:shadow-[#00a3a3]/50 transition-all duration-300 hover:scale-105"
          >
            <Link href="/ai-agents">AI Agents</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="container md:hidden pb-4 space-y-3">
          <Link
            href="/"
            className="block text-base font-bold text-foreground/80 hover:text-[#00a3a3] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block text-base font-bold text-foreground/80 hover:text-[#00a3a3] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="block text-base font-bold text-foreground/80 hover:text-[#00a3a3] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/strategy"
            className="block text-base font-bold text-foreground/80 hover:text-[#00a3a3] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Strategy
          </Link>
          <Link
            href="/proof"
            className="block text-base font-bold text-foreground/80 hover:text-[#00a3a3] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Proof
          </Link>
          <Link
            href="/about"
            className="block text-base font-bold text-foreground/80 hover:text-[#00a3a3] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-base font-bold text-foreground/80 hover:text-[#00a3a3] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex items-center gap-2 py-2">
            <span className="text-sm font-bold text-foreground/80">Theme:</span>
            <ThemeToggle />
          </div>
          <Button asChild className="w-full bg-[#00a3a3] text-white font-bold">
            <Link href="/ai-agents" onClick={() => setMobileMenuOpen(false)}>
              AI Agents
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
