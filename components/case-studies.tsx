"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { TrendingUp, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)

  const cases = [
    {
      institution: "Instituto San Martín",
      type: "Secundaria",
      students: "1,200 estudiantes",
      result: "70% reducción en tiempo administrativo",
      metric: "70%",
      icon: Clock,
      quote: "CAW Education transformó completamente nuestra gestión diaria",
    },
    {
      institution: "Colegio Belgrano",
      type: "Primaria y Secundaria",
      students: "800 estudiantes",
      result: "95% satisfacción docente",
      metric: "95%",
      icon: Users,
      quote: "La comunicación entre docentes y familias nunca fue tan fluida",
    },
    {
      institution: "Universidad Técnica del Sur",
      type: "Educación Superior",
      students: "3,500 estudiantes",
      result: "3x más eficiencia en reportes",
      metric: "3x",
      icon: TrendingUp,
      quote: "Los reportes que tomaban días ahora están listos en minutos",
    },
  ]

  const institutions = [
    { name: "Instituto San Martín", logo: "ISM" },
    { name: "Colegio Belgrano", logo: "CB" },
    { name: "Universidad Técnica del Sur", logo: "UTS" },
    { name: "Escuela Primaria Libertad", logo: "EPL" },
    { name: "Instituto Técnico Nacional", logo: "ITN" },
    { name: "Colegio San José", logo: "CSJ" },
    { name: "Universidad del Valle", logo: "UV" },
    { name: "Escuela Normal Superior", logo: "ENS" },
    { name: "Instituto Comercial", logo: "IC" },
    { name: "Colegio Bilingüe Internacional", logo: "CBI" },
    { name: "Academia de Artes", logo: "AA" },
    { name: "Instituto de Idiomas", logo: "II" },
    { name: "Colegio Técnico Industrial", logo: "CTI" },
    { name: "Universidad Nacional", logo: "UN" },
    { name: "Escuela de Música", logo: "EM" },
    { name: "Instituto Politécnico", logo: "IP" },
    { name: "Colegio Santa María", logo: "CSM" },
    { name: "Universidad Privada del Norte", logo: "UPN" },
    { name: "Instituto de Formación Docente", logo: "IFD" },
    { name: "Colegio Experimental", logo: "CE" },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="cases" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Instituciones que confían
              </span>{" "}
              en CAW Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Resultados reales de instituciones que transformaron su gestión académica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <caseStudy.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {caseStudy.metric}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{caseStudy.institution}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {caseStudy.type} • {caseStudy.students}
                </p>

                <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                  <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {caseStudy.result}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground italic leading-relaxed">"{caseStudy.quote}"</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <p className="text-center text-lg font-semibold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Más de 500 instituciones confían en CAW Education
            </p>

            <div className="relative">
              {/* Scroll buttons */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-lg hover:bg-blue-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-lg hover:bg-blue-50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Scrollable container */}
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {institutions.map((inst, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-48 h-32 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-2xl flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:border-purple-300 transition-all snap-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                      {inst.logo}
                    </div>
                    <span className="text-xs text-center text-muted-foreground px-2 font-medium">{inst.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="border-2 border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-purple-300"
              >
                {showAll ? "Ver menos" : "Ver todas las instituciones"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
