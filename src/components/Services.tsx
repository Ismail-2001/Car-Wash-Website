import { motion } from 'framer-motion';
import { Droplets, Shield, Zap, Wind, Search, Clock } from 'lucide-react';

const services = [
    {
        icon: <Droplets size={24} />,
        title: "Eco Exterior Wash",
        description: "Steam-based deep clean that preserves your paint and uses 90% less water than traditional methods.",
        price: "From $49",
        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: <Wind size={24} />,
        title: "Interior Sanitize",
        description: "Deep vacuum, steam disinfection, and conditioning of all surfaces for a like-new feel.",
        price: "From $79",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: <Shield size={24} />,
        title: "Ceramic Coating",
        description: "Military-grade protection that adds insane gloss and protects from UV rays for years.",
        price: "From $299",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: <Search size={24} />,
        title: "Paint Correction",
        description: "Multi-stage machine polishing to remove swirls and restore that flawless finish.",
        price: "From $199",
        image: "https://images.unsplash.com/photo-1563720223185-117860738d87?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: <Zap size={24} />,
        title: "Engine Detailing",
        description: "Safe cleaning of the engine bay to maintain performance and resale value.",
        price: "From $89",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: <Clock size={24} />,
        title: "Fleet Services",
        description: "Tailored recurring maintenance plans for luxury collections and corporate fleets.",
        price: "Contact Us",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800"
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding" style={{ background: 'var(--background)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4.5rem' }}
                >
                    <div className="badge">Our Expertise</div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>Treat Your Car to the Best</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
                        We offer a comprehensive range of detailing services designed to protect your investment
                        and keep your vehicle looking its absolute best.
                    </p>
                </motion.div>

                <div className="grid grid-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="card hover-lift"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-image-container image-zoom-container" style={{ background: '#e2e8f0' }}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="card-image"
                                    loading="lazy"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (!target.src.includes('photo-1520340356584-f9917d1eea6f')) {
                                            target.src = `https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800`;
                                        }
                                    }}
                                />
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="card-icon-floating"
                                >
                                    {service.icon}
                                </motion.div>
                            </div>

                            <div className="card-content">
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{service.title}</h3>
                                <p style={{ fontSize: '0.95rem', flexGrow: 1, color: 'var(--muted)' }}>{service.description}</p>
                                <div style={{
                                    marginTop: '0.5rem',
                                    paddingTop: '1.25rem',
                                    borderTop: '1px solid var(--border)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.125rem' }}>{service.price}</span>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--primary)',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            fontSize: '0.9375rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem'
                                        }}
                                    >
                                        Learn More →
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
