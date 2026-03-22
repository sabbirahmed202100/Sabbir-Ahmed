import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    subject: 'Amazon FBA Strategy',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    alert('Thank you for your message! Sabbir will get back to you shortly.');
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-brand-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Let's Build Your <span className="text-brand-gold">Empire.</span></h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Ready to take your brand to the global stage? Whether you have a specific project in mind or 
              just want to explore possibilities, I'm here to help.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Me</h4>
                  <p className="text-slate-400">hello@sabbirahmed.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-gold flex-shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Live Chat</h4>
                  <p className="text-slate-400">Available Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Book a Call</h4>
                  <p className="text-slate-400">Schedule a free 15-min discovery call</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-10 md:p-16 rounded-[2rem] border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-2">Interested In</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                >
                  <option className="bg-brand-blue">Amazon FBA Strategy</option>
                  <option className="bg-brand-blue">PPC Optimization</option>
                  <option className="bg-brand-blue">Lead Generation</option>
                  <option className="bg-brand-blue">Global Expansion</option>
                  <option className="bg-brand-blue">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-2">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  placeholder="Tell me about your goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button type="submit" className="btn-premium w-full flex items-center justify-center gap-3 py-5 text-lg">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
