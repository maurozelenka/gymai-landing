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
import { PricingSection } from "@/components/gymai/PricingSection";
import { FAQSection } from "@/components/gymai/FAQSection";

export type LanguageCode = "es" | "en" | "de" | "fr" | "it" | "nl";

interface GymAILandingPageProps {
  initialLang?: LanguageCode;
}

export function GymAILandingPage({ initialLang = "es" }: GymAILandingPageProps) {
  const [lang, setLang] = useState<LanguageCode>(initialLang);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"routine" | "biometrics" | "agent">("routine");

  // 🔄 Synchronized 4-Screen Hero Carousel (Longer, graceful 6.5s timer)
  const [heroScreenIndex, setHeroScreenIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroScreenIndex((prev) => (prev + 1) % 4);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

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

  const t: Record<LanguageCode, {
    heroTitle1: string;
    heroTitle2: string;
    sub1: string;
    sub2: string;
    downloadBtn: string;
    howItWorks: string;
    feat1Title: string;
    feat1Sub: string;
    feat2Title: string;
    feat2Sub: string;
    feat3Title: string;
    feat3Sub: string;
    login: string;
    signup: string;
    navFeatures: string;
    navPricing: string;
    navFaq: string;
    screenRoutines: string;
    screenRoutinesSub: string;
    screenAi: string;
    screenAiSub: string;
    screenHealth: string;
    screenHealthSub: string;
    screenSocial: string;
    screenSocialSub: string;
  }> = {
    es: {
      heroTitle1: "Tu entrenamiento.",
      heroTitle2: "Potenciado por IA.",
      sub1: "Entrena mejor, progresa más.",
      sub2: "GymAI adapta cada sesión a ti en tiempo real.",
      downloadBtn: "Descargar GymAI",
      howItWorks: "Descubrir cómo funciona",
      feat1Title: "Rutinas adaptativas",
      feat1Sub: "a tu rendimiento",
      feat2Title: "Análisis en tiempo real",
      feat2Sub: "de cada sesión",
      feat3Title: "100% Offline-First",
      feat3Sub: "privacidad total",
      login: "Iniciar sesión",
      signup: "Registrarse",
      navFeatures: "Características",
      navPricing: "Precios",
      navFaq: "Preguntas",
      screenRoutines: "Rutinas & Series",
      screenRoutinesSub: "Catálogo y ejecución",
      screenAi: "Agentes Gemini",
      screenAiSub: "Asistente en caliente",
      screenHealth: "Perfil & Salud",
      screenHealthSub: "Health Connect SDK",
      screenSocial: "Feed Social",
      screenSocialSub: "Comunidad y PRs",
    },
    en: {
      heroTitle1: "Your workout.",
      heroTitle2: "Powered by AI.",
      sub1: "Train better, progress further.",
      sub2: "GymAI adapts every single workout to you in real-time.",
      downloadBtn: "Download GymAI",
      howItWorks: "See how it works",
      feat1Title: "Adaptive routines",
      feat1Sub: "to your performance",
      feat2Title: "Real-time analysis",
      feat2Sub: "of every workout",
      feat3Title: "100% Offline-First",
      feat3Sub: "total privacy",
      login: "Log in",
      signup: "Sign up",
      navFeatures: "Features",
      navPricing: "Pricing",
      navFaq: "FAQ",
      screenRoutines: "Routines & Sets",
      screenRoutinesSub: "Catalog & execution",
      screenAi: "Gemini Agents",
      screenAiSub: "Live assistance",
      screenHealth: "Profile & Health",
      screenHealthSub: "Health Connect SDK",
      screenSocial: "Social Feed",
      screenSocialSub: "Community & PRs",
    },
    de: {
      heroTitle1: "Dein Training.",
      heroTitle2: "KI-gesteuert.",
      sub1: "Besser trainieren, schneller vorankommen.",
      sub2: "GymAI passt jedes Training in Echtzeit an dich an.",
      downloadBtn: "GymAI herunterladen",
      howItWorks: "Funktionsweise entdecken",
      feat1Title: "Adaptive Routinen",
      feat1Sub: "an deine Leistung",
      feat2Title: "Echtzeit-Analyse",
      feat2Sub: "jeder Einheit",
      feat3Title: "100% Offline-First",
      feat3Sub: "volle Privatsphäre",
      login: "Anmelden",
      signup: "Registrieren",
      navFeatures: "Funktionen",
      navPricing: "Preise",
      navFaq: "FAQ",
      screenRoutines: "Routinen & Sätze",
      screenRoutinesSub: "Katalog & Ausführung",
      screenAi: "Gemini Agenten",
      screenAiSub: "Live-Assistenz",
      screenHealth: "Profil & Gesundheit",
      screenHealthSub: "Health Connect SDK",
      screenSocial: "Social Feed",
      screenSocialSub: "Community & Rekorde",
    },
    fr: {
      heroTitle1: "Votre entraînement.",
      heroTitle2: "Propulsé par l'IA.",
      sub1: "Entraînez-vous mieux, progressez plus vite.",
      sub2: "GymAI adapte chaque séance à votre physiologie en temps réel.",
      downloadBtn: "Télécharger GymAI",
      howItWorks: "Découvrir le système",
      feat1Title: "Routines adaptatives",
      feat1Sub: "à vos performances",
      feat2Title: "Analyse en temps réel",
      feat2Sub: "de chaque séance",
      feat3Title: "100% Offline-First",
      feat3Sub: "confidentialité totale",
      login: "Connexion",
      signup: "S'inscrire",
      navFeatures: "Fonctionnalités",
      navPricing: "Tarifs",
      navFaq: "FAQ",
      screenRoutines: "Routines & Séries",
      screenRoutinesSub: "Catalogue et exécution",
      screenAi: "Agents Gemini",
      screenAiSub: "Assistance en direct",
      screenHealth: "Profil & Santé",
      screenHealthSub: "Health Connect SDK",
      screenSocial: "Fil Social",
      screenSocialSub: "Communauté et PRs",
    },
    it: {
      heroTitle1: "Il tuo allenamento.",
      heroTitle2: "Potenziato dall'IA.",
      sub1: "Allenati meglio, progredisci più velocemente.",
      sub2: "GymAI adatta ogni sessione a te in tempo reale.",
      downloadBtn: "Scarica GymAI",
      howItWorks: "Scopri come funziona",
      feat1Title: "Routine adattive",
      feat1Sub: "alle tue prestazioni",
      feat2Title: "Analisi in tempo reale",
      feat2Sub: "di ogni sessione",
      feat3Title: "100% Offline-First",
      feat3Sub: "massima privacy",
      login: "Accedi",
      signup: "Registrati",
      navFeatures: "Funzionalità",
      navPricing: "Prezzi",
      navFaq: "FAQ",
      screenRoutines: "Routine & Serie",
      screenRoutinesSub: "Catalogo ed esecuzione",
      screenAi: "Agenti Gemini",
      screenAiSub: "Assistenza in tempo reale",
      screenHealth: "Profilo & Salute",
      screenHealthSub: "Health Connect SDK",
      screenSocial: "Feed Sociale",
      screenSocialSub: "Community e record",
    },
    nl: {
      heroTitle1: "Jouw training.",
      heroTitle2: "Aangedreven door AI.",
      sub1: "Beter trainen, sneller vooruitgang boeken.",
      sub2: "GymAI past elke sessie in realtime aan jouw lichaam aan.",
      downloadBtn: "Download GymAI",
      howItWorks: "Ontdek de werking",
      feat1Title: "Adaptieve routines",
      feat1Sub: "op jouw prestaties",
      feat2Title: "Realtime analyse",
      feat2Sub: "van elke sessie",
      feat3Title: "100% Offline-First",
      feat3Sub: "volledige privacy",
      login: "Inloggen",
      signup: "Aanmelden",
      navFeatures: "Functies",
      navPricing: "Prijzen",
      navFaq: "FAQ",
      screenRoutines: "Routines & Sets",
      screenRoutinesSub: "Catalogus & uitvoering",
      screenAi: "Gemini Agenten",
      screenAiSub: "Live ondersteuning",
      screenHealth: "Profiel & Gezondheid",
      screenHealthSub: "Health Connect SDK",
      screenSocial: "Sociaal Overzicht",
      screenSocialSub: "Community & PRs",
    },
  }[lang] || t.es;

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
      
      {/* 🟢 LIGHTWEIGHT HARDWARE-OPTIMIZED BACKGROUND (Instant Mobile Load) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Static Radial Ambient Glow (CSS radial gradient is 10x lighter on mobile GPU than large blur filters) */}
        <div className="absolute top-[15%] -right-[10%] w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-[20%] -left-[10%] w-[340px] sm:w-[550px] h-[340px] sm:h-[550px] rounded-full bg-[radial-gradient(circle,rgba(5,150,105,0.08)_0%,transparent_70%)]" />

        {/* Dynamic SVG Topographic Fluid Wave Lines Texture */}
        <motion.svg 
          style={{
            y: bgWaveY,
            rotate: bgWaveRotate,
            opacity: bgWaveOpacity,
          }}
          className="absolute -bottom-24 -left-24 w-[750px] sm:w-[1300px] h-[450px] sm:h-[750px] pointer-events-none text-emerald-400 opacity-20 transform-gpu" 
          viewBox="0 0 1000 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <path
              key={i}
              d={`M -50 ${120 + i * 42} C ${200 + i * 15} ${160 + i * 20}, ${500 - i * 10} ${420 - i * 14}, ${1050 + i * 20} ${280 + i * 16}`}
              stroke="currentColor"
              strokeWidth="1.2"
              strokeOpacity={0.18 + (i % 3) * 0.12}
            />
          ))}
        </motion.svg>
      </div>

      {/* 🚀 NAVIGATION BAR (Optimized for iOS WebKit) */}
      <nav className="sticky top-0 z-50 w-full bg-[#08090a]/90 backdrop-blur-md px-6 sm:px-12 py-3 border-b border-white/[0.08]">
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

          {/* Right-aligned Navigation + Actions (Real Page Section Links) */}
          <div className="flex items-center gap-6 text-[13px] text-[#8a8f98] font-normal">
            
            {/* Real Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#hero" className="hover:text-[#f7f8f8] transition-colors duration-150">{t.navFeatures}</a>
              <a href="#pricing" className="hover:text-[#f7f8f8] transition-colors duration-150">{t.navPricing}</a>
              <a href="#faq" className="hover:text-[#f7f8f8] transition-colors duration-150">{t.navFaq}</a>
            </div>

            {/* Vertical Divider Line (Linear style) */}
            <div className="hidden sm:block w-[1px] h-4 bg-white/[0.12]" />

            {/* Language Dropdown Selector (Exact match to screenshot) */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-2.5 py-1 rounded-[8px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white text-[13px] font-medium transition-all shadow-sm uppercase"
              >
                <span>{lang}</span>
                <ChevronsUpDown size={13} className="text-[#8a8f98]" />
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
                        const isSelected = lang === item.code;
                        return (
                          <button
                            key={item.code}
                            onClick={() => {
                              setLang(item.code as LanguageCode);
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
                              <Check size={14} className="text-emerald-400" />
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
              {t.login}
            </a>

            {/* Linear Style Sign up Pill Button */}
            <a
              href="https://github.com/maurozelenka"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#e6e8eb] hover:bg-white text-[#08090a] font-medium text-[13px] transition-all duration-150 shadow-sm"
            >
              <span>{t.signup}</span>
            </a>

          </div>

        </div>
      </nav>

      {/* 🌟 HERO SECTION (100% Symmetrical Viewport Fit) */}
      <section id="hero" className="relative z-10 min-h-[calc(100vh-70px)] flex items-center justify-center px-6 sm:px-14 py-2 sm:py-4 max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Clean Typography & Exact Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">

            {/* Exact Headline (Cinematic Apple / Linear Word Reveal) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-white mb-4 overflow-hidden">
              <span className="inline-block overflow-hidden pb-1">
                {t.heroTitle1.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.12,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="inline-block overflow-hidden pb-1">
                {t.heroTitle2.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.35 + i * 0.12,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block mr-3"
                  >
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
                      {word}
                    </motion.span>
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subtitle (Smooth Staggered Fade Up) */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6"
            >
              <p>{t.sub1}</p>
              <p className="text-zinc-400">{t.sub2}</p>
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
                <span>{t.downloadBtn}</span>
              </a>

              <a
                href="#pricing"
                className="px-6 py-3 rounded-full bg-transparent hover:bg-white/[0.04] border border-white/[0.12] text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>{t.howItWorks}</span>
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
                  <h4 className="text-[11px] font-bold text-white leading-snug">{t.feat1Title}</h4>
                  <p className="text-[10px] text-zinc-400 leading-tight mt-0.5">{t.feat1Sub}</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0a1710] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Activity size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-white leading-snug">{t.feat2Title}</h4>
                  <p className="text-[10px] text-zinc-400 leading-tight mt-0.5">{t.feat2Sub}</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0a1710] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-white leading-snug">{t.feat3Title}</h4>
                  <p className="text-[10px] text-zinc-400 leading-tight mt-0.5">{t.feat3Sub}</p>
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
              <span className="text-[11px] text-zinc-500 font-medium">Technology powered by</span>
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
          <div className="lg:col-span-6 relative w-full flex flex-col sm:flex-row items-center justify-center min-h-[440px] sm:min-h-[480px] mt-8 lg:mt-0">
            
            {/* 🟢 Harmonic Concentric Radar Rings (Zero CPU/GPU overhead) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none lg:-translate-x-8">
              {/* Radar Center Glow */}
              <div className="absolute w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18)_0%,transparent_70%)]" />

              {/* Fixed outer harmonic rings */}
              <div className="absolute w-[260px] sm:w-[280px] h-[260px] sm:h-[280px] rounded-full border border-emerald-400/30" />
              <div className="absolute w-[340px] sm:w-[360px] h-[340px] sm:h-[360px] rounded-full border border-emerald-500/20" />
              <div className="absolute w-[440px] sm:w-[460px] h-[440px] sm:h-[460px] rounded-full border border-emerald-500/10" />
              <div className="absolute w-[560px] sm:w-[580px] h-[560px] sm:h-[580px] rounded-full border border-emerald-500/[0.04]" />
            </div>

            {/* 📱 3D Samsung Galaxy Phone */}
            <div className="relative z-20 flex justify-center lg:-translate-x-8">
              <SamsungGalaxy3DMockup 
                currentScreenIndex={heroScreenIndex} 
                onSelectScreen={(idx) => setHeroScreenIndex(idx)} 
              />
            </div>

            {/* 🟢 RIGHT SIDE: Floating 3D Dumbbell App Icon + 4 Synchronized Feature Pills */}
            <div className="relative lg:absolute lg:right-0 sm:right-2 top-auto lg:top-1/2 lg:-translate-y-1/2 flex flex-row lg:flex-col items-center lg:items-start gap-2 sm:gap-3 z-30 mt-6 lg:mt-0 flex-wrap justify-center">
              
              {/* 3D App Icon Top Right with Neon Halo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:block w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-800 p-[1.5px] shadow-[0_0_25px_rgba(16,185,129,0.5)] mb-1 self-start cursor-pointer"
              >
                <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                  <Image
                    src="/images/gymai-logo.png"
                    alt="GymAI Dumbbell"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              </motion.div>

              {/* 4 Interactive Synchronized Screens & Features */}
              {[
                { 
                  id: "rutinas",
                  icon: Dumbbell, 
                  title: t.screenRoutines, 
                  sub: t.screenRoutinesSub
                },
                { 
                  id: "ia",
                  icon: Bot, 
                  title: t.screenAi, 
                  sub: t.screenAiSub
                },
                { 
                  id: "perfil",
                  icon: Heart, 
                  title: t.screenHealth, 
                  sub: t.screenHealthSub
                },
                { 
                  id: "feed",
                  icon: Users, 
                  title: t.screenSocial, 
                  sub: t.screenSocialSub
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                const isActive = heroScreenIndex === idx;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setHeroScreenIndex(idx)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: -4 }}
                    className={`flex items-center gap-2.5 text-left p-1.5 sm:p-2 pr-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-emerald-500/15 border border-emerald-400/40 shadow-[0_0_20px_rgba(52,211,153,0.2)]" 
                        : "opacity-60 hover:opacity-100 hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all shrink-0 ${
                      isActive
                        ? "bg-emerald-400 text-black shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                        : "bg-[#08130c] border border-emerald-500/30 text-emerald-400"
                    }`}>
                      <Icon size={12} />
                    </div>
                    <div>
                      <p className={`text-[10px] sm:text-[11px] font-bold leading-tight transition-colors ${
                        isActive ? "text-emerald-300" : "text-zinc-200"
                      }`}>
                        {item.title}
                      </p>
                      <p className="text-[8px] sm:text-[9px] text-zinc-400 leading-tight hidden sm:block">{item.sub}</p>
                    </div>
                  </motion.button>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* 💎 SECTION 2: PRICING PLANS (Monthly / Annual Toggle & Pro Agent) */}
      <PricingSection lang={lang} />

      {/* ❓ SECTION 3: FAQ ACCORDION (Zero-card Linear minimal style) */}
      <FAQSection lang={lang} />

      {/* 🚀 GOOGLE PLAY STORE & CLEAN FOOTER (Exact Match to Reference Layout) */}
      <footer className="relative z-10 border-t border-white/[0.06] pt-16 pb-12 px-6 sm:px-12 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-8">
          
          {/* Official Google Play Store Badge Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="https://github.com/maurozelenka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 px-6 py-2.5 rounded-[14px] bg-[#0c120e] hover:bg-[#121b15] border-2 border-white/[0.2] hover:border-emerald-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-200 group"
          >
            {/* Google Play High-Res Logo Asset */}
            <div className="w-8 h-8 relative shrink-0">
              <Image
                src="/images/google-play-logo.png"
                alt="Google Play"
                fill
                priority
                unoptimized
                className="object-contain"
                sizes="32px"
              />
            </div>

            {/* Google Play Text Structure */}
            <div className="text-left">
              <p className="text-[10px] text-zinc-400 font-sans uppercase tracking-wider font-semibold leading-tight">
                GET IT ON
              </p>
              <p className="text-lg font-bold text-white font-sans tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                Google Play
              </p>
            </div>
          </motion.a>

          {/* Legal / Copyright Bar with Underlined Links */}
          <div className="text-xs sm:text-[13px] text-zinc-400 font-medium space-x-1.5 pt-2">
            <span>Copyright © {new Date().getFullYear()} GymAI Inc.</span>
            <span>|</span>
            <Link href={`/${lang}`} className="underline hover:text-emerald-400 transition-colors">
              maurozelenka.com
            </Link>
            <span>|</span>
            <a 
              href="https://github.com/maurozelenka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a 
              href="https://github.com/maurozelenka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-emerald-400 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}
