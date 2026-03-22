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
},
{
  name: "Red Velvet Cake",
  price: 220,
  description: "Soft and moist red velvet cake with cream cheese frosting.",
  image: "/redvelvet.jpg"
},
{
  name: "Black Forest Cake",
  price: 200,
  description: "Chocolate sponge layered with cream and cherries.",
  image: "/blackforest.jpg"
},
{
  name: "Tiramisu",
  price: 260,
  description: "Classic Italian dessert with coffee and mascarpone.",
  image: "/tiramisu.jpg"
},
{
  name: "Waffles",
  price: 180,
  description: "Crispy waffles served with syrup and toppings.",
  image: "/waffles.jpg"
},
{
  name: "Pancakes",
  price: 170,
  description: "Fluffy pancakes served with honey or chocolate.",
  image: "/pancakes.jpg"
},
{
  name: "Donuts",
  price: 140,
  description: "Soft fried donuts with chocolate glaze.",
  image: "/donuts.jpg"
},
{
  name: "Mango Delight",
  price: 160,
  description: "Refreshing mango dessert with cream layers.",
  image: "/mangodelight.jpg"
},
{
  name: "Kulfi",
  price: 120,
  description: "Traditional Indian frozen dessert with rich flavors.",
  image: "/kulfi.jpg"
},
{
  name: "Jalebi",
  price: 130,
  description: "Crispy spiral sweets soaked in sugar syrup.",
  image: "/jalebi.jpg"
},
{
  name: "Rabri",
  price: 150,
  description: "Thickened sweet milk dessert with dry fruits.",
  image: "/rabri.jpg"
},
{
  name: "Chocolate Truffle Cake",
  price: 240,
  description: "Rich chocolate cake with smooth ganache.",
  image: "/trufflecake.jpg"
},
{
  name: "Strawberry Ice Cream",
  price: 140,
  description: "Creamy strawberry flavored ice cream.",
  image: "/strawberryicecream.jpg"
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

export default Desserts;
