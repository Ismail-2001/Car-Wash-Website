import { motion } from 'framer-motion';
import { Calendar, MapPin, CarFront, Send } from 'lucide-react';

const Booking = () => {
    return (
        <section id="book" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                        borderRadius: '2.5rem',
                        padding: '4rem',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    }}
                >
                    {/* Background Pattern */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.05,
                        padding: '20px',
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Fast Booking</div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
                            Ready for a Transformation?
                        </h2>
                        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.125rem' }}>
                            Book your appointment in less than 2 minutes. We'll confirm via SMS
                            and see you at your preferred location.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <motion.div
                                whileHover={{ x: 10 }}
                                style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                            >
                                <div style={{ background: 'var(--primary)', padding: '0.75rem', borderRadius: '12px' }}>
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700 }}>Choose Your Time</div>
                                    <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Flexible 7 days a week</div>
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 10 }}
                                style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                            >
                                <div style={{ background: 'var(--primary)', padding: '0.75rem', borderRadius: '12px' }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700 }}>We Come To You</div>
                                    <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Home, Office, or Anywhere</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="hover-lift"
                        style={{
                            background: 'var(--card)',
                            padding: '2.5rem',
                            borderRadius: '1.5rem',
                            color: 'var(--foreground)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            zIndex: 5
                        }}
                    >
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Your Name</label>
                                <input type="text" placeholder="John Doe" style={adaptiveInputStyle()} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Phone</label>
                                    <input type="tel" placeholder="(555) 000-0000" style={adaptiveInputStyle()} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Service</label>
                                    <select style={adaptiveInputStyle()}>
                                        <option>Interior Deep Clean</option>
                                        <option>Exterior Wash</option>
                                        <option>Full Detail</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Vehicle Model</label>
                                <div style={{ position: 'relative' }}>
                                    <CarFront size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                                    <input type="text" placeholder="e.g. Tesla Model 3" style={{ ...adaptiveInputStyle(), paddingLeft: '3rem' }} />
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                className="btn btn-primary pulse-primary"
                                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}
                            >
                                Book Appointment <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const adaptiveInputStyle = () => ({
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid var(--border)',
    background: 'var(--background)',
    color: 'var(--foreground)',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'all 0.2s',
});

export default Booking;
