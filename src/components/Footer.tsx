"use client";

import React from "react";
import { businessConfig, getWhatsAppUrl } from "@/config/businessConfig";
import { Sparkles, MapPin, Phone, Instagram, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-taupe-900 text-cream-100 border-t border-taupe-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-taupe-800">
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-400 to-gold-400 p-[1.5px]">
                <div className="w-full h-full bg-taupe-900 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {businessConfig.name}
              </span>
            </div>

            <p className="text-sm text-cream-300 max-w-sm leading-relaxed font-normal">
              {businessConfig.subtitle}
            </p>

            <div className="pt-2 text-xs text-cream-400 space-y-2">
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold-300 transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{businessConfig.address}</span>
              </a>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{businessConfig.phoneDisplay}</span>
              </p>
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-300">
              <li>
                <a href="#inicio" className="hover:text-gold-300 transition-colors">
                  Inicio & Servicios
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-gold-300 transition-colors">
                  Catálogo de Servicios
                </a>
              </li>
              <li>
                <a href="#trabajos" className="hover:text-gold-300 transition-colors">
                  Portafolio de Trabajos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-gold-300 transition-colors">
                  Contacto & Cotizaciones
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Pie de Página")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1"
                >
                  <span>Chat Directo WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios & Redes (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Horarios en Salón
            </h4>
            <div className="space-y-2 text-xs text-cream-300">
              {businessConfig.schedule.map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-taupe-800/60 pb-1.5">
                  <span className="font-medium text-cream-200">{item.days}</span>
                  <span className="text-gold-400">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={businessConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-taupe-800 hover:bg-rose-600 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessConfig.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-taupe-800 hover:bg-rose-600 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <button
                onClick={scrollToTop}
                type="button"
                className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-taupe-800 hover:bg-gold-500 hover:text-taupe-950 text-xs font-medium text-cream-300 transition-colors"
                title="Volver arriba"
              >
                <span>Volver arriba</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom bar with QRMOON discreet agency credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {businessConfig.name} SRL. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-taupe-800/80 border border-taupe-700 text-cream-300">
            <span className="w-2 h-2 rounded-full bg-gold-400" />
            <span>
              Sitio web desarrollado por{" "}
              <a
                href={businessConfig.qrmoon.agencyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-gold-300 underline underline-offset-2 transition-colors"
              >
                {businessConfig.qrmoon.agencyName}
              </a>
              {" "}— Soluciones Digitales
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
