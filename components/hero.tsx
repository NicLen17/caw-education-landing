"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  SquaresFour,
  GraduationCap,
  MapPin,
  Play,
} from "@phosphor-icons/react"
import { DemoCta } from "@/components/landing/demo-cta"
import { BezelCard } from "@/components/landing/bezel-card"
import {
  iconPrimary,
  iconTeal,
  iconWrapPrimary,
  iconWrapTeal,
  transitionSubtle,
} from "@/lib/landing-styles"
import { cn } from "@/lib/utils"

const highlights = [
  {
    title: "Gestión simplificada",
    description: "Interfaz intuitiva para el día a día escolar.",
    icon: SquaresFour,
    tone: "primary" as const,
  },
  {
    title: "Enfoque docente",
    description: "Diseñado para facilitar la tarea en el aula.",
    icon: GraduationCap,
    tone: "teal" as const,
  },
  {
    title: "Soporte local",
    description: "Desarrollo y atención desde Argentina.",
    icon: MapPin,
    tone: "primary" as const,
  },
]

export function Hero() {
  return (
    <section className="brand-glow relative flex min-h-[100dvh] items-center overflow-hidden px-4 pb-24 pt-32 md:px-6 md:pt-36">
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="mb-10 flex justify-center"
          >
            <div className="rounded-[2rem] bg-primary/10 p-2 ring-1 ring-primary/15">
              <div className="relative h-36 w-36 overflow-hidden rounded-[calc(2rem-0.5rem)] bg-card shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] md:h-44 md:w-44">
                <Image
                  src="/caw-education-logo-large.png"
                  alt="CAW Education Logo"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Versión Beta 1.0 disponible
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance"
          >
            Gestión académica{" "}
            <span className="text-gradient-brand">inteligente</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty"
          >
            CAW Education unifica asistencia, calificaciones y comunicación en una
            plataforma diseñada para el futuro de la educación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <DemoCta size="lg" label="Agendar demo" />
            <Link
              href="#modules"
              className={cn(
                "inline-flex items-center gap-2 rounded-full bg-accent/15 px-6 py-3.5 text-base font-medium text-accent-foreground",
                transitionSubtle,
                "hover:bg-accent/25 active:scale-[0.98]",
              )}
            >
              <Play className="h-4 w-4 text-accent" weight="light" aria-hidden />
              Ver módulos
            </Link>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <BezelCard key={item.title} delay={0.4 + index * 0.08} innerClassName="text-center">
                <div
                  className={cn(
                    "mx-auto mb-4 h-12 w-12",
                    item.tone === "primary" ? iconWrapPrimary : iconWrapTeal,
                  )}
                >
                  <item.icon
                    className={cn("h-6 w-6", item.tone === "primary" ? iconPrimary : iconTeal)}
                    weight="light"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </BezelCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
