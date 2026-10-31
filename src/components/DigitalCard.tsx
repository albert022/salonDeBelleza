"use client";

import React, { useState } from "react";
import {
  businessConfig,
  getWhatsAppUrl,
} from "@/config/businessConfig";
import QRCodeDisplay from "./QRCodeDisplay";
import { Sparkles, Phone, MessageCircle, Share2, Check, QrCode, MapPin } from "lucide-react";

export default function DigitalCard() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"whatsapp" | "reviews">("whatsapp");

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappQRValue = getWhatsAppUrl("Tarjeta de Contacto - Código QR");
  const reviewQRValue = businessConfig.googleReviews.reviewUrl;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-luxury relative overflow-hidden">
      {/* Decorative top ribbon */}
      <div className="flex items-center justify-between pb-5 mb-5 border-b border-cream-200">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-400 to-gold-400 p-[1.5px]">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <QrCode className="w-4 h-4 text-rose-600" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-taupe-900 text-sm">
              {businessConfig.contactCard.title}
            </h4>
            <span className="text-[11px] text-rose-600 font-semibold tracking-wide">
              {businessConfig.contactCard.badge}
            </span>
          </div>
        </div>
        <button
          onClick={handleCopyLink}
          type="button"
          className="text-xs text-taupe-500 hover:text-rose-600 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-100 hover:bg-cream-200 transition-colors"
          title="Compartir enlace"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">¡Copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Compartir</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs: QR WhatsApp vs Google Review */}
      <div className="flex rounded-xl bg-cream-100 p-1 mb-5 text-xs font-semibold">
        <button
          onClick={() => setActiveTab("whatsapp")}
          type="button"
          className={`flex-1 py-2 rounded-lg transition-all ${
            activeTab === "whatsapp"
              ? "bg-white text-taupe-900 shadow-sm"
              : "text-taupe-600 hover:text-taupe-900"
          }`}
        >
          QR WhatsApp Directo
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          type="button"
          className={`flex-1 py-2 rounded-lg transition-all ${
            activeTab === "reviews"
              ? "bg-white text-taupe-900 shadow-sm"
              : "text-taupe-600 hover:text-taupe-900"
          }`}
        >
          QR Reseñas Google
        </button>
      </div>

      {/* Main card body */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* QR Code Container */}
        <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 shadow-sm">
          <QRCodeDisplay
            value={activeTab === "whatsapp" ? whatsappQRValue : reviewQRValue}
            size={160}
            alt={activeTab === "whatsapp" ? "QR WhatsApp Directo" : "QR Reseñas Google"}
          />
        </div>

        {/* Description */}
        <div className="space-y-1.5 max-w-sm">
          <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
            {businessConfig.name}
          </p>
          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 text-xs text-taupe-600 hover:text-rose-600 font-medium transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>{businessConfig.zone}, {businessConfig.city} (Ver en Google Maps)</span>
          </a>
          <p className="text-sm font-medium text-taupe-800 leading-snug">
            {businessConfig.contactCard.description}
          </p>
        </div>

        <p className="text-xs text-taupe-500 max-w-xs leading-relaxed">
          {activeTab === "whatsapp"
            ? "Escanea con la cámara de tu celular para abrir WhatsApp directamente y solicitar tu cotización."
            : "Escanea para abrir el perfil oficial en Google y calificar la experiencia."}
        </p>

        {/* Primary Action Button */}
        {activeTab === "whatsapp" ? (
          <a
            href={getWhatsAppUrl("Tarjeta de Contacto - Botón WhatsApp")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{businessConfig.contactCard.callToAction}</span>
          </a>
        ) : (
          <a
            href={businessConfig.googleReviews.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gold-500 hover:bg-gold-600 text-taupe-950 font-bold text-xs tracking-wider uppercase shadow-md transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Abrir enlace de Reseñas</span>
          </a>
        )}

        {/* Quick Contact shortcuts */}
        <div className="grid grid-cols-2 gap-2 w-full pt-1">
          <a
            href={getWhatsAppUrl("Tarjeta de Contacto - Acceso Rápido")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${businessConfig.whatsappNumber}`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cream-100 hover:bg-cream-200 text-taupe-800 border border-cream-200 text-xs font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-taupe-700" />
            <span>Llamar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
