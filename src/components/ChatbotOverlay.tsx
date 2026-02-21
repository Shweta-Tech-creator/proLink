import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Bot, X, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface ChatbotProps {
  onComplete: (data: any) => void;
  onClose: () => void;
}

export const ChatbotOverlay = ({ onComplete, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm ProBot. I'll help you register in seconds. What's your full name?" },
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    profession: '',
    location: '',
  });
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const steps = [
    { field: 'name', question: "Great to meet you, {name}! What's your email address?" },
    { field: 'email', question: "Perfect. What's your phone number so we can reach you?" },
    { field: 'phone', question: "Got it. Now, set a secure password for your account." },
    { field: 'password', question: "Almost there! What's your primary profession? (e.g., Plumber, Electrician)" },
    { field: 'profession', question: "And finally, where are you located in Maharashtra? (City)" },
    { field: 'location', question: "Awesome! I've filled out the form for you. Ready to review?" },
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate bot processing
    setTimeout(() => {
      const currentStep = steps[step];
      const newFormData = { ...formData, [currentStep.field]: userMessage };
      setFormData(newFormData);

      if (step < steps.length - 1) {
        const nextStep = steps[step]; // The question for the CURRENT step's answer is in steps[step].question
        const botText = nextStep.question.replace('{name}', newFormData.name.split(' ')[0]);
        setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
        setStep(step + 1);
      } else {
        setMessages((prev) => [...prev, { role: 'bot', text: "All done! Redirecting you to the form..." }]);
        setTimeout(() => {
          onComplete(newFormData);
        }, 1500);
      }
      setIsTyping(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm"
    >
      <div className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden h-[600px]">
        {/* Header */}
        <div className="bg-brand-primary p-8 text-white flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shadow-inner">
              <Bot size={28} />
            </div>
            <div>
              <h3 className="text-xl font-display font-extrabold tracking-tight">ProBot Assistant</h3>
              <p className="text-xs text-brand-primary/20 font-black uppercase tracking-widest bg-white/90 px-2 py-0.5 rounded mt-1">AI Powered</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white/10 rounded-xl transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide bg-slate-50/50">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[85%] p-5 rounded-[2rem] text-sm font-medium shadow-sm ${
                  msg.role === 'bot'
                    ? 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                    : 'bg-brand-primary text-white rounded-tr-none shadow-lg shadow-brand-primary/20'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-100 p-5 rounded-[2rem] rounded-tl-none flex gap-1.5 shadow-sm">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1.5 h-1.5 bg-brand-primary rounded-full"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-8 bg-white border-t border-slate-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your answer..."
              className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-[2rem] focus:outline-none focus:border-brand-primary focus:bg-white transition-all pr-16 text-slate-900 font-medium placeholder:text-slate-400"
            />
            <button
              onClick={handleSend}
              className="absolute right-2 top-2 bottom-2 w-12 bg-brand-primary text-white rounded-2xl flex items-center justify-center hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20 active:scale-95"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
