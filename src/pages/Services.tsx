import { motion } from 'motion/react';
import { Globe, Search, TrendingUp, Users, BarChart, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'amazon-fba',
    title: 'Amazon FBA (Private Label)',
    icon: <Globe size={32} />,
    desc: 'Complete end-to-end management for your Amazon business. We handle everything from factory sourcing to final delivery.',
    features: ['Supplier Sourcing & Negotiation', 'Logistics & Supply Chain', 'Listing Optimization', 'Inventory Management'],
    results: 'Avg. 3x revenue growth within 12 months.'
  },
  {
    id: 'product-research',
    title: 'Product Research',
    icon: <Search size={32} />,
    desc: 'Stop guessing and start winning. We use advanced data tools to find high-demand, low-competition products.',
    features: ['Market Gap Analysis', 'Profitability Forecasting', 'Competitor Benchmarking', 'Trend Prediction'],
    results: '95% success rate for new product launches.'
  },
  {
    id: 'ppc-management',
    title: 'PPC Campaign Management',
    icon: <TrendingUp size={32} />,
    desc: 'Maximize your ROI with precision-targeted advertising. We optimize your spend to ensure every dollar counts.',
    features: ['Keyword Research', 'Bid Optimization', 'A/B Testing', 'Negative Keyword Management'],
    results: 'Avg. 40% reduction in ACOS.'
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    icon: <Users size={32} />,
    desc: 'Fuel your sales pipeline with high-quality leads. We build scalable systems to attract and convert your ideal clients.',
    features: ['Funnel Architecture', 'Email Marketing Automation', 'LinkedIn Prospecting', 'Content Strategy'],
    results: 'Consistent 20%+ conversion rate.'
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-brand-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Premium <span className="text-brand-gold">Digital Solutions.</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We offer a suite of specialized services designed to scale your brand globally. 
            Each solution is data-driven, results-oriented, and tailored to your unique goals.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mb-8">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-slate-400 mb-8">{service.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-slate-300">
                      <ShieldCheck className="text-brand-accent" size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 glass rounded-xl border-l-4 border-brand-gold mb-8">
                  <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Expected Results</p>
                  <p className="text-xl font-bold text-white">{service.results}</p>
                </div>

                <Link to="/contact" className="btn-premium inline-flex items-center gap-2">
                  Get Started <ArrowRight size={20} />
                </Link>
              </div>

              <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 glass">
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/1200/800`} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl border border-white/10 hidden md:block">
                  <BarChart className="text-brand-gold mb-2" size={32} />
                  <p className="text-xs text-slate-500 uppercase">Performance Metrics</p>
                  <p className="text-lg font-bold">Optimized Daily</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
