import { motion } from 'motion/react';
import { Award, Target, Eye, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">The Visionary Behind <span className="text-brand-gold">Global Success.</span></h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Sabbir Ahmed is a world-class E-commerce strategist and digital marketing architect dedicated to 
              helping brands achieve exponential growth in international markets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="text-brand-gold"><CheckCircle2 /></div>
                <div>
                  <h4 className="text-white font-bold">10+ Years</h4>
                  <p className="text-slate-500 text-sm">Industry Experience</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-brand-gold"><CheckCircle2 /></div>
                <div>
                  <h4 className="text-white font-bold">500+ Projects</h4>
                  <p className="text-slate-500 text-sm">Successfully Delivered</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2340" 
              alt="Workspace" 
              className="rounded-2xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="glass p-10 rounded-2xl">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 text-brand-gold">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To bridge the gap between local potential and global demand by providing world-class digital strategies 
              that empower brands to scale sustainably.
            </p>
          </div>
          <div className="glass p-10 rounded-2xl">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 text-brand-gold">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To be the premier global partner for e-commerce excellence, known for integrity, innovation, and 
              unparalleled results.
            </p>
          </div>
          <div className="glass p-10 rounded-2xl">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 text-brand-gold">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-slate-400 leading-relaxed">
              Transparency, data-driven decision making, and a relentless pursuit of client success are at the core 
              of everything we do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
