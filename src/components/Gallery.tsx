"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { businessConfig, GalleryItem } from "@/config/businessConfig";
import LightboxModal from "./LightboxModal";
import { Sparkles, ZoomIn, Eye } from "lucide-react";

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
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-cream-200 border border-cream-200 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 aspect-[4/5]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-taupe-950/85 via-taupe-900/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag Pill Top Left */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-taupe-900 shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Zoom Icon Top Right */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-taupe-900/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <p className="text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1">
                  {item.categoryLabel}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-200 line-clamp-2 opacity-90">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-rose-300 font-semibold group-hover:text-white transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Haz clic para ver foto ampliada</span>
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
