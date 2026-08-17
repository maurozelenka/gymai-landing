"use client";

import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

interface SamsungGalaxy3DMockupProps {
  currentScreen?: "routines" | "live_workout";
  scale?: number;
}

export function SamsungGalaxy3DMockup({ currentScreen = "routines" }: SamsungGalaxy3DMockupProps) {
  const [isPoweredOn, setIsPoweredOn] = useState(false);

  // Mouse Parallax Physics (Linear / Apple style springs)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Rotations responsive to mouse movement
  const rotateY = useTransform(smoothX, [-300, 300], [-18, -2]);
  const rotateX = useTransform(smoothY, [-300, 300], [12, -4]);
  const translateX = useTransform(smoothX, [-300, 300], [-10, 10]);
  const translateY = useTransform(smoothY, [-300, 300], [-8, 8]);

  // Dynamic light reflection that moves across the glass with cursor
  const reflectionX = useTransform(smoothX, [-300, 300], ["-20%", "120%"]);
  const reflectionY = useTransform(smoothY, [-300, 300], ["-20%", "120%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPoweredOn(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative select-none" style={{ perspective: "1400px" }}>
      
      {/* 3D Phone Chassis Container */}
      <motion.div
        style={{
          rotateY,
          rotateX,
          x: translateX,
          y: translateY,
          rotateZ: -1.5,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        className="relative w-[230px] sm:w-[255px] aspect-[9/19.5] cursor-pointer"
      >
        
        {/* 🔊 Physical Hardware Buttons on the Right Side (Sleek Matte Obsidian Black / Dark Titanium) */}
        <div className="absolute -right-[6px] top-[105px] w-[5px] h-[52px] bg-[#1c1c1e] rounded-r-[3px] border-r border-t border-b border-[#333336] shadow-[1px_0_4px_rgba(0,0,0,0.8)] z-40" title="Volumen +/-" />
        <div className="absolute -right-[6px] top-[175px] w-[5px] h-[32px] bg-[#1c1c1e] rounded-r-[3px] border-r border-t border-b border-[#333336] shadow-[1px_0_4px_rgba(0,0,0,0.8)] z-40" title="Botón Encendido" />

        {/* 📱 2. Main Outer Frame & Bezel (Matte Obsidian Black Titanium) */}
        <div className="relative w-full h-full rounded-[42px] bg-[#111312] p-[6px] border-[2px] border-[#222724] shadow-[0_30px_90px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
          
          {/* Inner Display Bezel */}
          <div className="relative w-full h-full rounded-[36px] bg-[#000000] overflow-hidden border border-[#161a17]">
            
            {/* Samsung Infinity-O Center Punch-hole Selfie Camera */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#050505] border-[1.5px] border-[#1a1a1a] z-50 flex items-center justify-center shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0a1a2f] border border-blue-400/30" />
            </div>

            {/* Top Ear Speaker Micro-slit */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-[2.5px] bg-[#1a251e] rounded-full z-50" />

            {/* 📲 3. High-Res App Screen Display (Animates on Screen Change) */}
            <motion.div 
              initial={{ opacity: 0, filter: "brightness(0)" }}
              animate={{ 
                opacity: isPoweredOn ? 1 : 0, 
                filter: isPoweredOn ? "brightness(1)" : "brightness(0)"
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <AnimatePresence mode="wait">
                {currentScreen === "routines" ? (
                  <motion.div
                    key="routines"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/gym-routines-screen.png"
                      alt="GymAI Explorar Rutinas"
                      fill
                      priority
                      quality={100}
                      unoptimized
                      className="object-cover object-center"
                    />
                  </motion.div>
                ) : (
                  /* 🟢 Live Sensor & Health Connect HUD Live Screen */
                  <motion.div
                    key="live_workout"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full bg-[#070d09] p-5 flex flex-col justify-between text-white font-sans overflow-hidden"
                  >
                    {/* Background Radar Ambient Mesh */}
                    <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

                    {/* Top Status */}
                    <div className="relative z-10 pt-6">
                      <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                        <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          EN VIVO • HEALTH CONNECT
                        </span>
                        <span className="font-mono">148 BPM</span>
                      </div>
                      <h3 className="text-base font-black text-white leading-tight">
                        Sentadilla Trasera
                      </h3>
                      <p className="text-[11px] text-zinc-400">Serie 3 de 4 • RPE 8.5 Objetivo</p>
                    </div>

                    {/* Center Biometric & Fatigue Visualizer */}
                    <div className="relative z-10 my-auto py-3">
                      <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-emerald-500/30 backdrop-blur-md">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-[10px] text-zinc-400 uppercase font-mono">Fatiga Muscular</span>
                          <span className="text-sm font-extrabold text-emerald-400 font-mono">72%</span>
                        </div>
                        {/* Smooth live meter */}
                        <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden p-0.5 border border-white/[0.05]">
                          <motion.div 
                            animate={{ width: ["68%", "75%", "72%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                          />
                        </div>

                        {/* Telemetry Numbers */}
                        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/[0.06] text-left">
                          <div>
                            <span className="text-[9px] text-zinc-400 uppercase">Sobrecarga</span>
                            <p className="text-xs font-bold text-white font-mono">+2.5 kg próx.</p>
                          </div>
                          <div>
                            <span className="text-[9px] text-zinc-400 uppercase">Velocidad</span>
                            <p className="text-xs font-bold text-emerald-400 font-mono">0.52 m/s</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom AI Suggestion Pill */}
                    <div className="relative z-10 pb-2">
                      <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-[10px] text-emerald-300 leading-snug">
                        ⚡ <strong>Agente Gemini:</strong> Mantén 120s de pausa. Recuperación cardiovascular al 94%.
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

              {/* Cursor Interactive Glass Light Sheen */}
              <motion.div
                style={{
                  left: reflectionX,
                  top: reflectionY,
                }}
                className="absolute w-[200px] h-[200px] bg-white/[0.12] rounded-full blur-[40px] pointer-events-none z-30"
              />

              {/* Dynamic Diagonal Light Gleam Sweep on Glass */}
              <motion.div
                animate={{
                  x: ["-140%", "240%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -skew-x-12 pointer-events-none z-30"
              />

              {/* Edge Screen Curved Glow Reflection */}
              <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-r from-white/[0.12] to-transparent pointer-events-none z-30" />
              <div className="absolute inset-y-0 right-0 w-[3px] bg-gradient-to-l from-white/[0.12] to-transparent pointer-events-none z-30" />
            </motion.div>

            {/* OLED Screen Power-on Overlay */}
            <AnimatePresence>
              {!isPoweredOn && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black z-40"
                />
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* 🌟 4. Deep Dynamic Floor Shadow (Moves dynamically with parallax) */}
        <motion.div 
          style={{
            x: useTransform(smoothX, [-300, 300], [10, -10]),
          }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[35px] bg-emerald-950/60 rounded-full blur-[22px] pointer-events-none"
        />

      </motion.div>

    </div>
  );
}
