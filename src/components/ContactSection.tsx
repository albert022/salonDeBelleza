"use client";

import React, { useState } from "react";
import { businessConfig, getWhatsAppUrl } from "@/config/businessConfig";
import DigitalCard from "./DigitalCard";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Sparkles,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<{
    nombre?: string;
    telefono?: string;
    servicio?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: {
      nombre?: string;
      telefono?: string;
      servicio?: string;
    } = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "Por favor ingresa tu nombre completo.";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "Por favor ingresa tu número de WhatsApp o teléfono.";
    } else if (formData.telefono.replace(/\D/g, "").length < 8) {
      newErrors.telefono = "Ingresa un número telefónico válido (ej. 829-499-4321).";
    }

    if (!formData.servicio) {
      newErrors.servicio = "Por favor selecciona el servicio de tu interés.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(true);

    // Abre WhatsApp con el mensaje oficial solicitado indicando el origen
    if (typeof window !== "undefined") {
      const sourceTag = formData.servicio
        ? `Formulario de Contacto (${formData.servicio})`
        : "Formulario de Contacto";
      window.open(getWhatsAppUrl(sourceTag), "_blank");
    }
  };

  return (
    <section id="contacto" className="py-20 bg-cream-100/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atención Personalizada</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-taupe-900">
            Contacto & Cotizaciones
          </h2>
          <p className="text-base sm:text-lg text-taupe-700 font-normal">
            Estamos ubicadas en el corazón de Piantini. Escríbenos o visítanos para brindarte un servicio inigualable.
          </p>
        </div>

        {/* 2-Columns Layout: Form + Contact Info & Digital Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-cream-200 shadow-luxury">
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-bold text-taupe-900">
                Envíanos tu solicitud
              </h3>
              <p className="text-sm text-taupe-600 mt-1">
                Completa tus datos y el botón preparará automáticamente tu mensaje en WhatsApp para coordinar tu cita o responder a tus preguntas al instante.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field: Nombre */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-taupe-800 mb-2">
                  Nombre Completo <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej. Carolina Medina"
                  value={formData.nombre}
                  onChange={(e) => {
                    setFormData({ ...formData, nombre: e.target.value });
                    if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl border bg-cream-50/50 text-taupe-900 placeholder-taupe-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.nombre
                      ? "border-rose-400 focus:ring-rose-200"
                      : "border-cream-300 focus:border-rose-400 focus:ring-rose-100"
                  }`}
                />
                {errors.nombre && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.nombre}</span>
                  </p>
                )}
              </div>

              {/* Field: Teléfono */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-taupe-800 mb-2">
                  WhatsApp / Teléfono <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-taupe-500">
                    🇩🇴 +1
                  </span>
                  <input
                    type="tel"
                    placeholder="829 499 4321"
                    value={formData.telefono}
                    onChange={(e) => {
                      setFormData({ ...formData, telefono: e.target.value });
                      if (errors.telefono) setErrors({ ...errors, telefono: undefined });
                    }}
                    className={`w-full pl-16 pr-4 py-3.5 rounded-xl border bg-cream-50/50 text-taupe-900 placeholder-taupe-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.telefono
                        ? "border-rose-400 focus:ring-rose-200"
                        : "border-cream-300 focus:border-rose-400 focus:ring-rose-100"
                    }`}
                  />
                </div>
                {errors.telefono && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.telefono}</span>
                  </p>
                )}
              </div>

              {/* Field: Servicio de Interés */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-taupe-800 mb-2">
                  Servicio de Interés <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.servicio}
                  onChange={(e) => {
                    setFormData({ ...formData, servicio: e.target.value });
                    if (errors.servicio) setErrors({ ...errors, servicio: undefined });
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl border bg-cream-50/50 text-taupe-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.servicio
                      ? "border-rose-400 focus:ring-rose-200"
                      : "border-cream-300 focus:border-rose-400 focus:ring-rose-100"
                  }`}
                >
                  <option value="">Selecciona un servicio...</option>
                  {businessConfig.services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.duration})
                    </option>
                  ))}
                  <option value="Consulta general / Múltiples servicios">
                    Consulta general / Múltiples servicios
                  </option>
                </select>
                {errors.servicio && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.servicio}</span>
                  </p>
                )}
              </div>

              {/* Field: Mensaje Adicional */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-taupe-800 mb-2">
                  Mensaje o Día Preferido (Opcional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos si tienes alguna fecha en mente, estado actual de tu cabello o preguntas específicas..."
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50/50 text-taupe-900 placeholder-taupe-400 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-base shadow-lg shadow-rose-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>Enviar solicitud por WhatsApp</span>
              </button>

              {/* Informational notice */}
              <div className="rounded-xl bg-cream-100/70 p-3.5 border border-cream-200 text-xs text-taupe-600 flex items-start gap-2">
                <span className="text-gold-600 font-bold shrink-0">✨</span>
                <span>
                  Al hacer clic en <em>&quot;Enviar solicitud por WhatsApp&quot;</em>, se abrirá directamente la conversación para coordinar tu cita y cotización al instante.
                </span>
              </div>
            </form>
          </div>

          {/* Right Column (5 cols): Info & QR Digital Card */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-luxury space-y-6">
              <h3 className="font-serif text-2xl font-bold text-taupe-900 border-b border-cream-200 pb-4">
                Información del Salón
              </h3>

              <div className="space-y-5">
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-700 fill-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-taupe-500 uppercase">WhatsApp de Citas</p>
                    <a
                      href={getWhatsAppUrl("Contacto - Datos")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-taupe-900 hover:text-emerald-700 transition-colors"
                    >
                      {businessConfig.phoneDisplay}
                    </a>
                    <p className="text-xs text-emerald-600 font-medium">Respuesta rápida</p>
                  </div>
                </div>

                {/* Dirección y Ubicación Google Maps */}
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 -mx-3 rounded-2xl hover:bg-cream-50 transition-colors group block"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0 group-hover:bg-rose-200 transition-colors">
                    <MapPin className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-taupe-500 uppercase flex items-center gap-1">
                      <span>Ubicación</span>
                      <ExternalLink className="w-3 h-3 text-taupe-400 group-hover:text-rose-600 transition-colors" />
                    </p>
                    <p className="text-sm font-semibold text-taupe-900 leading-snug group-hover:text-rose-600 transition-colors mt-0.5">
                      {businessConfig.address}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-rose-600 font-semibold mt-1 group-hover:underline">
                      <span>Abrir en Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>

                {/* Horarios */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-taupe-700" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-taupe-500 uppercase">Horarios de Atención</p>
                    <ul className="mt-1 space-y-1 text-xs text-taupe-800">
                      {businessConfig.schedule.map((item, i) => (
                        <li key={i} className="flex justify-between">
                          <span className="font-medium">{item.days}:</span>
                          <span className="text-taupe-600">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="pt-2 border-t border-cream-200 flex items-center gap-3">
                  <span className="text-xs font-semibold text-taupe-500 uppercase">Síguenos:</span>
                  <a
                    href={businessConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-100 hover:bg-rose-50 text-taupe-800 hover:text-rose-600 text-xs font-semibold transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={businessConfig.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-100 hover:bg-rose-50 text-taupe-800 hover:text-rose-600 text-xs font-semibold transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Digital Card QRMOON Widget */}
            <DigitalCard />
          </div>
        </div>
      </div>
    </section>
  );
}
