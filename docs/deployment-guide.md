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

## Setting up Netlify CMS with Netlify Identity

### 1. Enable Netlify Identity

1. From your site's Netlify dashboard, go to "Settings"
2. Click "Identity" in the left navigation
3. Click "Enable Identity"
4. Under "Registration preferences", choose "Invite only"
5. Under "External providers", set up additional login methods if desired
   (such as Google, GitHub, etc.)

### 2. Enable Git Gateway

1. Still in the Identity settings, scroll to "Services"
2. Click "Enable Git Gateway"
3. Ensure you're logged in to GitHub to authorize the connection

### 3. Invite Users

1. Go to the "Identity" tab in your Netlify dashboard
2. Click "Invite users"
3. Enter email addresses for team members
4. They will receive an invitation to create an account

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
- Ensure that Identity and Git Gateway are properly configured
- Verify that your `config.yml` file has the correct backend settings:
  ```yaml
  backend:
    name: git-gateway
    branch: main
  ```
- If users have trouble logging in, make sure they've accepted the invitation email from Netlify Identity

Remember that changes made through the CMS will be committed directly to your GitHub repository on the configured branch.
