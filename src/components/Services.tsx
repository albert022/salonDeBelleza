"use client";

import React from "react";
import Image from "next/image";
import { businessConfig, getWhatsAppUrl, ServiceItem } from "@/config/businessConfig";
import { Clock, MessageCircle, Sparkles, ChevronRight } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-cream-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestros Servicios Exclusivos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-taupe-900">
            Diseñados para realzar tu belleza única
          </h2>
          <p className="text-base sm:text-lg text-taupe-700 font-normal">
            Descubre nuestra gama completa de cuidados capilares, estética de manos y pies, 
            maquillaje y tratamientos faciales con los más altos estándares de higiene y técnica.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessConfig.services.map((service: ServiceItem) => {
            const waLink = getWhatsAppUrl(`Servicios: ${service.title}`);

            return (
              <div
                key={service.id}
                className="luxury-card rounded-3xl overflow-hidden flex flex-col group"
              >
                {/* Service Image */}
                <div className="relative h-64 w-full overflow-hidden bg-cream-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-taupe-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Duration pill */}
                  <div className="absolute top-3.5 right-3.5 bg-taupe-950/85 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 shadow-md border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-taupe-900 group-hover:text-rose-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-taupe-700 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Pricing Reference & WhatsApp CTA */}
                  <div className="pt-4 border-t border-cream-200/80 space-y-3">
                    <div className="flex items-center justify-between text-xs text-taupe-500">
                      <span className="font-medium">Cotización personalizada</span>
                      <span className="font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full">
                        {service.priceNote}
                      </span>
                    </div>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white bg-taupe-800 hover:bg-rose-600 shadow-sm transition-all duration-300 group-hover:shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-current text-gold-400 group-hover:text-white transition-colors" />
                      <span>Consultar precio</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-70 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing information note */}
        <div className="mt-12 text-center text-xs text-taupe-600 max-w-xl mx-auto bg-cream-100/60 p-4 rounded-2xl border border-cream-200">
          ✨ <strong>Nota sobre cotizaciones:</strong> Los precios finales se confirman tras la valoración personalizada de tu estilo en nuestro salón. Haz clic en <em>&quot;Consultar precio&quot;</em> para recibir atención directa por WhatsApp.
        </div>
      </div>
    </section>
  );
}
