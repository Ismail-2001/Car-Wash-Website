import { useState, useEffect } from 'react';
import { Car, Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar-root ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <div className="logo-icon">
                        <Car size={24} />
                    </div>
                    <span className="logo-text">GlowDrive</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#packages" className="nav-link">Packages</a>
                    <a href="#map" className="nav-link">Service Area</a>
                    <button
                        onClick={toggleTheme}
                        className="btn btn-secondary"
                        style={{ padding: '0.6rem', borderRadius: '50%', border: 'none' }}
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href="tel:+1234567890" className="btn btn-secondary nav-phone">
                        <Phone size={18} />
                        <span>(555) 123-4567</span>
                    </a>
                    <a href="#book" className="btn btn-primary">Book Now</a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        <div className="mobile-menu-content">
                            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                            <a href="#packages" onClick={() => setIsMobileMenuOpen(false)}>Packages</a>
                            <a href="#map" onClick={() => setIsMobileMenuOpen(false)}>Service Area</a>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
                                <button
                                    onClick={toggleTheme}
                                    className="btn btn-secondary"
                                    style={{ flex: 1, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    {isDark ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
                                </button>
                                <a href="#book" className="btn btn-primary" style={{ flex: 1 }} onClick={() => setIsMobileMenuOpen(false)}>Book Now</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
