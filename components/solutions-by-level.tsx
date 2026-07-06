"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Baby, School, GraduationCap } from "lucide-react"

export function SolutionsByLevel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const levels = [
    {
      title: "Nivel Inicial y Primario",
      description:
        "Fortalecemos el vínculo familia-escuela. Cuaderno de comunicaciones digital y seguimiento diario para que los padres estén siempre informados.",
      icon: Baby,
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      title: "Nivel Secundario",
      description:
        "Fomentamos la autonomía. Los alumnos gestionan sus consultas y seguimiento, mientras los docentes optimizan libros de temas y calificaciones.",
      icon: School,
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      title: "Nivel Superior y Universitario",
      description:
        "Gestión académica avanzada. Control de regularidades, mesas de examen y cátedras adaptado a la vida universitaria.",
      icon: GraduationCap,
      gradient: "from-indigo-500 to-violet-500",
      bg: "bg-indigo-50",
      border: "border-indigo-200",
    },
  ]

  return (
    <section id="solutions" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900"
          >
            Una solución para{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              cada etapa educativa
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 text-pretty"
          >
            Herramientas específicas diseñadas para las necesidades de cada nivel
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group rounded-3xl p-8 ${level.bg} border-2 ${level.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${level.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <level.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{level.title}</h3>
              <p className="text-gray-700 leading-relaxed font-medium">{level.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
