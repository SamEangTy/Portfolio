
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Project from "./components/project/Project.jsx";
import Work from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Project/>
        <Work/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
