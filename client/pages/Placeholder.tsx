import { Link } from "react-router-dom";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-colonial-light-bg">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 xl:px-[50px] pt-4 md:pt-6 lg:pt-[30px]">
        <div className="mx-auto max-w-[1820px] h-[60px] md:h-[70px] lg:h-[80px] rounded-[30px] md:rounded-[35px] lg:rounded-[40px] border border-colonial-border bg-white flex items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9178f14664a332d98928a8d74f4bfbf96ad1fa80?width=270" 
              alt="Colonial Consultants Logo" 
              className="h-[40px] md:h-[45px] lg:h-[50px] w-auto"
            />
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link 
              to="/" 
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-sm xl:text-[15px] transition-colors ${
                pageName === "Services" 
                  ? "bg-colonial-gold/10 text-colonial-navy font-semibold" 
                  : "text-colonial-gray font-normal hover:bg-gray-50"
              }`}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-sm xl:text-[15px] transition-colors ${
                pageName === "Projects" 
                  ? "bg-colonial-gold/10 text-colonial-navy font-semibold" 
                  : "text-colonial-gray font-normal hover:bg-gray-50"
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-sm xl:text-[15px] transition-colors ${
                pageName === "About" 
                  ? "bg-colonial-gold/10 text-colonial-navy font-semibold" 
                  : "text-colonial-gray font-normal hover:bg-gray-50"
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-sm xl:text-[15px] transition-colors ${
                pageName === "Contact" 
                  ? "bg-colonial-gold/10 text-colonial-navy font-semibold" 
                  : "text-colonial-gray font-normal hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Get Quote Button */}
          <button className="px-6 md:px-8 lg:px-10 xl:px-[45px] py-3 md:py-3.5 lg:py-4 rounded-[20px] md:rounded-[22px] lg:rounded-[25px] bg-colonial-navy text-colonial-gold font-semibold text-sm md:text-[15px] hover:bg-colonial-navy/90 transition-colors">
            Get Quote
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen pt-24">
        <div className="text-center max-w-2xl px-4">
          <div className="mb-6">
            <div className="w-24 h-24 bg-colonial-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🚧</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-colonial-navy mb-4">
              {pageName} Page
            </h1>
            <p className="text-lg text-colonial-gray mb-8">
              This page is coming soon. Continue prompting to fill in this page content if you'd like.
            </p>
            <Link 
              to="/" 
              className="inline-flex px-8 py-4 rounded-[25px] bg-colonial-navy text-colonial-gold font-semibold text-base hover:bg-colonial-navy/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
