import React, { useState } from "react";
import "./Fz.css";   // IMPORTANT: use same CSS
import { addToCart } from "./CartSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Nonveg() {

  let dispatch= useDispatch();
  const nonvegItems = [
    {
      name: "Chicken Biryani",
      price: 210,
      description: "Spicy basmati rice with juicy chicken pieces.",
      image: "/chickenbiryani.jpg"
    },
    {
      name: "Butter Chicken",
      price: 280,
      description: "Creamy tomato gravy with tender chicken.",
      image: "/ButterChicken.jpg"
    },
    {
      name: "Mutton Curry",
      price: 320,
      description: "Rich and spicy mutton cooked with traditional spices.",
      image: "/muttoncuury.jpg"
    },
    {
      name: "Chicken 65",
      price: 200,
      description: "Crispy deep-fried spicy chicken starter.",
      image: "/chicken65.jpg"
    },
    {
  name: "Fish Fry",
  price: 250,
  description: "Crispy fried fish with Indian spices.",
  image: "/fishfry.jpg"
},
{
  name: "Chicken Tandoori",
  price: 300,
  description: "Smoky grilled chicken with spices.",
  image: "/tandoori.png"
},
{
  name: "Prawn Masala",
  price: 350,
  description: "Spicy prawn curry in rich gravy.",
  image: "/prawnmasala.jpg"
},
{
  name: "Mutton Biryani",
  price: 250,
  description: "Boiled eggs cooked in spicy masala.",
  image: "/muttonbiryani.jpg"
},
{
  name: "Chicken Shawarma",
  price: 190,
  description: "Grilled chicken wrapped in soft bread.",
  image: "/shawarma.jpg"
}

  ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
  
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
  
    const currentItems = nonvegItems.slice(firstIndex, lastIndex);
  
    const totalPages = Math.ceil(nonvegItems.length / itemsPerPage);
  

 return (
  <>

    <ToastContainer position="top-right" autoClose={2000} />
    <div className="veg-container">
      

      <div className="card-container">
        {currentItems.map((item, index) => (
          <div className="card nonveg-theme" key={index}>
            <div className="badge">Non-Veg</div>
            <img src={item.image} alt={item.name} />

            {/* This part will be perfectly centered */}
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>

            {/* NEW: This part will sit at the very bottom */}
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
export default Nonveg;
