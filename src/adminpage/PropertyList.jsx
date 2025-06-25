  import React, { useEffect, useState } from "react";
import axios from "axios";


const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    price: "",
    status: "",
    bedrooms: "",
    bathrooms: "",
    image: null,
  });

  useEffect(() => {
    fetchProperties();
  });

  const fetchProperties = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/properties");
      setProperties(res.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`http://localhost:5000/api/properties/${id}`);
        alert("Property deleted");
        fetchProperties();
      } catch (error) {
        console.error("Error deleting property:", error);
        alert("Failed to delete property");
      }
    }
  };

  const handleEditClick = (property) => {
    setEditingProperty(property._id);
    setEditFormData({
      title: property.title,
      price: property.price,
      status: property.status,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      image: null, // image will be selected when user uploads
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditFileChange = (e) => {
    setEditFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleEditSubmit = async (id) => {
    try {
      const data = new FormData();
      data.append("title", editFormData.title);
      data.append("price", editFormData.price);
      data.append("status", editFormData.status);
      data.append("bedrooms", editFormData.bedrooms);
      data.append("bathrooms", editFormData.bathrooms);

      if (editFormData.image) {
        data.append("image", editFormData.image);
      }

      await axios.put(`http://localhost:5000/api/properties/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Property updated");
      setEditingProperty(null);
      fetchProperties();
    } catch (error) {
      console.error("Error updating property:", error);
      alert("Failed to update property");
    }
  };

  return (
  <div className="container my-5">
  <h2 className="mb-4 fw-bold text-center">Explore Properties</h2>

{/* <Link > */}


  <div className="row">
    {properties.map((property) => (
      <div key={property._id} className="col-md-4 mb-4">
        <div className="card h-100 shadow border-0 rounded-4">
          {/* Image & Badges */}
          <div className="position-relative">
            <img
              src={`http://localhost:5000${property.imageUrl}`}
              className="card-img-top rounded-top-4"
              alt={property.title}
              style={{ height: "230px", objectFit: "cover" }}
            />

            <span className="badge bg-dark position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill fs-6">
              {property.propertyType || "Flat"}
            </span>

            <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2 px-3 py-2 rounded-pill fs-6">
              {property.status}
            </span>

            <span className="badge bg-info text-white position-absolute bottom-0 end-0 m-2 px-3 py-2 rounded-pill fs-6 shadow-sm">
              ₹{property.price}
            </span>
          </div>

          {/* Card Body */}
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="card-title fw-semibold text-truncate mb-0">
                {property.title}
              </h5>
              <i
                className="bi bi-heart fs-5 text-muted"
                role="button"
                title="Add to Wishlist"
              ></i>
            </div>

            <p className="text-muted mb-2">
              <i className="bi bi-geo-alt-fill me-1"></i>
              {property.location?.area}, {property.location?.city}
            </p>

            <ul className="list-unstyled text-muted small mb-2">
              <li>
                📏 {property.sizeSqFt || 950} sq ft | 🛏 {property.bedrooms} Bedroom | 🛁 {property.bathrooms} Bathroom
              </li>
              <li>
                🏢 {property.floor || "0/1"} Floor | 🌅 {property.facing || "East Facing"}
              </li>
            </ul>

            <p className="text-muted small mb-3">
              <i className="bi bi-calendar-event me-1"></i>
              Available:{" "}
              {property.availabilityDate
                ? new Date(property.availabilityDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  })
                : "N/A"}
            </p>

            {/* Action Buttons or Edit Form */}
            {editingProperty === property._id ? (
              <div className="mt-3">
                <h6 className="fw-bold mb-3">Edit Property</h6>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleEditChange}
                  className="form-control mb-2"
                  placeholder="Title"
                />
                <input
                  type="number"
                  name="price"
                  value={editFormData.price}
                  onChange={handleEditChange}
                  className="form-control mb-2"
                  placeholder="Price"
                />
                <select
                  name="status"
                  value={editFormData.status}
                  onChange={handleEditChange}
                  className="form-select mb-2"
                >
                  <option value="For Rent">For Rent</option>
                  <option value="Rented">Rented</option>
                </select>
                <input
                  type="number"
                  name="bedrooms"
                  value={editFormData.bedrooms}
                  onChange={handleEditChange}
                  className="form-control mb-2"
                  placeholder="Bedrooms"
                />
                <input
                  type="number"
                  name="bathrooms"
                  value={editFormData.bathrooms}
                  onChange={handleEditChange}
                  className="form-control mb-2"
                  placeholder="Bathrooms"
                />
                <div className="mb-3">
                  <label className="form-label">Upload New Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleEditFileChange}
                    className="form-control"
                  />
                </div>
                <button
                  onClick={() => handleEditSubmit(property._id)}
                  className="btn btn-success btn-sm me-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingProperty(null)}
                  className="btn btn-secondary btn-sm"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-between mt-3">
                <button
                  onClick={() => handleEditClick(property)}
                  className="btn btn-outline-primary btn-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(property._id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>

{/* </Link> */}

</div>

  );
};

export default PropertyList;