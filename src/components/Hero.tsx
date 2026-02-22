import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Search,
  MapPin,
  Sparkles,
  Hammer,
  Wrench,
  Zap,
  Droplets,
  Paintbrush,
  Ruler,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';

const FluidAura = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute w-[700px] h-[700px] blur-[160px] rounded-full opacity-25 ${i % 2 === 0 ? 'bg-brand-primary' : 'bg-brand-accent'
            }`}
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
        />
      ))}
    </div>
  );
};

const PrismaticRays = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            height: ["0%", "150%", "0%"],
            x: [(i - 7) * 40, (i - 7) * 60, (i - 7) * 40]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"
        />
      ))}
    </div>
  );
};

const FloatingGlass = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-screen">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -150, 0],
            x: [0, 50, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute glass px-8 py-4 rounded-2xl flex items-center gap-4 opacity-15"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        >
          <div className="w-8 h-8 rounded-full bg-white/10" />
          <div className="w-24 h-2 bg-white/10 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
};

const ScrollVelocityIcons = () => {
  const { scrollYProgress } = useScroll();
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const icons = [Hammer, Wrench, Zap, Droplets, Paintbrush, Ruler, ShieldCheck, TrendingUp, Award];

  return (
    <motion.div
      style={{ x: xTranslate }}
      className="absolute bottom-40 left-0 flex gap-24 opacity-40 pointer-events-none z-0"
    >
      {[...icons, ...icons].map((Icon, i) => (
        <Icon key={i} size={150} strokeWidth={0.8} className="text-white/25" />
      ))}
    </motion.div>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityVal = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Immersive Deep Background */}
      <FluidAura />
      <PrismaticRays />
      <FloatingGlass />
      <ScrollVelocityIcons />

      {/* Interactive Grain Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />

      {/* Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]" />

      <div className="container mx-auto px-8 lg:px-12 max-w-[1800px] relative z-20">
        <motion.div
          style={{ y: yContent, opacity: opacityVal }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.6em] mb-12"
          >
            <span className="w-1 h-1 bg-brand-primary rounded-full animate-ping" />
            <span>Premium Service Ecosystem</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[10rem] font-display font-black text-white leading-[0.9] mb-8 tracking-tighter"
          >
            JOBS <br />
            <motion.span
              animate={{
                textShadow: ["0 0 20px rgba(16,185,129,0)", "0 0 40px rgba(16,185,129,0.5)", "0 0 20px rgba(16,185,129,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gradient"
            >REIMAGINED.</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="text-base md:text-xl text-slate-300 mb-14 leading-relaxed font-medium max-w-2xl px-6"
          >
            Direct access to high-value opportunities for local experts.
            Join the elite network of Indian service professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-full max-w-2xl glass p-2 rounded-2xl border border-white/10 group hover:border-brand-primary/30 transition-all duration-700"
          >
            <div className="flex flex-col md:flex-row items-center gap-1">
              <div className="flex-1 flex items-center gap-4 px-6 py-4 w-full">
                <Search className="text-white/20 group-hover:text-brand-primary transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Select your profession..."
                  className="bg-transparent border-none focus:ring-0 text-white font-bold placeholder:text-white/10 w-full text-base"
                />
              </div>
              <div className="hidden md:block w-px h-8 bg-white/5" />
              <div className="flex-1 flex items-center gap-4 px-6 py-4 w-full">
                <MapPin className="text-white/20" size={20} />
                <input
                  type="text"
                  placeholder="Service area..."
                  className="bg-transparent border-none focus:ring-0 text-white font-bold placeholder:text-white/10 w-full text-base"
                />
              </div>
              <button className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all active:scale-95 shadow-2xl">
                Find Work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-24 flex flex-col items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/pro-${i}/100/100`}
                  alt="Pro"
                  className="w-10 h-10 rounded-full border-2 border-black object-cover"
                />
              ))}
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
              Trusted by <span className="text-white">50k+</span> Indian Specialists
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/10 flex flex-col items-center gap-4 group"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section >
  );
};
