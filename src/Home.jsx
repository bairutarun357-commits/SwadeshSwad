import React, { useEffect, useRef } from "react";
import "./Home.css";

function Home() {
  const videoRef = useRef(null);

  // Force Video Play on Load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="home-container">

      {/* 🎬 VIDEO BACKGROUND */}
      <div className="video-wrapper">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="bg-video"
        >
          <source src="/bgv.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* NAVBAR */}
      

      {/* MAIN CONTENT (Centered) */}
      <div className="home-content">
        <div className="hero-section">
          <h1 className="main-title">
            Flavours of <br />
            <span>Bharat</span>
          </h1>

          <p className="description">
            Experience the authentic taste of India with fresh spices,
            traditional recipes and modern presentation.
          </p>

          <p className="offer-tagline">15% OFF on your first order</p>
        </div>
      </div>

    </div>
  );
}

export default Home;