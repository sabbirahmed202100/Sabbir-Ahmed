import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const posts = [
  {
    title: 'Amazon FBA Trends to Watch in 2026',
    excerpt: 'How AI and automation are reshaping the private label landscape for international sellers.',
    date: 'March 15, 2026',
    author: 'Sabbir Ahmed',
    category: 'Amazon FBA',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2340'
  },
  {
    title: 'Mastering PPC: Beyond Keyword Research',
    excerpt: 'Advanced bidding strategies and audience targeting techniques for maximum ROAS.',
    date: 'March 10, 2026',
    author: 'Sabbir Ahmed',
    category: 'PPC Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426'
  },
  {
    title: 'Scaling to EU Markets: A Step-by-Step Guide',
    excerpt: 'Everything you need to know about VAT, logistics, and localization for European expansion.',
    date: 'March 05, 2026',
    author: 'Sabbir Ahmed',
    category: 'Global Expansion',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2340'
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-brand-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Insights & <span className="text-brand-gold">Strategies.</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Expert analysis and actionable advice on e-commerce, digital marketing, and global brand scaling.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
              {['All', 'Amazon FBA', 'PPC Strategy', 'Global Expansion', 'Marketing'].map((cat) => (
                <button key={cat} className="px-6 py-3 rounded-full glass border border-white/5 whitespace-nowrap hover:border-brand-gold transition-colors text-sm">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl overflow-hidden border border-white/5 group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 uppercase tracking-widest">
                    <span className="text-brand-gold">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-gold transition-colors">{post.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                        <User size={16} />
                      </div>
                      <span className="text-xs text-slate-300">{post.author}</span>
                    </div>
                    <ArrowRight size={20} className="text-brand-gold group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
