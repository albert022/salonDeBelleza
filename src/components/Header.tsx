"use client";

import React, { useState, useEffect } from "react";
import { businessConfig, getWhatsAppUrl } from "@/config/businessConfig";
import { Sparkles, Phone, Clock, MapPin, Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio & Servicios", href: "#inicio" },
    { name: "Trabajos Realizados", href: "#trabajos" },
    { name: "Contacto & Cotizaciones", href: "#contacto" },
  ];

  return (
    <>
      {/* Top micro-bar with location & hours (visible on md+) */}
      <div className="hidden lg:block bg-taupe-900 text-cream-100 text-xs py-2 px-6 border-b border-taupe-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cream-200 hover:text-gold-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>{businessConfig.zone}, {businessConfig.city}</span>
            </a>
            <span className="flex items-center gap-1.5 text-cream-200">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              Lun - Sáb: 9:00 AM – 7:30 PM
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gold-400 font-medium">Atención VIP por cita</span>
            <span className="text-cream-300">|</span>
            <a
              href={getWhatsAppUrl("Encabezado - Teléfono")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cream-100 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              {businessConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main fixed header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-md border-b border-cream-200"
            : "bg-cream-50/95 py-5 border-b border-cream-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-400 to-gold-400 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-cream-50 rounded-full flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                <Sparkles className="w-5 h-5 text-gold-600" />
              </div>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-taupe-900 group-hover:text-rose-600 transition-colors">
                {businessConfig.name}
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-taupe-500 font-semibold -mt-1">
                Santo Domingo • Salón & Spa
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-taupe-700 hover:text-rose-600 tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-rose-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Encabezado - Botón Reserva")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Reserva WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl("Menú Móvil - Icono")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-rose-600 hover:text-rose-700"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-6 h-6 fill-rose-600 text-rose-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-taupe-700 hover:text-taupe-900 hover:bg-cream-100 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream-50/98 border-b border-cream-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-taupe-800 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-cream-200">
                <a
                  href={getWhatsAppUrl("Menú Móvil - Botón Reserva")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Reserva por WhatsApp</span>
                </a>
              </div>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center pt-2 text-xs text-taupe-600 hover:text-rose-600 transition-colors"
              >
                📍 {businessConfig.address}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
