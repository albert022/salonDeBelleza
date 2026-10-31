"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { businessConfig, GalleryItem } from "@/config/businessConfig";
import LightboxModal from "./LightboxModal";
import { Sparkles, ZoomIn, Eye, ArrowRight } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "todos", label: "Todos los Trabajos" },
    { id: "cabello", label: "Cabello & Color" },
    { id: "unas", label: "Uñas Spa" },
    { id: "maquillaje", label: "Maquillaje" },
    { id: "cejas-pestanas", label: "Cejas & Pestañas" },
    { id: "faciales", label: "Faciales" },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "todos") return businessConfig.gallery;
    return businessConfig.gallery.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="trabajos" className="py-20 bg-cream-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portafolio Profesional</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-taupe-900">
            Nuestros Trabajos Realizados
          </h2>
          <p className="text-base sm:text-lg text-taupe-700 font-normal">
            Inspírate con nuestras transformaciones más recientes. Cada detalle está ejecutado con pasión, arte y técnicas de nivel internacional.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                    : "bg-white text-taupe-700 border border-cream-200 hover:border-gold-400 hover:bg-cream-100"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col group cursor-pointer bg-white border border-cream-200 shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
            >
              {/* Photo Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-cream-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle dark tint on hover */}
                <div className="absolute inset-0 bg-taupe-950/10 group-hover:bg-taupe-950/30 transition-colors duration-300" />

                {/* Tag Pill Top Left with High Contrast */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-taupe-950/85 text-white backdrop-blur-md shadow-md border border-white/20">
                    {item.tag}
                  </span>
                </div>

                {/* Hover Zoom Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="px-4 py-2 rounded-full bg-white text-taupe-900 text-xs font-bold shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 text-rose-600" />
                    <span>Ver foto ampliada</span>
                  </div>
                </div>
              </div>

              {/* Dedicated Content Container - 100% Solid & High Legibility */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white space-y-3">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[11px] font-medium text-taupe-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold-500" />
                      Resultado Real
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-taupe-900 leading-snug group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-taupe-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-cream-200 flex items-center justify-between text-xs">
                  <span className="text-taupe-500 font-medium flex items-center gap-1.5 group-hover:text-rose-600 transition-colors">
                    <Eye className="w-3.5 h-3.5 text-rose-500" />
                    <span>Clic para ampliar</span>
                  </span>
                  <span className="font-bold text-rose-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Ver look</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </section>
  );
}
