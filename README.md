# Warren Gazette Website

This repository contains the Warren Gazette website, the official news platform for Warren College Student Council.

## Content Management

The Warren Gazette uses Netlify CMS for browser-based content editing. No coding skills are required to add new articles or update content.

### For Content Editors

1. Navigate to `https://[your-site-url]/admin/`
2. Log in with your provided credentials
3. From the dashboard, you can:
   - Create and edit news articles
   - Update council member information
   - Edit static page content

### Article Creation Process

1. Click "New News Article" in the admin dashboard
2. Fill in the required fields:
   - **Title** - The headline of your article
   - **Publication Date** - When the article should be published
   - **Author** - Who wrote the article
   - **Summary** - A brief description for the homepage (optional)
   - **Featured Image** - Add an image if desired (optional)
   - **Tags** - Categorize your article (e.g., "legislation", "appointment")
   - **Body** - The main content of your article (supports Markdown)
3. Click "Save" to save as a draft, or "Publish" to make it live immediately
4. Preview your article before publishing

## Development

### Local Development

1. Clone this repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Visit `http://localhost:8080` in your browser

### Build for Production

```
npm run build
```

This will generate the site in the `_site` directory.

## Technology Stack

- **Static Site Generator**: [11ty/Eleventy](https://www.11ty.dev/)
- **CMS**: [Netlify CMS](https://www.netlifycms.org/)
- **Hosting**: [Netlify](https://www.netlify.com/)
