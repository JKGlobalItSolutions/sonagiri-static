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

import PropertyDetails from "./pages/PropertyDetails";

// propertites inside compo
import PropertyListings from "./pages/PropertyListings";

// support inside compo
import Faqpage from "./pages/Faqpage";

// Admin page
import AdminLogin from "./adminpage/AdminLogin.jsx";
import PropertyForm from "./adminpage/PropertyForm";
import AdminPage from "./adminpage/AdminPage";
import PropertyList from "./adminpage/PropertyList";

import { PropertyProvider } from "../src/usecontext/PropertyContext.jsx"; // Import provider

function App() {
  return (
    <HashRouter>
      {" "}
      {/* ✅ add this */}
      <div>
        <PropertyProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/pricing" element={<Price />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            {/*  service inside compo */}
            <Route
              path="/property-management"
              element={<PropertyManagement />}
            />
            <Route path="/tenant-management" element={<TenantManagement />} />
            <Route path="/plot-monitoring" element={<PlotMonitoring />} />
            <Route path="/packers-movers" element={<PackersMovers />} />
            <Route path="/RealEstate" element={<RealEstate />} />
            <Route
              path="/BuildingConstruction"
              element={<BuildingConstruction />}
            />
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
            {/*  propertites inside compo */}
            <Route path="/PropertyListings" element={<PropertyListings />} />
            {/*  support inside compo */}
            <Route path="/Faqpage" element={<Faqpage />} />
            {/* Admin page */}
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/PropertyForm" element={<PropertyForm />} />
            <Route path="/AdminPage" element={<AdminPage />} />
            <Route path="/PropertyList" element={<PropertyList />} />
            {/* <Route path="/PropertyDetails" element={<PropertyDetails />} /> */}
            {/* <Route path="/PropertyDetails/:id" element={<PropertyDetails />} /> */}
            <Route path="/PropertyDetails/:id" element={<PropertyDetails />} />
          </Routes>

          <Footer />
        </PropertyProvider>
      </div>
    </HashRouter>
  );
}

export default App;
