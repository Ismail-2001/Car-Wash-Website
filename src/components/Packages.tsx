import { motion } from 'framer-motion';
import { Check, Star, Sparkle, Crown } from 'lucide-react';

const packages = [
    {
        name: "Essential Wash",
        icon: <Sparkle size={24} />,
        price: "49",
        features: [
            "Hand Wash & Dry",
            "Wheel & Rim Cleaning",
            "Tire Dressing",
            "Interior Vacuum",
            "Window Cleaning",
            "Door Jambs Wiped"
        ],
        popular: false
    },
    {
        name: "Deluxe Detail",
        icon: <Star size={24} />,
        price: "129",
        features: [
            "Everything in Essential",
            "Clay Bar Treatment",
            "Hand Wax & Polish",
            "Interior Deep Steam Clean",
            "Leather Conditioning",
            "Engine Bay Detailing"
        ],
        popular: true
    },
    {
        name: "Showroom Elite",
        icon: <Crown size={24} />,
        price: "299",
        features: [
            "Everything in Deluxe",
            "Paint Correction (1-Stage)",
            "Ceramic Sealant (6mo)",
            "Odor Elimination",
            "Fabric Protection",
            "Headlight Restoration"
        ],
        popular: false
    }
];

const Packages = () => {
    return (
        <section id="packages" className="section-padding" style={{ background: 'var(--background)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">Pricing Plans</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Choose Your Level of Shine</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Transparent pricing with no hidden fees. We bring everything needed
                        to transform your vehicle at your location.
                    </p>
                </div>

                <div className="package-grid">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`package-card ${pkg.popular ? 'popular' : ''}`}
                        >
                            {pkg.popular && <div className="popular-tag">Most Popular</div>}

                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: pkg.popular ? 'var(--primary)' : 'var(--secondary)',
                                color: pkg.popular ? 'white' : 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px',
                                marginBottom: '1.5rem'
                            }}>
                                {pkg.icon}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{pkg.name}</h3>

                            <div className="price-box">
                                <span className="price-currency">$</span>
                                <span className="price-amount">{pkg.price}</span>
                                <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}> / service</span>
                            </div>

                            <ul className="feature-list">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="feature-item" style={{ color: 'inherit' }}>
                                        <Check size={18} className="feature-icon" />
                                        <span style={{ color: 'var(--foreground)' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', padding: '1rem' }}>
                                Book This Package
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
