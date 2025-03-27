
import React from 'react';
import { BookOpen, Code, LineChart, Users, Lightbulb, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

type Skill = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const skills: Skill[] = [
  {
    title: "Product Management Lifecycle",
    description: "Guiding products from conception to launch by aligning business objectives with evolving user needs and market trends.",
    icon: LineChart,
  },
  {
    title: "Design Thinking Processes",
    description: "Creating intuitive experiences through empathy-driven methodologies that transform complex problems into elegant, user-centered solutions.",
    icon: Lightbulb,
  },
  {
    title: "Software Development Lifecycle",
    description: "Building responsive applications with modern frameworks while ensuring code quality, performance optimization, and maintainable architecture.",
    icon: Code,
  },
  {
    title: "Cloud Systems Architecture",
    description: "Designing scalable infrastructure leveraging cloud-native technologies to support analytics-driven product development and innovation.",
    icon: Cloud,
  },
  {
    title: "Change Leadership",
    description: "Orchestrating cross-functional teams through transformation by fostering psychological safety, ownership, and purpose-driven collaboration.",
    icon: Users,
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
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <div 
                key={index}
                className={cn(
                  "glass-card rounded-xl p-6 flex flex-col items-center text-center",
                  "animate-fade-in [animation-delay:var(--delay)]",
                  "hover:border-primary/20 h-full"
                )}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="flex-shrink-0 h-14 w-14 rounded-lg flex items-center justify-center bg-primary/10 text-primary animate-float mb-4" style={{ animationDelay: `${index * 0.5}s` }}>
                  <Icon className="h-7 w-7" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KnowHow;
