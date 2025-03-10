import React, { useState, useContext } from "react";
import { AppContext } from "../store";
import { useNavigate, Link } from "react-router-dom";

const Single = () => {
  const { addContact } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="text-center">Add a New Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-add full-width">
          Save
        </button>
      </form>
      <div className="text-center mt-3">
        <Link to="/">or get back to contacts</Link>
      </div>
    </div>
  );
};

export default Single;



