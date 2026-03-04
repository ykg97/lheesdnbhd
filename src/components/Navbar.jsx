import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/company-structure', label: 'Company' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <img src="/images/logo.png" alt="L.H.E.E. Sdn Bhd Logo" style={{ height: '42px', width: 'auto' }} />
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.5px' }}>
                        <span style={{ color: 'var(--primary-navy)' }}>L.H.E.E.</span>{' '}
                        <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Sdn Bhd</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="nav-links">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--primary-navy)',
                        padding: '0.5rem'
                    }}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="mobile-menu"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: '#FFFFFF',
                        borderTop: '1px solid var(--border-light)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        padding: '1.5rem 2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                        zIndex: 999
                    }}
                >
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                padding: '1rem',
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                color: location.pathname === link.path ? 'var(--primary-navy)' : 'var(--text-muted)',
                                borderRadius: '8px',
                                background: location.pathname === link.path ? 'var(--bg-off-white)' : 'transparent',
                                transition: 'all 0.2s'
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .nav-links { display: none !important; }
                    .mobile-menu-btn { display: block !important; }
                }
            `}</style>
        </nav>
    );
}
