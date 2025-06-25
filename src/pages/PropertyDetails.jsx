import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PropertyContext } from "../usecontext/PropertyContext";
import axios from "axios";

const PropertyDetails = () => {
  const { selectedProperty } = useContext(PropertyContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(selectedProperty);

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

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-start">
        <h2>
          {property.title} <span className="badge bg-danger">ENQUIRE</span>
        </h2>
        <h4 className="text-danger">₹ {property.price}</h4>
      </div>
      <h5 className="text-muted">
        For Rent in {property.location?.area || "N/A"}, {property.location?.city || "N/A"}
      </h5>

      {/* Main Image */}
      {property.imageUrl && (
        <img
          src={`http://localhost:5000${property.imageUrl}`}
          alt={property.title}
          className="img-fluid my-3 rounded"
          style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
        />
      )}

      {/* About Property */}
      <h4 className="text-center mt-5 mb-3">ABOUT PROPERTY</h4>
      <div className="row text-center mb-4">
        <div className="col">Age of Property<br /><strong>{property.age || 14}</strong></div>
        <div className="col">Number of Bedrooms<br /><strong>{property.bedrooms}</strong></div>
        <div className="col">Number of Bathrooms<br /><strong>{property.bathrooms}</strong></div>
        <div className="col">Facing<br /><strong>{property.facing || "East"}</strong></div>
        <div className="col">Parking<br /><strong>{property.parking || "Car Bike"}</strong></div>
        <div className="col">Square Feet<br /><strong>{property.sizeSqFt}</strong></div>
      </div>

      {/* Quick Summary */}
      <h5>Quick Summary</h5>
      <table className="table table-bordered w-50">
        <tbody>
          <tr><td>Bedrooms</td><td>{property.bedrooms}</td></tr>
          <tr><td>Bathrooms</td><td>{property.bathrooms}</td></tr>
          <tr><td>Status</td><td>{property.status}</td></tr>
          <tr>
            <td>Available From</td>
            <td>{property.availabilityDate ? new Date(property.availabilityDate).toLocaleDateString() : "N/A"}</td>
          </tr>
          <tr><td>Floors</td><td>{property.floor || "0/1"}</td></tr>
          <tr><td>Facing</td><td>{property.facing || "East"}</td></tr>
          <tr><td>Furnished</td><td>{property.furnished || "SemiFurnished"}</td></tr>
          <tr><td>Parking</td><td>{property.parking || "Car Bike"}</td></tr>
          <tr><td>Maintenance Charge</td><td>₹ {property.maintenance || 1000}</td></tr>
        </tbody>
      </table>

      {/* Preferences */}
      <h5>PREFERENCES</h5>
      <p>{property.preferences || "👨 Bachelors 👨‍👩‍👧‍👦 Family"}</p>

      {/* Facilities */}
      <h5>FACILITIES</h5>
      <p>{property.facilities || "💡 Light ⚡ Fan 🛏 Wardrobe"}</p>

      <button className="btn btn-danger mt-4">ARE YOU INTERESTED ?</button>
    </div>
  );
};

export default PropertyDetails;
