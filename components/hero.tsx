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
import { transitionSubtle } from "@/lib/landing-styles"
import { cn } from "@/lib/utils"

const highlights = [
  {
    title: "Gestión simplificada",
    description: "Interfaz intuitiva para el día a día escolar.",
    icon: SquaresFour,
  },
  {
    title: "Enfoque docente",
    description: "Diseñado para facilitar la tarea en el aula.",
    icon: GraduationCap,
  },
  {
    title: "Soporte local",
    description: "Desarrollo y atención desde Argentina.",
    icon: MapPin,
  },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pb-24 pt-32 md:px-6 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(15,23,42,0.06),transparent)]" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="mb-10 flex justify-center"
          >
            <div className="rounded-[2rem] bg-black/[0.03] p-2 ring-1 ring-black/[0.05]">
              <div className="relative h-36 w-36 overflow-hidden rounded-[calc(2rem-0.5rem)] bg-card shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] md:h-44 md:w-44">
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
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-foreground/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/30 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground/60" />
            </span>
            Versión Beta 1.0 disponible
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance"
          >
            Gestión académica inteligente
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
                "inline-flex items-center gap-2 rounded-full bg-foreground/[0.04] px-6 py-3.5 text-base font-medium text-foreground",
                transitionSubtle,
                "hover:bg-foreground/[0.07] active:scale-[0.98]",
              )}
            >
              <Play className="h-4 w-4" weight="light" aria-hidden />
              Ver módulos
            </Link>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <BezelCard key={item.title} delay={0.4 + index * 0.08} innerClassName="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.04]">
                  <item.icon className="h-6 w-6 text-foreground/70" weight="light" />
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
