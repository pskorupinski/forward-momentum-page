import React, { useState } from 'react';
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-semibold mb-6">Recommended Tools</h2>
            </div>
            
            <div className="glass-card p-6 rounded-xl animate-fade-in">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Discovery</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Maze for user testing</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Miro for collaborative workshops</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Lookback for user interviews</span>
                </li>
              </ul>
              <a href="#" className="text-primary font-medium inline-flex items-center mt-4 text-sm group">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Tools</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Figma for UI design</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Framer for prototyping</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Lottie for animations</span>
                </li>
              </ul>
              <a href="#" className="text-primary font-medium inline-flex items-center mt-4 text-sm group">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>React.js for UI</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Next.js for web applications</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Tailwind CSS for styling</span>
                </li>
              </ul>
              <a href="#" className="text-primary font-medium inline-flex items-center mt-4 text-sm group">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
