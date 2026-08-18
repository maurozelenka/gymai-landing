"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, Zap, Bot, ShieldCheck, Database, Heart, Lock } from "lucide-react";

interface ComparisonRow {
  feature: string;
  category: string;
  gymai: string | boolean;
  traditional: string | boolean; // Hevy / Strong
  chatgpt: string | boolean;    // Generic ChatGPT
}

const comparisonData: ComparisonRow[] = [
  {
    category: "INTELIGENCIA EN CALIENTE",
    feature: "Sustitución en vivo por dolor o máquina ocupada",
    gymai: "Instantáneo con Gemini Flash",
    traditional: false,
    chatgpt: "Texto genérico sin contexto",
  },
  {
    category: "TELEMETRÍA & SENSORES",
    feature: "Sincronización nativa con Health Connect (VFC, Sueño, BPM)",
    gymai: true,
    traditional: "Limitado o de pago",
    chatgpt: false,
  },
  {
    category: "SOBRECARGA PROGRESIVA",
    feature: "Cálculo adaptativo de RPE, RIR y tonelaje semanal",
    gymai: "Algoritmo multi-agente",
    traditional: "Historial manual estático",
    chatgpt: false,
  },
  {
    category: "ARQUITECTURA & PRIVACIDAD",
    feature: "100% Offline-First sin necesidad de internet en el gimnasio",
    gymai: "Room DB + SQLite AES-256",
    traditional: "Sincronización en la nube",
    chatgpt: false,
  },
  {
    category: "VELOCIDAD & RENDIMIENTO",
    feature: "Tasa de refresco nativa y tiempo de arranque",
    gymai: "120 FPS (Jetpack Compose)",
    traditional: "60 FPS (Híbrido/React Native)",
    chatgpt: "N/A (Web/App lenta)",
  },
  {
    category: "MODELO DE PRECIOS",
    feature: "Registro completo de entrenamientos gratuito para siempre",
    gymai: "100% Gratis sin suscripción",
    traditional: "Límite de 3-4 rutinas",
    chatgpt: "Suscripción mensual 24€",
  },
];

export function ComparisonSection({ lang = "es" }: { lang?: "es" | "en" }) {
  return (
    <section id="comparison" className="relative z-10 py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-emerald-400 uppercase tracking-widest"
        >
          {lang === "es" ? "Comparativa Técnica de Rendimiento" : "Technical Performance Benchmark"}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f7f8f8] mt-3"
        >
          {lang === "es" ? "¿Por qué GymAI redefine tu progreso?" : "Why GymAI outperforms traditional apps"}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-[#8a8f98] mt-4 leading-relaxed"
        >
          {lang === "es"
            ? "Comparativa frente a apps de registro estático (Hevy, Strong) y asistentes de lenguaje genérico sin telemetría de sala."
            : "Benchmarked against static loggers (Hevy, Strong) and generic text bots lacking on-device sensor telemetry."}
        </motion.p>
      </div>

      {/* Modern Comparison Table (Zero Heavy Clutter, Sleek Editorial Lines) */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[720px] w-full text-left">
          
          {/* Table Column Headers */}
          <div className="grid grid-cols-12 pb-5 border-b border-white/[0.12] text-xs font-mono tracking-wider uppercase text-zinc-400">
            <div className="col-span-6 text-zinc-500 font-bold">
              {lang === "es" ? "CAPACIDAD TÉCNICA" : "TECHNICAL CAPABILITY"}
            </div>
            
            {/* GymAI Column (Highlighted) */}
            <div className="col-span-3 text-emerald-400 font-extrabold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>GymAI (Engine)</span>
            </div>

            {/* Traditional Apps Column */}
            <div className="col-span-3 text-zinc-500 font-medium">
              Hevy / Strong
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/[0.06]">
            {comparisonData.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="grid grid-cols-12 py-5 items-center hover:bg-white/[0.02] transition-colors group"
              >
                {/* Feature Name & Category */}
                <div className="col-span-6 pr-6">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider block mb-0.5">
                    {row.category}
                  </span>
                  <p className="text-sm font-semibold text-[#f7f8f8] group-hover:text-white transition-colors">
                    {row.feature}
                  </p>
                </div>

                {/* GymAI Column Value */}
                <div className="col-span-3 pr-4 flex items-center gap-2">
                  {typeof row.gymai === "boolean" ? (
                    row.gymai ? (
                      <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                        <Check size={14} />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-red-500/15 border border-red-400/40 flex items-center justify-center text-red-400">
                        <X size={14} />
                      </div>
                    )
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                        <Check size={12} />
                      </div>
                      <span className="text-xs font-bold text-emerald-300 font-sans">
                        {row.gymai}
                      </span>
                    </div>
                  )}
                </div>

                {/* Traditional Apps Column Value */}
                <div className="col-span-3 pr-4 flex items-center gap-2">
                  {typeof row.traditional === "boolean" ? (
                    row.traditional ? (
                      <div className="w-5 h-5 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-400">
                        <Check size={12} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-zinc-500">
                        <X size={12} />
                      </div>
                    )
                  ) : (
                    <span className="text-xs text-zinc-400 font-sans">
                      {row.traditional}
                    </span>
                  )}
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
