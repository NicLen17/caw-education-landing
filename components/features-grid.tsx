"use client"

import {
  TreeStructure,
  CalendarBlank,
  ShieldCheck,
  Lightning,
  ChartBar,
  ChatCircle,
} from "@phosphor-icons/react"
import { SectionHeader } from "@/components/landing/section-header"
import { BezelCard } from "@/components/landing/bezel-card"

const features = [
  {
    icon: TreeStructure,
    title: "Conexión total",
    description:
      "Integración completa entre docentes, administrativos y directivos en tiempo real.",
  },
  {
    icon: CalendarBlank,
    title: "Calendarios sincronizados",
    description: "Eventos, asistencias y horarios unificados en una sola plataforma.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad garantizada",
    description: "Protección de datos con los más altos estándares de seguridad educativa.",
  },
  {
    icon: Lightning,
    title: "Automatización inteligente",
    description: "Reduce tareas manuales y optimiza procesos administrativos.",
  },
  {
    icon: ChartBar,
    title: "Reportes en tiempo real",
    description: "Dashboards y analíticas para decisiones basadas en datos.",
  },
  {
    icon: ChatCircle,
    title: "Comunicación fluida",
    description:
      "Canales integrados para mantener a toda la comunidad educativa conectada.",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="relative overflow-hidden bg-muted/40 px-4 py-24 md:px-6 md:py-32">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Plataforma integral"
          title="Una plataforma, infinitas posibilidades"
          description="CAW Education centraliza todas las herramientas que tu institución necesita para operar de manera eficiente."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <BezelCard key={feature.title} delay={index * 0.05}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.04]">
                <feature.icon className="h-6 w-6 text-foreground/65" weight="light" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </BezelCard>
          ))}
        </div>
      </div>
    </section>
  )
}
