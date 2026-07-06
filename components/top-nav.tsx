"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { List, X } from "@phosphor-icons/react"
import { DemoCta } from "@/components/landing/demo-cta"
import { transitionSubtle } from "@/lib/landing-styles"
import { cn } from "@/lib/utils"

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current
    if (latest > previous && latest > 150) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
    setIsScrolled(latest > 20)
    lastScrollY.current = latest
  })

  const navLinks = [
    { label: "Producto", href: "#features" },
    { label: "Módulos", href: "#modules" },
    { label: "Niveles", href: "#solutions" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-120%" } }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6"
      >
        <nav
          className={cn(
            "pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-4 py-2.5 md:px-6",
            transitionSubtle,
            isScrolled
              ? "bg-background/80 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.12)] ring-1 ring-black/[0.05] backdrop-blur-3xl"
              : "bg-background/50 ring-1 ring-black/[0.04] backdrop-blur-xl",
          )}
          aria-label="Navegación principal"
        >
          <Link
            href="/"
            className={cn(
              "flex shrink-0 items-center rounded-full px-2 py-1",
              transitionSubtle,
              "hover:opacity-80",
            )}
          >
            <Image
              src="/logo-caw-education.svg"
              alt="CAW Education"
              width={180}
              height={45}
              className="h-9 w-auto md:h-10"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground",
                  transitionSubtle,
                  "hover:text-foreground hover:bg-foreground/[0.04]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <DemoCta size="sm" />
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={cn(
              "relative flex h-10 w-10 items-center justify-center rounded-full md:hidden",
              transitionSubtle,
              "hover:bg-foreground/[0.04]",
            )}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <List
              className={cn(
                "absolute h-5 w-5 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                isMobileMenuOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100",
              )}
              weight="light"
            />
            <X
              className={cn(
                "absolute h-5 w-5 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0",
              )}
              weight="light"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-background/90 backdrop-blur-3xl md:hidden"
          >
            <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-2 px-6 pt-24">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + index * 0.06,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-full px-6 py-3 text-2xl font-display font-medium text-foreground transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
                className="mt-8"
              >
                <DemoCta size="lg" />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
