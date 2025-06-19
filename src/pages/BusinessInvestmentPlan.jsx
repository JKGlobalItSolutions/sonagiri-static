import React from "react";

import Gold  from  "../assets/services/Gold.jpg";
import Diamond  from  "../assets/services/Diamond.jpg";
import Platinum  from  "../assets/services/Platinum.jpg";


import { FaRupeeSign, FaGem, FaStar } from "react-icons/fa";

const BusinessInvestmentPlan = () => {
  return (
    <div className="container-fluid p-0">
      {/* Banner */}
      <div
        className="position-relative text-center text-dark"
        style={{
          backgroundImage: 'url("/your-banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
        }}
      >
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">BUSINESS INVESTMENT PLAN</h1>
        </div>
      </div>

      {/* Plans Icons */}
      <div className="container py-4">
        <div className="row text-center">
          <div className="col-4">
            <FaRupeeSign size={30} className="text-primary mb-2" />
            <p className="mb-0 small">Gold Plan</p>
          </div>
          <div className="col-4">
            <FaGem size={30} className="text-primary mb-2" />
            <p className="mb-0 small">BIP Diamond Plan</p>
          </div>
          <div className="col-4">
            <FaStar size={30} className="text-primary mb-2" />
            <p className="mb-0 small">BIP Platinum Plan</p>
          </div>
        </div>
      </div>

      {/* Gold Plan */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h6 className="text-uppercase text-primary">Gold Plan</h6>
            <h3>Investment-Gold</h3>
            <p>
              Investment for a fixed period of time with a monthly interest of
              12% credited to your bank account or cash. The investment can be
              any multiple of the base investment amount.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src={Gold}
              alt="Gold Plan"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Diamond Plan */}
      <div className="container my-5">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-7">
            <h6 className="text-uppercase text-primary">BIP Diamond Plan</h6>
            <h3>Investment Diamond</h3>
            <p>
              Investment for a fixed period of time with a monthly interest of
              12% credited to your bank account or cash. The investment can be
              any multiple of the base investment amount. Bonus will not be
              applicable if withdrawn before the maturity period.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src={Diamond}
              alt="Diamond Plan"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Platinum Plan */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h6 className="text-uppercase text-primary">BIP Platinum Plan</h6>
            <h3>Investment-Platinum</h3>
            <p>
              Investment for a fixed period of time with a monthly interest of
              12% credited to your bank account or cash. The investment can be
              any multiple of the base investment amount. Bonus will not be
              applicable if withdrawn before the maturity period.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src={Platinum}
              alt="Platinum Plan"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        className="text-center text-dark py-5"
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

export default BusinessInvestmentPlan;
