"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: string;
  priceAnnual: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export function PricingSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers: PricingTier[] = [
    {
      id: "free",
      name: lang === "es" ? "Comunidad & Offline" : "Community & Offline",
      priceMonthly: "0€",
      priceAnnual: "0€",
      period: lang === "es" ? "Para siempre gratis" : "Free forever",
      desc: lang === "es" 
        ? "Perfecto para registrar series, calcular discos y entrenar 100% offline."
        : "Ideal for logging sets, barbell plate math, and 100% offline tracking.",
      features: [
        lang === "es" ? "Registro ilimitado de entrenamientos" : "Unlimited workout logging",
        lang === "es" ? "Base de datos Room DB local cifrada" : "Encrypted on-device Room SQLite database",
        lang === "es" ? "Sincronización con Health Connect SDK" : "Health Connect SDK background sync",
        lang === "es" ? "Feed social y validación de PRs" : "Social feed & verified PRs",
        lang === "es" ? "Calculadora de discos olímpicos" : "Olympic barbell plate calculator"
      ],
      cta: lang === "es" ? "Comenzar Gratis" : "Get Started Free",
      popular: false
    },
    {
      id: "pro",
      name: lang === "es" ? "GymAI Pro Agent" : "GymAI Pro Agent",
      badge: lang === "es" ? "MÁS POPULAR" : "MOST POPULAR",
      priceMonthly: "9.99€",
      priceAnnual: "6.99€",
      period: lang === "es" ? "al mes (facturado anualmente)" : "per month (billed annually)",
      desc: lang === "es"
        ? "El agente autónomo Google Gemini Flash razona sobre tu fatiga en tiempo real."
        : "Google Gemini Flash autonomous agent reasoning on your fatigue in real-time.",
      features: [
        lang === "es" ? "Todo lo incluido en el plan Gratis" : "Everything in Free plan",
        lang === "es" ? "Consultas ilimitadas al Agente Gemini Flash" : "Unlimited Google Gemini Flash agent queries",
        lang === "es" ? "Sustitución en caliente por molestia o máquina ocupada" : "Live biomechanical swap for busy machines or discomfort",
        lang === "es" ? "Ajuste dinámico de RPE y sobrecarga semanal" : "Adaptive weekly overload and real-time RPE tuning",
        lang === "es" ? "Análisis de calidad de sueño y recuperación" : "Deep sleep & HRV physiological recovery analysis",
        lang === "es" ? "Soporte prioritario y acceso anticipado a betas" : "Priority support & early beta access"
      ],
      cta: lang === "es" ? "Probar 14 Días Gratis" : "Start 14-Day Free Trial",
      popular: true
    },
    {
      id: "lifetime",
      name: lang === "es" ? "Licencia Lifetime" : "Lifetime License",
      badge: lang === "es" ? "PAGO ÚNICO" : "ONE-TIME",
      priceMonthly: "129€",
      priceAnnual: "129€",
      period: lang === "es" ? "Acceso de por vida sin cuotas" : "Lifetime access, zero monthly fees",
      desc: lang === "es"
        ? "Para atletas comprometidos que quieren todas las funciones de IA para siempre."
        : "For dedicated lifters wanting all current and future AI features forever.",
      features: [
        lang === "es" ? "Todas las funciones Pro de por vida" : "All Pro features for life",
        lang === "es" ? "Token quota dedicada de Gemini 1.5 Pro" : "Dedicated Gemini 1.5 Pro token quota",
        lang === "es" ? "Exportación avanzada de telemetría a CSV / JSON" : "Advanced raw telemetry export (CSV / JSON)",
        lang === "es" ? "Insignia Fundador en tu perfil comunitario" : "Founder badge on community profile",
        lang === "es" ? "Actualizaciones mayores garantizadas" : "All future major updates included"
      ],
      cta: lang === "es" ? "Obtener Licencia Vitalicia" : "Get Lifetime Access",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative z-10 py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-emerald-400 uppercase tracking-widest"
        >
          {lang === "es" ? "Planes Transparentes" : "Simple Transparent Pricing"}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f7f8f8] mt-3"
        >
          {lang === "es" ? "Invierte en tu rendimiento." : "Invest in your performance."}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-[#8a8f98] mt-4 leading-relaxed"
        >
          {lang === "es" 
            ? "Sin letra pequeña ni costes ocultos. Comienza gratis y escala al agente de IA cuando lo necesites."
            : "No hidden fees. Start free and upgrade to the autonomous AI agent whenever you are ready."}
        </motion.p>

        {/* Monthly / Annual Toggle Switch */}
        <div className="inline-flex items-center gap-3 p-1 rounded-full bg-[#0d1410] border border-white/[0.08] mt-8 text-xs font-medium">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
              !isAnnual 
                ? "bg-white/[0.12] text-white shadow-sm font-semibold" 
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {lang === "es" ? "Mensual" : "Monthly"}
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
              isAnnual 
                ? "bg-emerald-400 text-black shadow-[0_0_15px_rgba(52,211,153,0.4)] font-bold" 
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>{lang === "es" ? "Anual" : "Annual"}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isAnnual ? "bg-black/20 text-black" : "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20"}`}>
              {lang === "es" ? "-30% DTO" : "30% OFF"}
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Columns (Zero-Card Clean Linear Grid with Subtle Highlight on Pro) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
        {tiers.map((tier, idx) => {
          const isPro = tier.popular;
          const displayPrice = isAnnual ? tier.priceAnnual : tier.priceMonthly;

          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                isPro
                  ? "bg-[#0b1510] border-2 border-emerald-400/50 shadow-[0_0_50px_rgba(16,185,129,0.15)] lg:-translate-y-2"
                  : "bg-[#080d0a]/60 border border-white/[0.08] hover:border-white/[0.18]"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-emerald-400 text-black text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                  {tier.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px] mb-6">
                  {tier.desc}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                    {displayPrice}
                  </span>
                  {tier.id !== "free" && tier.id !== "lifetime" && (
                    <span className="text-xs text-zinc-400 font-mono">
                      / {lang === "es" ? "mes" : "mo"}
                    </span>
                  )}
                </div>
                <p className="text-[11px] font-mono text-zinc-500 mb-8">
                  {tier.period}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-3.5 mb-8 border-t border-white/[0.06] pt-6 text-xs text-zinc-300">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <Check size={11} />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3 px-5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isPro
                    ? "bg-emerald-400 hover:bg-emerald-300 text-black shadow-[0_0_25px_rgba(52,211,153,0.4)]"
                    : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]"
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight size={14} />
              </button>

            </motion.div>
          );
        })}
      </div>

      {/* Trust & Guarantee Note */}
      <div className="mt-14 flex items-center justify-center gap-6 text-xs text-zinc-500 font-mono">
        <span className="flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Garantía de reembolso 30 días</span>
        </span>
        <span>•</span>
        <span>Cancela en cualquier momento</span>
        <span>•</span>
        <span>Sin permanencia</span>
      </div>

    </section>
  );
}
