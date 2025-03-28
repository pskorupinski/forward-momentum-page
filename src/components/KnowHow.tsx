
import React from 'react';
import { cn } from '@/lib/utils';

type Skill = {
  title: string;
  description: string;
  imageSrc: string;
};

const skills: Skill[] = [
  {
    title: "Product Management Lifecycle",
    description: "Guiding products from conception to launch by aligning business objectives with user needs.",
    imageSrc: "https://1drv.ms/i/s!Am8JJcpLf8blgeh1529cH9E8Hk87eg?embed=1&width=290&height=290",
  },
  {
    title: "Design Thinking Processes",
    description: "Creating intuitive experiences through empathy-driven methodologies for elegant solutions.",
    imageSrc: "https://1drv.ms/i/s!Am8JJcpLf8blgeh4PXSs0jkVxhsGag?embed=1&width=290&height=290",
  },
  {
    title: "Software Development Lifecycle",
    description: "Building responsive applications with modern frameworks while ensuring code quality and performance.",
    imageSrc: "https://1drv.ms/i/s!Am8JJcpLf8blgeh5WZD4u52LN3PSTA?embed=1&width=291&height=290",
  },
  {
    title: "Cloud Systems Architecture",
    description: "Designing scalable infrastructure leveraging cloud-native technologies for innovation.",
    imageSrc: "https://1drv.ms/i/s!Am8JJcpLf8blgeh60MrcLbod-wr03A?embed=1&width=289&height=290",
  },
  {
    title: "Change Leadership",
    description: "Orchestrating cross-functional teams through transformation by fostering safety and collaboration.",
    imageSrc: "https://1drv.ms/i/s!Am8JJcpLf8blgeh3kOa4uj2-Hwhn1Q?embed=1&width=290&height=290",
  }
];

const KnowHow: React.FC = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-heading">
            Know-How I Bring
          </h2>
          <p className="section-subheading mx-auto">
            A unique blend of product, technical, and team leadership expertise to help complex projects move forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-xl p-6 flex flex-col items-center text-center",
                "animate-fade-in [animation-delay:var(--delay)]",
                "hover:border-primary/20 h-full"
              )}
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="flex-shrink-0 h-16 w-16 mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                <img 
                  src={skill.imageSrc} 
                  alt={skill.title} 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {skill.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowHow;
