import React from "react";
import "./pages.css";

function Services() {
  return (
    <div className="page-container">
      <div className="page-header services-header">
        <h1>Our Services</h1>
        <p>Exquisite dining experiences tailored to your lifestyle</p>
      </div>

      <div className="page-content services-grid">
        <div className="service-card">
          <h3>Private Dining</h3>
          <p>Enjoy an exclusive setting for intimate meals and special occasions.</p>
        </div>
        <div className="service-card">
          <h3>Catering</h3>
          <p>Premium catering services for corporate events and luxury parties.</p>
        </div>
        <div className="service-card">
          <h3>Event Hosting</h3>
          <p>Elegant spaces for weddings, celebrations, and exclusive gatherings.</p>
        </div>
        <div className="service-card">
          <h3>Luxury Takeaway</h3>
          <p>Curated gourmet meals delivered to your doorstep with care.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;