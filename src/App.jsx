import Topbar from "./Components/Topbar/Topbar.jsx";
import Intro from "./Components/Intro/Intro.jsx"
import Portfolio from "./Components/Portfolio/Portfolio.jsx"
import Works from "./Components/Works/Works.jsx"
import Testimonials from "./Components/Testimonials/Testimonials.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import "./App.scss"
import { useState } from "react";
import Menu from "./Components/Menu/Menu.jsx";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
