
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Reports: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [containerSize, setContainerSize] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Calculate viewport height minus navbar and some padding
    const calculateHeight = () => {
      const navbarHeight = 80; // Approximate navbar height
      const paddingTop = 100; // Account for the pt-28 (7rem = 112px) minus some space
      const bottomPadding = 40; // Some padding at the bottom
      const titleAndControlsHeight = 140; // Height for title, page number, and navigation buttons
      
      // Available height for the entire component
      const availableHeight = window.innerHeight - navbarHeight - paddingTop - bottomPadding;
      setViewportHeight(availableHeight);
      
      // Calculate the size for a square container that fits within the available height
      const maxSquareSize = Math.min(availableHeight - titleAndControlsHeight, window.innerWidth * 0.8);
      setContainerSize(maxSquareSize);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Mobile World Congress 2025 Insights</h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl">
            Key takeaways from the world's largest mobile industry gathering, highlighting emerging trends in connectivity, AI, and device innovation.
          </p>
          
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6"
                 style={{ 
                   maxHeight: viewportHeight ? `${viewportHeight}px` : 'auto', 
                   overflow: 'hidden'
                 }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">MWC 2025 Report</h2>
              </div>
              
              <div className="mx-auto rounded-md mb-4 overflow-hidden bg-gray-50"
                   style={{ 
                     width: isMobile ? '100%' : `${containerSize}px`, 
                     height: isMobile ? 'auto' : `${containerSize}px`,
                     maxWidth: '100%'
                   }}>
                <AspectRatio ratio={isMobile ? 3/4 : 1/1} className="h-full">
                  <iframe 
                    src={`https://1drv.ms/b/c/e5c67f4bca25096f/IQQcQsnwXTqhSI_jByioNGDvASkkzSHmORbgJHaSB1cYhH4?embed=true#view=FitW`}
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no"
                    className="w-full"
                    title="Mobile World Congress 2025 Report"
                    allowFullScreen={true}
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a href="/contact" className="btn-primary inline-block">
              Want to discuss how these trends affect your product strategy? Let's talk
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
