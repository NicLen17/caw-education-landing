"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "@phosphor-icons/react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { DemoCta } from "@/components/landing/demo-cta"
import { SectionHeader } from "@/components/landing/section-header"
import { bezelInner, bezelOuter, iconPrimary, iconWrapPrimary, transitionSubtle } from "@/lib/landing-styles"
import { cn } from "@/lib/utils"

const benefits = [
  "Demo personalizada de 30 minutos",
  "Análisis de necesidades de tu institución",
  "Respuestas a todas tus preguntas",
  "Plan de implementación a medida",
]

export function DemoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <SectionHeader
              align="left"
              eyebrow="Contacto"
              title="Solicita una demo personalizada"
              description="Descubre cómo CAW Education puede transformar la gestión de tu institución. Agenda una demostración sin compromiso con nuestro equipo."
              className="mb-8 max-w-none"
            />

            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className={cn("h-8 w-8 shrink-0", iconWrapPrimary)}>
                    <CheckCircle className={cn("h-4 w-4", iconPrimary)} weight="light" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <DemoCta label="Agendar demo por email" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className={cn(bezelOuter)}
          >
            <div className={cn(bezelInner, "p-6 shadow-none md:p-8")}>
              {isSubmitted ? (
                <div className="py-10 text-center">
                  <div className={cn("mx-auto mb-4 h-16 w-16 rounded-full", iconWrapPrimary)}>
                    <CheckCircle className={cn("h-8 w-8", iconPrimary)} weight="light" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">¡Gracias!</h3>
                  <p className="text-sm text-muted-foreground">
                    El equipo de Caw tech te contactará a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email institucional *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@institucion.edu"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="institution">Institución *</Label>
                    <Input
                      id="institution"
                      name="institution"
                      required
                      value={formData.institution}
                      onChange={handleChange}
                      placeholder="Colegio San Martín"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="role">Rol *</Label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Selecciona tu rol</option>
                      <option value="director">Director/a</option>
                      <option value="coordinador">Coordinador/a</option>
                      <option value="docente">Docente</option>
                      <option value="administrativo">Administrativo</option>
                      <option value="ti">TI / Tecnología</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre las necesidades de tu institución..."
                      className="mt-2 min-h-[100px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className={cn(
                      "w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground",
                      transitionSubtle,
                      "hover:shadow-[0_12px_32px_-12px_rgba(32,144,240,0.45)] active:scale-[0.98]",
                    )}
                  >
                    Enviar solicitud
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    También puedes escribirnos directamente a{" "}
                    <a
                      href="mailto:cawtecharg@gmail.com"
                      className="underline-offset-4 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:underline hover:opacity-80"
                    >
                      cawtecharg@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
