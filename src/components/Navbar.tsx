import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Hammer, User, LogIn, ChevronRight, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useUser } from '../contexts/UserContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#how-it-works' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 lg:px-12',
        isScrolled ? 'pt-6' : 'pt-8'
      )}
    >
      <div
        className={cn(
          "max-w-[1800px] mx-auto flex items-center justify-between transition-all duration-500",
          isScrolled
            ? "bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] px-8 py-3 shadow-3xl"
            : "bg-transparent py-2 px-0"
        )}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 group-hover:rotate-12 transition-transform duration-500">
            <Hammer size={24} />
          </div>
          <span className="text-3xl font-display font-extrabold tracking-tighter text-white">
            Work<span className="text-brand-primary">India</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        {!isAuthPage && (
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-col items-end mr-4">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Support</span>
            <span className="text-xs font-bold text-white tracking-tight">+91 98765 43210</span>
          </div>
          {user ? (
            <Link
              to="/dashboard"
              className="px-8 py-3.5 bg-brand-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2"
            >
              <LayoutDashboard size={14} />
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-8 py-3.5 bg-brand-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary hover:-translate-y-1 transition-all active:scale-95"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white hover:text-brand-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-full left-8 right-8 mt-4 glass-dark rounded-[3rem] overflow-hidden shadow-3xl border border-white/10"
          >
            <div className="flex flex-col p-8 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 px-8 py-5 hover:bg-white/5 hover:text-white rounded-2xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/5 my-4 mx-8" />
              {user ? (
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center gap-2 px-8 py-6 bg-brand-primary text-white rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-brand-primary/20 active:scale-95 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LayoutDashboard size={14} />
                  Go to Dashboard
                  <ChevronRight size={14} />
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 px-8 py-5 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-white rounded-2xl transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center gap-2 px-8 py-6 bg-brand-primary text-white rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-brand-primary/20 active:scale-95 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                    <ChevronRight size={14} />
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
