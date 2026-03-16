import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import {
  clearCart,
  decrement,
  increment,
  removeCart,
} from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { applycoupon, resetCoupon } from "./CouponSlice";
import { QRCode } from 'react-qr-code';
import emailjs from '@emailjs/browser';
import { addOrder } from "./OrderSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const { discount, message, applied  } = useSelector(globalstate => globalstate.coupon);


  const dispatch = useDispatch();
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [input, setInput] = useState("");

  /* ================= CALCULATIONS ================= */

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const manualDiscountAmount =
    (discountPercentage / 100) * total;

  const afterManualDiscount =
    total - manualDiscountAmount;

  const gst = 0.18 * afterManualDiscount;

  const totalWithGst =
    afterManualDiscount + gst;

  const couponDiscountAmount =
    (discount / 100) * total;

  const grandTotal =
    totalWithGst - couponDiscountAmount;

  const totalSaved =
    manualDiscountAmount + couponDiscountAmount;

                  const[checkout,setCheckout]=useState(false);
                  const[paymentMethod,setpaymentMethod]=useState("");
                  const[customerEmail, setCustomerEmail]=useState("");
                 
                 

   // 👇 Put this ABOVE handleCheckout
const generateOrderId = () => {
  const random = Math.floor(1000 + Math.random() * 9000);
  return "FOB-" + Date.now().toString().slice(-6) + random;
};

let purchasDetails={
  date:new Date().toLocaleDateString(),
  items:[...cartItems],
  totalprice:grandTotal,
};



const handleCheckout = () => {
 

  
  const orderId = generateOrderId();

  const templateParams = {
    order_id: orderId,

    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6scxpe6rajLKjeev7OAVFVHHPSX7xCZpCQ&s",

    orders: cartItems.map(item => ({
      name: item.name,
      price: (item.price * item.quantity).toFixed(2),
      units: item.quantity,
      image: window.location.origin + item.image
    })),

    cost: {
      shipping: 50,
      tax: gst.toFixed(2),
      total: grandTotal.toFixed(2)
    },

    email: customerEmail
  };

  emailjs.send(
    "service_pzkt2zq",
    "template_k8ao1ak",
    templateParams,
    "tYtbHh7QOvXjwOGqF"
  )
  .then(() => alert(`Email for your Order ${orderId} sent successfully!`))
  .catch((error) => console.error(error));
};   
  /* ================================================= */

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
     <h1 className="cart-title">🛒 Your Cart  ({cartItems.length} )</h1>
     <div className="cart-page">
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🛒</h2>
            <p>Add some delicious items to continue</p>
          </div>
        ) : (
          <>
           

            <div className="cart-layout">

              {/* ================= LEFT SIDE ================= */}
              <div className="cart-left">


                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div className="cart-row" key={item.id}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-img"
                      />

                      <div className="cart-info">
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>

                        <div className="qty-control">
                          <button
                            onClick={() =>
                              dispatch(decrement(item))
                            }
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              dispatch(increment(item))
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="item-right">
                        <div className="item-total">
                          ₹{item.quantity * item.price}
                        </div>

                        <button
                          className="remove-btn"
                          onClick={() => {
                            dispatch(removeCart(item));
                            toast.error("Cart Item Removed");

                            if (cartItems.length === 1) {
                              dispatch(resetCoupon());
                            }
                          }}
                        >
                          Remove
                        </button>

                        
                      </div>
                    </div>
                  ))}
                
                </div>

               

              </div>

              {/* ================= RIGHT SIDE BILL ================= */}
              <div className="cart-right">
                <div className="bill-card">

                  <h2>Bill Details</h2>

                  <div className="bill-row">
                    <span>Subtotal</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>

                  {discountPercentage > 0 && (
                    <div className="bill-row discount">
                      <span>Manual Discount</span>
                      <span>
                        -₹{manualDiscountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}

                  <div className="bill-row">
                    <span>GST (18%)</span>
                    <span>₹{gst.toFixed(2)}</span>
                  </div>

                  <div className="coupon-section">
                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                      value={input}
                      onChange={(e) =>
                        setInput(e.target.value)
                      }
                    />
                    <button
                      onClick={() =>
                        dispatch(applycoupon(input))
                      }
                    >
                      Apply
                    </button>
                  </div>

                {applied && (
                  <div className="cart-total" style={{ color: "#22c55e" }}>
                    Amount saved by coupon: ₹{couponDiscountAmount.toFixed(2)}
                  </div>
                )}

                  <hr />
                  {message && (
                    <div
                      className="cart-total"
                      style={{
                        color: applied ? "#22c55e" : "#ef4444",
                      }}
                    >
                      {message}
                    </div>
                  )}
                  <div className="bill-total">
                    <span>Grand Total</span>
                    <span>
                      ₹{grandTotal.toFixed(2)}
                    </span>
                  </div>

                  {totalSaved > 0 && (
                    <div className="saved-amount">
                      🎉 You Saved ₹{totalSaved.toFixed(2)}
                    </div>
                  )}

                  <button className="checkout-btn"  
                  onClick={() => setCheckout(true)}>
                    Proceed to Checkout
                  </button> 
                   <button className="checkout-btn"  
                  onClick={() => dispatch(addOrder(purchasDetails))}>
                    Update Orders
                  </button> 

                      {/* Manual Discount Buttons */}
                      <h3>Manual Discount</h3>
                <div className="discount-buttons">
                  <button onClick={() => setDiscountPercentage(10)}>
                    10%OFF
                  </button>
                  <button onClick={() => setDiscountPercentage(20)}>
                    20%OFF
                  </button>
                  <button onClick={() => setDiscountPercentage(30)}>
                    30%OFF
                  </button>
                </div>
                  { checkout &&
                  ( <div className="pay-buttons">
                      <button onClick={() => setpaymentMethod("card")}>Card Payment</button>
                      <button onClick={() => setpaymentMethod("qr")}>UPI Payment</button>
                  
                  </div>)}
                  { paymentMethod === "card" && (<div className="pay-card"><h3>CARD Payment not Available</h3></div>)}
              { paymentMethod === "qr" && (<div className="qr-container">
                <h3>Scan the Qr Code</h3>
                <div className="qr-box">
                <QRCode value={`upi://pay?pa=bairu.tarun@ybl&pn=TarunStore&am=${grandTotal.toFixed(2)}`} />
                </div>
                <div className="qr-message">
                <p>make payment from any upi app</p>
                </div>
                <div>
                  <label >Enter your Gmail to receive order confirmation</label>
                  <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="You@example.com" />
                  </div>
                  <div className="email-btn">
                    <button
                            onClick={handleCheckout} style={{ width: "80%" ,padding: "12px", backgroundColor: "#16a34a", color: "white",
                                                  border: "none",
                                                    borderRadius: "8px",
                                                       fontWeight: "600",
                                                       cursor: "pointer"}}>Checkout & sendEmail</button>
                  </div>
                </div>)}
           
                  
                </div>
              </div>
            
            </div>
              <div className="cart-top">  
                <button
                  className="clear-btn"
                  onClick={() => {
                    dispatch(clearCart());
                    dispatch(resetCoupon());
                    setDiscountPercentage(0);
                    toast.error("Cart Cleared")
                  }}
                >
                  Clear Cart
                </button>
                </div>
          
          </>
        
        )}
      </div>
        
      </div>
    </>
  );
}

export default Cart;