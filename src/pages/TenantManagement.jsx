import React from 'react'

import Streamlined from  "../assets/services/Streamlined.jpg";
import Comfortable from  "../assets/services/Comfortable.jpg";

import Maintenance  from  "../assets/services/Maintenance .jpg";

import Transparent from  "../assets/services/Transparent.jpg";

import Assistance  from  "../assets/services/Assistance .jpg";

import Rentals from  "../assets/services/Rentals.jpg";

import Seamless  from  "../assets/services/Seamless.jpg";
// import Rentals from  "../assets/services/Rentals.jpg";
// import Rentals from  "../assets/services/Rentals.jpg";










const TenantManagement = () => {
  return (
    <div>

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


<section className="py-5">
  <div className="container-fluid">

    

  
{/* Top Icon Row */}
<div className="row text-center g-4 mb-5">
  {[
    { label: "Lease Agreements", icon: "bi-file-earmark-text" },
    { label: "Happy Living", icon: "bi-emoji-smile" },
    { label: "Property Maintenance", icon: "bi-tools" },
    { label: "No Brokerage Fees", icon: "bi-currency-exchange" },
    { label: "Rental Support", icon: "bi-headset" },
    { label: "Home Rentals", icon: "bi-house-door" },
    { label: "Transportation Assistance", icon: "bi-truck" }
  ].map((item, index) => (
    <div key={index} className="col-6 col-md-3 col-lg-2">
      <div>
        <div className="fs-1 text-primary mb-2">
          <i className={`bi ${item.icon}`}></i>
        </div>
        <div className="fw-semibold">{item.label}</div>
      </div>
    </div>
  ))}
</div>


    {/* Content Blocks */}

    {/* Lease Agreements */}
    <div className="row align-items-center mb-5 bg-light p-4 rounded">
      <div className="col-md-6">
        <h6 className="text-uppercase text-muted mb-2">Lease Agreements</h6>
        <h3 className="fw-bold mb-3">Streamlined Legal Documentation</h3>
        <p>
          Our expert team handles all legal formalities with precision, ensuring hassle-free lease agreements that protect your rights and provide clarity for both landlords and tenants.
        </p>
      </div>
      <div className="col-md-6">
        <img src={Streamlined} alt="Lease Agreements" className="img-fluid rounded w-75" />
      </div>
    </div>

    {/* Happy Living */}
    <div className="row align-items-center mb-5">
      <div className="col-md-6 order-md-1 order-2">
        <img src={Comfortable} alt="Happy Living" className="img-fluid rounded w-75" />
      </div>
      <div className="col-md-6 order-md-2 order-1">
        <h6 className="text-uppercase text-muted mb-2">Happy Living</h6>
        <h3 className="fw-bold mb-3">Creating Comfortable Living Experiences</h3>
        <p>
          We prioritize tenant satisfaction by creating welcoming living environments. Our proactive support ensures that your stay is stress-free and enjoyable from day one.
        </p>
      </div>
    </div>

    {/* Maintenance */}
    <div className="row align-items-center mb-5 bg-light p-4 rounded">
      <div className="col-md-6">
        <h6 className="text-uppercase text-muted mb-2">Property Maintenance</h6>
        <h3 className="fw-bold mb-3">Efficient Maintenance & Upkeep</h3>
        <p>
          Our maintenance services address repairs and routine upkeep with speed and professionalism, keeping your property in excellent condition and ensuring tenant comfort.
        </p>
      </div>
      <div className="col-md-6">
        <img src={Maintenance} alt="Maintenance" className="img-fluid rounded w-50" />
      </div>
    </div>

    {/* No Brokerage */}
    <div className="row align-items-center mb-5">
      <div className="col-md-6 order-md-1 order-2">
        <img src={Transparent} alt="No Brokerage" className="img-fluid rounded w-50" />
      </div>
      <div className="col-md-6 order-md-2 order-1">
        <h6 className="text-uppercase text-muted mb-2">No Brokerage Fees</h6>
        <h3 className="fw-bold mb-3">Transparent, Commission-Free Process</h3>
        <p>
          We simplify your rental experience with a no-brokerage approach, eliminating hidden costs and making it easier for you to secure your ideal property at the best value.
        </p>
      </div>
    </div>

    {/* Rental Support */}
    <div className="row align-items-center mb-5 bg-light p-4 rounded">
      <div className="col-md-6">
        <h6 className="text-uppercase text-muted mb-2">Rental Support</h6>
        <h3 className="fw-bold mb-3">Personalized Assistance for Every Tenant</h3>
        <p>
          Our team provides dedicated assistance for every tenant, helping with move-ins, documentation, and ongoing needs, ensuring a seamless rental journey from start to finish.
        </p>
      </div>
      <div className="col-md-6">
        <img src={Assistance} alt="Rental Support" className="img-fluid rounded w-50" />
      </div>
    </div>

    {/* Home Rentals */}
    <div className="row align-items-center mb-5">
      <div className="col-md-6 order-md-1 order-2">
        <img src={Rentals} alt="Home Rentals" className="img-fluid rounded w-50" />
      </div>
      <div className="col-md-6 order-md-2 order-1">
        <h6 className="text-uppercase text-muted mb-2">Home Rentals</h6>
        <h3 className="fw-bold mb-3">Find Your Ideal Rental Home</h3>
        <p>
          We help tenants discover the perfect rental property that fits their lifestyle and preferences — offering a wide range of well-maintained homes across desirable locations.
        </p>
      </div>
    </div>

    {/* Transportation */}
    <div className="row align-items-center mb-5 bg-light p-4 rounded">
      <div className="col-md-6">
        <h6 className="text-uppercase text-muted mb-2">Transportation Assistance</h6>
        <h3 className="fw-bold mb-3">Seamless Moving Support</h3>
        <p>
          Need help with transportation after your move? We assist in arranging transportation services to ensure a smooth and comfortable relocation experience for our tenants.
        </p>
      </div>
      <div className="col-md-6">
        <img src={Seamless} alt="Transportation" className="img-fluid rounded w-50" />
      </div>
    </div>

    {/* FAQ Accordion */}
    <div className="py-5">
      <h3 className="fw-bold mb-4 text-center">Your Questions & Our Answers</h3>
      <div className="accordion" id="tenantFAQAccordion">
        {[
          {
            question: "How do I apply for a rental property?",
            answer: "You can easily apply online through our website or visit our office to complete an application form. Our team will guide you through the entire process."
          },
          {
            question: "What maintenance services are provided?",
            answer: "We handle plumbing, electrical, carpentry, painting, and general repairs. Urgent issues are prioritized to ensure tenant comfort and safety."
          },
          {
            question: "Is there any brokerage or hidden fee?",
            answer: "No. We follow a transparent, no-brokerage policy. You only pay the clearly stated rental charges with no hidden fees."
          }
        ].map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`tenantHeading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#tenantCollapse${index}`}
                aria-expanded="false"
                aria-controls={`tenantCollapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`tenantCollapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`tenantHeading${index}`}
              data-bs-parent="#tenantFAQAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>




    </div>
  )
}

export default TenantManagement