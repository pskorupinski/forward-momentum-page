
import React from 'react';
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
    title: "Redesigning the User Experience for a Fintech Platform",
    description: "A case study on how we improved conversion rates by 37% through human-centered design and iterative testing.",
    date: "October 2023",
    category: "Case Study",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=3940&ixlib=rb-4.0.3",
    href: "/case-studies"
  },
  {
    title: "The Future of Product Management in AI-driven Organizations",
    description: "Exploring how product managers can adapt their approach when working with artificial intelligence and machine learning technologies.",
    date: "September 2023",
    category: "Report",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=3543&ixlib=rb-4.0.3",
    href: "/reports"
  },
  {
    title: "Building Scalable Design Systems for Enterprise Products",
    description: "Learn how we created a design system that improved development velocity by 40% while maintaining brand consistency.",
    date: "August 2023",
    category: "Case Study",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=4076&ixlib=rb-4.0.3",
    href: "/case-studies"
  }
];

const ContentRoll: React.FC = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="section-heading">
            Latest Content
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
                <div className="absolute top-4 left-4">
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
                
                <a 
                  href={item.href} 
                  className="inline-flex items-center text-primary font-medium text-sm group"
                >
                  <span>Read more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/all-content" 
            className="inline-flex items-center text-foreground/80 hover:text-primary transition-colors duration-200 animated-underline group"
          >
            <span>View all content</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentRoll;
