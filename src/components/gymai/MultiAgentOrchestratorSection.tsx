"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Brain, 
  Activity, 
  Dumbbell, 
  Users, 
  Database, 
  Heart, 
  Sparkles,
  Zap,
  TrendingUp,
  Cpu
} from "lucide-react";

interface AgentNode {
  id: string;
  name: string;
  role: string;
  desc: string;
  color: string;
  icon: any;
  angle: number; // in degrees for circular layout
  external: {
    name: string;
    action: string;
  };
}

const agents: AgentNode[] = [
  {
    id: "planner",
    name: "WorkoutPlannerAgent",
    role: "Planificación & Periodización",
    desc: "Diseña mesociclos y distribuye el volumen semanal según el objetivo del usuario (Fuerza, Hipertrofia o Resistencia).",
    color: "#38bdf8",
    icon: Dumbbell,
    angle: -90, // Top
    external: {
      name: "Room DB / ExerciseDB",
      action: "read_exercise_catalog()"
    }
  },
  {
    id: "customizer",
    name: "RoutineCustomizerAgent",
    role: "Ajuste Dinámico en Vivo",
    desc: "Sustituye ejercicios en caliente por molestias articulares, máquinas ocupadas o fatiga localizada.",
    color: "#818cf8",
    icon: Zap,
    angle: -18, // Top-Right
    external: {
      name: "ExerciseDB API",
      action: "swap_exercise()"
    }
  },
  {
    id: "social",
    name: "SocialCommunityAgent",
    role: "Interacción & Logros",
    desc: "Valida récords personales (PRs), sincroniza desafíos comunitarios y publica resúmenes en el feed.",
    color: "#c084fc",
    icon: Users,
    angle: 54, // Bottom-Right
    external: {
      name: "Firestore Feed",
      action: "publish_post()"
    }
  },
  {
    id: "analyst",
    name: "PerformanceAnalystAgent",
    role: "Sobrecarga Progresiva",
    desc: "Calcula el tonelaje total, RPE medio y predice el momento óptimo para aplicar micro-cargas (+1.25kg / +2.5kg).",
    color: "#34d399",
    icon: TrendingUp,
    angle: 126, // Bottom-Left
    external: {
      name: "Workout History DB",
      action: "get_volume_history()"
    }
  },
  {
    id: "biometrics",
    name: "BiometricsMonitoringAgent",
    role: "Monitorización Biológica",
    desc: "Ingesta métricas de sueño (REM), variabilidad del ritmo cardíaco (VFC) y pasos desde Health Connect.",
    color: "#38bdf8",
    icon: Activity,
    angle: 198, // Top-Left
    external: {
      name: "Health Connect SDK",
      action: "read_daily_steps()"
    }
  }
];

export function MultiAgentOrchestratorSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const [selectedAgent, setSelectedAgent] = useState<AgentNode>(agents[0]);
  const [isHovered, setIsHovered] = useState(false);

  const radius = 170; // Radius of circular orchestrator orbit

  return (
    <section id="architecture" className="relative z-10 py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-emerald-400 uppercase tracking-widest"
        >
          {lang === "es" ? "Arquitectura Multi-Agente Autónoma" : "Autonomous Multi-Agent Architecture"}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f7f8f8] mt-3"
        >
          {lang === "es" ? "5 Micro-Agentes Cognitivos. Un Orquestador Central." : "5 Cognitive Micro-Agents. One Central Orchestrator."}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-[#8a8f98] mt-4 leading-relaxed"
        >
          {lang === "es"
            ? "Inspirado en la orquestación distribuida con Google Gemini Flash. Haz clic en cualquier nodo para explorar cómo interactúa cada micro-agente con el sistema operativo y las bases de datos locales."
            : "Engineered with distributed Gemini AI orchestration. Click on any node to explore how each micro-agent interfaces with Android OS and local databases."}
        </motion.p>
      </div>

      {/* Main Interactive Stage: Constellation Diagram + Detail Inspection Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT / CENTER: Animated Interactive Constellation Diagram */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px]">
          
          {/* Orbital Glowing Ring */}
          <div className="absolute w-[340px] h-[340px] rounded-full border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.08)] pointer-events-none" />
          
          {/* Dynamic Laser Pulse Ring */}
          <svg className="absolute w-[440px] h-[440px] pointer-events-none overflow-visible" viewBox="0 0 440 440">
            {/* Center Origin (220, 220) to each node connection lines */}
            {agents.map((agent) => {
              const rad = (agent.angle * Math.PI) / 180;
              const x = 220 + radius * Math.cos(rad);
              const y = 220 + radius * Math.sin(rad);
              const isSelected = selectedAgent.id === agent.id;

              return (
                <g key={agent.id}>
                  {/* Connection Line to Orchestrator */}
                  <line
                    x1="220"
                    y1="220"
                    x2={x}
                    y2={y}
                    stroke={isSelected ? "#34d399" : "rgba(255,255,255,0.12)"}
                    strokeWidth={isSelected ? "2" : "1"}
                    strokeDasharray={isSelected ? "none" : "4 4"}
                    className="transition-colors duration-300"
                  />
                  {/* Animated Energy Particle flowing between Orchestrator and Agent */}
                  {isSelected && (
                    <motion.circle
                      r="3.5"
                      fill="#34d399"
                      animate={{
                        cx: [220, x],
                        cy: [220, y],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="shadow-[0_0_10px_#34d399]"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* 🔴 CENTER CORE: Master Orchestrator (Google Gemini Brain) */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-30 flex flex-col items-center justify-center cursor-pointer group"
          >
            {/* Core Glow */}
            <div className="absolute w-28 h-28 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/35 transition-all" />
            
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#0b1610] via-[#10241a] to-[#0d1c14] border-2 border-emerald-400 p-1 flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.4)]">
              <div className="w-full h-full rounded-full bg-[#050906] flex flex-col items-center justify-center">
                <Brain size={22} className="text-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold text-white tracking-wider mt-0.5">ORCHESTRATOR</span>
              </div>
            </div>
          </motion.div>

          {/* 🔵 5 SURROUNDING AGENT NODES (Positioned along trigonometry circle) */}
          {agents.map((agent) => {
            const rad = (agent.angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);
            const isSelected = selectedAgent.id === agent.id;
            const Icon = agent.icon;

            return (
              <motion.div
                key={agent.id}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                whileHover={{ scale: 1.15 }}
                onClick={() => setSelectedAgent(agent)}
                className={`absolute z-30 flex flex-col items-center cursor-pointer transition-all ${
                  isSelected ? "scale-110" : "opacity-85 hover:opacity-100"
                }`}
              >
                {/* Node Orb */}
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    isSelected 
                      ? "bg-[#0c1c14] border-2 border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)] text-emerald-400" 
                      : "bg-[#09110d] border border-white/[0.15] text-zinc-400 hover:text-white hover:border-emerald-400/50"
                  }`}
                >
                  <Icon size={18} />
                </div>

                {/* Node Label Below Orb */}
                <div className="mt-1.5 px-2 py-0.5 rounded-md bg-[#050806]/90 border border-white/[0.08] backdrop-blur-md">
                  <span className={`text-[10px] font-mono whitespace-nowrap ${isSelected ? "text-emerald-400 font-bold" : "text-zinc-400"}`}>
                    {agent.name.replace("Agent", "")}
                  </span>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* RIGHT: Live Telemetry Inspection Terminal for Selected Agent */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAgent.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#09100c]/80 border border-emerald-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden"
            >
              {/* Top Laser Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

              {/* Agent Title & Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">
                    {selectedAgent.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  AUTONOMOUS
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedAgent.role}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {selectedAgent.desc}
              </p>

              {/* Protocol & Function Signature */}
              <div className="p-4 rounded-2xl bg-[#050806] border border-white/[0.08] font-mono text-xs text-zinc-400 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-white/[0.06] pb-2">
                  <span>SUBSISTEMA CONECTADO</span>
                  <span className="text-emerald-400">{selectedAgent.external.name}</span>
                </div>
                <div className="pt-1 text-emerald-300">
                  <span className="text-zinc-500">&gt; </span>
                  <span className="text-purple-400">fun</span> <span className="text-blue-300">{selectedAgent.external.action}</span>: <span className="text-yellow-400">AgentResult</span>
                </div>
              </div>

              {/* Quick Selectors for Other Agents */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 font-mono">SELECCIONAR NODO:</span>
                <div className="flex gap-1.5">
                  {agents.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedAgent(a)}
                      className={`w-7 h-7 rounded-lg text-xs font-mono flex items-center justify-center transition-all ${
                        selectedAgent.id === a.id 
                          ? "bg-emerald-400 text-black font-bold shadow-[0_0_10px_rgba(52,211,153,0.5)]" 
                          : "bg-white/[0.04] text-zinc-400 hover:text-white"
                      }`}
                    >
                      {a.name.charAt(0)}
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}
