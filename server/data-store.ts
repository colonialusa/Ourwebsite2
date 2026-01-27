// Embedded data for Vercel deployment (serverless functions don't have persistent file storage)
// For write operations, you'll need to integrate a database (Vercel KV, MongoDB, etc.)

// Embedded projects data (simplified for Vercel)
const projectsData = [
  {
    "id": "1736665200001",
    "title": "Harbor View Residences",
    "description": "300-unit luxury waterfront residential development featuring modern amenities, rooftop gardens, and stunning harbor views.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    "category": "Residential",
    "location": "San Francisco, CA",
    "completionDate": "2024-06-15"
  },
  {
    "id": "1736665200002",
    "title": "Skyline Corporate Tower",
    "description": "500,000 sq ft mixed-use development with Class A office space, retail, and dining.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    "category": "Commercial",
    "location": "New York, NY",
    "completionDate": "2023-11-20"
  },
  {
    "id": "1736665200003",
    "title": "Metropolitan Transit Center",
    "description": "250,000 sq ft multimodal transportation hub connecting bus, rail, and light rail systems.",
    "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    "category": "Infrastructure",
    "location": "Chicago, IL",
    "completionDate": "2024-03-10"
  },
  {
    "id": "1736665200004",
    "title": "Riverside Medical Center",
    "description": "180,000 sq ft state-of-the-art healthcare facility with emergency department and surgical suites.",
    "image": "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    "category": "Healthcare",
    "location": "Portland, OR",
    "completionDate": "2024-08-25"
  },
  {
    "id": "1736665200005",
    "title": "Tech Innovation Campus",
    "description": "450,000 sq ft technology campus with collaborative workspaces and research labs.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    "category": "Commercial",
    "location": "Austin, TX",
    "completionDate": "2023-09-30"
  },
  {
    "id": "1736665200006",
    "title": "University Science Complex",
    "description": "120,000 sq ft academic building with modern classrooms and research laboratories.",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "category": "Education",
    "location": "Boston, MA",
    "completionDate": "2023-12-15"
  }
];

// Embedded services data (simplified for Vercel)
const servicesData = [
  {
    "id": "1736665300001",
    "title": "Survey & Feasibility",
    "description": "Professional land surveying and comprehensive feasibility studies that provide the critical foundation for successful project development.",
    "icon": "📏",
    "features": [
      "Boundary & Topographic Surveys",
      "Construction Layout & As-Built Surveys",
      "Feasibility Analysis & Site Assessment",
      "Market Research & Demand Analysis"
    ]
  },
  {
    "id": "1736665300002",
    "title": "Site Planning & Development",
    "description": "Comprehensive site planning services that transform concepts into reality for residential, commercial, and industrial developments.",
    "icon": "📐",
    "features": [
      "Topographic Surveys & Site Analysis",
      "Grading & Drainage Design",
      "Utility Infrastructure Planning",
      "Environmental Impact Assessment"
    ]
  },
  {
    "id": "1736665300003",
    "title": "Road & Infrastructure Design",
    "description": "Expert civil engineering for transportation infrastructure projects including highways, roads, and urban infrastructure.",
    "icon": "🛣️",
    "features": [
      "Highway & Roadway Design",
      "Traffic Engineering & Signal Design",
      "Intersection & Interchange Design",
      "Pavement Design & Analysis"
    ]
  },
  {
    "id": "1736665300004",
    "title": "Survey Post Processing",
    "description": "Precise post-processing of survey data and professional CAD drafting services for accurate deliverables.",
    "icon": "🗺️",
    "features": [
      "GPS/GNSS Data Processing & Adjustment",
      "Point Cloud Processing & 3D Modeling",
      "Boundary Survey Plat Preparation",
      "Topographic Map Creation"
    ]
  },
  {
    "id": "1736665300005",
    "title": "BIM Services",
    "description": "Complete Building Information Modeling solutions including 3D modeling, coordination, and implementation consulting.",
    "icon": "🏗️",
    "features": [
      "Architectural BIM Modeling",
      "Structural & MEP Systems Integration",
      "4D Construction Sequencing",
      "Clash Detection & Coordination"
    ]
  },
  {
    "id": "1736665300006",
    "title": "Onsite Services & Grading",
    "description": "Professional onsite engineering services and expert grading solutions to ensure projects are built to specification.",
    "icon": "⚒️",
    "features": [
      "Construction Staking & Layout Services",
      "Grade Checking & Elevation Verification",
      "As-Built Surveys & Documentation",
      "Site Inspection & Quality Control"
    ]
  }
];

// Embedded testimonials data (simplified for Vercel)
const testimonialsData = [
  {
    "id": "1736665400001",
    "name": "Michael Chen",
    "position": "Project Director",
    "company": "Harbor Development Corp",
    "rating": 5,
    "testimonial": "Colonial Consultants transformed our vision into reality. Their BIM expertise and attention to detail saved us significant time and cost overruns.",
    "project": "Harbor View Residences"
  },
  {
    "id": "1736665400002",
    "name": "Sarah Thompson",
    "position": "VP of Engineering",
    "company": "Metro Infrastructure Inc",
    "rating": 5,
    "testimonial": "Working with Colonial Consultants on our transportation project was outstanding. Their technical knowledge exceeded our expectations.",
    "project": "Downtown Transit Corridor"
  },
  {
    "id": "1736665400003",
    "name": "David Martinez",
    "position": "Chief Architect",
    "company": "Skyline Properties",
    "rating": 5,
    "testimonial": "The MEP coordination and clash detection services were game-changing. They identified potential issues early, saving us months of rework.",
    "project": "Skyline Corporate Tower"
  },
  {
    "id": "1736665400004",
    "name": "Jennifer Lee",
    "position": "Development Manager",
    "company": "GreenSpace Developments",
    "rating": 5,
    "testimonial": "Colonial's site planning expertise helped us maximize land utilization while meeting all regulatory requirements.",
    "project": "Riverside Business Park"
  }
];

// Embedded team data (empty for now)
const teamData = [];

// Embedded contacts data (starts empty)
const contactsData = [];

// In-memory storage (resets on each serverless function cold start)
let projects = [...projectsData];
let services = [...servicesData];
let contacts = [...contactsData];
let testimonials = [...testimonialsData];
let team = [...teamData];

export const readTestimonials = () => testimonials;
export const writeTestimonials = (data: any) => {
  testimonials = data;
};

export const dataStore = {
  // Projects
  getProjects: () => projects,
  createProject: (project: any) => {
    const newProject = { ...project, id: Date.now().toString() };
    projects.push(newProject);
    return newProject;
  },
  updateProject: (id: string, data: any) => {
    const index = projects.findIndex(p => p.id === id);
    if (index === -1) return null;
    projects[index] = { ...projects[index], ...data, id };
    return projects[index];
  },
  deleteProject: (id: string) => {
    const index = projects.findIndex(p => p.id === id);
    if (index === -1) return false;
    projects.splice(index, 1);
    return true;
  },

  // Services
  getServices: () => services,
  createService: (service: any) => {
    const newService = { ...service, id: Date.now().toString() };
    services.push(newService);
    return newService;
  },
  updateService: (id: string, data: any) => {
    const index = services.findIndex(s => s.id === id);
    if (index === -1) return null;
    services[index] = { ...services[index], ...data, id };
    return services[index];
  },
  deleteService: (id: string) => {
    const index = services.findIndex(s => s.id === id);
    if (index === -1) return false;
    services.splice(index, 1);
    return true;
  },

  // Contacts
  getContacts: () => contacts,
  createContact: (contact: any) => {
    const newContact = { ...contact, id: Date.now().toString() };
    contacts.push(newContact);
    return newContact;
  },

  // Team
  getTeam: () => team,
  createTeamMember: (member: any) => {
    const newMember = { ...member, id: Date.now().toString() };
    team.push(newMember);
    return newMember;
  },
  updateTeamMember: (id: string, data: any) => {
    const index = team.findIndex(t => t.id === id);
    if (index === -1) return null;
    team[index] = { ...team[index], ...data, id };
    return team[index];
  },
  deleteTeamMember: (id: string) => {
    const index = team.findIndex(t => t.id === id);
    if (index === -1) return false;
    team.splice(index, 1);
    return true;
  },

  // Stats
  getStats: () => ({
    projects: projects.length,
    services: services.length,
    contactSubmissions: contacts.length
  })
};