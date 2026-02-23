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
  }, [pathname]);

  return null;
};

export default DynamicHead;
