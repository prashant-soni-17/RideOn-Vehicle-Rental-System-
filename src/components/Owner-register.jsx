import React, { useState } from "react";

const OwnerRegister = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    businessName: "",
    phone: "",
    location: "",
    vehicleType: "",
    vehicleModel: "",
    vehicleImage: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Owner Data:", formData);
    alert("Service Registered Successfully (demo)");
    // future: axios.post("/api/owner/register", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl border">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🛠️ Register Your Rental Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Owner Name */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Your Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="John Doe"
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Sonal Car Rentals"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="9876543210"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="MP Nagar, Bhopal"
            />
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Vehicle Type</label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="">Select</option>
              <option value="Bike">Bike</option>
              <option value="Scooty">Scooty</option>
              <option value="Car">Car</option>
              <option value="SUV">SUV</option>
            </select>
          </div>

          {/* Vehicle Model */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Vehicle Model</label>
            <input
              type="text"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Activa 6G / Swift / Scorpio"
            />
          </div>

          {/* Vehicle Image URL */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Vehicle Image URL</label>
            <input
              type="url"
              name="vehicleImage"
              value={formData.vehicleImage}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="https://..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow"
            >
              ✅ Register Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OwnerRegister;
