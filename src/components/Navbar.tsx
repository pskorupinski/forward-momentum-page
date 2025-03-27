
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

type NavItem = {
  title: string;
  href: string;
  submenu?: { title: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    title: 'Case Studies',
    href: '/case-studies/household-helper-ai-agent',
    submenu: [{ title: 'Household Helper AI Agent, pt. 1', href: '/case-studies/household-helper-ai-agent' }]
  },
  {
    title: 'Reports',
    href: '/reports/mwc-2025',
    submenu: [{ title: 'Mobile World Congress 2025', href: '/reports/mwc-2025' }]
  },
  {
    title: 'Tools',
    href: '/tools/product-discovery-tools-map',
    submenu: [{ title: 'Product Discovery Frameworks', href: '/tools/product-discovery-tools-map' }]
  },
  {
    title: 'Contact',
    href: '/contact'
  }
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      let clickedInMenu = false;
      
      Object.keys(menuRefs.current).forEach(key => {
        if (menuRefs.current[key]?.contains(event.target as Node)) {
          clickedInMenu = true;
        }
      });
      
      if (!clickedInMenu) setActiveMenu(null);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        scrolled 
          ? "bg-white/80 shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-semibold tracking-tight"
        >
          Pawel Skorupinski
        </Link>
        
        <nav className="hidden md:flex items-center">
          <div className="flex flex-row-reverse space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <div 
                key={item.title}
                ref={el => menuRefs.current[item.title] = el}
                className="relative" 
                onMouseEnter={() => item.submenu && setActiveMenu(item.title)}
                onMouseLeave={() => item.submenu && setActiveMenu(null)}
              >
                <Link 
                  to={item.href}
                  className={cn(
                    "menu-item text-foreground/80 hover:text-foreground transition-colors duration-200",
                    activeMenu === item.title && "text-primary"
                  )}
                >
                  <span className="flex items-center">
                    {item.title}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </span>
                </Link>
                
                {item.submenu && (
                  <div 
                    className={cn(
                      "absolute top-full right-0 mt-1 p-2 min-w-[270px] glass-panel rounded-lg shadow-lg transition-all duration-200 ease-in-out-apple",
                      activeMenu === item.title ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
                    )}
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        to={subitem.href}
                        className="block px-4 py-2 text-sm rounded-md hover:bg-white/50 transition-colors duration-150"
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
        
        <button className="md:hidden text-foreground/90 hover:text-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
