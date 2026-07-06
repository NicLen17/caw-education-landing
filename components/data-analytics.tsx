"use client"

import { motion } from "framer-motion"
import {
  Pulse,
  Target,
  TrendUp,
  DownloadSimple,
  ChartBar,
  ChartPie,
} from "@phosphor-icons/react"
import { SectionHeader } from "@/components/landing/section-header"
import { BezelCard } from "@/components/landing/bezel-card"
import { bezelInner, bezelOuter, transitionSubtle } from "@/lib/landing-styles"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Pulse,
    title: "Patrones en tiempo real",
    description: "Detecta tendencias y comportamientos académicos al instante.",
  },
  {
    icon: Target,
    title: "Medición de efectividad",
    description: "Evalúa el rendimiento de cursos, docentes y programas.",
  },
  {
    icon: TrendUp,
    title: "Decisiones basadas en datos",
    description: "Optimiza la gestión educativa con información precisa.",
  },
  {
    icon: DownloadSimple,
    title: "Reportes personalizados",
    description: "Exporta métricas para informes institucionales y auditorías.",
  },
]

const metrics = [
  {
    icon: ChartBar,
    label: "Asistencia",
    value: "94.5%",
    bars: [65, 80, 75, 90, 85, 95, 88],
  },
  {
    icon: ChartPie,
    label: "Rendimiento",
    value: "87.2%",
    type: "ring" as const,
  },
  {
    icon: TrendUp,
    label: "Participación",
    value: "+23%",
    type: "line" as const,
  },
]

export function DataAnalytics() {
  return (
    <section className="relative overflow-hidden bg-foreground px-4 py-24 text-background md:px-6 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Análisis inteligente"
          title="Transforma datos en decisiones"
          description="CAW Education incorpora un potente módulo de análisis que convierte la información académica en conocimiento accionable mediante paneles interactivos y gráficos dinámicos."
          className="[&_h2]:text-background [&_p]:text-background/60 [&_span]:bg-background/10 [&_span]:text-background/70"
        />

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
              className={cn(bezelOuter, "bg-white/[0.04] ring-white/10")}
            >
              <div
                className={cn(
                  bezelInner,
                  "bg-white/[0.03] p-6 shadow-none",
                  transitionSubtle,
                  "hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)]",
                )}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background/10">
                  <feature.icon className="h-5 w-5 text-background/80" weight="light" />
                </div>
                <h3 className="mb-2 font-semibold text-background">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-background/60">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={cn(bezelOuter, "bg-white/[0.04] ring-white/10")}>
          <div className={cn(bezelInner, "bg-white/[0.03] p-6 shadow-none md:p-10")}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                  className={cn(
                    "rounded-[1.5rem] bg-background/[0.04] p-6 ring-1 ring-background/10",
                    transitionSubtle,
                    "hover:-translate-y-0.5",
                  )}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10">
                      <metric.icon className="h-5 w-5 text-background/80" weight="light" />
                    </div>
                    <div>
                      <p className="text-xs text-background/50">{metric.label}</p>
                      <p className="text-2xl font-bold text-background">{metric.value}</p>
                    </div>
                  </div>

                  <div className="flex h-28 items-end gap-1.5">
                    {metric.bars
                      ? metric.bars.map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.2 + i * 0.06,
                              ease: [0.32, 0.72, 0, 1],
                            }}
                            className="flex-1 rounded-t bg-background/25"
                            style={{ height: `${height}%`, transformOrigin: "bottom" }}
                          />
                        ))
                      : metric.type === "ring"
                        ? (
                            <div className="flex h-full w-full items-center justify-center">
                              <div className="h-20 w-20 rounded-full border-[6px] border-background/15 border-t-background/60" />
                            </div>
                          )
                        : (
                            <svg
                              className="h-full w-full"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              aria-hidden
                            >
                              <path
                                d="M 0 80 Q 25 60, 50 50 T 100 20"
                                fill="none"
                                stroke="rgba(255,255,255,0.45)"
                                strokeWidth="2"
                              />
                            </svg>
                          )}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm leading-relaxed text-background/60">
              CAW Education une la administración académica con el análisis inteligente,
              ofreciendo una visión completa para estudiantes, docentes, directivos y gestores
              institucionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
