# Project Plan: Warren Gazette Website

## 1. Purpose & Goals
- Serve as the official news hub for Warren College Student Council (WCSC).
- Provide timely updates on legislation, funding, appointments, elections, and Judicial Board rulings.
- Ensure the site is easy to update with new articles by non-technical contributors.
- Include standard pages: About, Contact, Meet the Team.

## 2. Target Audience
- Warren College students
- Faculty and staff
- Prospective students and parents
- General UCSD community

## 3. Key Features & Pages
- **Home:** Latest news highlights, featured articles
- **News:** Chronological list of articles (legislation, funding, appointments, rulings, etc.)
- **Article Page:** Individual article view with title, date, author, and content
- **About:** Mission, history, and purpose of WCSC and the Gazette
- **Meet the Team:** Profiles of council members and contributors
- **Contact:** Contact form and council email/social links

## 4. Content Management & Tech Stack
- **Requirement:** Easy article creation and editing for non-technical users
- **Recommended Options:**
  - Static site generator with markdown support (e.g., Eleventy, Hugo, Jekyll)
  - Or a simple CMS (e.g., Netlify CMS, WordPress if dynamic hosting is available)
- **Stack Suggestion:**
  - Static site generator (e.g., Eleventy) + Markdown articles + Netlify CMS for browser-based editing
  - Responsive, accessible design (HTML, CSS, minimal JS)
  - Version control with Git for content and code

## 5. Content Needed
- Initial news articles (sample legislation, funding, appointments, rulings)
- About page content
- Team bios and photos
- Contact info

## 6. Project Progress
| Task                        | Status      | Notes     |
|-----------------------------|-------------|-----------|
| Choose tech stack           | ✅ Complete | Eleventy static site generator with Netlify CMS |
| Set up project structure    | ✅ Complete | Created src/input and _site/output directories |
| Design homepage & news flow | ✅ Complete | Implemented news listing with article filtering |
| Implement article system    | ✅ Complete | Created article layout and sample content |
| Add About, Team, Contact    | ✅ Complete | All pages added with basic content |
| Style site with branding    | ✅ Complete | Added Warren College brand colors (#7d2248) |
| Test for usability          | 🔄 Ongoing  | Initial testing complete, more needed |
| Connect CMS system          | ⏳ Pending  | Netlify CMS configuration started |
| Launch                      | ⏳ Pending  | Deployment to hosting provider pending |

## 7. Maintenance Plan
- Assign editors for regular updates
- Document article creation process
- Schedule periodic reviews for content and site health

---

## 8. Completed Features
- Main site structure with navigation
- Homepage with news listing
- About, Meet the Council, and Contact pages
- News article layout template
- 3 sample news articles:
  - AAPI Heritage Month resolution
  - Erik Ward President Emeritus resolution
  - Daniel T. Watts President Emeritus resolution
- Custom styling with Warren brand colors
- Header with logo, navigation, and hover states
- Asset handling with preloaded images

## 9. Next Steps
1. Complete and connect Netlify CMS for browser-based editing
2. Deploy the site to a hosting provider
3. Create documentation for the article creation workflow
4. Add more styling improvements
5. Set up redirects and proper URL structure
6. Consider adding search functionality

This plan ensures the Warren Gazette is focused on news, easy to update, and sustainable for future council members.
