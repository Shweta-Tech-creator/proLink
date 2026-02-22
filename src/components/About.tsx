import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Sparkles, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: <Target className="text-blue-600" />,
    title: 'Our Mission',
    description: 'To empower local electricians, plumbers, and painters by providing them with a platform that values their skills and connects them with homeowners across Maharashtra.',
  },
  {
    icon: <Users className="text-emerald-600" />,
    title: 'Community First',
    description: 'We believe in building strong local communities through reliable services and honest professional relationships.',
  },
  {
    icon: <ShieldCheck className="text-amber-600" />,
    title: 'Trust & Safety',
    description: 'Every professional on WorkIndia undergoes a rigorous verification process to ensure the highest standards of safety and quality.',
  },
];

export const About = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden" id="about">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-8 lg:px-12 max-w-[1800px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
              >
                <Users size={12} />
                <span>Our Vision</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-[0.9] text-white uppercase"
              >
                Trust is <br />
                <span className="text-slate-700">everything.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl"
              >
                We're not just a marketplace; we're a community built on reliability across Maharashtra.
                Our mission is to empower local Indian professionals while providing homeowners
                with the peace of mind they deserve.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6 group"
                >
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-slate-500 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    {React.cloneElement(value.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-extrabold mb-3 text-white group-hover:text-brand-primary transition-colors">{value.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-3xl max-w-sm ml-auto"
            >
              <img
                src="https://picsum.photos/seed/indian-worker-portrait/1200/1800"
                alt="Our Vision"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute -bottom-8 -left-8 glass-dark p-8 rounded-[3rem] shadow-3xl z-20 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white">
                  <Sparkles size={24} />
                </div>
                <div>
                  <p className="text-3xl font-display font-extrabold text-white">98%</p>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Satisfaction</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-[160px]">Consistently rated as the most reliable platform.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
