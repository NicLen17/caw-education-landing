export const seoConfig = {
  siteName: "CAW Education",
  siteUrl: "https://caweducation.com",
  defaultTitle: "CAW Education - Plataforma Integral de Gestión Académica",
  defaultDescription:
    "CAW Education automatiza y unifica la administración educativa: asistencia, eventos, comunicación y más, todo en un solo sistema moderno, conectado y centralizado.",
  defaultKeywords: [
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
  ],
  social: {
    twitter: "@caweducation",
    linkedin: "company/caweducation",
    facebook: "caweducation",
    instagram: "caweducation",
  },
  contact: {
    email: "contacto@caweducation.com",
    phone: "+54-11-1234-5678",
  },
  organization: {
    name: "CAW TECH",
    legalName: "CAW TECH S.A.",
    foundingDate: "2020",
    address: {
      street: "Av. Corrientes 1234",
      city: "Buenos Aires",
      state: "CABA",
      postalCode: "C1043",
      country: "Argentina",
    },
  },
}

export const generatePageMetadata = (title?: string, description?: string, keywords?: string[]) => {
  return {
    title: title || seoConfig.defaultTitle,
    description: description || seoConfig.defaultDescription,
    keywords: keywords || seoConfig.defaultKeywords,
    openGraph: {
      title: title || seoConfig.defaultTitle,
      description: description || seoConfig.defaultDescription,
      url: seoConfig.siteUrl,
      siteName: seoConfig.siteName,
      type: "website",
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: title || seoConfig.defaultTitle,
      description: description || seoConfig.defaultDescription,
      creator: seoConfig.social.twitter,
    },
  }
}
