import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch services:', err);
        setLoading(false);
      });
  }, []);

  // Position nodes in a circular network pattern around center (Desktop)
  const getNodePosition = (index: number, total: number) => {
    // Strategic positioning for professional network layout
    const positions = [
      { top: '10%', left: '10%' },   // Top-left
      { top: '10%', right: '10%' },  // Top-right
      { top: '40%', left: '5%' },    // Middle-left
      { top: '40%', right: '5%' },   // Middle-right
      { top: '70%', left: '15%' },   // Bottom-left
      { top: '70%', right: '15%' },  // Bottom-right
    ];
    return positions[index] || { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-colonial-navy to-colonial-navy/90">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center text-white space-y-4 sm:space-y-6">
            <div className="text-colonial-gold font-bold text-xs sm:text-sm tracking-[2px]">OUR EXPERTISE</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-2">
              Engineering & Design Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto px-4">
              Comprehensive solutions for your construction and infrastructure projects
            </p>
          </div>
        </div>
      </section>

      {/* Network Diagram Section - Desktop */}
      {!isMobile && (
      <section className="relative py-20 bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#1b263b] overflow-hidden min-h-[1000px]">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #00d4ff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating geometric shapes in background */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-500/20 -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 border border-cyan-400/20 rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl text-white">Loading services...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-white">No services available.</p>
          </div>
        ) : (
          <div className="relative w-full" style={{ minHeight: '1000px' }}>
            {/* Central hub/focal point */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-72 h-72">
                {/* Pulsing rings */}
                <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
                <div className="absolute inset-4 border-2 border-blue-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Our Services
                    </h3>
                    <p className="text-cyan-300 text-sm mb-4">
                      Click on any service to explore
                    </p>
                    <div className="text-cyan-400 text-5xl mb-2">⚡</div>
                    <div className="text-white/60 text-xs">
                      {services.length} Solutions Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '1000px' }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#0066ff', stopOpacity: 0.3 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Lines from center to each service node */}
              {services.map((_, i) => {
                const positions = [
                  { x: '10%', y: '15%' },
                  { x: '90%', y: '15%' },
                  { x: '5%', y: '45%' },
                  { x: '95%', y: '45%' },
                  { x: '15%', y: '75%' },
                  { x: '85%', y: '75%' }
                ];
                const pos = positions[i];
                if (!pos) return null;
                
                return (
                  <g key={i}>
                    <line
                      x1="50%"
                      y1="50%"
                      x2={pos.x}
                      y2={pos.y}
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      filter="url(#glow)"
                      className="animate-pulse"
                      style={{ animationDuration: `${3 + i * 0.5}s` }}
                    />
                    {/* Connection nodes */}
                    <circle cx={pos.x} cy={pos.y} r="4" fill="#00d4ff" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  </g>
                );
              })}
            </svg>

            {/* Service Nodes */}
            <div className="container mx-auto px-8 relative" style={{ minHeight: '1000px' }}>
              {services.map((service, index) => {
                const position = getNodePosition(index, services.length);
                
                // Map service IDs to their specific page routes
                const serviceRoutes: Record<string, string> = {
                  '1736665300001': '/survey-feasibility',
                  '1736665300002': '/site-planning',
                  '1736665300003': '/road-design',
                  '1736665300004': '/survey-post-processing',
                  '1736665300005': '/bim-services',
                  '1736665300006': '/onsite-services'
                };
                
                const servicePath = serviceRoutes[service.id] || `/services/${service.id}`;
                
                return (
                  <Link
                    key={service.id}
                    to={servicePath}
                    className="absolute group cursor-pointer z-20"
                    style={{...position, width: '220px', height: '220px'}}
                  >
                    {/* 3D Isometric Container */}
                    <div className="relative w-full h-full perspective-1000">
                      {/* Ambient glow */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700 rounded-3xl"></div>
                      
                      {/* Main 3D Box */}
                      <div className="relative w-full h-full transition-all duration-700 group-hover:scale-105" 
                           style={{ 
                             transformStyle: 'preserve-3d',
                             transform: 'rotateX(10deg) rotateY(-10deg)',
                           }}>
                        
                        {/* Front Face */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden"
                             style={{ 
                               transform: 'translateZ(30px)',
                               background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 102, 255, 0.25) 100%)',
                               backdropFilter: 'blur(20px)',
                               boxShadow: '0 8px 32px 0 rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.1)'
                             }}>
                          <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-2xl group-hover:border-cyan-300/60 transition-all duration-500"></div>
                          
                          {/* Content */}
                          <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-10">
                            {/* Icon container */}
                            <div className="mb-4 relative">
                              <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/40 transition-all duration-500"></div>
                              <div className="relative text-7xl drop-shadow-2xl group-hover:scale-125 transition-transform duration-500 filter">
                                {service.icon}
                              </div>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
                              {service.title}
                            </h3>
                            
                            {/* Decorative line */}
                            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                          </div>

                          {/* Corner accents */}
                          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60"></div>
                          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60"></div>
                          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60"></div>
                          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60"></div>
                        </div>
                        
                        {/* Right Side Face */}
                        <div className="absolute top-0 right-0 w-8 h-full rounded-r-2xl"
                             style={{
                               background: 'linear-gradient(180deg, rgba(0, 102, 255, 0.3) 0%, rgba(0, 51, 153, 0.5) 100%)',
                               transform: 'rotateY(90deg) translateZ(102px) translateX(30px)',
                               transformOrigin: 'left center',
                               boxShadow: 'inset -2px 0 10px rgba(0, 0, 0, 0.3)'
                             }}>
                        </div>
                        
                        {/* Bottom Face */}
                        <div className="absolute bottom-0 left-0 w-full h-8 rounded-b-2xl"
                             style={{
                               background: 'linear-gradient(90deg, rgba(0, 51, 153, 0.5) 0%, rgba(0, 102, 255, 0.3) 100%)',
                               transform: 'rotateX(-90deg) translateZ(102px) translateY(30px)',
                               transformOrigin: 'center top',
                               boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
                             }}>
                        </div>
                      </div>

                      {/* Hover Info Badge */}
                      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-16 transition-all duration-300 whitespace-nowrap pointer-events-none">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 rounded-full shadow-2xl border border-cyan-300/50 backdrop-blur-sm">
                          <p className="text-white text-sm font-bold tracking-wide">Explore Service →</p>
                        </div>
                      </div>

                      {/* Floating particles on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </section>
      )}

      {/* Mobile/Tablet Grid View */}
      {isMobile && (
      <section className="relative py-12 bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#1b263b] overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #00d4ff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {loading ? (
          <div className="text-center py-12 px-4">
            <p className="text-lg text-white">Loading services...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-12 px-4">
            <p className="text-lg text-white">No services available.</p>
          </div>
        ) : (
          <div className="container mx-auto px-4">
            {/* Mobile Header */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Our Services
                </h3>
                <p className="text-cyan-300 text-sm mb-3">
                  Tap to explore each service
                </p>
                <div className="text-cyan-400 text-4xl mb-1">⚡</div>
                <div className="text-white/60 text-xs">
                  {services.length} Solutions Available
                </div>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                // Map service IDs to their specific page routes
                const serviceRoutes: Record<string, string> = {
                  '1736665300001': '/survey-feasibility',
                  '1736665300002': '/site-planning',
                  '1736665300003': '/road-design',
                  '1736665300004': '/survey-post-processing',
                  '1736665300005': '/bim-services',
                  '1736665300006': '/onsite-services'
                };
                
                const servicePath = serviceRoutes[service.id] || `/services/${service.id}`;
                
                return (
                <Link
                  key={service.id}
                  to={servicePath}
                  className="group cursor-pointer"
                >
                  {/* 3D Card for Mobile */}
                  <div className="relative h-64 sm:h-72">
                    {/* Ambient glow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 opacity-0 group-active:opacity-100 blur-2xl transition-all duration-500 rounded-3xl"></div>
                    
                    {/* Main Card */}
                    <div className="relative w-full h-full transition-all duration-500 group-active:scale-95" 
                         style={{ 
                           transformStyle: 'preserve-3d',
                           transform: 'rotateX(5deg) rotateY(-5deg)',
                         }}>
                      
                      {/* Front Face */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden"
                           style={{ 
                             transform: 'translateZ(20px)',
                             background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 102, 255, 0.25) 100%)',
                             backdropFilter: 'blur(20px)',
                             boxShadow: '0 8px 32px 0 rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.1)'
                           }}>
                        <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-2xl group-active:border-cyan-300/60 transition-all duration-500"></div>
                        
                        {/* Content */}
                        <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-10">
                          {/* Icon container */}
                          <div className="mb-4 relative">
                            <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-active:bg-cyan-400/40 transition-all duration-500"></div>
                            <div className="relative text-6xl sm:text-7xl drop-shadow-2xl group-active:scale-110 transition-transform duration-500">
                              {service.icon}
                            </div>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-white font-bold text-lg sm:text-xl leading-tight mb-2 group-active:text-cyan-300 transition-colors duration-300 drop-shadow-lg px-2">
                            {service.title}
                          </h3>
                          
                          {/* Decorative line */}
                          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-active:opacity-100 group-active:w-20 transition-all duration-500"></div>
                          
                          {/* Tap indicator */}
                          <div className="mt-4 text-cyan-300/60 text-xs font-semibold">
                            Tap to Learn More →
                          </div>
                        </div>

                        {/* Corner accents */}
                        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400/60"></div>
                        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-400/60"></div>
                        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-cyan-400/60"></div>
                        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400/60"></div>
                      </div>
                      
                      {/* Right Side Face */}
                      <div className="absolute top-0 right-0 w-5 h-full rounded-r-2xl"
                           style={{
                             background: 'linear-gradient(180deg, rgba(0, 102, 255, 0.3) 0%, rgba(0, 51, 153, 0.5) 100%)',
                             transform: 'rotateY(90deg) translateZ(96px) translateX(20px)',
                             transformOrigin: 'left center',
                             boxShadow: 'inset -2px 0 10px rgba(0, 0, 0, 0.3)'
                           }}>
                      </div>
                      
                      {/* Bottom Face */}
                      <div className="absolute bottom-0 left-0 w-full h-5 rounded-b-2xl"
                           style={{
                             background: 'linear-gradient(90deg, rgba(0, 51, 153, 0.5) 0%, rgba(0, 102, 255, 0.3) 100%)',
                             transform: 'rotateX(-90deg) translateZ(96px) translateY(20px)',
                             transformOrigin: 'center top',
                             boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3)'
                           }}>
                      </div>
                    </div>
                  </div>
                </Link>
                );
              })}
            </div>
          </div>
        )}
      </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-colonial-navy">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get in touch with our team to discuss your engineering and design needs
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-[35px] bg-colonial-gold text-colonial-navy font-semibold text-lg hover:bg-colonial-gold/90 transition-colors"
          >
            Contact Us Today →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-colonial-navy py-12 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl text-center">
          <p className="text-white/60">© 2026 Colonial Consultants. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
