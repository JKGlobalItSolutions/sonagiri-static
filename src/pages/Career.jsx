import React from 'react';

const Career = () => {
  return (
    <div className="min-vh-100 bg-light py-5 px-3 ">
      <div className="container text-center mb-5" >
        <h1 className="fw-bold mb-3" style={{ color: "#038A5E", fontSize: "2.5rem" }}>
          Join Our Team
        </h1>
        <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "700px" }}>
          At <strong>Sonagiri Property Management</strong>, we believe in building more than just properties — we build careers, relationships, and opportunities.
        </p>
      </div>

      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-white p-4 rounded shadow h-100">
              <h2 className="h4 fw-semibold text-dark mb-3">Why Work With Us?</h2>
              <ul className="list-unstyled ps-3 text-secondary">
                <li className="mb-2">• Collaborative and inclusive work culture</li>
                <li className="mb-2">• Opportunities for growth and learning</li>
                <li className="mb-2">• Performance-based incentives</li>
                <li className="mb-2">• Flexible work environment</li>
                <li className="mb-2">• Be part of transforming the real estate industry</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rounded overflow-hidden shadow">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1050&q=80"
                alt="Career at Sonagiri"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="bg-white p-5 rounded shadow mx-auto" style={{ maxWidth: "800px" }}>
          <h3 className="h4 fw-semibold text-dark mb-4">Current Openings</h3>
          <p className="text-secondary mb-4">
            We’re always on the lookout for passionate individuals. If you're interested in a career in real estate, property management, customer support, or administration, we'd love to hear from you.
          </p>

          <form className="row g-3">
            <div className="col-md-6">
              <input type="text" placeholder="Full Name" className="form-control" required />
            </div>
            <div className="col-md-6">
              <input type="email" placeholder="Email" className="form-control" required />
            </div>
            <div className="col-md-6">
              <input type="tel" placeholder="Phone Number" className="form-control" required />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Position Interested In" className="form-control" />
            </div>
            <div className="col-12">
              <textarea
                placeholder="Tell us about yourself"
                rows="4"
                className="form-control"
              ></textarea>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-success w-100 py-2 fw-bold"
                style={{ backgroundColor: "#038A5E" }}
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
