import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
    }
  }, []);

  return (
    <div className="home-container">
      {/* SECTION 1: HERO VIDEO */}
      <section className="hero-video-section">
        <video ref={videoRef} autoPlay muted loop playsInline className="bg-video">
          <source src="/bgv.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay">
          <div className="hero-text-center">
  <h1>
    Flavours of <br />
    <span className="highlight">Bharat</span>
  </h1>

  <p className="subtitle">
    Experience the authentic taste of India with fresh spices,
    traditional recipes and modern presentation.
  </p>

  <p className="offer">15% OFF on your first order</p>

  <button className="order-now-btn">Order Now</button>
</div>
        </div>
      </section>

      {/* SECTION 2: SPECIAL PICKS (The circular scrolling row) */}
      <section className="special-picks">
       <section className="special-picks">
  <div className="slider">
    <div className="slide-track">

  {/* original */}
  <div className="pick-circle"><img src="/prawnmasala.jpg" /></div>
  <div className="pick-circle"><img src="/rasmalai.webp" /></div>
  <div className="pick-circle"><img src="/paneer.jpg" /></div>
  <div className="pick-circle"><img src="/veganpizza.jpg" /></div>
    <div className="pick-circle"><img src="/cheesecake.jpg" /></div>
  <div className="pick-circle"><img src="/fruitcustard.webp" /></div>
  <div className="pick-circle"><img src="/fishfry.jpg" /></div>
  <div className="pick-circle"><img src="/jaindal.png" /></div>

  {/* duplicate (IMPORTANT) */}
  <div className="pick-circle"><img src="/muttonbiryani.jpg" /></div>
  <div className="pick-circle"><img src="/tandoori.png" /></div>
  <div className="pick-circle"><img src="/sundae.jpg" /></div>
  <div className="pick-circle"><img src="/veganpasta.jpg" /></div>

</div>

    
  </div>
</section>
        <div className="section-title">
            <h2>This Week's Special Picks</h2>
            <p>Handpicked by our chef, just for you.</p>
        </div>
      </section>

      {/* SECTION 3: OUR PROMISE */}
      <section className="promise-section">
        <div className="promise-card">
          <i className="fas fa-leaf"></i>
          <h3>Fresh Ingredients</h3>
          <p>We source the freshest local ingredients to ensure every dish is packed with flavor.</p>
        </div>
        <div className="promise-card">
          <i className="fas fa-utensils"></i>
          <h3>Expertly Crafted</h3>
          <p>Our chefs bring years of culinary excellence to your plate.</p>
        </div>
        <div className="promise-card">
          <i className="fas fa-truck"></i>
          <h3>Fast Delivery</h3>
          <p>Your food arrives hot, fresh, and on time, right at your doorstep.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;