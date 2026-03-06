import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Printer, Globe, Clock, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUpParams = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" }
};

export default function Contact() {
    return (
        <div style={{ paddingTop: '80px', backgroundColor: 'var(--bg-off-white)', minHeight: '100vh', position: 'relative' }}>
            <div className="hero-overlay" style={{ height: '350px', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 0 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '6rem', paddingBottom: '4rem', textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="page-hero-title" style={{ fontSize: '3.8rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                        Contact <span className="text-yellow">Us.</span>
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7, fontWeight: 400 }}>
                        Connect with our engineering team to discuss your next project — from palm oil mills and power plants to industrial facility upgrades.
                    </p>
                </motion.div>
            </div>

            <div className="container" style={{ paddingBottom: '6rem', position: 'relative', zIndex: 10 }}>
                <motion.div
                    {...fadeUpParams}
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-lg)',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                        border: '1px solid var(--border-light)'
                    }}
                    className="contact-grid"
                >
                    {/* Left Column: Contact Details */}
                    <div style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>L.H.E.E. Sdn Bhd</h2>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Registration No: 364090-V</p>
                            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-yellow)' }}></div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                            {/* Address */}
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '50%', flexShrink: 0 }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '0.3rem' }}>Headquarters</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
                                        No. 18, Jalan Permata 2B KS/9,<br />
                                        Taman Perindustrian Air Hitam,<br />
                                        41200 Klang, Selangor D.E., Malaysia
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '50%', flexShrink: 0 }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '0.3rem' }}>Telephone</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
                                        <a href="tel:+60331231190" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>+603-3123 1190</a><br />
                                        <a href="tel:+60331231910" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>+603-3123 1910</a>
                                    </p>
                                </div>
                            </div>

                            {/* Fax */}
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '50%', flexShrink: 0 }}>
                                    <Printer size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '0.3rem' }}>Fax</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
                                        +603-3123 1411
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '50%', flexShrink: 0 }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '0.3rem' }}>Email</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, margin: 0, wordBreak: 'break-all' }}>
                                        <a href="mailto:lheepom@hotmail.com" style={{ color: 'var(--primary-navy)', textDecoration: 'underline', fontWeight: 500 }}>lheepom@hotmail.com</a><br />
                                        <a href="mailto:lhee.max@gmail.com" style={{ color: 'var(--primary-navy)', textDecoration: 'underline', fontWeight: 500 }}>lhee.max@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            {/* Website */}
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '50%', flexShrink: 0 }}>
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '0.3rem' }}>Website</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
                                        lhee.com.my
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div style={{ position: 'relative', height: '100%', minHeight: '500px' }}>
                        <img
                            src="/images/contact_engineer.png"
                            alt="L.H.E.E. Engineer inspecting power lines"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </motion.div>

                {/* ─── INDONESIA OFFICE ─── */}
                <motion.div
                    {...fadeUpParams}
                    style={{
                        marginTop: '2.5rem',
                        background: '#FFFFFF',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        padding: '2.5rem',
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'flex-start',
                        boxShadow: 'var(--shadow-sm)'
                    }}
                >
                    <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '50%', flexShrink: 0 }}>
                        <Building size={24} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-navy)', marginBottom: '0.4rem' }}>Indonesia Office — Link Company</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                            <strong>PT. Sempurna Wiratama Tehnik Lestari</strong><br />
                            Medan, Indonesia — Turnkey palm oil mill, rubber & chemical processing, project trading, and maintenance contracts.
                        </p>
                    </div>
                </motion.div>

                {/* ─── BUSINESS HOURS ─── */}
                <motion.div
                    {...fadeUpParams}
                    className="business-hours-bar"
                    style={{
                        marginTop: '2.5rem',
                        background: 'var(--primary-navy)',
                        borderRadius: 'var(--radius-md)',
                        padding: '2.5rem 3rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1.5rem',
                        color: 'var(--text-light)',
                    }}
                >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Clock size={28} style={{ color: 'var(--accent-yellow)' }} />
                        <div>
                            <h4 style={{ fontSize: '1.15rem', marginBottom: '0.2rem' }}>Business Hours</h4>
                            <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '1rem' }}>Monday – Friday: 8:00 AM – 5:00 PM (MYT)</p>
                        </div>
                    </div>
                    <Link to="/portfolio" className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.85rem 2rem' }}>
                        View Our Portfolio
                    </Link>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .contact-grid > div:last-child {
                        min-height: 350px !important;
                    }
                }
            `}</style>
        </div>
    );
}
