
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

type CaseStudyItem = {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
};

type CategorySection = {
  title: string;
  items: CaseStudyItem[];
};

const caseStudiesData: CategorySection[] = [
  {
    title: "Strategic Business Analysis",
    items: [
      {
        title: "Case Study 2",
        description: "An in-depth analysis of strategic business operations and optimization techniques.",
        imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80",
        href: "/case-studies/strategic-business-analysis"
      }
    ]
  },
  {
    title: "Engineering Production System Capabilities",
    items: [
      {
        title: "Case Study 3",
        description: "How we improved production systems through innovative engineering approaches.",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80",
        href: "/case-studies/engineering-production-systems-1"
      },
      {
        title: "Case Study 4",
        description: "Scaling production capabilities through advanced engineering methods.",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80",
        href: "/case-studies/engineering-production-systems-2"
      }
    ]
  },
  {
    title: "New Product Prototypes",
    items: [
      {
        title: "Case Study 5",
        description: "Innovative product prototype that redefined user experiences in healthcare.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80",
        href: "/case-studies/new-product-prototype"
      },
      {
        title: "Household Helper AI Agent, pt. 1",
        description: "Diving into the problem space of household management inconveniences to explore agentic AI use cases.",
        imageUrl: "https://1drv.ms/i/c/e5c67f4bca25096f/IQS_YnMR1dc7Rb39h8BiYPBQAZdFW2q9i3VfMG08D9Yn0Vw?width=1024",
        href: "/case-studies/household-helper-ai-agent"
      }
    ]
  }
];

const CaseStudiesBrowse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl">
            A collection of my work across different domains, showcasing strategic thinking, engineering capabilities, and product innovation.
          </p>
          
          {caseStudiesData.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <article 
                    key={itemIndex}
                    className={cn(
                      "glass-card rounded-xl overflow-hidden transition-all hover:translate-y-[-5px]",
                      "animate-fade-in [animation-delay:var(--delay)]"
                    )}
                    style={{ '--delay': `${(categoryIndex + itemIndex) * 0.1}s` } as React.CSSProperties}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
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
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesBrowse;
