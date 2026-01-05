
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PAGE_DATA } from '../constants';
import { CheckCircle, Info, ArrowRight, ChevronRight } from 'lucide-react';

const GenericPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = PAGE_DATA[slug || ''] || {
    title: slug?.replace('-', ' ').toUpperCase() || 'Page Not Found',
    subtitle: 'Official Institutional Page',
    content: 'KCMS provides specialized focus on every administrative and academic facility. This page is being updated with the latest details.',
    highlights: ['Excellence', 'Innovation', 'Integrity', 'Leadership']
  };

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-6 uppercase font-bold tracking-widest">
            <Link to="/">Home</Link> <ChevronRight size={14} /> <span>{page.title}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black mb-4">{page.title}</h1>
          <p className="text-xl text-white/70 max-w-2xl">{page.subtitle}</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/3 animate-fade-up">
          <div className="mb-12">
             <h2 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
               <Info className="text-secondary" /> Institutional Overview
             </h2>
             <p className="text-lg text-neutralText leading-relaxed">{page.content}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.highlights.map((h: string, i: number) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <CheckCircle className="text-secondary" />
                <span className="font-bold text-primary">{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-primary p-10 rounded-[3rem] text-white shadow-2xl animate-zoom-in">
            <h4 className="text-2xl font-black mb-6">Quick Actions</h4>
            <div className="space-y-4">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
                className="w-full bg-secondary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Apply Online <ArrowRight size={18} />
              </button>
              <a 
                href="#/contact"
                className="w-full bg-white/10 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 border border-white/20"
              >
                Inquiry <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenericPage;
