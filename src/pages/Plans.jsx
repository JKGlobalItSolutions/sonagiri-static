import React from "react";

const Plans = () => {
  return (
    <div className="plans-page">
      {/* Hero Section */}
      {/* <section className="hero-section text-center py-5 bg-light" >
        <img
          src="data:image/jpeg;base64,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" // replace this path with your image path
          alt="Our Plans"
          className="img-fluid mb-4"
          style={{ Height: "auto", objectFit: "cover" }}
        />

        <h2 className="display-4 fw-bolder">Our Plans</h2>
        <p className="lead">
          We will help you to protect your property, supervise your tenant and
          collect your rent. Ideal for busy landlords.
        </p>
      </section> */}




 {/* Top Banner */}
      <div
        className="position-relative text-center mb-5"
        style={{
          backgroundImage: `url(https://www.google.com/imgres?q=property%20management%20images&imgurl=https%3A%2F%2Fpactsoft.com%2Findia%2Fassets%2Fimages%2Fmodule-page%2FProperty-Management-Software-in-India.jpg&imgrefurl=https%3A%2F%2Fpactsoft.com%2Findia%2Fmodules%2Fbest-property-management-software%2F&docid=7ZQGSHHTJeG-7M&tbnid=GnU9zpM7Se38bM&vet=12ahUKEwid_f2h-v-NAxWJslYBHT63MC8QM3oECGkQAA..i&w=1920&h=859&hcb=2&ved=2ahUKEwid_f2h-v-NAxWJslYBHT63MC8QM3oECGkQAA)`, // Replace this with your banner path
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="position-absolute top-50 start-50 translate-middle text-white bg-dark bg-opacity-50 p-4 rounded">
           <h2 className="display-4 fw-bolder">Our Plans</h2>
        <p className="lead">
          We will help you to protect your property, supervise your tenant and
          collect your rent. Ideal for busy landlords.
        </p>
        </div>
      </div>





      {/* Plans Table */}
      <section className="pricing-section container my-5">
        <h2 className="text-center mb-4">Plans & Pricing</h2>
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>
                  Plans & Pricing <br />
                  List Of Features
                </th>
                <th>
                  Silver <br />
                  (1 year)
                  <br />
                  ₹750 /month + GST
                  <br />
                  <button className="btn btn-primary mt-2">Enquire</button>
                </th>
                <th>
                  Gold <br />
                  (1 year)
                  <br />
                  ₹1250 /month + GST
                  <br />
                  <button className="btn btn-primary mt-2">Enquire</button>
                </th>
                <th>
                  Diamond <br />
                  (2 years)
                  <br />
                  ₹1000 /month + GST
                  <br />
                  <button className="btn btn-primary mt-2">Enquire</button>
                </th>
                <th>
                  Platinum <br />
                  (5 years)
                  <br />
                  ₹750 /month + GST
                  <br />
                  <button className="btn btn-primary mt-2">Enquire</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "Property Inspection",
                "Client PayCare (Bill Payments)",
                "Periodic Property Audit",
                "Scheduled Property Reports",
                "Periodic Property Updates",
                "Evaluate Property",
                "Determine accurate rental value",
                "Rental/Lease Agreement",
                "Free Rental Listings",
                "Rent Collections",
                "24/7 Support",
                "Marketing/Advertising",
                "Tenant Screening & Management",
                "Legal Documentation",
                "Police verification Certificate",
                "Evicting",
                "Plumbing, Electrical & Cleaning (Free Labour) - Yearly",
                "Free EC - yearly",
                "Investment Plans - Eligible",
              ].map((feature, index) => (
                <tr key={index}>
                  <td>{feature}</td>
                  {/* Sample Data for each column */}
                  <td>{index < 5 ? "✔️" : "❌"}</td>
                  <td>{index < 10 ? "✔️" : "❌"}</td>
                  <td>{index < 15 ? "✔️" : "❌"}</td>
                  <td>{index < 19 ? "✔️" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

<section className="info-section container my-5 p-5 rounded bg-white border shadow-sm">
  <h3 className="text-primary fw-bold mb-3">INVENTORY CHECK</h3>
  <p className="mb-4 text-secondary">
    Before any tenancy begins, our team performs a detailed property inspection to ensure everything is in top condition. This crucial step helps safeguard your investment by identifying and documenting any issues from the start, giving you complete peace of mind.
  </p>

  <h3 className="text-primary fw-bold mb-3">RENTAL/LEASE AGREEMENT</h3>
  <p className="mb-4 text-secondary">
    We expertly manage the drafting and finalization of rental or lease agreements, ensuring legal clarity and fairness for both property owners and tenants. For NRIs or those unable to attend in person, we offer Power of Attorney assistance to handle agreements on your behalf. You can rely on us for smooth, compliant, and hassle-free contract management.
  </p>

  <h3 className="text-primary fw-bold mb-3">EXPLAINING RESTRICTIONS AND RESPONSIBILITIES</h3>
  <p className="mb-4 text-secondary">
    We make sure both landlords and tenants fully understand all terms, restrictions, and responsibilities. From property usage rules to maintenance obligations, we clarify everything so both parties can enjoy a transparent and harmonious rental relationship.
  </p>

  <h3 className="text-primary fw-bold mb-3">REGULAR PROPERTY INSPECTION</h3>
  <p className="mb-4 text-secondary">
    Our dedicated team conducts routine inspections throughout the year to proactively monitor your property's condition. You’ll always be informed in advance, with detailed reports provided after each visit. We prioritize transparency and communication, helping you maintain your property effortlessly.
  </p>

  <h3 className="text-primary fw-bold mb-3">EXIT INVENTORY CHECK</h3>
  <p className="mb-4 text-secondary">
    At the end of each tenancy, we carry out a comprehensive inventory check to compare the property's current state with the initial records. This ensures any damage is properly addressed, protecting your investment and ensuring a smooth transition to the next tenant.
  </p>
</section>



      
    </div>
  );
};

export default Plans;
