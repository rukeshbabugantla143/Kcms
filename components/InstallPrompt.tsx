
import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Only show after 5 seconds to not annoy the user immediately
      setTimeout(() => setIsVisible(true), 5000);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 z-[55] md:left-auto md:right-8 md:bottom-32 md:w-96">
      <div className="bg-[#1a1a1a] text-white rounded-[2rem] shadow-2xl p-6 flex flex-col gap-4 animate-fade-up border border-white/10">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shrink-0">
               <Smartphone size={28} className="text-secondary" />
            </div>
            <div>
              <h4 className="font-black text-lg">KCMS Mobile App</h4>
              <p className="text-xs text-white/50 leading-relaxed">Install for the best experience & offline access.</p>
            </div>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-white/20 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex gap-3 mt-2">
          <button 
            onClick={handleInstallClick}
            className="flex-1 bg-secondary text-white py-3 rounded-xl font-black text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
          >
            <Download size={16} /> Install App
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="px-6 py-3 rounded-xl font-bold text-sm text-white/60 hover:text-white transition-colors"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
