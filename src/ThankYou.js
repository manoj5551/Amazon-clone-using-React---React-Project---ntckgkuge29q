import React from 'react'
import { Link } from 'react-router-dom'
import "./css/checkout.css"

function ThankYou() {
  return (
    <div className="order__confirm">
      <h2>Thank you for your order !</h2>
      <h3>your order number is : 652561253</h3>
      <Link to="/"><button>Continue Shopping</button></Link>
    </div>
  )
}

export default ThankYou
