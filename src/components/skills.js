import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { useState } from "react";
import "../styles/Skills.css";

function Skills() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="skills-container">
            <div className="skills-header">
                <div className="skills-box1">
                    <h2>Ayussh Raaj</h2>
                </div>
                <div className={`skills-box3 ${menuOpen ? "active" : ""}`}>
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

            <div className="skills-hero">
                
                    <div className="lang">C</div>
                    <div className="lang">CPP</div>
                    <div className="lang">PYTHON</div>
                    <div className="lang">HTML</div>
                    <div className="lang">CSS</div>
                    <div className="lang">JS</div>
                    <div className="lang">REACT JS</div>
                    <div className="lang">EXPRESS JS</div>
                    <div className="lang">NODE JS</div>
                    <div className="lang">SQL</div>
                
            </div>

            <div className="skills-footer">
                <p>Copyright &copy; Ayussh Raaj</p>
            </div>
        </div>
    );
}

export default Skills;
