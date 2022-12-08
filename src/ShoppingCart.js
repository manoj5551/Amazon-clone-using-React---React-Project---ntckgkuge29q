import React from 'react'
import { Link } from 'react-router-dom'


import "./css/cart.css"
function ShoppingCart({cart,removefromCart}) {
    
  return (
    <div className="checkout">
      <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="err"/>
            <div>
                <h3>Hello Guest</h3>
                <h2 className="checkout__title">Your shopping Basket</h2>
                {
                    cart?.line_items?.map(items=>{
                        return(
                            <div className="checkoutproduct" key={items.id}>
                            <img src={items.image.url} alt="err" className="checkoutproduct__img"/>
                            <div className="checkoutproduct__info">
                                <p className="titlecheckoutproduct__title">{items.name}</p>
                                <p className="titlecheckoutproduct__price">
                                    <strong> {items.price.formatted_with_symbol} * {items.quantity} = ₹ {items.price.raw * items.quantity}</strong>
                                </p>
                                <button onClick={()=>removefromCart(items.id)}>Remove from Basket</button>
                            </div>
                        </div>
                        )
                    })
                }
                
            </div>
      </div>
      <div className="checkout__right">
            <div className="subtotal">
                <p>Subtotal ({cart?.total_items} items):<strong>{cart?.subtotal?.formatted_with_symbol}</strong> </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
            </div>
            <Link to="/checkout">
            <button>Proceed to Checkout</button>
            </Link>
      </div>
    </div>
  )
}

export default ShoppingCart
