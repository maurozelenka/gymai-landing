"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Sparkles } from "lucide-react";

export function GymMobileMockup() {
  const [isPoweredOn, setIsPoweredOn] = useState(false);

  useEffect(() => {
    // Smooth, realistic OLED screen power-on waking up to the app screen
    const timer = setTimeout(() => {
      setIsPoweredOn(true);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#000000] overflow-hidden select-none">
      
      {/* 📱 1. High Resolution App Screen (Wakes up with smooth brightness flare & scale) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, filter: "brightness(0)" }}
        animate={{ 
          opacity: isPoweredOn ? 1 : 0, 
          scale: isPoweredOn ? 1 : 0.96,
          filter: isPoweredOn ? "brightness(1)" : "brightness(0)"
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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



        {/* 🔮 3. Shimmer Light Reflection Sweep */}
        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -skew-x-12 pointer-events-none z-30"
        />

      </motion.div>

      {/* ⚡ 5. OLED Screen Wake-up Flash/Flare */}
      <AnimatePresence>
        {!isPoweredOn && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[#000000] z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Realistic Screen Glare / Reflection on glass */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-40" />
    </div>
  );
}
