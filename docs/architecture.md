# Warren Gazette Website: Architecture Overview

## Overview
The Warren Gazette website is a modern, static news platform for the Warren College Student Council (WCSC) at UC San Diego. It is designed for easy content management by non-technical users, rapid publishing, and long-term sustainability. This document details the technical architecture, including the stack, build process, and deployment.

---

## 1. Static Site Generator: Eleventy (11ty)
- **Framework:** [Eleventy (11ty)](https://www.11ty.dev/)
- **Purpose:** Converts Markdown and Nunjucks templates into static HTML files.
- **Features:**
  - Flexible templating (Nunjucks, Markdown, HTML)
  - Fast build times
  - Supports custom collections (e.g., news, council members)
  - Easy to extend with custom filters and shortcodes
- **Directory Structure:**
  - `src/` — Source content and templates
  - `_site/` — Generated static site output
  - `_includes/` — Shared Nunjucks templates
  - `council/`, `news/` — Markdown content for council members and news articles

## 2. Content Management: Netlify CMS
- **Framework:** [Netlify CMS](https://www.netlifycms.org/)
- **Purpose:** Provides a browser-based admin interface for editing content (Markdown files) without coding.
- **Features:**
  - User authentication via Netlify Identity
  - Git Gateway integration for direct Git commits
  - Customizable collections (news, council members, pages)
  - Media library for image uploads
- **Configuration:**
  - `src/admin/config.yml` — Defines content types, fields, and publishing workflow
  - `/admin/` — CMS admin interface (deployed with the site)

## 3. Styling & UI
- **CSS:** Custom styles in `assets/style.css`
- **Branding:** Uses Warren College colors and logo
- **Responsive Design:** Mobile-friendly layouts for all pages
- **Dark Mode:** Toggle with system preference and local storage support
- **Components:**
  - Card-based layouts for news and council members
  - Accessible navigation and buttons

## 4. Build & Deployment
- **Build Tool:** Node.js scripts via npm (`npm start`, `npm run build`)
- **Deployment:** [Netlify](https://www.netlify.com/)
  - Automatic builds on push to main branch
  - Previews for pull requests
  - Handles static asset hosting and redirects
- **Continuous Integration:**
  - GitHub (or Git provider) triggers Netlify builds
  - Netlify Identity for CMS user authentication
  - Git Gateway for CMS to commit content changes

## 5. Content Workflow
- **Editing:**
  - Editors log in at `/admin/` to create or update content
  - Content is saved as Markdown in the repository
- **Publishing:**
  - Published content triggers a Netlify build
  - New articles and council member profiles appear instantly
- **Media:**
  - Images uploaded via CMS are stored in `assets/images/`

## 6. Extensibility & Maintenance
- **Adding Features:**
  - New content types can be added via Netlify CMS config
  - Custom Nunjucks filters and shortcodes for advanced templating
- **Maintenance:**
  - Editors can update content without code changes
  - Developers can extend templates, styles, or CMS config as needed

---

## Summary
This architecture ensures the Warren Gazette is fast, secure, and easy to update. Editors manage content through a user-friendly CMS, while the static site approach provides performance and reliability. The stack is designed for long-term sustainability and minimal maintenance overhead.
