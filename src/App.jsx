import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Make sure this path is correct
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Price from './pages/Price';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar  />
<div className=" ">



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/price" element={<Price />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      </div>

      <Footer /> {/* ✅ Add this to render the footer */}
    </div>
  );
}

export default App;
