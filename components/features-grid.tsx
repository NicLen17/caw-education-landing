"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Network, Calendar, Shield, Zap, BarChart3, MessageSquare } from "lucide-react"

export function FeaturesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Network,
      title: "Conexión total",
      description: "Integración completa entre docentes, administrativos y directivos en tiempo real",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600",
    },
    {
      icon: Calendar,
      title: "Calendarios sincronizados",
      description: "Eventos, asistencias y horarios unificados en una sola plataforma",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-600",
    },
    {
      icon: Shield,
      title: "Seguridad garantizada",
      description: "Protección de datos con los más altos estándares de seguridad educativa",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-600",
    },
    {
      icon: Zap,
      title: "Automatización inteligente",
      description: "Reduce tareas manuales y optimiza procesos administrativos",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-600",
    },
    {
      icon: BarChart3,
      title: "Reportes en tiempo real",
      description: "Dashboards y analíticas para decisiones basadas en datos",
      gradient: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-600",
    },
    {
      icon: MessageSquare,
      title: "Comunicación fluida",
      description: "Canales integrados para mantener a toda la comunidad educativa conectada",
      gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-600",
    },
  ]

  return (
    <section id="features" ref={ref} className="py-32 relative overflow-hidden bg-gray-50/50">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
              Una plataforma,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                infinitas posibilidades
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty leading-relaxed font-medium">
              CAW Education centraliza todas las herramientas que tu institución necesita para operar de manera
              eficiente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${feature.gradient} opacity-20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
