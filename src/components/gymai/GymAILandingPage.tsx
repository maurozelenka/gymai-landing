"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Zap, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Bot, 
  Smartphone, 
  Brain, 
  Database, 
  Heart, 
  Flame, 
  Droplet, 
  Lock, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Download, 
  Globe, 
  ExternalLink,
  Footprints,
  Dumbbell,
  Users,
  Award,
  TrendingUp,
  ChevronsUpDown
} from "lucide-react";
import { SiKotlin, SiAndroid, SiGoogle, SiFirebase } from "react-icons/si";
import { GymMobileMockup } from "@/components/ui/GymMobileMockup";
import { SamsungGalaxy3DMockup } from "@/components/ui/SamsungGalaxy3DMockup";
import { GymTabletMockup } from "@/components/ui/GymTabletMockup";
import { BenchPress100KgMockup } from "@/components/gymai/BenchPress100KgMockup";
import { GymWorkoutCardMockup } from "@/components/gymai/GymWorkoutCardMockup";
import { GymVolumeChartMockup } from "@/components/gymai/GymVolumeChartMockup";
import { GymBioRingMockup } from "@/components/gymai/GymBioRingMockup";
import { MultiAgentOrchestratorSection } from "@/components/gymai/MultiAgentOrchestratorSection";
import { AppScreensShowcaseSection } from "@/components/gymai/AppScreensShowcaseSection";

interface GymAILandingPageProps {
  initialLang?: "es" | "en";
}

export function GymAILandingPage({ initialLang = "es" }: GymAILandingPageProps) {
  const [lang, setLang] = useState<"es" | "en">(initialLang);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"routine" | "biometrics" | "agent">("routine");

  // Scroll Progress Parallax for Ambient Background Assets
  const { scrollYProgress } = useScroll();
  const bgWaveY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-35%", "-70%"]);
  const bgWaveRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -12, 18]);
  const bgWaveOpacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0.22, 0.08, 0.25, 0.12]);
  const bgGlowY = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
  const bgGlowX = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-40%", "20%"]);
  const [promptInput, setPromptInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const t = {
    es: {
      badge: "TFG • Calificación 9.8 (Matrícula de Honor)",
      heroTitle1: "El Futuro del Fitness.",
      heroTitle2: "Impulsado por Agentes de IA.",
      heroSubtitle: "GymAI es una plataforma nativa Android (Jetpack Compose) con arquitectura Offline-First. Integra un agente cognitivo autónomo con Google Gemini y Health Connect para adaptar tus entrenamientos y recuperación en tiempo real.",
      downloadApk: "Descargar APK (Beta v1.2)",
      exploreLive: "Explorar Ecosistema",
      backedBy: "TECNOLOGÍAS DE VANGUARDIA",
      featuresTitle: "¿Por qué GymAI redefine el entrenamiento?",
      featuresSubtitle: "Diseñado para superar las limitaciones de las apps tradicionales con verdadera inteligencia adaptativa.",
      features: [
        {
          icon: Brain,
          title: "Agente Cognitivo Autónomo",
          desc: "Orquestación multi-paso con Google Gemini. Razona sobre tu fatiga acumulada, variabilidad cardíaca y progresión para ajustar pesos y series antes de cada sesión."
        },
        {
          icon: Lock,
          title: "Offline-First & Privacidad Total",
          desc: "Tus métricas biométricas nunca salen de tu dispositivo sin tu consentimiento. Persistencia local ultrarrápida con Room DB y SQLite cifrado."
        },
        {
          icon: Activity,
          title: "Sincronización Health Connect",
          desc: "Integración profunda con el ecosistema de Android para leer pasos, calidad de sueño, gasto calórico y frecuencia cardíaca sin fricción."
        },
        {
          icon: Zap,
          title: "UI Reactiva con Jetpack Compose",
          desc: "Interfaz fluida a 120 FPS desarrollada íntegramente en Kotlin y Material Design 3 con arquitectura Clean Architecture + MVI."
        }
      ],
      interactiveAiTitle: "Prueba el razonamiento del Agente GymAI",
      interactiveAiDesc: "Experimenta cómo el agente evalúa biometría real para generar micro-ajustes tácticos en tu rutina.",
      demoPrompts: [
        "Dormí 5 horas y mi VFC está baja, ¿cómo ajusto mi sesión de pierna?",
        "Estanqué en press banca a 85kg 4x5, necesito periodización ondulatoria.",
        "Tengo dolor en el manguito rotador derecho, dame alternativas seguras."
      ],
      architectureTitle: "Arquitectura Técnica del Sistema",
      architectureSubtitle: "Ingeniería de software robusta diseñada para máxima escalabilidad y cero latencia.",
      archCards: [
        {
          title: "Capa de Presentación",
          badge: "UI / UX",
          items: ["Jetpack Compose declarativo", "Patrón MVI (Model-View-Intent)", "Navegación por grafos segura", "Componentes adaptables Tablet/Móvil"]
        },
        {
          title: "Capa de Inteligencia",
          badge: "AI Agent",
          items: ["Google Gemini Flash / Pro API", "Inferencia de contexto biológico", "Prompt engineering estructurado", "Fallback de lógica local offline"]
        },
        {
          title: "Capa de Datos & Core",
          badge: "Persistence",
          items: ["Room ORM con SQLite", "Android Health Connect SDK", "Kotlin Coroutines & Flow", "Cifrado de datos AES-256"]
        }
      ],
      ctaTitle: "¿Listo para transformar tu rendimiento?",
      ctaSubtitle: "Accede a la beta de GymAI y entrena con un agente inteligente adaptado a tu biología.",
      backToPortfolio: "Volver a maurozelenka.com",
      footerRights: "GymAI • Desarrollado por Mauro Zelenka Pedrosa como Trabajo de Fin de Grado (Matrícula de Honor)."
    },
    en: {
      badge: "Bachelor Thesis • 9.8 / 10 Honors (Matrícula de Honor)",
      heroTitle1: "The Future of Fitness.",
      heroTitle2: "Powered by AI Agents.",
      heroSubtitle: "GymAI is an offline-first native Android platform built with Jetpack Compose. It integrates an autonomous cognitive agent with Google Gemini and Health Connect to adapt your workouts and recovery in real time.",
      downloadApk: "Download APK (Beta v1.2)",
      exploreLive: "Explore Ecosystem",
      backedBy: "STATE OF THE ART TECHNOLOGIES",
      featuresTitle: "Why GymAI redefines modern training?",
      featuresSubtitle: "Engineered to overcome traditional fitness apps with genuine adaptive intelligence.",
      features: [
        {
          icon: Brain,
          title: "Autonomous Cognitive Agent",
          desc: "Multi-step reasoning with Google Gemini. Evaluates accumulated fatigue, HRV, and workout logs to tailor loads and volume before every session."
        },
        {
          icon: Lock,
          title: "Offline-First & Pure Privacy",
          desc: "Your biological metrics stay on your device. Ultra-fast local persistence with Room DB and encrypted SQLite."
        },
        {
          icon: Activity,
          title: "Health Connect Deep Sync",
          desc: "Native integration with Android Health Connect to ingest steps, sleep stages, calories, and resting heart rate frictionlessly."
        },
        {
          icon: Zap,
          title: "120 FPS Jetpack Compose UI",
          desc: "Buttery-smooth modern interface crafted in Kotlin with Material Design 3 and Clean Architecture + MVI patterns."
        }
      ],
      interactiveAiTitle: "Test the GymAI Agent Reasoning",
      interactiveAiDesc: "Experience how the agent processes real biological context to generate proactive workout adjustments.",
      demoPrompts: [
        "Slept 5 hours and my HRV dropped 20%, how should I adjust leg day?",
        "Plateaued on bench press at 85kg 4x5, design daily undulating periodization.",
        "Slight right rotator cuff impingement, provide safe chest alternatives."
      ],
      architectureTitle: "System Technical Architecture",
      architectureSubtitle: "Robust software engineering designed for high performance and zero latency.",
      archCards: [
        {
          title: "Presentation Layer",
          badge: "UI / UX",
          items: ["Declarative Jetpack Compose", "MVI (Model-View-Intent) pattern", "Type-safe navigation graphs", "Adaptive Mobile/Tablet layout"]
        },
        {
          title: "Intelligence Layer",
          badge: "AI Agent",
          items: ["Google Gemini Flash / Pro API", "Biological context reasoning", "Structured JSON prompt schema", "Offline heuristic fallback"]
        },
        {
          title: "Data & Core Layer",
          badge: "Persistence",
          items: ["Room ORM with SQLite", "Android Health Connect SDK", "Kotlin Coroutines & Flow", "AES-256 data encryption"]
        }
      ],
      ctaTitle: "Ready to elevate your human performance?",
      ctaSubtitle: "Get access to GymAI beta and train with an autonomous agent tailored to your physiology.",
      backToPortfolio: "Back to maurozelenka.com",
      footerRights: "GymAI • Engineered by Mauro Zelenka Pedrosa as Bachelor's Thesis (Top Honors)."
    }
  }[lang];

  const handleSimulateAi = (customPrompt?: string) => {
    const prompt = customPrompt || promptInput;
    if (!prompt) return;
    setIsGenerating(true);
    setAiResponse(null);

    setTimeout(() => {
      setIsGenerating(false);
      if (prompt.includes("5 horas") || prompt.includes("Slept 5")) {
        setAiResponse(
          lang === "es"
            ? "🧠 **Diagnóstico GymAI:** Estrés fisiológico detectado (Sueño <6h, VFC -18%).\n\n⚡ **Ajuste Proactivo:**\n1. Reducción de volumen en Sentadilla (-1 serie efectiva, RPE tope 7.5 en vez de 9.0).\n2. Sustitución de Prensa Inclinada por Extensiones en máquina para minimizar fatiga axial.\n3. Incremento del descanso inter-series a 180s y protocolo de hidratación +500ml."
            : "🧠 **GymAI Diagnosis:** Physiological strain detected (Sleep <6h, HRV -18%).\n\n⚡ **Proactive Adjustment:**\n1. Volume reduction on Back Squat (-1 working set, RPE cap 7.5 instead of 9.0).\n2. Swapped Leg Press for Seated Leg Extensions to reduce axial fatigue.\n3. Extended rest intervals to 180s with recommended +500ml electrolyte intake."
        );
      } else {
        setAiResponse(
          lang === "es"
            ? "🧠 **Diagnóstico GymAI:** Análisis biomecánico y de sobrecarga progresiva completado.\n\n⚡ **Estrategia Recomendada:**\n• Microciclo Ondulatorio: Día A (Fuerza 3x3 @85%), Día B (Hipertrofia 3x8 @70%).\n• Enfoque excéntrico controlado (3-1-1) para maximizar reclutamiento neuromuscular y prevenir estancamiento."
            : "🧠 **GymAI Diagnosis:** Biomechanical & progressive overload analysis completed.\n\n⚡ **Recommended Strategy:**\n• Daily Undulating Microcycle: Day A (Strength 3x3 @85%), Day B (Hypertrophy 3x8 @70%).\n• Enforced 3-1-1 eccentric tempo to maximize motor unit recruitment while preventing plateaus."
        );
      }
    }, 1200);
  };

  return (
    <main className="min-h-screen w-full bg-[#050806] text-white selection:bg-emerald-500 selection:text-black overflow-x-hidden font-sans">
      
      {/* 🟢 DYNAMIC PARALLAX AMBIENT BACKGROUND & WAVE CURVES */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dynamic Traveling Radial Ambient Glow */}
        <motion.div 
          style={{
            top: "30%",
            right: "10%",
            y: bgGlowY,
            x: bgGlowX,
          }}
          className="absolute w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[160px]" 
        />

        {/* Dynamic SVG Topographic Fluid Wave Lines Texture (Travels and Morphs with Scroll) */}
        <motion.svg 
          style={{
            y: bgWaveY,
            rotate: bgWaveRotate,
            opacity: bgWaveOpacity,
          }}
          className="absolute -bottom-28 -left-28 w-[1300px] h-[750px] pointer-events-none text-emerald-400" 
          viewBox="0 0 1000 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <path
              key={i}
              d={`M -50 ${120 + i * 26} C ${200 + i * 15} ${160 + i * 20}, ${500 - i * 10} ${420 - i * 14}, ${1050 + i * 20} ${280 + i * 16}`}
              stroke="currentColor"
              strokeWidth="1.2"
              strokeOpacity={0.15 + (i % 3) * 0.12}
            />
          ))}
        </motion.svg>

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050806]/40 to-[#050806]" />
      </div>

      {/* 🚀 NAVIGATION BAR (Exact Linear Style Match) */}
      <nav className="sticky top-0 z-50 w-full bg-[#08090a]/80 backdrop-blur-md px-6 sm:px-12 py-3 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo (Linear style with subtle icon) */}
          <Link href={`/${lang}/gymai`} className="flex items-center gap-2 group">
            <div className="w-5 h-5 rounded-md overflow-hidden relative opacity-90 group-hover:opacity-100 transition-opacity">
              <Image
                src="/images/gymai-logo.png"
                alt="GymAI Logo"
                fill
                className="object-cover"
                sizes="20px"
              />
            </div>
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-[#f7f8f8]">
              GymAI
            </span>
          </Link>

          {/* Right-aligned Navigation + Actions (Exact Linear Structure) */}
          <div className="flex items-center gap-6 text-[13px] text-[#8a8f98] font-normal">
            
            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="hover:text-[#f7f8f8] transition-colors duration-150">{lang === "es" ? "Características" : "Features"}</a>
              <a href="#mockups" className="hover:text-[#f7f8f8] transition-colors duration-150">{lang === "es" ? "App & Tablet" : "App & Tablet"}</a>
              <a href="#architecture" className="hover:text-[#f7f8f8] transition-colors duration-150">{lang === "es" ? "Arquitectura" : "Architecture"}</a>
            </div>

            {/* Vertical Divider Line (Linear style) */}
            <div className="hidden sm:block w-[1px] h-4 bg-white/[0.12]" />

            {/* Language Dropdown Selector (Exact match to screenshot) */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-2.5 py-1 rounded-[8px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white text-[13px] font-medium transition-all shadow-sm"
              >
                <span>{lang.toUpperCase()}</span>
                <ChevronsUpDown size={13} className="text-zinc-400" />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <>
                    {/* Backdrop to close menu on click outside */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsLangOpen(false)} 
                    />

                    {/* Floating Dropdown Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -4 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-1.5 w-36 rounded-[12px] bg-[#121417] border border-white/[0.12] shadow-[0_12px_32px_rgba(0,0,0,0.8)] py-1.5 z-50 overflow-hidden"
                    >
                      {[
                        { code: "en", label: "English" },
                        { code: "de", label: "Deutsch" },
                        { code: "es", label: "Español" },
                        { code: "fr", label: "Français" },
                        { code: "it", label: "Italiano" },
                        { code: "nl", label: "Nederlands" },
                      ].map((item) => {
                        const isSelected = (lang === "es" && item.code === "es") || (lang === "en" && item.code === "en");
                        return (
                          <button
                            key={item.code}
                            onClick={() => {
                              if (item.code === "es" || item.code === "en") {
                                setLang(item.code);
                              }
                              setIsLangOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3.5 py-2 text-[13px] text-left transition-colors ${
                              isSelected 
                                ? "bg-white/[0.08] text-[#f7f8f8] font-medium" 
                                : "text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-white/[0.04]"
                            }`}
                          >
                            <span>{item.label}</span>
                            {isSelected && (
                              <Check size={14} className="text-white" />
                            )}
                          </button>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Log in Link */}
            <a
              href="https://github.com/maurozelenka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8f98] hover:text-[#f7f8f8] transition-colors duration-150 text-[13px] font-normal"
            >
              {lang === "es" ? "Iniciar sesión" : "Log in"}
            </a>

            {/* Linear Style Sign up Pill Button */}
            <a
              href="https://github.com/maurozelenka"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#e6e8eb] hover:bg-white text-[#08090a] font-medium text-[13px] transition-all duration-150 shadow-sm"
            >
              <span>{lang === "es" ? "Registrarse" : "Sign up"}</span>
            </a>

          </div>

        </div>
      </nav>

      {/* 🌟 HERO SECTION (100% Symmetrical Viewport Fit) */}
      <section className="relative z-10 min-h-[calc(100vh-70px)] flex items-center justify-center px-6 sm:px-14 py-2 sm:py-4 max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Clean Typography & Exact Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">

            {/* Exact Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-white mb-4"
            >
              {lang === "es" ? "Tu entrenamiento." : "Your workout."}<br />
              <motion.span 
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #10b981, #34d399, #6ee7b7, #059669, #10b981)",
                  backgroundSize: "260% 100%",
                }}
                className="bg-clip-text text-transparent inline-block"
              >
                {lang === "es" ? "Potenciado por IA." : "Powered by AI."}
              </motion.span>
            </motion.h1>

            {/* Subtitle (2 Lines) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6"
            >
              <p>{lang === "es" ? "Entrena mejor, progresa más." : "Train better, progress further."}</p>
              <p className="text-zinc-400">{lang === "es" ? "GymAI adapta cada sesión a ti en tiempo real." : "GymAI adapts every single workout to you in real-time."}</p>
            </motion.div>

            {/* Action Buttons: Solid Green Pill + Transparent Outline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href="https://github.com/maurozelenka"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(52,211,153,0.35)] transition-all cursor-pointer"
              >
                <Download size={15} />
                <span>{lang === "es" ? "Descargar GymAI" : "Download GymAI"}</span>
              </a>

              <a
                href="#features"
                className="px-6 py-3 rounded-full bg-transparent hover:bg-white/[0.04] border border-white/[0.12] text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>{lang === "es" ? "Descubrir cómo funciona" : "See how it works"}</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* 3 Micro Feature Stat Columns */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 text-left w-full border-t border-white/[0.06] pt-5 mb-6"
            >
              {/* Feature 1 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0a1710] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <TrendingUp size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-white leading-snug">{lang === "es" ? "Rutinas adaptativas" : "Adaptive routines"}</h4>
                  <p className="text-[10px] text-zinc-400 leading-tight mt-0.5">{lang === "es" ? "a tu rendimiento" : "to your performance"}</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0a1710] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Activity size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-white leading-snug">{lang === "es" ? "Análisis en tiempo real" : "Real-time analysis"}</h4>
                  <p className="text-[10px] text-zinc-400 leading-tight mt-0.5">{lang === "es" ? "de cada sesión" : "of every session"}</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0a1710] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-white leading-snug">{lang === "es" ? "Máxima eficiencia," : "Peak efficiency,"}</h4>
                  <p className="text-[10px] text-zinc-400 leading-tight mt-0.5">{lang === "es" ? "mejores resultados" : "better results"}</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Tech Stack Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3 text-xs text-zinc-400"
            >
              <span className="text-[11px] text-zinc-500 font-medium">{lang === "es" ? "Tecnología impulsada por" : "Technology powered by"}</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0d1410] border border-white/[0.06] text-white text-[11px]">
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Google Gemini</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0d1410] border border-white/[0.06] text-white text-[11px]">
                <SiAndroid className="text-[#3DDC84]" />
                <span>Health Connect</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3D SAMSUNG GALAXY PHONE WITH CONCENTRIC RADAR RINGS & 4 ICONS */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center min-h-[480px]">
            
            {/* 🟢 Pulsing Multi-Ring Radar Acoustic Waves */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -translate-x-4 sm:-translate-x-8">
              {/* Radar Center Glow */}
              <div className="absolute w-[200px] h-[200px] bg-emerald-500/20 rounded-full blur-[80px]" />

              {/* Animated expanding radar wave 1 */}
              <motion.div
                animate={{
                  scale: [1, 1.45, 1.9],
                  opacity: [0.6, 0.25, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute w-[280px] h-[280px] rounded-full border-[1.5px] border-emerald-400/40"
              />

              {/* Animated expanding radar wave 2 */}
              <motion.div
                animate={{
                  scale: [1, 1.45, 1.9],
                  opacity: [0.6, 0.25, 0],
                }}
                transition={{
                  duration: 4,
                  delay: 1.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute w-[280px] h-[280px] rounded-full border-[1.5px] border-emerald-400/40"
              />

              {/* Fixed outer harmonic rings */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-emerald-500/20" />
              <div className="absolute w-[440px] h-[440px] rounded-full border border-emerald-500/15" />
              <div className="absolute w-[540px] h-[540px] rounded-full border border-emerald-500/10" />
              <div className="absolute w-[660px] h-[660px] rounded-full border border-emerald-500/[0.05]" />
            </div>

            {/* 📱 3D Samsung Galaxy Phone */}
            <div className="relative z-20 flex justify-center -translate-x-4 sm:-translate-x-8">
              <SamsungGalaxy3DMockup />
            </div>

            {/* 🟢 RIGHT SIDE: Floating 3D Dumbbell App Icon + 4 Vertical Feature Pills */}
            <div className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 flex flex-col items-start gap-3.5 z-30">
              
              {/* 3D App Icon Top Right with Neon Halo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-800 p-[1.5px] shadow-[0_0_30px_rgba(16,185,129,0.5)] mb-1 self-start cursor-pointer"
              >
                <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                  <Image
                    src="/images/gymai-logo.png"
                    alt="GymAI Dumbbell"
                    fill
                    className="object-cover"
                    sizes="52px"
                  />
                </div>
              </motion.div>

              {/* 4 Feature Items (Icon + Label) */}
              {[
                { icon: Bot, title: lang === "es" ? "Agentes IA" : "AI Agents", sub: lang === "es" ? "sincronizados" : "synchronized" },
                { icon: Activity, title: lang === "es" ? "Adaptación" : "Adaptation", sub: lang === "es" ? "en tiempo real" : "real-time" },
                { icon: TrendingUp, title: lang === "es" ? "Datos que impulsan" : "Data that drives", sub: lang === "es" ? "tu progreso" : "your progress" },
                { icon: Lock, title: lang === "es" ? "Privacidad y seguridad" : "Privacy & security", sub: lang === "es" ? "garantizadas" : "guaranteed" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: -4 }}
                    className="flex items-center gap-2.5 group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#08130c] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:bg-[#0e2215] group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                      <Icon size={13} />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-bold text-zinc-200 group-hover:text-emerald-300 transition-colors leading-tight">{item.title}</p>
                      <p className="text-[9px] text-zinc-400 leading-tight">{item.sub}</p>
                    </div>
                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* 🤖 SECTION 2: INTERACTIVE 5-AGENT CONSTELLATION ORCHESTRATOR (From Official TFG Architecture) */}
      <MultiAgentOrchestratorSection lang={lang} />

      {/* ⚡ SECTION 3: CORE ENGINEERING PILLARS (Clean Minimal Typography - Zero Extra Phones) */}
      <section id="features" className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            {lang === "es" ? "Pilares de Ingeniería" : "Engineering Pillars"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f7f8f8] mt-3">
            {lang === "es" ? "Arquitectura nativa. Cero fricción." : "Native architecture. Zero friction."}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: lang === "es" ? "Google Gemini Flash" : "Google Gemini Flash",
              desc: lang === "es" ? "Razonamiento multi-agente en <350ms para sugerir micro-ajustes de carga y volumen en caliente." : "Multi-agent reasoning in <350ms suggesting real-time load and volume adjustments."
            },
            {
              step: "02",
              title: lang === "es" ? "Health Connect SDK" : "Health Connect SDK",
              desc: lang === "es" ? "Lectura nativa de variabilidad cardíaca (VFC), horas de sueño REM y gasto metabólico." : "Native ingestion of heart rate variability (HRV), REM sleep stages, and active caloric burn."
            },
            {
              step: "03",
              title: lang === "es" ? "100% Offline-First" : "100% Offline-First",
              desc: lang === "es" ? "Persistencia en SQLite con Room ORM y cifrado AES-256. Todo tu historial vive en tu dispositivo." : "SQLite persistence with Room ORM and AES-256 encryption. Your health records stay on-device."
            },
            {
              step: "04",
              title: lang === "es" ? "Jetpack Compose MVI" : "Jetpack Compose MVI",
              desc: lang === "es" ? "Renderizado reactivo a 120 FPS desarrollado íntegramente en Kotlin con Material 3." : "Reactive 120 FPS rendering engineered completely in Kotlin and Material 3 design."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col text-left space-y-2 border-l border-white/[0.08] pl-6 hover:border-emerald-400 transition-colors"
            >
              <span className="text-xs font-mono text-emerald-400/70 font-bold">{item.step}</span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📄 CLEAN FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.06] py-12 px-6 sm:px-12 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-zinc-400">
            <span>GymAI</span>
            <span>•</span>
            <Link href={`/${lang}`} className="hover:text-emerald-400 transition-colors">maurozelenka.com</Link>
          </div>
          <p>© {new Date().getFullYear()} GymAI • {lang === "es" ? "Diseñado y desarrollado por Mauro Zelenka Pedrosa" : "Engineered and crafted by Mauro Zelenka Pedrosa"}</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/maurozelenka" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/mauro-zelenka-pedrosa-0a1169185" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
