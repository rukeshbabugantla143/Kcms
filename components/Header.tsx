
import React, { useState, useEffect } from 'react';
import { NAVIGATION } from '../constants';
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSub = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  const headerBg = scrolled ? 'bg-white shadow-xl py-2 md:py-3' : 'bg-transparent py-4';
  const topBarBg = scrolled ? 'bg-primary' : 'bg-black/20 backdrop-blur-sm border-b border-white/10';
  const navTextColor = scrolled ? 'text-neutralText hover:text-primary' : 'text-white hover:text-secondary';

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className={`${topBarBg} text-white py-2 text-xs md:text-sm hidden lg:block transition-colors duration-500`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className={scrolled ? 'text-secondary' : 'text-white'} /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail size={14} className={scrolled ? 'text-secondary' : 'text-white'} /> admissions@kcms.edu.in</span>
          </div>
          <div className="flex gap-6">
            <a href="#/admissions" className="hover:text-secondary transition-colors font-medium">Apply Now</a>
            <a href="#/contact" className="hover:text-secondary transition-colors font-medium">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-500 ${headerBg}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Official Logo */}
          <a href="#/" className="flex items-center group shrink-0">
            <img 
              src="https://res.cloudinary.com/dejcpd56d/image/upload/v1765439468/Logo-New-1024x222_etmqyk.webp" 
              alt="KCMS Logo" 
              className={`h-8 md:h-12 lg:h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${!scrolled ? 'brightness-110' : ''}`}
            />
          </a>

          {/* Desktop Mega Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAVIGATION.map((item: any) => (
              <div key={item.label} className="relative mega-menu-trigger group">
                <a 
                  href={item.href}
                  className={`flex items-center gap-1 font-bold text-[14px] xl:text-[15px] px-3 xl:px-4 py-5 transition-colors duration-300 ${navTextColor}`}
                >
                  {item.label} {item.mega && <ChevronDown size={14} className="opacity-50" />}
                </a>
                
                {item.mega && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 mega-menu-content animate-fade-in pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border-t-4 border-primary min-w-[800px] xl:min-w-[900px] flex p-8 gap-8">
                      {item.columns.map((col: any, idx: number) => (
                        <div key={idx} className={`${col.highlight ? 'w-1/4' : 'flex-1'}`}>
                          {col.title && (
                            <h5 className="text-primary font-black text-sm uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">
                              {col.title}
                            </h5>
                          )}
                          
                          {col.links && (
                            <ul className="space-y-3">
                              {col.links.map((link: any) => (
                                <li key={link.label}>
                                  <a 
                                    href={link.href} 
                                    className="text-[14px] text-neutralText/70 hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2 font-medium"
                                  >
                                    <ChevronRight size={12} className="text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}

                          {col.highlight && (
                            <div className="bg-primary p-6 rounded-xl text-white h-full flex flex-col justify-between shadow-lg">
                              <div>
                                <h6 className="font-bold text-lg mb-2 text-secondary">{col.highlight.title}</h6>
                                <p className="text-xs text-white/80 leading-relaxed mb-4">{col.highlight.text}</p>
                              </div>
                              <a 
                                href={col.highlight.href}
                                className="bg-secondary text-white py-2 px-4 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all"
                              >
                                {col.highlight.cta} <ArrowRight size={14} />
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
              className={`ml-2 xl:ml-4 px-5 xl:px-7 py-2.5 xl:py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg flex items-center gap-2 ${scrolled ? 'bg-secondary text-white hover:bg-primary' : 'bg-white text-primary hover:bg-secondary hover:text-white'}`}
            >
              Apply <span className="hidden xl:inline">Online</span> <ArrowRight size={18} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className={`lg:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="p-4 md:p-6 border-b border-gray-100 flex justify-between items-center">
            <img 
              src="https://res.cloudinary.com/dejcpd56d/image/upload/v1765439468/Logo-New-1024x222_etmqyk.webp" 
              alt="KCMS Logo" 
              className="h-8 md:h-10 w-auto"
            />
            <button onClick={() => setIsOpen(false)} className="text-primary"><X size={32} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-2">
            {NAVIGATION.map((item: any) => (
              <div key={item.label} className="border-b border-gray-50 pb-2">
                <div className="flex justify-between items-center py-3">
                  <a 
                    href={item.href} 
                    className="text-lg font-bold text-primary"
                    onClick={() => !item.mega && setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.mega && (
                    <button 
                      onClick={() => toggleMobileSub(item.label)}
                      className={`p-2 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                    >
                      <ChevronDown size={20} className="text-secondary" />
                    </button>
                  )}
                </div>
                
                {item.mega && mobileExpanded === item.label && (
                  <div className="bg-gray-50 rounded-xl p-4 mt-1 space-y-6 animate-fade-in">
                    {item.columns.map((col: any, idx: number) => (
                      <div key={idx}>
                        {col.title && <h6 className="text-xs font-black text-primary uppercase mb-3 opacity-50">{col.title}</h6>}
                        {col.links && (
                          <ul className="space-y-3">
                            {col.links.map((link: any) => (
                              <li key={link.label}>
                                <a 
                                  href={link.href} 
                                  className="text-[15px] font-medium text-neutralText/80 block"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-100">
            <button 
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('open-apply-modal'));
              }}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Start Admission Process <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
