"use client"

import { Baby, Student, GraduationCap } from "@phosphor-icons/react"
import { SectionHeader } from "@/components/landing/section-header"
import { BezelCard } from "@/components/landing/bezel-card"

const levels = [
  {
    title: "Nivel inicial y primario",
    description:
      "Fortalecemos el vínculo familia-escuela. Cuaderno de comunicaciones digital y seguimiento diario para que los padres estén siempre informados.",
    icon: Baby,
  },
  {
    title: "Nivel secundario",
    description:
      "Fomentamos la autonomía. Los alumnos gestionan sus consultas y seguimiento, mientras los docentes optimizan libros de temas y calificaciones.",
    icon: Student,
  },
  {
    title: "Nivel superior y universitario",
    description:
      "Gestión académica avanzada. Control de regularidades, mesas de examen y cátedras adaptado a la vida universitaria.",
    icon: GraduationCap,
  },
]

export function SolutionsByLevel() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-muted/30 px-4 py-24 md:px-6 md:py-32">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Por nivel educativo"
          title="Una solución para cada etapa educativa"
          description="Herramientas específicas diseñadas para las necesidades de cada nivel."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {levels.map((level, index) => (
            <BezelCard key={level.title} delay={index * 0.08} innerClassName="flex flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.04]">
                <level.icon className="h-6 w-6 text-foreground/65" weight="light" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{level.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {level.description}
              </p>
            </BezelCard>
          ))}
        </div>
      </div>
    </section>
  )
}
