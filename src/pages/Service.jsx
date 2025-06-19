import React, { useState } from "react";
import emailjs from "emailjs-com";

const Service = () => {
  const [activeTab, setActiveTab] = useState("plots");
  const [activeForm, setActiveForm] = useState(null); // 'sell' or 'buy'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveForm(null);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    interest: "",
    email: "",
    location: "",
    category: "",
    transaction: "",
    budget: "",
    contactMethod: "",
    contactDate: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      fullName: formData.fullName,
      contactNumber: formData.contactNumber,
      interest: formData.interest,
      email: formData.email,
      location: formData.location,
      category: formData.category,
      transaction: formData.transaction,
      budget: formData.budget,
      contactMethod: formData.contactMethod,
      contactDate: formData.contactDate,
      message: formData.message,
    };

    emailjs
      .send(
        "service_emvfrmo", // ✅ Replace with your actual service ID
        "template_odq3led", // ✅ Replace with your template ID
        templateParams,
        "2K-8VzSS5KV80UWSh" // ✅ Replace with your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");

          // WhatsApp message format
          const whatsappMessage = `*New Property Enquiry*:
🔸 Name: ${formData.fullName}
🔸 Contact: ${formData.contactNumber}
🔸 Email: ${formData.email}
🔸 Location: ${formData.location}
🔸 Interest: ${formData.interest}
🔸 Category: ${formData.category}
🔸 Transaction: ${formData.transaction}
🔸 Budget: ₹${formData.budget}
🔸 Preferred Contact: ${formData.contactMethod}
🔸 Contact Date: ${formData.contactDate}
🔸 Details: ${formData.message}`;

          // Open WhatsApp with prefilled message
          window.open(
            `https://wa.me/918109651510?text=${encodeURIComponent(
              whatsappMessage
            )}`,
            "_blank"
          );

          setFormData({
            fullName: "",
            contactNumber: "",
            // interest: "",
            email: "",
            location: "",
            category: "",
            transaction: "",
            budget: "",
            contactMethod: "",
            contactDate: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message.");
          console.error("EmailJS Error:", error);
        }
      );
  };

 const renderForm = () => {
  if (!activeForm) return null;

  return (

    <div className="mt-4 bg-light p-4 rounded shadow">
      <h3 className="h5 fw-semibold mb-4 text-capitalize">
        {activeForm} Form
      </h3>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location / Area"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Property Category</option>
            <option value="Plot">Plot</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Agricultural">Agricultural</option>
            <option value="Rental">Rental</option>
          </select>
        </div>

        <div className="col-md-6">
          <select
            name="transaction"
            value={formData.transaction}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Type of Transaction</option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
            <option value="Rent">Rent</option>
            <option value="Lease">Lease</option>
          </select>
        </div>

        <div className="col-md-6">
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Expected Budget (in ₹)"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Preferred Contact Method</option>
            <option value="Phone">Phone Call</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
          </select>
        </div>

        <div className="col-md-6">
          <input
            type="date"
            name="contactDate"
            value={formData.contactDate}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="col-12">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Details (e.g. size, facing, amenities, etc.)"
            rows="4"
            className="form-control"
          ></textarea>
        </div>

        <div className="col-12 text-center mt-3">
          <button
            type="submit"
            className="btn btn-success px-4 py-2"
            style={{
              background: "linear-gradient(to right, #16a34a, #f97316)",
              border: "none",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    
  );
};


 const renderContent = () => {
  const renderCard = ({ title, img, desc }) => (
    <div key={title} className="row align-items-center mb-4 g-3">
      <div className="col-md-4">
        <img
          src={img}
          alt={title}
          className="img-fluid rounded"
          style={{ height: "200px", objectFit: "cover", width: "100%" }}
        />
      </div>
      <div className="col-md-8">
        <h2 className="h5 fw-semibold text-dark">{title}</h2>
        <p className="text-muted">{desc}</p>
      </div>
    </div>
  );

  switch (activeTab) {
    case "plots":
      return (
        <div className="container my-4">
          {[
            {
              title: "Residential Land",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
              desc: "Perfect for building homes, villas, and gated communities in peaceful neighborhoods. These plots are usually located in well-planned residential areas with easy access to essential amenities like schools, hospitals, markets, and public transport, making them highly suitable for families and individuals seeking a comfortable lifestyle.",
            },
            {
              title: "Commercial Land",
              img: "https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=800&q=80",
              desc: "Ideal for office complexes, showrooms, shopping malls, and commercial developments in high-traffic zones. These lands are strategically positioned in business hubs or near main roads to ensure maximum visibility, footfall, and long-term growth potential for commercial ventures.",
            },
            {
              title: "Industrial Land",
              img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
              desc: "Designed for factories, warehouses, storage units, and manufacturing plants with excellent road, rail, and utility connectivity. These lands are typically located in industrial zones with proper infrastructure and approvals, making them suitable for medium to large-scale industries.",
            },
            {
              title: "Agricultural Land",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
              desc: "Fertile lands for farming, horticulture, organic agriculture, and plantation purposes in scenic rural zones. These plots are ideal for long-term cultivation, greenhouse farming, and agribusiness investments, often offering access to natural water sources and a serene environment.",
            },
          ].map(renderCard)}
        </div>
      );

    case "properties":
      return (
        <div className="container my-4">
          {[
            {
              title: "Flats / Apartments",
              img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
              desc: "Modern and spacious flats perfect for families, working professionals, or investors. These properties are located in secure communities and often come with premium amenities such as elevators, parking, 24x7 security, landscaped gardens, gyms, and children's play areas—making them ideal for both living and renting.",
            },
            {
              title: "Independent Houses",
              img: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?ga=GA1.1.1569318915.1748581250&semt=ais_hybrid&w=740",
              desc: "Private standalone houses offering complete freedom and flexibility. These properties feature customizable layouts, private gardens, parking facilities, and are ideal for those seeking more privacy, space, and long-term comfort. Perfect for joint families or those looking to escape apartment living.",
            },
            {
              title: "Commercial Buildings",
              img: "https://img.freepik.com/free-photo/office-buildings_1127-3158.jpg?ga=GA1.1.1569318915.1748581250&semt=ais_hybrid&w=740",
              desc: "Strategically located office spaces, retail outlets, and commercial complexes. These buildings are situated in high-footfall business zones, making them perfect for showrooms, startups, and established enterprises looking to expand their visibility and reach with professional-grade infrastructure.",
            },
          ].map(renderCard)}
        </div>
      );

    case "rental":
      return (
        <div className="container my-4">
          {[
            {
              title: "Rental Houses / Flats",
              img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
              desc: "Affordable and well-maintained rental homes located in secure residential neighborhoods. These flats and houses are ideal for families, students, and professionals, offering access to nearby schools, offices, shopping centers, and public transportation. Options range from compact 1BHKs to spacious 3BHK units, many with modern amenities such as gated security, parking, and power backup.",
            },
            {
              title: "Shops for Rent",
              img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
              desc: "Retail shops and commercial spaces available in high-visibility market locations. Perfect for startups, boutiques, salons, and franchises, these properties are situated in bustling commercial zones with heavy footfall. Flexible lease terms and options for different sizes are available to match various business needs.",
            },
          ].map(renderCard)}
        </div>
      );

    default:
      return null;
  }
};


return (
  <div className="bg-white min-vh-100 py-5 px-3"  style={{marginTop: "110px"}}>
    <h1 className="text-center mb-5 fw-bold" style={{ color: "#038A5E", fontSize: "2rem" }}>
      Our Services
    </h1>

    {/* Top Tab Buttons */}
    <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
      {["plots", "properties", "rental"].map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`px-4 py-2 rounded-pill fw-medium border-0 ${
            activeTab === tab
              ? "bg-success text-white"
              : "bg-light text-dark"
          }`}
          style={{
            backgroundColor: activeTab === tab ? "#038A5E" : "",
            color: activeTab === tab ? "white" : "",
            cursor: "pointer",
          }}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>

    {/* Dynamic Content Section */}
    <div className="container my-4 p-4 bg-white rounded shadow">
      {renderContent()}

      {/* Sell & Buy Buttons */}
      <div className="d-flex gap-3 justify-content-center mt-4 flex-wrap">
        <button
          className="btn text-white px-4 py-2 rounded-pill"
          style={{ backgroundColor: "#038A5E" }}
          onClick={() => setActiveForm("sell")}
        >
          Sell
        </button>
        <button
          className="btn btn-primary px-4 py-2 rounded-pill"
          onClick={() => setActiveForm("buy")}
        >
          Buy
        </button>
      </div>

      {/* Conditional Form */}
      <div className="mt-4">
        {renderForm()}
      </div>
    </div>
  </div>
);



};

export default Service;
