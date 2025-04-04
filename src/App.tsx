
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import CaseStudiesBrowse from "./pages/CaseStudiesBrowse";
import CaseStudy2 from "./pages/CaseStudy-StreamliningPortfolio";
import CaseStudy3 from "./pages/CaseStudy-RedesigningCloudService";
import CaseStudy4 from "./pages/CaseStudy4";
import CaseStudy5 from "./pages/CaseStudy5";
import Reports from "./pages/Reports";
import Tools from "./pages/Tools";
import CaseStudy6 from "./pages/CaseStudy6";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudiesBrowse />} />
          <Route path="/case-studies/streamlining-product-portfolio" element={<CaseStudy2 />} />
          <Route path="/case-studies/re-designing-large-cloud-service-specs" element={<CaseStudy3 />} />
          <Route path="/case-studies/engineering-production-systems-2" element={<CaseStudy4 />} />
          <Route path="/case-studies/engineering-production-systems-3" element={<CaseStudy5 />} />
          <Route path="/case-studies/new-product-prototype" element={<CaseStudy6 />} />
          <Route path="/case-studies/household-helper-ai-agent" element={<CaseStudies />} />
          <Route path="/reports/mwc-2025" element={<Reports />} />
          <Route path="/tools/product-discovery-tools-map" element={<Tools />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
