import { motion } from 'framer-motion';
import { ChevronRight, Star, ShieldCheck, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            overflow: 'hidden',
            background: 'var(--background)'
        }}>
            {/* Background Decor */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(19, 127, 236, 0.1) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0,
                    borderRadius: '50%'
                }}
            />

            <div className="container" style={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="badge"
                    >
                        <Sparkles size={14} style={{ marginRight: '0.5rem' }} />
                        Premium Mobile Detailing
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--foreground)' }}
                    >
                        Showroom Shine,<br />
                        <span style={{ color: 'var(--primary)' }}>Every Single Time.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '500px' }}
                    >
                        The highest rated mobile detailing in the city. We bring professional
                        equipment, premium products, and expert care directly to you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                        <a href="#packages" className="btn btn-primary pulse-primary" style={{ padding: '1rem 2rem' }}>
                            View Packages <ChevronRight size={20} />
                        </a>
                        <a href="#services" className="btn btn-secondary hover-lift" style={{ padding: '1rem 2rem' }}>
                            Our Services
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ color: '#fbbf24', display: 'flex', gap: '2px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.2 + (i * 0.1) }}
                                    >
                                        <Star size={18} fill="#fbbf24" strokeWidth={0} />
                                    </motion.div>
                                ))}
                            </div>
                            <div>
                                <span style={{ fontWeight: 800, fontSize: '1.125rem' }}>5.0 Rating</span>
                                <span style={{ color: 'var(--muted)', fontSize: '0.875rem', display: 'block' }}>From 1,200+ Happy Clients</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    style={{ position: 'relative' }}
                    className="image-zoom-container"
                >
                    <div style={{
                        position: 'relative',
                        borderRadius: '2.5rem',
                        overflow: 'hidden',
                        boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.2)',
                        aspectRatio: '1/1',
                        background: '#e2e8f0'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=2000"
                            alt="Professional Car Washing"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=2000";
                            }}
                        />

                        {/* Floating Info Card */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 1, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut"
                            }}
                            style={{
                                position: 'absolute',
                                bottom: '2.5rem',
                                left: '2.5rem',
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(8px)',
                                padding: '1.5rem',
                                borderRadius: '1.25rem',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.25rem',
                                border: '1px solid white',
                                zIndex: 2
                            }}
                        >
                            <div style={{ background: '#ecfdf5', color: '#10b981', padding: '0.8rem', borderRadius: '12px', display: 'flex' }}>
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--card-foreground)' }}>Fully Insured</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Peace of mind guaranteed</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative Circles */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        style={{
                            position: 'absolute',
                            top: '-30px',
                            right: '-30px',
                            width: '120px',
                            height: '120px',
                            background: 'var(--primary)',
                            borderRadius: '50%',
                            zIndex: -1
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
