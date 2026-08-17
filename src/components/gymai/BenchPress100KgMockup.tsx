"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Flame, Activity, Sparkles, TrendingUp, ShieldCheck, Play, Pause } from "lucide-react";
import Image from "next/image";

export function BenchPress100KgMockup() {
  const [currentRep, setCurrentRep] = useState(1);
  const [isLifting, setIsLifting] = useState(true);
  const [barPhase, setBarPhase] = useState<"descending" | "pushing" | "locked">("pushing");

  useEffect(() => {
    // Rep counting loop
    const interval = setInterval(() => {
      setCurrentRep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[580px] bg-[#080d09] border border-emerald-500/30 rounded-[32px] sm:rounded-[38px] p-5 sm:p-7 text-white font-sans select-none shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden">
      
      {/* 🟢 Ambient Glows */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 🚀 Header: Ejercicio 100KG + Live Biometrics Badge */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Serie Efectiva • Sobrecarga Progresiva</span>
          </div>
          <div className="flex items-baseline gap-3">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Press Banca
            </h3>
            {/* 100 KG Neon Milestone Pill */}
            <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500 text-black font-black text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              100.0 KG
            </span>
          </div>
        </div>

        {/* Live Velocity / Bar Speed Pill */}
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121f16] border border-emerald-500/40 text-emerald-400 text-[10.5px] font-bold font-mono">
            <Activity size={12} className="animate-pulse" />
            <span>0.48 m/s • RPE 9.0</span>
          </div>
          <span className="text-[9px] font-mono text-zinc-400">VMP (Velocidad Media)</span>
        </div>
      </div>

      {/* 🏋️‍♂️ 2. ANIMATED BENCH PRESS BENCH & ATHLETE (Kinematic Clean Vector) */}
      <div className="relative w-full h-[220px] sm:h-[260px] bg-[#050806] rounded-2xl border border-white/[0.06] flex items-center justify-center overflow-hidden my-2">
        
        {/* Isometric Gym Floor Grid */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />

        {/* Live Path Velocity Laser Tracer (Green Track) */}
        <div className="absolute left-[38%] top-10 bottom-16 w-[1.5px] bg-emerald-500/30">
          <motion.div 
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-2.5 h-2.5 -left-[4.5px] rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] relative"
          />
        </div>

        {/* 🦾 BENCH & ATHLETE SVG WITH SYNCHRONIZED 100KG BAR LIFTING */}
        <svg viewBox="0 0 400 240" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="barbellSteel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="plate20kg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>

          {/* 1. Heavy Steel Power Rack Structure */}
          <g id="rack">
            {/* Left Upright */}
            <rect x="50" y="30" width="12" height="170" rx="3" fill="#18181b" stroke="#27272a" strokeWidth="2" />
            <rect x="42" y="195" width="28" height="12" rx="3" fill="#09090b" />
            {/* J-Hooks / Safety Catch */}
            <path d="M56 80 L72 80 L72 90 L60 90 Z" fill="#f59e0b" stroke="#78350f" />

            {/* Right Upright */}
            <rect x="338" y="30" width="12" height="170" rx="3" fill="#18181b" stroke="#27272a" strokeWidth="2" />
            <rect x="330" y="195" width="28" height="12" rx="3" fill="#09090b" />
            <path d="M344 80 L328 80 L328 90 L340 90 Z" fill="#f59e0b" stroke="#78350f" />

            {/* Crossbeam */}
            <rect x="50" y="185" width="300" height="8" fill="#18181b" />
          </g>

          {/* 2. Flat Bench (Banca Plana) */}
          <g id="bench">
            <rect x="110" y="150" width="180" height="16" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="2" />
            {/* Bench Steel Legs */}
            <rect x="135" y="166" width="10" height="38" fill="#1e293b" />
            <rect x="255" y="166" width="10" height="38" fill="#1e293b" />
            <rect x="120" y="200" width="40" height="8" rx="2" fill="#09090b" />
            <rect x="240" y="200" width="40" height="8" rx="2" fill="#09090b" />
          </g>

          {/* 3. Athlete on Bench */}
          <g id="athlete">
            {/* Head & Neck */}
            <circle cx="130" cy="142" r="11" fill="#fde68a" stroke="#09090b" strokeWidth="2" />
            {/* Torso & Arch (Retracción Escapular) */}
            <path d="M140 148 Q180 134 225 150 L225 156 L140 156 Z" fill="#10b981" stroke="#064e3b" strokeWidth="2" />
            {/* Legs & Feet on Ground */}
            <path d="M225 150 L255 170 L260 204" fill="none" stroke="#1e293b" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="250" y="200" width="22" height="8" rx="2" fill="#09090b" />
          </g>

          {/* 4. 🦾 DYNAMIC ARMS & 100KG BARBELL (Animated Full Range of Motion) */}
          <motion.g
            animate={{ y: [0, 52, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: [0.45, 0.05, 0.55, 0.95]
            }}
          >
            {/* Forearms & Hands gripping the bar */}
            {/* Left Arm from shoulder (160, 142) to hand (165, 82) */}
            <motion.path 
              d="M158 142 L138 108 L162 76" 
              fill="none" 
              stroke="#fde68a" 
              strokeWidth="9" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            {/* Right Arm from shoulder (185, 142) to hand (235, 82) */}
            <motion.path 
              d="M185 142 L212 108 L238 76" 
              fill="none" 
              stroke="#fde68a" 
              strokeWidth="9" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />

            {/* 100 KG OLYMPIC BARBELL (Barra Olímpica de 20kg + 2x20kg + 2x20kg...) */}
            {/* Main 2.2m Olympic Shaft */}
            <rect x="35" y="72" width="330" height="7" rx="2" fill="url(#barbellSteel)" stroke="#334155" strokeWidth="1" />
            {/* Knurling (Moleteado) */}
            <rect x="120" y="73" width="50" height="5" fill="#64748b" opacity="0.6" />
            <rect x="230" y="73" width="50" height="5" fill="#64748b" opacity="0.6" />

            {/* LEFT SIDE PLATES (100KG Total = 20kg bar + 40kg each side) */}
            {/* Sleeve Collar */}
            <rect x="80" y="68" width="6" height="15" fill="#94a3b8" />
            {/* Plate 1: 20 KG Bumper Plate */}
            <rect x="68" y="38" width="11" height="75" rx="3" fill="url(#plate20kg)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="73.5" y="78" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle" transform="rotate(-90 73.5 78)">20KG</text>
            {/* Plate 2: 20 KG Bumper Plate */}
            <rect x="55" y="38" width="11" height="75" rx="3" fill="url(#plate20kg)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="60.5" y="78" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle" transform="rotate(-90 60.5 78)">20KG</text>
            {/* Barbell Collar Lock */}
            <rect x="48" y="69" width="6" height="13" rx="2" fill="#ef4444" />

            {/* RIGHT SIDE PLATES */}
            <rect x="314" y="68" width="6" height="15" fill="#94a3b8" />
            {/* Plate 1: 20 KG */}
            <rect x="321" y="38" width="11" height="75" rx="3" fill="url(#plate20kg)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="326.5" y="78" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle" transform="rotate(90 326.5 78)">20KG</text>
            {/* Plate 2: 20 KG */}
            <rect x="334" y="38" width="11" height="75" rx="3" fill="url(#plate20kg)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="339.5" y="78" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle" transform="rotate(90 339.5 78)">20KG</text>
            {/* Collar Lock */}
            <rect x="346" y="69" width="6" height="13" rx="2" fill="#ef4444" />
          </motion.g>
        </svg>

        {/* 📊 Live Overlay HUD Stats */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono font-bold bg-[#090f0b]/90 backdrop-blur-md border border-white/[0.08] px-3.5 py-1.5 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Repetición:</span>
            <span className="text-emerald-400 text-xs font-black">{currentRep} / 5</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Fuerza Aplicada:</span>
            <span className="text-white">981 N</span>
          </div>
          <div className="flex items-center gap-1.5 text-teal-400">
            <Sparkles size={12} />
            <span>Técnica: 98% Óptima</span>
          </div>
        </div>

      </div>

      {/* 🟢 3. Live Routine Progression Bottom Bar */}
      <div className="grid grid-cols-5 gap-2 mt-3">
        {[
          { set: 1, load: "90 kg", reps: "8 reps", rpe: "@7.5", done: true },
          { set: 2, load: "95 kg", reps: "6 reps", rpe: "@8.5", done: true },
          { set: 3, load: "100 kg", reps: "5 reps", rpe: "@9.0", active: true },
          { set: 4, load: "100 kg", reps: "4 reps", rpe: "@9.5", done: false },
          { set: 5, load: "85 kg", reps: "Drop 10", rpe: "@10", done: false },
        ].map((s, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-xl border text-center transition-all ${
              s.active
                ? "bg-emerald-950/70 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : s.done
                ? "bg-[#0e1711] border-white/[0.08]"
                : "bg-[#060a07] border-white/[0.04] opacity-40"
            }`}
          >
            <div className="text-[8.5px] font-mono text-zinc-400 flex justify-between">
              <span>S{s.set}</span>
              <span className="text-emerald-400 font-bold">{s.rpe}</span>
            </div>
            <p className="text-xs sm:text-sm font-black text-white font-mono mt-0.5">{s.load}</p>
            <span className="text-[8px] text-zinc-400 block">{s.reps}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
