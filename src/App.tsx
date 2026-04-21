import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load non-critical pages to reduce initial bundle
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DynamicHead = lazy(() => import("./components/DynamicHead"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => (
  <LanguageProvider>
    <Toaster />
    <ScrollToTop />
    <Suspense fallback={null}>
      <DynamicHead />
    </Suspense>
    <Routes>
      {/* Spanish routes (default) */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<Suspense fallback={null}><About /></Suspense>} />
      <Route path="/blog" element={<Suspense fallback={null}><Blog /></Suspense>} />
      <Route path="/blog/:slug" element={<Suspense fallback={null}><BlogPost /></Suspense>} />
      {/* English routes */}
      <Route path="/en" element={<Index />} />
      <Route path="/en/about" element={<Suspense fallback={null}><About /></Suspense>} />
      <Route path="/en/blog" element={<Suspense fallback={null}><Blog /></Suspense>} />
      <Route path="/en/blog/:slug" element={<Suspense fallback={null}><BlogPost /></Suspense>} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
    </Routes>
  </LanguageProvider>
);

const App = () => (
  <ErrorBoundary>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
