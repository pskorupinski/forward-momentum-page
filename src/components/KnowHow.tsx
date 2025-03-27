
import React from 'react';
import { BookOpen, Code, PenTool, LineChart, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

type Skill = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const skills: Skill[] = [
  {
    title: "Product Strategy",
    description: "Aligning product initiatives with business objectives and user needs",
    icon: LineChart,
  },
  {
    title: "User Experience Design",
    description: "Creating intuitive interfaces based on deep user understanding",
    icon: PenTool,
  },
  {
    title: "Frontend Development",
    description: "Building responsive web applications with modern frameworks",
    icon: Code,
  },
  {
    title: "Data-Driven Decisions",
    description: "Leveraging analytics to guide product development",
    icon: LineChart,
  },
  {
    title: "Cross-Functional Leadership",
    description: "Orchestrating teams to deliver exceptional results",
    icon: Users,
  }
];

const KnowHow: React.FC = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-heading">
            Know-how I Bring
          </h2>
          <p className="section-subheading mx-auto">
            A unique blend of product, design, and technical expertise to help your projects move forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <div 
                key={index}
                className={cn(
                  "glass-card rounded-xl p-6 flex items-start gap-4",
                  "animate-fade-in [animation-delay:var(--delay)]",
                  "hover:border-primary/20"
                )}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KnowHow;
