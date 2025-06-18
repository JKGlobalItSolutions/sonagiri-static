import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-light text-dark ">
      {/* Hero Section */}
      <section className="position-relative" style={{ height: "60vh", width: "100%" ,marginTop: "110px"}}>
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80"
          alt="Managed Property Building"
          className="w-100 h-100 object-fit-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
          <h1 className="text-white display-4 fw-bold text-center px-4">
            Welcome to Sonagiri Property Management
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-5">
        {/* Intro Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-semibold mb-4" style={{ color: "#038A5E" }}>Who We Are</h2>
            <p className="lead mb-4">
              <strong style={{ color: "#038A5E" }}>Sonagiri</strong> is a trusted name in professional property management,
              offering modern, reliable, and stress-free solutions for residential and commercial property owners.
            </p>
            <p className="lead mb-4">
              With deep market knowledge and a passion for excellence, we ensure every property is managed to its full potential—
              boosting ROI, retaining tenants, and maintaining long-term value.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80"
              alt="Sonagiri Management"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-white p-5 rounded shadow mb-5">
          <h2 className="fw-semibold mb-4 text-center">Our Mission & Vision</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="fw-bold mb-3" style={{ color: "#038A5E" }}>Our Mission</h3>
              <p>
                To deliver hassle-free, transparent, and efficient property management solutions that empower owners and elevate tenant satisfaction. 
                We are committed to protecting assets, maximizing income, and building long-term relationships based on trust and performance.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3" style={{ color: "#038A5E" }}>Our Vision</h3>
              <p>
                To be India’s most respected and innovative property management company, setting new standards in service, technology, and customer experience. 
                We envision a future where property ownership is effortless and rewarding for every client.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-5">
          <h2 className="fw-semibold mb-4 text-center" style={{ color: "#038A5E" }}>Our Core Services</h2>
          <div className="row g-4 text-center">
            {[
              "Tenant Solutions",
              "Property Maintenance",
              "Financial Reporting",
              "Legal Assistance",
              "Marketing & Listing",
              "Rent Collection"
            ].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="bg-white p-4 rounded shadow h-100 d-flex flex-column justify-content-start transition">
                  <h4 className="fw-bold mb-3" style={{ color: "#038A5E" }}>{service}</h4>
                  <p className="text-muted">
                    {service === "Tenant Solutions" && "From marketing to lease signing, we handle all tenant-related tasks to ensure your property remains occupied."}
                    {service === "Property Maintenance" && "Proactive repairs, 24/7 support, and regular inspections to keep properties top-tier and hassle-free."}
                    {service === "Financial Reporting" && "Transparent monthly reports and online dashboards help you stay updated with your property’s performance."}
                    {service === "Legal Assistance" && "Guidance on rental agreements, eviction processes, and compliance with local property laws."}
                    {service === "Marketing & Listing" && "Strategic online and offline marketing to attract quality tenants or buyers quickly."}
                    {service === "Rent Collection" && "Timely and secure rent collection with automated reminders and payment tracking."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-5">
          <h2 className="fw-semibold mb-3">Partner with Sonagiri</h2>
          <p className="mb-4">
            Discover smarter property management with Sonagiri. Let’s protect and grow your investment—together.
          </p>
          <Link
            to="/contact"
            className="btn btn-success px-4 py-2 rounded-pill shadow"
            style={{ backgroundColor: "#038A5E", borderColor: "#038A5E" }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
