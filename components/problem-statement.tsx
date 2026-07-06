"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertCircle, Clock, Users, FileText, CheckCircle2, Zap, Network, BarChart3 } from "lucide-react"

export function ProblemStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: FileText,
      title: "Planillas dispersas",
      description: "Información académica fragmentada en múltiples sistemas y archivos",
    },
    {
      icon: Clock,
      title: "Procesos manuales",
      description: "Horas perdidas en tareas administrativas repetitivas y propensas a errores",
    },
    {
      icon: Users,
      title: "Comunicación desconectada",
      description: "Dificultad para coordinar entre docentes, administrativos y directivos",
    },
    {
      icon: AlertCircle,
      title: "Falta de visibilidad",
      description: "Sin datos centralizados para tomar decisiones informadas",
    },
  ]

  const solutions = [
    {
      icon: CheckCircle2,
      title: "Sistema centralizado",
      description: "Toda la información académica en una única plataforma accesible",
    },
    {
      icon: Zap,
      title: "Automatización inteligente",
      description: "Procesos automatizados que ahorran tiempo y eliminan errores",
    },
    {
      icon: Network,
      title: "Comunicación fluida",
      description: "Conexión instantánea entre todos los actores del ecosistema educativo",
    },
    {
      icon: BarChart3,
      title: "Datos en tiempo real",
      description: "Reportes y métricas actualizadas para decisiones informadas",
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
              De los desafíos tradicionales a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                soluciones modernas
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty leading-relaxed font-medium">
              Transformamos los problemas cotidianos en oportunidades de eficiencia
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-red-600 mb-2">❌ Desafíos actuales</h3>
                <p className="text-gray-700 font-medium">Lo que enfrentan las instituciones hoy</p>
              </motion.div>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg hover:border-red-300 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                        <problem.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-red-900">{problem.title}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed font-medium">{problem.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  ✓ Nuestras soluciones
                </h3>
                <p className="text-gray-700 font-medium">Cómo CAW Education resuelve cada desafío</p>
              </motion.div>

              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-blue-900">{solution.title}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed font-medium">{solution.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
