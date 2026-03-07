import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, ClipboardCheck, HardHat, Package, ArrowRight, ShieldCheck, Clock, Globe, ArrowUpRight, Award, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/background_1_engineer.jpg';

const fadeUpParams = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" }
};

const stats = [
    { number: "46+", label: "Years of Experience" },
    { number: "200+", label: "Palm Oil Mills Built" },
    { number: "223+", label: "Major Projects" },
    { number: "10+", label: "Countries Served" }
];

const services = [
    {
        icon: <Zap size={30} />,
        title: "Design & Build",
        desc: "Full turnkey electrical systems from concept to commissioning — specializing in palm oil mills, power plants, and industrial facilities."
    },
    {
        icon: <ClipboardCheck size={30} />,
        title: "Consulting",
        desc: "Expert electrical consultation for HT & LT system design, power distribution, and palm oil mill electrical infrastructure."
    },
    {
        icon: <Wrench size={30} />,
        title: "Maintenance Contracts",
        desc: "Long-term maintenance partnerships with industry leaders — including our 40-year relationship with Nestlé Malaysia."
    },
    {
        icon: <HardHat size={30} />,
        title: "Testing & Commissioning",
        desc: "Professional system verification and energization for installations up to 33kV tension voltage."
    },
    {
        icon: <Package size={30} />,
        title: "Project Trading",
        desc: "Comprehensive supply of electrical equipment and components for industrial-scale projects."
    },
    {
        icon: <ShieldCheck size={30} />,
        title: "Turnkey Project Delivery",
        desc: "In-house Professional Engineer capability enabling complete project oversight from blueprint to grid activation."
    }
];

const certs = [
    { label: "CIDB G7", detail: "Grade G7 Registration" },
    { label: "Class A", detail: "Energy Commission" },
    { label: "33kV", detail: "Licensed Capacity" },
    { label: "Global projects", detail: "Multiple projects delivered worldwide" }
];

export default function Home() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section id="home" className="hero">
                <div className="hero-overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        style={{ maxWidth: '850px' }}
                    >
                        <div style={{
                            display: 'inline-block',
                            padding: '0.45rem 1.25rem',
                            background: 'var(--accent-yellow)',
                            color: 'var(--primary-navy)',
                            fontWeight: 800,
                            fontSize: '0.85rem',
                            marginBottom: '1.5rem',
                            letterSpacing: '1.5px',
                            borderRadius: '4px',
                            textTransform: 'uppercase'
                        }}>
                            SINCE 1978 · INCORPORATED 1995
                        </div>
                        <h1 className="hero-title" style={{ fontSize: '4.2rem', lineHeight: 1.12, marginBottom: '1.5rem', color: '#FFFFFF' }}>
                            Electrical Engineering<br />
                            <span className="text-yellow">Excellence, Delivered.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', maxWidth: '640px', lineHeight: 1.75, fontWeight: 400 }}>
                            L.H.E.E. Sdn Bhd delivers world-class electrical engineering services — from palm oil mills and biomass power plants to industrial manufacturing facilities — across 10+ countries with over four decades of proven expertise.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/portfolio" className="btn-primary">
                                View Our Portfolio <ArrowRight size={18} />
                            </Link>
                            <a href="#services" className="btn-secondary">
                                Our Services
                            </a>
                        </div>

                        <div className="hero-stats" style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '2.5rem' }}>
                            {stats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    className="stat-item"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                >
                                    <div className="stat-number">{s.number}</div>
                                    <div className="stat-label">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── CREDENTIALS STRIP ─── */}
            {/*<section style={{ padding: '3rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
                <div className="container">
                    <div className="cert-bar">
                        {certs.map((c, i) => (
                            <motion.div
                                key={i}
                                className="cert-item"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.08 }}
                            >
                                <div className="cert-badge">
                                    <Award size={24} />
                                </div>
                                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary-navy)' }}>{c.label}</span>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{c.detail}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>*/}

            {/* ─── SERVICES ─── */}
            <section id="services" className="section" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="container">
                    <motion.div {...fadeUpParams} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>
                            Our <span className="text-yellow">Services.</span>
                        </h2>
                        <div className="section-divider" style={{ margin: '0 auto 1.5rem' }}></div>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem', fontWeight: 400 }}>
                            End-to-end electrical engineering services — from design and consulting to maintenance and commissioning — for the most demanding industrial environments.
                        </p>
                    </motion.div>

                    <div className="grid-3">
                        {services.map((srv, idx) => (
                            <motion.div
                                key={idx} className="solid-card service-card"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                            >
                                <div className="service-icon">{srv.icon}</div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--primary-navy)' }}>{srv.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '1.02rem', marginBottom: 0 }}>{srv.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ABOUT ─── */}
            {/*<section id="about-us" className="section" style={{ backgroundColor: 'var(--bg-off-white)' }}>
                <div className="container">
                    <div className="about-grid">
                        <motion.div {...fadeUpParams}>
                            <img src={placeholderImage} alt="L.H.E.E. engineering team on-site" className="about-image" style={{ border: '8px solid var(--primary-navy)' }} />
                        </motion.div>

                        <motion.div {...fadeUpParams}>
                            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: 'var(--primary-navy)' }}>
                                Who We <span className="text-yellow" style={{ background: 'var(--primary-navy)', padding: '0 0.5rem' }}>Are.</span>
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.25rem', lineHeight: 1.8, fontWeight: 400 }}>
                                L.H.E.E. Sdn Bhd has been a trusted name in electrical engineering since 1978 — formally incorporated in 1995. With roots in Syarikat Kejuruteraan Elektrik Lian Huat and over <strong>46 years</strong> of cumulative experience, we deliver comprehensive electrical engineering services including design & build, consulting, maintenance, testing & commissioning, and project trading.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Our mission is to provide world-class Electrical Engineering Services for all customers with maximum efficiency, minimum time, and cost savings. We have designed and built <strong>200+ palm oil mills</strong> across 10+ countries and maintained 30+ year client relationships — including our 40-year partnership with Nestlé.
                            </p>

                            <div className="about-features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ color: 'var(--primary-navy)', background: 'var(--accent-yellow)', padding: '0.7rem', borderRadius: '50%', flexShrink: 0 }}>
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.15rem', marginBottom: '0.3rem', color: 'var(--primary-navy)' }}>Global Reach</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: 0 }}>Projects across Malaysia, Indonesia, PNG, Philippines, Ghana, Latin America & more.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ color: 'var(--primary-navy)', background: 'var(--accent-yellow)', padding: '0.7rem', borderRadius: '50%', flexShrink: 0 }}>
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.15rem', marginBottom: '0.3rem', color: 'var(--primary-navy)' }}>Client Retention</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: 0 }}>21+ year average client relationship span built on reliability.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>*/}

            {/* ─── INDUSTRIES ─── */}
            <section className="section" style={{ backgroundColor: 'var(--primary-navy)', color: 'var(--text-light)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeUpParams}>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Industries We <span className="text-yellow">Serve.</span></h2>
                        <div className="section-divider" style={{ margin: '0 auto 3rem', background: 'var(--accent-yellow)' }}></div>
                    </motion.div>

                    <div className="metrics-strip" style={{ maxWidth: '1000px', margin: '0 auto', gap: '1.5rem' }}>
                        {[
                            { icon: <Building size={28} />, label: "Palm Oil Mills", sub: "200+ designed & built" },
                            { icon: <Zap size={28} />, label: "Biomass & Biogas Power", sub: "Up to 10MW capacity" },
                            { icon: <HardHat size={28} />, label: "Food & Manufacturing", sub: "Nestlé, Dutch Lady/Lactalis" },
                            { icon: <ShieldCheck size={28} />, label: "Water Treatment", sub: "Government & corporate" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                style={{
                                    padding: '2rem 1.5rem',
                                    background: 'rgba(255,255,255,0.06)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{ color: 'var(--accent-yellow)', marginBottom: '1rem' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{item.label}</h4>
                                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', marginBottom: 0 }}>{item.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUpParams} style={{ marginTop: '3rem' }}>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '700px', margin: '0 auto' }}>
                            Additional sectors: Chemical Processing, Fertilizer Plants, Rubber Processing, Building Automation, Education & Training Centres, Shipyard & Cruise, and HT Substation infrastructure up to 132kV design capability.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-off-white)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeUpParams} className="cta-card" style={{
                        maxWidth: '850px',
                        margin: '0 auto',
                        background: '#FFFFFF',
                        padding: '4rem 3rem',
                        borderRadius: 'var(--radius-md)',
                        borderTop: '6px solid var(--accent-yellow)',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: 'var(--primary-navy)' }}>
                            Ready to Partner With Us?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2.5rem', fontWeight: 400, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            From palm oil mills to power plants — connect with our engineering team to discuss your next project.
                        </p>
                        <Link to="/contact" className="btn-primary" style={{ padding: '1.1rem 3rem', fontSize: '1.1rem' }}>
                            Get in Touch <ArrowUpRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
