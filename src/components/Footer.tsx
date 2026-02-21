import React from 'react';
import { Hammer, Twitter, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-40 pb-20 border-t border-white/5">
      <div className="container mx-auto px-8 lg:px-12 max-w-[1800px]">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-4 space-y-12">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 group-hover:rotate-12 transition-transform duration-500">
                <Hammer size={32} />
              </div>
              <span className="text-4xl font-display font-extrabold tracking-tighter">
                Pro<span className="text-brand-primary">Link</span>
              </span>
            </Link>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-sm">
              Connecting skilled trade professionals with local opportunities.
              Built for the modern workforce, powered by trust.
            </p>
            <div className="flex gap-6">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-white hover:text-black transition-all duration-500"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-12">Marketplace</h4>
            <ul className="space-y-6">
              {['Home', 'About Us', 'Why Choose Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-500 hover:text-brand-primary transition-all duration-300 flex items-center gap-3 group font-bold text-lg">
                    {item}
                    <ArrowUpRight size={18} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-12">For Pros</h4>
            <ul className="space-y-6">
              {['Register', 'Success Stories', 'Guidelines', 'Earnings', 'Help Center'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-brand-primary transition-all duration-300 flex items-center gap-3 group font-bold text-lg">
                    {item}
                    <ArrowUpRight size={18} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-12">Newsletter</h4>
            <p className="text-lg text-slate-500 font-medium mb-10">Get the latest local service requests and industry updates delivered to your inbox.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-10 py-7 bg-white/5 border border-white/10 rounded-[2.5rem] focus:outline-none focus:border-brand-primary transition-all text-lg font-medium"
              />
              <button className="absolute right-3 top-3 bottom-3 px-10 bg-brand-primary text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-brand-secondary transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">© 2026 ProLink Marketplace. All rights reserved.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
