# Portfolio UI 🎨

> A modern, high-performance portfolio website built for **Kshittiz Chaudhary Tharu**, a Full Stack Developer specializing in GIS solutions.

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Leaflet](https://img.shields.io/badge/Leaflet-Map-199900?style=for-the-badge&logo=leaflet)

## 🚀 Overview

This project is a showcase of advanced frontend techniques, featuring a sleek, responsive design and interactive elements. It goes beyond a static resume by integrating a live map, project visualizations, and a polished user experience.

### Key Features

- **Interactive Map**: A custom Leaflet integration showing location with a dark theme, custom markers, and "fly-to" interactions.
- **Modern UI/UX**: Built with **Tailwind CSS v4** featuring glassmorphism, animated blobs, and smooth transitions.
- **Project Showcase**: Dynamic project cards with 3D-like hover effects and categorical tagging.
- **Iconography**: Professional iconography using **Remix Icon**.
- **Fully Responsive**: optimized for all devices from mobile to desktop.

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API, Script Setup)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Maps**: [Leaflet.js](https://leafletjs.com/) with CartoDB Dark Matter tiles
- **Icons**: [Remix Icon](https://remixicon.com/)
- **Language**: TypeScript

## 📂 Project Structure

```bash
src/
├── assets/         # Static assets and global CSS
├── components/     # Reusable Vue components (MapCard, ProjectsSection, etc.)
├── constants/      # centralized data (Projects, Skills, Profile info)
├── Layout/         # Main layout wrapper
├── views/          # Page views (LandingPage)
└── App.vue         # Root component
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v20+)
- Yarn or npm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/kshittiz101/portfolio.git
    cd portfolio
    ```

2.  Install dependencies:

    ```bash
    yarn install
    ```

3.  Run the development server:

    ```bash
    yarn dev
    ```

4.  Open `http://localhost:5173` in your browser.

## 🎨 Customization

All personal data is centralized in `src/constants/index.ts`. To make this portfolio your own:

1.  Open `src/constants/index.ts`.
2.  Update the `PROFILE`, `SKILLS`, `EDUCATION`, and `PROJECTS` objects.
3.  Replace images in `public/images/projects/`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Kshittiz Chaudhary Tharu](https://github.com/HastagKc)
