import React from "react";

import Comfortablee  from  "../assets/services/Comfortablee.jpg";


import {
  FaHome,
  FaLock,
  FaTint,
  FaCheckCircle,
  FaGlobe,
  FaPlus,
} from "react-icons/fa";

const HappyHomeStay = () => {
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
          <h1 className="fw-bold">HAPPY HOME STAY</h1>
        </div>
      </div>

      {/* Icons */}
      <div className="container py-4">
        <div className="row text-center justify-content-center">
          <div className="col-4 col-md-2 mb-3">
            <FaHome size={28} className="text-primary mb-2" />
            <p className="mb-0 small">Happy Home Stay</p>
          </div>
          <div className="col-4 col-md-2 mb-3">
            <FaLock size={28} className="text-primary mb-2" />
            <p className="mb-0 small">24hrs Security</p>
          </div>
          <div className="col-4 col-md-2 mb-3">
            <FaTint size={28} className="text-primary mb-2" />
            <p className="mb-0 small">24hrs Water Supply</p>
          </div>
          <div className="col-4 col-md-2 mb-3">
            <FaCheckCircle size={28} className="text-primary mb-2" />
            <p className="mb-0 small">Well Maintained</p>
          </div>
          <div className="col-4 col-md-2 mb-3">
            <FaGlobe size={28} className="text-primary mb-2" />
            <p className="mb-0 small">Promote Tourism</p>
          </div>
        </div>
      </div>

     {/* Section 1: Local Living */}
<div className="container my-5">
  <div className="row align-items-center">
    <div className="col-md-7">
      <h6 className="text-uppercase text-primary">Comfortable Stays</h6>
      <h3>Live Like a Local</h3>
      <p>
        Sonachala offers cozy, affordable rooms across Tamil Nadu — ideal for both short vacations and long stays. 
        Enjoy an authentic home-like experience while saving on travel costs.
      </p>
    </div>
    <div className="col-md-5 text-center">
      <img
        src={Comfortablee}
        alt="Live Like a Local"
        className="img-fluid rounded"
      />
    </div>
  </div>
</div>

{/* Section 2: 24/7 Surveillance */}
<div className="container my-5">
  <div className="row align-items-center flex-md-row-reverse">
    <div className="col-md-7">
      <h6 className="text-uppercase text-primary">24x7 Surveillance</h6>
      <h3>Your Safety Is Our Priority</h3>
      <p>
        Round-the-clock monitoring with CCTV cameras and trained security personnel ensures a secure and peaceful stay 
        for all our guests.
      </p>
    </div>
    <div className="col-md-5 text-center">
      <img
        src="/your-image2.jpg"
        alt="Security System"
        className="img-fluid rounded"
      />
    </div>
  </div>
</div>

{/* Section 3: Water Supply */}
<div className="container my-5">
  <div className="row align-items-center">
    <div className="col-md-7">
      <h6 className="text-uppercase text-primary">24x7 Water Supply</h6>
      <h3>Uninterrupted Water Access</h3>
      <p>
        Each of our homes is equipped with a continuous water supply, ensuring maximum comfort and convenience during your stay.
      </p>
    </div>
    <div className="col-md-5 text-center">
      <img
        src="/your-image3.jpg"
        alt="Water Supply"
        className="img-fluid rounded"
      />
    </div>
  </div>
</div>

{/* Section 4: Cleanliness */}
<div className="container my-5">
  <div className="row align-items-center flex-md-row-reverse">
    <div className="col-md-7">
      <h6 className="text-uppercase text-primary">Clean & Fresh Ambience</h6>
      <h3>Professional Housekeeping</h3>
      <p>
        Enjoy spotless interiors maintained by trained staff. From bedroom to bathroom, we ensure a dust-free, hygienic, and inviting space.
      </p>
    </div>
    <div className="col-md-5 text-center">
      <img
        src="/your-image4.jpg"
        alt="Clean Environment"
        className="img-fluid rounded"
      />
    </div>
  </div>
</div>

{/* Section 5: Tourism */}
<div className="container my-5">
  <div className="row align-items-center">
    <div className="col-md-7">
      <h6 className="text-uppercase text-primary">Local Experiences</h6>
      <h3>Explore Culture & Community</h3>
      <p>
        We encourage responsible travel and cultural exchange by connecting guests with local traditions, people, and places — all while ensuring comfort.
      </p>
    </div>
    <div className="col-md-5 text-center">
      <img
        src="/your-image5.jpg"
        alt="Cultural Tourism"
        className="img-fluid rounded"
      />
    </div>
  </div>
</div>


     <div className="container my-5">
  <h4 className="text-center mb-4">YOUR QUESTIONS & OUR ANSWERS</h4>
  <div className="accordion" id="faqAccordion">
    {[
      {
        title: "What is an Inventory Check?",
        answer:
          "An inventory check involves documenting all items and their conditions before you move in or out. This protects both tenants and owners from disputes about damages or missing items."
      },
      {
        title: "How does Rental Agreement Drafting work?",
        answer:
          "We prepare legally compliant rental agreements tailored to your needs, covering key terms like rent, deposit, notice period, and maintenance responsibilities."
      },
      {
        title: "What Restrictions and Responsibilities should I know?",
        answer:
          "We explain rules related to property usage, maintenance, pet policies, subletting, and other important conditions to ensure smooth tenancy."
      },
      {
        title: "Why are Inspections important?",
        answer:
          "Regular inspections help maintain the property’s condition, identify repairs early, and ensure tenants follow agreement terms — providing peace of mind to both parties."
      },
      {
        title: "What happens during an Exit Inventory Check?",
        answer:
          "At the end of your tenancy, we perform an exit check to compare the property’s condition with the initial inventory. This determines any deductions from your security deposit fairly."
      }
    ].map((item, index) => (
      <div className="accordion-item" key={index}>
        <h2 className="accordion-header" id={`heading${index}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded="false"
            aria-controls={`collapse${index}`}
          >
            <FaPlus className="me-2" />
            {item.title}
          </button>
        </h2>
        <div
          id={`collapse${index}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${index}`}
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            {item.answer}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Call to Action */}
      <div
        className="text-center text-darg py-5 "
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

export default HappyHomeStay;
