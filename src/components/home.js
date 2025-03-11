import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { FaHandPeace, FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { useState } from "react";

import "../styles/home.css";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="home-container">
            {/* Header */}
            <div className="home-header">
                <div className="home-box1">
                    <h2>Ayussh Raaj</h2>
                </div>
                <div className={`home-box3 ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={30} color="#00ccff" /> : <FaBars size={30} color="#00ccff" />}
                </div>
                {/* <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav> */}
            </div>

            {/* Hero Section */}
            <div className="home-hero">
                <div className="home-hr1">
                    <h3>Hi! There <FaHandPeace className="wave-icon" size={50} color="orange" /></h3>
                    <h3>I'm <span style={{ color: "#00ccff" }}>Ayussh Raaj</span></h3>
                    <h4>
                        I am from Bhubaneswar, India. I am a 2nd-year student pursuing B.Tech in CSE at IIIT Bhubaneswar, BBSR. Additionally, I am a
                    </h4>
                    <div className="typed-text">
                        <ReactTyped
                            strings={[
                                "Web Developer",
                                "Software Developer"
                            ]}
                            typeSpeed={90}
                            backSpeed={50}
                            loop
                        />
                    </div>
                </div>
                <div className="home-hr2">
                    <div className="i"></div>
                </div>
            </div>

            {/* Footer */}
            <div className="home-footer">
                <p>Copyright &copy; Ayussh Raaj</p>
            </div>
        </div>
    );
}

export default Home;
