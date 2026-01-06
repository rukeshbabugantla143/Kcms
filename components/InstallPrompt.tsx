
import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Show the install button only if the app isn't already installed
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    
    // We've used the prompt, and can't use it again
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 z-[55] md:left-auto md:right-6 md:bottom-28 md:w-80">
      <div className="bg-white rounded-2xl shadow-2xl border border-primary/10 p-4 flex items-center gap-4 animate-fade-up">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0">
          <Download size={24} />
        </div>
        <div className="flex-grow">
          <p className="text-sm font-bold text-primary">Install KCMS App</p>
          <p className="text-xs text-neutralText/60">Fast access to Admissions</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleInstallClick}
            className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-secondary transition-colors"
          >
            Install
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-neutralText/40 hover:text-primary transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
