"use client";

import React, { useState, useEffect } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { Dumbbell, Flame, TrendingUp, CheckCircle2, Play, Sparkles } from "lucide-react";

export function GymWorkoutCardMockup() {
  const [reps, setReps] = useState(8);
  const [completedSets, setCompletedSets] = useState(2);
  const [isLiveActive, setIsLiveActive] = useState(true);

  return (
    <div className="w-full h-full bg-[#0e1410] border border-white/[0.08] p-5 sm:p-6 rounded-[28px] sm:rounded-[32px] flex flex-col justify-between text-white font-sans select-none shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header: Ejercicio Actual + Live Badge */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
            <Dumbbell size={12} />
            <span>Serie Efectiva 3 de 4</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Press Banca Plano
          </h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            Sobrecarga Progresiva • 85.0 kg
          </p>
        </div>

        {/* Live Active Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
          <span>EN VIVO</span>
        </div>
      </div>

      {/* Series Grid con Checkmarks */}
      <div className="grid grid-cols-4 gap-2 my-3">
        {[
          { set: 1, kg: "82.5", reps: 8, done: true, rpe: "@8" },
          { set: 2, kg: "85.0", reps: 8, done: true, rpe: "@8.5" },
          { set: 3, kg: "85.0", reps: 7, done: false, active: true, rpe: "@9" },
          { set: 4, kg: "85.0", reps: 6, done: false, rpe: "@9.5" },
        ].map((s) => (
          <div
            key={s.set}
            className={`p-2.5 rounded-2xl border flex flex-col items-center justify-between text-center transition-all ${
              s.active
                ? "bg-emerald-950/60 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                : s.done
                ? "bg-[#141f17] border-white/[0.08]"
                : "bg-[#090e0b] border-white/[0.04] opacity-50"
            }`}
          >
            <div className="flex items-center justify-between w-full text-[9px] font-mono text-zinc-400 mb-1">
              <span>S{s.set}</span>
              <span className="text-emerald-400 font-bold">{s.rpe}</span>
            </div>
            <span className="text-base font-black text-white font-mono">{s.kg}</span>
            <span className="text-[10px] text-zinc-400 font-medium">{s.reps} reps</span>
            <div className="mt-1">
              {s.done ? (
                <CheckCircle2 size={14} className="text-emerald-400 fill-emerald-950" />
              ) : s.active ? (
                <motion.div
                  animate={{ scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </motion.div>
              ) : (
                <div className="w-3.5 h-3.5 rounded-full border border-zinc-700" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer: Descanso en Vivo + Micro-ajuste */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Flame size={14} />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-medium">Temporizador de Descanso</span>
            <span className="text-xs font-mono font-black text-white">01:42 / 02:00</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141f17] border border-white/[0.08] text-[10.5px] font-bold text-zinc-200">
          <Sparkles size={12} className="text-emerald-400" />
          <span>RIR Óptimo: 1</span>
        </div>
      </div>
    </div>
  );
}
