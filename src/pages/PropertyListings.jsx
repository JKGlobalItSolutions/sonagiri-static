import React, { useEffect, useState } from "react";

const PropertyListings = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    category: "",
    type: "",
    minBeds: "",
    minBaths: "",
  });

  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const dummyData = [
        {
          id: 1,
          title: "IshaCodeField Villa",
          location: "Pudhupakkam, Chennai",
          price: 37000,
          category: "Villa",
          type: "For Rent",
          size: "2982 sq ft",
          bedrooms: 4,
          bathrooms: 1,
          floor: "0/2 Floor",
          facing: "East Facing",
          availableDate: "2025-04-30",
          image:
            "https://img.freepik.com/premium-photo/backpackers-chiang-mai-thailand_53876-54913.jpg?uid=R142267662&ga=GA1.1.1569318915.1748581250&semt=ais_hybrid&w=740",
        },
        {
          id: 2,
          title: "Flat in Ambattur",
          location: "Ambattur, Chennai",
          price: 14000,
          category: "Flat",
          type: "For Rent",
          size: "950 sq ft",
          bedrooms: 2,
          bathrooms: 2,
          floor: "0/1 Floor",
          facing: "East Facing",
          availableDate: "2025-04-01",
          image:
            "https://img.freepik.com/free-photo/modern-living-room-interior-design_53876-146956.jpg?t=st=1718866102~exp=1718869702~hmac=4bfcbf18890e6a647b0e24f843f30e8c62eecf7a65e1f2fcfc09e43fcbd2dc7a&w=740",
        },
        {
          id: 3,
          title: "Nakshatra Apartment",
          location: "East Tambaram, Chennai",
          price: 25000,
          category: "Apartment",
          type: "Rented",
          size: "1650 sq ft",
          bedrooms: 3,
          bathrooms: 4,
          floor: "1/2 Floor",
          facing: "West Facing",
          availableDate: "2024-09-20",
          image:
            "https://img.freepik.com/free-photo/luxury-modern-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1784.jpg?w=740",
        },
      ];

      setProperties(dummyData);
      setFilteredProperties(dummyData);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Handle search form submit
  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = properties.filter((property) => {
      return (
        (searchFilters.location === "" ||
          property.location
            .toLowerCase()
            .includes(searchFilters.location.toLowerCase())) &&
        (searchFilters.category === "" ||
          property.category
            .toLowerCase()
            .includes(searchFilters.category.toLowerCase())) &&
        (searchFilters.type === "" ||
          property.type.toLowerCase().includes(searchFilters.type.toLowerCase())) &&
        (searchFilters.minBeds === "" ||
          property.bedrooms >= parseInt(searchFilters.minBeds)) &&
        (searchFilters.minBaths === "" ||
          property.bathrooms >= parseInt(searchFilters.minBaths))
      );
    });

    setFilteredProperties(filtered);
  };

  const handleChange = (e) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* LEFT: PROPERTY LISTINGS */}
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
                <div className="col-md-6 mb-4" key={property.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="position-relative">
                      <img
                        src={property.image}
                        className="card-img-top"
                        alt={property.title}
                        style={{ height: "220px", objectFit: "cover" }}
                      />
                      <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                        {property.category}
                      </span>
                      <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2">
                        {property.type}
                      </span>
                      <span className="badge bg-info text-white position-absolute bottom-0 end-0 m-2 fs-6">
                        ₹{property.price}
                      </span>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">{property.title}</h5>
                      <p className="card-text text-muted">
                        {property.location}
                      </p>

                      <ul className="list-unstyled small mb-3">
                        <li>
                          📏 {property.size} | 🛏 {property.bedrooms} Bedroom | 🛁{" "}
                          {property.bathrooms} Bathroom
                        </li>
                        <li>
                          🏢 {property.floor} | 🌅 {property.facing}
                        </li>
                      </ul>

                      <p className="small text-muted">
                        Available:{" "}
                        {new Date(
                          property.availableDate
                        ).toLocaleDateString()}
                      </p>

                      <a href="#enquire" className="btn btn-danger btn-sm">
                        ENQUIRE
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: ADVANCED SEARCH */}
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

              <div className="mt-3 text-center">
                <a href="#more" className="text-white text-decoration-none">
                  + Show more search options
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;
