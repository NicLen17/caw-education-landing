"use client"

import { Hero } from "@/components/hero"
import { ProblemStatement } from "@/components/problem-statement"
import { FeaturesGrid } from "@/components/features-grid"
import { ModulesShowcase } from "@/components/modules-showcase"
import { DataAnalytics } from "@/components/data-analytics"
import { SolutionsByLevel } from "@/components/solutions-by-level"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { FAQ } from "@/components/faq"
import { DemoForm } from "@/components/demo-form"
import { Footer } from "@/components/footer"
import { TopNav } from "@/components/top-nav"
import { StructuredData } from "@/components/structured-data"

export default function LandingPage() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-background">
        <TopNav />
        <main>
          <Hero />
          <ProblemStatement />
          <FeaturesGrid />
          <ModulesShowcase />
          <DataAnalytics />
          <SolutionsByLevel />
          <TestimonialsCarousel />
          <FAQ />
          <DemoForm />
        </main>
        <Footer />
      </div>
    </>
  )
}
