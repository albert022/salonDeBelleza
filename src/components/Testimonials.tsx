"use client";

import React from "react";
import Image from "next/image";
import { businessConfig } from "@/config/businessConfig";
import { Star, MessageSquareQuote, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviewsConfig = businessConfig.googleReviews;

  return (
    <section className="py-20 bg-cream-100/60 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-700 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span>Experiencias Reales</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-taupe-900">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-sm sm:text-base text-taupe-700">
            La confianza de quienes nos visitan es nuestra mejor recomendación.
          </p>

          {/* Verified Reviews Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-cream-300 text-xs text-taupe-700 font-medium shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{reviewsConfig.note}</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessConfig.testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-3xl p-7 border border-cream-200 shadow-luxury hover:shadow-luxury-hover transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header of review: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-rose-300" />
                </div>

                {/* Service Tag */}
                <span className="inline-block text-[11px] font-semibold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full mb-3">
                  {testi.service}
                </span>

                {/* Comment */}
                <p className="text-sm text-taupe-700 leading-relaxed italic">
                  &ldquo;{testi.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-cream-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-cream-200 bg-cream-100">
                    <Image
                      src={testi.avatar}
                      alt={testi.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-taupe-900 flex items-center gap-1">
                      {testi.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 inline" />
                    </h4>
                    <p className="text-xs text-taupe-500">{testi.role}</p>
                  </div>
                </div>
                <span className="text-[11px] text-taupe-400">{testi.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Connection Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-cream-200 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-cream-100 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <span className="font-bold text-taupe-900 text-sm">Reseñas en Google</span>
                <span className="text-gold-600 font-bold text-sm">★ {reviewsConfig.rating}</span>
                <span className="text-taupe-500 text-xs">({reviewsConfig.totalReviews} opiniones)</span>
              </div>
              <p className="text-xs text-taupe-600 mt-0.5">
                Enlace directo y configurable al perfil oficial de Google del negocio.
              </p>
            </div>
          </div>

          <a
            href={reviewsConfig.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-taupe-800 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors shrink-0"
          >
            <span>Ver reseñas en Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
