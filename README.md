# 🍱 FeedForward — Food Donation Platform

A modern, fully responsive food donation platform wireframe built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Originally designed in Figma and converted into a fully functional React web app.

> **Live Demo:** [your-vercel-link-here.vercel.app](https://your-vercel-link-here.vercel.app)  


---

## 📸 Screenshots

> _(Add screenshots here after running the project — use Ctrl+Shift+S or Snipping Tool)_

| Home Page | Dashboard | Campaigns |
|-----------|-----------|-----------|
| ![Home](screenshots/home.png) | ![Dashboard](screenshots/dashboard.png) | ![Campaigns](screenshots/campaigns.png) |

---

## ✨ Features

- 🏠 **Landing Page** — Hero section, food categories, food showcase
- 📖 **Impact Stories** — Real stories from the community
- 🏆 **Leaderboard** — Top food donors ranked by points and badges
- 📢 **Campaigns** — Active food donation drives with progress tracking
- 🔐 **Login Pages** — Separate login flows for Customer, Delivery Partner, and Admin
- 📊 **User Dashboard** — Personalized donation history and stats
- 🛠️ **Admin Dashboard** — Platform-wide analytics and user management
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Reusable UI components |
| [Radix UI](https://www.radix-ui.com/) | Accessible component primitives |
| [Lucide React](https://lucide.dev/) | Icons |
| [Recharts](https://recharts.org/) | Charts & data visualization |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

Check your versions:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/feedforward-website.git
cd feedforward-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**

Visit [http://localhost:3000](http://localhost:3000) — the app will open automatically.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
feedforward/
├── index.html                  # Entry HTML file
├── vite.config.ts              # Vite configuration
├── package.json                # Dependencies & scripts
└── src/
    ├── main.tsx                # App entry point
    ├── App.tsx                 # Root component & routing
    ├── index.css               # Global styles
    ├── assets/                 # Images & static files
    ├── styles/
    │   └── globals.css         # CSS variables & theme
    └── components/
        ├── Header.tsx          # Navigation bar
        ├── Hero.tsx            # Landing hero section
        ├── FoodCategories.tsx  # Food category cards
        ├── FoodShowcase.tsx    # Featured food listings
        ├── ImpactStories.tsx   # Community stories
        ├── LoginPages.tsx      # Login flows (3 roles)
        ├── Dashboard.tsx       # User dashboard
        ├── Footer.tsx          # Footer
        ├── figma/
        │   └── ImageWithFallback.tsx  # Image with error fallback
        └── ui/                 # shadcn/ui components
            ├── button.tsx
            ├── card.tsx
            ├── dialog.tsx
            └── ...
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own copy:

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Vite — just click **Deploy**

---

## 🙌 Acknowledgements


- UI Components by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Images by [Unsplash](https://unsplash.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
