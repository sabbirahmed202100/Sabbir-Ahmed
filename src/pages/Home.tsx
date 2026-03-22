import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Globe, Shield, Zap, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Revenue Generated', value: '$12M+' },
  { label: 'Active Clients', value: '50+' },
  { label: 'ROI Average', value: '340%' },
  { label: 'Global Markets', value: '12' },
];

const services = [
  {
    title: 'Amazon FBA (Private Label)',
    desc: 'End-to-end management from product sourcing to global distribution.',
    icon: <Globe className="text-brand-gold" />,
  },
  {
    title: 'Product Research',
    desc: 'Data-driven identification of high-margin, low-competition opportunities.',
    icon: <Zap className="text-brand-gold" />,
  },
  {
    title: 'PPC Management',
    desc: 'Precision-targeted ad campaigns optimized for maximum conversion and ROAS.',
    icon: <TrendingUp className="text-brand-gold" />,
  },
  {
    title: 'Lead Generation',
    desc: 'Scalable B2B and B2C lead acquisition strategies for growing brands.',
    icon: <Users className="text-brand-gold" />,
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-brand-gold text-sm font-medium">
              <Shield size={16} />
              <span>Global Digital Solutions Provider</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Scale Your Brand <br />
              <span className="gradient-text">Beyond Borders.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              We help Amazon FBA sellers and startups dominate international markets through data-driven strategies, 
              expert PPC management, and premium brand positioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-premium flex items-center justify-center gap-2">
                Book a Strategy Call <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-outline flex items-center justify-center">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                alt="Digital Marketing Analytics" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl border border-white/10 shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-brand-gold/20 rounded-lg">
                  <BarChart3 className="text-brand-gold" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Avg. Sales Growth</p>
                  <p className="text-xl font-bold text-white">+240%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 text-sm uppercase tracking-[0.2em] mb-10">Trusted by Global Brands & Sellers</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Mock logos */}
            <div className="text-2xl font-bold text-white font-serif italic">AMZ-PRO</div>
            <div className="text-2xl font-bold text-white font-serif">VENTURE-X</div>
            <div className="text-2xl font-bold text-white font-serif tracking-tighter">GLOBAL-E</div>
            <div className="text-2xl font-bold text-white font-serif">STARTUP.IO</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{stat.value}</h3>
              <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise That Drives <span className="text-brand-gold">Growth.</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We provide comprehensive digital solutions tailored for the modern e-commerce landscape. 
              Our focus is on measurable results and long-term sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="text-brand-gold text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2487" 
                alt="Sabbir Ahmed" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -z-10" />
          </div>
          
          <div>
            <h4 className="text-brand-gold font-medium uppercase tracking-widest mb-4">The Strategist</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Meet Sabbir Ahmed</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              With over a decade of experience in the global e-commerce sector, I've helped hundreds of brands 
              navigate the complexities of Amazon FBA and international digital marketing.
            </p>
            <p className="text-slate-400 mb-10 leading-relaxed">
              My approach combines deep data analysis with creative brand storytelling to ensure your 
              products don't just exist—they dominate.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="section-padding bg-brand-blue relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Proven Results.</h2>
              <p className="text-slate-400 max-w-xl">Real data from real campaigns. We let our numbers do the talking.</p>
            </div>
            <Link to="/case-studies" className="btn-outline">View All Case Studies</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2340" 
                  alt="Case Study 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-brand-gold font-bold">+312% ROAS</div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-gold transition-colors">Amazon FBA Expansion: UK Market Entry</h3>
              <p className="text-slate-400">Scaling a US-based home goods brand to £2M annual revenue in the UK within 14 months.</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2340" 
                  alt="Case Study 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-brand-gold font-bold">5.2x ROI</div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-gold transition-colors">PPC Optimization for Tech Startup</h3>
              <p className="text-slate-400">Reducing ACOS from 45% to 18% while increasing overall sales volume by 60%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-gold/10 to-transparent -z-10" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Scale Your <br /> Global Presence?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Stop guessing and start growing. Get a free audit of your current digital strategy today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="btn-premium px-12 py-5 text-lg">
              Get Free Audit
            </Link>
            <Link to="/contact" className="btn-outline px-12 py-5 text-lg">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
