import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://caweducation.com"),
  title: {
    default: "CAW Education - Plataforma Integral de Gestión Académica | Sistema Educativo Moderno",
    template: "%s | CAW Education",
  },
  description:
    "CAW Education es la plataforma integral de gestión académica que automatiza y unifica la administración educativa: asistencia, eventos, comunicación, calendarios y más. Sistema moderno, conectado y centralizado para instituciones educativas.",
  keywords: [
    "gestión académica",
    "plataforma educativa",
    "administración escolar",
    "asistencia digital",
    "calendario educativo",
    "software educativo",
    "gestión institucional",
    "sistema académico",
    "plataforma escolar",
    "automatización educativa",
    "CAW Education",
    "CAW TECH",
    "gestión de estudiantes",
    "gestión docente",
    "comunicación escolar",
    "análisis educativo",
    "reportes académicos",
    "planillas digitales",
    "eventos escolares",
    "administración educativa digital",
  ],
  authors: [{ name: "CAW TECH", url: "https://caweducation.com" }],
  creator: "CAW TECH",
  publisher: "CAW TECH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://caweducation.com",
    siteName: "CAW Education",
    title: "CAW Education - Plataforma Integral de Gestión Académica",
    description:
      "Plataforma integral para instituciones educativas modernas. Automatiza asistencia, eventos, comunicación y gestión académica en un solo sistema.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CAW Education - Gestión Académica Integral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAW Education - Plataforma Integral de Gestión Académica",
    description: "Sistema moderno de gestión educativa para instituciones del siglo XXI",
    images: ["/twitter-image.png"],
    creator: "@caweducation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://caweducation.com",
    languages: {
      "es-ES": "https://caweducation.com",
      "en-US": "https://caweducation.com/en",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "education",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="canonical" href="https://caweducation.com" />
        <meta name="theme-color" content="#2090f0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CAW Education" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
