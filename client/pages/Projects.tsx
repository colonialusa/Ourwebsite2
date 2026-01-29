import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  completionDate: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from API
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-[120px] md:pt-[140px] lg:pt-[160px] pb-12 md:pb-16 lg:pb-20 bg-gradient-to-br from-colonial-navy to-colonial-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-colonial-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-colonial-purple rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-6 py-3 rounded-[20px] bg-colonial-gold/20 border border-colonial-gold/30">
              <span className="text-colonial-gold font-semibold text-sm">✦ Our Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Inspired Work Begins with
              <br />
              Inspiring Clients
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We consult on industry-leading projects for public and private sector clients, making our communities better, safer, and stronger.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-colonial-light-bg">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl text-colonial-gray">Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-colonial-gray">No projects found. Add projects from the admin panel.</p>
            </div>
          ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-[24px] overflow-hidden border border-colonial-border hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-colonial-blue/10 to-colonial-blue/20 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white rounded-full text-sm font-semibold text-colonial-navy shadow-lg">
                    {new Date(project.completionDate).getFullYear()}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-colonial-blue tracking-[2px] mb-2">
                      {project.category.toUpperCase()}
                    </div>
                    <h3 className="text-2xl font-bold text-colonial-navy mb-2 group-hover:text-colonial-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm text-colonial-gray">
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>Completed: {new Date(project.completionDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    </div>
                  </div>

                  <p className="text-colonial-gray text-sm leading-relaxed pt-4 border-t border-colonial-border">
                    {project.description}
                  </p>

                  <Link 
                    to={`/projects/${project.id}`}
                    className="block w-full mt-4 px-6 py-3 rounded-[20px] bg-colonial-navy text-colonial-gold font-semibold hover:bg-colonial-navy/90 transition-colors text-center"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colonial-navy mb-4">
              Project Impact by the Numbers
            </h2>
            <p className="text-lg text-colonial-gray">Delivering measurable results across all sectors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-colonial-blue/5 rounded-[20px] border border-colonial-border">
              <div className="text-5xl font-bold text-colonial-navy mb-2">40+</div>
              <div className="text-colonial-gray">Projects Delivered</div>
            </div>
            <div className="text-center p-8 bg-colonial-purple/5 rounded-[20px] border border-colonial-border">
              <div className="text-5xl font-bold text-colonial-navy mb-2">$10M+</div>
              <div className="text-colonial-gray">Total Project Value</div>
            </div>
            <div className="text-center p-8 bg-colonial-gold/5 rounded-[20px] border border-colonial-border">
              <div className="text-5xl font-bold text-colonial-navy mb-2">25M+</div>
              <div className="text-colonial-gray">Square Feet Designed</div>
            </div>
            <div className="text-center p-8 bg-colonial-green/5 rounded-[20px] border border-colonial-border">
              <div className="text-5xl font-bold text-colonial-navy mb-2">95%</div>
              <div className="text-colonial-gray">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-colonial-navy">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can bring your vision to life with our proven expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-10 py-5 rounded-[35px] bg-colonial-gold text-colonial-navy font-semibold text-lg hover:bg-colonial-gold/90 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link 
              to="/services" 
              className="px-10 py-5 rounded-[35px] border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1a252f]">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2026 Colonial Consultants. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
