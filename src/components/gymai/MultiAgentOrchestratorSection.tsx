"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface GymIsometricFeature {
  fig: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  renderGraphic: (isHovered: boolean) => React.ReactNode;
}

const gymFeatures: GymIsometricFeature[] = [
  {
    fig: "FIG 0.1",
    title: "Sobrecarga Progresiva & Discos",
    titleEn: "Progressive Overload & Plates",
    desc: "Cálculo matemático de discos olímpicos (20kg, 10kg, 2.5kg, 1.25kg) para no fallar el tonelaje de la serie.",
    descEn: "Mathematical barbell plate loader calculating exact Olympic increments (+1.25kg, +2.5kg).",
    // Isometric Olympic Barbell & Weight Plates Stack
    renderGraphic: (isHovered: boolean) => (
      <svg className="w-full h-44 overflow-visible" viewBox="0 0 200 160" fill="none">
        {/* Isometric Barbell Sleeve (Center Axis) */}
        <line
          x1="30"
          y1="120"
          x2="170"
          y2="40"
          stroke={isHovered ? "#34d399" : "#3e444a"}
          strokeWidth="3.5"
          strokeLinecap="round"
          className="transition-colors duration-300"
        />

        {/* 1. Large 20kg Olympic Bumper Plate */}
        <motion.g
          animate={{ x: isHovered ? -6 : 0, y: isHovered ? 3.5 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Outer Ring */}
          <ellipse
            cx="80"
            cy="91"
            rx="24"
            ry="48"
            stroke={isHovered ? "#34d399" : "#4a5158"}
            strokeWidth="1.4"
            fill="none"
          />
          {/* Inner Lip */}
          <ellipse
            cx="80"
            cy="91"
            rx="18"
            ry="36"
            stroke="#2a2e32"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          {/* Plate Center Hub */}
          <ellipse cx="80" cy="91" rx="6" ry="12" stroke="#32373c" strokeWidth="1" />
          {/* Plate Rim Lines */}
          <line x1="77" y1="43" x2="83" y2="46" stroke="#4a5158" strokeWidth="1" />
          <line x1="77" y1="139" x2="83" y2="136" stroke="#4a5158" strokeWidth="1" />
        </motion.g>

        {/* 2. Medium 10kg Olympic Plate */}
        <motion.g
          animate={{ x: isHovered ? -2 : 0, y: isHovered ? 1.2 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        >
          <ellipse
            cx="98"
            cy="81"
            rx="19"
            ry="38"
            stroke={isHovered ? "#34d399" : "#42484f"}
            strokeWidth="1.2"
            fill="none"
          />
          <ellipse cx="98" cy="81" rx="5" ry="10" stroke="#32373c" strokeWidth="1" />
        </motion.g>

        {/* 3. Small 5kg Plate */}
        <motion.g
          animate={{ x: isHovered ? 4 : 0, y: isHovered ? -2.3 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <ellipse
            cx="114"
            cy="72"
            rx="14"
            ry="28"
            stroke={isHovered ? "#34d399" : "#42484f"}
            strokeWidth="1.2"
            fill="none"
          />
          <ellipse cx="114" cy="72" rx="4" ry="8" stroke="#32373c" strokeWidth="1" />
        </motion.g>

        {/* 4. Micro 1.25kg Fractional Plate (Floating out on hover) */}
        <motion.g
          animate={{ x: isHovered ? 14 : 0, y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
        >
          <ellipse
            cx="130"
            cy="63"
            rx="10"
            ry="20"
            stroke={isHovered ? "#34d399" : "#565e66"}
            strokeWidth="1.4"
            fill={isHovered ? "rgba(52,211,153,0.06)" : "none"}
          />
          <ellipse cx="130" cy="63" rx="3.5" ry="7" stroke={isHovered ? "#34d399" : "#3e444a"} strokeWidth="1" />
          {/* Weight Callout Label */}
          <text
            x="142"
            y="54"
            fill={isHovered ? "#34d399" : "#565e66"}
            fontSize="8"
            fontFamily="monospace"
            className="transition-colors duration-300"
          >
            +1.25kg
          </text>
        </motion.g>

        {/* Barbell Collar Lock */}
        <motion.g
          animate={{ x: isHovered ? 20 : 0, y: isHovered ? -11.5 : 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
        >
          <ellipse cx="144" cy="55" rx="5" ry="10" stroke="#4a5158" strokeWidth="1.2" />
        </motion.g>

        {/* Floor Isometric Shadow Axis */}
        <line x1="45" y1="140" x2="165" y2="70" stroke="#1f2326" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    fig: "FIG 0.2",
    title: "Mancuerna Hexagonal & Agente IA",
    titleEn: "Hex Dumbbell & AI Agent",
    desc: "Ajuste biomecánico de brazos de palanca, rango de movimiento (ROM) y sustitución inteligente en caliente.",
    descEn: "Intelligent dumbbell & machine swap computing equivalent resistance curves and mechanical tension.",
    // Isometric Hex Dumbbell Wireframe with Neural Trajectory Arc
    renderGraphic: (isHovered: boolean) => (
      <svg className="w-full h-44 overflow-visible" viewBox="0 0 200 160" fill="none">
        {/* Dynamic Neural Motion Arc (Range of Motion trajectory) */}
        <motion.path
          d="M 50 120 C 70 30, 130 30, 150 120"
          stroke={isHovered ? "#34d399" : "#2a2e32"}
          strokeWidth="1.2"
          strokeDasharray="4 4"
          fill="none"
          animate={{ strokeDashoffset: isHovered ? [-20, 0] : 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* ROM Angle Marker */}
        <text
          x="92"
          y="28"
          fill={isHovered ? "#34d399" : "#4a5158"}
          fontSize="9"
          fontFamily="monospace"
          className="transition-colors duration-300 font-bold"
        >
          ROM 92°
        </text>

        {/* Main Hex Dumbbell (Isometric Floating) */}
        <motion.g
          animate={{ y: isHovered ? -10 : 0, rotate: isHovered ? -2 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "100px 80px" }}
        >
          {/* Left Hexagonal Head */}
          <path
            d="M 55 60 L 75 48 L 85 65 L 75 95 L 55 107 L 45 90 Z"
            stroke={isHovered ? "#34d399" : "#4a5158"}
            strokeWidth="1.2"
            fill="none"
          />
          {/* Left Hex Inner Facets */}
          <line x1="75" y1="48" x2="65" y2="78" stroke="#2e3338" strokeWidth="1" />
          <line x1="85" y1="65" x2="65" y2="78" stroke="#2e3338" strokeWidth="1" />
          <line x1="75" y1="95" x2="65" y2="78" stroke="#2e3338" strokeWidth="1" />
          <line x1="55" y1="107" x2="65" y2="78" stroke="#2e3338" strokeWidth="1" />
          <line x1="45" y1="90" x2="65" y2="78" stroke="#2e3338" strokeWidth="1" />
          <line x1="55" y1="60" x2="65" y2="78" stroke="#2e3338" strokeWidth="1" />

          {/* Knurled Handle Grip */}
          <line x1="85" y1="65" x2="115" y2="82" stroke="#68727b" strokeWidth="3" />
          {/* Knurling Crosshatch texture lines */}
          <line x1="93" y1="68" x2="97" y2="73" stroke="#26292d" strokeWidth="1" />
          <line x1="101" y1="73" x2="105" y2="78" stroke="#26292d" strokeWidth="1" />

          {/* Right Hexagonal Head */}
          <path
            d="M 125 78 L 145 66 L 155 83 L 145 113 L 125 125 L 115 108 Z"
            stroke={isHovered ? "#34d399" : "#4a5158"}
            strokeWidth="1.2"
            fill={isHovered ? "rgba(52,211,153,0.04)" : "none"}
          />
          {/* Right Hex Inner Facets */}
          <line x1="145" y1="66" x2="135" y2="96" stroke="#2e3338" strokeWidth="1" />
          <line x1="155" y1="83" x2="135" y2="96" stroke="#2e3338" strokeWidth="1" />
          <line x1="145" y1="113" x2="135" y2="96" stroke="#2e3338" strokeWidth="1" />
          <line x1="125" y1="125" x2="135" y2="96" stroke="#2e3338" strokeWidth="1" />
          <line x1="115" y1="108" x2="135" y2="96" stroke="#2e3338" strokeWidth="1" />
          <line x1="125" y1="78" x2="135" y2="96" stroke="#2e3338" strokeWidth="1" />
        </motion.g>

        {/* Base Platform Grid */}
        <line x1="40" y1="135" x2="160" y2="135" stroke="#1f2326" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    fig: "FIG 0.3",
    title: "Telemetría Cardíaca & RPE",
    titleEn: "Cardiac Telemetry & RPE",
    desc: "Curva de pulso continuo (BPM), variabilidad cardíaca (VFC) y cronómetro de recuperación biológica.",
    descEn: "Continuous heart rate curve (BPM), HRV telemetry and bio-recovery countdown timer.",
    // Isometric Pulse Heart Rate EKG Spectrum Bars + Heart Vector
    renderGraphic: (isHovered: boolean) => (
      <svg className="w-full h-44 overflow-visible" viewBox="0 0 200 160" fill="none">
        {/* Background Cardiac Waveform (EKG Pulse) */}
        <motion.path
          d="M 20 85 L 60 85 L 75 55 L 85 115 L 100 35 L 115 105 L 125 75 L 140 85 L 180 85"
          stroke={isHovered ? "#34d399" : "#32383e"}
          strokeWidth={isHovered ? "1.8" : "1.2"}
          fill="none"
          className="transition-colors duration-300"
        />

        {/* Vertical Metric Frequency Stems */}
        {[30, 50, 70, 90, 110, 130, 150, 170].map((x, i) => {
          const heights = [18, 25, 55, 80, 65, 40, 28, 15];
          const h = heights[i];
          return (
            <motion.g
              key={x}
              animate={{ y: isHovered ? -(h * 0.12) : 0 }}
              transition={{ duration: 0.35, delay: i * 0.03, ease: "easeOut" }}
            >
              <line
                x1={x}
                y1={130}
                x2={x}
                y2={130 - h}
                stroke={isHovered && i >= 2 && i <= 5 ? "#34d399" : "#24282c"}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx={x}
                cy={130 - h}
                r="2"
                fill={isHovered && i >= 2 && i <= 5 ? "#34d399" : "#383f46"}
              />
            </motion.g>
          );
        })}

        {/* BPM Pulse Badge Floating on Top */}
        <motion.g
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <rect
            x="76"
            y="12"
            width="50"
            height="18"
            rx="9"
            fill="#0b130e"
            stroke={isHovered ? "#34d399" : "#383e44"}
            strokeWidth="1"
          />
          <text
            x="101"
            y="24"
            textAnchor="middle"
            fill={isHovered ? "#34d399" : "#8a8f98"}
            fontSize="9"
            fontFamily="monospace"
            fontWeight="bold"
          >
            148 BPM
          </text>
        </motion.g>

        {/* Ground Projection Line */}
        <line x1="20" y1="135" x2="180" y2="135" stroke="#1f2326" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    ),
  },
];

export function MultiAgentOrchestratorSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="architecture" className="relative z-10 py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
      
      {/* 3-Column Isometric Gym Technical Wireframes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {gymFeatures.map((f, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.div
              key={f.fig}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col text-left group cursor-pointer border-t border-white/[0.06] pt-6"
            >
              {/* Monospace Figure Header (FIG 0.1 / FIG 0.2 / FIG 0.3) */}
              <div className="text-[11px] font-mono text-[#565d64] tracking-widest uppercase mb-4">
                {f.fig}
              </div>

              {/* Isometric Technical Wireframe Illustration */}
              <div className="w-full flex items-center justify-center my-6 py-4">
                {f.renderGraphic(isHovered)}
              </div>

              {/* Title (Linear Clean Sans) */}
              <h3 className="text-base sm:text-lg font-semibold text-[#f7f8f8] group-hover:text-emerald-400 transition-colors duration-200 mt-2">
                {lang === "es" ? f.title : f.titleEn}
              </h3>

              {/* Subtitle Description */}
              <p className="text-xs sm:text-[13px] text-[#8a8f98] leading-relaxed mt-2 font-normal">
                {lang === "es" ? f.desc : f.descEn}
              </p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
