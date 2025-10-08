import { Link } from "react-router-dom";
import navlogo from "../assets/navlogo/logo4.jpg"; // ✅ import logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        {/* Nav Image / Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={navlogo}
            alt="YourLogo"
            height="100"
            width="100px"
            className="d-inline-block align-text-top me-2 rounded-5"
          />

        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/"
                style={{ color: "#038A5E" }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/about"
                style={{ color: "#038A5E" }}
              >
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#038A5E" }}
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link className="dropdown-item" to="/property-management">
                    Property Management
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/tenant-management">
                    Tenant Management
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/RealEstate">
                    Real Estate
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/BuildingConstruction">
                    Builders
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/plot-monitoring">
                    Plot Monitering
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/packers-movers">
                    Packers Movers
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/apartment-maintenance">
                    Apartment Maintenance
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/happyhomestay">
                    happy homestay
                  </Link>
                </li>
              </ul>
            </li>

            {/* Properties Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#038A5E" }}
              >
                Properties
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link className="dropdown-item" to="/PropertyListings">
                    Property
                  </Link>
                </li>
              </ul>
            </li>

           
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/plans"
                style={{ color: "#038A5E" }}
              >
                Plans
              </Link>
            </li>


            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/career"
                style={{ color: "#038A5E" }}
              >
                Career
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/contact"
                style={{ color: "#038A5E" }}
              >
                Contact
              </Link>
            </li>
            {/* ------------------------ */}

          <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/AdminPage"
                style={{ color: "#038A5E" }}
              >
                AdminPage
              </Link>
            </li> 

            

            {/* Admin login */}
            <li className="nav-item">
              <Link
                to="/AdminLogin"
                className="btn btn-success px-3 py-1 fw-semibold d-flex align-items-center gap-2"
              >
                <i className="bi bi-person-circle"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
