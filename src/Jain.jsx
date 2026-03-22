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
},
{
  name: "Jain Palak Paneer",
  price: 250,
  description: "Paneer cooked in spinach gravy without onion & garlic.",
  image: "/jainpalakpaneer.jpg"
},
{
  name: "Jain Malai Kofta",
  price: 270,
  description: "Soft kofta balls in creamy gravy (no onion, no garlic).",
  image: "/jainkofta.jpg"
},
{
  name: "Jain Tomato Curry",
  price: 180,
  description: "Tangy tomato-based curry with mild spices.",
  image: "/jaintomato.webp"
},
{
  name: "Jain Capsicum Masala",
  price: 200,
  description: "Capsicum cooked with aromatic Jain spices.",
  image: "/jaincapsicum.jpg"
},
{
  name: "Jain Corn Curry",
  price: 210,
  description: "Sweet corn cooked in creamy Jain-style gravy.",
  image: "/jaincorn.jpg"
},
{
  name: "Jain Veg Fried Rice",
  price: 180,
  description: "Rice stir-fried with vegetables (no root veg).",
  image: "/jainfriedrice.jpg"
},
{
  name: "Jain Hakka Noodles",
  price: 180,
  description: "Noodles tossed with vegetables and sauces (no onion/garlic).",
  image: "/jainnoodles.jpg"
},
{
  name: "Jain Moong Dal",
  price: 150,
  description: "Light and healthy moong dal prepared Jain style.",
  image: "/jainmoongdal.jpg"
},
{
  name: "Jain Tawa Roti",
  price: 40,
  description: "Soft whole wheat roti without any root ingredients.",
  image: "/jainroti.jpg"
},
{
  name: "Jain Jeera Rice",
  price: 150,
  description: "Basmati rice flavored with cumin and ghee.",
  image: "/jainjeerarice.jpg"
},
{
  name: "Jain Sweet Lassi",
  price: 90,
  description: "Refreshing yogurt drink, lightly sweetened.",
  image: "/jainlassi.jpg"
},
{
  name: "Jain Fruit Salad",
  price: 120,
  description: "Fresh seasonal fruits served chilled.",
  image: "/jainfruitsalad.jpg"
}

  ];

   const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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
