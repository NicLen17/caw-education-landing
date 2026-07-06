"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, LayoutDashboard, GraduationCap, MapPin } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-[100px] mix-blend-multiply animate-float-slow" />
        <div className="absolute bottom-[-20%] left-[30%] w-[700px] h-[700px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Added large animated logo presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            className="flex justify-center mb-12 relative"
          >
            {/* Updated animation and used new PNG logo */}
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-blue-500/30 blur-[80px] rounded-full animate-pulse-slow" />
              <div className="absolute inset-0 bg-purple-500/20 blur-[60px] rounded-full animate-float-slow" />
              <Image
                src="/caw-education-logo-large.png"
                alt="CAW Education Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Version Beta 1.0 Disponible
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-gray-900"
          >
            Gestión académica <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                inteligente
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-4 bg-blue-200/30 -rotate-1 blur-sm" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-balance"
          >
            CAW Education unifica asistencia, calificaciones y comunicación en una plataforma diseñada para el futuro de
            la educación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
            >
              Solicitar demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg rounded-full border-2 border-gray-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-blue-200 text-gray-700 hover:text-blue-600 transition-all hover:-translate-y-1"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Ver video tour
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Gestión Simplificada",
                description: "Interfaz intuitiva para el día a día escolar.",
                icon: LayoutDashboard,
              },
              {
                title: "Enfoque Docente",
                description: "Diseñado para facilitar la tarea en el aula.",
                icon: GraduationCap,
              },
              {
                title: "Soporte Local",
                description: "Desarrollo y atención desde Argentina.",
                icon: MapPin,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-xl hover:bg-white/60 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                    {stat.title}
                  </div>
                  <div className="text-gray-600 font-medium leading-relaxed">{stat.description}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
