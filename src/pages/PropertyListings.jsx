import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PropertyContext } from "../usecontext/PropertyContext"; // ✅ correct path

const PropertyListings = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    category: "",
    type: "",
    minBeds: "",
    minBaths: "",
  });

  const { setSelectedProperty } = useContext(PropertyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "http://localhost:5000/api/properties"
        // );

        // const response = await axios.get(
        //   `${process.env.REACT_APP_API_BASE_URL}/api/properties`
        // );

        const response = await axios.get(
  `${import.meta.env.VITE_API_BASE_URL}/api/properties`
);


        setProperties(response.data);
        setFilteredProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = properties.filter((property) => {
      return (
        (searchFilters.location === "" ||
          property.location?.area
            ?.toLowerCase()
            .includes(searchFilters.location.toLowerCase()) ||
          property.location?.city
            ?.toLowerCase()
            .includes(searchFilters.location.toLowerCase())) &&
        (searchFilters.category === "" ||
          property.propertyType
            .toLowerCase()
            .includes(searchFilters.category.toLowerCase())) &&
        (searchFilters.type === "" ||
          property.status
            .toLowerCase()
            .includes(searchFilters.type.toLowerCase())) &&
        (searchFilters.minBeds === "" ||
          property.bedrooms >= parseInt(searchFilters.minBeds)) &&
        (searchFilters.minBaths === "" ||
          property.bathrooms >= parseInt(searchFilters.minBaths))
      );
    });
    setFilteredProperties(filtered);
  };

  const handleChange = (e) => {
    setSearchFilters({ ...searchFilters, [e.target.name]: e.target.value });
  };

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    navigate(`/PropertyDetails/${property._id}`);
  };

  const location = useLocation();

  // This will be true when path is "/"
  const isHomePage = location.pathname === "/";

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-9">
          <h2 className="mb-2">PROPERTY LISTINGS</h2>
          <p className="text-muted mb-4">
            {filteredProperties.length} properties found
          </p>

          {loading ? (
            <p>Loading properties...</p>
          ) : (
            <div className="row">
              {filteredProperties.map((property) => (
                <div
                  key={property._id}
                  className="col-md-6 mb-4"
                  onClick={() => handleCardClick(property)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card h-100 shadow-sm border-0">
                    <div className="position-relative">
                      <img
                        // src={
                        //   property.imageUrls && property.imageUrls.length > 0
                        //     ? `http://localhost:5000${property.imageUrls[0]}`
                        //     : "https://via.placeholder.com/400x230?text=No+Image"
                        // }


// src={
//   property.imageUrls && property.imageUrls.length > 0
//     ? `${process.env.REACT_APP_API_BASE_URL}${property.imageUrls[0]}`
//     : "https://via.placeholder.com/400x230?text=No+Image"
// }


src={
  property.imageUrls && property.imageUrls.length > 0
    ? `${import.meta.env.VITE_API_BASE_URL}${property.imageUrls[0]}`
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
                          📏 {property.sizeSqFt} sq ft | 🛏 {property.bedrooms}{" "}
                          BR | 🛁 {property.bathrooms} Bath
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

        {/* ADVANCED SEARCH */}

        {!isHomePage && (
          <div className="col-md-3">
            <div className="bg-info text-white p-3 rounded mb-4">
              <h5 className="fw-bold">ADVANCED SEARCH</h5>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  name="location"
                  value={searchFilters.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="category"
                  value={searchFilters.category}
                  onChange={handleChange}
                  placeholder="Property Category"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="type"
                  value={searchFilters.type}
                  onChange={handleChange}
                  placeholder="Property Type"
                  className="form-control mb-2"
                />
                <div className="row mb-2">
                  <div className="col">
                    <input
                      type="number"
                      name="minBeds"
                      value={searchFilters.minBeds}
                      onChange={handleChange}
                      placeholder="Min Beds"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="minBaths"
                      value={searchFilters.minBaths}
                      onChange={handleChange}
                      placeholder="Min Baths"
                      className="form-control"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-bold">
                  SEARCH
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListings;
