import React, { useState } from "react";
import "./Fz.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Jain() {
 let dispatch= useDispatch();
  const jainItems = [
    {
      name: "Jain Paneer Curry",
      price: 260,
      description: "No onion, no garlic paneer gravy.",
      image: "/jainpaneer.jpg"
    },
    {
      name: "Jain Veg Biryani",
      price: 190,
      description: "Biryani made without onion and garlic.",
      image: "/jainbiryani.webp"
    },
    {
      name: "Jain Dal Fry",
      price: 160,
      description: "Simple dal prepared in Jain style.",
      image: "/jaindal.png"
    },
    {
      name: "Jain Mix Veg",
      price: 210,
      description: "Fresh vegetables cooked without root ingredients.",
      image: "/jainveg.jpg"
    },
    {
  name: "Jain Kadai Paneer",
  price: 250,
  description: "Paneer cooked without onion & garlic.",
  image: "/jainkadai.webp"
},
{
  name: "Jain Pulao",
  price: 170,
  description: "Simple rice with vegetables (no root veg).",
  image: "/jainpulao.jpg"
},
{
  name: "Jain Kadhi",
  price: 150,
  description: "Traditional yogurt-based curry.",
  image: "/jainkadhi.webp"
},
{
  name: "Jain Bhindi Fry",
  price: 180,
  description: "Crispy okra cooked Jain style.",
  image: "/jainbhindi.webp"
},
{
  name: "Jain Thepla",
  price: 140,
  description: "Soft Gujarati flatbread without root ingredients.",
  image: "/jainthepla.webp"
}

  ];

   const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = jainItems.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(jainItems.length / itemsPerPage);

  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />
    <div className="veg-container">
      
<div className="card-container">
  {currentItems.map((item, index) => (
    <div className="card veg-theme" key={index}>
      <div className="badge">Jain</div>
      <img src={item.image} alt={item.name} />

      {/* This area centers the Name and Description */}
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>

      {/* This area stays symmetric at the bottom */}
      <div className="card-bottom">
        <p className="price">₹{item.price}</p>
        <button onClick={() => {dispatch(addToCart(item));
                  toast.success("Item Added to the Cart")}}>
                  Add To Cart 🛒
                </button>
      </div>
    </div>
  ))}
</div>
    </div>

    <div className="pagination">

  {/* First Page */}
  <button 
    onClick={() => setCurrentPage(1)} 
    disabled={currentPage === 1}
  >
    First
  </button>

  {/* Previous Page */}
  <button 
    onClick={() => setCurrentPage(currentPage - 1)} 
    disabled={currentPage === 1}
  >
    Prev
  </button>

  {/* Page Numbers */}
  {[...Array(totalPages)].map((_, i) => (
    <button 
      key={i} 
      onClick={() => setCurrentPage(i + 1)}
      className={currentPage === i + 1 ? "active-page" : ""}
    >
      {i + 1}
    </button>
  ))}

  {/* Next Page */}
  <button 
    onClick={() => setCurrentPage(currentPage + 1)} 
    disabled={currentPage === totalPages}
  >
    Next
  </button>

  {/* Last Page */}
  <button 
    onClick={() => setCurrentPage(totalPages)} 
    disabled={currentPage === totalPages}
  >
    Last
  </button>

</div>
    </>
  );
}

export default Jain;
