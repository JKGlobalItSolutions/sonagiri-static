import { useState } from "react";



import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";

import Price from "./pages/Price";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

// service inside compo
import PropertyManagement from "./pages/PropertyManagement"; // Import your component
import TenantManagement from "./pages/TenantManagement";
import PlotMonitoring from "./pages/PlotMonitoring";
import PackersMovers from "./pages/PackersMovers";
import ApartmentMaintenance from "./pages/ApartmentMaintenance";
import BusinessInvestmentPlan from "./pages/BusinessInvestmentPlan";
import ResidentialInvestmentPlan from "./pages/ResidentialInvestmentPlan";
import HappyHomeStay from "./pages/HappyHomeStay";
import RealEstate from "./pages/RealEstate";
import BuildingConstruction from "./pages/BuildingConstruction";

// propertites inside compo
import PropertyListings from "./pages/PropertyListings";



// support inside compo
import Faqpage from "./pages/Faqpage";







import "./App.css"; // Import your CSS file

function App() {







  //  this is empty array to store the product data to moredata section data  share 

  // const [empty, setempty] = useState([])



  return (
    <HashRouter>
      {" "}
      {/* ✅ add this */}
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />

          {/*  service inside compo */}

          <Route path="/property-management" element={<PropertyManagement />} />

          <Route path="/tenant-management" element={<TenantManagement />} />

          <Route path="/plot-monitoring" element={<PlotMonitoring />} />

          <Route path="/packers-movers" element={<PackersMovers />} />

              <Route path="/RealEstate" element={<RealEstate />} />
              <Route path="/BuildingConstruction" element={<BuildingConstruction />} />


              BuildingConstruction

          <Route
            path="/business-investment-plan"
            element={<BusinessInvestmentPlan />}
          />

          <Route
            path="/apartment-maintenance"
            element={<ApartmentMaintenance />}
          />

          <Route
            path="/residentialinvestmentplan"
            element={<ResidentialInvestmentPlan />}
          />

          <Route path="/happyhomestay" element={<HappyHomeStay />} />
        </Routes>

        {/*  propertites inside compo */}
        <Routes>
          <Route path="/PropertyListings" element={<PropertyListings />} />
        </Routes>


          {/*  support inside compo */}
 <Routes>
          <Route path="/Faqpage" element={<Faqpage/>} />
        </Routes>







        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
