import React from 'react';
import { motion } from 'motion/react';
import { Search, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Search for Services',
    description: 'Browse through our list of verified professionals or post a specific job requirement.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Get Free Quotes',
    description: 'Receive multiple competitive quotes from local experts within minutes of posting.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Hire & Get it Done',
    description: 'Choose the best pro for your needs, schedule the work, and pay securely through ProLink.',
    color: 'bg-amber-50 text-amber-600',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-32 bg-black overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-8 lg:px-12 max-w-[1800px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-32">
          <div className="w-full lg:w-[40%] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 shadow-3xl w-full"
            >
              <img
                src="https://picsum.photos/seed/indian-engineer-site/1200/1600"
                alt="How it works"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </motion.div>

            {/* Floating Graphic Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-48 h-48 border border-brand-primary/20 rounded-full border-dashed z-0"
            />
          </div>

          <div className="w-full lg:w-[50%] space-y-20">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8"
              >
                <ArrowRight size={12} />
                <span>The Process</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[1] text-white uppercase"
              >
                Simple. <br />
                <span className="text-slate-700">Seamless.</span>
              </motion.h2>
            </div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-10 group"
                >
                  <div className="relative flex-shrink-0">
                    <div className="text-4xl font-display font-black text-white/5 group-hover:text-brand-primary/10 transition-colors duration-500">
                      0{index + 1}
                    </div>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 ${step.color} rounded-lg flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform`}>
                      {React.cloneElement(step.icon as React.ReactElement, { size: 20 })}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-2xl font-display font-extrabold text-white mb-2 group-hover:text-brand-primary transition-colors">{step.title}</h3>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
