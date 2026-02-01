# GlowDrive - Premium Mobile Detailing Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

## 🏎️ Project Overview

**GlowDrive** is a high-performance, conversion-optimized landing page designed for luxury mobile detailing services. Built with a "Quiet Luxury" aesthetic, it bridges the gap between premium automotive care and modern digital experiences. The platform is engineered to showcase technical expertise, build brand trust through social proof, and streamline the customer acquisition funnel with an intuitive, mobile-first booking interface.

---

## ✨ Key Features

- **Premium Cinematic UI**: Sophisticated interactions and 3D-like parallax effects powered by Framer Motion.
- **Dual-Theme Engineering**: A unified dark/light mode system with smooth, state-preserved transitions.
- **Performance Optimized**: 
  - **Lazy-Loaded Sections**: Heavy components (Maps, Services, Booking) load only when entering the viewport.
  - **Suspense Architecture**: Zero-render blocking for critical above-the-fold content.
- **Conversion-First UX**: 
  - **Social Proof Integration**: Trust badges and luxury brand validation (Tesla, Porsche, BMW).
  - **Z-Pattern Layout**: Strategically guides the user from value proposition to the final CTA.
- **Intelligent Booking Flow**: A frictionless 2-minute booking process with mobile-friendly touch targets.
- **SEO & Accessibility**: 100% semantic HTML5 structure with ARIA-compliant elements for maximum search engine visibility.

---

## 🛠️ Tech Stack

### Frontend
- **React 18**: Component-based UI architecture.
- **TypeScript**: Type-safe development for scalable codebases.
- **Vite**: Ultra-fast build tool and HMR.
- **Framer Motion**: Production-grade animation engine.

### Styling & Icons
- **Vanilla CSS + Modern Variables**: Custom design system with a centralized tokenized theme.
- **Lucide React**: Clean, consistent isometric icons.
- **Dynamic CSS Transitions**: 0.3s cubic-bezier theme switching.

---

## 🏗️ Architecture

The project follows a modular, feature-based component architecture:

```text
src/
├── components/          # Reusable UI Blocks
│   ├── Hero.tsx         # Conversion-heavy entrance
│   ├── Services.tsx     # High-impact service grid
│   ├── Packages.tsx     # Behavioral psychology pricing
│   └── Booking.tsx      # Final conversion engine
├── App.tsx              # Optimization orchestrator (Lazy loading)
└── index.css            # Centralized design token system
```

---

## 🚀 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Local Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/glowdrive.git
   cd glowdrive
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory (for Map APIs if extended):
   ```env
   VITE_GOOGLE_MAPS_KEY=your_api_key_here
   ```

---

## 📖 Usage

### Development Mode
Runs the app in development mode with HMR (Hot Module Replacement).
```bash
npm run dev
```

### Production Build
Builds the app for production to the `dist` folder.
```bash
npm run build
```

---

## 🌐 Deployment

The project is optimized for Atomic Deployments on platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

1. Connect your repository to Vercel/Netlify.
2. Build Command: `npm run build`
3. Output Directory: `dist`

---

## 📸 Screenshots / Demo

> [!TIP]
> **View Live Demo**: [https://glowdrive-detailing.vercel.app](https://example.com)

| Light Mode | Dark Mode |
| :--- | :--- |
| ![Light Mode Placeholder](https://via.placeholder.com/800x450?text=Light+Mode+Preview) | ![Dark Mode Placeholder](https://via.placeholder.com/800x450?text=Dark+Mode+Preview) |

---

## 🗺️ Roadmap

- [ ] **AI-Powered Chatbot**: For real-time scheduling assistance.
- [ ] **Image Comparison Slider**: Before/After detaling gallery.
- [ ] **Stripe Integration**: Direct payment for service packages.
- [ ] **CMS Integration**: Headless CMS for easy service/price updates.

---

## 🤝 Contributing

We welcome contributions! To maintain code quality:
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Developed with ❤️ for Automotive Excellence.**
