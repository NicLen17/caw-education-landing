"use client"

import Script from "next/script"

export function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CAW Education",
    alternateName: "CAW TECH Education Platform",
    url: "https://caweducation.com",
    logo: "https://caweducation.com/logo-caw-education.svg",
    description:
      "CAW Education es la plataforma integral de gestión académica desarrollada por CAW TECH para facilitar las tareas cotidianas en instituciones educativas.",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-11-1234-5678",
      contactType: "customer service",
      email: "contacto@caweducation.com",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/caweducation",
      "https://twitter.com/caweducation",
      "https://www.facebook.com/caweducation",
      "https://www.instagram.com/caweducation",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressLocality: "Buenos Aires",
    },
  }

  // Software Application Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CAW Education",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Solicita una demo gratuita",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "Plataforma integral de gestión académica que conecta planillas, asistencias, comunicaciones, eventos, calendarios y herramientas para docentes dentro de un único sistema centralizado.",
    featureList: [
      "Gestión de asistencia digital",
      "Calendario académico integrado",
      "Comunicación institucional",
      "Gestión de eventos escolares",
      "Análisis de datos educativos",
      "Reportes personalizados",
      "Gestión docente",
      "Administración de estudiantes",
    ],
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es CAW Education?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CAW Education es una plataforma integral de gestión académica que centraliza asistencias, eventos, comunicaciones, calendarios y herramientas docentes en un único sistema moderno y conectado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo funciona la integración de módulos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Todos los módulos están interconectados en tiempo real. Los datos fluyen automáticamente entre asistencia, eventos, comunicaciones y reportes, eliminando duplicación y errores manuales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es segura la plataforma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. CAW Education cumple con estándares internacionales de seguridad, encriptación de datos, backups automáticos y control de acceso por roles para proteger la información institucional.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tipo de soporte ofrecen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ofrecemos soporte técnico 24/7, capacitación inicial para todo el equipo, documentación completa, webinars mensuales y un equipo dedicado de éxito del cliente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo probar la plataforma antes de contratarla?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos una demo personalizada y un período de prueba gratuito de 30 días para que tu institución explore todas las funcionalidades sin compromiso.",
        },
      },
    ],
  }

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CAW Education",
    url: "https://caweducation.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://caweducation.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://caweducation.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Características",
        item: "https://caweducation.com#features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Módulos",
        item: "https://caweducation.com#modules",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contacto",
        item: "https://caweducation.com#contact",
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
