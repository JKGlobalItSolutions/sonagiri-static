import React from "react";


import encroachment from  "../assets/services/encroachment.jpg";
import Frequent from  "../assets/services/Frequent.jpg";

import regularly from  "../assets/services/regularly.jpg";
import schedules from  "../assets/services/schedules.jpg";

import attempts from  "../assets/services/attempts.jpg";
import Personalized  from  "../assets/services/Personalized.jpg";




 

const PlotMonitoring = () => {
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
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Top Icon Row */}
      <section className="py-4 border-bottom">
        <div className="container">
          <div className="row text-center g-4">
            {[
              { label: "Regular Monitoring", icon: "bi-eye" },
              { label: "Reporting", icon: "bi-journal-text" },
              { label: "Digital reporting", icon: "bi-laptop" },
              { label: "Inspection schedules", icon: "bi-calendar-check" },
              { label: "Prior alerts", icon: "bi-exclamation-circle" },
              { label: "Property visit", icon: "bi-person-walking" },
            ].map((item, index) => (
              <div key={index} className="col-6 col-md-3 col-lg-2">
                <div>
                  <div className="fs-1 text-danger mb-2">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div className="fw-semibold">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-5">
        <div className="container">
          {/* Block 1 */}
          <div className="row align-items-center mb-5 bg-light p-4 rounded">
            <div className="col-md-6">
              <h6 className="text-uppercase text-muted mb-2">
                Regular Monitoring
              </h6>
              <h3 className="fw-bold mb-3">Free from encroachment</h3>
              <p>
                Regular Monitoring of plots to ensure that the plot is free from
                encroachment.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={encroachment}
                alt="Regular Monitoring"
                className="img-fluid rounded w-50"
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-1 order-2">
              <img
                src={Frequent }
                alt="Reporting"
                className="img-fluid rounded w-50"
              />
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <h6 className="text-uppercase text-muted mb-2">Reporting</h6>
              <h3 className="fw-bold mb-3">
                Frequent updates about plot status
              </h3>
              <p>
                Regular reporting on the status on the cleanliness of the plots.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="row align-items-center mb-5 bg-light p-4 rounded">
            <div className="col-md-6">
              <h6 className="text-uppercase text-muted mb-2">
                Digital Reporting
              </h6>
              <h3 className="fw-bold mb-3">
                Photos update for your property regularly
              </h3>
              <p>Digital pictures and reports of the plots will be sent.</p>
            </div>
            <div className="col-md-6">
              <img
                src={regularly}
                alt="Digital Reporting"
                className="img-fluid rounded w-50"
              />
            </div>
          </div>

          {/* Block 4 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-1 order-2">
              <img
                src={schedules}
                alt="Inspection Schedules"
                className="img-fluid rounded w-50"
              />
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <h6 className="text-uppercase text-muted mb-2">
                Inspection Schedules
              </h6>
              <h3 className="fw-bold mb-3">Customized property schedules</h3>
              <p>
                Bases on client's requirement number of visits per year can be
                scheduled.
              </p>
            </div>
          </div>

          {/* Block 5 */}
          <div className="row align-items-center mb-5 bg-light p-4 rounded">
            <div className="col-md-6">
              <h6 className="text-uppercase text-muted mb-2">Prior Alerts</h6>
              <h3 className="fw-bold mb-3">
                Give you prior alert about encroach attempts
              </h3>
              <p>
                We will update on the status of the plot and warn if we see or
                anticipate any attempts to encroach.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={attempts}
                alt="Prior Alerts"
                className="img-fluid rounded w-50"
              />
            </div>
          </div>

          {/* Block 6 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-1 order-2">
              <img
                src={Personalized }
                alt="Property Visit"
                className="img-fluid rounded w-50"
              />
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <h6 className="text-uppercase text-muted mb-2">Property Visit</h6>
              <h3 className="fw-bold mb-3">
                Personalized service with every visit
              </h3>
              <p>
                Show property to the plots to your relatives who don't even know
                where it is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h4 className="fw-bold mb-3">NEED MORE INFO? CONTACT US NOW!</h4>
          <p className="mb-4">"Share Your Queries, Make Informed Decisions"</p>
          <a href="#contact" className="btn btn-outline-light">
            CONTACT US
          </a>
        </div>
      </section>
    </>
  );
};

export default PlotMonitoring;
