import React, { useState } from 'react';
import './Fz.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Veg() {

  const dispatch = useDispatch();

  const vegItems = [
    {
      name: "Paneer Butter Masala",
      price: 250,
      description: "Creamy tomato-based curry with soft paneer cubes.",
      image: "/butterpaneer.jpg"
    },
    {
      name: "Veg Biryani",
      price: 180,
      description: "Aromatic basmati rice cooked with fresh vegetables and spices.",
      image: "/v.jpg"
    },
    {
      name: "Dal Tadka",
      price: 150,
      description: "Yellow lentils tempered with ghee, garlic, and spices.",
      image: "/dal.jpg"
    },
    {
      name: "Mushroom Curry",
      price: 200,
      description: "Spicy mushroom gravy cooked with onion and tomato.",
      image: "/mushroom.jpg"
    },
    {
      name: "Shahi Paneer",
      price: 240,
      description: "Soft paneer cubes simmered in a velvety, mildly sweet gravy.",
      image: "/shahi.jpg"
    },
    {
      name: "Veg Fried Rice",
      price: 180,
      description: "Rice tossed with fresh vegetables.",
      image: "/vegfriedrice.jpg"
    },
    {
      name: "Aloo Gobi",
      price: 160,
      description: "Potato and cauliflower cooked with spices.",
      image: "/aloogobi.jpg"
    },
    {
      name: "Kadai Paneer",
      price: 220,
      description: "Paneer cooked in rich kadai masala gravy.",
      image: "/kadaipaneer.jpg"
    },
    {
      name: "Veg Manchurian",
      price: 200,
      description: "Vegetable balls in spicy Indo-Chinese sauce.",
      image: "/vmanchurian.jpg"
    }
  ];


   const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = vegItems.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(vegItems.length / itemsPerPage);

  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />
    <div className="veg-container">
      
<div className="card-container">
  {currentItems.map((item, index) => (
    <div className="card veg-theme" key={index}>
      {/* Badge stays top-left */}
      <div className="badge">Veg</div>
      
      {/* Fixed-size Image */}
      <img src={item.image} alt={item.name} />

      {/* Description Area (Flexible height) */}
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>

      {/* Price and Button Area (Pinned to bottom) */}
      <div className="card-bottom">
        <span className="price">₹{item.price}</span>
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

export default Veg;