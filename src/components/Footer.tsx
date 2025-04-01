
import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border/50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="https://1drv.ms/i/c/e5c67f4bca25096f/IQRuCaZGMZsnTIouaf5dpvesARhkXXIkry3D9i6xHseOJ4o?width=256" 
                alt="Pawel Skorupinski" 
                className="h-10 w-10 rounded-full object-cover mr-3"
              />
              <span className="text-xl font-semibold tracking-tight">Pawel Skorupinski</span>
            </Link>
            <p className="text-foreground/70 max-w-sm mb-6">
              Turning Complexity into Opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/skorupinski/" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/pskorupinski/" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/70 hover:text-primary transition-colors duration-200">Home</Link></li>
              <li><Link to="/case-studies/household-helper-ai-agent" className="text-foreground/70 hover:text-primary transition-colors duration-200">Case Studies</Link></li>
              <li><Link to="/reports/mwc-2025" className="text-foreground/70 hover:text-primary transition-colors duration-200">Reports</Link></li>
              <li><Link to="/tools/product-discovery-tools-map" className="text-foreground/70 hover:text-primary transition-colors duration-200">Tools</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Get in Touch</h3>
            <a href="mailto:pawel@skorupinski.com" className="text-foreground/70 hover:text-primary transition-colors duration-200 block mb-2">
              pawel@skorupinski.com
            </a>
            <a href="tel:+34655156711" className="text-foreground/70 hover:text-primary transition-colors duration-200 block mb-4">
              +34 655 156 711
            </a>
            <Link to="/contact" className="text-primary font-medium inline-flex items-center group">
              <span>Contact Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border/30 text-sm text-foreground/60 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Pawel Skorupinski. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
