# Shankharav Pal — Portfolio Website

A personal academic & project portfolio built with plain HTML, CSS, and JavaScript, designed for static hosting (e.g., **Amazon S3 Static Website Hosting**).

## 🎓 About

This site was created as part of the VIT Chennai ACC (AWS Cloud Computing) course digital portfolio initiative. It showcases academic profile details, technical skills, projects, and achievements of **Shankharav Pal**, a 2nd-year B.Tech Electronics & Computer Engineering (ECM) student at VIT Chennai University, SENSE.

## 📁 Files

| File | Description |
|---|---|
| `index.html` | Main page markup — Home, About, Skills, Projects, Achievements, Contact sections |
| `style.css` | All styling, layout, and responsive design |
| `script.js` | Typing animation, nav scroll highlighting, mobile menu, contact form handling |
| `profile.jpg` | Profile photograph used in the Home section |

## 📌 Sections

- **Home** — Name, animated role typing, social links
- **About** — Academic profile (University, School, Branch, Student Name, Registration Number) and Career Objective
- **Skills** — Programming languages, tools, and core competencies
- **Projects** — Smart Helmet System (8051) and LifeLine Health Companion App
- **Achievements** — Certificates and hackathon recognitions
- **Contact** — Contact details and a message form

## 🚀 Deployment (Amazon S3 Static Website Hosting)

1. Create an S3 bucket (bucket name can be anything, e.g. `shankharav-portfolio`).
2. Upload all files (`index.html`, `style.css`, `script.js`, `profile.jpg`) to the bucket root.
3. Under **Properties → Static website hosting**, enable hosting and set `index.html` as the index document.
4. Under **Permissions**, disable "Block all public access" and add a bucket policy allowing `s3:GetObject` for public read access.
5. Access the site via the **Bucket Website Endpoint** shown in the Static website hosting settings.

## ✏️ Customization

- Replace `profile.jpg` with your own photo (keep the same filename, or update the `src` in `index.html`).
- Update the contact form's `action` attribute in `index.html` with your own form endpoint (e.g. Google Apps Script, Formspree) to enable message sending.

## 📄 License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
