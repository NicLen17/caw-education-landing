"use client"

import {
  WarningCircle,
  Clock,
  UsersThree,
  FileText,
  CheckCircle,
  Lightning,
  TreeStructure,
  ChartLineUp,
} from "@phosphor-icons/react"
import { SectionHeader } from "@/components/landing/section-header"
import { BezelCard } from "@/components/landing/bezel-card"

const problems = [
  {
    icon: FileText,
    title: "Planillas dispersas",
    description: "Información académica fragmentada en múltiples sistemas y archivos.",
  },
  {
    icon: Clock,
    title: "Procesos manuales",
    description: "Horas perdidas en tareas administrativas repetitivas y propensas a errores.",
  },
  {
    icon: UsersThree,
    title: "Comunicación desconectada",
    description: "Dificultad para coordinar entre docentes, administrativos y directivos.",
  },
  {
    icon: WarningCircle,
    title: "Falta de visibilidad",
    description: "Sin datos centralizados para tomar decisiones informadas.",
  },
]

const solutions = [
  {
    icon: CheckCircle,
    title: "Sistema centralizado",
    description: "Toda la información académica en una única plataforma accesible.",
  },
  {
    icon: Lightning,
    title: "Automatización inteligente",
    description: "Procesos automatizados que ahorran tiempo y eliminan errores.",
  },
  {
    icon: TreeStructure,
    title: "Comunicación fluida",
    description: "Conexión instantánea entre todos los actores del ecosistema educativo.",
  },
  {
    icon: ChartLineUp,
    title: "Datos en tiempo real",
    description: "Reportes y métricas actualizadas para decisiones informadas.",
  },
]

export function ProblemStatement() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Transformación"
          title="De los desafíos tradicionales a soluciones modernas"
          description="Transformamos los problemas cotidianos en oportunidades de eficiencia."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground">Desafíos actuales</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Lo que enfrentan las instituciones hoy
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <BezelCard key={problem.title} delay={index * 0.06}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.04]">
                    <problem.icon className="h-5 w-5 text-foreground/60" weight="light" />
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground">{problem.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {problem.description}
                  </p>
                </BezelCard>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground">Nuestras soluciones</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Cómo CAW Education resuelve cada desafío
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {solutions.map((solution, index) => (
                <BezelCard key={solution.title} delay={0.2 + index * 0.06}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.04]">
                    <solution.icon className="h-5 w-5 text-foreground/60" weight="light" />
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground">{solution.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                </BezelCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
