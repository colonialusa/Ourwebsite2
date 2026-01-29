# AWS DynamoDB Setup Guide

This guide explains how to set up DynamoDB for the Colonial Consultants website on AWS.

## Prerequisites

1. **AWS Account** - Sign up at https://aws.amazon.com
2. **AWS CLI** - Install from https://aws.amazon.com/cli/
3. **Node.js 18+** - Required for running the setup script

## Step 1: Create an IAM User

1. Go to **AWS Console** → **IAM** → **Users**
2. Click **Create user**
3. Enter username: `colonial-website-user`
4. Click **Next**
5. Select **Attach policies directly**
6. Search and attach: `AmazonDynamoDBFullAccess`
7. Click **Create user**
8. Go to the user → **Security credentials** → **Create access key**
9. Choose **Application running outside AWS**
10. **Save the Access Key ID and Secret Access Key** (you won't see them again!)

## Step 2: Configure AWS Credentials

### Option A: Environment Variables (Recommended for Production)

Create or update your `.env` file:

```env
# AWS Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here

# DynamoDB Configuration
DYNAMODB_TABLE_PREFIX=colonial_
USE_DYNAMODB=true
```

### Option B: AWS CLI Configuration (Local Development)

Run:
```bash
aws configure
```

Enter:
- AWS Access Key ID: `your_access_key`
- AWS Secret Access Key: `your_secret_key`
- Default region: `us-east-1`
- Default output format: `json`

## Step 3: Create DynamoDB Tables

Run the setup script to create tables and seed initial data:

```bash
# Install dependencies first
pnpm install

# Run the setup script
npx ts-node scripts/setup-dynamodb.ts
```

This will create 5 tables:
- `colonial_projects`
- `colonial_services`
- `colonial_contacts`
- `colonial_testimonials`
- `colonial_team`

## Step 4: Verify Tables in AWS Console

1. Go to **AWS Console** → **DynamoDB** → **Tables**
2. You should see all 5 tables created
3. Click on each table to verify data was seeded

## Step 5: Run Locally with DynamoDB

1. Make sure `.env` has `USE_DYNAMODB=true`
2. Start the development server:

```bash
pnpm dev
```

3. The console should show: `📦 Using DynamoDB for data storage`

## AWS Deployment Options

### Option 1: AWS Lambda + API Gateway (Serverless)

1. Build the project:
```bash
pnpm build
```

2. Create a Lambda function with the built server code
3. Configure API Gateway to proxy requests to Lambda
4. Set environment variables in Lambda configuration

### Option 2: AWS EC2

1. Launch an EC2 instance (t3.micro for free tier)
2. Install Node.js 18+
3. Clone and deploy the project
4. Use PM2 or systemd to run the server
5. Configure Nginx as reverse proxy

### Option 3: AWS Elastic Beanstalk

1. Create an Elastic Beanstalk Node.js environment
2. Deploy using EB CLI or console
3. Set environment variables in EB configuration

## Environment Variables for AWS

| Variable | Description | Example |
|----------|-------------|---------|
| `AWS_REGION` | AWS region | `us-east-1` |
| `AWS_ACCESS_KEY_ID` | IAM access key | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | IAM secret key | `wJal...` |
| `DYNAMODB_TABLE_PREFIX` | Table name prefix | `colonial_` |
| `USE_DYNAMODB` | Enable DynamoDB | `true` |

## DynamoDB Free Tier

DynamoDB offers **always-free** tier:
- ✅ 25 GB storage
- ✅ 25 read capacity units
- ✅ 25 write capacity units
- ✅ 2.5M stream read requests/month

Your Colonial Consultants website will likely **never exceed** these limits!

## Cost Estimation

For a small business website like Colonial Consultants:
- **Storage**: ~10 KB (well under 25 GB free)
- **Requests**: ~1000/month (well under free tier)
- **Estimated cost**: **$0/month** 🎉

## Troubleshooting

### "Access Denied" Error
- Check IAM user has `AmazonDynamoDBFullAccess` policy
- Verify credentials in environment variables
- Ensure region matches table region

### "Table Not Found" Error
- Run the setup script: `npx ts-node scripts/setup-dynamodb.ts`
- Verify table prefix matches in `.env`

### "Network Error"
- Check internet connectivity
- Verify AWS region is correct
- Check if running behind firewall/proxy

## Data Migration

To migrate existing JSON data to DynamoDB:

1. Export current data:
```bash
# Data is in data/*.json files
```

2. Modify the setup script to import your data
3. Run: `npx ts-node scripts/setup-dynamodb.ts`

## Backup Strategy

DynamoDB offers automatic backups:

1. Go to **DynamoDB** → **Tables** → Select table
2. **Backups** tab → **Create backup**
3. Or enable **Point-in-time recovery** for continuous backups

## Security Best Practices

1. **Never commit credentials** to version control
2. Use **IAM roles** instead of access keys when running on AWS
3. Enable **encryption at rest** (default in DynamoDB)
4. Use **VPC endpoints** for private access
5. Enable **CloudTrail** for audit logging

---

## Quick Reference

### Local Development
```bash
# Without DynamoDB (in-memory)
USE_DYNAMODB=false pnpm dev

# With DynamoDB
USE_DYNAMODB=true pnpm dev
```

### Create Tables
```bash
npx ts-node scripts/setup-dynamodb.ts
```

### View Tables
```bash
aws dynamodb list-tables
```

### Delete Tables (careful!)
```bash
aws dynamodb delete-table --table-name colonial_projects
aws dynamodb delete-table --table-name colonial_services
aws dynamodb delete-table --table-name colonial_contacts
aws dynamodb delete-table --table-name colonial_testimonials
aws dynamodb delete-table --table-name colonial_team
```
