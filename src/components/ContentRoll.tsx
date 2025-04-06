
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

type ContentItem = {
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  href: string;
};

const contentItems: ContentItem[] = [
  {
    title: "Building Household Helper AI Agent, pt. 1",
    description: "Diving into the problem space of household management inconveniences to explore agentic AI use cases, interaction design, and development tech stack.",
    date: "March 2025",
    category: "Case Study",
    imageUrl: "https://1drv.ms/i/s!Am8JJcpLf8blgehtGujP_IXDyksaJA?embed=1&width=1536&height=1024",
    href: "/case-studies/household-helper-ai-agent"
  },
  {
    title: "Insights from Mobile World Congress 2025",
    description: "Key takeaways from the world's largest mobile industry gathering, highlighting emerging trends in connectivity, AI, and device innovation.",
    date: "March 2025",
    category: "Report",
    imageUrl: "https://1drv.ms/i/c/e5c67f4bca25096f/IQRx25ufhiKPRIOX4Z8L_OFSATzs2sgMmgd6IW0-QTLR-Ic?width=1024",
    href: "/reports/mwc-2025"
  },
  {
    title: "Product Discovery Frameworks Map",
    description: "A comprehensive guide to various frameworks that help teams effectively discover and validate new product ideas.",
    date: "February 2025",
    category: "Tools",
    imageUrl: "https://1drv.ms/i/c/e5c67f4bca25096f/IQRzM5RnKnDwSLTlJkYRIxPXATANW6pYAOW_jU5O1MKT-Js?width=660",
    href: "/tools/product-discovery-tools-map"
  }
];

const ContentRoll: React.FC = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="section-heading">
            Fresh Resources
          </h2>
          <p className="section-subheading mx-auto md:mx-0">
            Insights, case studies, and reports on product management, engineering, and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contentItems.map((item, index) => (
            <article 
              key={index}
              className={cn(
                "glass-card rounded-xl overflow-hidden transition-all hover:translate-y-[-5px]",
                "animate-fade-in [animation-delay:var(--delay)]"
              )}
              style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3 text-sm text-muted-foreground">
                  {item.date}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <Link 
                  to={item.href} 
                  className="inline-flex items-center text-primary font-medium text-sm group"
                >
                  <span>Read more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentRoll;
