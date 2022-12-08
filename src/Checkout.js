import React from 'react'
import { Link } from 'react-router-dom'
import "./css/checkout.css"

function Checkout() {
  return (
      <div className="checkout__wrap">
      <h2>Shipping Details</h2>
      <br/>
      <form>
        <div className="checkout__form">
        <div className="checkout__column">
            <label>First Name* </label>
            <input type="text" required placeholder="firstname"/>
        </div>
        <div className="checkout__column">
            <label>Last Name* </label>
            <input type="text" required placeholder="lastname"/>
        </div>
        <div className="checkout__column">
            <label>Email* </label>
            <input type="email" required placeholder="abcdef.@gmail.com"/>
        </div>
        <div className="checkout__column">
            <label>Phone number* </label>
            <input type="text" required placeholder="xxxxxx1234"/>
        </div>
        <div className="checkout__column">
            <label>Address* </label>
            <input type="text" required placeholder="address"/>
        </div>
        <div className="checkout__column">
            <label>City* </label>
            <input type="text" required placeholder="city"/>
        </div>
        <div className="checkout__column">
            <label>State* </label>
            <input type="text" required placeholder="state"/>
        </div>
        <div className="checkout__column">
            <label>Zip/Postal code* </label>
            <input type="text" required placeholder="600001"/>
        </div>
        <Link to="/orderConfirmed">
        <div className="checkout__column"><button>Pay Now</button></div>
        </Link>
        </div>
      </form>
    </div>
  )
}

export default Checkout
