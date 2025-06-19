// src/components/PropertyManagement.jsx

import React from "react";
import { Link } from "react-router-dom";

//  image imports
import Assessmen from "../assets/services/Assessmen.jpg";
import Visibility from  "../assets/services/Visibility.jpg";
import Tenants from  "../assets/services/Tenants.jpg";
import Documentation  from  "../assets/services/Documentation .jpg";
import Monitoring from  "../assets/services/Monitoring.jpg";
import Management from  "../assets/services/Management.jpg";
import Repairs from  "../assets/services/Repairs.jpg";



Assessmen

const PropertyManagement = () => {
  return (
    <>
     {/* Hero Section */}
<section className="py-5 bg-light text-center">
  <div className="container">
    <h1 className="fw-bold mb-4">WE CARE FOR YOUR PROPERTY</h1>
    <img
      src="your-image-path-here.jpg"
      alt="We care for your property"
      className="img-fluid rounded"
      style={{ maxHeight: '400px', objectFit: 'cover' }}
    />
  </div>
</section>


      {/* Icon Services Row */}
      <section className="py-4 border-bottom">
        <div className="container-fluid">
          <div className="row text-center g-4">
            {[
              { label: "Inspect & Evaluation", icon: "bi-search" },
              { label: "Marketing", icon: "bi-megaphone-fill" },
              { label: "Tenant Screening", icon: "bi-person-lines-fill" },
              { label: "Contracts & Agreements", icon: "bi-file-earmark-text" },
              { label: "Regular Inspection", icon: "bi-clipboard-check" },
              { label: "Bill Payment", icon: "bi-credit-card-2-front-fill" },
              { label: "Maintenance", icon: "bi-tools" },
            ].map((item, index) => (
              <div key={index} className="col-6 col-md-3 col-lg-2">
                <div className="p-2">
                  <div
                    className="fs-2 mb-2 text-primary"
                    style={{ fontSize: "40px" }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div className="fw-semibold">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



        {/* Service Details Section */}
      <section className="py-5">
        <div className="container-fluid">
          {/* Inspect & Evaluation */}
          <div className="row align-items-center mb-5 bg-light p-3 rounded">
            <div className="col-md-6">
              <h6 className="text-uppercase text-muted mb-2">
                Inspect & Evaluation
              </h6>
              <h3 className="fw-bold mb-3">Thorough Property Assessment</h3>
              <p>
                Our professionals carry out in-depth inspections of your
                property—inside and out—to evaluate its condition, estimate
                rental value, and prepare it for market positioning with
                confidence.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={Assessmen}
                alt="Inspect"
                className="img-fluid rounded w-75"
              />
            </div>
          </div>

          {/* Marketing */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-1 order-2">
              <img
                src={Visibility}
                alt="Marketing"
                className="img-fluid rounded w-75"
              />
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <h6 className="text-uppercase text-muted mb-2">Marketing</h6>
              <h3 className="fw-bold mb-3">Boost Your Property’s Visibility</h3>
              <p>
                We use high-impact marketing techniques across digital platforms
                and local networks to attract the right tenants faster and
                reduce property vacancy periods significantly.
              </p>
            </div>
          </div>

          {/* Tenant Screening */}
          <div className="row align-items-center mb-5 bg-light p-4 rounded">
            <div className="col-md-6">
              <h6 className="text-uppercase text-muted mb-2">
                Tenant Screening
              </h6>
              <h3 className="fw-bold mb-3">Reliable Tenant Selection</h3>
              <p>
                Every applicant is vetted through background checks, employment
                verification, and rental history analysis to ensure dependable,
                respectful tenants for your property.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={Tenants}
                alt="Screening"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Contracts & Agreements */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-1 order-2">
              <img
                src={Documentation}
                alt="Contracts"
                className="img-fluid rounded w-75"
              />
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <h6 className="text-uppercase text-muted mb-2">
                Contracts & Agreements
              </h6>
              <h3 className="fw-bold mb-3">
                Professional Documentation Support
              </h3>
              <p>
                We draft and manage legal documents—including rental contracts,
                extensions, and notices—ensuring compliance and smooth
                interactions between all parties.
              </p>
            </div>
          </div>

          {/* Regular Inspection */}
          <div className="row align-items-center mb-5 bg-light p-4 rounded">
            <div className="col-md-6">
              <h6 className="text-uppercase text-muted mb-2">
                Regular Inspection
              </h6>
              <h3 className="fw-bold mb-3">Proactive Property Monitoring</h3>
              <p>
                We schedule periodic inspections to ensure tenant care and
                property upkeep. Detailed reports are shared to keep you
                informed and in control.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={Monitoring}
                alt="Inspection"
                className="img-fluid rounded w-75"
              />
            </div>
          </div>

          {/* Bill Payment */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-1 order-2">
              <img
                src={Management}
                alt="Bill Payment"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <h6 className="text-uppercase text-muted mb-2">Bill Payment</h6>
              <h3 className="fw-bold mb-3">Effortless Utility Management</h3>
              <p>
                We handle utility payments, property taxes, and other dues on
                your behalf—ensuring timely payments and keeping your finances
                on track.
              </p>
            </div>
          </div>

          {/* Maintenance */}
          <div className="row align-items-center mb-5 bg-light p-4 rounded">
            <div className="col-md-6">
              <h6 className="text-uppercase text-muted mb-2">Maintenance</h6>
              <h3 className="fw-bold mb-3">On-Demand Repairs & Upkeep</h3>
              <p>
                From minor fixes to major repairs, our trusted technicians
                ensure your property stays in excellent shape—saving you time
                and worry.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={Repairs}
                alt="Maintenance"
                className="img-fluid rounded w-75"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
   
<section className="py-5 bg-light">
  <div className="container">
    <h3 className="fw-bold mb-4 text-center">
      Frequently Asked Questions
    </h3>
    <div className="accordion" id="faqAccordion">
      {[
        {
          question: "How often is a property inspection conducted?",
          answer:
            "We typically conduct property inspections every 3 to 6 months, depending on your preference and property needs. Detailed reports are shared after each visit."
        },
        {
          question: "What is included in the rental agreement drafting service?",
          answer:
            "Our rental agreement drafting includes creating a legally compliant document tailored to your property, covering all key clauses to protect both landlord and tenant interests."
        },
        {
          question: "How are maintenance issues handled?",
          answer:
            "Our team manages all reported maintenance issues by coordinating with trusted service providers and ensuring timely resolution while keeping you updated at every step."
        },
        {
          question: "How do you screen potential tenants?",
          answer:
            "We perform thorough background checks, employment verifications, credit assessments, and rental history reviews to ensure we place reliable and responsible tenants."
        },
        {
          question: "What happens during an exit inventory check?",
          answer:
            "At the end of the lease, we conduct a detailed comparison of the property’s condition against the move-in inventory, documenting any damages and facilitating appropriate resolutions."
        }
      ].map((faq, index) => (
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
              {faq.question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Us CTA */}
      <section className="py-5 text-center bg-dark text-white">
        <div className="container">
          <h2 className="fw-bold mb-3">Need More Info? Contact Us Now!</h2>
          <p className="mb-4">Share your queries. Make informed decisions.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default PropertyManagement;
