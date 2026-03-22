import { motion } from 'motion/react';
import { ArrowRight, BarChart3, TrendingUp, Target } from 'lucide-react';

const caseStudies = [
  {
    title: 'Amazon FBA Expansion: UK Market Entry',
    client: 'HomeDecor Co.',
    metrics: { roas: '312%', revenue: '£2M+', timeline: '14 Months' },
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2340',
    desc: 'Scaling a US-based home goods brand to £2M annual revenue in the UK through strategic listing localization and aggressive PPC management.'
  },
  {
    title: 'PPC Optimization for Tech Startup',
    client: 'GadgetFlow',
    metrics: { acos: '-27%', sales: '+60%', roi: '5.2x' },
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2340',
    desc: 'Reducing ACOS from 45% to 18% while increasing overall sales volume by 60% through precision-targeted keyword harvesting.'
  },
  {
    title: 'Lead Gen Funnel for SaaS Platform',
    client: 'CloudScale',
    metrics: { leads: '1.2k/mo', cost: '-40%', conv: '24%' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    desc: 'Building a high-converting B2B lead generation funnel that delivered 1,200+ qualified leads per month at a 40% lower cost per lead.'
  }
];

export default function CaseStudies() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-brand-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Proven <span className="text-brand-gold">Results.</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just promise growth; we deliver it. Explore our portfolio of successful international 
            campaigns and market expansions.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-20">
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden border border-white/5 flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 relative h-80 lg:h-auto">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-transparent lg:hidden" />
              </div>
              
              <div className="lg:w-1/2 p-10 md:p-16">
                <p className="text-brand-gold font-medium mb-2 uppercase tracking-widest text-sm">{study.client}</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{study.title}</h2>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">{study.desc}</p>
                
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{key}</p>
                      <p className="text-xl font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <button className="btn-outline flex items-center gap-2 group">
                  View Full Strategy <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
