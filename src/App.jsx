import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

    return (
      <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>

      <Footer 
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;