import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-company">
                        <Link to="/" className="footer-logo">
                            <span className="text-yellow">L.H.E.E.</span> <span>Sdn Bhd</span>
                        </Link>
                        <p className="footer-reg">
                            Registration No: 364090-V<br />
                            Incorporated: 19 October 1995
                        </p>
                    </div>

                    {/* Accent Divider */}
                    <div className="footer-divider" />

                    {/* Contact Details */}
                    <div className="footer-contact">
                        <p>
                            No. 18, Jalan Permata 2B KS/9,
                            Taman Perindustrian Air Hitam,<br />
                            41200 Klang, Selangor D.E.
                        </p>
                        <p>
                            Tel: +603-3123 1190 &nbsp;|&nbsp; Email: lhee.max@gmail.com
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <span>&copy; {new Date().getFullYear()} L.H.E.E. Sdn Bhd. All rights reserved.</span>
                    <span>Electrical Engineering Excellence Since 1978.</span>
                </div>
            </div>
        </footer>
    );
}
