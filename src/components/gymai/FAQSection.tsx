"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  tag: string;
}

const faqs: FAQItem[] = [
  {
    id: "offline",
    question: "¿Necesito conexión a internet en el gimnasio para entrenar?",
    questionEn: "Do I need an internet connection at the gym to train?",
    answer: "No. GymAI está diseñado con arquitectura 100% Offline-First. Tu catálogo de ejercicios, registro de series, cálculo de pesos y base de datos Room DB residen localmente en tu teléfono. Solo requiere conexión si decides consultar al agente generativo o sincronizar con la nube.",
    answerEn: "No. GymAI is engineered 100% Offline-First. Your routine library, set logs, plate math, and Room SQLite database live on-device. Network access is only used when querying the generative Gemini agent or syncing to the cloud.",
    tag: "ARQUITECTURA"
  },
  {
    id: "health_connect",
    question: "¿Cómo lee GymAI mis pulsaciones y horas de sueño?",
    questionEn: "How does GymAI read my heart rate and sleep data?",
    answer: "A través del estándar oficial de Android: Health Connect SDK. GymAI se conecta de forma segura a cualquier reloj o pulsera (Garmin, Samsung Galaxy Watch, Google Pixel Watch, Xiaomi, Whoop, Oura) sin requerir hardware propietario ni suscripciones adicionales.",
    answerEn: "Via the official Android Health Connect SDK. GymAI securely interfaces with any smartwatch or fitness tracker (Garmin, Galaxy Watch, Pixel Watch, Xiaomi, Whoop, Oura) with zero proprietary vendor lock-in or extra subscriptions.",
    tag: "SENSORES"
  },
  {
    id: "gemini_agent",
    question: "¿En qué se diferencia el Agente Gemini de un bot de ChatGPT común?",
    questionEn: "How does the Gemini Agent differ from a standard ChatGPT bot?",
    answer: "No es un simple generador de texto: es un agente cognitivo multi-paso conectado a tu base de datos de entrenamiento. Analiza tu volumen de carga semanal, fatiga acumulada, velocidad de ejecución y RPE previo para tomar decisiones y sustituir ejercicios de forma biomecánicamente equivalente.",
    answerEn: "It is an autonomous multi-step reasoning agent integrated into your local workout telemetry. It evaluates weekly tonnage, accumulated fatigue, barbell velocity, and historical RPE to compute adaptive recommendations and biomechanical swaps.",
    tag: "IA ADAPTATIVA"
  },
  {
    id: "privacy",
    question: "¿Qué ocurre con la privacidad de mis datos biométricos?",
    questionEn: "What happens to my biometric data and health privacy?",
    answer: "Tus métricas de salud (frecuencia cardíaca, VFC, sueño y peso corporal) se almacenan cifradas en SQLite bajo el estándar AES-256 en tu propio almacenamiento interno. GymAI jamás vende ni comparte datos biométricos con terceros ni plataformas publicitarias.",
    answerEn: "Your health metrics (heart rate, HRV, sleep cycles, body weight) are stored encrypted via AES-256 in your local phone storage. GymAI never sells or shares biometric data with third-party advertisers.",
    tag: "SEGURIDAD"
  },
  {
    id: "requirements",
    question: "¿Cuáles son los requisitos mínimos para instalar la app?",
    questionEn: "What are the minimum requirements to install the app?",
    answer: "Cualquier smartphone Android con versión 8.0 (Oreo) o superior con soporte para los Servicios de Google Play y la app Health Connect instalada. La interfaz corre a 120 Hz gracias al motor nativo Jetpack Compose.",
    answerEn: "Any Android smartphone running Android 8.0 (Oreo) or higher with Google Play Services and Health Connect. The UI renders at 120 FPS powered by native Jetpack Compose.",
    tag: "COMPATIBILIDAD"
  }
];

export function FAQSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const [openId, setOpenId] = useState<string | null>("offline");

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative z-10 py-24 sm:py-36 px-6 sm:px-12 max-w-4xl mx-auto border-t border-white/[0.04]">
      
      {/* Header (Linear / Apple Minimalist Style) */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-emerald-400 uppercase tracking-widest"
        >
          {lang === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f7f8f8] mt-3"
        >
          {lang === "es" ? "Todo lo que necesitas saber." : "Everything you need to know."}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-[#8a8f98] mt-4 leading-relaxed"
        >
          {lang === "es"
            ? "Detalles técnicos, privacidad biométrica y funcionamiento del motor de inferencia."
            : "Technical architecture, biometric privacy, and inference engine details."}
        </motion.p>
      </div>

      {/* Zero-Card Accordion List (Ultra Clean Dividers) */}
      <div className="divide-y divide-white/[0.08] text-left">
        {faqs.map((faq, idx) => {
          const isOpen = openId === faq.id;

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="py-6 sm:py-7 group cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider hidden sm:inline-block">
                    {faq.tag}
                  </span>
                  <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-200 ${
                    isOpen ? "text-emerald-400" : "text-[#f7f8f8] group-hover:text-white"
                  }`}>
                    {lang === "es" ? faq.question : faq.questionEn}
                  </h3>
                </div>

                {/* Plus / Minus Toggle Button */}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                  isOpen 
                    ? "bg-emerald-400 text-black rotate-180 shadow-[0_0_12px_rgba(52,211,153,0.5)]" 
                    : "bg-white/[0.04] text-zinc-400 group-hover:text-white group-hover:bg-white/[0.08]"
                }`}>
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </div>

              {/* Collapsible Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm text-[#8a8f98] leading-relaxed pt-4 sm:pl-[85px] max-w-2xl font-normal">
                      {lang === "es" ? faq.answer : faq.answerEn}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
