// DynamoDB Data Store for AWS Deployment
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  DeleteCommand,
  ScanCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

// Configure DynamoDB client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-1",
  // For local development, you can use environment variables
  // AWS credentials should be configured via:
  // - Environment variables: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
  // - AWS credentials file: ~/.aws/credentials
  // - IAM role (when running on AWS)
});

const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

// Table names (prefix with your app name)
const TABLE_PREFIX = process.env.DYNAMODB_TABLE_PREFIX || "colonial_";
const TABLES = {
  projects: `${TABLE_PREFIX}projects`,
  services: `${TABLE_PREFIX}services`,
  contacts: `${TABLE_PREFIX}contacts`,
  testimonials: `${TABLE_PREFIX}testimonials`,
  team: `${TABLE_PREFIX}team`,
};

// Generic CRUD operations
async function getAllItems(tableName: string): Promise<any[]> {
  try {
    const command = new ScanCommand({ TableName: tableName });
    const response = await docClient.send(command);
    return response.Items || [];
  } catch (error) {
    console.error(`Error getting items from ${tableName}:`, error);
    return [];
  }
}

async function getItemById(tableName: string, id: string): Promise<any | null> {
  try {
    const command = new GetCommand({
      TableName: tableName,
      Key: { id },
    });
    const response = await docClient.send(command);
    return response.Item || null;
  } catch (error) {
    console.error(`Error getting item ${id} from ${tableName}:`, error);
    return null;
  }
}

async function createItem(tableName: string, item: any): Promise<any> {
  const newItem = {
    ...item,
    id: item.id || Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  try {
    const command = new PutCommand({
      TableName: tableName,
      Item: newItem,
    });
    await docClient.send(command);
    return newItem;
  } catch (error) {
    console.error(`Error creating item in ${tableName}:`, error);
    throw error;
  }
}

async function updateItem(
  tableName: string,
  id: string,
  data: any
): Promise<any | null> {
  // Build update expression dynamically
  const updateExpressionParts: string[] = [];
  const expressionAttributeNames: Record<string, string> = {};
  const expressionAttributeValues: Record<string, any> = {};

  Object.keys(data).forEach((key, index) => {
    if (key !== "id") {
      const attrName = `#attr${index}`;
      const attrValue = `:val${index}`;
      updateExpressionParts.push(`${attrName} = ${attrValue}`);
      expressionAttributeNames[attrName] = key;
      expressionAttributeValues[attrValue] = data[key];
    }
  });

  // Add updatedAt timestamp
  updateExpressionParts.push("#updatedAt = :updatedAt");
  expressionAttributeNames["#updatedAt"] = "updatedAt";
  expressionAttributeValues[":updatedAt"] = new Date().toISOString();

  try {
    const command = new UpdateCommand({
      TableName: tableName,
      Key: { id },
      UpdateExpression: `SET ${updateExpressionParts.join(", ")}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW",
    });
    const response = await docClient.send(command);
    return response.Attributes || null;
  } catch (error) {
    console.error(`Error updating item ${id} in ${tableName}:`, error);
    return null;
  }
}

async function deleteItem(tableName: string, id: string): Promise<boolean> {
  try {
    const command = new DeleteCommand({
      TableName: tableName,
      Key: { id },
    });
    await docClient.send(command);
    return true;
  } catch (error) {
    console.error(`Error deleting item ${id} from ${tableName}:`, error);
    return false;
  }
}

// Testimonials exports for compatibility
export const readTestimonials = async () => {
  return await getAllItems(TABLES.testimonials);
};

export const writeTestimonials = async (data: any[]) => {
  // For bulk write, we'll need to handle each item
  for (const item of data) {
    await createItem(TABLES.testimonials, item);
  }
};

// Main data store export
export const dynamoDataStore = {
  // Projects
  getProjects: () => getAllItems(TABLES.projects),
  getProject: (id: string) => getItemById(TABLES.projects, id),
  createProject: (project: any) => createItem(TABLES.projects, project),
  updateProject: (id: string, data: any) =>
    updateItem(TABLES.projects, id, data),
  deleteProject: (id: string) => deleteItem(TABLES.projects, id),

  // Services
  getServices: () => getAllItems(TABLES.services),
  getService: (id: string) => getItemById(TABLES.services, id),
  createService: (service: any) => createItem(TABLES.services, service),
  updateService: (id: string, data: any) =>
    updateItem(TABLES.services, id, data),
  deleteService: (id: string) => deleteItem(TABLES.services, id),

  // Contacts
  getContacts: () => getAllItems(TABLES.contacts),
  getContact: (id: string) => getItemById(TABLES.contacts, id),
  createContact: (contact: any) => createItem(TABLES.contacts, contact),
  deleteContact: (id: string) => deleteItem(TABLES.contacts, id),

  // Testimonials
  getTestimonials: () => getAllItems(TABLES.testimonials),
  getTestimonial: (id: string) => getItemById(TABLES.testimonials, id),
  createTestimonial: (testimonial: any) =>
    createItem(TABLES.testimonials, testimonial),
  updateTestimonial: (id: string, data: any) =>
    updateItem(TABLES.testimonials, id, data),
  deleteTestimonial: (id: string) => deleteItem(TABLES.testimonials, id),

  // Team
  getTeam: () => getAllItems(TABLES.team),
  getTeamMember: (id: string) => getItemById(TABLES.team, id),
  createTeamMember: (member: any) => createItem(TABLES.team, member),
  updateTeamMember: (id: string, data: any) =>
    updateItem(TABLES.team, id, data),
  deleteTeamMember: (id: string) => deleteItem(TABLES.team, id),

  // Stats
  getStats: async () => {
    const [projects, services, contacts] = await Promise.all([
      getAllItems(TABLES.projects),
      getAllItems(TABLES.services),
      getAllItems(TABLES.contacts),
    ]);
    return {
      projects: projects.length,
      services: services.length,
      contactSubmissions: contacts.length,
    };
  },
};

// Export table names for setup script
export { TABLES };
