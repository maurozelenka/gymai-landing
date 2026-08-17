"use client";

import { 
  Footprints, 
  Dumbbell, 
  Flame, 
  Droplet, 
  Bookmark, 
  Heart, 
  Activity,
  Users,
  Bot,
  User,
  Sparkles,
  Zap
} from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export function GymTabletMockup() {
  const [steps, setSteps] = useState(0);
  const [cals, setCals] = useState(0);
  const [water, setWater] = useState(0);

  useEffect(() => {
    // 1. Steps counter animation 0 -> 3315
    const stepsCount = animate(0, 3315, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setSteps(Math.round(latest)),
    });

    // 2. Calories counter animation 0 -> 1548
    const calsCount = animate(0, 1548, {
      duration: 1.6,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCals(Math.round(latest)),
    });

    // 3. Water counter animation 0 -> 2.5
    const waterCount = animate(0, 2.5, {
      duration: 1.4,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setWater(Number(latest.toFixed(1))),
    });

    return () => {
      stepsCount.stop();
      calsCount.stop();
      waterCount.stop();
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-[#060a07] text-white font-sans flex flex-col justify-between select-none overflow-hidden p-3.5 text-[10px]">
      
      {/* 🔮 Shimmer Light Sweep across glass */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -skew-x-12 pointer-events-none z-30"
      />

      {/* 🟢 Top Row: 3 Stats Cards + Avatar M + Live AI indicator */}
      <div className="flex items-center gap-2 mb-2">
        {/* 3 Stats Badges */}
        <div className="flex-1 grid grid-cols-3 gap-1.5">
          {/* Seguidores */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            className="bg-[#101512] border border-white/[0.06] hover:border-emerald-500/30 transition-colors rounded-xl py-1.5 px-2 text-center flex flex-col items-center justify-center shadow-inner"
          >
            <span className="text-sm font-black text-white leading-tight">248</span>
            <span className="text-[7px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5">
              Seguidores
            </span>
          </motion.div>

          {/* Siguiendo */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            className="bg-[#101512] border border-white/[0.06] hover:border-emerald-500/30 transition-colors rounded-xl py-1.5 px-2 text-center flex flex-col items-center justify-center shadow-inner"
          >
            <span className="text-sm font-black text-white leading-tight">180</span>
            <span className="text-[7px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5">
              Siguiendo
            </span>
          </motion.div>

          {/* Entrenos */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            className="bg-[#101512] border border-white/[0.06] hover:border-emerald-500/30 transition-colors rounded-xl py-1.5 px-2 text-center flex flex-col items-center justify-center shadow-inner"
          >
            <span className="text-sm font-black text-emerald-400 leading-tight">4</span>
            <span className="text-[7px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5">
              Entrenos
            </span>
          </motion.div>
        </div>

        {/* Circular Avatar with Glowing Pulsing Green Ring */}
        <motion.div 
          animate={{
            boxShadow: [
              "0 0 10px rgba(52,211,153,0.4)",
              "0 0 20px rgba(52,211,153,0.8)",
              "0 0 10px rgba(52,211,153,0.4)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full bg-[#0a140f] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 font-black text-xs shrink-0 cursor-pointer"
        >
          M
        </motion.div>
      </div>

      {/* 🟢 Pill Switcher: Actividad vs Salud with Live AI Badge */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex-1 grid grid-cols-2 p-0.5 bg-[#0d130f] rounded-full border border-white/[0.06]">
          <div className="flex items-center justify-center gap-1 py-1 text-zinc-400 text-[8px] font-semibold">
            <Activity size={10} />
            <span>Actividad</span>
          </div>
          <div className="flex items-center justify-center gap-1 py-1 rounded-full bg-[#1b2520] text-emerald-400 text-[8px] font-bold shadow-xs border border-emerald-500/20">
            <Heart size={10} className="fill-emerald-400 text-emerald-400 animate-pulse" />
            <span>Salud</span>
          </div>
        </div>

        {/* Live Gemini AI Badge */}
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[7.5px] font-bold shadow-[0_0_8px_rgba(16,185,129,0.3)]">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
          <span>GEMINI AI SYNC</span>
        </div>
      </div>

      {/* 🟢 Symmetric Cards Grid (3 columns x 2 rows, animated charts & live gauges) */}
      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 my-0.5 overflow-hidden items-stretch">
        
        {/* 1. PASOS with Animated Concentric Rings */}
        <motion.div 
          whileHover={{ y: -2, borderColor: "rgba(16,185,129,0.4)" }}
          className="bg-[#101512] border border-white/[0.06] rounded-2xl p-2.5 flex flex-col justify-between transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-emerald-400 text-[7.5px] font-bold uppercase tracking-wider">
              <Footprints size={10} />
              <span>Pasos</span>
            </div>
            <span className="text-[7px] text-emerald-400 font-semibold">10k meta</span>
          </div>

          <div className="flex items-center justify-between gap-1 mt-0.5">
            <span className="text-sm font-black tracking-tight text-white font-mono">
              {steps.toLocaleString("es-ES")}
            </span>

            {/* Concentric Drawing Rings */}
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Background tracks */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#23171a" strokeWidth="9" />
                <circle cx="50" cy="50" r="28" fill="transparent" stroke="#102523" strokeWidth="9" />
                <circle cx="50" cy="50" r="16" fill="transparent" stroke="#11291f" strokeWidth="9" />

                {/* Outer Ring: Calories / Move */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#f43f5e"
                  strokeWidth="9"
                  strokeDasharray="251.3"
                  initial={{ strokeDashoffset: 251.3 }}
                  animate={{ strokeDashoffset: 95 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  strokeLinecap="round"
                />

                {/* Middle Ring: Cardio / Exercise */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="28"
                  fill="transparent"
                  stroke="#06b6d4"
                  strokeWidth="9"
                  strokeDasharray="175.9"
                  initial={{ strokeDashoffset: 175.9 }}
                  animate={{ strokeDashoffset: 50 }}
                  transition={{ duration: 1.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  strokeLinecap="round"
                />

                {/* Inner Ring: Steps */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="16"
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth="9"
                  strokeDasharray="100.5"
                  initial={{ strokeDashoffset: 100.5 }}
                  animate={{ strokeDashoffset: 22 }}
                  transition={{ duration: 2.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 2. RUTINAS with Animated Equalizer Bars */}
        <motion.div 
          whileHover={{ y: -2, borderColor: "rgba(16,185,129,0.4)" }}
          className="bg-[#101512] border border-white/[0.06] rounded-2xl p-2.5 flex flex-col justify-between transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-emerald-400 text-[7.5px] font-bold uppercase tracking-wider">
              <Dumbbell size={10} />
              <span>Rutinas</span>
            </div>
            <span className="text-[7px] text-zinc-400 font-semibold">Semana</span>
          </div>

          <div className="flex items-end justify-between gap-1 mt-0.5">
            <span className="text-xs font-black text-white leading-tight font-mono">4 comp.</span>
            
            {/* Animated Growing & Pulsing Bar Chart */}
            <div className="flex items-end gap-1 h-5 px-1">
              {[35, 60, 45, 100, 75, 50, 30].map((h, i) => (
                <motion.div 
                  key={i} 
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: 1,
                    height: [`${h * 0.8}%`, `${h}%`, `${h * 0.85}%`]
                  }}
                  transition={{ 
                    scaleY: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
                    height: { duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className={`w-1.5 origin-bottom rounded-t-xs ${
                    i === 3 
                      ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" 
                      : i === 4
                      ? "bg-teal-400/80 shadow-[0_0_6px_rgba(45,212,191,0.5)]"
                      : "bg-zinc-700/60"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. IMC & COMPLEXIÓN with Pulse Pointer */}
        <motion.div 
          whileHover={{ y: -2, borderColor: "rgba(168,85,247,0.4)" }}
          className="bg-[#101512] border border-white/[0.06] rounded-2xl p-2.5 flex flex-col justify-between transition-colors shadow-sm"
        >
          <div>
            <div className="flex items-center gap-1 text-purple-400 text-[7.5px] font-bold uppercase tracking-wider">
              <Bookmark size={9} />
              <span className="truncate">IMC</span>
            </div>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xs font-black text-white font-mono">24.2</span>
              <span className="text-[7px] font-bold text-emerald-400">Saludable</span>
            </div>
          </div>
          <div className="relative w-full h-1.5 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-emerald-400 via-amber-400 to-rose-500 mt-1">
            <motion.div 
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 left-[48%] w-1.5 bg-white rounded-full ring-1 ring-black shadow-[0_0_6px_rgba(255,255,255,0.9)]" 
            />
          </div>
        </motion.div>

        {/* 4. CALORÍAS with Animated Radial Arc */}
        <motion.div 
          whileHover={{ y: -2, borderColor: "rgba(249,115,22,0.4)" }}
          className="bg-[#101512] border border-white/[0.06] rounded-2xl p-2.5 flex flex-col justify-between transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-amber-500 text-[7.5px] font-bold uppercase tracking-wider">
              <Flame size={9} className="animate-bounce" />
              <span>Calorías</span>
            </div>
            <span className="text-[7px] text-zinc-400 font-semibold">2.5k</span>
          </div>

          <div className="flex items-center justify-between gap-1 mt-0.5">
            <span className="text-xs font-black text-white font-mono">
              {cals.toLocaleString("es-ES")} kcal
            </span>
            {/* Orange Circular Arc */}
            <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#251a14" strokeWidth="4" />
                <motion.path 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="#f97316" 
                  strokeWidth="4" 
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: "68, 100" }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  strokeLinecap="round" 
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 5. HIDRATACIÓN with Animated Fluid */}
        <motion.div 
          whileHover={{ y: -2, borderColor: "rgba(6,182,212,0.4)" }}
          className="bg-[#101512] border border-white/[0.06] rounded-2xl p-2.5 flex flex-col justify-between transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-cyan-400 text-[7.5px] font-bold uppercase tracking-wider">
              <Droplet size={10} className="animate-pulse" />
              <span>Agua</span>
            </div>
            <span className="text-[7px] text-zinc-400 font-semibold">3.0L</span>
          </div>

          <div className="flex items-center justify-between gap-1 mt-0.5">
            <span className="text-xs font-black text-white font-mono">
              {water} L
            </span>
            {/* Animated Cyan Flask with Glowing Liquid */}
            <div className="w-7 h-8 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 48" className="w-full h-full">
                <path d="M16 4 H24 V16 L36 38 C38 42 35 46 30 46 H10 C5 46 2 42 4 38 L16 16 Z" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <motion.path 
                  d="M7.5 35 L12 26 H28 L32.5 35 C34 38 32 44 28 44 H12 C8 44 6 38 7.5 35 Z" 
                  fill="#06b6d4"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 6. SUEÑO with Live Pulsing ECG Waveform */}
        <motion.div 
          whileHover={{ y: -2, borderColor: "rgba(129,140,248,0.4)" }}
          className="bg-[#101512] border border-white/[0.06] rounded-2xl p-2.5 flex flex-col justify-between transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-indigo-400 text-[7.5px] font-bold uppercase tracking-wider">
              <Heart size={10} />
              <span>Sueño</span>
            </div>
            <span className="text-[7px] text-emerald-400 font-semibold">Óptimo</span>
          </div>

          <div className="flex items-center justify-between gap-1 mt-0.5">
            <span className="text-xs font-black text-white font-mono">7h 45m</span>
            {/* Live Sleep Waveform with Glowing Path */}
            <div className="w-7 h-5 flex items-center justify-center shrink-0 overflow-hidden">
              <svg viewBox="0 0 32 20" className="w-full h-full">
                <motion.path 
                  d="M0,10 Q4,2 8,10 T16,10 T24,4 T32,12" 
                  fill="none" 
                  stroke="#818cf8" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  animate={{
                    pathLength: [0.6, 1, 0.6],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 🟢 Bottom Tab Navigation with Active Glow */}
      <div className="bg-[#050806] border-t border-white/[0.06] -mx-3.5 -mb-3.5 px-4 py-1.5 flex justify-around items-center text-[7.5px] text-zinc-500 font-semibold">
        <div className="flex items-center gap-1 hover:text-zinc-300 transition-colors cursor-pointer">
          <Users size={10} />
          <span>Social</span>
        </div>
        <div className="flex items-center gap-1 hover:text-zinc-300 transition-colors cursor-pointer">
          <Dumbbell size={10} />
          <span>Rutinas</span>
        </div>
        <div className="flex items-center gap-1 hover:text-zinc-300 transition-colors cursor-pointer">
          <Bot size={10} />
          <span>Asistente</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-400 font-bold">
          <User size={10} />
          <span>Perfil</span>
        </div>
      </div>

    </div>
  );
}
