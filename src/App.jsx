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
  const [user, setUser] = useState(null); // ✅ ADDED

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser")); // ✅ UPDATED
  if(storedUser){
    setLoggedIn(true);
    setUser(storedUser); // ✅ ADDED
  }
}, []);


  const handleLogout = () => {
  localStorage.removeItem("loggedInUser");
  setLoggedIn(false);
  setUser(null); // ✅ ADDED
  window.location.href = "/";
};

   const cartItems = useSelector((state) => state.cart);
 let totalQuantity = cartItems.reduce((sum,item)=>sum+item.quantity,0);

  return (
    <BrowserRouter>
    <nav className="navbar">

  {/* 🔰 LOGO */}
  <h1 className="logo">
    Swadesh
    <span className="chakra-wrapper">
      <svg viewBox="0 0 100 100" width="28" height="28">
        <circle cx="50" cy="50" r="45" stroke="#000080" strokeWidth="4" fill="none" />
        <circle cx="50" cy="50" r="6" fill="#000080" />
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

  {/* 🔗 NAV LINKS */}
  <div className="nav-links">

    <NavLink to="/" className="nav-item">
      <i className="fa-solid fa-house-chimney"></i> Home
    </NavLink>

    <NavLink to="/veg" className="nav-item">
      <i className="fa-solid fa-carrot"></i> Veg
    </NavLink>

    <NavLink to="/nonveg" className="nav-item">
      <i className="fa-solid fa-drumstick-bite"></i> NonVeg
    </NavLink>

    <NavLink to="/jain" className="nav-item">
      <i className="fa-solid fa-leaf"></i> Jain
    </NavLink>

    <NavLink to="/vegan" className="nav-item">
      <i className="fa-solid fa-apple-whole"></i> Vegan
    </NavLink>

    <NavLink to="/desserts" className="nav-item">
      <i className="fa-solid fa-ice-cream"></i> Desserts
    </NavLink>

    <NavLink to="/cart" className="nav-item">
      <i className="fa-solid fa-cart-shopping"></i>
      Cart <span className="cart-count">{totalQuantity}</span>
    </NavLink>

    <NavLink to="/orderlist" className="nav-item">
      <i className="fa-solid fa-list"></i> Orders
    </NavLink>

    <NavLink to="/about" className="nav-item">
      <i className="fa-solid fa-circle-info"></i> About
    </NavLink>

    <NavLink to="/contact" className="nav-item">
      <i className="fa-solid fa-phone"></i> Contact
    </NavLink>
  </div>

  {/* 👤 PROFILE */}
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
        <>
          <p className="username">{user?.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
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
  
  <Route path="/contact" element={<Contact />} />
</Routes>

    </BrowserRouter>
  )
}

export default App;