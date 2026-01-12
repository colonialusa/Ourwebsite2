import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ServicesModal from "./ServicesModal";

export default function Navigation() {
  const location = useLocation();
  const [isExpertiseModalOpen, setIsExpertiseModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Expertise Modal */}
      <ServicesModal 
        isOpen={isExpertiseModalOpen} 
        onClose={() => setIsExpertiseModalOpen(false)} 
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 xl:px-[50px] pt-4 md:pt-6 lg:pt-[30px]">
        <div className="mx-auto max-w-[1820px] h-[60px] md:h-[70px] lg:h-[80px] rounded-[30px] md:rounded-[35px] lg:rounded-[40px] border border-colonial-border bg-white flex items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/9178f14664a332d98928a8d74f4bfbf96ad1fa80?width=270" 
                alt="Colonial Consultants Logo" 
                className="h-[40px] md:h-[45px] lg:h-[50px] w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link 
              to="/" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold text-sm xl:text-[15px] transition-colors ${
                isActive('/') 
                  ? 'bg-colonial-gold/10 text-colonial-navy' 
                  : 'text-colonial-gray hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold text-sm xl:text-[15px] transition-colors ${
                isActive('/services') || location.pathname.startsWith('/services/')
                  ? 'bg-colonial-gold/10 text-colonial-navy' 
                  : 'text-colonial-gray hover:bg-gray-50'
              }`}
            >
              Services
            </Link>
            <button 
              onClick={() => setIsExpertiseModalOpen(true)}
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors"
            >
              Expertise
            </button>
            <Link 
              to="/projects" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold text-sm xl:text-[15px] transition-colors ${
                isActive('/projects') 
                  ? 'bg-colonial-gold/10 text-colonial-navy' 
                  : 'text-colonial-gray hover:bg-gray-50'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold text-sm xl:text-[15px] transition-colors ${
                isActive('/about') 
                  ? 'bg-colonial-gold/10 text-colonial-navy' 
                  : 'text-colonial-gray hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            <a
              href="/#contact" 
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-colonial-navy transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-colonial-navy transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-colonial-navy transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Get Quote Button - Hidden on small mobile */}
          <a 
            href="/#contact" 
            className="hidden sm:block px-6 md:px-8 lg:px-10 xl:px-[45px] py-3 md:py-3.5 lg:py-4 rounded-[20px] md:rounded-[22px] lg:rounded-[25px] bg-colonial-navy text-colonial-gold font-semibold text-sm md:text-[15px] hover:bg-colonial-navy/90 transition-colors"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 mx-4 md:mx-8 bg-white rounded-[20px] border border-colonial-border shadow-lg overflow-hidden">
            <nav className="flex flex-col">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 text-base border-b border-colonial-border ${
                  isActive('/') 
                    ? 'bg-colonial-gold/10 text-colonial-navy font-semibold' 
                    : 'text-colonial-gray hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 text-base border-b border-colonial-border ${
                  isActive('/services') || location.pathname.startsWith('/services/')
                    ? 'bg-colonial-gold/10 text-colonial-navy font-semibold' 
                    : 'text-colonial-gray hover:bg-gray-50'
                }`}
              >
                Services
              </Link>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsExpertiseModalOpen(true);
                }}
                className="px-6 py-4 text-colonial-gray font-normal text-base hover:bg-gray-50 transition-colors border-b border-colonial-border text-left"
              >
                Expertise
              </button>
              <Link 
                to="/projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 text-base border-b border-colonial-border ${
                  isActive('/projects') 
                    ? 'bg-colonial-gold/10 text-colonial-navy font-semibold' 
                    : 'text-colonial-gray hover:bg-gray-50'
                }`}
              >
                Projects
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 text-base border-b border-colonial-border ${
                  isActive('/about') 
                    ? 'bg-colonial-gold/10 text-colonial-navy font-semibold' 
                    : 'text-colonial-gray hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-4 text-colonial-gray font-normal text-base hover:bg-gray-50 transition-colors"
              >
                Contact
              </a>
              <a 
                href="/#contact" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="sm:hidden mx-4 my-4 px-6 py-3 rounded-[20px] bg-colonial-navy text-colonial-gold font-semibold text-sm hover:bg-colonial-navy/90 transition-colors text-center"
              >
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
