"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeader } from "@/components/landing/section-header"
import { bezelInner, bezelOuter, transitionSubtle } from "@/lib/landing-styles"
import { cn } from "@/lib/utils"

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

export function FAQ() {
  return (
    <section id="faq" className="section-mist relative overflow-hidden px-4 py-24 md:px-6 md:py-32">
      <div className="container relative z-10 mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Encuentra respuestas a las dudas más comunes sobre CAW Education."
        />

        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className={cn(bezelOuter, "border-none")}
            >
              <div className={cn(bezelInner, "overflow-hidden px-0 py-0 shadow-none")}>
                <AccordionTrigger
                  className={cn(
                    "px-6 py-5 text-left hover:no-underline",
                    transitionSubtle,
                    "hover:bg-primary/5",
                  )}
                >
                  <span className="pr-4 text-base font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
