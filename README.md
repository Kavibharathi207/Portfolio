# Kavibharathi G — Portfolio

Personal portfolio website for Kavibharathi G, B.Tech AI & Data Science student at Sri Krishna College of Technology (2027).

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

## 🔗 Live Demo

**[kavibharathi207-portfolio.vercel.app](https://kavibharathi207-portfolio.vercel.app/)**

---

## ✨ Features

- **3D Particle Background** — Interactive Three.js particle field with mouse tracking
- **Custom Cursor** — Dual-layer animated cursor with hover effects
- **Smooth Loader** — Animated progress bar on page load
- **Dark / Light Mode** — Toggle with preference saved to localStorage
- **Scroll Progress Bar** — Top bar tracks reading progress
- **Scroll Reveal Animations** — Elements animate in as you scroll
- **Animated Counters** — CGPA, projects, and certifications count up on view
- **Working Contact Form** — EmailJS integration sends messages directly to Gmail inbox
- **Fully Responsive** — Mobile-friendly layout with parallax disabled on small screens
- **Active Nav Highlight** — Navigation link highlights as you scroll through sections

---

## 📄 Sections

| Section | Content |
|---------|---------|
| Hero | Name, title, stats bar, CTA buttons |
| About | Bio, education details, location |
| Skills | Technical, Web, Coursework, Soft Skills |
| Projects | 4 featured projects with tech stack |
| Experience | Internships and hackathons |
| Certifications | 7 certifications from Microsoft, AWS, MathWorks, etc. |
| Contact | Email, LinkedIn, GitHub, working contact form |

---

## 🛠️ Tech Stack

- **HTML5** — Structure and content
- **CSS3** — Styling, dark/light theming with CSS variables, responsive layout
- **JavaScript (ES6)** — Animations, scroll effects, counters, theme toggle
- **Three.js** — 3D particle field background
- **EmailJS** — Contact form email delivery to Gmail
- **Google Fonts** — Bebas Neue + Outfit
- **Vercel** — Deployment and hosting

---

## 🚀 Getting Started

1. Clone or download the project
2. Open `index.html` directly in any browser — no build step needed

```bash
git clone https://github.com/Kavibharathi207/portfolio.git
cd portfolio
open index.html
```

---

## ⚙️ EmailJS Setup

The contact form uses EmailJS to deliver messages directly to Gmail.

To configure it for your own account:

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Go to **Email Services** → Add New Service → Connect Gmail
3. Go to **Email Templates** → Select **Contact Us**
4. Go to **Account → General** → Copy your Public Key
5. Replace these values in `index.html`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  name: name,
  email: email,
  message: message
})
```

> Make sure your template uses `{{name}}`, `{{email}}`, and `{{message}}` as variable names.

---

## 🌐 Deployment

Works with any static hosting:

- **GitHub Pages** — Push to repo, enable Pages in Settings
- **Netlify** — Drag and drop the folder
- **Vercel** — Import the repo and deploy

---

## 📁 File Structure

portfolio/
├── index.html      # HTML + CSS + JavaScript (all in one file)
└── README.md

---

## 📄 License

MIT License — © 2026 Kavibharathi G
