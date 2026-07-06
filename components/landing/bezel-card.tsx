"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { bezelInner, bezelOuter, hoverLift, transitionSubtle } from "@/lib/landing-styles"

type BezelCardProps = {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  hoverable?: boolean
  delay?: number
}

export function BezelCard({
  children,
  className,
  innerClassName,
  hoverable = true,
  delay = 0,
}: BezelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.32, 0.72, 0, 1] }}
      className={cn(bezelOuter, className)}
    >
      <div
        className={cn(
          bezelInner,
          "h-full p-6 md:p-8",
          hoverable && transitionSubtle,
          hoverable && hoverLift,
          innerClassName,
        )}
      >
        {children}
      </div>
    </motion.div>
  )
}
