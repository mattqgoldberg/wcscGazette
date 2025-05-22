# Warren Gazette Deployment Guide

This guide explains how to deploy the Warren Gazette website to Netlify and set up the CMS.

## Deploying to Netlify

### Option 1: Deploy via GitHub

1. Ensure your repository is pushed to GitHub
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Choose GitHub and authorize Netlify
5. Select the repository for the Warren Gazette
6. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `_site`
7. Click "Deploy site"

### Option 2: Manual Deploy

1. Build the site locally: `npm run build`
2. Log in to [Netlify](https://app.netlify.com/)
3. Drag and drop the `_site` folder to the Netlify interface

## Setting up Netlify CMS with Auth0

### 1. Create an Auth0 Account and Application

1. Sign up for an account at [Auth0](https://auth0.com/)
2. Go to the Auth0 Dashboard and create a new application
   - Name: "Warren Gazette CMS"
   - Application Type: "Single Page Web Application"
3. In your Auth0 application settings:
   - Add the following to "Allowed Callback URLs": `https://your-site-url.netlify.app/admin/`
   - Add the following to "Allowed Logout URLs": `https://your-site-url.netlify.app/admin/`
   - Add the following to "Allowed Web Origins": `https://your-site-url.netlify.app`
4. Save the changes

### 2. Enable Git Gateway

1. From your site's Netlify dashboard, go to "Settings"
2. Scroll down to "Services" and click "Enable Git Gateway"
3. Ensure you're logged in to GitHub to authorize the connection

### 3. Configure the CMS to use Auth0

1. Update your `src/admin/config.yml` file to use Auth0 authentication:
   ```yaml
   backend:
     name: auth0
     domain: your-auth0-domain.auth0.com # Replace with your Auth0 domain
     clientId: your-client-id # Replace with your Auth0 client ID
     audience: https://api.netlify.com/
     scope: openid profile email
   ```
2. Add the following to your `src/admin/index.html` file before the closing `</head>` tag:
   ```html
   <script src="https://cdn.auth0.com/js/auth0-spa-js/1.13/auth0-spa-js.production.js"></script>
   ```

## Accessing the CMS

1. After deployment, the CMS will be available at: `https://your-site-url.netlify.app/admin/`
2. Users will need to log in using Auth0 credentials
3. For first-time users, they will need to sign up through Auth0
4. Consult the Content Editor Guide for instructions on how to use the CMS

## Domain Setup (Optional)

1. In your Netlify site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to set up your domain

## Troubleshooting

- If you encounter issues with the CMS, check the browser console for errors
- Ensure that Auth0 and Git Gateway are properly configured
- Verify that your `config.yml` file has the correct backend settings for Auth0:
  ```yaml
  backend:
    name: auth0
    domain: your-auth0-domain.auth0.com
    clientId: your-client-id
    audience: https://api.netlify.com/
    scope: openid profile email
  ```
- Make sure your Auth0 application has the correct allowed URLs and origins set

Remember that changes made through the CMS will be committed directly to your GitHub repository on the configured branch.
