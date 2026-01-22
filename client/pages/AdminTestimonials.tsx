import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
  project: string;
}

export default function AdminTestimonials() {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    image: '',
    rating: 5,
    testimonial: '',
    project: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchTestimonials();
  }, [navigate]);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/admin/testimonials', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    
    try {
      const url = currentTestimonial 
        ? `/api/admin/testimonials/${currentTestimonial.id}`
        : '/api/admin/testimonials';
      
      const response = await fetch(url, {
        method: currentTestimonial ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        fetchTestimonials();
        setIsModalOpen(false);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save testimonial:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        fetchTestimonials();
      }
    } catch (error) {
      console.error('Failed to delete testimonial:', error);
    }
  };

  const openModal = (testimonial?: Testimonial) => {
    if (testimonial) {
      setCurrentTestimonial(testimonial);
      setFormData(testimonial);
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setCurrentTestimonial(null);
    setFormData({
      name: '',
      position: '',
      company: '',
      image: '',
      rating: 5,
      testimonial: '',
      project: ''
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-colonial-navy mb-2">Testimonials Management</h1>
              <p className="text-colonial-gray">Manage client testimonials and reviews</p>
            </div>
            <div className="flex gap-4">
              <Link to="/admin/dashboard" className="px-6 py-3 bg-gray-200 text-colonial-navy rounded-lg hover:bg-gray-300 transition-colors">
                ← Back to Dashboard
              </Link>
              <button onClick={handleLogout} className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                Logout
              </button>
            </div>
          </div>

          {/* Add New Button */}
          <div className="mb-8">
            <button
              onClick={() => openModal()}
              className="px-8 py-4 bg-colonial-gold text-colonial-navy font-semibold rounded-lg hover:bg-colonial-gold/90 transition-colors"
            >
              + Add New Testimonial
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-colonial-gold text-lg">★</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal(testimonial)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.testimonial}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-colonial-navy">{testimonial.name}</p>
                  <p className="text-sm text-colonial-blue">{testimonial.position}</p>
                  <p className="text-sm text-colonial-gray">{testimonial.company}</p>
                  {testimonial.project && (
                    <p className="text-sm text-colonial-gold mt-2">Project: {testimonial.project}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6">
                  {currentTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colonial-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Position *</label>
                    <input
                      type="text"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colonial-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colonial-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Rating *</label>
                    <select
                      value={formData.rating}
                      onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colonial-blue"
                    >
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Testimonial *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.testimonial}
                      onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colonial-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Name</label>
                    <input
                      type="text"
                      value={formData.project}
                      onChange={(e) => setFormData({...formData, project: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colonial-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Image URL (optional)</label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-colonial-blue"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-colonial-gold text-colonial-navy font-semibold rounded-lg hover:bg-colonial-gold/90 transition-colors"
                    >
                      {currentTestimonial ? 'Update' : 'Create'} Testimonial
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-3 bg-gray-200 text-colonial-navy rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
