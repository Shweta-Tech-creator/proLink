import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play, Star, Shield, Zap, ArrowDown, CheckCircle2, Search, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: Math.random() * 0.3 + 0.1,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [null, "-20%", "20%", "0%"],
            x: [null, "10%", "-10%", "0%"],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-brand-primary rounded-full blur-sm"
        />
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/prolink-v6-bg/2400/1600?blur=2"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        {/* Animated Atmosphere */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      <FloatingParticles />

      <div className="container mx-auto px-8 lg:px-12 max-w-[1800px] relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.5em] mb-12 backdrop-blur-md"
          >
            <Sparkles size={14} />
            <span>Empowering Local Experts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-9xl font-display font-extrabold text-white leading-[1] mb-8 tracking-tighter uppercase"
          >
            Find <span className="text-gradient">Work.</span> <br />
            Earn <span className="text-slate-600">More.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed font-medium max-w-xl"
          >
            The #1 platform for local electricians, plumbers, and painters to find
            verified jobs in their neighborhood. Start your professional journey today.
          </motion.p>

          {/* Massive Search Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full max-w-2xl glass-dark p-1.5 rounded-[1.5rem] border border-white/10 shadow-3xl group hover:border-brand-primary/30 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row items-center gap-1">
              <div className="flex-1 flex items-center gap-3 px-5 py-3 w-full">
                <Search className="text-brand-primary" size={18} />
                <input
                  type="text"
                  placeholder="What do you need help with?"
                  className="bg-transparent border-none focus:ring-0 text-white font-bold placeholder:text-slate-700 w-full text-sm"
                />
              </div>
              <div className="hidden md:block w-px h-8 bg-white/10" />
              <div className="flex-1 flex items-center gap-3 px-5 py-3 w-full">
                <MapPin className="text-slate-500" size={18} />
                <input
                  type="text"
                  placeholder="Maharashtra, India"
                  className="bg-transparent border-none focus:ring-0 text-white font-bold placeholder:text-slate-700 w-full text-sm"
                />
              </div>
              <button className="w-full md:w-auto px-8 py-4 bg-brand-primary text-white rounded-[1rem] font-black text-[9px] uppercase tracking-[0.3em] hover:bg-brand-secondary transition-all active:scale-95 shadow-2xl shadow-brand-primary/20">
                Search Jobs
              </button>
            </div>
          </motion.div>

          {/* Trusted Professionals Marquee-style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-24 flex flex-col items-center gap-8"
          >
            <div className="flex -space-x-4">
              {[
                'indian-man-worker',
                'indian-professional-1',
                'indian-plumber-seed',
                'indian-electrician-seed',
                'indian-painter-seed',
                'indian-carpenter-seed'
              ].map((seed, i) => (
                <motion.img
                  key={i}
                  whileHover={{ y: -5, scale: 1.1, zIndex: 20 }}
                  src={`https://picsum.photos/seed/${seed}/120/120`}
                  alt="Professional"
                  className="w-12 h-12 rounded-2xl border-2 border-black shadow-2xl cursor-pointer relative z-10 transition-all object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1 text-brand-primary">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[11px] text-slate-500 font-black uppercase tracking-[0.3em]">
                Rated <span className="text-white">4.9/5</span> by <span className="text-white">50,000+</span> happy homeowners
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-600 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] vertical-text">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
};
