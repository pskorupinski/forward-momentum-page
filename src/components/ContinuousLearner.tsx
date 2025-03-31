
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
    title: "Professional Scrum Product Owner II",
    issuer: "Scrum.org",
    date: "2025",
    description: "Deepened my understanding of what is required to be an effective Product Owner who maximizes value using Scrum.",
    logoUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: 'business'
  },
  {
    title: "Agile Hybrid Project Pro",
    issuer: "Project Management Institute",
    date: "2023",
    description: "Helped me polish my knowledge of agile/hybrid project management concepts, tasks, and techniques.",
    logoUrl: "https://images.unsplash.com/photo-1481887328591-3e277c85d1c2?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3",
    category: 'business'
  },
  {
    title: "Human-Centered Systems Thinking: Design More Impactful Solutions in Complex Systems",
    issuer: "IDEO U",
    date: "2022",
    description: "Taught me to combine systems thinking tools with human-centered design to make sense of complex systems challenges.",
    logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: 'business'
  },
  {
    title: "Certificate in Disruptive Strategy",
    issuer: "Harvard Business School Online",
    date: "2020",
    description: "Gave me an insight into strategy and business positioning for growth through disruptive innovation.",
    logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: 'business'
  },
  {
    title: "AI Agents Certification",
    issuer: "Hugging Face",
    date: "ongoing",
    description: "Gave me theoretical and hands-on understanding of AI agents design, from concepts, through libraries, to use cases.",
    logoUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    category: 'technology'
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Helped me refresh knowledge of fundamentals of cloud computing leveraging AWS services and architecture.",
    logoUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
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
