"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { GalleryItem, getWhatsAppUrl } from "@/config/businessConfig";
import { X, MessageCircle, Sparkles } from "lucide-react";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const getPersonalizationText = () => {
    switch (item.category) {
      case "faciales":
        return "Este tratamiento se personaliza según tu tipo de piel, nivel de hidratación y necesidades específicas de tu rostro.";
      case "unas":
        return "Este diseño se personaliza según la forma de tus uñas, tono de piel y acabado preferido (gel, acrílico o semipermanente).";
      case "maquillaje":
        return "Este look se adapta a tu tonalidad de piel, morfología facial, iluminación del evento y estilo personal.";
      case "cejas-pestanas":
        return "Este diseño se adapta a la simetría de tus facciones, longitud de tu pestaña natural y efecto deseado.";
      case "cabello":
      default:
        return "Este resultado se adapta a la tonalidad, morfología facial y salud de tu fibra capilar.";
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-taupe-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-cream-50 rounded-3xl overflow-hidden shadow-2xl border border-cream-200 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-taupe-900/60 hover:bg-taupe-900 text-white backdrop-blur-sm transition-all shadow-lg"
          aria-label="Cerrar vista ampliada"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Enlarged Photo Container */}
        <div className="relative w-full md:w-3/5 h-72 md:h-auto min-h-[340px] bg-taupe-900">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>

        {/* Details & CTA Column */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.categoryLabel}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-taupe-900">
              {item.title}
            </h3>

            <p className="text-sm text-taupe-700 leading-relaxed">
              {item.description}
            </p>

            <div className="p-3.5 rounded-2xl bg-cream-50 border border-cream-200 text-xs text-taupe-600">
              ✨ <strong>Personalización:</strong> {getPersonalizationText()}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-cream-200 space-y-3">
            <a
              href={getWhatsAppUrl(`Galería: ${item.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full font-semibold text-sm text-white bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Quiero este look por WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              type="button"
              className="w-full py-2.5 text-xs text-taupe-500 hover:text-taupe-800 transition-colors"
            >
              Volver a la galería
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
