import { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { motion, useScroll, useSpring } from 'framer-motion';

// Lazy load heavy sections for performance optimization
const Services = lazy(() => import('./components/Services'));
const Packages = lazy(() => import('./components/Packages'));
const MapSection = lazy(() => import('./components/MapSection'));
const Booking = lazy(() => import('./components/Booking'));

function App() {
  const [isDark, setIsDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiff: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="app">
      <header>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        {/* Progress Bar for UX */}
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scaleX as any }}
        />
      </header>

      <main id="main-content">
        <Hero />

        {/* Social Proof Section - Critical for PITCH */}
        <section className="trusted-by" aria-label="Trusted Brands">
          <div className="container">
            <p className="section-subtitle">Trusted by Luxury Car Owners</p>
            <div className="logo-cloud">
              <span>TESLA</span>
              <span>PORSCHE</span>
              <span>BMW</span>
              <span>FERRARI</span>
              <span>MERCEDES</span>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="section-loader">Loading Excellence...</div>}>
          <Services />
          <Packages />
          <MapSection />
          <Booking />
        </Suspense>
      </main>

      <footer className="footer-root">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>GlowDrive</h3>
              <p>Redefining luxury mobile detailing through precision, technology, and care.</p>
            </div>
            <div className="footer-links">
              <h4>Explore</h4>
              <ul>
                <li><a href="#services">Expertise</a></li>
                <li><a href="#packages">Pricing</a></li>
                <li><a href="#map">Area</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>Email: hello@glowdrive.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} GlowDrive. Crafted for Automotive Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
