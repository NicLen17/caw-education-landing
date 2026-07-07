"use client"

import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { DEMO_MAILTO, transitionSubtle } from "@/lib/landing-styles"

type DemoCtaProps = {
  label?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
}

export function DemoCta({ label = "Agendar demo", className, size = "md" }: DemoCtaProps) {
  return (
    <Link
      href={DEMO_MAILTO}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-primary font-medium text-primary-foreground",
        transitionSubtle,
        "active:scale-[0.98] hover:shadow-[0_16px_40px_-16px_rgba(32,144,240,0.45)]",
        sizeClasses[size],
        className,
      )}
    >
      <span>{label}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 transition-[transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
        <ArrowUpRight className="h-4 w-4" weight="light" aria-hidden />
      </span>
    </Link>
  )
}
