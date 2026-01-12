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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-colonial-navy to-colonial-navy/90">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center text-white space-y-6">
            <div className="text-colonial-gold font-bold text-sm tracking-[2px]">OUR EXPERTISE</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Engineering & Design Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Comprehensive solutions for your construction and infrastructure projects
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-colonial-light-bg">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl text-colonial-gray">Loading services...</p>
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-colonial-gray">No services available. Add services from the admin panel.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const colors = ['colonial-blue', 'colonial-purple', 'colonial-orange', 'colonial-green', 'colonial-red', 'colonial-navy'];
                const color = colors[index % colors.length];
                
                return (
                  <div
                    key={service.id}
                    className="group bg-white rounded-[24px] p-8 border border-colonial-border hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`inline-flex p-5 rounded-[20px] bg-${color}/10 mb-6`}>
                      <div className="text-5xl">{service.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-colonial-navy mb-4 group-hover:text-colonial-blue transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-colonial-gray mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-6 border-t border-colonial-border">
                      <div className="text-xs font-bold text-colonial-gray mb-3">KEY FEATURES:</div>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-colonial-blue mt-1">✓</span>
                          <span className="text-sm text-colonial-gray">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/services/${service.id}`}
                      className="block w-full mt-6 px-6 py-3 rounded-[20px] bg-colonial-navy text-colonial-gold text-center font-semibold hover:bg-colonial-navy/90 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

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
            to="/#contact"
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
