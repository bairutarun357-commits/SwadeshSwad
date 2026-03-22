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
    },
    {
  name: "Palak Paneer",
  price: 230,
  description: "Paneer cubes cooked in a smooth spinach gravy.",
  image: "/palakpaneer.jpg"
},
{
  name: "Chole Masala",
  price: 190,
  description: "Spicy chickpea curry cooked in Punjabi style.",
  image: "/chole.jpg"
},
{
  name: "Malai Kofta",
  price: 260,
  description: "Soft paneer & potato dumplings in rich creamy gravy.",
  image: "/malaikofta.jpg"
},
{
  name: "Rajma Masala",
  price: 180,
  description: "Red kidney beans slow-cooked in thick tomato gravy.",
  image: "/rajma.jpg"
},
{
  name: "Baingan Bharta",
  price: 170,
  description: "Smoky mashed brinjal cooked with onions and spices.",
  image: "/baingan.jpg"
},
{
  name: "Veg Pulao",
  price: 170,
  description: "Fragrant rice cooked with vegetables and mild spices.",
  image: "/pulao.jpg"
},
{
  name: "Paneer Tikka Masala",
  price: 250,
  description: "Grilled paneer cooked in spicy tikka gravy.",
  image: "/paneertikka.jpg"
},
{
  name: "Mix Veg Curry",
  price: 180,
  description: "Seasonal vegetables cooked in rich Indian gravy.",
  image: "/mixveg.jpg"
},
{
  name: "Corn Masala",
  price: 190,
  description: "Sweet corn cooked in creamy spicy masala.",
  image: "/cornmasala.jpg"
},
{
  name: "Veg Hakka Noodles",
  price: 180,
  description: "Stir-fried noodles with vegetables and sauces.",
  image: "/noodles.jpg"
},
{
  name: "Gobi Manchurian",
  price: 200,
  description: "Crispy cauliflower tossed in Indo-Chinese sauce.",
  image: "/gobi.jpg"
},
{
  name: "Paneer Bhurji",
  price: 210,
  description: "Scrambled paneer cooked with onions and spices.",
  image: "/paneerbhurji.jpg"
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

export default Veg;