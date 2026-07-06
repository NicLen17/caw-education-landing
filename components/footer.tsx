"use client"

import Image from "next/image"
import Link from "next/link"
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react"
import { hoverLink, transitionSubtle } from "@/lib/landing-styles"
import { cn } from "@/lib/utils"

const productLinks = ["Características", "Módulos", "Precios", "Integraciones"]
const companyLinks = [
  { label: "Sobre nosotros", href: "#" },
  { label: "Casos de éxito", href: "#solutions" },
  { label: "Blog", href: "#" },
  { label: "Carreras", href: "#" },
]
const legalLinks = ["Términos de servicio", "Política de privacidad", "Cookies"]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-foreground px-4 py-24 text-background md:px-6">
      <div className="container relative z-10 mx-auto">
        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-5">
            <Image
              src="/logo-caw-education.svg"
              alt="CAW Education"
              width={200}
              height={50}
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
            <p className="max-w-xs text-sm leading-relaxed text-background/60">
              Transformando la educación con tecnología intuitiva, segura y potente.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-background/50">
              Producto
            </h3>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className={cn(
                      "text-sm text-background/70",
                      hoverLink,
                      transitionSubtle,
                      "hover:translate-x-0.5",
                    )}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-background/50">
              Empresa
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm text-background/70",
                      hoverLink,
                      transitionSubtle,
                      "hover:translate-x-0.5",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-background/50">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:cawtecharg@gmail.com"
                  className={cn(
                    "flex items-start gap-3 text-sm text-background/70",
                    hoverLink,
                    transitionSubtle,
                  )}
                >
                  <EnvelopeSimple className="mt-0.5 h-4 w-4 shrink-0" weight="light" />
                  cawtecharg@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5493815709862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-start gap-3 text-sm text-background/70",
                    hoverLink,
                    transitionSubtle,
                  )}
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" weight="light" />
                  +54 9 381 570-9862
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" weight="light" />
                Tafí Viejo, Tucumán, Argentina
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-background/10 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <p className="text-sm text-background/50">
              © {currentYear} CAW Education. Todos los derechos reservados.
            </p>
            <p className="text-sm text-background/50">
              Desarrollado por{" "}
              <a
                href="https://caw.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "font-medium text-background/80 underline-offset-4",
                  transitionSubtle,
                  "hover:underline hover:text-background",
                )}
              >
                Caw tech
              </a>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className={cn(
                  "text-sm text-background/60",
                  hoverLink,
                  transitionSubtle,
                )}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
