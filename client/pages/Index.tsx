import { Link, useNavigate } from "react-router-dom";
import { useState, lazy, Suspense, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";

// Lazy load all heavy components for better initial load performance
const ServicesModal = lazy(() => import("@/components/ServicesModal"));
const FrameScrollAnimation = lazy(() => import("@/components/FrameScrollAnimation"));
const SiteVisitCarousel = lazy(() => import("@/components/SiteVisitCarousel"));
const ChatBot = lazy(() => import("@/components/ChatBot"));
const BuildingModel = lazy(() => import("@/components/BuildingModel"));

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, suffix: string = "") {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * end);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref, displayValue: `${count}${suffix}` };
}



interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  completionDate: string;
}

export default function Index() {
  const navigate = useNavigate();
  
  // Counter animations for stats
  const projectsCounter = useCountUp(40, 2000, "+");
  const yearsCounter = useCountUp(15, 2000, "+");
  const satisfactionCounter = useCountUp(100, 2000, "%");
  const teamCounter = useCountUp(15, 2000, "+");
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    terms: false
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Fetch services and projects from API with optimization
  useEffect(() => {
    // Use Promise.all to load data in parallel for faster initial load
    Promise.all([
      fetch('/api/services').then(res => res.json()),
      fetch('/api/projects').then(res => res.json()),
      fetch('/api/testimonials').then(res => res.json())
    ])
      .then(([servicesData, projectsData, testimonialsData]) => {
        setServices(servicesData.slice(0, 6)); // Show first 6 services
        setProjects(projectsData.slice(0, 3)); // Show first 3 projects
        setTestimonials(testimonialsData); // Show all testimonials
      })
      .catch(err => console.error('Failed to fetch data:', err));
  }, []);

  // Keyboard shortcut to open admin panel (Ctrl + Shift + A)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        navigate('/admin/login');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setContactForm({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          terms: false
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[70px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 overflow-hidden bg-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-gray-100">
          <img 
            src="/video/Colonical_background_image.jpeg" 
            alt="Background"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[65%_top] sm:object-[60%_center] md:object-center lg:object-center will-change-transform"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center pt-16 sm:pt-20 md:pt-24 lg:pt-28">
            {/* Hero Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 bg-black/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl">
              {/* Badge */}
              <div className="inline-flex items-center px-4 sm:px-5 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-3 rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] border border-colonial-gold bg-colonial-gold/20">
                <span className="text-white font-semibold text-[11px] sm:text-xs md:text-[13px]">
                  ✦ 15+ Years Excellence
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2 md:space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-white leading-tight md:leading-[1.1] lg:leading-[62px]">
                  Engineering Excellence
                </h1>
                <div className="w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-[8px] sm:h-[10px] md:h-[12px] lg:h-[14px] bg-colonial-gold rounded-[3px] shadow-lg" />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-[22px] font-semibold text-colonial-gold">
                  Building the Future Since 2010
                </h2>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-200 leading-relaxed md:leading-[24px] lg:leading-[26px] max-w-xl">
                We don't just design solutions, we redefine possibilities. Our passionate, innovative teams partner with clients to turn challenges into bold, practical outcomes through cutting-edge BIM technology and precision engineering.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-[20px] pt-2 sm:pt-3">
                <a href="#contact" className="px-5 sm:px-6 md:px-8 lg:px-[45px] py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-[20px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[28px] bg-colonial-gold text-colonial-navy font-semibold text-xs sm:text-sm md:text-base lg:text-[15px] hover:bg-colonial-gold/90 transition-colors text-center shadow-xl">
                  Get Started →
                </a>
              </div>
            </div>


          </div>

          {/* Quick Stats */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[100px]">
            <div className="bg-white/95 backdrop-blur-sm border border-colonial-border rounded-[16px] sm:rounded-[20px] md:rounded-[22px] lg:rounded-[25px] p-4 sm:p-6 md:p-8 lg:p-10 xl:px-[70px] xl:py-[20px]">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-[70px]">
                {/* Projects Delivered */}
                <div ref={projectsCounter.ref} className="space-y-1 sm:space-y-2 md:space-y-3 text-center sm:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl">🏗️</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-colonial-navy">{projectsCounter.displayValue}</div>
                  <div className="text-[10px] sm:text-xs md:text-[13px] text-colonial-gray">Projects Delivered</div>
                </div>

                {/* Years in Business */}
                <div ref={yearsCounter.ref} className="space-y-1 sm:space-y-2 md:space-y-3 text-center sm:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl">📅</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-colonial-navy">{yearsCounter.displayValue}</div>
                  <div className="text-[10px] sm:text-xs md:text-[13px] text-colonial-gray">Years in Business</div>
                </div>

                {/* Client Satisfaction */}
                <div ref={satisfactionCounter.ref} className="space-y-1 sm:space-y-2 md:space-y-3 text-center sm:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl">⭐</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-colonial-navy">{satisfactionCounter.displayValue}</div>
                  <div className="text-[10px] sm:text-xs md:text-[13px] text-colonial-gray">Client Satisfaction</div>
                </div>

                {/* Expert Team */}
                <div ref={teamCounter.ref} className="space-y-1 sm:space-y-2 md:space-y-3 text-center sm:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl">👥</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-colonial-navy">{teamCounter.displayValue}</div>
                  <div className="text-[10px] sm:text-xs md:text-[13px] text-colonial-gray">Expert Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Header */}
          <div className="text-center space-y-4 md:space-y-6 lg:space-y-8 mb-10 md:mb-14 lg:mb-16">
            <div className="text-colonial-blue font-bold text-xs md:text-sm tracking-[2px]">
              OUR SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-colonial-navy">
              Comprehensive Engineering Solutions
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {services.map((service) => {
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
                className="group p-3 md:p-5 lg:p-6 rounded-[12px] md:rounded-[18px] lg:rounded-[20px] border border-[#EBEBEB] bg-white hover:shadow-lg transition-all block"
              >
                <div className="inline-flex p-2 md:p-3.5 rounded-[10px] md:rounded-[14px] bg-colonial-blue/10 mb-3 md:mb-5">
                  <div className="text-xl md:text-[28px]">{service.icon}</div>
                </div>
                <h3 className="text-sm md:text-lg lg:text-[18px] font-bold text-colonial-navy mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs md:text-[13px] text-colonial-gray leading-relaxed md:leading-[20px] mb-3 md:mb-5">
                  {service.description}
                </p>
                <div className="text-colonial-blue text-base md:text-xl font-bold group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Colonial Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-colonial-light-bg overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-[100px] md:top-[150px] lg:top-[200px] right-[0px] md:right-[50px] lg:right-[100px] w-[400px] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] lg:h-[600px] bg-colonial-gold/6 rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-colonial-navy text-center mb-10 md:mb-14 lg:mb-16">
            Why Choose Colonial?
          </h2>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 lg:mb-12">
            {/* 95%+ Accuracy */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[18px] md:rounded-[20px] bg-white">
              <div className="relative mb-6 md:mb-8">
                <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-colonial-blue/15 rounded-full" />
                <div className="absolute top-[11px] md:top-[16px] left-[11px] md:left-[16px] text-2xl md:text-[28px]">🎯</div>
              </div>
              <h3 className="text-2xl md:text-[26px] font-bold text-colonial-navy mb-3 md:mb-4 lg:mb-5">
                95%+ Accuracy
              </h3>
              <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed md:leading-[24px]">
                Advanced BIM clash detection ensuring precision
              </p>
            </div>

            {/* 40% Faster */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[18px] md:rounded-[20px] bg-white">
              <div className="relative mb-6 md:mb-8">
                <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-colonial-orange/15 rounded-full" />
                <div className="absolute top-[11px] md:top-[16px] left-[11px] md:left-[16px] text-2xl md:text-[28px]">⚡</div>
              </div>
              <h3 className="text-2xl md:text-[26px] font-bold text-colonial-navy mb-3 md:mb-4 lg:mb-5">
                40% Faster
              </h3>
              <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed md:leading-[24px]">
                Optimized workflows for rapid project delivery
              </p>
            </div>

            {/* Latest Tech */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[18px] md:rounded-[20px] bg-white">
              <div className="relative mb-6 md:mb-8">
                <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-colonial-purple/15 rounded-full" />
                <div className="absolute top-[11px] md:top-[16px] left-[11px] md:left-[16px] text-2xl md:text-[28px]">💡</div>
              </div>
              <h3 className="text-2xl md:text-[26px] font-bold text-colonial-navy mb-3 md:mb-4 lg:mb-5">
                Latest Tech
              </h3>
              <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed md:leading-[24px]">
                Cutting-edge 3D design & visualization tools
              </p>
            </div>

            {/* ISO Certified */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[18px] md:rounded-[20px] bg-white">
              <div className="relative mb-6 md:mb-8">
                <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-colonial-gold/15 rounded-full" />
                <div className="absolute top-[11px] md:top-[16px] left-[11px] md:left-[16px] text-2xl md:text-[28px]">🏆</div>
              </div>
              <h3 className="text-2xl md:text-[26px] font-bold text-colonial-navy mb-3 md:mb-4 lg:mb-5">
                ISO Certified
              </h3>
              <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed md:leading-[24px]">
                Industry best practices & quality assurance
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Expert Team */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[18px] md:rounded-[20px] bg-white">
              <div className="relative mb-6 md:mb-8">
                <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-colonial-green/15 rounded-full" />
                <div className="absolute top-[11px] md:top-[16px] left-[11px] md:left-[16px] text-2xl md:text-[28px]">🤝</div>
              </div>
              <h3 className="text-2xl md:text-[26px] font-bold text-colonial-navy mb-3 md:mb-4 lg:mb-5">
                Expert Team
              </h3>
              <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed md:leading-[24px]">
                Certified engineers & designers at your service
              </p>
            </div>

            {/* Cost Savings */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[18px] md:rounded-[20px] bg-white">
              <div className="relative mb-6 md:mb-8">
                <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-colonial-red/15 rounded-full" />
                <div className="absolute top-[11px] md:top-[16px] left-[11px] md:left-[16px] text-2xl md:text-[28px]">💰</div>
              </div>
              <h3 className="text-2xl md:text-[26px] font-bold text-colonial-navy mb-3 md:mb-4 lg:mb-5">
                Cost Savings
              </h3>
              <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed md:leading-[24px]">
                20-30% reduction through efficient coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets We Serve Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Header */}
          <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-14 lg:mb-16">
            <div className="text-colonial-blue font-bold text-xs md:text-sm tracking-[2px]">
              INDUSTRIES WE SERVE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-colonial-navy">
              Trusted Across Multiple Markets
            </h2>
            <p className="text-base md:text-lg text-colonial-gray max-w-3xl mx-auto">
              From commercial developments to public infrastructure, we deliver engineering excellence across diverse sectors
            </p>
          </div>

          {/* Markets Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Commercial Real Estate */}
            <div className="group p-6 md:p-7 lg:p-8 rounded-[20px] bg-gradient-to-br from-colonial-blue/5 to-colonial-blue/10 hover:shadow-lg transition-all cursor-pointer border border-colonial-border">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏢</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-colonial-navy mb-2">
                    Commercial Real Estate
                  </h3>
                  <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed">
                    Office buildings, retail centers, mixed-use developments
                  </p>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="group p-6 md:p-7 lg:p-8 rounded-[20px] bg-gradient-to-br from-colonial-orange/5 to-colonial-orange/10 hover:shadow-lg transition-all cursor-pointer border border-colonial-border">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🚇</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-colonial-navy mb-2">
                    Transportation
                  </h3>
                  <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed">
                    Highways, bridges, transit systems, airports
                  </p>
                </div>
              </div>
            </div>

            {/* Residential */}
            <div className="group p-6 md:p-7 lg:p-8 rounded-[20px] bg-gradient-to-br from-colonial-purple/5 to-colonial-purple/10 hover:shadow-lg transition-all cursor-pointer border border-colonial-border">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏘️</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-colonial-navy mb-2">
                    Residential
                  </h3>
                  <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed">
                    Multi-family housing, luxury communities, condominiums
                  </p>
                </div>
              </div>
            </div>

            {/* Healthcare */}
            <div className="group p-6 md:p-7 lg:p-8 rounded-[20px] bg-gradient-to-br from-colonial-red/5 to-colonial-red/10 hover:shadow-lg transition-all cursor-pointer border border-colonial-border">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏥</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-colonial-navy mb-2">
                    Healthcare & Life Science
                  </h3>
                  <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed">
                    Hospitals, medical centers, research facilities
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="group p-6 md:p-7 lg:p-8 rounded-[20px] bg-gradient-to-br from-colonial-green/5 to-colonial-green/10 hover:shadow-lg transition-all cursor-pointer border border-colonial-border">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-colonial-navy mb-2">
                    Education
                  </h3>
                  <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed">
                    Universities, schools, training facilities
                  </p>
                </div>
              </div>
            </div>

            {/* Industrial */}
            <div className="group p-6 md:p-7 lg:p-8 rounded-[20px] bg-gradient-to-br from-colonial-gold/5 to-colonial-gold/10 hover:shadow-lg transition-all cursor-pointer border border-colonial-border">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏭</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-colonial-navy mb-2">
                    Industrial & Manufacturing
                  </h3>
                  <p className="text-sm md:text-[15px] text-colonial-gray leading-relaxed">
                    Factories, warehouses, distribution centers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-colonial-light-bg">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-8 lg:mb-12">
            <div className="text-colonial-blue font-bold text-xs md:text-sm tracking-[2px] mb-3">TESTIMONIALS</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-colonial-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm md:text-base text-colonial-gray max-w-3xl mx-auto">
              Trusted by leading developers, architects, and engineering firms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-5 md:p-6 rounded-[16px] shadow-md hover:shadow-xl transition-shadow">
                {/* Rating Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-colonial-gold text-base">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-colonial-gray text-xs md:text-sm leading-relaxed mb-4 italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Client Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-colonial-navy text-sm md:text-base mb-0.5">
                    {testimonial.name}
                  </div>
                  <div className="text-colonial-blue text-xs mb-0.5">
                    {testimonial.position}
                  </div>
                  <div className="text-colonial-gray text-xs">
                    {testimonial.company}
                  </div>
                  {testimonial.project && (
                    <div className="text-colonial-gold text-xs mt-1">
                      Project: {testimonial.project}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <div className="text-colonial-blue font-bold text-sm tracking-[2px] mb-4">FEATURED WORK</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colonial-navy mb-6">
              Recent Projects
            </h2>
            <p className="text-lg text-colonial-gray max-w-3xl mx-auto">
              Explore our portfolio of successful engineering and design projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div key={project.id} className="group relative rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="h-80 bg-gradient-to-br from-colonial-blue/10 to-colonial-blue/20 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <div className="text-colonial-gold text-xs font-bold tracking-[2px] mb-2">{project.category.toUpperCase()}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                    <Link to="/projects" className="inline-flex items-center text-colonial-gold font-semibold hover:gap-2 transition-all">
                      View Project <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              // Fallback hardcoded projects
              <>
            {/* Residential Project */}
            <div className="group relative rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-80 bg-gradient-to-br from-colonial-orange/10 to-colonial-orange/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" 
                  alt="Residential Development"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="text-colonial-gold text-xs font-bold tracking-[2px] mb-2">RESIDENTIAL</div>
                <h3 className="text-2xl font-bold text-white mb-2">Harbor View Residences</h3>
                <p className="text-gray-200 text-sm mb-4">300-unit waterfront development with modern amenities</p>
                <Link to="/projects" className="inline-flex items-center text-colonial-gold font-semibold hover:gap-2 transition-all">
                  View Project <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Commercial Project */}
            <div className="group relative rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-80 bg-gradient-to-br from-colonial-purple/10 to-colonial-purple/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" 
                  alt="Commercial Tower"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="text-colonial-gold text-xs font-bold tracking-[2px] mb-2">COMMERCIAL</div>
                <h3 className="text-2xl font-bold text-white mb-2">Skyline Corporate Tower</h3>
                <p className="text-gray-200 text-sm mb-4">500,000 sq ft mixed-use development</p>
                <Link to="/projects" className="inline-flex items-center text-colonial-gold font-semibold hover:gap-2 transition-all">
                  View Project <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Infrastructure Project */}
            <div className="group relative rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-80 bg-gradient-to-br from-colonial-blue/10 to-colonial-blue/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800" 
                  alt="Transit Center"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="text-colonial-gold text-xs font-bold tracking-[2px] mb-2">INFRASTRUCTURE</div>
                <h3 className="text-2xl font-bold text-white mb-2">Metropolitan Transit Center</h3>
                <p className="text-gray-200 text-sm mb-4">250,000 sq ft multimodal transportation hub</p>
                <Link to="/projects" className="inline-flex items-center text-colonial-gold font-semibold hover:gap-2 transition-all">
                  View Project <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            </>
            )}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-block px-10 py-4 rounded-[35px] bg-colonial-navy text-colonial-gold font-semibold hover:bg-colonial-navy/90 transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-colonial-light-bg overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-colonial-gold/5 rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="text-colonial-blue font-bold text-xs md:text-sm tracking-[2px] mb-4">
                  HOW WE WORK
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-colonial-navy mb-6">
                  How we work
                </h2>
                <p className="text-base md:text-lg text-colonial-gray leading-relaxed mb-6">
                  We start by defining the scope and the rules of the road. Inputs, jurisdiction expectations, deliverables, and schedule. Then we execute.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-colonial-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-colonial-navy mb-1">Clarity first</h4>
                    <p className="text-sm text-colonial-gray">You'll know what you're getting, what we need, and when you'll have it.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-colonial-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-colonial-navy mb-1">Straight answers</h4>
                    <p className="text-sm text-colonial-gray">If something is a risk, we say it early. If we don't know, we don't bluff.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-colonial-purple/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-colonial-navy mb-1">Commitment with fairness</h4>
                    <p className="text-sm text-colonial-gray">When we quote a scope and commit to it, we honor that commitment. If conditions change, we don't surprise you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-colonial-green/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-colonial-navy mb-1">Finish strong</h4>
                    <p className="text-sm text-colonial-gray">We support comment responses, revisions, punchlists, and closeout to get you across the line.</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="inline-block px-8 py-4 rounded-[28px] bg-colonial-navy text-colonial-gold font-semibold hover:bg-colonial-navy/90 transition-colors"
                >
                  Learn More About Us →
                </Link>
              </div>
            </div>

            {/* Right Image - Site Visit Carousel */}
            <div id="site-visit" className="relative scroll-mt-20">
              <SiteVisitCarousel
                images={[
                  '/images/WhatsApp Image 2026-01-12 at 12.14.29 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.33 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.34 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.34 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.35 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.37 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.37 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.41 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.41 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.42 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.42 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.43 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.47 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.48 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.48 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.49 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.49 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.50 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.50 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.51 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.51 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.52 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.52 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.53 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.54 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.55 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.14.56 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.22 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.23 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.23 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.24 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.24 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.24 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.25 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.25 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.25 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.26 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.26 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.27 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.27 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.27 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.28 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.28 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.28 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.29 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.29 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.30 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.30 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.30 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.31 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.31 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.31 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.32 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.32 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.32 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.33 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.33 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.33 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.34 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.34 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.34 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.35 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.35 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.35 PM.jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.36 PM (1).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.36 PM (2).jpeg',
                  '/images/WhatsApp Image 2026-01-12 at 12.15.36 PM.jpeg',
                ]}
                autoPlayInterval={3000}
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-[20px] p-6 shadow-xl border border-colonial-border">
                <div className="text-3xl font-bold text-colonial-navy mb-1">40+</div>
                <div className="text-sm text-colonial-gray">Projects Completed</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-[20px] p-6 shadow-xl border border-colonial-border">
                <div className="text-3xl font-bold text-colonial-navy mb-1">15+</div>
                <div className="text-sm text-colonial-gray">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="relative py-12 md:py-16 lg:py-20 xl:py-24 bg-colonial-navy overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-30px] md:top-[-40px] lg:top-[-50px] right-[50px] md:right-[100px] lg:right-[200px] w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] bg-colonial-gold/12 rounded-full" />
          <div className="absolute top-[-100px] md:top-[-120px] lg:top-[-150px] left-[20px] md:left-[50px] lg:left-[150px] w-[250px] md:w-[300px] lg:w-[400px] h-[250px] md:h-[300px] lg:h-[400px] bg-colonial-blue/8 rounded-[40px] md:rounded-[50px] lg:rounded-[60px] rotate-[-30deg]" />
          <div className="absolute bottom-[50px] md:bottom-[100px] lg:bottom-[150px] right-[30px] md:right-[50px] lg:right-[100px] w-[150px] md:w-[200px] lg:w-[250px] h-[150px] md:h-[200px] lg:h-[250px] bg-colonial-purple/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl relative z-10 text-center">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {/* Label */}
            <div className="text-colonial-gold font-bold text-xs md:text-sm tracking-[2px]">
              READY TO START?
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-white leading-tight">
              Transform Your Next Project
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-[19px] text-[#E8E8E8] leading-relaxed md:leading-[30px] lg:leading-[32px] max-w-3xl mx-auto">
              Let our expert team bring your vision to life with cutting-edge BIM
              technology and innovative engineering solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-[30px] justify-center pt-4 md:pt-6">
              <a href="#contact" className="px-8 md:px-10 lg:px-[50px] py-4 md:py-5 lg:py-6 rounded-[28px] md:rounded-[32px] lg:rounded-[35px] bg-colonial-gold text-colonial-navy font-semibold text-base md:text-lg lg:text-[18px] hover:bg-colonial-gold/90 transition-colors">
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-14">
            <div className="text-colonial-blue font-bold text-xs md:text-sm tracking-[2px]">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-colonial-navy">
              Let's Build Something Great
            </h2>
            <p className="text-base md:text-lg text-colonial-gray max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6">
            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                Something went wrong. Please try again.
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-colonial-navy mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-colonial-border focus:border-colonial-blue focus:ring-2 focus:ring-colonial-blue/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-colonial-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-colonial-border focus:border-colonial-blue focus:ring-2 focus:ring-colonial-blue/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-colonial-navy mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-colonial-border focus:border-colonial-blue focus:ring-2 focus:ring-colonial-blue/20 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-colonial-navy mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  value={contactForm.service}
                  onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-colonial-border focus:border-colonial-blue focus:ring-2 focus:ring-colonial-blue/20 outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="architectural">Architectural Design</option>
                  <option value="bim">BIM Services</option>
                  <option value="mep">MEP Services</option>
                  <option value="road">Road Design</option>
                  <option value="site-planning">Site Planning</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-colonial-navy mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-colonial-border focus:border-colonial-blue focus:ring-2 focus:ring-colonial-blue/20 outline-none transition-all resize-none"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                checked={contactForm.terms}
                onChange={(e) => setContactForm({ ...contactForm, terms: e.target.checked })}
                className="mt-1 w-4 h-4 text-colonial-blue border-colonial-border rounded focus:ring-2 focus:ring-colonial-blue/20"
              />
              <label htmlFor="terms" className="text-sm text-colonial-gray">
                I agree to the terms and conditions and privacy policy
              </label>
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className="w-full px-8 py-4 rounded-lg bg-colonial-navy text-colonial-gold font-semibold text-lg hover:bg-colonial-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitStatus === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-colonial-navy py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <img 
                src="/images/Colonial Consultants LOGO.svg" 
                alt="Colonial Consultants Logo" 
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Leading engineering consultancy providing innovative BIM, architectural, and MEP design solutions since 2010.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-colonial-gold/10 flex items-center justify-center text-colonial-gold hover:bg-colonial-gold/20 transition-colors">
                  <span className="text-lg">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-colonial-gold/10 flex items-center justify-center text-colonial-gold hover:bg-colonial-gold/20 transition-colors">
                  <span className="text-lg">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-colonial-gold/10 flex items-center justify-center text-colonial-gold hover:bg-colonial-gold/20 transition-colors">
                  <span className="text-lg">fb</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-colonial-gold transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-colonial-gold transition-colors">Services</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-colonial-gold transition-colors">Projects</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-colonial-gold transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-colonial-gold transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>📍 Williamsburg VA</li>
                <li>📧 aditi@colonialconsultantsusa.com</li>
                <li>📞 +1 757-880-9141</li>
                <li>🕒 Mon-Fri: 8 am to 4:30 pm EST</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 Colonial Consultants. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
