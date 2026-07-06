"use client"

import { Quotes, User } from "@phosphor-icons/react"
import { SectionHeader } from "@/components/landing/section-header"
import { BezelCard } from "@/components/landing/bezel-card"

const testimonials = [
  {
    quote: "Es la primera vez que una herramienta se adapta a cómo evaluamos en la universidad.",
    author: "Docente universitario",
    role: "Usuario verificado",
    institution: "Nivel superior",
  },
  {
    quote: "Me ahorra horas de pasar notas a planillas de papel.",
    author: "Docente de secundaria",
    role: "Usuario verificado",
    institution: "Nivel medio",
  },
  {
    quote: "Una forma práctica de mantener a los padres informados sin grupos de chat.",
    author: "Directora de nivel inicial",
    role: "Usuario verificado",
    institution: "Jardín de infantes",
  },
]

export function TestimonialsCarousel() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Testimonios"
          title="Lo que dicen nuestros usuarios"
          description="Testimonios reales de educadores que transformaron su trabajo con CAW Education."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <BezelCard key={testimonial.author} delay={index * 0.08} innerClassName="flex flex-col">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.04]">
                <Quotes className="h-5 w-5 text-foreground/60" weight="light" />
              </div>
              <p className="mb-6 flex-1 text-base leading-relaxed text-foreground text-pretty">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/[0.04]">
                  <User className="h-5 w-5 text-foreground/50" weight="light" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} · {testimonial.institution}
                  </p>
                </div>
              </div>
            </BezelCard>
          ))}
        </div>
      </div>
    </section>
  )
}
