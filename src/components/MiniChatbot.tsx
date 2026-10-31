"use client";

import React, { useState, useEffect, useRef } from "react";
import { businessConfig, FaqItem, getWhatsAppUrl } from "@/config/businessConfig";
import {
  X,
  Sparkles,
  MessageCircle,
  HelpCircle,
  RotateCcw,
  Bot,
  MapPin,
  Send,
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  faqItem?: FaqItem;
  time: string;
}

export default function MiniChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const initialMessages: ChatMessage[] = [
    {
      id: "initial-1",
      sender: "bot",
      text: `¡Hola! Bienvenida a ${businessConfig.name} en Santo Domingo ✨. Soy tu asistente virtual para responder tus dudas frecuentes en segundos.`,
      time: getCurrentTime(),
    },
    {
      id: "initial-2",
      sender: "bot",
      text: "Selecciona una de las preguntas frecuentes abajo o escribe tu consulta:",
      time: getCurrentTime(),
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  // Auto-scroll whenever messages change or typing state changes
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen, messages, isTyping]);

  const handleSelectFaq = (faq: FaqItem) => {
    // 1. Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: faq.question,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Realistic brief delay so the user sees the assistant responding
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `bot-${Date.now() + 1}`,
        sender: "bot",
        text: faq.answer,
        faqItem: faq,
        time: getCurrentTime(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 450);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const query = inputText.trim();
    setInputText("");

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Look for matching FAQ or provide helpful default
    const lower = query.toLowerCase();
    let matchedFaq = businessConfig.faqChatbot.find(
      (f) =>
        lower.includes(f.question.toLowerCase().replace(/[¿?]/g, "")) ||
        (lower.includes("precio") && f.id === "faq-5") ||
        (lower.includes("horario") && f.id === "faq-3") ||
        (lower.includes("ubicad") && f.id === "faq-2") ||
        (lower.includes("donde") && f.id === "faq-2") ||
        (lower.includes("servicio") && f.id === "faq-1") ||
        (lower.includes("reserva") && f.id === "faq-4") ||
        (lower.includes("cita") && f.id === "faq-4")
    );

    setTimeout(() => {
      setIsTyping(false);
      if (matchedFaq) {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: matchedFaq.answer,
            faqItem: matchedFaq,
            time: getCurrentTime(),
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: `Con gusto te atendemos de forma personalizada para tu consulta sobre "${query}". Puedes escribirnos directamente por WhatsApp para coordinar tu cita o cotización.`,
            time: getCurrentTime(),
          },
        ]);
      }
    }, 500);
  };

  const handleReset = () => {
    setMessages(initialMessages);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-white text-taupe-900 border border-cream-300 shadow-xl hover:shadow-2xl hover:border-gold-400 transition-all transform hover:-translate-y-1 group"
            aria-label="Abrir asistente de preguntas frecuentes"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                <Bot className="w-4 h-4 text-rose-600" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
            </div>
            <div className="text-left hidden sm:block">
              <span className="block text-xs font-bold text-taupe-900">Asistente Virtual</span>
              <span className="block text-[10px] text-taupe-500">Respuestas al instante</span>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="fixed bottom-6 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] bg-white rounded-3xl shadow-2xl border border-cream-200 overflow-hidden flex flex-col h-[560px] max-h-[85vh] animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-taupe-900 via-taupe-800 to-taupe-900 text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-gold-400/40 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-gold-300" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-taupe-900" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base leading-tight">
                  Asistente {businessConfig.name}
                </h4>
                <p className="text-[11px] text-gold-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  En línea • Respuesta inmediata
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                type="button"
                className="p-1.5 rounded-full text-cream-200 hover:text-white hover:bg-taupe-700 transition-colors"
                title="Reiniciar chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="p-1.5 rounded-full text-cream-200 hover:text-white hover:bg-taupe-700 transition-colors"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Body (Auto-scrolled) */}
          <div
            ref={messagesContainerRef}
            className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-cream-50/80 text-sm scroll-smooth"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-3.5 leading-relaxed text-xs sm:text-sm shadow-sm transition-all ${
                      msg.sender === "user"
                        ? "bg-rose-600 text-white rounded-br-xs font-medium"
                        : "bg-white text-taupe-900 border border-cream-200 rounded-bl-xs font-normal"
                    }`}
                  >
                    {msg.text}
                  </div>

                  <span className="text-[10px] text-taupe-400 px-1 mt-1">
                    {msg.time}
                  </span>

                  {/* Actions under the answer if bot replied with FAQ */}
                  {msg.faqItem && (
                    <div className="mt-2 space-y-1.5 w-full animate-in fade-in duration-300">
                      {msg.faqItem.id === "faq-2" && (
                        <a
                          href={businessConfig.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-rose-800 bg-rose-100 hover:bg-rose-200 transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5 text-rose-600" />
                          <span>Abrir ubicación en Google Maps</span>
                        </a>
                      )}
                      <a
                        href={getWhatsAppUrl(msg.faqItem ? `Chatbot - ${msg.faqItem.question}` : "Chatbot")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-200 shadow-sm transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Continuar por WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center justify-start animate-in fade-in duration-200">
                <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                </div>
                <div className="bg-white border border-cream-200 rounded-2xl rounded-bl-xs px-4 py-2.5 shadow-sm flex items-center gap-1.5 text-xs text-taupe-500">
                  <span className="font-medium text-[11px]">Escribiendo respuesta</span>
                  <div className="flex gap-1 items-center ml-1">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            )}

            {/* Auto-scroll target */}
            <div ref={messagesEndRef} className="h-1" />
          </div>

          {/* Quick FAQ Question Pills Header */}
          <div className="p-3 bg-white border-t border-cream-200 shrink-0">
            <p className="text-[11px] font-bold text-taupe-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
                <span>Preguntas frecuentes</span>
              </span>
              <span className="text-[10px] text-taupe-400 font-normal">Toca para responder</span>
            </p>
            <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {businessConfig.faqChatbot.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => handleSelectFaq(faq)}
                  type="button"
                  className="shrink-0 text-left text-xs px-3 py-1.5 rounded-full bg-cream-100 hover:bg-rose-100 text-taupe-800 hover:text-rose-700 border border-cream-200 transition-all font-medium active:scale-95"
                >
                  {faq.question}
                </button>
              ))}
            </div>

            {/* Input field to send custom question */}
            <form onSubmit={handleCustomSend} className="mt-1 flex items-center gap-2">
              <input
                type="text"
                placeholder="Escribe tu consulta..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-200 text-xs text-taupe-900 placeholder-taupe-400 focus:outline-none focus:border-rose-400"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-40 text-white transition-colors"
                aria-label="Enviar mensaje"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
