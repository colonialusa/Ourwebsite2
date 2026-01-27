// Embedded data for Vercel deployment (serverless functions don't have persistent file storage)
// For write operations, you'll need to integrate a database (Vercel KV, MongoDB, etc.)

// Embedded projects data
const projectsData = [
  {
    "id": "1736665200001",
    "title": "Harbor View Residences",
    "description": "300-unit luxury waterfront residential development featuring modern amenities, rooftop gardens, and stunning harbor views. Includes underground parking, fitness center, and community spaces.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    "category": "Residential",
    "location": "San Francisco, CA",
    "completionDate": "2024-06-15",
    "projectSize": "300 units, 450,000 sq ft",
    "client": "Harbor Development Group",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "caption": "Stunning waterfront exterior view"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        "caption": "Modern lobby and amenity spaces"
      }
    ],
    "caseStudy": {
      "challenge": "The project required integrating luxury residential living with strict waterfront development regulations while maintaining environmental sustainability and maximizing harbor views for residents.",
      "solution": "Our team designed a terraced structure that stepped back from the waterfront, providing unobstructed views while meeting setback requirements. We incorporated green building practices including rainwater harvesting, solar panels, and native landscaping.",
      "results": [
        "100% occupancy within 6 months of completion",
        "LEED Gold certification achieved",
        "20% reduction in energy consumption vs. comparable developments",
        "Featured in Architectural Digest for sustainable luxury design"
      ],
      "keyFeatures": [
        "Rooftop infinity pool with panoramic harbor views",
        "Underground parking with EV charging stations",
        "24/7 concierge and security services",
        "State-of-the-art fitness center and spa",
        "Private resident marina access",
        "Smart home automation in all units"
      ],
      "timeline": [
        {
          "phase": "Design & Permitting",
          "duration": "8 months",
          "description": "Comprehensive design development, environmental reviews, and regulatory approvals"
        },
        {
          "phase": "Foundation & Structure",
          "duration": "10 months",
          "description": "Waterfront foundation systems and structural steel erection"
        },
        {
          "phase": "MEP & Interior Finishes",
          "duration": "12 months",
          "description": "Mechanical, electrical, plumbing systems and luxury interior finishes"
        },
        {
          "phase": "Landscaping & Amenities",
          "duration": "4 months",
          "description": "Rooftop gardens, amenity spaces, and waterfront promenade completion"
        }
      ],
      "testimonial": {
        "quote": "Colonial Consultants transformed our vision into reality. Their expertise in waterfront development and sustainable design created a landmark property that exceeds all expectations.",
        "author": "James Morrison",
        "position": "CEO, Harbor Development Group"
      }
    }
  },
  {
    "id": "1736665200002",
    "title": "Skyline Corporate Tower",
    "description": "500,000 sq ft mixed-use development with Class A office space, retail, and dining. Features energy-efficient design, smart building technology, and LEED Platinum certification.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    "category": "Commercial",
    "location": "New York, NY",
    "completionDate": "2023-11-20"
  },
  {
    "id": "1736665200003",
    "title": "Metropolitan Transit Center",
    "description": "250,000 sq ft multimodal transportation hub connecting bus, rail, and light rail systems. Includes retail spaces, public plaza, and sustainable design features.",
    "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    "category": "Infrastructure",
    "location": "Chicago, IL",
    "completionDate": "2024-03-10"
  },
  {
    "id": "1736665200004",
    "title": "Riverside Medical Center",
    "description": "180,000 sq ft state-of-the-art healthcare facility with emergency department, surgical suites, and outpatient services. Advanced MEP systems and patient-centered design.",
    "image": "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    "category": "Healthcare",
    "location": "Portland, OR",
    "completionDate": "2024-08-25"
  },
  {
    "id": "1736665200005",
    "title": "Tech Innovation Campus",
    "description": "450,000 sq ft technology campus with collaborative workspaces, research labs, and innovation center. Sustainable design with solar panels and green building practices.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    "category": "Commercial",
    "location": "Austin, TX",
    "completionDate": "2023-09-30"
  },
  {
    "id": "1736665200006",
    "title": "University Science Complex",
    "description": "120,000 sq ft academic building with modern classrooms, research laboratories, and student collaboration areas. Incorporates sustainable materials and advanced HVAC systems.",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "category": "Education",
    "location": "Boston, MA",
    "completionDate": "2023-12-15"
  }
];

// Embedded services data
const servicesData = [
  {
    "id": "1736665300001",
    "title": "Survey & Feasibility",
    "description": "Professional land surveying and comprehensive feasibility studies that provide the critical foundation for successful project development. Our expert surveyors and analysts deliver precise data and actionable insights to guide informed decision-making.",
    "icon": "📏",
    "features": [
      "Boundary & Topographic Surveys",
      "Construction Layout & As-Built Surveys",
      "Feasibility Analysis & Site Assessment",
      "Market Research & Demand Analysis",
      "Environmental & Geotechnical Studies",
      "Regulatory Compliance Review",
      "Cost-Benefit Analysis",
      "Risk Assessment & Mitigation Planning"
    ],
    "detailedInfo": {
      "overview": "Start your project on solid ground with our comprehensive survey and feasibility services. We combine cutting-edge surveying technology with thorough analytical methodologies to provide the data and insights you need to make confident decisions.",
      "surveyServices": [
        "GPS/GNSS Control Surveys",
        "3D Laser Scanning & Point Cloud Processing",
        "Aerial Photography & Drone Surveys",
        "Utility Location & Mapping",
        "Property Line Determination"
      ],
      "feasibilityServices": [
        "Site Suitability Analysis",
        "Zoning & Land Use Evaluation",
        "Infrastructure Capacity Assessment",
        "Financial Viability Studies",
        "Alternative Site Comparison"
      ]
    }
  },
  {
    "id": "1736665300002",
    "title": "Site Planning & Development",
    "description": "Comprehensive site planning services that transform concepts into reality. Our expert team delivers innovative solutions for residential, commercial, and industrial developments, ensuring optimal land use and sustainable design practices.",
    "icon": "📐",
    "features": [
      "Topographic Surveys & Site Analysis",
      "Grading & Drainage Design",
      "Utility Infrastructure Planning",
      "Environmental Impact Assessment",
      "Zoning Compliance & Permitting Support",
      "Master Planning for Large Developments",
      "Cost Estimation & Budget Planning",
      "Construction Documentation"
    ],
    "detailedInfo": {
      "overview": "Our site planning services encompass the complete development process from initial concept to final construction. We analyze topography, environmental constraints, and regulatory requirements to create efficient, sustainable, and cost-effective site designs.",
      "process": [
        "Initial Site Assessment & Feasibility Study",
        "Conceptual Design Development",
        "Detailed Engineering & Design",
        "Regulatory Approval & Permitting",
        "Construction Support & Supervision"
      ],
      "benefits": [
        "Reduced development costs through optimized design",
        "Faster permit approval with compliant plans",
        "Sustainable solutions that minimize environmental impact",
        "Enhanced property value through thoughtful planning"
      ]
    }
  },
  {
    "id": "1736665300003",
    "title": "Road & Infrastructure Design",
    "description": "Expert civil engineering for transportation infrastructure projects. We design safe, efficient, and sustainable roadways, highways, and urban infrastructure that serve communities for generations while minimizing environmental impact.",
    "icon": "🛣️",
    "features": [
      "Highway & Roadway Design",
      "Traffic Engineering & Signal Design",
      "Intersection & Interchange Design",
      "Pavement Design & Analysis",
      "Drainage Systems & Stormwater Management",
      "Bridge & Culvert Design",
      "Pedestrian & Bicycle Infrastructure",
      "ADA Compliance & Accessibility Planning"
    ],
    "detailedInfo": {
      "overview": "From local streets to major highways, our infrastructure team designs transportation solutions that enhance mobility, safety, and quality of life. We combine technical excellence with innovative approaches to address complex challenges.",
      "capabilities": [
        "Corridor studies and alignment design",
        "Traffic impact analysis and mitigation",
        "Complete streets and multimodal planning",
        "Intelligent Transportation Systems (ITS)",
        "Construction phasing and maintenance of traffic plans"
      ],
      "standards": [
        "AASHTO Design Guidelines",
        "State DOT Standards and Specifications",
        "Manual on Uniform Traffic Control Devices (MUTCD)",
        "ADA and accessibility requirements"
      ]
    }
  },
  {
    "id": "1736665300004",
    "title": "Survey Post Processing",
    "description": "Precise post-processing of survey data and professional CAD drafting services that transform raw field data into accurate, detailed deliverables. Our experienced technicians ensure quality control and compliance with industry standards.",
    "icon": "🗺️",
    "features": [
      "GPS/GNSS Data Processing & Adjustment",
      "Point Cloud Processing & 3D Modeling",
      "Boundary Survey Plat Preparation",
      "Topographic Map Creation",
      "ALTA/NSPS Land Title Survey Drafting",
      "Construction Staking Plans",
      "As-Built Drawing Preparation",
      "CAD Standards Development & QC"
    ],
    "detailedInfo": {
      "overview": "Turn your survey data into professional deliverables with our comprehensive post-processing and drafting services. We utilize the latest software and techniques to ensure accuracy, clarity, and compliance with client specifications and industry standards.",
      "capabilities": [
        "Multi-station GPS network adjustments",
        "LiDAR data classification and feature extraction",
        "Contour generation and terrain modeling",
        "Cross-section and profile development",
        "Digital Terrain Model (DTM) creation"
      ],
      "software": [
        "AutoCAD Civil 3D",
        "Trimble Business Center",
        "Leica Infinity",
        "Carlson Survey",
        "MicroStation"
      ]
    }
  },
  {
    "id": "1736665300005",
    "title": "BIM Services",
    "description": "Complete Building Information Modeling (BIM) solutions including 3D modeling, coordination, and implementation consulting. Our BIM experts deliver intelligent models and strategic guidance to revolutionize your project delivery and maximize technology ROI.",
    "icon": "🏗️",
    "features": [
      "Architectural BIM Modeling (Revit, ArchiCAD)",
      "Structural & MEP Systems Integration",
      "4D Construction Sequencing & 5D Cost Estimation",
      "Clash Detection & Coordination",
      "BIM Strategy & Implementation Planning",
      "BIM Execution Plan (BEP) Development",
      "Staff Training & Capacity Building",
      "Quality Assurance & Model Auditing"
    ],
    "detailedInfo": {
      "overview": "Leverage the full power of BIM with our comprehensive services that span from detailed 3D modeling to strategic implementation consulting. Whether you need project-specific BIM deliverables or organizational transformation, we provide the expertise to achieve measurable results.",
      "modeling": [
        "LOD 100-500 BIM models for all disciplines",
        "Intelligent 3D models with embedded data",
        "Navisworks coordination and clash detection",
        "Virtual Reality (VR) & Augmented Reality (AR)",
        "As-Built BIM documentation"
      ],
      "consulting": [
        "BIM Readiness Assessment",
        "Technology stack recommendations",
        "Custom BIM standards & protocols",
        "Software training (Revit, Navisworks, BIM 360)",
        "Workflow optimization & automation",
        "Change management & ongoing support"
      ],
      "benefits": [
        "Up to 40% reduction in coordination issues",
        "Faster design iterations and approvals",
        "Accurate quantity takeoffs and cost control",
        "Enhanced stakeholder communication",
        "Measurable improvements in productivity and profitability"
      ]
    }
  },
  {
    "id": "1736665300006",
    "title": "Onsite Services & Grading",
    "description": "Professional onsite engineering services and expert grading solutions that ensure your project is built to specification. Our field teams provide construction staking, inspection, and quality control to keep your project on track and on budget.",
    "icon": "⚒️",
    "features": [
      "Construction Staking & Layout Services",
      "Grade Checking & Elevation Verification",
      "As-Built Surveys & Documentation",
      "Site Inspection & Quality Control",
      "Grading Plan Development & Review",
      "Earthwork Quantity Calculations",
      "Erosion Control Plan Implementation",
      "Final Site Certification"
    ],
    "detailedInfo": {
      "overview": "Bring precision to your construction site with our comprehensive onsite services and grading expertise. From initial layout to final certification, our experienced field crews ensure accurate construction and compliance with design specifications.",
      "stakingServices": [
        "Building corner and offset staking",
        "Foundation and footing layout",
        "Utility line staking",
        "Roadway centerline and offset stakes",
        "Site amenity location verification"
      ],
      "gradingServices": [
        "Mass grading and rough grading",
        "Fine grading for pavements and structures",
        "Slope stability monitoring",
        "Cut/fill volume calculations",
        "Drainage verification and adjustment",
        "Final grade certification"
      ],
      "qualityControl": [
        "Daily grade checking and reporting",
        "Elevation conformance verification",
        "Drainage flow testing",
        "Compaction testing coordination",
        "Photo documentation"
      ]
    }
  }
];

// Embedded testimonials data
const testimonialsData = [
  {
    "id": "1736665400001",
    "name": "Michael Chen",
    "position": "Project Director",
    "company": "Harbor Development Corp",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Sunny_Leone_at_Ginna_press_meet_%281%29_%28cropped%29.jpg/960px-Sunny_Leone_at_Ginna_press_meet_%281%29_%28cropped%29.jpg",
    "rating": 5,
    "testimonial": "Colonial Consultants transformed our vision into reality. Their BIM expertise and attention to detail saved us significant time and cost overruns. The team was professional, responsive, and delivered exceptional results.",
    "project": "Harbor View Residences"
  },
  {
    "id": "1736665400002",
    "name": "Sarah Thompson",
    "position": "VP of Engineering",
    "company": "Metro Infrastructure Inc",
    "image": "",
    "rating": 5,
    "testimonial": "Working with Colonial Consultants on our transportation project was outstanding. Their technical knowledge and innovative approach to road design exceeded our expectations. Highly recommend their services.",
    "project": "Downtown Transit Corridor"
  },
  {
    "id": "1736665400003",
    "name": "David Martinez",
    "position": "Chief Architect",
    "company": "Skyline Properties",
    "image": "",
    "rating": 5,
    "testimonial": "The MEP coordination and clash detection services provided by Colonial Consultants were game-changing for our project. They identified potential issues early, saving us months of rework. True professionals.",
    "project": "Skyline Corporate Tower"
  },
  {
    "id": "1736665400004",
    "name": "Jennifer Lee",
    "position": "Development Manager",
    "company": "GreenSpace Developments",
    "image": "",
    "rating": 5,
    "testimonial": "Colonial's site planning expertise helped us maximize land utilization while meeting all regulatory requirements. Their team was collaborative, detail-oriented, and delivered ahead of schedule.",
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
