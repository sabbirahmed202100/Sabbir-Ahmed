import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Globe, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center font-serif text-brand-blue font-bold text-xl">
              SA
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              Sabbir Ahmed
            </span>
          </Link>
          <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
            Empowering global brands with cutting-edge E-commerce strategies and digital marketing solutions. 
            Specializing in Amazon FBA and international market expansion.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 glass rounded-full hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-2 glass rounded-full hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 glass rounded-full hover:text-brand-gold transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Me</Link></li>
            <li><Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-brand-gold transition-colors">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Insights</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4">Get the latest E-commerce strategies delivered to your inbox.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-gold w-full"
            />
            <button className="bg-brand-gold p-2 rounded-lg text-brand-blue hover:scale-105 transition-transform">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-xs">
        <p>© {new Date().getFullYear()} Sabbir Ahmed. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
