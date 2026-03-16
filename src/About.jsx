import React from "react";
import "./pages.css";

function About() {
  return (
    <div className="page-container">
      <div className="page-header about-header">
        <h1>About Us</h1>
        <p>Experience luxury dining and authentic flavors with Swadesh</p>
      </div>

      <div className="page-content">
        <div className="info-card">
          <h2>Our Story</h2>
          <p>
            Swadesh brings the finest ingredients and traditional Indian flavors
            together with a modern, premium dining experience. Every dish is
            crafted to delight your senses.
          </p>
        </div>

        <div className="info-card">
          <h2>Our Philosophy</h2>
          <p>
            Quality, authenticity, and hospitality are at the heart of everything
            we do. From farm-fresh ingredients to elegant plating, we aim to
            provide a luxury experience in every bite.
          </p>
        </div>

        <div className="info-card">
          <h2>Our Team</h2>
          <p>
            Our chefs, sommeliers, and service team are highly trained and
            dedicated to delivering world-class dining for every guest.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;