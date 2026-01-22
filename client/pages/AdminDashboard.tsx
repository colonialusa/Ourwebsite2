import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    projects: 0,
    services: 0,
    contactSubmissions: 0
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    // Fetch dashboard stats
    fetch('/api/admin/stats', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {});
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9178f14664a332d98928a8d74f4bfbf96ad1fa80?width=270" 
              alt="Logo" 
              className="h-10"
            />
            <h1 className="text-xl font-bold text-colonial-navy">Admin Dashboard</h1>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/" className="text-colonial-gray hover:text-colonial-navy">
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-colonial-blue text-3xl mb-2">📊</div>
            <h3 className="text-2xl font-bold text-colonial-navy">{stats.projects}</h3>
            <p className="text-colonial-gray">Total Projects</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-colonial-purple text-3xl mb-2">🛠️</div>
            <h3 className="text-2xl font-bold text-colonial-navy">{stats.services}</h3>
            <p className="text-colonial-gray">Active Services</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-colonial-gold text-3xl mb-2">📧</div>
            <h3 className="text-2xl font-bold text-colonial-navy">{stats.contactSubmissions}</h3>
            <p className="text-colonial-gray">Contact Submissions</p>
          </div>
        </div>

        {/* Management Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/admin/projects"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold text-colonial-navy mb-2">Manage Projects</h3>
            <p className="text-colonial-gray mb-4">Add, edit, or delete projects from your portfolio</p>
            <span className="text-colonial-blue font-semibold">Manage →</span>
          </Link>

          <Link
            to="/admin/services"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-colonial-navy mb-2">Manage Services</h3>
            <p className="text-colonial-gray mb-4">Update service offerings and descriptions</p>
            <span className="text-colonial-blue font-semibold">Manage →</span>
          </Link>

          <Link
            to="/admin/contacts"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">📬</div>
            <h3 className="text-xl font-bold text-colonial-navy mb-2">Contact Submissions</h3>
            <p className="text-colonial-gray mb-4">View and manage contact form submissions</p>
            <span className="text-colonial-blue font-semibold">View →</span>
          </Link>

          <Link
            to="/admin/testimonials"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-colonial-navy mb-2">Manage Testimonials</h3>
            <p className="text-colonial-gray mb-4">Add, edit, or delete client testimonials</p>
            <span className="text-colonial-blue font-semibold">Manage →</span>
          </Link>

          <Link
            to="/admin/about"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">ℹ️</div>
            <h3 className="text-xl font-bold text-colonial-navy mb-2">About Page</h3>
            <p className="text-colonial-gray mb-4">Edit company information and story</p>
            <span className="text-colonial-blue font-semibold">Edit →</span>
          </Link>

          <Link
            to="/admin/settings"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-colonial-navy mb-2">Site Settings</h3>
            <p className="text-colonial-gray mb-4">Configure general website settings</p>
            <span className="text-colonial-blue font-semibold">Configure →</span>
          </Link>

          <Link
            to="/admin/media"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">🖼️</div>
            <h3 className="text-xl font-bold text-colonial-navy mb-2">Media Library</h3>
            <p className="text-colonial-gray mb-4">Manage images and videos</p>
            <span className="text-colonial-blue font-semibold">Browse →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
