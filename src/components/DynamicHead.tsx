import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://dirasmart.com";

const DynamicHead = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${SITE_URL}${pathname === "/" ? "/" : pathname}`);
    }

    // Update og:url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", `${SITE_URL}${pathname === "/" ? "/" : pathname}`);
    }

    // Remove previous dynamic schema
    const prevSchema = document.getElementById("dynamic-schema");
    if (prevSchema) prevSchema.remove();

    // Add BlogPosting schema for blog post pages (lazy load blog data)
    const blogMatch = pathname.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
      const slug = blogMatch[1];
      import("@/data/blogPosts").then(({ blogPosts }) => {
        const post = blogPosts.find((p) => p.slug === slug);
        if (post) {
          const schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title.es,
            description: post.excerpt.es,
            datePublished: post.date,
            author: { "@type": "Organization", name: "DiraSmart" },
            publisher: {
              "@type": "Organization",
              name: "DiraSmart",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
            },
            mainEntityOfPage: `${SITE_URL}${pathname}`,
            ...(post.image ? { image: post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}` } : {}),
          };
          const script = document.createElement("script");
          script.id = "dynamic-schema";
          script.type = "application/ld+json";
          script.textContent = JSON.stringify(schema);
          document.head.appendChild(script);
        }
      });
    }
  }, [pathname]);

  return null;
};

export default DynamicHead;
