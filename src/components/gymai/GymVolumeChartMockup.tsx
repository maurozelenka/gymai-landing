"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Activity, Zap } from "lucide-react";

export function GymVolumeChartMockup() {
  return (
    <div className="w-full h-full bg-[#0d1410] border border-white/[0.08] p-5 rounded-[24px] flex flex-col justify-between text-white font-sans select-none shadow-2xl relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex justify-between items-center mb-1">
        <div>
          <p className="text-[10px] font-medium text-zinc-400 tracking-tight">
            Volumen Semanal Acumulado
          </p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-xl font-black tracking-tight text-white font-mono">18,450 kg</span>
            <span className="text-[10.5px] font-bold text-emerald-400 flex items-center gap-0.5">
              <TrendingUp size={11} /> +14.2%
            </span>
          </div>
        </div>
        <div className="flex gap-1 text-[9.5px] font-bold text-zinc-400">
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold">SEM</span>
          <span className="px-2 py-0.5 rounded text-zinc-500">MES</span>
          <span className="px-2 py-0.5 rounded text-zinc-500">AÑO</span>
        </div>
      </div>

      {/* 📈 Curva de Volumen e Intensidad Verde Neón */}
      <div className="flex-1 relative flex items-end overflow-hidden pb-1">
        <svg viewBox="0 0 300 120" className="w-full h-24 overflow-visible">
          <defs>
            <linearGradient id="gymWaveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#059669" stopOpacity="0.25" />
              <stop offset="80%" stopColor="#047857" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Shaded Area */}
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            d="M0,85 C40,75 70,68 100,75 C130,82 155,50 180,32 C210,12 230,52 250,70 C270,88 285,45 300,18 L300,120 L0,120 Z"
            fill="url(#gymWaveGrad)"
          />

          {/* Neon Stroke Path */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            d="M0,85 C40,75 70,68 100,75 C130,82 155,50 180,32 C210,12 230,52 250,70 C270,88 285,45 300,18"
            fill="none"
            stroke="#34d399"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 4px 12px rgba(52, 211, 153, 0.6))",
            }}
          />
        </svg>
      </div>

      {/* Footer Días */}
      <div className="flex justify-between text-[9px] font-mono text-zinc-500 pt-1 border-t border-white/[0.04]">
        <span>LUN</span>
        <span>MAR</span>
        <span className="text-emerald-400 font-bold">MIE</span>
        <span>JUE</span>
        <span>VIE</span>
        <span>SAB</span>
        <span>DOM</span>
      </div>
    </div>
  );
}
