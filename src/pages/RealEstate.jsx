import React from "react";

const RealEstate = () => {
  return (
    <div className="container-fluid p-0">
      {/* Top banner with text */}
      <div
        className="position-relative text-center"
        style={{
          backgroundImage: `url(/path/to/your/banner-image.png)`, // Replace with your uploaded image path or import
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="position-absolute top-50 start-50 translate-middle text-white bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold display-4">Real Estate</h1>
          <p className="lead">
            Reliable & Transparent Buying & Selling Assistance
          </p>
        </div>
      </div>

      {/* Intro content */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://www.sathyaresidency.in/assets/images/service/realestate.jpg"
              alt="360 Real Estate - Buying & Selling"
              className="img-fluid rounded shadow"
            />
            <p className="mt-2 fw-bold">360 Real Estate - Buying & Selling</p>
          </div>
          <div className="col-md-6">
            <p>
              Our Real Estate services provide reliable, transparent property
              selling and buying assistance. People who want to buy or sell
              property often find the going tough as they are not able to
              evaluate local Real Estate market conditions due to poor access to
              legal information. With our analysis and information that we
              share, we will make sure you make highly informed choices every
              time. Our experienced team will guide you at every stage and make
              the deal a pleasant experience.
            </p>
            <p>
              We have become a trusted name among Non-residents, OCI, NRIs and
              we are highly recommended as a reputed Property Management and
              Real Estate company. The founders have more than 35 years of
              experience in Real Estate. Our services are currently available in
              all areas of Chennai and Coimbatore. Step by step process for
              buying and selling properties are given in detail below.
            </p>
          </div>
        </div>
      </div>


      {/* Buyer Support Program */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-5 text-success">
          Buyer Support Program
        </h2>

        <div className="row g-4">
          {/* Steps 1–6 */}
          {[
            {
              step: "Step 1",
              points: [
                "Preferred location(s) for purchase",
                "Desired property type — apartment, plot, villa, etc.",
                "Estimated budget",
                "Payment mode — outright or with a home loan",
              ],
            },
            {
              step: "Step 2",
              points: [
                "Sign MOU with 360 Property Management",
                "Pay non-refundable commitment of ₹10,000/-",
                "Adjustable against final service fee",
              ],
            },
            {
              step: "Step 3",
              points: [
                "360 Property Management shortlists suitable properties",
                "Prepare list of trusted builders",
                "Share current prices with buyer",
                "Buyer selects preferred options",
              ],
            },
            {
              step: "Step 4",
              points: [
                "Negotiate price and terms with builder",
                "Discuss installment plan (if under-construction)",
                "Verify legal documents (papers, approvals)",
                "Attorney fees apply as per MOU",
              ],
            },
            {
              step: "Step 5",
              points: [
                "Decide signing method (in-person/POA)",
                "Arrange POA document if needed",
                "Pay advance to builder",
                "Pay 25% of service fee to 360",
                "Receive updates, photos for ongoing projects",
                "Get payment & receipt assistance",
              ],
            },
            {
              step: "Step 6",
              points: [
                "Prepare sale deed",
                "Pay separate attorney fee",
                "Arrange stamp duty/eStamp",
                "Register after final payment",
                "Buyer bears registration cost",
                "Schedule inspection, handover documents",
              ],
            },
          ].map((stepData, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card shadow-sm h-100 border-success">
                <div className="card-header bg-success text-white fw-bold">
                  {stepData.step}
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {stepData.points.map((point, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start">
                        <span className="me-2 text-success">
                          <i className="bi bi-check-circle-fill"></i>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Optional Services */}
          <div className="col-12">
            <div className="card shadow border-0 mt-4">
              <div className="card-header bg-secondary text-white fw-bold">
                Optional Services (Extra Cost)
              </div>
              <div className="card-body">
                <ul className="row list-unstyled mb-0">
                  {[
                    "Ongoing Property Management",
                    "Tenant finding assistance",
                    "Modular Kitchen installation",
                    "Electrical work",
                    "Air conditioning setup",
                  ].map((service, i) => (
                    <li
                      key={i}
                      className="col-md-6 mb-2 d-flex align-items-start"
                    >
                      <span className="me-2 text-secondary">
                        <i className="bi bi-chevron-right"></i>
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RealEstate;
