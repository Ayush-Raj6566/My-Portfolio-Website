import React from "react";
import "./App.css"; 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Skills from "./components/skills";
import SpaceBackground from "./components/SpaceBackground"; // Import it here

function App() {
  return (
    <Router>
      <SpaceBackground /> 
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
