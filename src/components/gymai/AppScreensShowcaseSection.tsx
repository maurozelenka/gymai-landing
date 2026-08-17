"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Activity, 
  Sparkles, 
  Dumbbell, 
  Users, 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Zap
} from "lucide-react";

interface FeatureFlow {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  highlights: {
    title: string;
    desc: string;
  }[];
  stat: {
    value: string;
    label: string;
  };
}

const flows: FeatureFlow[] = [
  {
    id: "agent_chat",
    badge: "01 • AGENTE CONVERSACIONAL",
    title: "Asistente IA que razona en lenguaje natural",
    subtitle: "Conversa con el agente sobre tus sensaciones musculares, fatiga articular o dudas sobre rangos de hipertrofia. Recibe respuestas adaptadas a tu historial.",
    imageSrc: "/images/app/Asistente_IA.png",
    highlights: [
      {
        title: "Inferencia en Contexto Real",
        desc: "El agente sabe qué ejercicios hiciste ayer y ajusta sus respuestas a tu fatiga actual."
      },
      {
        title: "Multi-modal & Rápido",
        desc: "Procesamiento ultrarrápido con Google Gemini Flash para darte pautas antes de tu siguiente serie."
      }
    ],
    stat: {
      value: "< 350ms",
      label: "Latencia media de respuesta"
    }
  },
  {
    id: "smart_swap",
    badge: "02 • ADAPTACIÓN EN CALIENTE",
    title: "Sustitución inteligente de ejercicios al instante",
    subtitle: "¿Máquina ocupada o molestia en el hombro? El agente busca variantes biomecánicamente equivalentes en tu catálogo de Room DB.",
    imageSrc: "/images/app/Asistente_IA_Sustitucion.png",
    highlights: [
      {
        title: "Equivalencia de Curva de Resistencia",
        desc: "Sustituye Press Militar con barra por Elevaciones en Polea manteniendo el volumen efectivo del deltoides."
      },
      {
        title: "Recálculo de Cargas",
        desc: "Ajusta automáticamente los kilogramos estimados para el nuevo ejercicio según tu historial."
      }
    ],
    stat: {
      value: "100%",
      label: "Compatibilidad biomecánica"
    }
  },
  {
    id: "live_workout",
    badge: "03 • EJECUCIÓN OPTIMIZADA",
    title: "Registro de series a velocidad de competición",
    subtitle: "Interfaz táctil de alto contraste diseñada para gimnasios con iluminación tenue. Registra peso, repeticiones efectivas y RPE en un tap.",
    imageSrc: "/images/app/Rutinas_Empezar_Serie.png",
    highlights: [
      {
        title: "Calculadora de RPE & RIR",
        desc: "Estima automáticamente cuántas repeticiones te quedaron en recámara para clavar la intensidad."
      },
      {
        title: "Temporizador Háptico",
        desc: "Vibración precisa en tu bolsillo cuando finaliza el descanso para maximizar la densidad de trabajo."
      }
    ],
    stat: {
      value: "1 Tap",
      label: "Para registrar serie y descanso"
    }
  },
  {
    id: "biometrics",
    badge: "04 • HEALTH CONNECT SYNC",
    title: "Perfil de salud y recuperación biológica",
    subtitle: "Integración nativa con Health Connect para sincronizar tus pasos diarios, calorías activas, horas de sueño profundo y variabilidad del pulso (VFC).",
    imageSrc: "/images/app/Perfil_Salud.png",
    highlights: [
      {
        title: "Lectura de Calidad de Sueño",
        desc: "Si dormiste menos de 6 horas, el agente reduce un 5% el volumen de la sesión para evitar sobreentrenamiento."
      },
      {
        title: "Privacidad Total (Zero Cloud Leak)",
        desc: "Tus datos de salud se almacenan cifrados en tu teléfono y nunca se venden a terceros."
      }
    ],
    stat: {
      value: "AES-256",
      label: "Cifrado biométrico local"
    }
  },
  {
    id: "social_feed",
    badge: "05 • COMUNIDAD & FEED SOCIAL",
    title: "Comparte tus progresos y récords personales",
    subtitle: "Feed social integrado con Firebase Firestore para compartir nuevos PRs, rutinas completadas y celebrar hitos con la comunidad.",
    imageSrc: "/images/app/Feed_Social.png",
    highlights: [
      {
        title: "Verificación de PRs",
        desc: "GymAI genera tarjetas oficiales con el tonelaje total y la fecha para certificar tus récords."
      },
      {
        title: "Interacción en Tiempo Real",
        desc: "Comenta, reacciona y clona entrenamientos de amigos con un solo clic."
      }
    ],
    stat: {
      value: "+12k",
      label: "Entrenamientos compartidos"
    }
  }
];

export function AppScreensShowcaseSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);
  const current = flows[activeFlowIndex];

  return (
    <section className="relative z-10 py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-emerald-400 uppercase tracking-widest"
        >
          {lang === "es" ? "Experiencia de Producto Real" : "Real Product Experience"}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f7f8f8] mt-3"
        >
          {lang === "es" ? "Diseñado para el entrenamiento real en sala." : "Engineered for real-world gym training."}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-[#8a8f98] mt-4 leading-relaxed"
        >
          {lang === "es"
            ? "Capturas reales de la aplicación nativa en Android. Explora cada flujo interactivo diseñado con Jetpack Compose y Material Design 3."
            : "Real screenshots from the native Android app. Explore each interactive flow crafted with Jetpack Compose & Material 3."}
        </motion.p>

        {/* Feature Tabs Selector (Linear / Apple style pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {flows.map((flow, idx) => {
            const isActive = idx === activeFlowIndex;
            return (
              <button
                key={flow.id}
                onClick={() => setActiveFlowIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-400 text-black font-bold shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {flow.badge.split("•")[1]?.trim() || flow.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage: Side Narrative + 3D Realistic Phone Displaying Real App Screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Clean Typography Narrative & Highlights */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#f7f8f8] leading-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {current.subtitle}
              </p>

              {/* Highlights List */}
              <div className="space-y-4 pt-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <CheckCircle2 size={13} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug">{h.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Key Metric Box */}
              <div className="pt-4 flex items-center gap-6 border-t border-white/[0.08]">
                <div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                    {current.stat.value}
                  </span>
                  <p className="text-[11px] text-zinc-400 uppercase font-mono mt-0.5">
                    {current.stat.label}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Realistic 3D Samsung Bezel framing the Real App Screenshot */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[500px]">
          
          {/* Ambient Glow */}
          <div className="absolute w-[350px] h-[350px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Phone Frame */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative w-[240px] sm:w-[270px] aspect-[9/19.5] rounded-[42px] bg-[#111312] p-[6px] border-[2px] border-[#252b27] shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            {/* Screen Inner Glass */}
            <div className="relative w-full h-full rounded-[36px] bg-black overflow-hidden border border-[#161a17]">
              
              {/* Samsung Infinity-O Selfie Hole */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#050505] border-[1.5px] border-[#1a1a1a] z-50 flex items-center justify-center shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0a1a2f] border border-blue-400/30" />
              </div>

              {/* Real App Screenshot */}
              <div className="relative w-full h-full">
                <Image
                  src={current.imageSrc}
                  alt={current.title}
                  fill
                  quality={100}
                  unoptimized
                  className="object-cover object-center"
                />

                {/* Smooth Diagonal Glass Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none z-30" />
              </div>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
