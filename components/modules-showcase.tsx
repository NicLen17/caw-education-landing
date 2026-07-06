"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { GraduationCap, UserCheck, CalendarDays, FileSpreadsheet, Bell, CheckCircle2 } from "lucide-react"

export function ModulesShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeModule, setActiveModule] = useState(0)

  const modules = [
    {
      icon: GraduationCap,
      title: "Gestión Académica",
      description: "Simplifica el seguimiento de tus alumnos con herramientas intuitivas",
      features: ["Carga rápida de notas", "Historial por alumno", "Seguimiento de progreso"],
      gradient: "bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-blue-400/30",
      iconGradient: "bg-gradient-to-br from-blue-600 to-cyan-600",
    },
    {
      icon: UserCheck,
      title: "Asistencias",
      description: "Toma asistencia en segundos y automatiza los reportes",
      features: ["Registro digital ágil", "Cálculo automático de porcentajes", "Alertas de inasistencia"],
      gradient: "bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-purple-400/30",
      iconGradient: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
      icon: CalendarDays,
      title: "Calendario y Eventos",
      description: "Mantén organizadas todas tus fechas importantes y exámenes",
      features: ["Agenda de exámenes", "Eventos escolares", "Vista semanal y mensual"],
      gradient: "bg-gradient-to-br from-indigo-500/30 via-blue-500/30 to-indigo-400/30",
      iconGradient: "bg-gradient-to-br from-indigo-600 to-blue-600",
    },
    {
      icon: FileSpreadsheet,
      title: "Planillas Digitales",
      description: "Olvídate del papel: todas tus planillas en un solo lugar",
      features: ["Formatos estandarizados", "Exportación fácil", "Siempre accesibles"],
      gradient: "bg-gradient-to-br from-cyan-500/30 via-teal-500/30 to-cyan-400/30",
      iconGradient: "bg-gradient-to-br from-cyan-600 to-teal-600",
    },
    {
      icon: Bell,
      title: "Comunicaciones",
      description: "Conecta con familias y estudiantes de forma directa y profesional",
      features: ["Cuaderno de comunicaciones digital", "Avisos importantes", "Sin grupos de WhatsApp"],
      gradient: "bg-gradient-to-br from-violet-500/30 via-purple-500/30 to-violet-400/30",
      iconGradient: "bg-gradient-to-br from-violet-600 to-purple-600",
    },
  ]

  return (
    <section id="modules" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
              Módulos diseñados para{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                cada necesidad
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty leading-relaxed font-medium">
              Explora las herramientas que transformarán la gestión de tu institución educativa
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Module List - Takes up 5 columns */}
            <div className="lg:col-span-5 space-y-3">
              {modules.map((module, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveModule(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                    activeModule === index
                      ? "bg-white shadow-lg ring-1 ring-black/5 scale-[1.02]"
                      : "hover:bg-white/50 hover:shadow-md"
                  }`}
                >
                  {activeModule === index && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                  )}
                  <div className="flex items-center gap-4 pl-2">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        activeModule === index
                          ? "bg-blue-50 text-blue-600"
                          : "bg-gray-100 text-gray-500 group-hover:text-gray-700"
                      }`}
                    >
                      <module.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold transition-colors ${
                          activeModule === index ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                        }`}
                      >
                        {module.title}
                      </h3>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Preview Area - Takes up 7 columns */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative"
              >
                <div className={`${modules[activeModule].gradient} rounded-[2.5rem] p-1 shadow-2xl`}>
                  <div className="bg-white/90 backdrop-blur-xl rounded-[2.3rem] p-8 md:p-12 h-full border border-white/20">
                    <div className="flex items-start justify-between mb-8">
                      <div
                        className={`w-16 h-16 rounded-2xl ${modules[activeModule].iconGradient} flex items-center justify-center shadow-lg transform -rotate-3`}
                      >
                        {(() => {
                          const Icon = modules[activeModule].icon
                          return <Icon className="w-8 h-8 text-white" />
                        })()}
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-gray-900/5 text-xs font-bold uppercase tracking-wider text-gray-900">
                        Módulo {activeModule + 1}
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
                      {modules[activeModule].title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">{modules[activeModule].description}</p>

                    <div className="grid gap-4">
                      {modules[activeModule].features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.1 }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div
                            className={`w-8 h-8 rounded-full ${modules[activeModule].iconGradient} flex items-center justify-center flex-shrink-0`}
                          >
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-gray-800">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
