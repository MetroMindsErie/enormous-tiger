import { useEffect } from "react";

interface SEOHeadProps {
  selectedCategory: string | null;
  categoryData: Record<string, any>;
}

export function SEOHead({ selectedCategory, categoryData }: SEOHeadProps) {
  useEffect(() => {
    // Clean previous managed tags
    document.querySelectorAll('meta[data-managed="seo"], link[data-managed="seo"], script[data-managed="seo"]').forEach(n => n.remove());
    const baseTitle = "Enormous Tiger | Mission-Critical Product Intelligence";
    const cat = selectedCategory ? categoryData[selectedCategory] : null;
    const title = cat ? `${cat.name} Intel | Enormous Tiger` : baseTitle;
    document.title = title;
    const description = cat
      ? cat.description
      : "Actionable, field-tested product intelligence derived from 30+ years of military and emergency response operations.";
    const url = window.location.href;
    const ogImage = cat?.products?.[0]?.image || "https://your-domain.com/og-image.jpg"; // Add a default OG image
    const siteName = "Enormous Tiger";
    
    const tags: { tag: string; attrs: Record<string,string> }[] = [
      { tag: "meta", attrs: { name: "description", content: description } },
      { tag: "link", attrs: { rel: "canonical", href: url } },
      { tag: "meta", attrs: { name: "robots", content: "index,follow" } },
      { tag: "meta", attrs: { name: "author", content: "Enormous Tiger" } },
      { tag: "meta", attrs: { name: "keywords", content: cat ? `${cat.name}, tactical gear, product reviews, field tested` : "tactical gear, product reviews, field tested, military grade" } },
      
      // Mobile web app meta recommended (avoid apple-only deprecation warning)
      { tag: "meta", attrs: { name: "mobile-web-app-capable", content: "yes" } },
      // Open Graph
      { tag: "meta", attrs: { property: "og:title", content: title } },
      { tag: "meta", attrs: { property: "og:description", content: description } },
      { tag: "meta", attrs: { property: "og:type", content: "website" } },
      { tag: "meta", attrs: { property: "og:url", content: url } },
      { tag: "meta", attrs: { property: "og:site_name", content: siteName } },
      { tag: "meta", attrs: { property: "og:image", content: ogImage } },
      { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
      { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
      { tag: "meta", attrs: { property: "og:locale", content: "en_US" } },
      
      // Twitter Card
      { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
      { tag: "meta", attrs: { name: "twitter:title", content: title } },
      { tag: "meta", attrs: { name: "twitter:description", content: description } },
      { tag: "meta", attrs: { name: "twitter:image", content: ogImage } },
      
      // Mobile
      { tag: "meta", attrs: { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" } },
      { tag: "meta", attrs: { name: "theme-color", content: "#ea580c" } },
      
      // Apple
      { tag: "meta", attrs: { name: "apple-mobile-web-app-capable", content: "yes" } },
      { tag: "meta", attrs: { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" } },
    ];
    
    tags.forEach(t => {
      const el = document.createElement(t.tag);
      Object.entries(t.attrs).forEach(([k,v])=>el.setAttribute(k,v));
      el.setAttribute("data-managed","seo");
      document.head.appendChild(el);
    });
    
    // JSON-LD - Enhanced structured data
    const ldData: any = {
      "@context": "https://schema.org",
      "@type": cat ? "CollectionPage" : "WebSite",
      name: title,
      description,
      url,
      publisher: {
        "@type": "Organization",
        name: "Enormous Tiger",
        foundingDate: "1995",
        url: window.location.origin,
        logo: {
          "@type": "ImageObject",
          url: window.location.origin + "/logo.png"
        },
        sameAs: [
          // Add your social media URLs here when available
          // "https://twitter.com/enormoustiger",
          // "https://facebook.com/enormoustiger"
        ]
      }
    };
    
    // Add breadcrumb for category pages
    if (cat) {
      ldData.breadcrumb = {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: window.location.origin
          },
          {
            "@type": "ListItem",
            position: 2,
            name: cat.name,
            item: url
          }
        ]
      };
    }
    
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(ldData);
    script.setAttribute("data-managed","seo");
    document.head.appendChild(script);
  }, [selectedCategory, categoryData]);
  
  return null;
}
