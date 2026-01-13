import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const AictePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const embedUrl = "https://drive.google.com/file/d/1Cegl4-5pFGHmqAa04OXkDSvtP7jlPJcW/preview";

  return (
    <div className="pt-24 h-screen w-full">
      <SEO
        title="AICTE Approval | KCMS Bangalore"
        description="View the official AICTE approval document for Karnataka College of Management & Science (KCMS)."
        keywords="AICTE approval KCMS, AICTE document, KCMS Bangalore affiliation"
      />
      <iframe
        src={embedUrl}
        className="w-full h-full border-0"
        title="AICTE Approval Document"
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default AictePage;
