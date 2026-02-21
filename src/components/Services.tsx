import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Zap, Hammer, Paintbrush, Wind, Shovel, Wrench, ShieldCheck, Clock, Award, ArrowUpRight } from 'lucide-react';

const services = [
  { name: 'Plumbing', icon: <Droplets />, count: '120+ Pros', color: 'bg-blue-500', seed: 'indian-plumber' },
  { name: 'Electrical', icon: <Zap />, count: '85+ Pros', color: 'bg-amber-500', seed: 'indian-electrician' },
  { name: 'Carpentry', icon: <Hammer />, count: '64+ Pros', color: 'bg-orange-600', seed: 'indian-carpenter' },
  { name: 'Painting', icon: <Paintbrush />, count: '42+ Pros', color: 'bg-emerald-500', seed: 'indian-painter' },
  { name: 'Masonry', icon: <Hammer />, count: '38+ Pros', color: 'bg-cyan-500', seed: 'indian-mason' },
  { name: 'Gardening', icon: <Shovel />, count: '55+ Pros', color: 'bg-green-600', seed: 'indian-gardener' },
  { name: 'Handyman', icon: <Wrench />, count: '92+ Pros', color: 'bg-slate-700', seed: 'indian-handyman' },
  { name: 'Security', icon: <ShieldCheck />, count: '24+ Pros', color: 'bg-indigo-600', seed: 'indian-security' },
];

export const Services = () => {
  return (
    <section className="py-32 bg-black" id="services">
      <div className="container mx-auto px-8 lg:px-12 max-w-[1800px]">
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8"
            >
              <Award size={12} />
              <span>Curated Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl font-display font-extrabold tracking-tighter leading-[0.82] text-white uppercase"
            >
              Requests <br />
              <span className="text-slate-700">for you.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-slate-500 font-medium leading-relaxed mb-4"
            >
              Browse categorized service requests from local homeowners looking for your specific skills and expertise.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/5"
          >
            <img
              src="https://picsum.photos/seed/indian-plumber-working/1200/800"
              alt="Plumbing"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white mb-3 shadow-2xl">
                  <Droplets size={20} />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-white mb-1">Plumbing Work</h3>
                <p className="text-slate-400 text-sm font-medium max-w-xs">Access daily high-value plumbing requests in Dadar, Colaba, and beyond.</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-display font-extrabold text-white mb-0.5">1.2k+</p>
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Professionals</p>
              </div>
            </div>
          </motion.div>

          {/* Smaller Cards */}
          {services.slice(1, 4).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[350px] rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500"
            >
              <img
                src={`https://picsum.photos/seed/${service.seed}/800/1200`}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div>
                  <div className={`w-10 h-10 ${service.color} text-white rounded-lg flex items-center justify-center mb-4 shadow-xl group-hover:rotate-12 transition-transform`}>
                    {React.cloneElement(service.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-white mb-1">{service.name} Jobs</h3>
                  <p className="text-slate-200 text-xs font-medium leading-relaxed">Find verified {service.name.toLowerCase()} work and start earning today.</p>
                </div>
                <div className="pt-6 flex justify-between items-center">
                  <p className="text-[8px] font-black text-white uppercase tracking-widest">{service.count}</p>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Marquee Style */}
        <div className="mt-40 border-y border-white/5 py-32 overflow-hidden relative">
          {/* Gradient Masks for seamless fade */}
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex items-center gap-32 animate-marquee whitespace-nowrap">
            {[
              { label: 'Jobs Completed', value: '15,000+' },
              { label: 'Verified Pros', value: '2,500+' },
              { label: 'Average Rating', value: '4.9/5' },
              { label: 'Cities Covered', value: '120+' },
              { label: 'Customer Growth', value: '300%' },
              { label: 'Success Rate', value: '99.9%' },
            ].concat([
              { label: 'Jobs Completed', value: '15,000+' },
              { label: 'Verified Pros', value: '2,500+' },
              { label: 'Average Rating', value: '4.9/5' },
              { label: 'Cities Covered', value: '120+' },
              { label: 'Customer Growth', value: '300%' },
              { label: 'Success Rate', value: '99.9%' },
            ]).map((stat, i) => (
              <div key={i} className="flex items-center gap-12 group">
                <span className="text-8xl lg:text-[14rem] font-display font-black text-white/10 tracking-tighter uppercase transition-all duration-700 group-hover:text-brand-primary/30 group-hover:scale-105 drop-shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                  {stat.value}
                </span>
                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">{stat.label}</span>
                  <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-brand-primary group-hover:w-full transition-all duration-1000 ease-out" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
