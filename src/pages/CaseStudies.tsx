
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CaseStudies: React.FC = () => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const subsections = [
    {
      title: "The Challenge",
      content: "We conducted extensive research to map out the challenges faced by busy professionals in managing their homes. This involved interviews with 50+ households, analyzing pain points, and identifying opportunities for automation and assistance.",
      image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQQ5jX6plFauT4N_uEViYaqyAbx-PyQRdVKCvM8YbV1xWRk?width=1024",
      description: "Current-State Journey Map of Laundry Management"
    },
    {
      title: "",
      content: "We conducted extensive research to map out the challenges faced by busy professionals in managing their homes. This involved interviews with 50+ households, analyzing pain points, and identifying opportunities for automation and assistance.",
      image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQS_YnMR1dc7Rb39h8BiYPBQAZdFW2q9i3VfMG08D9Yn0Vw?width=1024",
      description: "Hypothetical Customer Profile (click to see full)"
    },
    {
      title: "Solution Design Ideation",
      content: "Through iterative prototyping and testing, we identified which home management challenges could be effectively addressed through AI assistance. We prioritized solutions based on user impact and technical feasibility.",
      image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQTCV0E9fD4QRZMWvPWJTkM_AcysQzDYmK_TKGItPAYlHbo?width=1024",
      description: "Current-State + Ideated Future-State Journey Map of Laundry Management (click to see full)"
    },
    {
      title: "",
      content: "Through iterative prototyping and testing, we identified which home management challenges could be effectively addressed through AI assistance. We prioritized solutions based on user impact and technical feasibility.",
      image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQS7OZr_rbf-Qojq-KYJAvsRAdj6muuO7uMbzvNSa2vI4Lg?width=1024",
      description: "Hypothetical Customer Profile + Ideated Value Map (click to see full)"
    },
    {
      title: "Narrowed-Down Challenge: How-Might-We...",
      content: "We focused on three key areas: task scheduling automation, predictive maintenance for home systems, and contextual assistance for routine activities. These represented the highest value opportunities for our target users.",
      image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQQ48MHmpBpXS6MfdGVfWnpUAZ3SZj7C9_aJjn--p6w6-0A?width=1024",
      description: "Part of the Value Map I Chose to Focus On (click to see full)"
    },
    {
      title: "Design Analysis",
      content: "The interface was designed to balance simplicity with power, allowing users to interact naturally while providing deep capabilities when needed. We emphasized natural language interaction with visual reinforcement for key functions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Interface development for the household helper application"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Household Helper AI Agent, pt. 1</h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl">
            Diving into the problem space of household management inconveniences to explore agentic AI use cases, interaction design, and development tech stack.
          </p>
          
          <div className="glass-card p-8 rounded-xl mb-12 animate-fade-in">
            <div className="flex flex-col gap-8">
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={16/9} className="w-full">
                  <iframe 
                    src="https://www.youtube.com/embed/ipx2xbR7UrA" 
                    title="Household Helper AI Agent Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </AspectRatio>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                  <p className="text-foreground/70 mb-6">
                    The Household Helper is an AI-powered assistant designed to simplify home management for busy professionals. 
                    It combines natural language processing, machine learning, and integration with smart home devices to provide 
                    a seamless experience for managing household tasks, schedules, and maintenance.
                  </p>
                  
                  {subsections.map((section, index) => (
                    <div key={index} className="mb-10">
                      <h3 className="text-xl font-semibold mt-8 mb-3">{section.title}</h3>
                      <p className="text-foreground/70 mb-4">{section.content}</p>
                      <div className="relative overflow-hidden rounded-lg cursor-pointer group" onClick={() => setOpenImage(section.image)}>
                        <img 
                          src={section.image} 
                          alt={section.title} 
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-medium">Click to expand</span>
                        </div>
                      </div>
                      <p className="text-sm text-foreground/60 mt-2 italic">{section.description}</p>
                    </div>
                  ))}
                  
                  <h3 className="text-xl font-semibold mt-8 mb-3">The Results</h3>
                  <p className="text-foreground/70 mb-6">
                    The Household Helper AI Agent has demonstrated remarkable success in reducing the cognitive load 
                    of home management. Users report significant reductions in forgotten tasks, missed maintenance, 
                    and scheduling conflicts. The system's ability to learn from user behavior has been particularly 
                    valuable, with personalization increasing substantially after just 4 weeks of use.
                  </p>
                  <div className="relative overflow-hidden rounded-lg cursor-pointer group mb-4" onClick={() => setOpenImage("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b")}>
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="The Results" 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">Click to expand</span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 mt-2 mb-8 italic">Analytics dashboard showing user engagement and task completion rates</p>
                  
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
                  <div className="relative overflow-hidden rounded-lg cursor-pointer group mb-4" onClick={() => setOpenImage("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80")}>
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80" 
                      alt="Lessons Learned" 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">Click to expand</span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 mt-2 mb-8 italic">Team retrospective session evaluating user feedback</p>
                  
                  <div className="flex justify-center mt-8">
                    <a href="/contact" className="btn-primary inline-block">
                      Interested in similar solutions? Get in touch
                    </a>
                  </div>
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
          <img 
            src={openImage || ''} 
            alt="Expanded view" 
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CaseStudies;
