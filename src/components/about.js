import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { useState } from "react";
import "../styles/about.css";

function About() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="about-container">
            {/* Header Section */}
            <div className="about-header">
                <div className="about-box1">
                    <h2>Ayussh Raaj</h2>
                </div>
                <div className={`about-box3 ${menuOpen ? "active" : ""}`}>
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
            {/* About Section */}
            <div className="about-hero">
                <h1>About Me</h1>
                <p>
                    Hello! 👋 I'm <strong>Ayussh Raaj</strong>, a passionate web developer who loves creating dynamic and user-friendly web applications. 
                    I enjoy problem-solving, optimizing code, and continuously learning new technologies to improve my craft.
                </p>
                <p>
                    My journey in development started with curiosity and has grown into a strong passion for building innovative projects. 
                    Beyond coding, I'm also interested in cybersecurity, competitive programming, and content creation.
                </p>
                <p>
                    In my free time, you’ll often find me exploring new tech trends, working on exciting projects, or sharing knowledge through my 
                    YouTube channel. I'm always open to collaborations, discussions, and new opportunities—so feel free to connect with me! 🚀
                </p>
            </div>

            {/* Footer Section */}
            <div className="about-footer">
                <p>Copyright &copy; Ayussh Raaj</p>
            </div>
        </div>
    );
}

export default About;
