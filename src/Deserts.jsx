import React, { useState } from "react";
import "./Fz.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Desserts() {
 let dispatch= useDispatch();
  const dessertItems = [
    {
      name: "Chocolate Brownie",
      price: 150,
      description: "Rich chocolate brownie with nuts.",
      image: "/brownie.webp"
    },
    {
      name: "Gulab Jamun",
      price: 120,
      description: "Soft milk-solid balls in sugar syrup.",
      image: "/gulabjamun.webp"
    },
    {
      name: "Ice Cream Sundae",
      price: 180,
      description: "Vanilla ice cream with chocolate sauce.",
      image: "/sundae.jpg"
    },
    {
      name: "Cheesecake",
      price: 220,
      description: "Creamy baked cheesecake slice.",
      image: "/cheesecake.jpg"
    },
    {
  name: "Rasmalai",
  price: 140,
  description: "Soft cottage cheese balls in sweet milk.",
  image: "/rasmalai.webp"
},
{
  name: "Chocolate Lava Cake",
  price: 200,
  description: "Warm cake with molten chocolate center.",
  image: "/lavacake.jpg"
},
{
  name: "Kaju Katli",
  price: 180,
  description: "Traditional Indian cashew sweet.",
  image: "/kajukatli.webp"
},
{
  name: "Fruit Custard",
  price: 130,
  description: "Creamy custard with mixed fruits.",
  image: "/fruitcustard.webp"
},
{
  name: "Milkshake",
  price: 150,
  description: "Thick and creamy flavored milkshake.",
  image: "/milkshake.jpeg"
}

  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = dessertItems.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(dessertItems.length / itemsPerPage);
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />

    <div className="veg-container">

    <div className="card-container">
  {currentItems.map((item, index) => (
    <div className="card sweet-theme" key={index}>
      <div className="badge">Sweet</div>
      <img src={item.image} alt={item.name} />

      {/* Centers Name and Description */}
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>

      {/* Pins Price and Button to the bottom */}
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

export default Desserts;
