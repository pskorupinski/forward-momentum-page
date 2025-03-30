
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements with staggered delay
    const elements = [
      { ref: headingRef, delay: 0 },
      { ref: descriptionRef, delay: 0.3 },
      { ref: imageRef, delay: 0.1 },
      { ref: buttonRef, delay: 0.5 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(20px)';
        ref.current.style.transition = `opacity 0.8s ease-out ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
        
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, 100);
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[20%] w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-20 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="order-2 md:order-1 max-w-xl">
          <div className="text-reveal-container mb-3">
            <p className="text-sm md:text-base font-medium text-primary uppercase tracking-widest mb-3" ref={descriptionRef}>
              Pawel Skorupinski
            </p>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            ref={headingRef}
          >
            Bridging Business Opportunities with Fit-For-Purpose Technology
          </h1>
          
          <p 
            className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed"
            ref={descriptionRef}
          >
            Computer scientist who prioritizes impact. That led me to spend most of my 12-year career in health. Experience at leadership, engineering, and analyst positions shaped my holistic approach to challenges with technology products. Deeply interested in the role that digital stacks and AI agents play to unlock previously unthinkable solutions to businesses and society.
          </p>
          
          <div ref={buttonRef}>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center group"
            >
              <span>Let's talk</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
        
        <div 
          className="order-1 md:order-2 relative"
          ref={imageRef}
        >
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-100"></div>
            <img 
              src="https://1drv.ms/i/s!Am8JJcpLf8blgehw_Yso1cOrI_zbRQ?embed=1" 
              alt="Professional working on forward-thinking solutions" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-5 -right-5 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse-subtle"></div>
          <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
