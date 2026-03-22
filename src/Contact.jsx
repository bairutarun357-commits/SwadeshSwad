import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* ===== HERO HEADER ===== */}
      <div className="contact-hero">
        <h1 style={{color:"black"}}>Contact Swadesh Swad</h1>
        <p style={{color:"black"}}>Bringing authentic flavors to your doorstep — let’s connect!</p>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="contact-container">

        <div className="contact-info">
          <h2 style={{color:"black"}}>Reach Out to Us</h2>

          <p>📧 <strong>Email:</strong> support@swadeshswad.com</p>
          <p>📞 <strong>Phone:</strong> +91 960 326 2008</p>
          <p>
            📍 <strong>Address:</strong> Swadesh Swad Kitchens,  
            Jubilee Hills, Hyderabad, Telangana
          </p>

          <div className="hours">
            <h4>Kitchen Hours</h4>
            <p>Mon – Sun: 9:00 AM – 11:00 PM</p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Tell us your craving or feedback..."></textarea>
          <button>Send Message 🚀</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;