"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Activity, Footprints, Moon, Shield } from "lucide-react";

export function GymBioRingMockup() {
  // Circumference for r=38 is 238.76
  const C = 238.76;
  const chestArc = (40 / 100) * C;
  const backArc = (30 / 100) * C;
  const legsArc = (20 / 100) * C;
  const armsArc = (10 / 100) * C;

  return (
    <div className="w-full h-full bg-[#101712] rounded-[24px] border border-white/[0.08] p-4 sm:p-5 flex flex-col justify-between text-white font-sans select-none shadow-2xl overflow-hidden relative">
      {/* Ambient Glows */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-medium text-zinc-400 tracking-tight">
            Distribución Muscular
          </p>
          <span className="text-[9px] font-mono text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
            Health Sync
          </span>
        </div>

        {/* 🍩 Donut Chart de Grupos Musculares */}
        <div className="relative w-28 h-28 mx-auto my-1 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 origin-center">
            {/* Background */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#16221a" strokeWidth="11" />

            {/* Pecho / Empuje (40% - Esmeralda) */}
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="11"
              strokeDasharray={`${chestArc} ${C - chestArc}`}
              initial={{ strokeDashoffset: chestArc }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
            />

            {/* Espalda / Tracción (30% - Cian) */}
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#06b6d4"
              strokeWidth="11"
              strokeDasharray={`${backArc} ${C - backArc}`}
              strokeDashoffset={-chestArc}
              initial={{ strokeDashoffset: -chestArc + backArc }}
              whileInView={{ strokeDashoffset: -chestArc }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />

            {/* Pierna (20% - Púrpura) */}
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#a855f7"
              strokeWidth="11"
              strokeDasharray={`${legsArc} ${C - legsArc}`}
              strokeDashoffset={-(chestArc + backArc)}
              initial={{ strokeDashoffset: -(chestArc + backArc) + legsArc }}
              whileInView={{ strokeDashoffset: -(chestArc + backArc) }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />

            {/* Brazos / Hombro (10% - Ámbar) */}
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              fill="transparent"
              stroke="#f59e0b"
              strokeWidth="11"
              strokeDasharray={`${armsArc} ${C - armsArc}`}
              strokeDashoffset={-(chestArc + backArc + legsArc)}
              initial={{ strokeDashoffset: -(chestArc + backArc + legsArc) + armsArc }}
              whileInView={{ strokeDashoffset: -(chestArc + backArc + legsArc) }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.7 }}
            />
          </svg>

          {/* Center Info */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-xs font-mono text-white font-black leading-none">24</span>
            <span className="text-[7.5px] text-zinc-400 font-medium leading-none mt-0.5">Series Tot.</span>
          </div>
        </div>

        {/* Legend Rows */}
        <div className="flex flex-col gap-1.5 mt-2">
          <MuscleRow label="Torso / Empuje" val="40%" color="bg-emerald-500" />
          <MuscleRow label="Espalda / Tirón" val="30%" color="bg-cyan-500" />
          <MuscleRow label="Pierna / Glúteo" val="20%" color="bg-purple-500" />
          <MuscleRow label="Brazo / Core" val="10%" color="bg-amber-500" />
        </div>
      </div>

      {/* Footer VFC / Fatiga */}
      <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10.5px]">
        <span className="text-zinc-400 font-medium flex items-center gap-1">
          <Activity size={12} className="text-emerald-400" /> Recuperación
        </span>
        <span className="text-emerald-400 font-black font-mono">94% Óptimo</span>
      </div>
    </div>
  );
}

function MuscleRow({ label, val, color }: { label: string; val: string; color: string }) {
  return (
    <div className="flex items-center justify-between gap-2 text-[10.5px]">
      <div className="flex items-center gap-1.5">
        <div className={`w-2 h-2 rounded-full ${color} shrink-0`} />
        <span className="text-zinc-300 font-medium truncate">{label}</span>
      </div>
      <span className="font-black text-white font-mono">{val}</span>
    </div>
  );
}
