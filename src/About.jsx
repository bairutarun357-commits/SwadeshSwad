import React from "react";
import { motion } from "framer-motion";
import "./pages.css";

function About() {
  // Animation variants for the text
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };


  return (
    <div className="about-wrapper">
      {/* HERO SECTION */}
        {/* SECTION: GLOBAL FLAVORS (From Image) */}
<section className="global-flavors-section">
  <div className="flavors-content">
    <span className="accent-text">we speak fluent food</span>
    <h2 className="main-title">
      NO MATTER WHICH <br /> 
      CORNER OF THE <br /> 
      Bharat <span className="italic-highlight">it's from</span>
    </h2>
    <p className="description">
     Authentic, home-style Indian meals. From the spice markets of Jammu Kashmir 
      to the coastal kitchens of Kerala, the true taste of Swadesh delivered fresh.
    </p>
    <button className="order-btn-yellow">
      Order Now <span className="arrow">→</span>
    </button>
    <div className="features-row">
      <span>● Cooked to Order</span>
      <span>● Menu Changes Weekly</span>
      <span>● Everyday Pricing</span>
    </div>
  </div>

  <div className="flavors-image-container">
    <img src="/indian1.jpg" alt="Global Food Bowls" className="main-bowl-img" />
    <div className="stats-badge">
      <span className="count">7K+</span>
      <span className="label">Happy Customers</span>
    </div>
    <div className="rating-badge">
      <span className="score">4.6 </span>
      <span className="label">Rating</span>
    </div>
  </div>
</section>

      {/* SCROLLABLE DETAIL SECTIONS */}
      <section className="about-details">
        {[
          { title: "Our Story", text:" At Swadesh Swad, we bring the heart and soul of Bharat to your plate, where every dish is a celebration of centuries-old traditions, vibrant spices, and authentic flavors that transport you across the length and breadth of India.", img: "/indian2.jpg", rev: false },
          { title: "Our Philosophy", text: "Experience unmatched quality and authentic flavors in every single bite, where each morsel reflects our dedication to freshness, tradition, and the true taste of excellence.", img: "/indian3.jpg", rev: true }
        ].map((item, index) => (
          <motion.div 
            className={`detail-row ${item.rev ? 'reverse' : ''}`}
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="detail-text">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <div className="detail-visual">
              <img src={item.img} alt={item.title} />
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default About;