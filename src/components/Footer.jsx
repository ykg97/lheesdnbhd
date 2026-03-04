import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <Link to="/" style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.5px', display: 'inline-block', marginBottom: '1.5rem', textDecoration: 'none' }}>
                            <span className="text-yellow">L.H.E.E.</span> <span style={{ color: '#FFFFFF' }}>Sdn Bhd</span>
                        </Link>
                        <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            Delivering world-class electrical engineering services since 1978. Specializing in palm oil mills, power plants, and industrial facility projects across 10+ countries.
                        </p>
                        <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                            Registration No: 364090-V<br />
                            Incorporated: 19 October 1995
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Navigation</h4>
                        <ul className="footer-link-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/company-structure">Company Profile</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Services</h4>
                        <ul className="footer-link-list">
                            <li><Link to="/company-structure" style={{ color: '#D1D5DB' }}>Design & Build</Link></li>
                            <li><Link to="/company-structure" style={{ color: '#D1D5DB' }}>Consulting</Link></li>
                            <li><Link to="/company-structure" style={{ color: '#D1D5DB' }}>Maintenance</Link></li>
                            <li><Link to="/company-structure" style={{ color: '#D1D5DB' }}>Testing & Commissioning</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Contact</h4>
                        <p style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                            No. 18, Jalan Permata 2B KS/9,<br />
                            Taman Perindustrian Air Hitam,<br />
                            41200 Klang, Selangor D.E.
                        </p>
                        <p style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: 1.8, margin: 0 }}>
                            Tel: +603-3123 1190<br />
                            Email: lhee.max@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div style={{
                    marginTop: '4rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    color: '#9CA3AF',
                    fontSize: '0.9rem',
                    fontWeight: 500
                }}>
                    <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} L.H.E.E. Sdn Bhd. All rights reserved.</p>
                    <p style={{ margin: 0 }}>Electrical Engineering Excellence Since 1978.</p>
                </div>
            </div>
        </footer>
    );
}
