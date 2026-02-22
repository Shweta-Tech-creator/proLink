import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, Briefcase, MapPin, MessageSquare, ArrowRight, Loader2, Hammer, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ChatbotOverlay } from './ChatbotOverlay';
import { useUser } from '../contexts/UserContext';

export const AuthPage = ({ type }: { type: 'login' | 'register' }) => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    profession: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      let loginData = { ...formData };
      const savedAccounts = JSON.parse(localStorage.getItem('workindia_accounts') || '[]');

      if (type === 'register') {
        // Save new account to mock DB
        const newAccounts = [...savedAccounts.filter((a: any) => a.email !== formData.email), loginData];
        localStorage.setItem('workindia_accounts', JSON.stringify(newAccounts));
      } else {
        // Try to find existing account for login
        const existingAccount = savedAccounts.find((a: any) => a.email === formData.email);
        if (existingAccount) {
          loginData = existingAccount;
        } else {
          // Derive basics from email for new logins
          const derivedName = formData.email.split('@')[0].split(/[._]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
          loginData = {
            ...formData,
            name: derivedName || 'Expert User',
            profession: 'Service Professional',
            phone: '+91 98765 43210'
          };
        }
      }

      login(loginData);
      navigate('/dashboard');
    }, 1500);
  };

  const handleChatbotComplete = (data: any) => {
    setFormData(data);
    setShowChatbot(false);
  };

  return (
    <div className="min-h-screen bg-black flex font-sans">
      {/* Left Side - Content/Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-24">
        <div className="absolute inset-0 z-0">
          <img
            src={`https://picsum.photos/seed/workindia-auth-${type}/1200/1800`}
            alt="Auth Background"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <Link to="/" className="flex items-center gap-4 group mb-20">
              <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 group-hover:rotate-12 transition-transform duration-500">
                <Hammer size={32} />
              </div>
              <span className="text-4xl font-display font-extrabold tracking-tighter text-white">
                Work<span className="text-brand-primary">India</span>
              </span>
            </Link>

            <h2 className="text-7xl font-display font-extrabold text-white leading-[0.85] tracking-tighter uppercase">
              {type === 'login' ? 'Welcome' : 'Join the'} <br />
              <span className="text-gradient">{type === 'login' ? 'Back.' : 'Elite.'}</span>
            </h2>

            <p className="text-2xl text-slate-400 font-medium leading-relaxed">
              {type === 'login'
                ? 'Access your professional dashboard and manage your projects with ease.'
                : 'Connect with high-quality local jobs and grow your professional business.'}
            </p>

            <div className="flex items-center gap-8 pt-12">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/pro-${i}/100/100`} className="w-12 h-12 rounded-full border-4 border-black" />
                ))}
              </div>
              <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Joined by 50k+ Pros</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-12 lg:hidden">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
                <Hammer size={20} />
              </div>
              <span className="text-xl font-display font-extrabold tracking-tighter text-white">
                Work<span className="text-brand-primary">India</span>
              </span>
            </Link>
          </div>

          <div className="mb-12">
            <h3 className="text-4xl font-display font-extrabold text-white tracking-tight mb-4">
              {type === 'login' ? 'Sign In' : 'Create Account'}
            </h3>
            <p className="text-slate-500 font-medium">
              {type === 'login' ? 'Enter your credentials to continue' : 'Start your professional journey today'}
            </p>
          </div>

          {type === 'register' && (
            <button
              onClick={() => setShowChatbot(true)}
              className="w-full mb-10 py-5 bg-white/5 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.4em] border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
            >
              <MessageSquare size={18} className="group-hover:scale-110 transition-transform text-brand-primary" />
              Fill with WorkIndia Assistant
            </button>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {type === 'register' && (
              <div className="relative group">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-16 pr-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-600 font-medium"
                  required
                />
              </div>
            )}

            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-16 pr-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-600 font-medium"
                required
              />
            </div>

            {type === 'register' && (
              <div className="relative group">
                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={20} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-16 pr-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-600 font-medium"
                  required
                />
              </div>
            )}

            {type === 'register' && (
              <div className="relative group">
                <Briefcase className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Profession (e.g. Electrician, Plumber)"
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  className="w-full pl-16 pr-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-600 font-medium"
                />
              </div>
            )}

            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-16 pr-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-600 font-medium"
                required
              />
            </div>

            {type === 'register' && (
              <div className="relative group">
                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-16 pr-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-600 font-medium"
                />
              </div>
            )}

            <button
              disabled={isLoading}
              className="w-full py-7 bg-brand-primary text-white rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-brand-primary/20 hover:bg-brand-secondary hover:-translate-y-1 transition-all flex items-center justify-center gap-4 disabled:opacity-70 disabled:translate-y-0"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  {type === 'login' ? 'Sign In' : 'Create Account'}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium">
              {type === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
              <Link
                to={type === 'login' ? '/register' : '/login'}
                className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] hover:text-white transition-colors ml-2"
              >
                {type === 'login' ? 'Register Now' : 'Sign In'}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showChatbot && (
          <ChatbotOverlay
            onComplete={handleChatbotComplete}
            onClose={() => setShowChatbot(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
