import { motion } from 'framer-motion';
import { MapPin, Navigation, Info, Clock } from 'lucide-react';

const MapSection = () => {
    return (
        <section id="map" className="section-padding" style={{ background: 'var(--background)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">Service Area</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>We Come to You</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        We serve the entire metropolitan area and surrounding suburbs.
                        Check our primary service zone below.
                    </p>
                </div>

                <div className="map-container">
                    {/* Simple Interactive Placeholder Map using an Iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.119763739446!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1675860000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Service Area Map"
                    ></iframe>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="map-overlay"
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '8px' }}>
                                <Navigation size={18} />
                            </div>
                            <h4 style={{ margin: 0 }}>Service Zone</h4>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem' }}>
                                <MapPin size={16} className="text-primary" style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                <span>Serving New York City, Brooklyn, Queens, and Jersey City.</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem' }}>
                                <Clock size={16} className="text-primary" style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                <span>Mon - Sun: 8:00 AM - 7:00 PM</span>
                            </div>
                            <div style={{
                                marginTop: '0.5rem',
                                padding: '0.75rem',
                                background: 'var(--secondary)',
                                borderRadius: '0.5rem',
                                fontSize: '0.75rem',
                                display: 'flex',
                                gap: '0.5rem',
                                alignItems: 'center'
                            }}>
                                <Info size={14} style={{ color: 'var(--primary)' }} />
                                <span>Outside this zone? A small travel fee may apply.</span>
                            </div>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', fontSize: '0.875rem' }}>
                            Check My Address
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
