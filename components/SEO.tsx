
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    
    // Open Graph Tags
    updateProperty('og:title', title);
    updateProperty('og:description', description);
    if (image) updateProperty('og:image', image);
    updateProperty('og:url', url || window.location.href);

    // Twitter Tags
    updateProperty('twitter:title', title);
    updateProperty('twitter:description', description);
    if (image) updateProperty('twitter:image', image);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
