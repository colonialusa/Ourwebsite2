import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function AdminServices() {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState<Service>({
    id: '',
    title: '',
    description: '',
    icon: '',
    features: ['']
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchServices();
  }, [navigate]);

  const fetchServices = async () => {
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch('/api/admin/services', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    const method = currentService.id ? 'PUT' : 'POST';
    const url = currentService.id 
      ? `/api/admin/services/${currentService.id}`
      : '/api/admin/services';

    try {
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(currentService)
      });

      fetchServices();
      setIsEditing(false);
      setCurrentService({
        id: '',
        title: '',
        description: '',
        icon: '',
        features: ['']
      });
    } catch (error) {
      console.error('Failed to save service:', error);
    }
  };

  const handleEdit = (service: Service) => {
    setCurrentService(service);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    const token = localStorage.getItem('adminToken');
    try {
      await fetch(`/api/admin/services/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchServices();
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  };

  const addFeature = () => {
    setCurrentService({
      ...currentService,
      features: [...currentService.features, '']
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...currentService.features];
    newFeatures[index] = value;
    setCurrentService({ ...currentService, features: newFeatures });
  };

  const removeFeature = (index: number) => {
    const newFeatures = currentService.features.filter((_, i) => i !== index);
    setCurrentService({ ...currentService, features: newFeatures });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard" className="text-colonial-blue hover:underline">← Back to Dashboard</Link>
            <h1 className="text-xl font-bold text-colonial-navy">Manage Services</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            className="mb-6 bg-colonial-blue text-white"
          >
            + Add New Service
          </Button>
        )}

        {isEditing && (
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-colonial-navy mb-6">
              {currentService.id ? 'Edit Service' : 'Add New Service'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-colonial-navy mb-2">Service Title</label>
                <Input
                  value={currentService.title}
                  onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-colonial-navy mb-2">Description</label>
                <Textarea
                  value={currentService.description}
                  onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
                  required
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-colonial-navy mb-2">Icon (emoji or image URL)</label>
                <Input
                  value={currentService.icon}
                  onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
                  placeholder="🏗️ or https://example.com/icon.png"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-colonial-navy mb-2">Features</label>
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Input
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      placeholder="Feature description"
                      required
                    />
                    <Button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="bg-red-500 text-white"
                      disabled={currentService.features.length === 1}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={addFeature}
                  className="bg-gray-200 text-gray-700 mt-2"
                >
                  + Add Feature
                </Button>
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="bg-colonial-blue text-white">
                  {currentService.id ? 'Update Service' : 'Create Service'}
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setCurrentService({
                      id: '',
                      title: '',
                      description: '',
                      icon: '',
                      features: ['']
                    });
                  }}
                  className="bg-gray-300 text-gray-700"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-2">{service.title}</h3>
              <p className="text-colonial-gray text-sm mb-4">{service.description}</p>
              <ul className="text-sm text-colonial-gray mb-4 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleEdit(service)}
                  className="flex-1 bg-colonial-blue text-white text-sm"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(service.id)}
                  className="flex-1 bg-red-500 text-white text-sm"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>

        {services.length === 0 && !isEditing && (
          <div className="text-center py-12 text-colonial-gray">
            <p className="text-xl">No services yet. Add your first service!</p>
          </div>
        )}
      </div>
    </div>
  );
}
