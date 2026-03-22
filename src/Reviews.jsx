import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { color } from "framer-motion";

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const reviews = [
    {
      name: "Nithin",
      location: "Kavadiguda, Hyderabad",
      rating: 5,
      text: "Amazing taste! Food was fresh and delivery was quick.",
      img: "https://images.unsplash.com/photo-1494790108377-be"
    },
    {
      name: "Sneha",
      location: "Banjara Hills, Hyderabad",
      rating: 4,
      text: "Feels like home food. Loved the quality!",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Arjun",
      location: "Gachibowli, Hyderabad",
      rating: 5,
      text: "Best food experience so far! Highly recommended.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Priya",
      location: "Kukatpally, Hyderabad",
      rating: 4,
      text: "Spices are perfect and taste is authentic!",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      name: "Vikram",
      location: "Jubilee Hills, Hyderabad",
      rating: 5,
      text: "Biryani reminds me of home. Loved it!",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
    }
  ];

  // 🔥 Auto Slide (Pause on hover)
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <section className="reviews-section">
      <div className="review-header">
        <h2 className="review-title">
          What Customers Say About Swadesh Swad
        </h2>
        <div className="title-underline"></div>
      </div>

      <div
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides */}
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <img src={review.img} alt={review.name} />

              <h3 style={{color:"#d4af37"}}>{review.name}</h3>
              <p className="location">{review.location}</p>

              {/* ⭐ Stars */}
              <div className="stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button className="nav left" onClick={prevSlide}>❮</button>
        <button className="nav right" onClick={nextSlide}>❯</button>

        {/* Dots */}
        <div className="dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;