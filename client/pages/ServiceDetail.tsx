import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  detailedInfo?: {
    overview?: string;
    process?: string[];
    benefits?: string[];
    specialties?: string[];
    deliverables?: string[];
    technologies?: string[];
    advantages?: string[];
    capabilities?: string[];
    standards?: string[];
    consulting?: string[];
    training?: string[];
    services?: string[];
    expertise?: string[];
  };
}

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        const foundService = data.find((s: Service) => s.id === id);
        setService(foundService || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch service:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-xl text-colonial-gray">Loading service details...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-colonial-gray mb-4">Service not found</p>
          <Link to="/services" className="text-colonial-blue hover:underline">← Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-16 bg-gradient-to-br from-colonial-navy to-colonial-navy/90">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="space-y-6">
            <button
              onClick={() => navigate('/services')}
              className="text-colonial-gold hover:text-colonial-gold/80 font-semibold text-sm flex items-center gap-2 transition-colors"
            >
              ← Back to All Services
            </button>
            
            <div className="flex items-center gap-6">
              <div className="text-7xl md:text-8xl">{service.icon}</div>
              <div className="text-white space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/80">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              {service.detailedInfo?.overview && (
                <div>
                  <h2 className="text-3xl font-bold text-colonial-navy mb-4">Overview</h2>
                  <p className="text-lg text-colonial-gray leading-relaxed">
                    {service.detailedInfo.overview}
                  </p>
                </div>
              )}

              {/* Process */}
              {service.detailedInfo?.process && service.detailedInfo.process.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-colonial-navy mb-6">Our Process</h2>
                  <div className="space-y-4">
                    {service.detailedInfo.process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-colonial-blue text-white flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-lg text-colonial-gray">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {service.detailedInfo?.benefits && service.detailedInfo.benefits.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-colonial-navy mb-6">Key Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.detailedInfo.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-colonial-light-bg rounded-lg">
                        <span className="text-colonial-blue text-xl mt-1">✓</span>
                        <p className="text-colonial-gray">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialties */}
              {service.detailedInfo?.specialties && service.detailedInfo.specialties.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-colonial-navy mb-6">Our Specialties</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.detailedInfo.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-colonial-light-bg rounded-lg">
                        <span className="text-colonial-gold text-2xl">●</span>
                        <p className="text-colonial-gray font-medium">{specialty}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables */}
              {service.detailedInfo?.deliverables && service.detailedInfo.deliverables.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-colonial-navy mb-6">What You'll Receive</h2>
                  <div className="space-y-3">
                    {service.detailedInfo.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 border border-colonial-border rounded-lg">
                        <span className="text-colonial-blue text-xl mt-1">📋</span>
                        <p className="text-colonial-gray">{deliverable}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {service.detailedInfo?.technologies && service.detailedInfo.technologies.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-colonial-navy mb-6">Technologies We Use</h2>
                  <div className="flex flex-wrap gap-3">
                    {service.detailedInfo.technologies.map((tech, idx) => (
                      <div key={idx} className="px-4 py-2 bg-colonial-navy text-colonial-gold rounded-full font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Advantages */}
              {service.detailedInfo?.advantages && service.detailedInfo.advantages.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-colonial-navy mb-6">Why Choose Us</h2>
                  <div className="space-y-3">
                    {service.detailedInfo.advantages.map((advantage, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <span className="text-green-600 text-xl mt-1">✓</span>
                        <p className="text-colonial-gray">{advantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Capabilities, Standards, Services, Expertise, Consulting, Training */}
              {[
                { key: 'capabilities', title: 'Our Capabilities' },
                { key: 'standards', title: 'Standards & Compliance' },
                { key: 'services', title: 'Service Offerings' },
                { key: 'expertise', title: 'Areas of Expertise' },
                { key: 'consulting', title: 'Consulting Services' },
                { key: 'training', title: 'Training Programs' }
              ].map(({ key, title }) => {
                const items = service.detailedInfo?.[key as keyof typeof service.detailedInfo];
                if (!items || !Array.isArray(items) || items.length === 0) return null;
                
                return (
                  <div key={key}>
                    <h2 className="text-3xl font-bold text-colonial-navy mb-6">{title}</h2>
                    <div className="space-y-3">
                      {items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-colonial-light-bg rounded-lg">
                          <span className="text-colonial-blue text-xl mt-1">•</span>
                          <p className="text-colonial-gray">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Key Features Card */}
                <div className="bg-colonial-light-bg rounded-[24px] p-8 border border-colonial-border">
                  <h3 className="text-2xl font-bold text-colonial-navy mb-6">Key Features</h3>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-colonial-blue mt-1">✓</span>
                        <span className="text-sm text-colonial-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-colonial-navy rounded-[24px] p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-white/80 mb-6">
                    Contact our team to discuss your project requirements and receive a customized quote.
                  </p>
                  <Link
                    to="/#contact"
                    className="block w-full px-6 py-3 rounded-[20px] bg-colonial-gold text-colonial-navy text-center font-semibold hover:bg-colonial-gold/90 transition-colors"
                  >
                    Request a Quote →
                  </Link>
                </div>

                {/* Other Services */}
                <div className="bg-white rounded-[24px] p-8 border border-colonial-border">
                  <h3 className="text-xl font-bold text-colonial-navy mb-4">More Services</h3>
                  <Link
                    to="/services"
                    className="text-colonial-blue hover:text-colonial-blue/80 font-semibold text-sm transition-colors"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
