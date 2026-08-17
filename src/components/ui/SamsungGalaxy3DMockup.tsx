"use client";

import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// Official Real App Screens from TFG-GymAI Design Catalog
const appScreens = [
  {
    id: "routines",
    title: "Explorar Rutinas",
    tag: "CATÁLOGO JETPACK COMPOSE",
    src: "/images/app/Rutinas.png",
  },
  {
    id: "agent_chat",
    title: "Asistente Gemini en Vivo",
    tag: "ORQUESTADOR AUTÓNOMO",
    src: "/images/app/Asistente_IA.png",
  },
  {
    id: "smart_swap",
    title: "Sustitución en Caliente",
    tag: "EQUIVALENCIA BIOMECÁNICA",
    src: "/images/app/Asistente_IA_Sustitucion.png",
  },
  {
    id: "live_workout",
    title: "Registro de Serie",
    tag: "TIMER HÁPTICO + RPE",
    src: "/images/app/Rutinas_Empezar_Serie.png",
  },
  {
    id: "biometrics",
    title: "Health Connect SDK",
    tag: "VFC, SUEÑO & PULSO",
    src: "/images/app/Perfil_Salud.png",
  },
  {
    id: "feed_social",
    title: "Feed Comunitario & PRs",
    tag: "FIRESTORE SYNC",
    src: "/images/app/Feed_Social.png",
  },
];

export function SamsungGalaxy3DMockup() {
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  // Auto-switch screen every 2.3 seconds smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenIndex((prev) => (prev + 1) % appScreens.length);
    }, 2300);
    return () => clearInterval(interval);
  }, []);

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

  const activeScreen = appScreens[currentScreenIndex];

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
        className="relative w-[230px] sm:w-[255px] aspect-[9/19.5] cursor-pointer group"
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

            {/* 📲 3. High-Res App Screen Display (Smooth crossfade every 2.3s) */}
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
                <motion.div
                  key={activeScreen.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeScreen.src}
                    alt={activeScreen.title}
                    fill
                    priority
                    quality={100}
                    unoptimized
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Bottom Screen Indicator Bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-40 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/[0.1]">
                {appScreens.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === currentScreenIndex
                        ? "w-3 bg-emerald-400"
                        : "w-1 bg-white/30"
                    }`}
                  />
                ))}
              </div>

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
