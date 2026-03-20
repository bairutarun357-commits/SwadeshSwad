import React, { useState } from "react";
import "./Fz.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Vegan() {
  let dispatch= useDispatch();

  const veganItems = [
    {
      name: "Vegan Buddha Bowl",
      price: 280,
      description: "Healthy bowl with quinoa, veggies & tofu.",
      image: "/buddhabowl.jpg"
    },
    {
      name: "Vegan Burger",
      price: 220,
      description: "Plant-based patty with fresh lettuce & sauce.",
      image: "/veganburger.jpg"
    },
    {
      name: "Vegan Pasta",
      price: 240,
      description: "Creamy dairy-free white sauce pasta.",
      image: "/veganpasta.jpg"
    },
    {
      name: "Vegan Salad",
      price: 180,
      description: "Fresh greens with olive oil dressing.",
      image: "/vegansalad.jpg"
    },
    {
  name: "Vegan Wrap",
  price: 190,
  description: "Whole wheat wrap filled with fresh veggies.",
  image: "/veganwrap.jpg"
},
{
  name: "Vegan Smoothie Bowl",
  price: 210,
  description: "Fruit smoothie topped with nuts & seeds.",
  image: "/smoothiebowl.jpg"
},
{
  name: "Vegan Tacos",
  price: 230,
  description: "Mexican tacos with plant-based filling.",
  image: "/vegantacos.jpg"
},
{
  name: "Vegan Pizza",
  price: 300,
  description: "Dairy-free cheese with fresh toppings.",
  image: "/veganpizza.jpg"
},
{
  name: "Vegan Soup",
  price: 160,
  description: "Healthy vegetable clear soup.",
  image: "/vegansoup.jpg"
}

  ];

    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = veganItems.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(veganItems.length / itemsPerPage);

  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />
    <div className="veg-container">
   

      <div className="card-container">
  {currentItems.map((item, index) => (
    <div className="card sweet-theme" key={index}>
      <div className="badge">Vegan</div>
      <img src={item.image} alt={item.name} />

      {/* This area expands to center the text */}
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>

      {/* This area stays at the absolute bottom of the card */}
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

export default Vegan;
