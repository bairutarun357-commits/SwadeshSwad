import React from "react";
import "./pages.css";

function Contact() {
  return (
    <div className="page-container">
      <div className="page-header contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Get in touch today!</p>
      </div>

      <div className="page-content contact-grid">
        <div className="contact-card">
          <h3>Location</h3>
          <p>123 Food Street, Hyderabad, Telangana, India</p>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>
        <div className="contact-card">
          <h3>Email</h3>
          <p>info@swadesh.com</p>
        </div>
        <div className="contact-card">
          <h3>Working Hours</h3>
          <p>Mon-Sun: 10:00 AM - 11:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;