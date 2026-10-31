"use client";

import React from "react";
import { businessConfig, getWhatsAppUrl } from "@/config/businessConfig";
import { MessageCircle, Sparkles, Calendar } from "lucide-react";

export default function CallToActionBanner() {
  const waUrl = getWhatsAppUrl("Galería - Banner CTA");

  return (
    <section className="py-16 bg-taupe-900 text-cream-50 relative overflow-hidden">
      {/* Decorative luxury gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-taupe-800 border border-taupe-700 text-gold-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>Transforma tu estilo hoy</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          ¿Te gustaría un resultado así?{" "}
          <span className="text-gold-400">Escríbenos por WhatsApp</span>
        </h2>

        <p className="text-sm sm:text-base text-cream-200 max-w-2xl mx-auto font-normal leading-relaxed">
          Nuestras estilistas en {businessConfig.zone}, Santo Domingo están listas para escucharte, 
          evaluar tu cabello o necesidades de belleza y recomendarte el tratamiento perfecto.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold text-base shadow-xl shadow-rose-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-current text-white" />
            <span>Chatear por WhatsApp</span>
          </a>

          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-taupe-800 hover:bg-taupe-700 text-cream-100 font-semibold text-base border border-taupe-700 transition-colors"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Completar formulario web</span>
          </a>
        </div>
      </div>
    </section>
  );
}
