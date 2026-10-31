"use client";

import React from "react";
import Image from "next/image";
import { businessConfig, getWhatsAppUrl } from "@/config/businessConfig";
import { MessageCircle, Sparkles, Star, MapPin, CheckCircle, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-gradient-to-b from-cream-100/70 via-cream-50 to-cream-50">
      {/* Decorative ambient blurred orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-gold-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 hover:bg-rose-200/90 border border-rose-200/70 text-rose-700 text-xs sm:text-sm font-medium tracking-wide transition-colors group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-gold-600 group-hover:scale-110 transition-transform" />
              <span>Salón & Spa Exclusivo en {businessConfig.zone}, Santo Domingo</span>
            </a>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-taupe-900 tracking-tight leading-[1.15]">
              Realzamos tu belleza,{" "}
              <span className="relative inline-block text-rose-600">
                resaltamos tu esencia
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2.5 text-gold-400"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 2 247 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-taupe-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Disfruta de una experiencia de bienestar única con estilistas expertas, 
              productos de alta gama internacional y la atención cálida y personalizada que mereces en cada visita.
            </p>

            {/* Quick trust bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-taupe-700 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gold-600" />
                <span>Marcas internacionales certificadas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gold-600" />
                <span>Diagnóstico capilar personalizado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gold-600" />
                <span>Bebida y café de cortesía</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={getWhatsAppUrl("Inicio - Hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold text-base shadow-lg shadow-rose-600/25 hover:shadow-rose-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Reserva por WhatsApp</span>
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-cream-100 text-taupe-800 font-semibold text-base border border-cream-300 hover:border-gold-400 shadow-sm transition-all"
              >
                <span>Explorar servicios</span>
                <ArrowDown className="w-4 h-4 text-taupe-500" />
              </a>
            </div>

            {/* Trust badge: Google rating preview */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 border-t border-cream-200/80">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-cream-50 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Cliente satisfecha"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-cream-50 object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  alt="Cliente satisfecha"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-cream-50 object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                  alt="Cliente satisfecha"
                />
              </div>
              <div className="text-left text-xs sm:text-sm">
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="font-bold text-taupe-900 ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-taupe-500">
                  Más de 140 clientas felices en Santo Domingo
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-rose-300/40 via-gold-300/30 to-cream-200/50 blur-lg transform -rotate-1" />
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-white aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
                  alt="Aura Beauty Studio - Salón de belleza en Santo Domingo"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-taupe-900/60 via-transparent to-transparent" />

                {/* Bottom floating badge on the photo */}
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 hover:bg-white backdrop-blur-md border border-white/60 shadow-lg text-taupe-900 transition-all block group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-rose-600">
                        Espacio de belleza & calma
                      </p>
                      <p className="text-sm font-bold text-taupe-900 group-hover:text-rose-600 transition-colors flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        <span>{businessConfig.zone}, {businessConfig.city}</span>
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-400/20 text-gold-700 border border-gold-300">
                      Ver mapa 📍
                    </span>
                  </div>
                </a>
              </div>

              {/* Floating review card */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-white p-3.5 rounded-2xl shadow-xl border border-cream-200 hidden sm:flex items-center gap-3 max-w-[210px] animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-taupe-900">Servicio 5 Estrellas</p>
                  <p className="text-[11px] text-taupe-500">Cuidado capilar & spa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
