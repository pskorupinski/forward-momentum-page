
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ZoomIn, ZoomOut, Maximize, Minimize } from 'lucide-react';

const Tools: React.FC = () => {
  const [scale, setScale] = useState(1);
  
  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.25, 2.5));
  };
  
  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.25, 0.5));
  };
  
  const resetZoom = () => {
    setScale(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Product Discovery Frameworks</h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl">
            A comprehensive guide to various frameworks that help teams effectively discover and validate new product ideas.
          </p>
          
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Product Discovery Tools Map</h2>
                <div className="flex space-x-3">
                  <button 
                    onClick={zoomOut} 
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={resetZoom} 
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Reset zoom"
                  >
                    {scale !== 1 ? <Maximize className="h-5 w-5" /> : <Minimize className="h-5 w-5" />}
                  </button>
                  <button 
                    onClick={zoomIn} 
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="relative overflow-auto bg-gray-50 rounded-md" style={{ height: 'calc(100vh - 300px)', minHeight: '500px' }}>
                <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', transition: 'transform 0.2s ease' }}>
                  <iframe 
                    src="https://1drv.ms/b/c/e5c67f4bca25096f/IQSqTqwHd7BUQIhFBVIWgcTHASMPyVYG30V6fFmlCyk9ORo?embed=true"
                    width="100%" 
                    height="800" 
                    frameBorder="0" 
                    scrolling="no"
                    className="w-full"
                    title="Product Discovery Tools Map"
                    allowFullScreen={true}
                  />
                </div>
              </div>
              
              <p className="mt-4 text-sm text-gray-500">
                Use the controls above to zoom in and out of the document. For best experience, you can also 
                <a 
                  href="https://1drv.ms/b/c/e5c67f4bca25096f/IQSqTqwHd7BUQIhFBVIWgcTHASMPyVYG30V6fFmlCyk9ORo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary ml-1 hover:underline"
                >
                  open the PDF in a new tab
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
