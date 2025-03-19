import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    aadhar: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration Successful!");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Join FitLife Gym</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
          <input type="text" name="aadhar" placeholder="Aadhar Number" onChange={handleChange} required />
          <textarea name="address" placeholder="Address" onChange={handleChange} required></textarea>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
