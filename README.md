# Mohamed Mahmoud Abo Al Magd – Portfolio

A modern, interactive portfolio website to showcase the projects, technical skills, and academic background of **Mohamed Mahmoud Abo Al Magd** – a passionate Full-Stack (MERN) Developer dedicated to building scalable, performant, and visually engaging digital experiences.

---

## 🚀 Project Overview

This website offers a clean and approachable way to browse Mohamed’s work and background, featuring animated transitions, responsive layouts, and a contact form with backend email functionality. It’s designed and engineered for optimal UX, maintainable code, and fast performance.

---

## ✨ Features

- **Sleek Landing Page:** Professionally branded with animated personal introduction.
- **Skills Section:** Interactive breakdown of technical skills by stack (Frontend, Backend, Databases, Languages, Tools).
- **Projects Gallery:** Visually engaging cards for featured projects, with demo and GitHub links.
- **Education Timeline:** Timeline-style view of academic progress, supporting certificate downloads.
- **Contact Form:** Functional contact form seamlessly integrated with serverless email sending (Nodemailer + Gmail).
- **Dark Mode & Theming:** Modern aesthetic using Tailwind CSS and custom animated backgrounds.
- **Mobile Responsive:** Thoughtful design and layouts for all device sizes.
- **Micro Animations:** Powered by Framer Motion for a delightful but non-distracting experience.
- **404 Page:** Custom design with actionable navigation.
- **SEO & Metadata:** Meta tags for title/description and friendly social sharing.

---

## 🛠️ Tech Stack

**Framework & Core:**  
- [Next.js 16 (App Router)](https://nextjs.org/)  
- [React 19](https://react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)

**UI & Styling:**  
- [Tailwind CSS 4](https://tailwindcss.com/)  
- [Framer Motion](https://www.framer.com/motion/)  
- [FontAwesome React](https://fontawesome.com/v6/docs/web/use-with/react/)  
- [Tomorrow Google Fonts](https://fonts.google.com/specimen/Tomorrow)

**Backend & APIs:**  
- [Nodemailer](https://nodemailer.com/) (for contact form/serverless email)  
- [Node.js](https://nodejs.org/) (API routes used by Next.js App Router)

**Tooling:**  
- [ESLint](https://eslint.org/) (Next.js config)  
- [PostCSS](https://postcss.org/)  
- [Vercel (Deployment)](https://vercel.com/) (recommended)

---

## 🏗️ Architecture

- **Monorepo Type:** Single Next.js App Router project (src: `/app/`)
- **Core Sections:**  
  - `/sections/landing` – Intro  
  - `/sections/skills` – Skill matrices  
  - `/sections/projects` – Projects carousel  
  - `/sections/education` – Education & certifications  
  - `/sections/contact` – Form and info  
- **API:**  
  - `/api/contact/route.js` – Serverless API route, securely processes contact form (using Gmail + environment variables).
- **UI Composition:**  
  - `/components/navbar` and `/components/footer` – Reusable and themed
  - Custom animated backgrounds and responsive containers.  
- **Global Styling:**  
  - `/app/globals.css` (Tailwind, color themes, and keyframes)

---

## ⚡️ Setup & Usage

1. **Clone & Install**  
   ```sh
   git clone https://github.com/abo-al-magd-404/MyPortfolio.git
   cd MyPortfolio
   npm install
   ```

2. **Environment Variables**  
   Create a `.env.local` file with:
   ```
   EMAIL_USER=your_gmail_address@gmail.com
   EMAIL_PASS=your_gmail_app_password
   ```

3. **Run Locally**  
   ```sh
   npm run dev
   # Open http://localhost:3000
   ```

4. **Build for Production**  
   ```sh
   npm run build
   npm run start
   ```

5. **Deploy**  
   Deploy seamlessly to [Vercel](https://vercel.com/) or any platform supporting Next.js 16.

---

## 📂 Folder Structure

```txt
/app
  /sections      # Landing, Skills, Projects, Education, Contact
  /components    # Navbar, Footer, shared UI
  /api/contact   # API route for contact form (uses Nodemailer)
  globals.css    # Tailwind config, base style, keyframes
  layout.tsx     # App-wide layout (animated backgrounds, metadata)
  page.tsx       # Main composition (brings all sections together)
public/
  /images        # Profile photo and assets
  cv.pdf         # Downloadable CV
next.config.ts   # Next.js configuration
postcss.config.mjs
tailwind.config.js
package.json
```

---

## 📣 Contact

- **Email:** abo.al.magd.404@gmail.com
- **WhatsApp:** [+20 109 555 4022](https://wa.me/201095554022)
- **GitHub:** [abo-al-magd-404](https://github.com/abo-al-magd-404)
