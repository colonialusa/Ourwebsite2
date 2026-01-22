import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ProjectImage {
  url: string;
  caption: string;
}

interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface CaseStudyData {
  challenge: string;
  solution: string;
  results: string[];
  timeline: TimelinePhase[];
  keyFeatures: string[];
  testimonial?: Testimonial;
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

export default function AdminProjectCaseStudy() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form state
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [results, setResults] = useState<string[]>([""]);
  const [keyFeatures, setKeyFeatures] = useState<string[]>([""]);
  const [timeline, setTimeline] = useState<TimelinePhase[]>([
    { phase: "", duration: "", description: "" }
  ]);
  const [testimonial, setTestimonial] = useState<Testimonial>({
    quote: "",
    author: "",
    position: ""
  });
  const [images, setImages] = useState<ProjectImage[]>([{ url: "", caption: "" }]);
  const [projectSize, setProjectSize] = useState("");
  const [budget, setBudget] = useState("");
  const [client, setClient] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      setLoading(false);
    }
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setChallenge(project.caseStudy?.challenge || "");
    setSolution(project.caseStudy?.solution || "");
    setResults(project.caseStudy?.results || [""]);
    setKeyFeatures(project.caseStudy?.keyFeatures || [""]);
    setTimeline(project.caseStudy?.timeline || [{ phase: "", duration: "", description: "" }]);
    setTestimonial(project.caseStudy?.testimonial || { quote: "", author: "", position: "" });
    setImages(project.images || [{ url: "", caption: "" }]);
    setProjectSize(project.projectSize || "");
    setBudget(project.budget || "");
    setClient(project.client || "");
  };

  const handleSave = async () => {
    if (!selectedProject) return;

    setSaving(true);
    try {
      // Get token from localStorage
      const token = localStorage.getItem('adminToken');
      if (!token) {
        alert('Please login again');
        navigate('/admin/login');
        return;
      }

      const updatedProject = {
        ...selectedProject,
        projectSize,
        budget,
        client,
        images: images.filter(img => img.url.trim() !== ""),
        caseStudy: {
          challenge,
          solution,
          results: results.filter(r => r.trim() !== ""),
          keyFeatures: keyFeatures.filter(f => f.trim() !== ""),
          timeline: timeline.filter(t => t.phase.trim() !== ""),
          testimonial: testimonial.quote.trim() !== "" ? testimonial : undefined
        }
      };

      const response = await fetch(`/api/admin/projects/${selectedProject.id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedProject)
      });

      if (response.ok) {
        alert('Case study updated successfully!');
        fetchProjects();
      } else {
        const error = await response.text();
        alert(`Failed to save: ${error}`);
      }
    } catch (error) {
      console.error('Failed to save:', error);
      alert('Failed to save case study. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const addArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, current: string[]) => {
    setter([...current, ""]);
  };

  const removeArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, index: number, current: string[]) => {
    setter(current.filter((_, i) => i !== index));
  };

  const updateArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, index: number, value: string, current: string[]) => {
    const updated = [...current];
    updated[index] = value;
    setter(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-colonial-navy text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Manage Project Case Studies</h1>
            <Link
              to="/admin/dashboard"
              className="px-6 py-3 bg-white text-colonial-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Projects List */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-colonial-navy mb-6">Projects</h2>
              {loading ? (
                <p>Loading projects...</p>
              ) : (
                <div className="space-y-3">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleProjectSelect(project)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        selectedProject?.id === project.id
                          ? 'bg-colonial-navy text-white'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <p className="font-semibold">{project.title}</p>
                      <p className="text-sm opacity-80">{project.category}</p>
                      {project.caseStudy && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-colonial-gold text-colonial-navy rounded">
                          Has Case Study
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Case Study Form */}
          <div className="md:col-span-2">
            {selectedProject ? (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-colonial-navy mb-6">
                  Case Study for: {selectedProject.title}
                </h2>

                <div className="space-y-8">
                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl font-bold text-colonial-navy mb-4">Project Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-colonial-gray mb-2">
                          Project Size
                        </label>
                        <input
                          type="text"
                          value={projectSize}
                          onChange={(e) => setProjectSize(e.target.value)}
                          placeholder="e.g., 500,000 sq ft"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-colonial-gray mb-2">
                          Budget
                        </label>
                        <input
                          type="text"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          placeholder="e.g., $50M"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-colonial-gray mb-2">
                          Client
                        </label>
                        <input
                          type="text"
                          value={client}
                          onChange={(e) => setClient(e.target.value)}
                          placeholder="Client name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div>
                    <label className="block text-sm font-semibold text-colonial-gray mb-2">
                      The Challenge
                    </label>
                    <textarea
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                      placeholder="Describe the project challenges..."
                    />
                  </div>

                  {/* Solution */}
                  <div>
                    <label className="block text-sm font-semibold text-colonial-gray mb-2">
                      Our Solution
                    </label>
                    <textarea
                      value={solution}
                      onChange={(e) => setSolution(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                      placeholder="Describe how you solved it..."
                    />
                  </div>

                  {/* Results */}
                  <div>
                    <label className="block text-sm font-semibold text-colonial-gray mb-2">
                      Results
                    </label>
                    {results.map((result, index) => (
                      <div key={index} className="flex gap-2 mb-3">
                        <input
                          type="text"
                          value={result}
                          onChange={(e) => updateArrayItem(setResults, index, e.target.value, results)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                          placeholder="Result achieved..."
                        />
                        {results.length > 1 && (
                          <button
                            onClick={() => removeArrayItem(setResults, index, results)}
                            className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem(setResults, results)}
                      className="text-colonial-navy hover:underline"
                    >
                      + Add Result
                    </button>
                  </div>

                  {/* Key Features */}
                  <div>
                    <label className="block text-sm font-semibold text-colonial-gray mb-2">
                      Key Features
                    </label>
                    {keyFeatures.map((feature, index) => (
                      <div key={index} className="flex gap-2 mb-3">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => updateArrayItem(setKeyFeatures, index, e.target.value, keyFeatures)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                          placeholder="Key feature..."
                        />
                        {keyFeatures.length > 1 && (
                          <button
                            onClick={() => removeArrayItem(setKeyFeatures, index, keyFeatures)}
                            className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem(setKeyFeatures, keyFeatures)}
                      className="text-colonial-navy hover:underline"
                    >
                      + Add Feature
                    </button>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-semibold text-colonial-gray mb-2">
                      Project Timeline
                    </label>
                    {timeline.map((phase, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg mb-4">
                        <div className="grid md:grid-cols-2 gap-4 mb-3">
                          <input
                            type="text"
                            value={phase.phase}
                            onChange={(e) => {
                              const updated = [...timeline];
                              updated[index].phase = e.target.value;
                              setTimeline(updated);
                            }}
                            placeholder="Phase name"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                          />
                          <input
                            type="text"
                            value={phase.duration}
                            onChange={(e) => {
                              const updated = [...timeline];
                              updated[index].duration = e.target.value;
                              setTimeline(updated);
                            }}
                            placeholder="Duration (e.g., 3 months)"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                          />
                        </div>
                        <textarea
                          value={phase.description}
                          onChange={(e) => {
                            const updated = [...timeline];
                            updated[index].description = e.target.value;
                            setTimeline(updated);
                          }}
                          rows={2}
                          placeholder="Phase description"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent mb-3"
                        />
                        {timeline.length > 1 && (
                          <button
                            onClick={() => setTimeline(timeline.filter((_, i) => i !== index))}
                            className="text-red-500 hover:underline text-sm"
                          >
                            Remove Phase
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => setTimeline([...timeline, { phase: "", duration: "", description: "" }])}
                      className="text-colonial-navy hover:underline"
                    >
                      + Add Timeline Phase
                    </button>
                  </div>

                  {/* Additional Images */}
                  <div>
                    <label className="block text-sm font-semibold text-colonial-gray mb-2">
                      Additional Project Images
                    </label>
                    {images.map((img, index) => (
                      <div key={index} className="grid md:grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          value={img.url}
                          onChange={(e) => {
                            const updated = [...images];
                            updated[index].url = e.target.value;
                            setImages(updated);
                          }}
                          placeholder="Image URL"
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                        />
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={img.caption}
                            onChange={(e) => {
                              const updated = [...images];
                              updated[index].caption = e.target.value;
                              setImages(updated);
                            }}
                            placeholder="Image caption"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                          />
                          {images.length > 1 && (
                            <button
                              onClick={() => setImages(images.filter((_, i) => i !== index))}
                              className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => setImages([...images, { url: "", caption: "" }])}
                      className="text-colonial-navy hover:underline"
                    >
                      + Add Image
                    </button>
                  </div>

                  {/* Testimonial */}
                  <div>
                    <label className="block text-sm font-semibold text-colonial-gray mb-2">
                      Client Testimonial (Optional)
                    </label>
                    <textarea
                      value={testimonial.quote}
                      onChange={(e) => setTestimonial({ ...testimonial, quote: e.target.value })}
                      rows={3}
                      placeholder="Testimonial quote..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent mb-3"
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={testimonial.author}
                        onChange={(e) => setTestimonial({ ...testimonial, author: e.target.value })}
                        placeholder="Author name"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                      />
                      <input
                        type="text"
                        value={testimonial.position}
                        onChange={(e) => setTestimonial({ ...testimonial, position: e.target.value })}
                        placeholder="Position/Title"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colonial-navy focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex gap-4 pt-6">
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="flex-1 px-8 py-4 bg-colonial-navy text-white rounded-lg font-semibold hover:bg-colonial-navy/90 transition-colors disabled:opacity-50"
                    >
                      {saving ? 'Saving...' : 'Save Case Study'}
                    </button>
                    <Link
                      to={`/projects/${selectedProject.id}`}
                      target="_blank"
                      className="px-8 py-4 bg-colonial-gold text-colonial-navy rounded-lg font-semibold hover:bg-colonial-gold/90 transition-colors text-center"
                    >
                      Preview
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <p className="text-xl text-colonial-gray">
                  Select a project from the list to manage its case study
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
