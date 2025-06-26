import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import emailjs from "emailjs-com";

import PropertyListingsHome from "../pages/PropertyListingsHome.jsx";

// Assets
import banner from "../assets/banner/banner.png";
import visitImg from "../assets/services/visitImg.jpg";
import maintenanceImg from "../assets/services/maintenanceImg.jpg";
import tenantImg from "../assets/services/tenantImg.jpg";
import backgroundImg from "../assets/services/backgroundImg.jpg";
import rentImg from "../assets/services/rentImg.jpg";
import marketingImg from "../assets/services/marketingImg.jpg";
import openHouseImg from "../assets/services/openHouseImg.jpg";
import leadImg from "../assets/services/leadImg.jpg";

// WHAT WE OFFER

import ownerImg from "../assets/services/owner.jpg";
import rentalsImg from "../assets/services/rental.jpg";
import tenant from "../assets/services/tenant.jpg";

const Home = () => {
  const [startCount, setStartCount] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_emvfrmo",
        "template_szxp2yc",
        formData,
        "2K-8VzSS5KV80UWSh"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ANumber: ${formData.number}%0AMessage: ${formData.message}`;
          window.open(
            `https://wa.me/918438438413?text=${whatsappMessage}`,
            "_blank"
          );

          setFormData({ name: "", email: "", number: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      const stats = document.getElementById("stats-section");
      if (stats) {
        const rect = stats.getBoundingClientRect();
        if (rect.top < window.innerHeight && !startCount) {
          setStartCount(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const statsData = [
    { end: 6, label: "Metro Cities Served", emoji: "📍" },
    { end: 500, label: "Happy NRI Clients", emoji: "🌏" },
    { end: 1000, label: "Properties Managed", emoji: "🏘️" },
  ];

  const faqs = [
    {
      question: "What property services do you offer?",
      answer:
        "From finding tenants and collecting rent to maintenance and legal paperwork — we do it all, end-to-end.",
    },
    {
      question: "Which cities do you operate in?",
      answer:
        "We currently serve Tiruvannamalai, Mumbai, Hyderabad, Pune, Chennai, and Kolkata.",
    },
    {
      question: "Do I pay upfront for tenant placement?",
      answer:
        "No. We charge only after we've successfully placed a tenant in your home.",
    },
    {
      question: "How much does your service cost in Tiruvannamalai?",
      answer:
        "Our pricing depends on the services you select. Contact us for a transparent and customized quote.",
    },
    {
      question: "Will I have to deal with tenants or vendors?",
      answer:
        "Not at all. We handle all ground-level interactions, so you enjoy peace of mind — wherever you are.",
    },
  ];

  return (
    <div className="font-sans text-dark">
      {/* Hero Section */}
      <section
        className="text-white text-center py-5 "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-dark bg-opacity-75 py-5 px-4">
          <h1 className="display-4 fw-bold mb-3">
            PROPERTY MANAGEMENT <br /> FOR YOUR INDIA HOME
          </h1>
          <p className="lead">
            Sell | <span style={{ color: "#038A5E" }}>Buy</span> | Rent |
            Maintain
          </p>
          <Link to="/contact">
            <button
              style={{ backgroundColor: "#038A5E" }}
              className="btn btn-lg text-white mt-4"
            >
              GET A QUOTE →
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="container py-5">
        <div className="row text-center g-4">
          {statsData.map((item, index) => (
            <div key={index} className="col-md-4">
              <div>
                <div className="display-3 mb-3">{item.emoji}</div>
                <h1 style={{ color: "#038A5E" }} className="fw-bold mb-2">
                  {startCount ? <CountUp end={item.end} duration={2} /> : "0"}+
                </h1>
                <p className="fw-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">OUR SERVICES</h2>
          <p className="mb-4">
            Tailogreen property management solutions for{" "}
            <span className="fw-semibold" style={{ color: "#038A5E" }}>
              NRIs & Homeowners in Tiruvannamalai
            </span>
          </p>
          <p className="mb-4">
            Managing a property from afar can be challenging — but we make it
            effortless. At PropTech Solutions, we handle every aspect of your
            property so you don’t have to.
          </p>

          <div className="row g-4">
            {[
              { name: "Scheduled Property Visits", icon: visitImg },
              { name: "Maintenance & Repairs", icon: maintenanceImg },
              { name: "Tenant Sourcing", icon: tenantImg },
              { name: "Background Verification", icon: backgroundImg },
              { name: "Rental Collection & Remittance", icon: rentImg },
              { name: "Digital Marketing & Listings", icon: marketingImg },
              { name: "Open House Management", icon: openHouseImg },
              { name: "Buyer Lead Generation", icon: leadImg },
            ].map((service, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="card h-100 shadow">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="card-img-top p-3"
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <p className="fw-semibold">{service.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}

      <section className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-5">WHAT WE OFFER</h2>
          <div className="row g-4">
            {/* Owner */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={ownerImg}
                  className="card-img-top"
                  alt="Owner"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body p-0">
                  <button
                    className="btn btn-primary fw-semibold rounded-0 w-100 py-3"
                    style={{ fontSize: "1.1rem" }}
                  >
                    Owner
                  </button>
                </div>
              </div>
            </div>

            {/* Rentals */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={rentalsImg}
                  className="card-img-top"
                  alt="Rentals"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body p-0">
                  <button
                    className="btn btn-primary fw-semibold rounded-0 w-100 py-3"
                    style={{ fontSize: "1.1rem" }}
                  >
                    Rentals
                  </button>
                </div>
              </div>
            </div>

            {/* Tenant */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={tenant}
                  className="card-img-top"
                  alt="Tenant"
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <div className="card-body p-0">
                  <button
                    className="btn btn-primary fw-semibold rounded-0 w-100 py-3"
                    style={{ fontSize: "1.1rem" }}
                  >
                    Tenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-5">PLANS & PRICING</h2>
          <div className="row g-5 justify-content-center">
            {/* Silver */}
            <div className="col-md-3">
              <div
                className="card border-1 shadow-sm h-100 position-relative hover-zoom "
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="position-absolute top-0 start-50 translate-middle badge bg-danger text-white px-4 py-2 rounded-pill shadow">
                  SILVER
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-5">
                  <p className="text-muted mb-1">(1 year)</p>
                  <h2 className="text-danger fw-bold mb-1">
                    ₹ 750 <small className="fs-6">/month</small>
                  </h2>
                  <p className="mb-4">
                    Professional management services and routine maintenance
                  </p>
                  <button className="btn btn-outline-danger">VIEW MORE</button>
                </div>
              </div>
            </div>

            {/* Gold */}
            <div className="col-md-3">
              <div
                className="card border-1 shadow-sm h-100 position-relative bg-danger text-white hover-zoom "
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="position-absolute top-0 start-50 translate-middle badge bg-white text-danger px-4 py-2 rounded-pill shadow">
                  GOLD
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-5">
                  <p className="text-white-50 mb-1">(1 year)</p>
                  <h2 className="fw-bold mb-1">
                    ₹ 1250 <small className="fs-6">/month</small>
                  </h2>
                  <p className="mb-4 text-white">
                    Leave the problem to us and expect verified tenants in no
                    time
                  </p>
                  <button className="btn btn-light text-danger fw-semibold">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Diamond */}
            <div className="col-md-3">
              <div
                className="card border-1 shadow-sm h-100 position-relative hover-zoom"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="position-absolute top-0 start-50 translate-middle badge bg-danger text-white px-4 py-2 rounded-pill shadow">
                  DIAMOND
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-5">
                  <p className="text-muted mb-1">(2 years)</p>
                  <h2 className="text-danger fw-bold mb-1">
                    ₹ 1000 <small className="fs-6">/month</small>
                  </h2>
                  <p className="mb-4">
                    Join us and live with hassle free Maintenance & rentals
                  </p>
                  <button className="btn btn-outline-danger">VIEW MORE</button>
                </div>
              </div>
            </div>

            {/* Platinum */}
            <div className="col-md-3">
              <div
                className="card border-1 shadow-sm h-100 position-relative hover-zoom"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="position-absolute top-0 start-50 translate-middle badge bg-danger text-white px-4 py-2 rounded-pill shadow">
                  PLATINUM
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-5">
                  <p className="text-muted mb-1">(5 years)</p>
                  <h2 className="text-danger fw-bold mb-1">
                    ₹ 750 <small className="fs-6">/month</small>
                  </h2>
                  <p className="mb-4">
                    Join us and live with hassle free Maintenance & rentals
                  </p>
                  <button className="btn btn-outline-danger">VIEW MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">HOW IT WORKS</h2>
          <p className="mb-5">
            A simple, seamless process to manage your property stress-free
          </p>

          <div className="row g-4">
            {[
              { icon: "📋", label: "Choose Your Service" },
              { icon: "🤝", label: "Connect with Our Expert" },
              { icon: "🔑", label: "We Handle Everything" },
              { icon: "🎉", label: "Relax & Enjoy Peace of Mind" },
            ].map((step, index) => (
              <div key={index} className="col-6 col-md-3">
                <div>
                  <div className="display-4 mb-3" style={{ color: "#038A5E" }}>
                    {step.icon}
                  </div>
                  <p className="fw-semibold">{step.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <PropertyListingsHome />
          </div>
        </div>
      </div>

      {/* Contact & FAQs */}
      <section className="container py-5">
        <div className="row mb-5 g-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">
              Drop us a message for property management in Tiruvannamalai
            </h3>
            <p>
              US: +1-248-275-5811 <br /> IN: +91 81096 51510 <br /> Mail:
              sales@Sonachala plus.in
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Number"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Message*"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-success">
                SEND
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <p>
              Looking for a property management company in Tiruvannamalai to
              manage your home? At PropTech Solutions, we are here to help you
              with all of your property management needs.
            </p>
            <p>
              Getting in touch with us is easy! Email us at{" "}
              <strong>sales@Sonachala plus.in</strong>, or call{" "}
              <strong>+91 81096 51510</strong>.
            </p>
            <p>
              If you have any specific queries, fill the form and one of our
              representatives will get in touch within 48 hours.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">FAQs</h2>
          <p className="text-muted">Most frequent questions and answers</p>
        </div>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className={`accordion-button ${
                    activeIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
