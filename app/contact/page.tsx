"use client"

import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, MessageSquare, ArrowRight, Phone, MapPin, Clock, Sparkles, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "general",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", service: "general", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 border-b border-[#00a3a3]/20 py-16 md:py-24">
          <AnimatedBackground />
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00a3a3] bg-[#00a3a3]/10 px-6 py-3 mb-8 animate-slide-in-up">
                <Sparkles className="h-5 w-5 text-[#00a3a3]" />
                <span className="text-sm font-bold text-[#00a3a3]">Let's Connect</span>
              </div>
              <h1
                className="text-4xl font-black tracking-tight sm:text-5xl mb-6 animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Let's <span className="text-[#00a3a3]">Talk</span>
              </h1>
              <p
                className="text-xl text-muted-foreground text-balance leading-relaxed animate-slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Ready to explore AI automation, custom AI development, or modern web platforms for your organization?
                Let's discuss your challenges and discover solutions together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            Get in <span className="text-[#00a3a3]">Touch</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-4 max-w-5xl mx-auto mb-16">
            <Card className="text-center border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-6 w-6 text-[#00a3a3]" />
                </div>
                <p className="font-semibold text-sm mb-2">Email</p>
                <p className="text-xs text-muted-foreground">hello@elarion.ai</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                  <Phone className="h-6 w-6 text-[#00a3a3]" />
                </div>
                <p className="font-semibold text-sm mb-2">Phone</p>
                <p className="text-xs text-muted-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                  <Clock className="h-6 w-6 text-[#00a3a3]" />
                </div>
                <p className="font-semibold text-sm mb-2">Response Time</p>
                <p className="text-xs text-muted-foreground">Within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-[#00a3a3]" />
                </div>
                <p className="font-semibold text-sm mb-2">Available</p>
                <p className="text-xs text-muted-foreground">Globally</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Contact Form Section */}
        <section className="border-y border-[#00a3a3]/20 bg-accent/30 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Info Section */}
              <div>
                <div className="mb-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/10">
                    <MessageSquare className="h-6 w-6 text-[#00a3a3]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Start a Conversation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you have a specific project in mind or want to explore what's possible, we're happy to
                    discuss your needs without obligation. Share your challenges and let's discover the right solutions
                    together.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-lg hover:shadow-[#00a3a3]/20 transition-all duration-300 group bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#00a3a3] group-hover:scale-110 transition-transform" />
                        What We'll Discuss
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-3">
                          <ArrowRight className="h-4 w-4 text-[#00a3a3] flex-shrink-0" />
                          Your current challenges and business goals
                        </li>
                        <li className="flex items-center gap-3">
                          <ArrowRight className="h-4 w-4 text-[#00a3a3] flex-shrink-0" />
                          Potential AI and automation opportunities
                        </li>
                        <li className="flex items-center gap-3">
                          <ArrowRight className="h-4 w-4 text-[#00a3a3] flex-shrink-0" />
                          Technical approach and feasibility
                        </li>
                        <li className="flex items-center gap-3">
                          <ArrowRight className="h-4 w-4 text-[#00a3a3] flex-shrink-0" />
                          Timeline, resources, and next steps
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-lg hover:shadow-[#00a3a3]/20 transition-all duration-300 group bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#00a3a3] group-hover:scale-110 transition-transform" />
                        Perfect For
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground leading-relaxed">
                      CTOs, engineering leaders, operations executives, founders, and product teams exploring AI
                      automation, custom AI development, and modern web platform solutions.
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-2xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-[#00a3a3]/10 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 transition-all">
                      <Mail className="h-5 w-5 text-[#00a3a3]" />
                    </div>
                    <CardTitle>Send us a Message</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#00a3a3]/10">
                        <CheckCircle className="h-8 w-8 text-[#00a3a3] animate-bounce" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground text-sm">
                        Thanks for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                          className="mt-2 border-2 border-border hover:border-[#00a3a3]/50 focus:border-[#00a3a3] transition-colors"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@company.com"
                          required
                          className="mt-2 border-2 border-border hover:border-[#00a3a3]/50 focus:border-[#00a3a3] transition-colors"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-sm font-semibold">
                          Company
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your company name"
                          className="mt-2 border-2 border-border hover:border-[#00a3a3]/50 focus:border-[#00a3a3] transition-colors"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-sm font-semibold">
                          I'm interested in
                        </Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="mt-2 w-full rounded-md border-2 border-border bg-background px-4 py-2 text-sm hover:border-[#00a3a3]/50 focus:border-[#00a3a3] focus:outline-none transition-colors"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="automation">AI Automation Agents</option>
                          <option value="ai">AI & Data Science</option>
                          <option value="web">Web Development</option>
                          <option value="consultation">Strategic Consultation</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-sm font-semibold">
                          Tell us about your project
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Describe your challenges, goals, and what you're looking to build..."
                          rows={5}
                          required
                          className="mt-2 border-2 border-border hover:border-[#00a3a3]/50 focus:border-[#00a3a3] transition-colors resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 shadow-lg hover:shadow-xl hover:shadow-[#00a3a3]/40 transition-all duration-500 text-base py-6 font-bold"
                      >
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Schedule a Meeting Section */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Or Schedule a <span className="text-[#00a3a3]">Meeting</span>
              </h2>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                Prefer to book a call directly? Use Calendly to schedule a meeting with our team at your convenience.
              </p>
            </div>

            {/* Calendly Embed - Replace with your Calendly URL */}
            <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-2xl hover:shadow-[#00a3a3]/20 transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="pt-8 pb-8">
                <div className="text-center py-20 bg-gradient-to-br from-[#00a3a3]/5 to-transparent rounded-lg border-2 border-dashed border-[#00a3a3]/20">
                  <Clock className="h-12 w-12 text-[#00a3a3]/40 mx-auto mb-4" />
                  <p className="text-muted-foreground mb-6">Calendly scheduling widget will be displayed here</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    To integrate Calendly, replace the placeholder with your Calendly embed code
                  </p>
                  <Button
                    asChild
                    className="bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 shadow-lg hover:shadow-xl hover:shadow-[#00a3a3]/40 transition-all duration-500"
                  >
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Set Up Calendly
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 grid gap-6 md:grid-cols-3 text-center">
              <div>
                <p className="font-semibold text-[#00a3a3] mb-2">Quick Response</p>
                <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
              </div>
              <div>
                <p className="font-semibold text-[#00a3a3] mb-2">No Obligations</p>
                <p className="text-sm text-muted-foreground">Free initial consultation</p>
              </div>
              <div>
                <p className="font-semibold text-[#00a3a3] mb-2">Expert Team</p>
                <p className="text-sm text-muted-foreground">Talk to our specialists</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
