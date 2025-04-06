
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type CaseStudyTemplateProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  heroVideo: string;
  projectStats: {
    timeline: string;
    teamSize: string;
    role: string;
    techStack: string;
  };
  outcomes: {
    satisfaction: string;
    impact: string;
    adoption: string;
  };
  subsections: {
    title?: string;
    content: string[];
    image?: string;
    description?: string;
  }[];
};

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  heroVideo,
  projectStats,
  outcomes,
  subsections
}) => {
  const [openImage, setOpenImage] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroVisual = heroVideo
    ? <iframe 
      src={heroVideo}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
      className="w-full h-full"
    ></iframe>
    : <img 
      src={heroImage}
      alt={title}
      className="w-full h-full object-cover"
    />

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          <p className="text-xl text-foreground/70 mb-4 max-w-3xl">
            {subtitle}
          </p>
          
          <div className="glass-card p-8 rounded-xl mb-12 animate-fade-in">
            <div className="flex flex-col gap-8">
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={16/9} className="bg-muted">
                  {heroVisual}
                </AspectRatio>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  {/* <h2 className="text-2xl font-semibold mb-4">Project Overview</h2> */}
                  
                  {subsections.map((section, index) => (
                    <div key={index} className={index==0 ? "mt-0" : (!section.title) ? "mt-5" : "mt-12"}>
                      {section.title && (
                        <h3 className="text-xl font-semibold mt-8 mb-3">{section.title}</h3>
                      )}
                      {section.content.map((part, index) => (
                        <p className="text-foreground/70 mb-4" dangerouslySetInnerHTML={{ __html: part }}></p>
                      ))}
                      {section.image !== "" && (
                      <div className="mt-6">
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
                      )}
                    </div>
                  ))}
                  
                  <div className="flex justify-center mt-8">
                    <a href="/contact" className="btn-primary inline-block">
                      Interested to know more about this solution? Get in touch!
                    </a>
                  </div>
                </div>
                
                <div>
                  <div className="glass-card p-6 rounded-xl mb-6">
                    <h3 className="font-semibold mb-3">Project Stats</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-foreground/60">Duration</p>
                        <p className="font-medium">{projectStats.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Team Size</p>
                        <p className="font-medium">{projectStats.teamSize}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">My Role</p>
                        <p className="font-medium">{projectStats.role}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Tech Stack</p>
                        <p className="font-medium">{projectStats.techStack}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="font-semibold mb-3">Outcomes</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-foreground/60">User Satisfaction</p>
                        <p className="font-medium">{outcomes.satisfaction}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Project Impact</p>
                        <p className="font-medium">{outcomes.impact}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Adoption Rate</p>
                        <p className="font-medium">{outcomes.adoption}</p>
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

export default CaseStudyTemplate;
