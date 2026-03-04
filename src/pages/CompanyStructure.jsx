import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Globe, Handshake, ShieldCheck, Briefcase, Users, Zap, GraduationCap } from 'lucide-react';

const fadeUpParams = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" }
};

const directors = [
    {
        name: "Wong Min (Wong Fee Min)",
        initials: "WM",
        role: "Director · Chargeman B1",
        description: "Senior Electrical Chargeman with 46+ years of experience. Specialist in palm oil mill electrical systems and HT substation projects up to 33kV. A founding pillar of L.H.E.E.'s technical heritage.",
    },
    {
        name: "Max Wong Tzu Hsiung",
        initials: "MW",
        role: "Managing Director",
        description: "B.Eng (Hons) Electrical & Computing from Monash University. 30+ years of experience. Major advisor for Nestlé Malaysia and turnkey contractors across Southeast Asia and the Pacific.",
    },
    {
        name: "Chong Yen Hong",
        initials: "CYH",
        role: "Technical Advisor",
        description: "BSc & MSc from Loughborough University (UK). 30+ years of experience. Expert in 11kV/33kV/132kV HT systems, transformers, and solar power installations.",
    }
];

const keyPersonnel = [
    { name: "Jolene Choy", role: "Director / Office Operations", detail: "Mechanical design executive, 14+ years experience in palm oil mill and process plant design." },
    { name: "Chew Choon Kui", role: "Project Manager", detail: "Senior Electrical Wireman. 18+ years across PNG, Solomon Islands, Sabah, Sarawak, and Indonesia." },
    { name: "Ang Chew Leong", role: "Site Manager", detail: "Electrical Wireman. 16+ years of international project execution." },
    { name: "Lim Fung Yu", role: "Site Manager", detail: "16+ years. Key executor for Nestlé manufacturing plants." },
    { name: "Choy Cheong Wee (Kenny)", role: "Safety & Project Coordinator", detail: "Project coordination and safety oversight across all active sites." },
];

const certifications = [
    { cert: "CIDB Malaysia", detail: "Grade G7 — Categories B (B04), CE (CE21), ME (E03, E04, E06, E10, E11, E16, E17, M15)", validity: "Valid until 31/05/2027" },
    { cert: "Suruhanjaya Tenaga", detail: "Registered Electrical Contractor, Class A — No. 2023/01431", validity: "Valid until 11/05/2028" },
    { cert: "Company Registration (SSM)", detail: "Registration No. 364090-V, incorporated 19/10/1995", validity: "Active" },
    { cert: "Switching License", detail: "Licensed to switch on systems up to 33kV tension voltage", validity: "Active" },
];

export default function CompanyStructure() {
    return (
        <div style={{ paddingTop: '80px', backgroundColor: 'var(--bg-off-white)', minHeight: '100vh', position: 'relative' }}>
            <div className="hero-overlay" style={{ height: '350px', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 0 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '6rem', paddingBottom: '4rem', textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 style={{ fontSize: '3.8rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                        Company <span className="text-yellow">Profile.</span>
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7, fontWeight: 400 }}>
                        46+ years of specialized expertise delivering world-class electrical engineering across Southeast Asia and beyond.
                    </p>
                </motion.div>
            </div>

            <div className="container" style={{ paddingBottom: '6rem', position: 'relative', zIndex: 10 }}>

                {/* ─── KEY METRICS ─── */}
                <motion.div {...fadeUpParams} style={{ marginBottom: '4rem' }}>
                    <div className="metrics-strip">
                        {[
                            { value: "1978", label: "Heritage Since" },
                            { value: "200+", label: "Palm Oil Mills" },
                            { value: "223+", label: "Major Projects" },
                            { value: "10+", label: "Countries" },
                            { value: "40yrs", label: "Nestlé Partnership" },
                        ].map((m, i) => (
                            <div className="metric-card" key={i}>
                                <div className="metric-value">{m.value}</div>
                                <div className="metric-label">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ─── COMPANY OVERVIEW CARDS ─── */}
                <motion.div {...fadeUpParams} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                    <div className="solid-card" style={{ padding: '2.5rem', borderTop: '4px solid var(--accent-yellow)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '8px', flexShrink: 0 }}>
                            <Award size={32} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>Legacy of Excellence</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.02rem', margin: 0 }}>
                                Incorporated on <strong>19 October 1995</strong> as the formal successor to Syarikat Kejuruteraan Elektrik Lian Huat (est. 1978). Over <strong>46 years</strong> of end-to-end expertise in electrical engineering design, consulting, and maintenance.
                            </p>
                        </div>
                    </div>

                    <div className="solid-card" style={{ padding: '2.5rem', borderTop: '4px solid var(--accent-yellow)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '8px', flexShrink: 0 }}>
                            <Target size={32} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>Strategic Revenue Focus</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.02rem', margin: 0 }}>
                                <strong>65%</strong> — Palm Oil Mill, Chemical Processing, Refinery & Food Technology.<br />
                                <strong>35%</strong> — Biomass Power Plant & Water Treatment Plant.
                            </p>
                        </div>
                    </div>

                    <div className="solid-card" style={{ padding: '2.5rem', borderTop: '4px solid var(--accent-yellow)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '8px', flexShrink: 0 }}>
                            <Globe size={32} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>Global Footprint</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.02rem', margin: 0 }}>
                                Over <strong>223 major installations</strong> spanning Malaysia, Indonesia, Singapore, PNG, Philippines, Thailand, India, Australia, Solomon Islands, Ghana, Myanmar, Mexico, Latin America, and South Africa.
                            </p>
                        </div>
                    </div>

                    <div className="solid-card" style={{ padding: '2.5rem', borderTop: '4px solid var(--accent-yellow)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '8px', flexShrink: 0 }}>
                            <Handshake size={32} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>Long-Term Partnerships</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.02rem', margin: 0 }}>
                                An average <strong>21-year</strong> client relationship span. Key partnerships include Nestlé (since 1985), Dutch Lady/Lactalis, Central Sugars Refinery, and NBPOL (PNG).
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ─── CAPABILITY HIGHLIGHTS ─── */}
                <motion.div {...fadeUpParams} style={{ marginBottom: '5rem', background: 'var(--primary-navy)', borderRadius: 'var(--radius-md)', padding: '3.5rem', color: 'var(--text-light)' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
                        Capability <span className="text-yellow">Highlights</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <Briefcase size={24} />, text: "Contract capacity exceeding RM 10 million per project" },
                            { icon: <GraduationCap size={24} />, text: "In-house Professional Engineer for turnkey design & build" },
                            { icon: <ShieldCheck size={24} />, text: "Strong banking relationships ensuring on-schedule completion" },
                            { icon: <Users size={24} />, text: "Highly qualified engineers, designers, and 15+ skilled technicians" },
                            { icon: <Zap size={24} />, text: "Full HT/LT system expertise from 415V to 33kV (design capability up to 132kV)" },
                            { icon: <Award size={24} />, text: "Continuous in-house training and collaboration with technical colleges" },
                        ].map((cap, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--accent-yellow)', flexShrink: 0, marginTop: '2px' }}>{cap.icon}</div>
                                <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>{cap.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ─── CERTIFICATIONS TABLE ─── */}
                <motion.div {...fadeUpParams} style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-navy)' }}>Certifications & <span className="text-yellow">Credentials</span></h2>
                        <div className="section-divider" style={{ margin: '1rem auto 0' }}></div>
                    </div>
                    <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Certification</th>
                                    <th>Details</th>
                                    <th>Validity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {certifications.map((c, i) => (
                                    <tr key={i}>
                                        <td style={{ fontWeight: 600 }}>{c.cert}</td>
                                        <td>{c.detail}</td>
                                        <td><span style={{ fontWeight: 600, color: 'var(--primary-navy)' }}>{c.validity}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* ─── LEADERSHIP ─── */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-navy)' }}>Our <span className="text-yellow">Leadership</span></h2>
                    <div className="section-divider" style={{ margin: '1rem auto 0' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                    {directors.map((member, idx) => (
                        <motion.div
                            key={idx}
                            {...fadeUpParams}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="team-card"
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            {/* Initials Avatar */}
                            <div style={{
                                height: '200px',
                                background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-navy-light) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Subtle geometric pattern lines */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    opacity: 0.06,
                                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,1) 20px, rgba(255,255,255,1) 21px)',
                                }}></div>
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 184, 0, 0.12)',
                                    border: '3px solid var(--accent-yellow)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    <span style={{
                                        fontFamily: 'Outfit, sans-serif',
                                        fontSize: '2.2rem',
                                        fontWeight: 800,
                                        color: 'var(--accent-yellow)',
                                        letterSpacing: '1px'
                                    }}>
                                        {member.initials}
                                    </span>
                                </div>
                            </div>
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                                    {member.name}
                                </h3>
                                <div style={{ color: 'var(--accent-yellow)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                    {member.role}
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, flex: 1, marginBottom: 0 }}>
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ─── KEY PERSONNEL ─── */}
                <motion.div {...fadeUpParams} style={{ marginBottom: '4rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-navy)' }}>Key <span className="text-yellow">Personnel</span></h2>
                        <div className="section-divider" style={{ margin: '1rem auto 0' }}></div>
                    </div>
                    <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Expertise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {keyPersonnel.map((p, i) => (
                                    <tr key={i}>
                                        <td style={{ fontWeight: 600 }}>{p.name}</td>
                                        <td>{p.role}</td>
                                        <td style={{ fontSize: '0.93rem', color: 'var(--text-muted)' }}>{p.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* ─── LINK COMPANY ─── */}
                <motion.div {...fadeUpParams} style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    padding: '2.5rem',
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start'
                }}>
                    <div style={{ color: 'var(--primary-navy)', background: 'var(--bg-off-white)', padding: '0.85rem', borderRadius: '8px', flexShrink: 0 }}>
                        <Globe size={28} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '0.6rem' }}>Regional Partner: PT. Sempurna Wiratama Tehnik Lestari</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem', margin: 0 }}>
                            Based in Medan, Indonesia — our link company handles turnkey palm oil mill, rubber processing, and chemical processing projects, along with project trading and maintenance contracts across Indonesia.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
