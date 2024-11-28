// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import teaCozyLogo from '/src/assets/img-tea-cozy-logo.png';
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <a href="#mission" className="header-logo">
                <img
                    src={teaCozyLogo}
                    alt="The Tea Cozy logo"
                    className="logo-image"
                />
            </a>
            <button
                className="menu-toggle"
                aria-label="Toggle navigation"
                onClick={toggleMenu}
            >
                ☰
            </button>
            <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#mission" className="nav-link">
                            Mission
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#featured" className="nav-link">
                            Featured Tea
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#locations" className="nav-link">
                            Locations
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
