import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PropertyContext } from "../usecontext/PropertyContext";

const PropertyListingsHome = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedProperty } = useContext(PropertyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/properties`
        );

        // Ensure response.data is an array
        if (Array.isArray(response.data)) {
          setProperties(response.data);
        } else if (response.data && response.data.properties && Array.isArray(response.data.properties)) {
          // Handle case where API returns { properties: [...] }
          setProperties(response.data.properties);
        } else {
          console.error("API response is not an array:", response.data);
          setProperties([]);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    navigate(`/PropertyDetails/${property._id}`);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="mb-2">PROPERTY LISTINGS</h2>
          <p className="text-muted mb-4">
            {properties.length} properties found
          </p>

          {loading ? (
            <p>Loading properties...</p>
          ) : (
            <div className="row">
              {properties.map((property) => (
                <div
                  key={property._id}
                  className="col-lg-4 mb-4"
                  onClick={() => handleCardClick(property)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card h-100 shadow-sm border-0">
                    <div className="position-relative">
                      <img
                       

                        src={
                          property.imageUrls?.length > 0
                            ? `${import.meta.env.VITE_API_BASE_URL}${
                                property.imageUrls[0]
                              }`
                            : "https://via.placeholder.com/400x230?text=No+Image"
                        }
                        
                        className="card-img-top rounded-top-4"
                        alt={property.title || "Property Image"}
                        style={{ height: "230px", objectFit: "cover" }}
                      />
                      <span className="badge bg-dark position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill fs-6">
                        {property.propertyType || "Flat"}
                      </span>
                      <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2 px-3 py-2 rounded-pill fs-6">
                        {property.status || "Rent"}
                      </span>
                      <span className="badge bg-info text-white position-absolute bottom-0 end-0 m-2 px-3 py-2 rounded-pill fs-6 shadow-sm">
                        ₹{property.price || 0}
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{property.title}</h5>
                      <p className="text-muted">
                        {property.location?.area}, {property.location?.city}
                      </p>
                      <ul className="list-unstyled small mb-3">
                        <li>
                          📏 {property.sizeSqFt} sq ft | 🏧 {property.bedrooms}{" "}
                          BR | 🚱 {property.bathrooms} Bath
                        </li>
                        <li>
                          🏢 {property.floor} | 🌅 {property.facing}
                        </li>
                      </ul>
                      <p className="small text-muted">
                        Available:{" "}
                        {property.availabilityDate
                          ? new Date(
                              property.availabilityDate
                            ).toLocaleDateString()
                          : "N/A"}
                      </p>
                      <button className="btn btn-danger btn-sm">ENQUIRE</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyListingsHome;
