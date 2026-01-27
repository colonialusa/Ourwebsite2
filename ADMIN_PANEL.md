# Admin Panel Documentation

## Overview

The admin panel allows the website owner to manage projects, services, and contact form submissions through an easy-to-use web interface.

## Access

- **Login URL**: http://localhost:8081/admin/login
- **Admin Credentials**:
  - **User 1**: `Colonial` / `Colonial@2026`
  - **User 2**: `Pyrunai` / `Pyrunai@1234`

  <!-- gmail password - "Colonial@1234" -->

**⚠️ IMPORTANT**: These credentials are configured in `server/routes/admin.ts` and `server/routes/admin-vercel.ts`

## Features


### 1. Dashboard (`/admin/dashboard`)
- View statistics:
  - Total projects
  - Active services
  - Contact form submissions
- Quick access to all management sections

### 2. Manage Projects (`/admin/projects`)
- **View all projects** in a grid layout
- **Add new project**:
  - Title
  - Description
  - Image URL
  - Category (e.g., Residential, Commercial)
  - Location
  - Completion date
- **Edit existing projects**: Click the "Edit" button on any project
- **Delete projects**: Click the "Delete" button (confirmation required)

### 3. Manage Services (`/admin/services`)
- **View all services** with icons and descriptions
- **Add new service**:
  - Service title
  - Description
  - Icon (emoji or image URL)
  - Multiple features (bullet points)
- **Edit existing services**: Update any service details
- **Delete services**: Remove services from the website

### 4. Contact Submissions (`/admin/contacts`)
- **View all contact form submissions** sorted by newest first
- **Contact details** include:
  - Name
  - Email address
  - Phone number (if provided)
  - Service interested in
  - Project message
  - Submission timestamp
- **Quick actions**:
  - Reply via email (opens email client)
  - Call phone number (if provided)

## Data Storage

All data is stored in JSON files in the `data/` directory:
- `data/projects.json` - Projects data
- `data/services.json` - Services data
- `data/contacts.json` - Contact form submissions

These files are automatically created on first run.

## API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login (public)

### Protected Endpoints (require Bearer token)
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/projects` - Get all projects
- `POST /api/admin/projects` - Create new project
- `PUT /api/admin/projects/:id` - Update project
- `DELETE /api/admin/projects/:id` - Delete project
- `GET /api/admin/services` - Get all services
- `POST /api/admin/services` - Create new service
- `PUT /api/admin/services/:id` - Update service
- `DELETE /api/admin/services/:id` - Delete service
- `GET /api/admin/contacts` - Get all contact submissions

### Public Endpoints
- `POST /api/contact` - Submit contact form (used by website visitors)

## Security Notes

### Current Implementation (Development)
- Simple token-based authentication
- Token: `admin-token-123` (hardcoded)
- Stored in localStorage

### For Production
You should upgrade to a more secure authentication system:

1. **Use JWT tokens** instead of simple strings:
```bash
pnpm add jsonwebtoken bcrypt
pnpm add -D @types/jsonwebtoken @types/bcrypt
```

2. **Hash passwords** using bcrypt:
```typescript
import bcrypt from 'bcrypt';
const hashedPassword = await bcrypt.hash('password', 10);
```

3. **Use environment variables** for secrets:
```env
JWT_SECRET=your-secret-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=hashed-password
```

4. **Add session expiration** to tokens
5. **Implement refresh tokens** for better security
6. **Use HTTPS** in production
7. **Add rate limiting** to prevent brute force attacks

## Usage Tips

### Adding Projects
1. Login to admin panel
2. Navigate to "Manage Projects"
3. Click "+ Add New Project"
4. Fill in all fields (all are required)
5. For images, use publicly accessible URLs (e.g., from your hosting, CDN, or image services)
6. Click "Create Project"

### Adding Services
1. Navigate to "Manage Services"
2. Click "+ Add New Service"
3. Use emojis (🏗️, ⚙️, 🏛️) or image URLs for icons
4. Add multiple features by clicking "+ Add Feature"
5. Remove features using the "Remove" button
6. Click "Create Service"

### Viewing Contact Submissions
1. Navigate to "Contact Submissions"
2. Click on any submission to view full details
3. Use "Reply via Email" to respond directly
4. Use "Call" button to call if phone provided

## Troubleshooting

### Cannot login
- Verify you're using valid credentials (Colonial/Colonial@2026 or Pyrunai/Pyrunai@1234)
- Check browser console for errors
- Ensure server is running

### Data not saving
- Check that `data/` directory exists
- Ensure server has write permissions
- Check server console for error messages

### Images not displaying
- Ensure image URLs are publicly accessible
- Use direct links to images, not pages
- Test URLs in browser before adding

## Future Enhancements

Consider adding:
- Image upload functionality
- Rich text editor for descriptions
- Bulk operations (delete multiple items)
- Export data to CSV/Excel
- Email notifications for new contacts
- Admin user management (multiple admins)
- Activity logs
- Search and filter functionality
- Pagination for large datasets
