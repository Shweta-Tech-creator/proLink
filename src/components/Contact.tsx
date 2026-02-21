import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-32 bg-black" id="contact">
      <div className="container mx-auto px-8 lg:px-12 max-w-[1800px]">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4"
              >
                <MessageSquare size={12} />
                <span>Get in Touch</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-7xl md:text-[8vw] font-display font-extrabold tracking-tighter leading-[0.82] text-white uppercase"
              >
                Let's <br />
                <span className="text-slate-700">Talk.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-slate-400 font-medium leading-relaxed max-w-md"
              >
                Whether you're a homeowner looking for help or a professional 
                ready to grow, we're here to support you.
              </motion.p>
            </div>

            <div className="space-y-10">
              {[
                { icon: <Mail />, title: 'Email', value: 'hello@prolink.in', color: 'group-hover:text-brand-primary' },
                { icon: <Phone />, title: 'Phone', value: '+91 98765 43210', color: 'group-hover:text-brand-accent' },
                { icon: <MapPin />, title: 'Office', value: 'Mumbai, Maharashtra, India', color: 'group-hover:text-violet-400' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">{item.title}</p>
                    <p className={`text-xl font-display font-extrabold text-white ${item.color} transition-colors`}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-dark p-12 lg:p-20 rounded-[5rem] shadow-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
            
            <form className="space-y-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-10 py-6 bg-white/5 border border-white/10 rounded-[2.5rem] focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-700 font-medium"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-10 py-6 bg-white/5 border border-white/10 rounded-[2.5rem] focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-700 font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-10 py-6 bg-white/5 border border-white/10 rounded-[2.5rem] focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-700 font-medium resize-none"
                ></textarea>
              </div>
              
              <button className="w-full py-8 bg-brand-primary text-white rounded-[3rem] font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-brand-primary/20 hover:bg-brand-secondary hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-4">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
