"use client";

import React, { useState } from "react";
import { businessConfig, getWhatsAppUrl } from "@/config/businessConfig";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const waUrl = getWhatsAppUrl("Botón Flotante");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white rounded-2xl p-3.5 shadow-2xl border border-cream-200 text-xs text-taupe-800 animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            type="button"
            className="absolute top-2 right-2 text-taupe-400 hover:text-taupe-700 p-0.5"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 pr-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-bold text-taupe-900">¿Deseas agendar tu cita?</span>
          </div>
          <p className="mt-1 text-taupe-600 text-[11px] leading-tight">
            Escríbenos por WhatsApp y te atendemos de inmediato en {businessConfig.name}.
          </p>
        </div>
      )}

      {/* Main floating action button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp oficial del salón"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:shadow-[#25D366]/50 transition-all transform hover:scale-110 active:scale-95 group"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 text-[9px] font-bold text-white items-center justify-center">
            1
          </span>
        </span>
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
