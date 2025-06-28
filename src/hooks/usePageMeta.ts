import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export const usePageMeta = (meta: PageMeta) => {
  useEffect(() => {
    // Update document title
    document.title = meta.title;
    
    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', meta.description);
    }
    
    // Update keywords if provided
    if (meta.keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', meta.keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = meta.ogTitle || meta.title;
    const ogDescription = meta.ogDescription || meta.description;
    const ogImage = meta.ogImage || '/src/assets/home/home-1.jpg';
    
    // Update og:title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', ogTitle);
    }
    
    // Update og:description
    let ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', ogDescription);
    }
    
    // Update og:image
    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    // Update og:url (canonical)
    const canonical = meta.canonical || window.location.href;
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute('content', canonical);
    }
    
    // Update Twitter Card tags
    let twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleMeta) {
      twitterTitleMeta.setAttribute('content', ogTitle);
    }
    
    let twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionMeta) {
      twitterDescriptionMeta.setAttribute('content', ogDescription);
    }
    
    let twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageMeta) {
      twitterImageMeta.setAttribute('content', ogImage);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
  }, [meta]);
}; 