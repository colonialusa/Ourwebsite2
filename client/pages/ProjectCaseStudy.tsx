import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

interface ProjectImage {
  url: string;
  caption: string;
}

interface CaseStudyData {
  challenge: string;
  solution: string;
  results: string[];
  timeline: {
    phase: string;
    duration: string;
    description: string;
  }[];
  keyFeatures: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  completedDate: string;
  description: string;
  image: string;
  caseStudy?: CaseStudyData;
  images?: ProjectImage[];
  projectSize?: string;
  budget?: string;
  client?: string;
}

export default function ProjectCaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        const foundProject = data.find((p: Project) => p.id === id);
        if (foundProject) {
          setProject(foundProject);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch project:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-40 pb-20 flex items-center justify-center">
          <p className="text-xl text-colonial-gray">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold text-colonial-navy mb-6">Project Not Found</h1>
          <Link to="/projects" className="text-colonial-gold hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [
    { url: project.image, caption: project.title },
    ...(project.images || [])
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-colonial-navy">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <Link to="/projects" className="text-colonial-gold hover:underline flex items-center gap-2">
              ← Back to Projects
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-colonial-gold text-sm font-semibold tracking-wider mb-4">
                {project.category.toUpperCase()}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">📍</span>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-white/80">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">📅</span>
                  <div>
                    <p className="font-semibold">Completed</p>
                    <p className="text-white/80">{project.completedDate}</p>
                  </div>
                </div>
                {project.projectSize && (
                  <div className="flex items-start gap-3">
                    <span className="text-colonial-gold text-xl">📏</span>
                    <div>
                      <p className="font-semibold">Project Size</p>
                      <p className="text-white/80">{project.projectSize}</p>
                    </div>
                  </div>
                )}
                {project.client && (
                  <div className="flex items-start gap-3">
                    <span className="text-colonial-gold text-xl">👤</span>
                    <div>
                      <p className="font-semibold">Client</p>
                      <p className="text-white/80">{project.client}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src={allImages[selectedImage].url}
                alt={allImages[selectedImage].caption}
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              />
              {allImages[selectedImage].caption && (
                <p className="text-white/80 text-sm mt-4 text-center">
                  {allImages[selectedImage].caption}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {allImages.length > 1 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h3 className="text-2xl font-bold text-colonial-navy mb-6">Project Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg transition-all ${
                    selectedImage === index
                      ? 'ring-4 ring-colonial-gold scale-105'
                      : 'hover:scale-105'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-colonial-navy mb-8">Project Overview</h2>
          <p className="text-lg text-colonial-gray leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Case Study Details */}
      {project.caseStudy && (
        <>
          {/* Challenge, Solution, Results */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-colonial-navy mb-4">The Challenge</h3>
                  <p className="text-colonial-gray leading-relaxed">
                    {project.caseStudy.challenge}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold text-colonial-navy mb-4">Our Solution</h3>
                  <p className="text-colonial-gray leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold text-colonial-navy mb-4">Results</h3>
                  <ul className="space-y-3">
                    {project.caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-colonial-gold">✓</span>
                        <span className="text-colonial-gray">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          {project.caseStudy.keyFeatures && project.caseStudy.keyFeatures.length > 0 && (
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-4xl font-bold text-colonial-navy mb-12">Key Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.caseStudy.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                      <span className="text-colonial-gold text-2xl">▸</span>
                      <span className="text-colonial-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Project Timeline */}
          {project.caseStudy.timeline && project.caseStudy.timeline.length > 0 && (
            <section className="py-20 bg-colonial-navy text-white">
              <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-4xl font-bold mb-12">Project Timeline</h2>
                <div className="space-y-8">
                  {project.caseStudy.timeline.map((phase, index) => (
                    <div key={index} className="flex gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-colonial-gold flex items-center justify-center text-colonial-navy font-bold text-xl">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 pb-8 border-l-2 border-white/20 pl-8">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-2xl font-bold">{phase.phase}</h3>
                          <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-white/80">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Testimonial */}
          {project.caseStudy.testimonial && (
            <section className="py-20 bg-colonial-gold">
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className="text-6xl mb-8">💬</div>
                <blockquote className="text-2xl md:text-3xl font-semibold text-colonial-navy mb-8 leading-relaxed">
                  "{project.caseStudy.testimonial.quote}"
                </blockquote>
                <div className="text-colonial-navy">
                  <p className="font-bold text-xl">{project.caseStudy.testimonial.author}</p>
                  <p className="text-colonial-navy/80">{project.caseStudy.testimonial.position}</p>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-colonial-navy mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-colonial-gray mb-8">
            Let's discuss how we can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-colonial-navy text-white rounded-lg font-semibold hover:bg-colonial-navy/90 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-white border-2 border-colonial-navy text-colonial-navy rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
