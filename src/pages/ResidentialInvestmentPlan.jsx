import React from "react";
import { FaStar, FaBuilding } from "react-icons/fa";

const ResidentialInvestmentPlan = () => {
  return (
    <div className="container-fluid p-0">
      {/* Banner */}
      <div
        className="position-relative text-center text-white"
        style={{
          backgroundImage: 'url("/your-banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
        }}
      >
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">RESIDENTIAL INVESTMENT PLAN</h1>
        </div>
      </div>

      {/* Plans Icons */}
      <div className="container py-4">
        <div className="row text-center justify-content-center">
          <div className="col-6 col-md-2 mb-3">
            <FaStar size={30} className="text-primary mb-2" />
            <p className="mb-0 small">Platinum Plan</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <FaBuilding size={30} className="text-primary mb-2" />
            <p className="mb-0 small">Emerald Plan</p>
          </div>
        </div>
      </div>

      {/* Platinum Plan */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h6 className="text-uppercase text-primary">Platinum Plan</h6>
            <h3>Investment-Platinum</h3>
            <p>
              Investment of just 15 Lakhs initially will get an apartment with
              luxurious living in the heart of Chennai IT Corridor. Top CBSE
              schools and colleges nearby, along with multi-facility hospitals.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/your-image1.jpg"
              alt="Platinum Plan"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Emerald Plan */}
      <div className="container my-5">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-7">
            <h6 className="text-uppercase text-primary">Emerald Plan</h6>
            <h3>Investment-Emerald</h3>
            <p>
              Investment of just 30 Lakhs initially will get an apartment with
              luxurious interiors and AC in all bedrooms, along with a modular
              kitchen. Top CBSE schools and colleges nearby, with multi-facility
              hospitals.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/your-image2.jpg"
              alt="Emerald Plan"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        className="text-center text-white py-5"
        style={{
          backgroundImage: 'url("/your-banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2>NEED MORE INFO? CONTACT US NOW!</h2>
        <p>"Share Your Queries, Make Informed Decisions."</p>
        <button className="btn btn-primary">Contact Us</button>
      </div>
    </div>
  );
};

export default ResidentialInvestmentPlan;
