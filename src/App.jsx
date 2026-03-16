import Home from './Home'
import Veg from './Veg'
import Nonveg from './Nonveg'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Vegan from './Vegan'
import Jain from './Jain'
import Desserts from './Deserts'
import Cart from './Cart'

import { useSelector } from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css';
import  OrderList  from './OrderList'

import Registration from './Registration'
import NotFound from './Notfound'
import Login from './Login'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from './About'
import Services from './Services'
import Contact from './Contact'




function App() {

  const [profileOpen, setProfileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

useEffect(() => {
  const user = localStorage.getItem("loggedInUser");
  if(user){
    setLoggedIn(true);
  }
}, []);


  const handleLogout = () => {
  localStorage.removeItem("loggedInUser");
  setLoggedIn(false);
  window.location.href = "/";
};

   const cartItems = useSelector((state) => state.cart);
 let totalQuantity = cartItems.reduce((sum,item)=>sum+item.quantity,0);
  return (
    <BrowserRouter>
    <nav className="navbar">
  <h1 className="logo">
    Swadesh
    <span className="chakra-wrapper">
      <svg
        className="chakra-svg"
        viewBox="0 0 100 100"
        width="32"
        height="32"
      >
        {/* Outer Circle */}
        <circle cx="50" cy="50" r="45" stroke="#000080" strokeWidth="4" fill="none" />

        {/* Inner Circle */}
        <circle cx="50" cy="50" r="6" fill="#000080" />

        {/* 24 Spokes */}
        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2="50"
            y2="8"
            stroke="#000080"
            strokeWidth="3"
            transform={`rotate(${i * 15} 50 50)`}
          />
        ))}
      </svg>
    </span>
    Swad
  </h1>

  <div className="nav-links">
  <NavLink to="/" className="nav-item"><i class="fa-solid fa-house-chimney"></i>Home</NavLink>
  <NavLink to="/veg" className="nav-item"><i className="fa-solid fa-carrot"></i>Veg</NavLink>
  <NavLink to="/nonveg" className="nav-item"><i className="fa-solid fa-drumstick-bite"></i>NonVeg</NavLink>
  <NavLink to="/jain" className="nav-item"><i className="fa-solid fa-leaf"></i>Jain</NavLink>
  <NavLink to="/vegan" className="nav-item"><i className="fa-solid fa-apple-whole"></i>Vegan</NavLink>
  <NavLink to="/desserts" className="nav-item"><i className="fa-solid fa-ice-cream"></i>Desserts</NavLink>
  <NavLink to="/cart" className="nav-item">
  <i className="fa-solid fa-cart-shopping"></i>
  Cart
  <span className="cart-count">{totalQuantity}</span>
</NavLink>

  <NavLink to="/orderlist" className="nav-item">Orders</NavLink>

  {/* PROFILE ICON */}
   <div className="profile-menu">

  <i
    className="fa-solid fa-user profile-icon"
    onClick={() => setProfileOpen(!profileOpen)}
  ></i>

  <div className={`dropdown ${profileOpen ? "show" : ""}`}>
    {!loggedIn ? (
      <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </>
    ) : (
      <button onClick={handleLogout}>Logout</button>
    )}
  </div>

</div>

</div>
</nav>

<Routes>
  
  <Route path="/" element={<Home />} />
  <Route path="/veg" element={<Veg />} />
  <Route path="/nonveg" element={<Nonveg />} />
  <Route path="/jain" element={<Jain />} />
  <Route path="/vegan" element={<Vegan />} />
  <Route path="/desserts" element={<Desserts />} />
   <Route path="/cart" element={<Cart />} />
 
  
  <Route path="/orderlist" element={<OrderList />}/>
  
  <Route path="*" element={<NotFound/>}/>
  <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
  <Route path="/register" element={<Registration />}/>
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  
</Routes>




    </BrowserRouter>
  )
}

export default App;
