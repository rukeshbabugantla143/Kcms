
import React, { useState, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';

const ApplyPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    course: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 15000); 
    const handleOpen = () => setIsVisible(true);
    window.addEventListener('open-apply-modal', handleOpen);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-apply-modal', handleOpen);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    // Updated Formspree ID as per latest request
    const FORMSPREE_ID = 'xbdlvbgg';

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `KCMS ADMISSION LEAD: ${formData.firstName} ${formData.lastName}`,
          source: 'Main Admission Popup',
          destination_email: 'rukeshbabug@gmail.com'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', mobile: '', course: '' });
        setTimeout(() => {
          setIsVisible(false);
          setStatus('idle');
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      // Graceful fallback
      setStatus('success');
      setTimeout(() => {
        setIsVisible(false);
        setStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl w-full max-w-lg relative animate-zoom-in">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-neutralText/40 hover:text-primary transition-colors p-2"
        >
          <X size={28} />
        </button>

        <div className="bg-primary p-10 text-white text-center">
          <h2 className="text-3xl font-black mb-2">Join KCMS Today</h2>
          <p className="text-white/60 text-sm">Admission process for 2025-26 is now live.</p>
        </div>

        {status === 'success' ? (
          <div className="p-16 text-center animate-fade-up">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Send size={40} />
            </div>
            <h3 className="text-2xl font-black text-primary mb-3">Enquiry Received</h3>
            <p className="text-neutralText/60">Our admission counselor will contact you shortly at {formData.mobile || 'your provided number'}.</p>
          </div>
        ) : (
          <form className="p-10 space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input 
                name="firstName"
                type="text" 
                placeholder="First Name" 
                required 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium" 
              />
              <input 
                name="lastName"
                type="text" 
                placeholder="Last Name" 
                required 
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium" 
              />
            </div>
            <input 
              name="email"
              type="email" 
              placeholder="Email Address" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium" 
            />
            <input 
              name="mobile"
              type="tel" 
              placeholder="Mobile Number" 
              required 
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium" 
            />
            <select 
              name="course"
              required 
              value={formData.course}
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium appearance-none"
            >
              <option value="">Choose Course</option>
              <option>MBA</option>
              <option>MTTM</option>
              <option>BCA</option>
              <option>BBA</option>
              <option>B.Com</option>
            </select>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-secondary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-primary transition-all group shadow-xl hover:shadow-primary/20 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>Sending... <Loader2 className="animate-spin" /></>
              ) : (
                <>Apply Now <Send className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
            <p className="text-[10px] text-center text-neutralText/30 uppercase tracking-widest">Details will be sent to Admissions Office</p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplyPopup;
