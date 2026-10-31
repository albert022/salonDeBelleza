"use client";

import React from "react";
import { businessConfig } from "@/config/businessConfig";
import { Sparkles, ShieldCheck, Award, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-8 h-8 text-gold-500" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-rose-500" />,
    Award: <Award className="w-8 h-8 text-taupe-800" />,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 via-cream-100/50 to-cream-50 border-y border-cream-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-700 text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Nuestra Filosofía</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-taupe-900">
            ¿Por qué elegir {businessConfig.name}?
          </h2>
          <p className="text-sm sm:text-base text-taupe-700 font-normal">
            Creamos un santuario donde cada detalle está pensado para tu descanso, confianza y satisfacción total.
          </p>
        </div>

        {/* 3 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessConfig.benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="bg-white rounded-3xl p-8 border border-cream-200 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle accent index number */}
              <span className="absolute top-6 right-6 font-serif text-5xl font-bold text-cream-200 select-none group-hover:text-rose-100 transition-colors">
                0{index + 1}
              </span>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-cream-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[benefit.icon] || <Sparkles className="w-8 h-8 text-gold-500" />}
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-2xl font-bold text-taupe-900 mb-3 group-hover:text-rose-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-taupe-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
