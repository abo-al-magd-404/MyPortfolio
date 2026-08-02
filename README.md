# Abo Al Magd — Personal Portfolio

A production-ready, responsive portfolio website for Mohamed Mahmoud Abo Al Magd (abo-al-magd-404) built with the Next.js App Router. It showcases projects, technical skills, education, and includes a working contact form (serverless API + Nodemailer).

---

## Key highlights

- Clean, responsive single-page composition: Landing → Education → Skills → Projects → Contact.
- Interactive UI with Framer Motion micro-animations and Tailwind CSS theming.
- Serverless contact endpoint using Nodemailer + Gmail environment credentials.
- Built with Next.js App Router (Next 16) and React 19, fully typed with TypeScript.

---

## Features

- Branded landing section with animated intro and Google Tomorrow font.
- Education timeline with certificate/download support.
- Skills breakdown by stack (frontend, backend, databases, tools).
- Projects gallery/cards with demo and GitHub links.
- Functional contact form backed by a serverless API route (sends email to the configured Gmail account).
- Dark theme, responsive layout, and subtle animated background elements.
- Custom 404 page and SEO-friendly metadata (title & description in layout).

---

## Stack

- Language(s): TypeScript, JavaScript, JSX/TSX
- Framework / runtime: Next.js 16 (App Router), React 19
- Notable libraries:
  - Tailwind CSS 4 (utility-first styling)
  - Framer Motion (animations)
  - Nodemailer (contact email)
  - @fortawesome/react-fontawesome (icons)

---

## Repository layout

```txt
/app
  layout.tsx            # Root layout: metadata, Tomorrow font, animated backgrounds, Navbar/Footer
  globals.css           # Tailwind import, variables, animated background CSS
  page.tsx              # Composes Landing, Education, Skills, Projects, Contact sections
  /sections/
    landing.tsx
    education.tsx
    skills.tsx
    projects.tsx
    contact.tsx
  /components/
    navbar.tsx
    footer.tsx
  /api/
    contact/route.js    # POST endpoint that sends emails via Nodemailer + Gmail
public/
  images/               # Profile photo & assets
  cv.pdf                # Downloadable CV
package.json            # scripts & dependency versions
next.config.ts
tsconfig.json
postcss.config.mjs
```

How it fits together:
- The app uses the Next.js App Router: `app/layout.tsx` sets global UI and metadata, `app/page.tsx` mounts the major sections. UI sections live under `app/sections`. The contact form posts to `app/api/contact/route.js`, which constructs and sends an email using Nodemailer and environment variables.

---

## Getting started (local)

1. Clone and install
```bash
git clone https://github.com/abo-al-magd-404/MyPortfolio.git
cd MyPortfolio
npm install
```

2. Environment variables
Create a `.env.local` file at project root containing:
```
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
```
Notes:
- The API route at `app/api/contact/route.js` uses `process.env.EMAIL_USER` and `process.env.EMAIL_PASS`.
- For Gmail, use an app password or follow Gmail’s current security guidance (OAuth2 or app password as appropriate).

3. Run locally
```bash
npm run dev
# Open http://localhost:3000
```

4. Build & run production
```bash
npm run build
npm run start
```

5. Lint
```bash
npm run lint
```

---

## Contact API details

- Endpoint: POST /api/contact
- Implementation: `app/api/contact/route.js`
- Expected JSON body:
```json
{
  "name": "Sender Name",
  "email": "sender@example.com",
  "message": "Message body"
}
```
- Response:
  - 200: { message: "Message sent successfully" }
  - 400: { message: "All fields are required" }
  - 500: { message: "Something went wrong" }

Security reminder: Do not commit `.env.local`. Protect `EMAIL_PASS`; prefer secrets management on production (Vercel/Netlify environment variables or a secure email relay).

---

## Deployment

- Recommended: Vercel (first-class Next.js support). Set the environment variables (EMAIL_USER, EMAIL_PASS) in the project settings on Vercel.
- Any Node-compatible host that supports Next.js App Router can run the site.

---

## Development notes & conventions

- Font: Google Tomorrow via `next/font/google` in `app/layout.tsx` (variable `--font-tomorrow`).
- Global styles and animated background circles are in `app/globals.css`.
- The site uses Tailwind utility classes; Tailwind PostCSS plugin is configured in `postcss.config.mjs`.
- Serverless contact logic uses `nodemailer.createTransport({ service: "gmail", auth: { user, pass } })` — see `app/api/contact/route.js`.

---

## Author & contacts

- Email: abo.al.magd.404@gmail.com
- WhatsApp: +20 109 555 4022 — https://wa.me/201095554022
- GitHub: https://github.com/abo-al-magd-404

---

If you want, I can:
- Add usage examples for the contact API (curl / fetch).
- Create a CONTRIBUTING.md or update CI/formatting workflows.
- Adjust README wording for a public portfolio homepage vs. developer-centric README.
