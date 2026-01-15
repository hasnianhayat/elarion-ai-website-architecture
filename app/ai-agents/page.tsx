"use client"

import { AIHeader } from "@/components/ai-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Bot,
  Workflow,
  Zap,
  Network,
  MessageSquare,
  Database,
  LineChart,
  ShoppingCart,
  FileText,
  Calendar,
  Shield,
  Check,
  Sparkles,
  Rocket,
  Building2,
  CheckCircle2,
  PlayCircle,
  Mail,
  TrendingUp,
  AlertCircle,
} from "lucide-react"

export default function AIAgentsPage() {
  return (
    <>
      <AIHeader />
      <main className="flex-1">
        {/* ===== SECTION 1: HERO ===== */}
        <section className="ai-gradient-hero py-24 md:py-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 animate-bounce">
                <Bot className="h-4 w-4 mr-2" />
                Elarion AI Division
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-balance mb-6 animate-fade-in">
                Autonomous AI Agents That Work Like Real Teams
              </h1>
              <p className="text-xl text-white/90 text-balance leading-relaxed mb-8 animate-fade-in-delay">
                Intelligent agents that operate 24/7, make decisions autonomously, and execute complex workflows without
                human intervention. Built for enterprise reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: WHAT ARE AI AGENTS ===== */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-cyan-950/10">
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient-divider mb-8"></div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
                Beyond Chatbots: True Autonomous Intelligence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI agents don't just answer questions—they take action, make decisions, and orchestrate complex
                workflows across your entire operation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Bot,
                  name: "Autonomous",
                  purpose: "Operate independently, making decisions based on context and goals",
                  color: "from-cyan-500 to-teal-600",
                },
                {
                  icon: Workflow,
                  name: "Action-Oriented",
                  purpose: "Execute tasks, trigger workflows, and integrate with your systems",
                  color: "from-cyan-600 to-blue-600",
                },
                {
                  icon: Network,
                  name: "Collaborative",
                  purpose: "Work in multi-agent teams, each specialized for specific tasks",
                  color: "from-teal-500 to-cyan-600",
                },
                {
                  icon: Zap,
                  name: "Continuous",
                  purpose: "Run 24/7, learning and improving from every interaction",
                  color: "from-cyan-500 to-indigo-600",
                },
              ].map((card, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/30 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 bg-gradient-to-br from-card to-cyan-950/20 group hover:scale-105 transform"
                >
                  <CardContent className="pt-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <card.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-primary text-lg">{card.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.purpose}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: AGENT TYPES ===== */}
        <section className="ai-gradient-section py-16 md:py-24">
          <div className="h-1 bg-gradient-to-r from-primary via-cyan-400 to-primary animate-gradient-divider mb-8"></div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
                <span className="inline-block animate-text-wave">Specialized</span> Agent Types for{" "}
                <span className="inline-block animate-text-wave" style={{ animationDelay: "0.3s" }}>
                  Every
                </span>{" "}
                Business Function
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pre-trained, domain-specific agents ready to integrate into your operations. Each type is specialized
                for specific tasks and industries.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {[
                {
                  icon: MessageSquare,
                  name: "Customer Support Agents",
                  purpose: "Handle inquiries, resolve issues, escalate complex cases",
                  capabilities: [
                    "Multi-channel support",
                    "Ticket classification",
                    "Knowledge base retrieval",
                    "Sentiment analysis",
                  ],
                  color: "from-cyan-500 to-teal-600",
                },
                {
                  icon: ShoppingCart,
                  name: "Sales Agents",
                  purpose: "Qualify leads, schedule demos, guide prospects through sales funnels",
                  capabilities: [
                    "Lead qualification",
                    "Meeting scheduling",
                    "Product recommendations",
                    "CRM integration",
                  ],
                  color: "from-cyan-600 to-blue-600",
                },
                {
                  icon: Database,
                  name: "Data Processing Agents",
                  purpose: "Extract, transform, and load data across systems autonomously",
                  capabilities: [
                    "Data extraction",
                    "Validation & checks",
                    "Schema transformation",
                    "Automated reporting",
                  ],
                  color: "from-teal-500 to-cyan-600",
                },
                {
                  icon: LineChart,
                  name: "Analytics Agents",
                  purpose: "Monitor KPIs, generate insights, trigger actions based on patterns",
                  capabilities: ["Real-time monitoring", "Trend analysis", "Automated reporting", "Alert generation"],
                  color: "from-cyan-500 to-indigo-600",
                },
              ].map((agent, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-primary/5 group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${agent.color} shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <agent.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-primary">{agent.name}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-sm mt-2">{agent.purpose}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                        <Zap className="h-4 w-4" />
                        Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {agent.capabilities.map((cap, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: HOW IT WORKS / APPROACH ===== */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-950/10 to-background">
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient-divider mb-8"></div>

          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
              Our 4-Phase Implementation
            </h2>
            <div className="mx-auto max-w-4xl space-y-8">
              {[
                {
                  number: "01",
                  title: "Discovery & Mapping",
                  description: "We analyze your workflows to identify automation opportunities",
                  details: [
                    "Process documentation",
                    "Stakeholder interviews",
                    "System audit",
                    "Use case prioritization",
                  ],
                  icon: FileText,
                  color: "from-cyan-500 to-teal-600",
                },
                {
                  number: "02",
                  title: "Agent Design",
                  description: "Custom agent architecture tailored to your specific needs",
                  details: ["Agent type selection", "Workflow design", "Integration planning", "Metrics definition"],
                  icon: Bot,
                  color: "from-teal-500 to-cyan-600",
                },
                {
                  number: "03",
                  title: "Safe Deployment",
                  description: "Gradual rollout with human oversight and safety guardrails",
                  details: ["Sandbox testing", "Pilot deployment", "Human controls", "Performance monitoring"],
                  icon: Shield,
                  color: "from-cyan-600 to-blue-600",
                },
                {
                  number: "04",
                  title: "Continuous Optimization",
                  description: "Ongoing refinement based on real-world performance data",
                  details: ["Weekly reviews", "Behavior tuning", "New capabilities", "ROI tracking"],
                  icon: Zap,
                  color: "from-teal-600 to-cyan-700",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-r from-card to-primary/5"
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                      <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: PRICING / PACKAGES ===== */}
        <section className="ai-gradient-section py-16 md:py-24">
          <div className="h-1 bg-gradient-to-r from-primary via-cyan-300 to-primary animate-gradient-divider mb-8"></div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
                Agent Packages Built for Every Scale
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From startup MVPs to enterprise-grade autonomous systems. Choose a package that fits your needs today
                and scales with you.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
              {[
                {
                  name: "Starter",
                  icon: Sparkles,
                  description: "Perfect for small teams testing agent automation",
                  price: "Starting at",
                  priceAmount: "$2,500",
                  period: "/month",
                  features: [
                    "1 specialized agent type",
                    "Up to 5,000 interactions/month",
                    "Email & chat support",
                    "Standard integrations (5)",
                    "Monthly reports",
                  ],
                  highlight: false,
                },
                {
                  name: "Professional",
                  icon: Rocket,
                  description: "Full-featured agent systems for growing companies",
                  price: "Starting at",
                  priceAmount: "$8,500",
                  period: "/month",
                  features: [
                    "Up to 3 agent types",
                    "Up to 25,000 interactions/month",
                    "Priority 24/7 support",
                    "Advanced integrations (15+)",
                    "Multi-agent collaboration",
                    "Weekly reports",
                    "A/B testing",
                  ],
                  highlight: true,
                },
                {
                  name: "Enterprise",
                  icon: Building2,
                  description: "Mission-critical agent infrastructure",
                  price: "Custom",
                  priceAmount: "Pricing",
                  period: "",
                  features: [
                    "Unlimited agent types",
                    "Unlimited interactions",
                    "Dedicated support team",
                    "Custom integrations",
                    "Full orchestration",
                    "Real-time analytics",
                    "On-premise deployment",
                  ],
                  highlight: false,
                },
              ].map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative transition-all ${
                    pkg.highlight
                      ? "border-2 border-primary shadow-xl shadow-primary/20 lg:scale-105"
                      : "border-2 border-primary/20 hover:border-primary/40"
                  } bg-gradient-to-br from-card to-primary/5`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground shadow-lg px-4 py-1">Most Popular</Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div
                      className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${
                        pkg.highlight ? "bg-primary shadow-lg shadow-primary/30" : "bg-primary/20"
                      }`}
                    >
                      <pkg.icon className={`h-8 w-8 ${pkg.highlight ? "text-white" : "text-primary"}`} />
                    </div>
                    <CardTitle className="text-2xl text-primary">{pkg.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mt-2">{pkg.description}</CardDescription>
                    <div className="mt-6">
                      <p className="text-sm text-muted-foreground">{pkg.price}</p>
                      <p className="text-3xl font-bold text-foreground">
                        {pkg.priceAmount}
                        {pkg.period}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className={`w-full ${
                        pkg.highlight
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                          : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                      }`}
                      size="lg"
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: DEMO SECTION ===== */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-950/10 to-background">
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient-divider mb-8"></div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">Try Agents in Action</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience how AI agents work with interactive demos, recorded walkthroughs, or a personalized
                demonstration with our team.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  icon: MessageSquare,
                  title: "Interactive Agent Demo",
                  description: "Chat with a live customer support agent in a sandbox environment",
                  duration: "15 minutes",
                  features: ["Real-time responses", "Knowledge base integration", "Escalation handling"],
                },
                {
                  icon: PlayCircle,
                  title: "Pre-Recorded Walkthrough",
                  description: "Watch agents handle real-world scenarios across different industries",
                  duration: "20 minutes",
                  features: ["Sales qualification demo", "Data processing workflow", "Multi-agent collaboration"],
                },
                {
                  icon: Calendar,
                  title: "Custom Live Demo",
                  description: "Schedule a personalized demo with your data and use cases",
                  duration: "45-60 minutes",
                  features: ["Your specific workflows", "Live Q&A with engineers", "Architecture consultation"],
                },
              ].map((option, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-primary/5"
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 mb-4">
                      <option.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{option.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {option.duration}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: LET'S TALK ABOUT BUSINESS ===== */}
        <section className="ai-gradient-section py-16 md:py-24">
          <div className="h-1 bg-gradient-to-r from-primary via-cyan-400 to-primary animate-gradient-divider mb-8"></div>

          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">Let's Talk About Business</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Ready to transform your operations with autonomous AI agents? Book a consultation or let's discuss
                  your specific needs.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Left: Consultation Form */}
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
                  <CardHeader>
                    <CardTitle className="text-primary">Schedule a Consultation</CardTitle>
                    <CardDescription>Let's discuss your automation goals in detail</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-primary">
                          First Name
                        </Label>
                        <Input id="firstName" placeholder="John" className="border-primary/30" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-primary">
                          Last Name
                        </Label>
                        <Input id="lastName" placeholder="Doe" className="border-primary/30" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary">
                        Work Email
                      </Label>
                      <Input id="email" type="email" placeholder="john@company.com" className="border-primary/30" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-primary">
                        Company
                      </Label>
                      <Input id="company" placeholder="Acme Inc" className="border-primary/30" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="useCase" className="text-primary">
                        What workflows do you want to automate?
                      </Label>
                      <Textarea
                        id="useCase"
                        placeholder="Describe your processes and goals..."
                        rows={3}
                        className="border-primary/30"
                      />
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                      Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Right: Calendly Embed */}
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-primary">Book a Demo Meeting</CardTitle>
                    <CardDescription>Select a time that works for you</CardDescription>
                  </CardHeader>
                  <CardContent className="h-96 bg-card/50">
                    <div className="h-full flex items-center justify-center text-center p-6">
                      <div>
                        <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">Calendly scheduling widget integrated here</p>
                        <p className="text-xs text-muted-foreground">
                          Connect your Calendly account in production for live scheduling
                        </p>
                        <Button className="mt-4 bg-primary/20 text-primary border border-primary/30">
                          View Calendar →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: NEWSLETTER / STAY AHEAD ===== */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-cyan-950/10">
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient-divider mb-8"></div>

          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
                Stay Ahead of the AI Revolution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Subscribe to our newsletter for exclusive case studies, industry insights, and practical automation
                strategies that our founders and leading companies use to stay competitive.
              </p>

              <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input type="email" placeholder="your@email.com" className="flex-1 border-primary/30" />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam. Just actionable insights delivered to your inbox every week.
                </p>
              </Card>

              <div className="grid gap-6 md:grid-cols-3 mt-12">
                <Card className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardContent className="pt-6 text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-primary mb-2">Case Studies</h3>
                    <p className="text-sm text-muted-foreground">Real results from companies that automated with us</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardContent className="pt-6 text-center">
                    <AlertCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-primary mb-2">Insights</h3>
                    <p className="text-sm text-muted-foreground">Industry trends and practical automation tactics</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardContent className="pt-6 text-center">
                    <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-primary mb-2">Resources</h3>
                    <p className="text-sm text-muted-foreground">
                      Guides, templates, and implementation best practices
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
