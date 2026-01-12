import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
}

export default function AdminContacts() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchContacts();
  }, [navigate]);

  const fetchContacts = async () => {
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch('/api/admin/contacts', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard" className="text-colonial-blue hover:underline">← Back to Dashboard</Link>
            <h1 className="text-xl font-bold text-colonial-navy">Contact Submissions</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {contacts.length === 0 ? (
          <div className="text-center py-12 text-colonial-gray">
            <p className="text-xl">No contact submissions yet.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact List */}
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={`bg-white rounded-xl p-4 shadow-sm cursor-pointer transition-all ${
                    selectedContact?.id === contact.id ? 'ring-2 ring-colonial-blue' : 'hover:shadow-md'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-colonial-navy">{contact.name}</h3>
                    <span className="text-xs text-colonial-gray">{formatDate(contact.createdAt)}</span>
                  </div>
                  <p className="text-sm text-colonial-gray mb-1">{contact.email}</p>
                  {contact.phone && (
                    <p className="text-sm text-colonial-gray mb-1">{contact.phone}</p>
                  )}
                  {contact.service && (
                    <span className="inline-block px-3 py-1 rounded-full bg-colonial-blue/10 text-colonial-blue text-xs font-semibold mt-2">
                      {contact.service}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="lg:sticky lg:top-4">
              {selectedContact ? (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-colonial-navy mb-4">Contact Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-colonial-gray mb-1">Name</label>
                      <p className="text-colonial-navy">{selectedContact.name}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-colonial-gray mb-1">Email</label>
                      <a href={`mailto:${selectedContact.email}`} className="text-colonial-blue hover:underline">
                        {selectedContact.email}
                      </a>
                    </div>

                    {selectedContact.phone && (
                      <div>
                        <label className="block text-sm font-semibold text-colonial-gray mb-1">Phone</label>
                        <a href={`tel:${selectedContact.phone}`} className="text-colonial-blue hover:underline">
                          {selectedContact.phone}
                        </a>
                      </div>
                    )}

                    {selectedContact.service && (
                      <div>
                        <label className="block text-sm font-semibold text-colonial-gray mb-1">Service</label>
                        <p className="text-colonial-navy capitalize">{selectedContact.service}</p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-semibold text-colonial-gray mb-1">Message</label>
                      <p className="text-colonial-navy whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-colonial-gray mb-1">Submitted</label>
                      <p className="text-colonial-navy">{formatDate(selectedContact.createdAt)}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button
                      onClick={() => window.open(`mailto:${selectedContact.email}`, '_blank')}
                      className="flex-1 bg-colonial-blue text-white"
                    >
                      Reply via Email
                    </Button>
                    {selectedContact.phone && (
                      <Button
                        onClick={() => window.open(`tel:${selectedContact.phone}`, '_blank')}
                        className="flex-1 bg-colonial-navy text-white"
                      >
                        Call
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-6 shadow-sm text-center text-colonial-gray">
                  <p>Select a contact to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
