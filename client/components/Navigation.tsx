import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ServicesModal from "./ServicesModal";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExpertiseModalOpen, setIsExpertiseModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleMobileNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 50);
  };

  const handleExpertiseClick = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      setIsExpertiseModalOpen(true);
    }, 50);
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    
    // If we're already on the home page, scroll to contact
    if (location.pathname === '/') {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      // Navigate to home page first, then scroll to contact
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <>
      {/* Expertise Modal */}
      <ServicesModal 
        isOpen={isExpertiseModalOpen} 
        onClose={() => setIsExpertiseModalOpen(false)} 
      />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-[200] px-4 md:px-8 lg:px-12 xl:px-[50px] pt-4 md:pt-6 lg:pt-[30px]">
        <div className="mx-auto max-w-[1820px] h-[60px] md:h-[70px] lg:h-[80px] rounded-[30px] md:rounded-[35px] lg:rounded-[40px] border border-colonial-border bg-white flex items-center justify-between px-4 md:px-6 lg:px-8 shadow-lg">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/images/Colonial Consultants LOGO.svg" 
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
                  ? 'bg-colonial-gold/10 text-black' 
                  : 'text-black hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold text-sm xl:text-[15px] transition-colors ${
                isActive('/services') || location.pathname.startsWith('/services/')
                  ? 'bg-colonial-gold/10 text-black' 
                  : 'text-black hover:bg-gray-50'
              }`}
            >
              Services
            </Link>
            <button 
              onClick={() => setIsExpertiseModalOpen(true)}
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-black font-semibold text-sm xl:text-[15px] hover:bg-gray-50 transition-colors"
            >
              Expertise
            </button>
            <Link 
              to="/projects" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold text-sm xl:text-[15px] transition-colors ${
                isActive('/projects') 
                  ? 'bg-colonial-gold/10 text-black' 
                  : 'text-black hover:bg-gray-50'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold text-sm xl:text-[15px] transition-colors ${
                isActive('/about') 
                  ? 'bg-colonial-gold/10 text-black' 
                  : 'text-black hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            <button
              onClick={handleContactClick}
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-black font-semibold text-sm xl:text-[15px] hover:bg-gray-50 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[60] touch-manipulation"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-colonial-navy transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-colonial-navy transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-colonial-navy transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>


        </div>
      </header>

        {/* Mobile Menu Dropdown - Positioned independently */}
        {isMobileMenuOpen && (
          <div 
            className="fixed left-4 right-4 top-[84px] z-[9999] lg:hidden bg-white rounded-[20px] border border-colonial-border shadow-2xl overflow-hidden"
            style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'auto' }}
          >
            <nav className="flex flex-col">
              <div 
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleMobileNavigation('/');
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleMobileNavigation('/');
                }}
                className={`px-6 py-4 text-base border-b border-colonial-border active:bg-gray-100 cursor-pointer ${
                  isActive('/') 
                    ? 'bg-colonial-gold/10 text-colonial-navy font-semibold' 
                    : 'text-colonial-gray'
                }`}
                style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTapHighlightColor: 'rgba(0,0,0,0)', pointerEvents: 'auto' }}
              >
                Home
              </div>
              <div 
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleMobileNavigation('/services');
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleMobileNavigation('/services');
                }}
                className={`px-6 py-4 text-base border-b border-colonial-border active:bg-gray-100 cursor-pointer ${
                  isActive('/services') || location.pathname.startsWith('/services/')
                    ? 'bg-colonial-gold/10 text-colonial-navy font-semibold' 
                    : 'text-colonial-gray'
                }`}
                style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTapHighlightColor: 'rgba(0,0,0,0)', pointerEvents: 'auto' }}
              >
                Services
              </div>
              <div 
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleExpertiseClick();
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleExpertiseClick();
                }}
                className="px-6 py-4 text-colonial-gray font-normal text-base border-b border-colonial-border active:bg-gray-100 cursor-pointer"
                style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTapHighlightColor: 'rgba(0,0,0,0)', pointerEvents: 'auto' }}
              >
                Expertise
              </div>
              <div 
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleMobileNavigation('/projects');
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleMobileNavigation('/projects');
                }}
                className={`px-6 py-4 text-base border-b border-colonial-border active:bg-gray-100 cursor-pointer ${
                  isActive('/projects') 
                    ? 'bg-colonial-gold/10 text-colonial-navy font-semibold' 
                    : 'text-colonial-gray'
                }`}
                style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTapHighlightColor: 'rgba(0,0,0,0)', pointerEvents: 'auto' }}
              >
                Projects
              </div>
              <div 
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleMobileNavigation('/about');
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleMobileNavigation('/about');
                }}
                className={`px-6 py-4 text-base border-b border-colonial-border active:bg-gray-100 cursor-pointer ${
                  isActive('/about') 
                    ? 'bg-colonial-gold/10 text-colonial-navy font-semibold' 
                    : 'text-colonial-gray'
                }`}
                style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTapHighlightColor: 'rgba(0,0,0,0)', pointerEvents: 'auto' }}
              >
                About
              </div>
              <div
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleContactClick();
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleContactClick();
                }}
                className="px-6 py-4 text-colonial-gray font-normal text-base active:bg-gray-100 cursor-pointer"
                style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTapHighlightColor: 'rgba(0,0,0,0)', pointerEvents: 'auto' }}
              >
                Contact
              </div>
              <div 
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleContactClick();
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleContactClick();
                }}
                className="sm:hidden mx-4 my-4 px-6 py-3 rounded-[20px] bg-colonial-navy text-colonial-gold font-semibold text-sm active:bg-colonial-navy/80 transition-colors text-center cursor-pointer"
                style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTapHighlightColor: 'rgba(0,0,0,0)', pointerEvents: 'auto' }}
              >
                Get Quote
              </div>
            </nav>
          </div>
        )}
    </>
  );
}
