import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

const BuildingConstruction = () => {
  const steps = [
    {
      title: "Step 1",
      items: [
        "Preferred location(s) for purchase",
        "Desired property type — apartment, plot, villa, etc.",
        "Estimated budget",
        "Payment mode — outright or with a home loan",
      ],
    },
    {
      title: "Step 2",
      items: [
        "Sign MOU with 360 Property Management",
        "Pay non-refundable commitment of ₹10,000/-",
        "Adjustable against final service fee",
      ],
    },
    {
      title: "Step 3",
      items: [
        "Preparation of Working Drawing by Contractor",
        "Estimate (Detailed Item wise)",
        "Timeline & cost proposal after site assessment",
        "Final specification document (based on Plot Survey, FMB, Plan approval)",
        "Final quote approval from client",
        "Advance Payment (10% of final estimate)",
      ],
    },
    {
      title: "Step 4",
      items: [
        "Electricity – temporary EB supply from department (Annexure 1)",
        "Work starts after required approvals from authorities",
        "Water Supply – if no borewell, water will be arranged externally",
      ],
    },
    {
      title: "Step 5",
      items: [
        "RCC Slab construction",
        "Foundation (based on soil condition)",
        "Basement work",
        "Column structure",
        "Roofing",
        "Brick work",
        "Door and window frame work",
      ],
    },
    {
      title: "Step 6",
      items: [
        "Electrical concealed work",
        "Wiring",
        "Interior plastering & design",
        "Aluminum sliding windows",
        "Gypsum partitions",
        "Overhead Tank (Annexure 2)",
        "Weathering course",
      ],
    },
    {
      title: "Step 7",
      items: [
        "Outer & inner painting",
        "Putty and primer work",
        "Vitrified Tiles (2x2)",
        "Door/window frames & veneer grills",
        "Toilet fittings",
        "Final polishing",
      ],
    },
    {
      title: "Step 8",
      items: [
        "Convert temporary electricity to permanent",
        "Drainage / Septic Tank (if needed)",
        "Construct septic tank if sewer unavailable",
        "Main water line connection",
        "Final painting touch-ups",
      ],
    },
  ];

  return (
    <div className="container py-5">
      {/* Top Banner */}
      <div
        className="position-relative text-center mb-5"
        style={{
          backgroundImage: `url(/path/to/your/banner-image.png)`, // Replace this with your banner path
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

      {/* Title Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">
          Real Estate – Building & Construction
        </h2>
        <h5 className="text-primary mt-3">Stage 1</h5>
        <h5 className="text-primary">Stage 2</h5>
        <p className="fw-semibold fs-5 mt-3">We build for you</p>
        <p className="text-muted">
          Our Building Services provides reliable and transparent building
          construction process.
        </p>
      </div>

      {/* Construction Cards */}
      <div className="row g-4 mb-5">
        {steps.map((step, index) => (
          <div className="col-md-6" key={index}>
            <div className="border rounded shadow-sm h-100">
              <div className="bg-success text-white p-2 fw-bold rounded-top">
                {step.title}
              </div>
              <div className="p-3">
                {step.items.map((item, idx) => (
                  <div className="d-flex align-items-start mb-2" key={idx}>
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Services Section */}
      <div className="mb-5">
        <h5 className="fw-bold text-primary">
          ADDITIONAL SERVICES BEYOND MAIN CONSTRUCTION
        </h5>
        <div className="row mt-4">
          {[
            "Security/Watchman cabin or visitor reception room",
            "Construction of compound wall or boundary fencing",
            "Customized interior decoration & designer false ceiling",
            "Overhead water tank (RCC construction)",
            "Extra parking bay for cars or two-wheelers",
            "Backup sump storage tank (as per requirement)",
          ].map((item, i) => (
            <div className="col-md-6 mb-2" key={i}>
              <div className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updated Payment Schedule */}
      <div className="mb-5">
        <h5 className="fw-bold">PAYMENT MILESTONES (Annexure 2)</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-success text-dark">
              <tr>
                <th>Stage</th>
                <th>Description</th>
                <th>Payment %</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Agreement Signing", "10%"],
                ["2", "Foundation Completion", "10%"],
                ["3", "1st Slab / Beam Completion", "10%"],
                ["4", "Ground Floor Roof Slab", "10%"],
                ["5", "First Floor Roof Slab", "10%"],
                ["6", "Second Floor Roof Slab", "10%"],
                ["7", "Brick Work Completed", "10%"],
                ["8", "Cement Plastering Finished", "10%"],
                ["9", "Flooring Completion", "7%"],
                ["10", "Electrical & Plumbing Finalization", "7%"],
                ["11", "Final Inspection / Handover", "6%"],
              ].map(([stage, description, percent], i) => (
                <tr key={i}>
                  <td>{stage}</td>
                  <td>{description}</td>
                  <td>{percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Flat Specifications */}
      <div>
        <h5 className="fw-bold">CONSTRUCTION SPECIFICATIONS & MATERIALS</h5>
        <p>
          Our building process involves high-quality materials and engineering
          expertise, including framed structures, RCC slabs, tiling, wiring, and
          aesthetic finishing.
        </p>

        <h5 className="fw-bold mt-4">AMENITIES PROVIDED IN EACH FLAT</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Feature</th>
                <th>Specification</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "1",
                  "Foundation",
                  "Reinforced Cement Concrete with framed structure",
                ],
                [
                  "2",
                  "Walls",
                  '9" exterior & 4" interior brick walls with cement plaster',
                ],
                [
                  "3",
                  "Flooring",
                  "800x800 mm vitrified tiles across all rooms",
                ],
                [
                  "4",
                  "Doors",
                  "Main door with teak frame; others with flush finish",
                ],
                [
                  "5",
                  "Windows",
                  "UPVC/Aluminium sliding windows with mosquito mesh",
                ],
                ["6", "Kitchen", "Granite counter + SS sink, 2 tap outlets"],
                [
                  "7",
                  "Bathroom",
                  "Anti-skid ceramic tiles, branded sanitaryware",
                ],
                [
                  "8",
                  "Electrical",
                  "Concealed copper wiring with modular switches",
                ],
                [
                  "9",
                  "Paint",
                  "Interior – emulsion; Exterior – weatherproof acrylic",
                ],
                [
                  "10",
                  "Water Supply",
                  "Overhead tank & sump with automatic motor control",
                ],
                [
                  "11",
                  "Ceiling",
                  "Designer false ceiling options (on request)",
                ],
              ].map(([sn, part, spec], i) => (
                <tr key={i}>
                  <td>{sn}</td>
                  <td>{part}</td>
                  <td>{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-warning">
          <strong>Note:</strong> Final pricing is subject to on-site assessment
          and may vary with design changes.
        </p>

        <p className="text-center mt-4 fw-semibold text-success">
          <a href="#" className="text-decoration-underline">
            View Portfolio of Completed Projects by Our Team
          </a>
        </p>
      </div>

    </div>
  );
};

export default BuildingConstruction;
