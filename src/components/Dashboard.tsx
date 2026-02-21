import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  Briefcase,
  User,
  Settings,
  Bell,
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  ChevronRight,
  LogOut,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Hammer,
  X
} from 'lucide-react';
import { DUMMY_JOBS, PROFESSIONS, Profession } from '@/src/types';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

export const Dashboard = () => {
  const { user } = useUser();
  const [currentView, setCurrentView] = useState<'Dashboard' | 'Profile' | 'Settings'>('Dashboard');
  const [activeTab, setActiveTab] = useState<Profession | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const filteredJobs = DUMMY_JOBS.filter(job => {
    const matchesTab = activeTab === 'All' || job.profession === activeTab;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const stats = [
    { label: 'Active Jobs', value: '12', icon: <Briefcase size={20} />, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Completed', value: '148', icon: <CheckCircle2 size={20} />, color: 'text-violet-600', bg: 'bg-violet-50' },
    { label: 'Total Income', value: '₹42,500', icon: <TrendingUp size={20} />, color: 'text-brand-primary', bg: 'bg-indigo-50' },
  ];

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Profile', icon: <User size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ] as const;

  const displayName = user?.name || 'Alex Johnson';
  const displayEmail = user?.email || 'alex.johnson@example.com';
  const displayPhone = user?.phone || '+91 98765 43210';
  const displayProfession = user?.profession || 'Pro Plumber';

  return (
    <div className="min-h-screen bg-[#FBFBFD] flex font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Sidebar - Mac Style */}
      <aside className="hidden lg:flex w-64 bg-white/40 backdrop-blur-3xl border-r border-slate-200/40 flex-col sticky top-0 h-screen z-30">
        <div className="p-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 group-hover:rotate-12 transition-transform duration-500">
              <Hammer size={18} />
            </div>
            <span className="text-xl font-display font-extrabold tracking-tighter text-slate-900">
              Pro<span className="text-brand-primary">Link</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-5 space-y-1.5">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentView(item.name)}
              className={cn(
                "w-full flex items-center gap-3 px-5 py-3 rounded-xl font-bold text-[12px] transition-all duration-300",
                currentView === item.name
                  ? "bg-white text-slate-900 shadow-xl shadow-black/5 border border-slate-100"
                  : "text-slate-400 hover:bg-white/50 hover:text-slate-900"
              )}
            >
              <div className={cn(
                "w-7 h-7 rounded-lg flex items-center justify-center transition-colors",
                currentView === item.name ? "bg-brand-primary text-white" : "bg-slate-100 text-slate-400"
              )}>
                {React.cloneElement(item.icon as React.ReactElement, { size: 16 })}
              </div>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100/40">
          <Link
            to="/"
            className="w-full flex items-center gap-4 px-6 py-3.5 rounded-2xl font-bold text-[13px] text-red-500 hover:bg-red-50 transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
              <LogOut size={18} />
            </div>
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[1600px] mx-auto p-6 lg:p-10">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-3xl font-display font-extrabold text-slate-900 tracking-tighter mb-2">
                {currentView === 'Dashboard' ? `Welcome back, ${displayName.split(' ')[0]}! 👋` : currentView}
              </h1>
              <p className="text-base text-slate-500 font-medium">
                {currentView === 'Dashboard' && "Here's what's happening with your projects today."}
                {currentView === 'Profile' && "Your professional identity and public presence."}
                {currentView === 'Settings' && "Manage your account preferences and security."}
              </p>
            </motion.div>

            <div className="flex items-center gap-6">
              <button className="w-12 h-12 bg-white border border-slate-200/60 rounded-2xl text-slate-500 hover:text-brand-primary hover:border-brand-primary/20 transition-all relative shadow-sm flex items-center justify-center">
                <Bell size={20} />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <div className="flex items-center gap-4 pl-6 border-l border-slate-200/60">
                <div className="relative group cursor-pointer">
                  <img
                    src={`https://picsum.photos/seed/prolink-${displayName.replace(/\s/g, '')}-profile/100/100`}
                    alt="Profile"
                    className="w-12 h-12 rounded-2xl border-2 border-white shadow-lg group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-primary border-2 border-white rounded-full" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-black text-slate-900 leading-tight">{displayName}</p>
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest">{displayProfession}</p>
                </div>
              </div>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {currentView === 'Dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stats */}
                <div className="grid sm:grid-cols-3 gap-8 mb-16">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      whileHover={{ y: -8, shadow: "0 20px 40px rgba(0,0,0,0.04)" }}
                      className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all"
                    >
                      <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg", stat.bg, stat.color)}>
                        {stat.icon}
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">{stat.label}</p>
                      <h3 className="text-5xl font-display font-extrabold text-slate-900 tracking-tighter">{stat.value}</h3>
                    </motion.div>
                  ))}
                </div>

                {/* Job Marketplace */}
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
                  <div className="p-8 lg:p-10 border-b border-slate-100/60">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                      <h2 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">Available Service Requests</h2>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="relative flex-1 min-w-[300px]">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input
                            type="text"
                            placeholder="Search jobs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-6 py-3.5 bg-slate-50 border border-slate-200/60 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-sm font-medium"
                          />
                        </div>
                        <button className="flex items-center gap-2 px-5 py-3.5 bg-slate-50 border border-slate-200/60 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all">
                          <Filter size={18} />
                          Filters
                        </button>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex items-center gap-2 mt-10 overflow-x-auto pb-2 scrollbar-hide">
                      {['All', ...PROFESSIONS].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={cn(
                            "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                            activeTab === tab
                              ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20"
                              : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                          )}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                      <AnimatePresence mode="popLayout">
                        {filteredJobs.map((job) => (
                          <motion.div
                            key={job.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ y: -8 }}
                            className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:shadow-indigo-900/5 hover:border-brand-primary/20 transition-all cursor-pointer"
                          >
                            <div className="flex items-center justify-between mb-6">
                              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg">
                                {job.profession}
                              </span>
                              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                                <Clock size={14} />
                                {job.postedAt}
                              </span>
                            </div>
                            <h4 className="text-xl font-display font-extrabold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors leading-tight">{job.title}</h4>
                            <p className="text-sm text-slate-500 mb-8 line-clamp-2 leading-relaxed font-medium">{job.description}</p>

                            <div className="space-y-4 mb-8">
                              <div className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                                  <MapPin size={16} />
                                </div>
                                {job.location}
                              </div>
                              <div className="flex items-center gap-3 text-sm text-brand-primary font-black">
                                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-brand-primary">
                                  <span className="text-lg font-bold">₹</span>
                                </div>
                                {job.price}
                              </div>
                            </div>

                            <button
                              onClick={() => setSelectedJob(job)}
                              className="w-full py-4 bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-primary/20 transition-all flex items-center justify-center gap-2"
                            >
                              View Details
                              <ChevronRight size={16} />
                            </button>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>

                    {filteredJobs.length === 0 && (
                      <div className="text-center py-24">
                        <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-slate-200">
                          <Search size={48} />
                        </div>
                        <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-2">No requests found</h3>
                        <p className="text-slate-500 font-medium">Try adjusting your filters or search query.</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'Profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl"
              >
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-brand-primary to-brand-accent" />
                  <div className="px-10 pb-10">
                    <div className="relative -mt-20 mb-8">
                      <img
                        src="https://picsum.photos/seed/prolink-alex-profile/200/200"
                        alt="Profile"
                        className="w-40 h-40 rounded-[2.5rem] border-8 border-white shadow-xl"
                        referrerPolicy="no-referrer"
                      />
                      <button className="absolute bottom-4 right-4 p-3 bg-white rounded-2xl shadow-lg text-slate-600 hover:text-brand-primary transition-all">
                        <Settings size={20} />
                      </button>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                      <div>
                        <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-2">{displayName}</h2>
                        <p className="text-lg text-slate-500 font-medium flex flex-col gap-1">
                          <span>{displayProfession} • <span className="text-brand-primary font-bold">Verified Expert</span></span>
                          <span className="text-sm text-slate-400">{displayEmail} • {displayPhone}</span>
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <button className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all">Edit Profile</button>
                        <button className="px-8 py-4 bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all">Share Profile</button>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-8 mb-12 border-y border-slate-100 py-10">
                      <div className="text-center">
                        <p className="text-3xl font-display font-extrabold text-slate-900 mb-1">4.9</p>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Average Rating</p>
                      </div>
                      <div className="text-center border-x border-slate-100">
                        <p className="text-3xl font-display font-extrabold text-slate-900 mb-1">148</p>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Jobs Completed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-display font-extrabold text-slate-900 mb-1">15m</p>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Response Time</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-display font-extrabold text-slate-900 mb-4">About Me</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                          Licensed master professional with over 10 years of experience in residential and commercial services.
                          I specialize in high-quality work, emergency repairs, and sustainable solutions.
                          My goal is to provide reliable service with transparent pricing.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-extrabold text-slate-900 mb-4">Skills & Specialties</h3>
                        <div className="flex flex-wrap gap-3">
                          {['Pipe Installation', 'Water Heaters', 'Emergency Repairs', 'Drain Cleaning', 'Gas Lines', 'Bathroom Remodeling'].map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold border border-slate-100">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'Settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-3xl"
              >
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10 space-y-12">
                  <section>
                    <h3 className="text-xl font-display font-extrabold text-slate-900 mb-8">Account Preferences</h3>
                    <div className="space-y-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                        <input
                          type="email"
                          defaultValue={displayEmail}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-200/60 rounded-2xl focus:outline-none focus:border-brand-primary font-bold text-slate-900"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue={displayPhone}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-200/60 rounded-2xl focus:outline-none focus:border-brand-primary font-bold text-slate-900"
                        />
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-display font-extrabold text-slate-900 mb-8">Notifications</h3>
                    <div className="space-y-4">
                      {[
                        { title: 'Email Notifications', desc: 'Receive project updates and messages via email.' },
                        { title: 'Push Notifications', desc: 'Get real-time alerts on your mobile device.' },
                        { title: 'Marketing Emails', desc: 'Stay updated with our latest features and offers.' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <div>
                            <p className="font-bold text-slate-900">{item.title}</p>
                            <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                          </div>
                          <div className="w-12 h-6 bg-brand-primary rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="pt-8 border-t border-slate-100 flex justify-end gap-4">
                    <button className="px-8 py-4 bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all">Cancel</button>
                    <button className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all">Save Changes</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Job Details Sidebar */}
      <AnimatePresence>
        {selectedJob && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-3xl z-[70] overflow-y-auto"
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-center justify-between mb-12">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all"
                  >
                    <X size={24} />
                  </button>
                  <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-widest rounded-full">
                    {selectedJob.profession}
                  </span>
                </div>

                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-4 leading-tight">{selectedJob.title}</h2>
                    <div className="flex items-center gap-4 text-slate-400 text-sm font-bold">
                      <span className="flex items-center gap-1.5"><Clock size={16} /> {selectedJob.postedAt}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} /> {selectedJob.location}</span>
                    </div>
                  </div>

                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Estimated Budget</p>
                    <p className="text-4xl font-display font-extrabold text-brand-primary">{selectedJob.price}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-extrabold text-slate-900 mb-4">Request Details</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{selectedJob.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-extrabold text-slate-900 mb-4">Specifics</h3>
                    <ul className="space-y-3">
                      {['Professional tools required', 'Travel within 10km only', 'Material costs extra'].map((req, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                          <div className="w-2 h-2 rounded-full bg-brand-primary" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-10 border-t border-slate-100">
                    <button className="w-full py-5 bg-brand-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-brand-primary/20 hover:bg-brand-secondary transition-all active:scale-95">
                      Accept this Request
                    </button>
                    <p className="text-center mt-6 text-xs text-slate-400 font-bold">
                      By accepting, you agree to our Terms of Service
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
