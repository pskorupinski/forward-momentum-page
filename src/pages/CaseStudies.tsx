
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Household Helper AI Agent</h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl">
            A case study on building an assistive AI agent that helps manage home tasks for busy professionals.
          </p>
          
          <div className="glass-card p-8 rounded-xl mb-12 animate-fade-in">
            <div className="flex flex-col gap-8">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=3940&ixlib=rb-4.0.3" 
                  alt="AI Home Assistant Interface" 
                  className="w-full object-cover"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                  <p className="text-foreground/70 mb-6">
                    The Household Helper is an AI-powered assistant designed to simplify home management for busy professionals. 
                    It combines natural language processing, machine learning, and integration with smart home devices to provide 
                    a seamless experience for managing household tasks, schedules, and maintenance.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-3">The Challenge</h3>
                  <p className="text-foreground/70 mb-6">
                    Modern households face increasing complexity in managing daily operations, from coordinating schedules 
                    to maintaining appliances and systems. Most existing solutions address only specific aspects of home 
                    management, leaving users to cobble together multiple apps and services.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-3">The Approach</h3>
                  <p className="text-foreground/70 mb-6">
                    We started with extensive user research to understand the pain points in home management. This led 
                    to the development of a unified AI system that could understand context, learn user preferences, 
                    and proactively suggest optimizations for household operations.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-3">Key Features Developed</h3>
                  <ul className="list-disc pl-6 text-foreground/70 mb-6 space-y-2">
                    <li>Natural language interface for task management</li>
                    <li>Predictive maintenance alerts for home systems</li>
                    <li>Intelligent scheduling with conflict resolution</li>
                    <li>Integration with major smart home ecosystems</li>
                    <li>Personalized learning algorithms that adapt to household patterns</li>
                  </ul>
                </div>
                
                <div>
                  <div className="glass-card p-6 rounded-xl mb-6">
                    <h3 className="font-semibold mb-3">Project Stats</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-foreground/60">Development Timeline</p>
                        <p className="font-medium">8 months</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Team Size</p>
                        <p className="font-medium">12 people</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">My Role</p>
                        <p className="font-medium">Lead Product Manager</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Tech Stack</p>
                        <p className="font-medium">Python, TensorFlow, React Native</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Outcomes</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-foreground/60">User Satisfaction</p>
                        <p className="font-medium">4.8/5.0</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Time Saved</p>
                        <p className="font-medium">5.2 hours weekly per household</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">User Retention</p>
                        <p className="font-medium">92% after 6 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mt-6 mb-3">The Results</h3>
                <p className="text-foreground/70 mb-6">
                  The Household Helper AI Agent has demonstrated remarkable success in reducing the cognitive load 
                  of home management. Users report significant reductions in forgotten tasks, missed maintenance, 
                  and scheduling conflicts. The system's ability to learn from user behavior has been particularly 
                  valuable, with personalization increasing substantially after just 4 weeks of use.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Lessons Learned</h3>
                <p className="text-foreground/70 mb-6">
                  Building this product revealed important insights about AI assistants in the home environment:
                </p>
                <ul className="list-disc pl-6 text-foreground/70 mb-8 space-y-2">
                  <li>Privacy concerns must be addressed from the outset with transparent data policies</li>
                  <li>Contextual understanding is more valuable than feature quantity</li>
                  <li>Integration capabilities significantly impact adoption rates</li>
                  <li>Error handling must be exceptionally user-friendly in home settings</li>
                </ul>
                
                <div className="flex justify-center mt-8">
                  <a href="/contact" className="btn-primary inline-block">
                    Interested in similar solutions? Get in touch
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

export default CaseStudies;
