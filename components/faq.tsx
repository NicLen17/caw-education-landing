"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: "¿Qué es CAW Education?",
      answer:
        "CAW Education es la plataforma integral de gestión académica desarrollada por CAW TECH para facilitar las tareas cotidianas en instituciones educativas. Conecta planillas, asistencias, comunicaciones, eventos, calendarios y herramientas para docentes dentro de un único sistema centralizado.",
    },
    {
      question: "¿Qué instituciones pueden usar CAW Education?",
      answer:
        "CAW Education está diseñado para todo tipo de instituciones educativas: escuelas primarias, secundarias, institutos técnicos, universidades y centros de formación. La plataforma se adapta a las necesidades específicas de cada nivel educativo.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usar la plataforma?",
      answer:
        "No. CAW Education está diseñado con una interfaz intuitiva y fácil de usar. Ofrecemos capacitación inicial y soporte continuo para garantizar que todos los usuarios, independientemente de su nivel técnico, puedan aprovechar al máximo la plataforma.",
    },
    {
      question: "¿Cómo se protegen los datos de mi institución?",
      answer:
        "La seguridad es nuestra prioridad. Utilizamos encriptación de nivel empresarial, cumplimos con normativas de protección de datos educativos, realizamos backups automáticos diarios y mantenemos servidores seguros con monitoreo 24/7.",
    },
    {
      question: "¿Puedo integrar CAW Education con otros sistemas?",
      answer:
        "Sí. CAW Education ofrece APIs y conectores para integrarse con sistemas de gestión existentes, plataformas de aprendizaje (LMS), sistemas de pago y otras herramientas educativas que tu institución ya utilice.",
    },
    {
      question: "¿Cuánto tiempo toma implementar la plataforma?",
      answer:
        "El tiempo de implementación varía según el tamaño de la institución, pero generalmente toma entre 2 y 4 semanas. Nuestro equipo te acompaña en todo el proceso: migración de datos, configuración, capacitación y puesta en marcha.",
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer:
        "Ofrecemos soporte técnico continuo por múltiples canales: chat en vivo, email, teléfono y centro de ayuda con documentación completa. También realizamos actualizaciones regulares y mejoras basadas en feedback de usuarios.",
    },
    {
      question: "¿Puedo probar la plataforma antes de contratarla?",
      answer:
        "Absolutamente. Ofrecemos demos personalizadas y períodos de prueba para que puedas explorar todas las funcionalidades de CAW Education y verificar que se ajusta a las necesidades de tu institución antes de tomar una decisión.",
    },
  ]

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Preguntas frecuentes
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Encuentra respuestas a las dudas más comunes sobre CAW Education
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="flex flex-col gap-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl px-6 shadow-md data-[state=open]:shadow-xl data-[state=open]:border-indigo-400 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg pr-4 text-gray-800">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
