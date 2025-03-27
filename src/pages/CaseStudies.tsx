
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl">
            Detailed explorations of projects I've worked on, challenges faced, and solutions implemented.
          </p>
          
          <div className="glass-card p-8 rounded-xl mb-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Redesigning the User Experience for a Fintech Platform</h2>
                <p className="text-foreground/70 mb-6">
                  A case study on how we improved conversion rates by 37% through human-centered design and iterative testing.
                </p>
                <a href="#" className="btn-primary inline-block">Read Case Study</a>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=3940&ixlib=rb-4.0.3" 
                  alt="Fintech Platform Redesign" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=4076&ixlib=rb-4.0.3" 
                  alt="Design System" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4">Building Scalable Design Systems for Enterprise Products</h2>
                <p className="text-foreground/70 mb-6">
                  Learn how we created a design system that improved development velocity by 40% while maintaining brand consistency.
                </p>
                <a href="#" className="btn-primary inline-block">Read Case Study</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
