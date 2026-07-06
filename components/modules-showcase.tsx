"use client"

import {
  GraduationCap,
  UserCheck,
  CalendarBlank,
  Table,
  Bell,
  ChartLineUp,
} from "@phosphor-icons/react"
import { SectionHeader } from "@/components/landing/section-header"
import { BezelCard } from "@/components/landing/bezel-card"

const modules = [
  {
    icon: GraduationCap,
    title: "Gestión académica",
    description: "Simplifica el seguimiento de tus alumnos con herramientas intuitivas.",
    features: ["Carga rápida de notas", "Historial por alumno", "Seguimiento de progreso"],
  },
  {
    icon: UserCheck,
    title: "Asistencias",
    description: "Toma asistencia en segundos y automatiza los reportes.",
    features: ["Registro digital ágil", "Cálculo automático", "Alertas de inasistencia"],
  },
  {
    icon: CalendarBlank,
    title: "Calendario y eventos",
    description: "Mantén organizadas todas tus fechas importantes y exámenes.",
    features: ["Agenda de exámenes", "Eventos escolares", "Vista semanal y mensual"],
  },
  {
    icon: Table,
    title: "Planillas digitales",
    description: "Olvídate del papel: todas tus planillas en un solo lugar.",
    features: ["Formatos estandarizados", "Exportación fácil", "Siempre accesibles"],
  },
  {
    icon: Bell,
    title: "Comunicaciones",
    description: "Conecta con familias y estudiantes de forma directa y profesional.",
    features: ["Cuaderno digital", "Avisos importantes", "Sin grupos de WhatsApp"],
  },
  {
    icon: ChartLineUp,
    title: "Análisis y reportes",
    description: "Visualiza métricas clave para decisiones institucionales informadas.",
    features: ["Paneles interactivos", "Exportación de datos", "Indicadores en tiempo real"],
  },
]

export function ModulesShowcase() {
  return (
    <section id="modules" className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Módulos"
          title="Herramientas diseñadas para cada necesidad"
          description="Explora las herramientas que transformarán la gestión de tu institución educativa."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <BezelCard key={module.title} delay={index * 0.05} innerClassName="flex flex-col">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.04]">
                  <module.icon className="h-6 w-6 text-foreground/65" weight="light" />
                </div>
                <span className="rounded-full bg-foreground/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Módulo {index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{module.title}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {module.description}
              </p>
              <ul className="space-y-2 border-t border-border/60 pt-4">
                {module.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                    {feature}
                  </li>
                ))}
              </ul>
            </BezelCard>
          ))}
        </div>
      </div>
    </section>
  )
}
