import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Price from './pages/Price';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>  {/* ✅ add this */}
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/price" element={<Price />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
