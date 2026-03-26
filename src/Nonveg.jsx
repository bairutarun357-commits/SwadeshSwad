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
  name: "Hyderabadi Chicken Dum Biryani",
  price: 260,
  description: "Authentic dum-cooked biryani with rich spices and saffron.",
  image: "/hydchickenbiryani.jpg"
},
{
  name: "Hyderabadi Mutton Dum Biryani",
  price: 280,
  description: "classic, authentic regional name.",
  image: "/muttonbiryani1.jpg"
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
  name: "Chicken Shawarma",
  price: 190,
  description: "Grilled chicken wrapped in soft bread.",
  image: "/shawarma.jpg"
},
{
  name: "Chicken Korma",
  price: 270,
  description: "Mild and creamy chicken curry with cashew gravy.",
  image: "/chickenkorma.jpg"
},
 {
      name: "Chicken Biryani",
      price: 210,
      description: "Spicy basmati rice with juicy chicken pieces.",
      image: "/chickenbiryani.jpg"
    },
{
  name: "Pepper Chicken",
  price: 230,
  description: "Spicy black pepper chicken with South Indian flavors.",
  image: "/pepperchicken.jpeg"
},
{
  name: "Chicken Lollipop",
  price: 220,
  description: "Crispy fried chicken wings in Indo-Chinese style.",
  image: "/lollipop.jpg"
},
{
  name: "Apollo Fish",
  price: 260,
  description: "Hyderabadi style spicy fried fish with curry leaves.",
  image: "/apollofish.jpg"
},
{
  name: "Prawns Fry",
  price: 340,
  description: "Crispy fried prawns with garlic and spices.",
  image: "/prawnsfry.jpeg"
},
{
  name: "Mutton Rogan Josh",
  price: 340,
  description: "Slow-cooked mutton in rich Kashmiri gravy.",
  image: "/roganjosh.jpg"
},
{
  name: "Chicken Curry (Andhra Style)",
  price: 240,
  description: "Spicy Andhra-style chicken curry with bold flavors.",
  image: "/andhrachicken.jpg"
},
{
  name: "Egg Curry",
  price: 170,
  description: "Boiled eggs cooked in spicy onion-tomato gravy.",
  image: "/eggcurry.jpg"
},
{
  name: "Chicken Fried Rice",
  price: 200,
  description: "Rice stir-fried with chicken and vegetables.",
  image: "/chickenfriedrice.jpg"
},
{
  name: "Chicken Noodles",
  price: 190,
  description: "Stir-fried noodles with chicken and sauces.",
  image: "/chickennoodles.jpg"
},
{
  name: "Grilled Chicken",
  price: 300,
  description: "Juicy grilled chicken with smoky flavor.",
  image: "/grilledchicken.jpg"
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
export default Nonveg;
