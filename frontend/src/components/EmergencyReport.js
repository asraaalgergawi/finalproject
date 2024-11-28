import React, { useState } from "react";
import axios from "axios";

const EmergencyReport = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/report", formData);
      alert("הדיווח נשלח בהצלחה!");
    } catch (error) {
      alert("שגיאה בשליחת הדיווח");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h1>דיווח חירום</h1>
      <input
        type="text"
        name="name"
        placeholder="שם"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="location"
        placeholder="מיקום"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="description"
        placeholder="תיאור האירוע"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">שלח דיווח</button>
    </form>
  );
};

export default EmergencyReport;
