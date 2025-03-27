
import React from 'react';
import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  logoUrl?: string;
};

const certifications: Certification[] = [
  {
    title: "Product Management Certification",
    issuer: "Product School",
    date: "2023",
    description: "Advanced product strategy and roadmapping for technology products",
    logoUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=3882&ixlib=rb-4.0.3",
  },
  {
    title: "UX Design Professional Certificate",
    issuer: "Google",
    date: "2022",
    description: "User research, wireframing, prototyping, and usability testing",
    logoUrl: "https://images.unsplash.com/photo-1481887328591-3e277c85d1c2?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3",
  },
  {
    title: "Advanced React & Redux",
    issuer: "Frontend Masters",
    date: "2022",
    description: "Building scalable applications with React, Redux, and TypeScript",
    logoUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
  {
    title: "Agile Project Management",
    issuer: "Scrum Alliance",
    date: "2021",
    description: "Leading agile teams and implementing scrum methodologies",
    logoUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  }
];

const ContinuousLearner: React.FC = () => {
  return (
    <section className="section bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 md:mb-12">
              <h2 className="section-heading">
                Continuous Learner
              </h2>
              <p className="section-subheading">
                I believe in lifelong learning and constantly expanding my skillset to stay at the forefront of technology and product development.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/5] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=3000&ixlib=rb-4.0.3" 
                alt="Continuous learning and growth" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <blockquote className="text-white text-lg md:text-xl font-medium italic">
                  "Learning is not attained by chance, it must be sought for with ardor and diligence."
                </blockquote>
                <p className="text-white/80 mt-3 text-sm">— Abigail Adams</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={cn(
                  "glass-card rounded-xl p-5 flex items-start gap-4",
                  "animate-fade-in-right [animation-delay:var(--delay)]"
                )}
                style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
              >
                <div className="flex-shrink-0 h-14 w-14 rounded-lg overflow-hidden">
                  {cert.logoUrl ? (
                    <img 
                      src={cert.logoUrl} 
                      alt={cert.issuer} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">
                      {cert.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-sm font-medium text-primary mb-1">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-sm text-foreground/70">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuousLearner;
