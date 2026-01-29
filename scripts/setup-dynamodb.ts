// DynamoDB Table Setup Script
// Run this script once to create the required DynamoDB tables
// Usage: npx ts-node scripts/setup-dynamodb.ts

import {
  DynamoDBClient,
  CreateTableCommand,
  DescribeTableCommand,
  ResourceNotFoundException,
} from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  BatchWriteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-1",
});

const docClient = DynamoDBDocumentClient.from(client);

const TABLE_PREFIX = process.env.DYNAMODB_TABLE_PREFIX || "colonial_";

const TABLES = {
  projects: `${TABLE_PREFIX}projects`,
  services: `${TABLE_PREFIX}services`,
  contacts: `${TABLE_PREFIX}contacts`,
  testimonials: `${TABLE_PREFIX}testimonials`,
  team: `${TABLE_PREFIX}team`,
};

// Check if table exists
async function tableExists(tableName: string): Promise<boolean> {
  try {
    await client.send(new DescribeTableCommand({ TableName: tableName }));
    return true;
  } catch (error) {
    if (error instanceof ResourceNotFoundException) {
      return false;
    }
    throw error;
  }
}

// Create a table
async function createTable(tableName: string): Promise<void> {
  const exists = await tableExists(tableName);

  if (exists) {
    console.log(`✓ Table ${tableName} already exists`);
    return;
  }

  console.log(`Creating table ${tableName}...`);

  const command = new CreateTableCommand({
    TableName: tableName,
    KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
    BillingMode: "PAY_PER_REQUEST", // Free tier friendly
  });

  await client.send(command);
  console.log(`✓ Table ${tableName} created successfully`);

  // Wait for table to be active
  console.log(`  Waiting for table ${tableName} to be active...`);
  let isActive = false;
  while (!isActive) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const describe = await client.send(
      new DescribeTableCommand({ TableName: tableName })
    );
    isActive = describe.Table?.TableStatus === "ACTIVE";
  }
  console.log(`  Table ${tableName} is now active`);
}

// Seed initial data
async function seedData(): Promise<void> {
  console.log("\nSeeding initial data...");

  // Sample projects
  const projects = [
    {
      id: "1",
      title: "Harbor View Residences",
      description:
        "300-unit luxury waterfront residential development featuring modern amenities, rooftop gardens, and stunning harbor views.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      category: "Residential",
      location: "Williamsburg, VA",
      completionDate: "2024-06-15",
    },
    {
      id: "2",
      title: "Skyline Corporate Tower",
      description:
        "500,000 sq ft mixed-use development with Class A office space, retail, and dining.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      category: "Commercial",
      location: "Richmond, VA",
      completionDate: "2023-11-20",
    },
    {
      id: "3",
      title: "Metropolitan Transit Center",
      description:
        "250,000 sq ft multimodal transportation hub connecting bus, rail, and light rail systems.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      category: "Infrastructure",
      location: "Norfolk, VA",
      completionDate: "2024-03-10",
    },
  ];

  // Sample services
  const services = [
    {
      id: "1",
      title: "Survey & Feasibility",
      description:
        "Professional land surveying and comprehensive feasibility studies that provide the critical foundation for successful project development.",
      icon: "📏",
      features: [
        "Boundary & Topographic Surveys",
        "Construction Layout & As-Built Surveys",
        "Feasibility Analysis & Site Assessment",
        "Market Research & Demand Analysis",
      ],
    },
    {
      id: "2",
      title: "Site Planning & Development",
      description:
        "Comprehensive site planning services that transform concepts into reality for residential, commercial, and industrial developments.",
      icon: "📐",
      features: [
        "Topographic Surveys & Site Analysis",
        "Grading & Drainage Design",
        "Utility Infrastructure Planning",
        "Environmental Impact Assessment",
      ],
    },
    {
      id: "3",
      title: "Road & Infrastructure Design",
      description:
        "Expert civil engineering for transportation infrastructure projects including highways, roads, and urban infrastructure.",
      icon: "🛣️",
      features: [
        "Highway & Roadway Design",
        "Traffic Engineering & Signal Design",
        "Intersection & Interchange Design",
        "Pavement Design & Analysis",
      ],
    },
    {
      id: "4",
      title: "Survey Post Processing",
      description:
        "Precise post-processing of survey data and professional CAD drafting services for accurate deliverables.",
      icon: "🗺️",
      features: [
        "GPS/GNSS Data Processing & Adjustment",
        "Point Cloud Processing & 3D Modeling",
        "Boundary Survey Plat Preparation",
        "Topographic Map Creation",
      ],
    },
    {
      id: "5",
      title: "BIM Services",
      description:
        "Complete Building Information Modeling solutions including 3D modeling, coordination, and implementation consulting.",
      icon: "🏗️",
      features: [
        "Architectural BIM Modeling",
        "Structural & MEP Systems Integration",
        "4D Construction Sequencing",
        "Clash Detection & Coordination",
      ],
    },
    {
      id: "6",
      title: "Onsite Services & Grading",
      description:
        "Professional onsite engineering services and expert grading solutions to ensure projects are built to specification.",
      icon: "⚒️",
      features: [
        "Construction Staking & Layout Services",
        "Grade Checking & Elevation Verification",
        "As-Built Surveys & Documentation",
        "Site Inspection & Quality Control",
      ],
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: "1",
      name: "Michael Chen",
      position: "Project Director",
      company: "Harbor Development Corp",
      rating: 5,
      testimonial:
        "Colonial Consultants transformed our vision into reality. Their BIM expertise and attention to detail saved us significant time and cost overruns.",
      project: "Harbor View Residences",
    },
    {
      id: "2",
      name: "Sarah Thompson",
      position: "VP of Engineering",
      company: "Metro Infrastructure Inc",
      rating: 5,
      testimonial:
        "Working with Colonial Consultants on our transportation project was outstanding. Their technical knowledge exceeded our expectations.",
      project: "Downtown Transit Corridor",
    },
  ];

  // Insert projects
  for (const project of projects) {
    await docClient.send(
      new PutCommand({
        TableName: TABLES.projects,
        Item: { ...project, createdAt: new Date().toISOString() },
      })
    );
  }
  console.log(`✓ Seeded ${projects.length} projects`);

  // Insert services
  for (const service of services) {
    await docClient.send(
      new PutCommand({
        TableName: TABLES.services,
        Item: { ...service, createdAt: new Date().toISOString() },
      })
    );
  }
  console.log(`✓ Seeded ${services.length} services`);

  // Insert testimonials
  for (const testimonial of testimonials) {
    await docClient.send(
      new PutCommand({
        TableName: TABLES.testimonials,
        Item: { ...testimonial, createdAt: new Date().toISOString() },
      })
    );
  }
  console.log(`✓ Seeded ${testimonials.length} testimonials`);
}

// Main setup function
async function setup(): Promise<void> {
  console.log("🚀 Colonial Consultants - DynamoDB Setup\n");
  console.log("AWS Region:", process.env.AWS_REGION || "us-east-1");
  console.log("Table Prefix:", TABLE_PREFIX);
  console.log("");

  try {
    // Create all tables
    console.log("Creating DynamoDB tables...\n");

    for (const [name, tableName] of Object.entries(TABLES)) {
      await createTable(tableName);
    }

    // Seed initial data
    await seedData();

    console.log("\n✅ DynamoDB setup complete!");
    console.log("\nTables created:");
    for (const [name, tableName] of Object.entries(TABLES)) {
      console.log(`  - ${tableName}`);
    }

    console.log("\n📝 Next steps:");
    console.log("1. Set environment variables in your .env file:");
    console.log("   AWS_REGION=us-east-1");
    console.log("   AWS_ACCESS_KEY_ID=your_access_key");
    console.log("   AWS_SECRET_ACCESS_KEY=your_secret_key");
    console.log("   DYNAMODB_TABLE_PREFIX=colonial_");
    console.log("   USE_DYNAMODB=true");
    console.log("");
    console.log("2. Update server/index.ts to use DynamoDB routes");
    console.log("3. Deploy to AWS");
  } catch (error) {
    console.error("\n❌ Setup failed:", error);
    process.exit(1);
  }
}

// Run setup
setup();
