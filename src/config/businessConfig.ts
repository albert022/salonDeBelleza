export interface ServiceItem {
  id: string;
  title: string;
  category: "cabello" | "unas" | "maquillaje" | "cejas-pestanas" | "faciales";
  shortDescription: string;
  description: string;
  duration: string;
  image: string;
  priceNote: string;
  suggestedPriceRD?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "cabello" | "unas" | "maquillaje" | "cejas-pestanas" | "faciales";
  categoryLabel: string;
  image: string;
  description: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  service: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  whatsappActionText: string;
}

// PLANTILLA BASE PARA ACCIONES DE WHATSAPP
export const BASE_WHATSAPP_MESSAGE =
  "¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON)";

export const businessConfig = {
  // IDENTIDAD DEL NEGOCIO
  name: "Aura Beauty Studio",
  tagline: "Salón & Spa de Belleza",
  slogan: "Realzamos tu belleza, resaltamos tu esencia",
  subtitle: "Experiencia de belleza premium en Santo Domingo. Cuidado capilar experto, uñas impecables, maquillaje profesional y tratamientos faciales con atención personalizada de primer nivel.",
  
  // UBICACIÓN Y CONTACTO
  city: "Santo Domingo",
  country: "República Dominicana",
  zone: "Piantini",
  address: "Av. Abraham Lincoln #1052, Torre Lincoln Suite 4B, Piantini, Santo Domingo, D.N.",
  googleMapsUrl: "https://maps.app.goo.gl/H2rKWwfrzkDnj27Y9",
  
  // NÚMEROS Y CANALES OFICIALES
  phoneDisplay: "+1 (829) 499-4321",
  whatsappNumber: "18294994321",
  email: "citas@aurabeautystudio.com.do",
  
  // REDES SOCIALES
  instagramUrl: "https://instagram.com/qrmoon.rd",
  instagramHandle: "@qrmoon.rd",
  tiktokUrl: "https://tiktok.com/@gato_colonial",
  tiktokHandle: "@gato_colonial",
  
  // MONEDA
  currency: "RD$",
  
  // GOOGLE REVIEWS
  googleReviews: {
    enabled: true,
    rating: 4.9,
    totalReviews: 148,
    reviewUrl: "https://www.google.com/travel/search?q=google%20map%20gato%20colonial&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72880339%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076%2C122097177%2C122192361&hl=en-DO&gl=do&cs=1&ssta=1&ts=CAEaRwopEicyJTB4OGVhZjg5MGM0ZDQ5NTBlOToweDM1YmNlMGIwN2MzYzIxYmYSGhIUCgcI6g8QCxgBEgcI6g8QCxgCGAEyAhAA&qs=CAEyE0Nnb0l2OFB3NFllV3VONDFFQUU4AkIJCb8hPHyw4Lw1&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjwoM-x6eSXAxUAAAAAHQAAAAAQAw",
    note: "Opiniones verificadas de clientas en Google",
  },

  // HORARIOS DE ATENCIÓN
  schedule: [
    { days: "Lunes a Viernes", hours: "9:00 AM – 7:30 PM" },
    { days: "Sábados", hours: "8:30 AM – 8:00 PM" },
    { days: "Domingos", hours: "10:00 AM – 4:00 PM (Previa cita)" },
  ],

  // POR QUÉ ELEGIRNOS (3 BENEFICIOS CLAVE)
  benefits: [
    {
      id: "personalizada",
      title: "Atención Personalizada",
      description: "Diagnóstico individual previo a cada tratamiento, bebida de cortesía y asesoría exclusiva según tu estilo y morfología.",
      icon: "Sparkles",
    },
    {
      id: "calidad",
      title: "Productos de Calidad",
      description: "Trabajamos únicamente con marcas profesionales internacionales de alta gama (Olaplex, Kérastase, OPI, Moroccanoil).",
      icon: "ShieldCheck",
    },
    {
      id: "capacitados",
      title: "Profesionales Capacitados",
      description: "Equipo de estilistas, coloristas y cosmetólogas con certificaciones actualizadas en las últimas tendencias y técnicas del mundo.",
      icon: "Award",
    },
  ],

  // SERVICIOS PRINCIPALES (6 TARJETAS)
  services: [
    {
      id: "cortes-peinados",
      title: "Cortes & Peinados",
      category: "cabello",
      shortDescription: "Cortes estilizados en tendencia, secado profesional, ondas al agua y recogidos para ocasiones especiales.",
      description: "Diseño de corte adaptado a tus facciones, lavado exfoliante con masaje capilar relajante, secado blowout con brillo duradero y estilizado con productos térmicos protectores de primera línea.",
      duration: "45 - 90 min",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      priceNote: "Consultar según longitud y estilo",
      suggestedPriceRD: "Desde RD$ 1,200",
    },
    {
      id: "coloracion-tratamientos",
      title: "Coloración & Tratamientos",
      category: "cabello",
      shortDescription: "Balayage, babylights, corrección de color, botox capilar y nanoplastia hidratante intensiva.",
      description: "Técnicas modernas de aclaración cuidando la fibra capilar con Olaplex. Tratamientos reconstructores para recuperar sedosidad, brillo cristal y eliminación total de encrespamiento.",
      duration: "90 - 210 min",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      priceNote: "Consultar según evaluación capilar",
      suggestedPriceRD: "Desde RD$ 2,800",
    },
    {
      id: "manicura-pedicura",
      title: "Manicura & Pedicura Spa",
      category: "unas",
      shortDescription: "Esmaltado semipermanente, acripie, uñas acrílicas esculpidas, dipping y exfoliación spa con parafina.",
      description: "Cuidado clínico e higiénico riguroso con instrumental esterilizado en autoclave. Variedad infinita de tonos en gel de larga duración, nail art a mano alzada y exfoliación revitalizante de pies.",
      duration: "60 - 90 min",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
      priceNote: "Consultar por técnica seleccionada",
      suggestedPriceRD: "Desde RD$ 950",
    },
    {
      id: "maquillaje-profesional",
      title: "Maquillaje Profesional",
      category: "maquillaje",
      shortDescription: "Maquillaje social de alto impacto, novias, quinceañeras, eventos de gala y sesiones fotográficas.",
      description: "Técnicas de piel blindada y acabado porcelana de ultra larga duración resistente al clima tropical dominicano. Productos de firmas internacionales como Charlotte Tilbury, NARS y MAC.",
      duration: "60 - 90 min",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      priceNote: "Consultar para novias o social",
      suggestedPriceRD: "Desde RD$ 2,500",
    },
    {
      id: "diseno-cejas-pestanas",
      title: "Diseño de Cejas & Pestañas",
      category: "cejas-pestanas",
      shortDescription: "Lifting de pestañas con keratina, extensiones pelo a pelo, laminado de cejas y visagismo con henna.",
      description: "Resalta tu mirada con simetría perfecta. Aplicación pelo a pelo efecto natural o volumen ruso con adhesivos hipoalergénicos certificados que no dañan tu pestaña natural.",
      duration: "60 - 120 min",
      image: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80",
      priceNote: "Consultar por servicio de mirada",
      suggestedPriceRD: "Desde RD$ 1,500",
    },
    {
      id: "tratamientos-faciales",
      title: "Tratamientos Faciales",
      category: "faciales",
      shortDescription: "Limpieza facial profunda con espátula ultrasónica, dermapen, hidratación con ácido hialurónico y glow facial.",
      description: "Protocolos especializados para renovar la luminosidad de tu rostro, descongestionar poros, atenuar líneas de expresión y combatir los efectos del sol y la contaminación urbana.",
      duration: "60 - 75 min",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      priceNote: "Consultar según necesidad de tu piel",
      suggestedPriceRD: "Desde RD$ 2,200",
    },
  ] as ServiceItem[],

  // GALERÍA DE TRABAJOS REALIZADOS (CON FILTROS)
  gallery: [
    {
      id: "g1",
      title: "Balayage Miel & Iluminación Sutil",
      category: "cabello",
      categoryLabel: "Cabello & Color",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      description: "Transición degradada en tonos miel cálidos con nutrición profunda Olaplex y acabado ondas de sirena.",
      tag: "Balayage",
    },
    {
      id: "g2",
      title: "Nail Art Minimalista & Almendradas",
      category: "unas",
      categoryLabel: "Uñas",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
      description: "Esmaltado semipermanente en tono milky white con detalles lineales en pan de oro de 18k.",
      tag: "Semipermanente",
    },
    {
      id: "g3",
      title: "Maquillaje Social Glow & Piel Blindada",
      category: "maquillaje",
      categoryLabel: "Maquillaje",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
      description: "Smokey eyes en tonos tierra bronce con labios nude satinados, diseñado para sesión fotográfica y evento nocturno.",
      tag: "Evento Social",
    },
    {
      id: "g4",
      title: "Lifting de Pestañas & Laminado de Cejas",
      category: "cejas-pestanas",
      categoryLabel: "Cejas & Pestañas",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
      description: "Efecto rímel natural durante 6 a 8 semanas con nutrición de keratina y tinte vegetal de definición.",
      tag: "Lifting & Brow",
    },
    {
      id: "g5",
      title: "Rubio Cenizo Babylights & Gloss",
      category: "cabello",
      categoryLabel: "Cabello & Color",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
      description: "Micro-mechas ultra finas desde la raíz para un aclarado homogéneo sin líneas de demarcación.",
      tag: "Babylights",
    },
    {
      id: "g6",
      title: "Manicura Rusa & Acrílicas Francesas",
      category: "unas",
      categoryLabel: "Uñas",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
      description: "Limpieza profunda de cutícula con torno y extensión sutil cuadrada con punta French moderna en tono rosa pastel.",
      tag: "Manicura Rusa",
    },
    {
      id: "g7",
      title: "Tratamiento Facial Hidra-Glow",
      category: "faciales",
      categoryLabel: "Tratamientos Faciales",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
      description: "Infusión de ácido hialurónico con mascarilla hidroplástica de rosas para recuperar elasticidad y luminosidad inmediata.",
      tag: "Facial Spa",
    },
    {
      id: "g8",
      title: "Peinado de Novia & Tiara Floral",
      category: "cabello",
      categoryLabel: "Cabello & Color",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      description: "Recogido bajo romántico desestructurado con fijación natural de 12 horas resistente a humedad.",
      tag: "Novias",
    },
    {
      id: "g9",
      title: "Extensiones de Pestañas Efecto Híbrido",
      category: "cejas-pestanas",
      categoryLabel: "Cejas & Pestañas",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
      description: "Combinación de técnica clásica y abanicos 3D para mayor densidad con peso imperceptible para el párpado.",
      tag: "Pestañas Híbridas",
    },
  ] as GalleryItem[],

  // TESTIMONIOS DE CLIENTAS
  testimonials: [
    {
      id: "t1",
      name: "Camila Fernández",
      role: "Cliente Frecuente",
      service: "Balayage & Tratamiento Olaplex",
      rating: 5,
      comment: "Tenía miedo de hacerme color por el daño, pero aquí cuidaron cada milímetro de mi pelo. El tono quedó idéntico a lo que les pedí. El ambiente y el café en Piantini son un 10/10.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      date: "Hace 2 semanas",
    },
    {
      id: "t2",
      name: "Valeria Morales",
      role: "Novia Aura",
      service: "Maquillaje de Boda & Peinado",
      rating: 5,
      comment: "Mi maquillaje duró intacto desde la sesión de fotos a las 2:00 PM hasta el final de la fiesta a las 4:00 AM. ¡Lloré de emoción y ni una sola gota se corrió! Gracias por hacerme sentir reina.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      date: "Hace 1 mes",
    },
    {
      id: "t3",
      name: "Patricia Lora",
      role: "Cliente Semanal",
      service: "Manicura Rusa & Lifting de Pestañas",
      rating: 5,
      comment: "La pulcritud y esterilización que tienen es de otro nivel. Mis uñas duran 4 semanas perfectas sin levantarse. Siempre salgo renovada y llena de energía positiva.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      date: "Hace 3 semanas",
    },
  ] as TestimonialItem[],

  // ASISTENTE DE PREGUNTAS FRECUENTES (CHATBOT BÁSICO)
  faqChatbot: [
    {
      id: "faq-1",
      question: "¿Qué servicios ofrecen?",
      answer: "Ofrecemos una carta completa de belleza: Cortes & Peinados, Coloración experta (Balayage, Babylights), Manicura & Pedicura Spa, Maquillaje social y novias, Diseño de Cejas, Lifting de Pestañas y Tratamientos Faciales rejuvenecedores.",
      whatsappActionText: "Consultar por WhatsApp",
    },
    {
      id: "faq-2",
      question: "¿Dónde están ubicados?",
      answer: "Estamos en Piantini, Santo Domingo: Av. Abraham Lincoln #1052, Torre Lincoln Suite 4B (con parqueo cómodo y seguridad privada).",
      whatsappActionText: "Pedir ubicación por WhatsApp",
    },
    {
      id: "faq-3",
      question: "¿Cuál es el horario?",
      answer: "Atendemos de Lunes a Viernes de 9:00 AM a 7:30 PM, Sábados de 8:30 AM a 8:00 PM, y Domingos de 10:00 AM a 4:00 PM previa cita agendada.",
      whatsappActionText: "Consultar horario por WhatsApp",
    },
    {
      id: "faq-4",
      question: "¿Cómo puedo reservar?",
      answer: "Puedes reservar de forma instantánea escribiéndonos directamente a nuestro WhatsApp oficial con el día y servicio de tu preferencia.",
      whatsappActionText: "Reservar ahora por WhatsApp",
    },
    {
      id: "faq-5",
      question: "¿Cómo consulto los precios?",
      answer: "Para darte un presupuesto exacto y personalizado según el largo de tu cabello o la técnica deseada, puedes enviarnos una foto o consultar por WhatsApp sin compromiso.",
      whatsappActionText: "Solicitar cotización por WhatsApp",
    },
  ] as FaqItem[],

  // FICHA DE CONTACTO
  contactCard: {
    badge: "Atención Inmediata",
    title: "Contacto Directo",
    subtitle: "Aura Beauty Studio — Piantini",
    description: "Escanea el código QR con tu celular o haz clic para comunicarte directamente con nuestro equipo de atención.",
    callToAction: "Solicitar cotización por WhatsApp",
  },

  // QRMOON BRANDING & FOOTER
  qrmoon: {
    agencyName: "QRMOON",
    agencySlogan: "Digitalizamos negocios con presencia web moderna y soluciones de conversión inteligentes.",
    agencyWebsite: "https://qrmoon.com",
    badgeText: "Desarrollado por QRMOON",
  },

  // CONFIGURACIÓN SEO Y ANALYTICS
  seo: {
    siteTitle: "Aura Beauty Studio | Salón de Belleza Premium en Santo Domingo",
    siteDescription: "Salón de belleza en Piantini, Santo Domingo. Balayage, cuidado capilar, uñas spa, maquillaje profesional y faciales. Agenda tu cita fácilmente por WhatsApp.",
    keywords: "salon de belleza santo domingo, peluqueria piantini, balayage republica dominicana, unas spa santo domingo, maquillaje novias rd, estetica republica dominicana",
    author: "QRMOON Solutions",
    ogImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    url: "https://aurabeauty.qrmoon.do",
  },

  // ANALYTICS CONFIGURABLE
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
};

// HELPER PARA CONSTRUIR CUALQUIER ENLACE DE WHATSAPP CON EL FORMATO OFICIAL SOLICITADO
// FORMATO: ¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (nombre de la pagina - desde donde hizo click)
export function getWhatsAppUrl(source?: string): string {
  const number = businessConfig.whatsappNumber;
  const pageName = businessConfig.name; // "Aura Beauty Studio"
  const locationTag = source ? `(${pageName} - ${source})` : `(${pageName})`;
  const fullMessage = `${BASE_WHATSAPP_MESSAGE} ${locationTag}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(fullMessage)}`;
}
