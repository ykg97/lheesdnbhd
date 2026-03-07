import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Zap, Building, Droplets, GraduationCap, Factory, Ship, CheckCircle, Wrench, Award } from 'lucide-react';

const fadeUpParams = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" }
};

/* ─── FEATURED PROJECT ─── */
const featuredProject = {
    title: "Nestle Batu Tiga Cardamom Project",
    client: "Nestle Manufacturing Sdn Bhd",
    year: "2023",
    scope: "Main Switchboard (MSB) installation, MCC panel installation, Cable tray system, Power distribution & earthing system",
    description: "This project involved the installation and organization of electrical services within an industrial processing facility. The scope of work included structured cable management, stainless steel tray installation, and integration with process equipment systems.",
    scopeOfWorks: [
        "Installation of heavy-duty cable trays and vertical cable ladder systems",
        "Proper segregation and routing of power, control, and earthing cables",
        "Main Switchboard (MSB) installation",
        "MCC panel installation",
        "Power distribution power and control systems",
        "Compliance with industrial safety and quality standards",
    ],
    summary: "All cable management systems were installed with proper alignment, secure fastening, and clear labeling to ensure ease of maintenance and long-term reliability. Stainless steel tray and ladder works were completed with precision to meet hygienic and durability requirements suitable for industrial applications.",
    emphasis: "The project was executed with a strong emphasis on workmanship quality, safety compliance, and efficient space utilization within the plant environment.",
    images: [
        { src: "/images/nestle_site_crane.png", caption: "Construction site overview" },
        { src: "/images/nestle_cable_tray.png", caption: "Cable tray installation" },
        { src: "/images/nestle_mcc_panel.png", caption: "MCC panel & switchboard" },
        { src: "/images/nestle_welding.png", caption: "On-site welding works" },
    ],
};

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'palm', label: 'Palm Oil Mills' },
    { id: 'industrial', label: 'Industrial & Manufacturing' },
    { id: 'power', label: 'Power & Energy' },
    { id: 'water', label: 'Water Treatment' },
    { id: 'education', label: 'Education & Government' },
    { id: 'infra', label: 'Infrastructure' },
];

const projects = [
    {
        category: 'palm',
        title: "200+ Palm Oil Mills — Design & Build",
        period: "1985 – 2025",
        location: "Malaysia, Indonesia, Papua New Guinea, Philippines, Solomon Islands, Ghana, Myanmar, Latin America",
        description: "Complete electrical engineering design & build for over 200 palm oil mills (198 projects) across 10+ countries. Mills range from 60 to 180 tonnes capacity, including kernel crushing plants, biogas plants, and extensions.",
        highlights: ["First international mill: Kwae Palm Oil Mill, Ghana (1987)", "Latin America expansion: Cademas POM (2022), Palmenol POM (2024)", "Largest Papua New Guinea client: New Britain Palm Oil Limited (NBPOL) — multiple mills, biogas plants, domestic power systems"],
        image: "/images/project_3_factory.png",
        icon: <Building size={24} />
    },
    {
        category: 'industrial',
        title: "Nestlé Manufacturing — 40-Year Partnership",
        period: "1985 – Present",
        location: "Shah Alam, Petaling Jaya, Bintang, Chembong",
        description: "Continuous maintenance contract since 1985. Projects include 33kV/11kV power distribution, solar installations, VMS turnkey systems, WWTP, IT infrastructure, and production line extensions across all Malaysian facilities.",
        highlights: ["Continuous maintenance contract since 1985 — 40 years running", "33kV/11kV distribution and solar installations", "Complete electrical systems for new production lines"],
        image: "/images/project_1_power.png",
        icon: <Factory size={24} />
    },
    {
        category: 'industrial',
        title: "Dutch Lady — Facility Upgrades",
        period: "2019 – 2025",
        location: "Petaling Jaya",
        description: "Maintenance and upgrade projects across the Petaling Jaya plant, including HT 11kV systems, UHT plant electrical systems, and packing line installations.",
        highlights: ["HT 11kV system upgrades", "UHT plant electrical systems", "Packing line installations"],
        image: "/images/project_2_comm.png",
        icon: <Factory size={24} />
    },
    {
        category: 'industrial',
        title: "Central Sugars Refinery — Maintenance Contract",
        period: "1985 – 2018",
        location: "Malaysia",
        description: "Long-term maintenance contract spanning over three decades for Central Sugars Refinery, ensuring reliable electrical infrastructure for continuous refinery operations.",
        highlights: ["33-year maintenance partnership", "Industrial refinery electrical systems"],
        image: "/images/project_1_power.png",
        icon: <Factory size={24} />
    },
    {
        category: 'power',
        title: "Kim Hock Corporation — Biomass Power Plants",
        period: "2011",
        location: "Singapore",
        description: "Design and commissioning of biomass power plants for Kim Hock Corporation Singapore, including a 9.4MW biomass power plant and a 10MW recycling plant.",
        highlights: ["9.4MW biomass power plant", "10MW recycling plant"],
        image: "/images/project_1_power.png",
        icon: <Zap size={24} />
    },
    {
        category: 'power',
        title: "NBPOL Papua New Guinea — Biogas Power Plants",
        period: "2012",
        location: "Papua New Guinea",
        description: "Biogas CDM power plant installations for New Britain Palm Oil Limited (NBPOL) in Papua New Guinea, supporting clean energy generation from palm oil mill effluent.",
        highlights: ["Mosa CDM biogas plant", "Kumbango CDM biogas plant"],
        image: "/images/project_2_comm.png",
        icon: <Zap size={24} />
    },
    {
        category: 'power',
        title: "Steam Turbine & Diesel Generator Upgrading",
        period: "2013",
        location: "Papua New Guinea",
        description: "Steam turbine and diesel generator upgrading works in Papua New Guinea, handling systems up to 5000A capacity and 2MW turbines for industrial power generation.",
        highlights: ["Up to 5000A capacity systems", "2MW turbine installations"],
        image: "/images/project_3_factory.png",
        icon: <Zap size={24} />
    },
    {
        category: 'power',
        title: "Solar Plant Installations — Nestlé",
        period: "2013",
        location: "Bintang, Shah Alam",
        description: "Solar power plant installations for Nestlé manufacturing facilities at Bintang and Shah Alam, contributing to sustainable energy initiatives.",
        highlights: ["Nestlé Bintang solar installation", "Nestlé Shah Alam solar installation"],
        image: "/images/project_1_power.png",
        icon: <Zap size={24} />
    },
    {
        category: 'water',
        title: "Sg Terip Seremban — State Government WTP",
        period: "2012",
        location: "Seremban, Negeri Sembilan",
        description: "Electrical engineering for the Sg Terip Seremban State Government Water Treatment Plant, including 11kV distribution systems and transformer upgrades.",
        highlights: ["11kV distribution system", "Transformer upgrades"],
        image: "/images/project_2_comm.png",
        icon: <Droplets size={24} />
    },
    {
        category: 'water',
        title: "KLIA Water Treatment Plant",
        period: "2012",
        location: "KLIA, Sepang",
        description: "Transformer upgrading works for the KLIA Water Treatment Plant, ensuring reliable power supply for water treatment operations at Malaysia's primary international airport.",
        highlights: ["Transformer upgrades", "Critical airport water infrastructure"],
        image: "/images/project_1_power.png",
        icon: <Droplets size={24} />
    },
    {
        category: 'water',
        title: "Nestlé WWTP Projects",
        period: "2025",
        location: "Shah Alam, Chembong",
        description: "Wastewater Treatment Plant (WWTP) electrical engineering projects for Nestlé manufacturing facilities at Shah Alam and Chembong.",
        highlights: ["Shah Alam WWTP", "Chembong WWTP"],
        image: "/images/project_3_factory.png",
        icon: <Droplets size={24} />
    },
    {
        category: 'education',
        title: "ADTEC Kemuning Shah Alam",
        period: "2002",
        location: "Shah Alam, Selangor",
        description: "HT/LT electrical systems and training equipment installation for ADTEC Kemuning Shah Alam, a premier government advanced technology training centre.",
        highlights: ["HT/LT electrical systems", "Training equipment installation"],
        image: "/images/project_3_factory.png",
        icon: <GraduationCap size={24} />
    },
    {
        category: 'education',
        title: "Pusat Latihan Teknologi Tinggi",
        period: "2002",
        location: "Kota Kinabalu & Johor",
        description: "Electrical systems installation for high-technology training centres in Kota Kinabalu and Johor, supporting technical workforce development.",
        highlights: ["Kota Kinabalu facility", "Johor facility"],
        image: "/images/project_2_comm.png",
        icon: <GraduationCap size={24} />
    },
    {
        category: 'education',
        title: "IKBN — Multiple Campuses",
        period: "2003",
        location: "Bachok, Chembong, Kuala Perlis, Kinarut",
        description: "Electrical infrastructure installation across multiple IKBN (Institut Kemahiran Belia Negara) campuses nationwide.",
        highlights: ["IKBN Bachok", "IKBN Chembong, Kuala Perlis, Kinarut"],
        image: "/images/project_1_power.png",
        icon: <GraduationCap size={24} />
    },
    {
        category: 'education',
        title: "ILP Kuantan, BMI Pahang & PPK Sarawak",
        period: "2004",
        location: "Kuantan, Pahang, Sarawak",
        description: "Electrical systems for ILP Kuantan, BMI Pahang, and Pusat Pembangunan Kemahiran Sarawak — government technical education and skills development centres.",
        highlights: ["ILP Kuantan", "BMI Pahang", "Pusat Pembangunan Kemahiran Sarawak"],
        image: "/images/project_3_factory.png",
        icon: <GraduationCap size={24} />
    },
    {
        category: 'infra',
        title: "2nd Penang Bridge — Transformer Upgrading",
        period: "2025",
        location: "Penang, Malaysia",
        description: "Underground transformer upgrading works for the Jambatan Kedua (Second Penang Bridge), one of Malaysia's most significant infrastructure projects.",
        highlights: ["Underground transformer upgrading", "Critical national infrastructure project"],
        image: "/images/project_1_power.png",
        icon: <Building size={24} />
    },
    {
        category: 'infra',
        title: "KLIA — 20MVA Transformer Upgrading",
        period: "2024",
        location: "KLIA, Sepang",
        description: "Major 20MVA transformer upgrading at Kuala Lumpur International Airport, ensuring reliable power distribution for Malaysia's primary international aviation hub.",
        highlights: ["20MVA transformer upgrading", "Critical aviation infrastructure"],
        image: "/images/project_2_comm.png",
        icon: <Zap size={24} />
    },
    {
        category: 'infra',
        title: "Aries International Italy — Shipyard/Cruise MSB",
        period: "2025",
        location: "International",
        description: "Main Switchboard (MSB) upgrading for international shipyard and cruise vessel projects in collaboration with Aries International Italy — expanding into the maritime sector.",
        highlights: ["Shipyard / Cruise MSB upgrading", "International maritime collaboration"],
        image: "/images/project_3_factory.png",
        icon: <Ship size={24} />
    },
    {
        category: 'infra',
        title: "Ngeam Engineering, Array Metal, Castle Chemical",
        period: "2013",
        location: "Malaysia",
        description: "Factory electrical system installations for Ngeam Engineering, Array Metal, and Castle Chemical — delivering complete industrial electrical infrastructure.",
        highlights: ["Factory electrical systems", "Multiple industrial clients"],
        image: "/images/project_2_comm.png",
        icon: <Factory size={24} />
    },
];

const countries = [
    "Malaysia", "Indonesia", "Singapore", "Papua New Guinea", "Philippines",
    "Thailand", "India", "Australia", "Solomon Islands", "Ghana",
    "Myanmar", "Mexico", "Latin America", "South Africa"
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [featuredImageIdx, setFeaturedImageIdx] = useState(0);

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div style={{ paddingTop: '80px', backgroundColor: 'var(--bg-off-white)', minHeight: '100vh', position: 'relative' }}>
            <div className="hero-overlay" style={{ height: '350px', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 0 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '6rem', paddingBottom: '4rem', textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="page-hero-title" style={{ fontSize: '3.8rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                        Project <span className="text-yellow">Portfolio.</span>
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7, fontWeight: 400 }}>
                        223+ major projects completed across 10+ countries — from palm oil mills and power plants to national infrastructure.
                    </p>
                </motion.div>
            </div>

            {/* ═══════════════════════════════════════════
                FEATURED PROJECT SECTION
               ═══════════════════════════════════════════ */}
            <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '4px solid var(--accent-yellow)', position: 'relative', zIndex: 10 }}>
                <div className="container">
                    {/* Section Header */}
                    <motion.div {...fadeUpParams} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'var(--accent-yellow)', color: 'var(--primary-navy)',
                            padding: '0.5rem 1.25rem', borderRadius: '50px',
                            fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase',
                            letterSpacing: '1px', marginBottom: '1.25rem'
                        }}>
                            <Award size={16} /> Featured Project
                        </span>
                        <h2 style={{ fontSize: '2.6rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                            {featuredProject.title.split('Cardamom')[0]}<span className="text-yellow">Cardamom Project</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
                            Electrical Installation Works — Completed {featuredProject.year}
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <motion.div {...fadeUpParams} className="featured-project-grid" style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start'
                    }}>
                        {/* Left: Image Gallery */}
                        <div>
                            {/* Main Image */}
                            <div style={{
                                borderRadius: 'var(--radius-md)', overflow: 'hidden',
                                boxShadow: 'var(--shadow-lg)', marginBottom: '1rem',
                                aspectRatio: '4/3', position: 'relative'
                            }}>
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={featuredImageIdx}
                                        src={featuredProject.images[featuredImageIdx].src}
                                        alt={featuredProject.images[featuredImageIdx].caption}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                </AnimatePresence>
                                {/* Caption overlay */}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                    padding: '2rem 1.5rem 1rem',
                                    color: '#FFF', fontSize: '0.9rem', fontWeight: 500
                                }}>
                                    {featuredProject.images[featuredImageIdx].caption}
                                </div>
                            </div>

                            {/* Thumbnail Strip */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
                                {featuredProject.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setFeaturedImageIdx(idx)}
                                        style={{
                                            padding: 0, border: idx === featuredImageIdx ? '3px solid var(--accent-yellow)' : '3px solid transparent',
                                            borderRadius: '8px', overflow: 'hidden', cursor: 'pointer',
                                            aspectRatio: '1', transition: 'border-color 0.2s, opacity 0.2s',
                                            opacity: idx === featuredImageIdx ? 1 : 0.65,
                                            background: 'none'
                                        }}
                                    >
                                        <img src={img.src} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Project Details (kept concise to align with gallery height) */}
                        <div>
                            {/* Meta badges */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.75rem' }}>
                                <span style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-navy)',
                                    background: 'rgba(11, 36, 71, 0.06)', padding: '0.45rem 1rem', borderRadius: '50px'
                                }}>
                                    <Building size={14} /> {featuredProject.client}
                                </span>
                                <span style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-navy)',
                                    background: 'rgba(11, 36, 71, 0.06)', padding: '0.45rem 1rem', borderRadius: '50px'
                                }}>
                                    <Calendar size={14} /> Completed {featuredProject.year}
                                </span>
                            </div>

                            {/* Scope of Work tag */}
                            <div style={{
                                background: 'var(--bg-off-white)', borderRadius: 'var(--radius-md)',
                                padding: '1.25rem 1.5rem', marginBottom: '1.75rem',
                                borderLeft: '4px solid var(--accent-yellow)'
                            }}>
                                <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Scope of Work</p>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.6, fontWeight: 500 }}>{featuredProject.scope}</p>
                            </div>

                            {/* Description */}
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                                {featuredProject.description}
                            </p>

                            {/* Scope of Works List */}
                            <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Wrench size={18} /> Scope of Works
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {featuredProject.scopeOfWorks.map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                                        fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.5
                                    }}>
                                        <CheckCircle size={16} style={{ color: 'var(--accent-yellow)', flexShrink: 0, marginTop: '3px' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Full-width summary below the grid */}
                    <motion.div {...fadeUpParams} style={{
                        marginTop: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr',
                        gap: '2rem', alignItems: 'start'
                    }} className="featured-summary-grid">
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>
                            {featuredProject.summary}
                        </p>
                        <p style={{
                            color: 'var(--primary-navy)', fontSize: '0.95rem', lineHeight: 1.7,
                            fontWeight: 600, fontStyle: 'italic', margin: 0,
                            paddingLeft: '1.25rem', borderLeft: '3px solid var(--accent-yellow)'
                        }}>
                            {featuredProject.emphasis}
                        </p>
                    </motion.div>

                    {/* Key Highlights Bar */}
                    <motion.div {...fadeUpParams} className="featured-highlights-bar" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem',
                        marginTop: '3rem', background: 'var(--primary-navy)', borderRadius: 'var(--radius-md)',
                        padding: '2rem 2.5rem', color: '#FFF', textAlign: 'center'
                    }}>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-yellow)', marginBottom: '0.3rem' }}>40+ yrs</div>
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>Nestlé Partnership</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-yellow)', marginBottom: '0.3rem' }}>2023</div>
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>Project Completed</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-yellow)', marginBottom: '0.3rem' }}>100%</div>
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>Safety Compliance</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* ─── CATEGORY TABS ─── */}
                <div className="portfolio-tabs" style={{ marginTop: '3rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`portfolio-tab ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* ─── PROJECT CARDS ─── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingBottom: '4rem' }}>
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((proj, idx) => (
                            <motion.div
                                key={proj.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, delay: idx * 0.06 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '380px 1fr',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    border: '1px solid var(--border-light)'
                                }}
                                className="portfolio-item-card"
                            >
                                <div>
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        style={{ width: '100%', height: '100%', minHeight: '280px', objectFit: 'cover', display: 'block' }}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="portfolio-card-content">
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-navy)', background: 'rgba(11, 36, 71, 0.06)', padding: '0.35rem 0.85rem', borderRadius: '50px' }}>
                                            <Calendar size={14} /> {proj.period}
                                        </span>
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', background: 'var(--bg-off-white)', padding: '0.35rem 0.85rem', borderRadius: '50px' }}>
                                            <MapPin size={14} /> {proj.location}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                                        {proj.title}
                                    </h3>
                                    <p className="line-clamp-3" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                                        {proj.description}
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {proj.highlights.map((h, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'baseline', fontSize: '0.93rem', color: 'var(--text-dark)' }}>
                                                <span style={{ color: 'var(--accent-yellow)', fontWeight: 700, fontSize: '0.8rem' }}>▸</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* ─── GLOBAL PRESENCE ─── */}
                <motion.div {...fadeUpParams} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>Global <span className="text-yellow">Presence</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem' }}>Countries and regions where L.H.E.E. has delivered projects</p>
                </motion.div>
                <motion.div
                    {...fadeUpParams}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', paddingBottom: '6rem' }}
                >
                    {countries.map((c, i) => (
                        <motion.span
                            key={i}
                            className="country-tag"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.25, delay: i * 0.03 }}
                        >
                            <MapPin size={14} /> {c}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .portfolio-item-card {
                        grid-template-columns: 1fr !important;
                    }
                    .portfolio-item-card > div:first-child img {
                        max-height: 250px;
                    }
                }
            `}</style>
        </div>
    );
}
