import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PropertyContext } from "../usecontext/PropertyContext";
import axios from "axios";

const PropertyDetails = () => {
  const { selectedProperty } = useContext(PropertyContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(selectedProperty);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!selectedProperty && id) {
      const fetchProperty = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/properties/${id}`);
          setProperty(res.data);
        } catch (err) {
          console.error("Error loading property:", err);
        }
      };
      fetchProperty();
    }
  }, [id, selectedProperty]);

  if (!property) {
    return (
      <div className="container my-5">
        <h3>No property selected or loading...</h3>
        <button onClick={() => navigate("/PropertyListings")} className="btn btn-primary mt-3">
          Back to Listings
        </button>
      </div>
    );
  }

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    const carousel = document.querySelector("#propertyCarousel");
    const carouselInstance = window.bootstrap.Carousel.getInstance(carousel);
    carouselInstance.to(index);
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start flex-wrap">
        <h2 className="fw-bold text-uppercase">
          {property.title} <span className="badge bg-danger ms-2">ENQUIRE</span>
        </h2>
        <h4 className="text-danger">₹ {property.price}</h4>
      </div>
      <h5 className="text-muted">
        For Rent in {property.location?.area}, {property.location?.city}
      </h5>

      {/* Image Carousel */}
      {property.imageUrls && property.imageUrls.length > 0 && (
        <>
          <div id="propertyCarousel" className="carousel slide my-3" data-bs-ride="carousel">
            <div className="carousel-inner rounded shadow">
              {property.imageUrls.map((url, index) => (
                <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <img
                    src={`http://localhost:5000${url}`}
                    className="d-block w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt={`Property ${index}`}
                  />
                </div>
              ))}
            </div>

            {/* Arrows */}
            {property.imageUrls.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#propertyCarousel"
                  data-bs-slide="prev"
                  onClick={() => setActiveIndex((prev) => (prev === 0 ? property.imageUrls.length - 1 : prev - 1))}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#propertyCarousel"
                  data-bs-slide="next"
                  onClick={() => setActiveIndex((prev) => (prev === property.imageUrls.length - 1 ? 0 : prev + 1))}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="d-flex overflow-auto justify-content-center  mb-4">
            {property.imageUrls.map((url, index) => (
              <img
                key={index}
                src={`http://localhost:5000${url}`}
                alt={`Thumb ${index}`}
                onClick={() => handleThumbnailClick(index)}
                className={`me-2 rounded border ${index === activeIndex ? "border-primary border-3" : ""}`}
                style={{ height: "80px", width: "120px", objectFit: "cover", cursor: "pointer" }}
              />
            ))}
          </div>
        </>
      )}

      {/* ABOUT PROPERTY */}
      <h4 className="text-center mt-5 mb-3">ABOUT PROPERTY</h4>
      <div className="row text-center mb-4">
        <div className="col">
          <i className="bi bi-house-door-fill fs-4 d-block mb-1"></i>
          Age of Property<br /><strong>{property.age || 14}</strong>
        </div>
        <div className="col">
          <i className="bi bi-building fs-4 d-block mb-1"></i>
          Bedrooms<br /><strong>{property.bedrooms}</strong>
        </div>
        <div className="col">
          <i className="bi bi-droplet fs-4 d-block mb-1"></i>
          Bathrooms<br /><strong>{property.bathrooms}</strong>
        </div>
        <div className="col">
          <i className="bi bi-compass fs-4 d-block mb-1"></i>
          Facing<br /><strong>{property.facing || "East"}</strong>
        </div>
        <div className="col">
          <i className="bi bi-truck-front fs-4 d-block mb-1"></i>
          Parking<br /><strong>{property.parking || "Car Bike"}</strong>
        </div>
        <div className="col">
          <i className="bi bi-aspect-ratio fs-4 d-block mb-1"></i>
          Square Feet<br /><strong>{property.sizeSqFt}</strong>
        </div>
      </div>

      {/* QUICK SUMMARY */}
      <h5>Quick Summary</h5>
      <div className="table-responsive w-100 w-md-50">
        <table className="table table-bordered">
          <tbody>
            <tr><td>Bedrooms</td><td>{property.bedrooms}</td></tr>
            <tr><td>Bathrooms</td><td>{property.bathrooms}</td></tr>
            <tr><td>Status</td><td>{property.status}</td></tr>
            <tr><td>Available From</td><td>{property.availabilityDate ? new Date(property.availabilityDate).toLocaleDateString() : "N/A"}</td></tr>
            <tr><td>Floors</td><td>{property.floor || "0/1"}</td></tr>
            <tr><td>Facing</td><td>{property.facing || "East"}</td></tr>
            <tr><td>Furnished</td><td>{property.furnished || "SemiFurnished"}</td></tr>
            <tr><td>Parking</td><td>{property.parking || "Car Bike"}</td></tr>
            <tr><td>Maintenance Charge</td><td>₹ {property.maintenance || 1000}</td></tr>
          </tbody>
        </table>
      </div>

      {/* Preferences */}
      <h5>PREFERENCES</h5>
      <p>{property.preferences || "👨 Bachelors 👨‍👩‍👧‍👦 Family"}</p>

      {/* Facilities */}
      <h5>FACILITIES</h5>
      <p>{property.facilities || "💡 Light ⚡ Fan 🛏 Wardrobe"}</p>

      {/* CTA Button */}
      <div className="text-center">
        <a
          href={`https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in ${property.title}`}
          className="btn btn-danger mt-4 px-4 py-2 fw-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          ARE YOU INTERESTED?
        </a>
      </div>
    </div>
  );
};

export default PropertyDetails;
