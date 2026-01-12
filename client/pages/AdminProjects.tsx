import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  completionDate: string;
}

export default function AdminProjects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project>({
    id: '',
    title: '',
    description: '',
    image: '',
    category: '',
    location: '',
    completionDate: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchProjects();
  }, [navigate]);

  const fetchProjects = async () => {
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch('/api/admin/projects', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    const method = currentProject.id ? 'PUT' : 'POST';
    const url = currentProject.id 
      ? `/api/admin/projects/${currentProject.id}`
      : '/api/admin/projects';

    try {
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(currentProject)
      });

      fetchProjects();
      setIsEditing(false);
      setCurrentProject({
        id: '',
        title: '',
        description: '',
        image: '',
        category: '',
        location: '',
        completionDate: ''
      });
    } catch (error) {
      console.error('Failed to save project:', error);
    }
  };

  const handleEdit = (project: Project) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    const token = localStorage.getItem('adminToken');
    try {
      await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchProjects();
    } catch (error) {
      console.error('Failed to delete project:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard" className="text-colonial-blue hover:underline">← Back to Dashboard</Link>
            <h1 className="text-xl font-bold text-colonial-navy">Manage Projects</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            className="mb-6 bg-colonial-blue text-white"
          >
            + Add New Project
          </Button>
        )}

        {isEditing && (
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-colonial-navy mb-6">
              {currentProject.id ? 'Edit Project' : 'Add New Project'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-colonial-navy mb-2">Title</label>
                <Input
                  value={currentProject.title}
                  onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-colonial-navy mb-2">Description</label>
                <Textarea
                  value={currentProject.description}
                  onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                  required
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-colonial-navy mb-2">Image URL</label>
                <Input
                  value={currentProject.image}
                  onChange={(e) => setCurrentProject({ ...currentProject, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-colonial-navy mb-2">Category</label>
                  <Input
                    value={currentProject.category}
                    onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value })}
                    placeholder="e.g., Residential, Commercial"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-colonial-navy mb-2">Location</label>
                  <Input
                    value={currentProject.location}
                    onChange={(e) => setCurrentProject({ ...currentProject, location: e.target.value })}
                    placeholder="e.g., New York, NY"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-colonial-navy mb-2">Completion Date</label>
                <Input
                  type="date"
                  value={currentProject.completionDate}
                  onChange={(e) => setCurrentProject({ ...currentProject, completionDate: e.target.value })}
                  required
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="bg-colonial-blue text-white">
                  {currentProject.id ? 'Update Project' : 'Create Project'}
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setCurrentProject({
                      id: '',
                      title: '',
                      description: '',
                      image: '',
                      category: '',
                      location: '',
                      completionDate: ''
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
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-colonial-navy mb-2">{project.title}</h3>
                <p className="text-colonial-gray text-sm mb-2">{project.description}</p>
                <div className="text-sm text-colonial-gray mb-4">
                  <p><strong>Category:</strong> {project.category}</p>
                  <p><strong>Location:</strong> {project.location}</p>
                  <p><strong>Completed:</strong> {project.completionDate}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-colonial-blue text-white text-sm"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 bg-red-500 text-white text-sm"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && !isEditing && (
          <div className="text-center py-12 text-colonial-gray">
            <p className="text-xl">No projects yet. Add your first project!</p>
          </div>
        )}
      </div>
    </div>
  );
}
