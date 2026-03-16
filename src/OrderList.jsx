import React from "react";
import "./OrderList.css";
import { useSelector } from "react-redux";

function OrderList() {

  const orderHistory = useSelector((state) => state.orders);

  if (!orderHistory || orderHistory.length === 0) {
    return (
      <div className="orders-page">
        <h2 className="orders-title">Order History</h2>
        <p className="no-orders">No orders placed yet.</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h2 className="orders-title">Order History</h2>

      <div className="orders-container">
        {orderHistory.map((order, index) => (
          <div className="order-card" key={order.id || index}>
            <div className="order-header">
              <span className="order-date">{order.date}</span>
              <span className="order-total">₹{order.totalprice}</span>
            </div>

            <ul className="order-items">
              {order.items?.map((item, i) => (
                <li className="order-item" key={i}>
                  <span className="item-name">{item.name}</span>
                  <span className="item-details">
                    ₹{item.price} × {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderList;