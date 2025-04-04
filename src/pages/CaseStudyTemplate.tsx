
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type CaseStudyTemplateProps = {
  title: string;
  subtitle: string;
  heroImage: string;
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
};

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  projectStats,
  outcomes
}) => {
  const [openImage, setOpenImage] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subsections = [
    {
      title: "Problem Space Exploration",
      content: "We conducted extensive research to map out the challenges faced by our target audience, involving interviews, competitive analysis, and market research to identify key pain points and opportunities.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80",
      description: "Analysis of current market landscape and user pain points"
    },
    {
      title: "Problem-Solution Fit Exploration",
      content: "Through iterative prototyping and testing, we identified which challenges could be effectively addressed through our solution approach. We prioritized features based on user impact and technical feasibility.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80",
      description: "Ideation and solution mapping process"
    },
    {
      title: "Narrowed-Down Challenge",
      content: "We focused on three key areas that represented the highest value opportunities for our target users, creating a focused solution approach to maximize impact.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80",
      description: "Prioritized challenge areas for maximum impact"
    },
    {
      title: "Design Analysis",
      content: "The interface was designed to balance simplicity with power, allowing users to interact naturally while providing deep capabilities when needed.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80",
      description: "Interface design and user experience development"
    },
    {
      title: "The Results",
      content: "Our solution demonstrated remarkable success in addressing the key user pain points. Users reported significant improvements in their workflows and experiences.",
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80",
      description: "Key metrics and performance indicators"
    },
    {
      title: "Lessons Learned",
      content: "Building this product revealed important insights about our approach and implementation strategy that we've carried forward to other projects.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80",
      description: "Team retrospective and key takeaways"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl">
            {subtitle}
          </p>
          
          <div className="glass-card p-8 rounded-xl mb-12 animate-fade-in">
            <div className="flex flex-col gap-8">
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                  
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
