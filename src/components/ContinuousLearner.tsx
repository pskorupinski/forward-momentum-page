
import React from 'react';
import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  logoUrl?: string;
  category: 'business' | 'technology';
};

const certifications: Certification[] = [
  {
    title: "Agile Project Management",
    issuer: "Scrum Alliance",
    date: "2021",
    description: "Leading agile teams and implementing scrum methodologies",
    logoUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: 'business'
  },
  {
    title: "UX Design Professional Certificate",
    issuer: "Google",
    date: "2022",
    description: "User research, wireframing, prototyping, and usability testing",
    logoUrl: "https://images.unsplash.com/photo-1481887328591-3e277c85d1c2?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3",
    category: 'business'
  },
  {
    title: "Digital Transformation Strategy",
    issuer: "MIT Sloan",
    date: "2023",
    description: "Strategies for leading digital transformation initiatives across organizations",
    logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: 'business'
  },
  {
    title: "AI Agent Fundamentals",
    issuer: "Hugging Face",
    date: "2025",
    description: "Theoretical foundations of agentic AI systems",
    logoUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    category: 'technology'
  },
  {
    title: "Advanced React & Redux",
    issuer: "Frontend Masters",
    date: "2022",
    description: "Building scalable applications with React, Redux, and TypeScript",
    logoUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: 'technology'
  },
  {
    title: "Cloud Architecture",
    issuer: "AWS",
    date: "2023",
    description: "Designing and implementing scalable cloud infrastructure solutions",
    logoUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: 'technology'
  }
];

const ContinuousLearner: React.FC = () => {
  const businessCertifications = certifications.filter(cert => cert.category === 'business');
  const technologyCertifications = certifications.filter(cert => cert.category === 'technology');

  return (
    <section className="section bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="section-heading">
            Continuous Learner
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            I believe in lifelong learning and constantly expanding my skillset to stay at the forefront of technology and product development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Business Processes Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Business Processes</h3>
            <div className="space-y-6">
              {businessCertifications.map((cert, index) => (
                <CertificationCard 
                  key={`business-${index}`}
                  certification={cert}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Technology Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Technology</h3>
            <div className="space-y-6">
              {technologyCertifications.map((cert, index) => (
                <CertificationCard 
                  key={`tech-${index}`}
                  certification={cert}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-5 flex items-start gap-4",
        "animate-fade-in-right [animation-delay:var(--delay)]"
      )}
      style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
    >
      <div className="flex-shrink-0 h-10 w-10 rounded-lg overflow-hidden">
        {certification.logoUrl ? (
          <img 
            src={certification.logoUrl} 
            alt={certification.issuer} 
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
            {certification.title} ({certification.date})
          </h3>
        </div>
        
        <p className="text-sm font-medium text-primary mb-1">
          {certification.issuer}
        </p>
        
        <p className="text-sm text-foreground/70">
          {certification.description}
        </p>
      </div>
    </div>
  );
};

export default ContinuousLearner;
