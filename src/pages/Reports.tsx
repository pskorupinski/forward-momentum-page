
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Mobile World Congress 2025 Insights</h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl">
            Key takeaways from the world's largest mobile industry gathering, highlighting emerging trends in connectivity, AI, and device innovation.
          </p>
          
          <div className="glass-card p-8 rounded-xl mb-12 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                  Event Report
                </span>
                <h2 className="text-2xl font-semibold mb-4">What MWC 2025 Tells Us About the Future of Mobile Technology</h2>
                <p className="text-foreground/70 mb-6">
                  The Mobile World Congress 2025 in Barcelona showcased groundbreaking innovations that are set to transform how we interact with mobile and connected technologies. From advancements in 6G research to new applications of edge computing and AI-driven experiences, this year's event highlighted the accelerating convergence of multiple technology domains.
                </p>
                <p className="text-foreground/70 mb-6">
                  As product leaders, these developments offer crucial insights into how we should be planning our technology roadmaps and considering user experience evolutions for the coming years. Below I've shared a detailed LinkedIn post outlining my key observations and what they might mean for product strategy across industries.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">Mobile Technology</span>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">6G</span>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary">Edge Computing</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=3543&ixlib=rb-4.0.3" 
                  alt="Mobile World Congress" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-8 border-t border-border pt-8">
              <h3 className="text-xl font-semibold mb-6">LinkedIn Insights from MWC 2025</h3>
              <div className="flex justify-center my-6">
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7307784966384365569?collapsed=1" 
                  height="399" 
                  width="504" 
                  frameBorder="0" 
                  allowFullScreen 
                  title="Embedded LinkedIn post about MWC 2025"
                  className="max-w-full"
                ></iframe>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">What This Means For Product Strategy</h3>
                <p className="text-foreground/70 mb-6">
                  The trends highlighted at MWC 2025 suggest several strategic considerations for product teams:
                </p>
                <ul className="list-disc pl-6 text-foreground/70 mb-8 space-y-2">
                  <li>Prepare for increased computing capability at the edge, enabling more responsive and context-aware experiences</li>
                  <li>Consider how advanced connectivity will change user expectations around application performance</li>
                  <li>Explore how AI integration can move beyond novelty to deliver meaningful value in your product ecosystem</li>
                  <li>Evaluate sustainability considerations in your product roadmap as this becomes increasingly important to consumers and regulators</li>
                </ul>
                
                <div className="flex justify-center mt-8">
                  <a href="/contact" className="btn-primary inline-block">
                    Want to discuss how these trends affect your product strategy? Let's talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
