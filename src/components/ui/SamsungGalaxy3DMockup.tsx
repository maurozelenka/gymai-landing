"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export interface HeroScreen {
  id: string;
  title: string;
  sub: string;
  src: string;
}

export const HERO_SCREENS: HeroScreen[] = [
  {
    id: "rutinas",
    title: "Rutinas & Series",
    sub: "Catálogo y registro",
    src: "/images/app/Rutinas.png",
  },
  {
    id: "ia",
    title: "Agentes IA",
    sub: "Razonamiento Gemini",
    src: "/images/app/Asistente_IA.png",
  },
  {
    id: "perfil",
    title: "Perfil & Salud",
    sub: "Health Connect SDK",
    src: "/images/app/Perfil_Salud.png",
  },
  {
    id: "feed",
    title: "Feed Social",
    sub: "Comunidad y PRs",
    src: "/images/app/Feed_Social.png",
  },
];

interface SamsungGalaxy3DMockupProps {
  currentScreenIndex: number;
  onSelectScreen?: (index: number) => void;
}

export function SamsungGalaxy3DMockup({ currentScreenIndex, onSelectScreen }: SamsungGalaxy3DMockupProps) {
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
    // Avoid heavy mouse tracking overhead on mobile touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = e.clientX - innerWidth / 2;
        const y = e.clientY - innerHeight / 2;
        mouseX.set(x);
        mouseY.set(y);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

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
          willChange: "transform",
        }}
        className="relative w-[215px] sm:w-[245px] lg:w-[255px] aspect-[9/19.5] cursor-pointer group transform-gpu"
      >
        
        {/* 🔊 Physical Hardware Buttons on the Right Side */}
        <div className="absolute -right-[6px] top-[105px] w-[5px] h-[52px] bg-[#1c1c1e] rounded-r-[3px] border-r border-t border-b border-[#333336] shadow-[1px_0_4px_rgba(0,0,0,0.8)] z-40" title="Volumen +/-" />
        <div className="absolute -right-[6px] top-[175px] w-[5px] h-[32px] bg-[#1c1c1e] rounded-r-[3px] border-r border-t border-b border-[#333336] shadow-[1px_0_4px_rgba(0,0,0,0.8)] z-40" title="Botón Encendido" />

        {/* 📱 2. Main Outer Frame & Bezel */}
        <div className="relative w-full h-full rounded-[42px] bg-[#111312] p-[6px] border-[2px] border-[#222724] shadow-[0_30px_90px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
          
          {/* Inner Display Bezel */}
          <div className="relative w-full h-full rounded-[36px] bg-[#000000] overflow-hidden border border-[#161a17]">
            
            {/* Samsung Infinity-O Center Punch-hole Selfie Camera */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#050505] border-[1.5px] border-[#1a1a1a] z-50 flex items-center justify-center shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0a1a2f] border border-blue-400/30" />
            </div>

            {/* Top Ear Speaker Micro-slit */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-[2.5px] bg-[#1a251e] rounded-full z-50" />

            {/* 📲 3. Screen Layer (Stacked Crossfade across 4 core screens) */}
            <div className="relative w-full h-full bg-black">
              {HERO_SCREENS.map((screen, idx) => {
                const isCurrent = idx === currentScreenIndex;
                return (
                  <motion.div
                    key={screen.id}
                    initial={false}
                    animate={{
                      opacity: isCurrent ? 1 : 0,
                      scale: isCurrent ? 1 : 0.98,
                      zIndex: isCurrent ? 20 : 10,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      fill
                      priority
                      quality={100}
                      unoptimized
                      className="object-cover object-center"
                    />
                  </motion.div>
                );
              })}

              {/* Dynamic Bottom Screen Indicator Bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-40 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/[0.1]">
                {HERO_SCREENS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectScreen?.(idx);
                    }}
                    className={`h-1 rounded-full transition-all duration-400 ${
                      idx === currentScreenIndex
                        ? "w-3.5 bg-emerald-400"
                        : "w-1 bg-white/30 hover:bg-white/60"
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
            </div>

          </div>
        </div>

        {/* 🌟 4. Deep Dynamic Floor Shadow */}
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
