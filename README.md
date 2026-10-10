# 🚀 Personal Portfolio Website - Gopika T K (Data Analyst)

A modern, responsive, and professional personal portfolio website created for a **Data Analyst / Fresher / Student**, built using **HTML5, CSS3, Bootstrap 5, and JavaScript**.

---

## 🌟 Live Features & Highlights

- **Sleek Dark Theme**: High-contrast, elegant dark aesthetic (`#090a10`) with vibrant electric purple and neon cyan accents.
- **Dynamic Typewriter Effect**: Interactive role cycling (`Data Analyst`, `Python & SQL Enthusiast`, `Power BI Developer`, etc.).
- **Mobile-First Responsive Layout**: Built with Bootstrap 5 grid and flexbox, tested on mobile, tablet, and desktop screens.
- **High-Impact Sections**:
  - **Hero Section**: Profile avatar with ambient glow ring, live status pill, floating metrics badges, action CTA buttons, and social links.
  - **About Me**: Professional introduction, career goals, key strengths cards, and quick summary metrics.
  - **Skills Matrix**: Categorized technical skills (Data Analysis & Modeling, BI & Visualizations, Web & Developer Tools) with percentage progress bars and additional tech badge tags.
  - **Projects Showcase**: 3 featured analytics case study cards (Customer Churn Analytics, E-Commerce Sales Intelligence, Healthcare Clinical Analytics) with tags, GitHub code links, and interactive preview modals.
  - **Education & Certifications Timeline**: Clean vertical glowing timeline showcasing degree, higher secondary schooling, and Google Data Analytics certification.
  - **Contact Section**: Contact cards (Email, Location, Role), social links, and an interactive form with JavaScript validation and clear notes on connecting a backend service.
  - **Footer**: Brand mark, quick navigation links, dynamic copyright year, and a smooth back-to-top button.

---

## 📁 Project Structure

```text
workshop/
│
├── index.html            # Main HTML5 structure with semantic sections & Bootstrap 5
├── style.css             # Custom CSS3 styles, CSS variables, dark theme & animations
├── script.js             # Interactive JavaScript (Typewriter, Form Validation, Modals)
├── README.md             # Beginner-friendly documentation and customization guide
│
└── assets/
    └── images/
        ├── GOPIKA portfolio.jpeg # Hero profile portrait (Gopika T K)
        ├── project1.jpg          # Customer Churn dashboard preview
        ├── project2.jpg          # E-Commerce Sales dashboard preview
        └── project3.jpg          # Healthcare Clinical Analytics dashboard preview
```

---

## 💻 How to Run and Preview the Website

You can run and preview this portfolio website using any of the following methods:

### Method 1: Direct File Preview (Easiest - No installation needed)
1. Open your File Explorer and navigate to `c:\Users\gopik\Downloads\workshop`.
2. Double-click on `index.html`.
3. The portfolio will immediately launch in your default web browser (Google Chrome, Microsoft Edge, Firefox, or Brave).

### Method 2: Using Python's Built-in Local Server
If you prefer testing with an `http://` server:
1. Open a terminal or PowerShell in the `workshop` folder.
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### Method 3: Using VS Code / Antigravity IDE "Live Server"
1. Install the **Live Server** extension (by Ritwick Dey).
2. Right-click on `index.html` in the file explorer.
3. Select **"Open with Live Server"**.

---

## 🛠️ Beginner Customization Guide (Workshop Instructions)

This project has been structured with clear comments in each file to make it straightforward for beginners to customize:

### 1. Update Personal Name & Bio
- In `index.html`:
  - Search for `GOPIKA T K` and replace it with your own name.
  - Edit the hero description inside `<p class="hero-description">`.
- In `script.js`:
  - Locate the `roles` array (Line ~18) and modify the titles you'd like the typewriter to display:
    ```javascript
    const roles = [
      "DATA ANALYST",
      "PYTHON DEVELOPER",
      "MACHINE LEARNING ENTHUSIAST"
    ];
    ```

### 2. Replace the Profile Picture
- Place your photo inside `assets/images/` (e.g., `assets/images/my_photo.jpg`).
- In `index.html`, find:
  ```html
  <img src="assets/images/GOPIKA portfolio.jpeg" alt="Profile" class="img-fluid profile-image">
  ```
  Change `profile.jpg` to your image filename.

### 3. Add or Modify Skills
- In `index.html`, navigate to the `<!-- 4. SKILLS SECTION -->`.
- Adjust skill titles, percentage numbers, or progress bar widths:
  ```html
  <div class="progress-bar progress-purple" style="width: 95%"></div>
  ```

### 4. Customize Projects
- In `index.html`, find `<!-- 5. PROJECTS SECTION -->`.
- Update project titles, descriptions, technology badges (`<span class="tech-tag">`), and add your actual GitHub repositories in the `href="https://github.com/..."` attributes.

### 5. Connecting the Contact Form to Receive Real Emails
The contact form currently validates inputs on the client side using JavaScript. To receive actual messages to your inbox for free:
1. Go to [Formspree.io](https://formspree.io) and create a free account.
2. Create a form and copy your unique Form ID endpoint URL (e.g., `https://formspree.io/f/xvovdqwq`).
3. In `index.html`, update `<form id="contactForm">` to:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Or connect it with [EmailJS](https://www.emailjs.com/) in `script.js` without refreshing the page!

---

## 🌐 How to Deploy for Free on GitHub Pages

1. Initialize a Git repository in the project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on your GitHub account (e.g., `portfolio` or `username.github.io`).
3. Link your remote and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings** > **Pages** > **Build and deployment**.
5. Set Source to `Deploy from a branch`, select `main` and `/ (root)`, then click **Save**.
6. Your portfolio website will be live at `https://<your-username>.github.io/<your-repo-name>/` in 1-2 minutes!

---

## 📄 License & Credits
- Built with **Bootstrap 5.3**, **Font Awesome 6**, and **Google Fonts**.
- Clean, open, and beginner-friendly for educational and personal workshop usage.
