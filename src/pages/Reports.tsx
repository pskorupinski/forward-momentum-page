
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Reports</h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl">
            In-depth analysis and insight reports on product management, engineering, and industry trends.
          </p>
          
          <div className="glass-card p-8 rounded-xl mb-12 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                  Featured Report
                </span>
                <h2 className="text-2xl font-semibold mb-4">The Future of Product Management in AI-driven Organizations</h2>
                <p className="text-foreground/70 mb-6">
                  Exploring how product managers can adapt their approach when working with artificial intelligence and machine learning technologies. This report covers emerging trends, required skillsets, and practical strategies for product leaders.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">AI</span>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">Product Management</span>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">Future of Work</span>
                </div>
                <a href="#" className="btn-primary inline-block">Read Full Report</a>
              </div>
              <div className="rounded-lg overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=3543&ixlib=rb-4.0.3" 
                  alt="AI Report" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary mb-4">
                Market Research
              </span>
              <h3 className="text-xl font-semibold mb-3">Competitive Analysis: Fintech Landscape 2023</h3>
              <p className="text-foreground/70 mb-4 text-sm">
                A detailed look at the competitive landscape in financial technology, identifying market gaps and opportunities.
              </p>
              <a href="#" className="text-primary font-medium inline-flex items-center text-sm group">
                <span>Read Report</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary mb-4">
                UX Research
              </span>
              <h3 className="text-xl font-semibold mb-3">User Research Methods for Complex Enterprise Software</h3>
              <p className="text-foreground/70 mb-4 text-sm">
                Effective research techniques to uncover user needs when designing for complex enterprise environments.
              </p>
              <a href="#" className="text-primary font-medium inline-flex items-center text-sm group">
                <span>Read Report</span>
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

export default Reports;
