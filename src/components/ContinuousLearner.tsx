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

type Hackathon = {
  title: string;
  organizer: string;
  date: string;
  description: string;
  logoUrl?: string;
};

const certifications: Certification[] = [
  {
    title: "Professional Scrum Product Owner II",
    issuer: "Scrum.org",
    date: "2025",
    description: "Deepened my understanding of what is required to be an effective Product Owner maximizing value using Scrum.",
    logoUrl: "https://1drv.ms/i/c/e5c67f4bca25096f/IQRvCSXKS3_GIIDlknMAAAAAAaYNgSJ6vPN-5g9PXN37GA8?width=256",
    category: 'business'
  },
  {
    title: "Agile Hybrid Project Pro",
    issuer: "Project Management Institute",
    date: "2023",
    description: "Helped me polish my knowledge of agile/hybrid project management concepts, tasks, and techniques.",
    logoUrl: "https://1drv.ms/i/c/e5c67f4bca25096f/IQRvCSXKS3_GIIDlj3MAAAAAAUU7hL9mgd5GZMhHaoNBIuk?width=256",
    category: 'business'
  },
  {
    title: "Human-Centered Systems Thinking",
    issuer: "IDEO U",
    date: "2022",
    description: "Taught me to combine systems thinking tools with human-centered design to make sense of complex systems challenges.",
    logoUrl: "https://yt3.googleusercontent.com/ytc/AIdro_k5UfwuhwO-yFXQIfvQmHSoVWfsUrNHj8GLodN37RGx6VA=s900-c-k-c0x00ffffff-no-rj",
    category: 'business'
  },
  {
    title: "Certificate in Disruptive Strategy",
    issuer: "Harvard Business School Online",
    date: "2020",
    description: "Gave me an insight into strategy and business positioning for growth through disruptive innovation.",
    logoUrl: "https://yt3.googleusercontent.com/QF-6eSYMhL6zGuAq1WsfGji8c-biBQUl8V2amXhDnlM7vvo1v6oQdIbsysPH2FnQKIYCnDKK=s900-c-k-c0x00ffffff-no-rj",
    category: 'business'
  },
  {
    title: "AI Agents Certification",
    issuer: "Hugging Face",
    date: "ongoing",
    description: "Gives me theoretical and hands-on understanding of AI agents design, from concepts, through libraries, to use cases.",
    logoUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    category: 'technology'
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Helped me refresh knowledge of fundamentals of cloud computing leveraging AWS services and architecture.",
    logoUrl: "https://1drv.ms/i/c/e5c67f4bca25096f/IQRvCSXKS3_GIIDlkHMAAAAAAR-QcgHUH7WQSLk8h-t6zhE?width=256",
    category: 'technology'
  }
];

const hackathons: Hackathon[] = [
  {
    title: "Schneider Electric Hackathon",
    organizer: "Schneider Electric",
    date: "2025",
    description: "Arrived at the top 10% of 200+ participants, showcasing hands-on skillsets in Python, SQL, and APIs for ERP modernization.",
    logoUrl: "https://cdn.nuwe.io/Companies/Logos/schneider-electric-logo.jpg",
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
            
            {/* Hackathons subsection */}
            <h3 className="text-2xl font-bold mb-6 mt-10 text-primary">Hackathons</h3>
            <div className="space-y-6">
              {hackathons.map((hackathon, index) => (
                <HackathonCard 
                  key={`hackathon-${index}`}
                  hackathon={hackathon}
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

interface HackathonCardProps {
  hackathon: Hackathon;
  index: number;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ hackathon, index }) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-5 flex items-start gap-4",
        "animate-fade-in-right [animation-delay:var(--delay)]"
      )}
      style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
    >
      <div className="flex-shrink-0 h-10 w-10 rounded-lg overflow-hidden">
        {hackathon.logoUrl ? (
          <img 
            src={hackathon.logoUrl} 
            alt={hackathon.organizer} 
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
            {hackathon.title} ({hackathon.date})
          </h3>
        </div>
        
        <p className="text-sm font-medium text-primary mb-1">
          {hackathon.organizer}
        </p>
        
        <p className="text-sm text-foreground/70">
          {hackathon.description}
        </p>
      </div>
    </div>
  );
};

export default ContinuousLearner;
