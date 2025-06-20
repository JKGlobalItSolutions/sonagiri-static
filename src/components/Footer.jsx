// src/components/Footer.jsx

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 text-sm mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Locations */}
          <div className="col-12 col-sm-6 col-md-3">
            <h4 className="fw-semibold mb-2" style={{ color: "#038A5E" }}>
              Global Locations (Sales & Marketing Offices)
            </h4>
            <p className="text-light">Tiruvannamalai</p>
            <h5 className="mt-3 fw-semibold" style={{ color: "#038A5E" }}>
              India
            </h5>
            <p className="text-light">(Tiruvannamalai)</p>
          </div>

          {/* Services 1 */}
          <div className="col-12 col-sm-6 col-md-2">
            <h4 className="fw-semibold mb-2" style={{ color: "#038A5E" }}>
              Services
            </h4>
            <ul className="list-unstyled text-light">
              <li>Property Management Companies in Tiruvannamalai</li>
            </ul>
          </div>

          {/* Services 2 */}
          <div className="col-12 col-sm-6 col-md-2">
            <h4 className="fw-semibold mb-2" style={{ color: "#038A5E" }}>
              Services
            </h4>
            <ul className="list-unstyled text-light">
              <li>Manage a Property in India</li>
              <li>Rental Property Management</li>
              <li>Services for Owners</li>
              <li>Property for Rent in Tiruvannamalai</li>
              <li>Property for Sale in Tiruvannamalai</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-md-2">
            <h4 className="fw-semibold mb-2" style={{ color: "#038A5E" }}>
              Company
            </h4>
            <ul className="list-unstyled text-light">
              <li>Our Team</li>
              <li>Partners</li>
              <li>Contact Us</li>
              <li>Social Artifacts</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-12 col-md-3">
            <h4 className="fw-semibold mb-2" style={{ color: "#038A5E" }}>
              Connect
            </h4>
            <div className="d-flex gap-3 mb-3 fs-5">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
              <FaYoutube />
            </div>
            <p className="d-flex align-items-center gap-2 text-light mb-2">
              <FaEnvelope /> sales@Sonachala plus.com
            </p>
            <p className="d-flex align-items-center gap-2 text-light mb-2">
              <FaPhoneAlt /> US: +1-248-275-5811
            </p>
            <p className="d-flex align-items-center gap-2 text-light">
              <FaPhoneAlt /> India: +91 7277-XXXXXX
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-top border-secondary pt-3 mt-4 text-center small text-secondary">
          <p className="mb-0">
            Copyright © 2025 by{" "}
            <span style={{ color: "#038A5E" }}>Sonachala plus</span> | All rights
            reserved |{" "}
            <a href="#" className="text-info text-decoration-none">
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
