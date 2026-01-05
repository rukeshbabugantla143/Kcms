
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { COURSES_DATA } from '../constants';
import { Book, CheckCircle, Briefcase, GraduationCap, Loader2, Check } from 'lucide-react';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = COURSES_DATA[id || ''];
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    // Replace with your Formspree ID from formspree.io
    const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Quick Inquiry: ${course?.name}`,
          requested_course: course?.name,
          recipient: 'rukeshbabug@gmail.com'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!course) {
    return <div className="py-40 text-center text-2xl">Course Not Found</div>;
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Banner */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 font-black text-9xl -mb-10">{course.id.toUpperCase()}</div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="bg-secondary px-3 py-1 rounded text-xs font-bold uppercase mb-4 inline-block">{course.category} Program</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{course.name}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{course.shortDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-12">
          <section>
            <h2 className="text-3xl font-extrabold text-primary mb-6 flex items-center gap-3">
              <Book className="text-secondary" /> About the Program
            </h2>
            <div className="prose prose-lg text-neutralText max-w-none">
              <p>{course.fullDesc}</p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" /> Eligibility
              </h3>
              <p className="text-neutralText">{course.eligibility}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-secondary" /> Duration
              </h3>
              <p className="text-neutralText">{course.duration}</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-extrabold text-primary mb-6 flex items-center gap-3">
              <Briefcase className="text-secondary" /> Career Opportunities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.opportunities.map((opt, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">{i + 1}</div>
                  <span className="font-semibold text-neutralText">{opt}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-32 space-y-8">
            <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Quick Admission</h3>
              {status === 'success' ? (
                <div className="bg-white/10 p-6 rounded-2xl text-center animate-fade-in border border-white/20">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} />
                  </div>
                  <p className="font-bold">Sent Successfully!</p>
                  <p className="text-xs text-white/60 mt-2">Counselor will contact you soon.</p>
                </div>
              ) : (
                <>
                  <p className="text-white/60 text-sm mb-6">Want more information? Leave your details and our counselor will reach out within 24 hours.</p>
                  <form className="space-y-4" onSubmit={handleSidebarSubmit}>
                    <input 
                      name="name"
                      type="text" 
                      placeholder="Full Name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:bg-white/20 outline-none transition-all placeholder:text-white/40" 
                    />
                    <input 
                      name="email"
                      type="email" 
                      placeholder="Email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:bg-white/20 outline-none transition-all placeholder:text-white/40" 
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <Loader2 size={20} className="animate-spin" />
                      ) : (
                        'Request Callback'
                      )}
                    </button>
                    {status === 'error' && <p className="text-red-300 text-[10px] text-center mt-2">Please configure your Formspree ID.</p>}
                  </form>
                </>
              )}
            </div>
            <div className="border border-gray-200 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-primary mb-6">Related Links</h3>
              <ul className="space-y-4">
                <li><a href="#/admissions" className="text-neutralText hover:text-secondary font-medium transition-all block">Scholarship Policy</a></li>
                <li><a href="#/placements" className="text-neutralText hover:text-secondary font-medium transition-all block">Recent Placements</a></li>
                <li><a href="#/infrastructure" className="text-neutralText hover:text-secondary font-medium transition-all block">Facility Tour</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
