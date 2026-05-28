import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-left">
                    <p>&copy; The Tea Cozy {year}</p>
                </div>
                <div className="footer-right">
                    <nav className="footer-nav" aria-label="Footer">
                        <a href="#mission">Mission</a>
                        <a href="#featured">Featured</a>
                        <a href="#locations">Locations</a>
                    </nav>
                    <nav className="footer-legal" aria-label="Legal">
                        <a href="/privacy.html">Privacy</a>
                        <a href="/terms.html">Terms</a>
                        <a href="/cookies.html">Cookies</a>
                        <a href="/accessibility.html">Accessibility</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
