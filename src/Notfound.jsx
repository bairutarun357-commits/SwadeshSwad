import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Fullscreen Blurred Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundImage: "url('/404.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
          transform: "scale(1.2)",
          zIndex: 0,
        }}
      ></div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "80px", // <-- pushes content below fixed navbar
          paddingBottom: "50px", // optional, gives bottom breathing room
          textAlign: "center",
        }}
      >
       <img
  src="/404.png"
  alt="404"
  style={{
    width: "90%",       // Increase width (previously maxWidth: 85%)
    maxWidth: "1000px", // Optional: set a cap so it doesn't explode on huge screens
    marginBottom: "40px",
  }}
/>

        <Link to="/">
          <button
            style={{
              padding: "14px 30px",
              fontSize: "18px",
              background: "#ff5722",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;