import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Reviews from "./Reviews";
import Veg from "./Veg";
import { Link } from "react-router-dom";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
    }
  }, []);
  // Animation variants for the text
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
    // Animation variants for floating food
  const floating = (duration) => ({
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  });


  return (
    <div className="home-container">
      {/* SECTION 1: HERO VIDEO */}
      <section className="hero-video-section">
        <video ref={videoRef} autoPlay muted loop playsInline className="bg-video">
      <source src="/bgv.mp4" type="video/mp4" />
    </video>
    <div className="video-overlay">
      <motion.div 
        className="hero-text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="hero-pre-title">ESTD 2026</span>
        <h1>The Flavours of<br /><span className="highlight">Bharat</span></h1>
        <p className="subtitle">
          Where heritage recipes meet modern elegance. Experience the authentic 
          soul of Bharat, delivered with precision.
        </p>
        <div className="hero-button-group">
          <Link to="/veg">
  <button className="order-now-btn premium">Explore Menu</button>
       </Link>
          
         
        </div>
      </motion.div>
    </div>
      </section>

      {/* SECTION 2: SPECIAL PICKS (The circular scrolling row) */}
      <div className="section-title">
            <h2>This Week's Special Picks</h2>
            <p style={{color:"black"}}>Handpicked by our chef, just for you.</p>
        </div>
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
       
      </section>
   <section className="about-hero">
  {/* The container holds the floating items */}
  <div className="floating-container">
    <motion.img src="/fpizza.png" alt="pizza" className="float-img f-left" {...floating(5)} />
    <motion.img src="/ffruits.png" alt="fruits" className="float-img f-right-top" {...floating(6)} />
    <motion.img src="/fbiryani.png" alt="biryani" className="float-img f-right-bottom" {...floating(7)} />
    <motion.img src="/ftandoori.png" alt="tandoori" className="float-img f-left-deco" {...floating(8)} />
  </div>

  {/* Center Text */}
  <motion.div 
    className="hero-center-text"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h1 className="premium-title">Better food for <br /><span>more people</span></h1>
    <p className="hero-subtext">
      From secret family recipes to your modern lifestyle, Swadesh Swad is dedicated to delivering the true essence of Indian hospitality in every bite.
    </p>
  </motion.div>
</section>
    {/* SECTION 3: OUR PROMISE */}
{/* SECTION 3: OUR PROMISE */}
<section className="premium-promise-section">
  <div className="promise-header">
  <h2 className="patriotic-title">
  <span className="logo-text-left">Swadesh</span>

  <span className="chakra-wrapper">
    <svg viewBox="0 0 100 100" width="60" height="60" className="rotating-chakra">
      <circle cx="50" cy="50" r="45" className="chakra-ring" />
      <circle cx="50" cy="50" r="6" className="chakra-center" />

      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="6"
          className="chakra-spoke"
          transform={`rotate(${i * 15} 50 50)`}
        />
      ))}
    </svg>
  </span>

  <span className="logo-text-right">Swad</span>
</h2>
    <div className="premium-divider"></div>
    <p className="promise-subtitle">
      Six pillars of purity and tradition. Bringing the authentic soul of India to your daily table.
    </p>
  </div>

  <div className="promise-grid">
    {[
      { img: "/p1.jpg", title: "Pure & Fresh", desc: "100% natural ingredients sourced with integrity and prepared with care." },
      { img: "/p2.jpg", title: "Healthy & Tasty", desc: "Wholesome meals designed to nourish your body and energize your day." },
      { img: "/p3.jpg", title: "Real Home Taste", desc: "The comfort of home-cooked flavors, crafted by masters of tradition." },
      { img: "/p4.jpg", title: "Made for Busy Days", desc: "Authentic slow-cooked heritage, perfectly packaged for your lifestyle." },
      { img: "/p5.jpg", title: "Honest Quality", desc: "Clean kitchens and high standards you can always trust." },
      { img: "/p6.jpg", title: "New Menu Weekly", desc: "Explore diverse regional cuisines of India with our rotating menus." }
    ].map((promise, index) => (
      <div key={index} className="promise-card-luxury">
        <div className="card-image-wrapper">
          <img src={promise.img} alt={promise.title} className="promise-img" />
        </div>
        <div className="card-content">
          <h3 className="promise-card-title">{promise.title}</h3>
          <p className="promise-card-desc">{promise.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
  {/* Rest of your sections... */}
<Reviews/>
    </div>
  );
}

export default Home;