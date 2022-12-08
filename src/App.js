import Header from "./Header";
import Product from "./Product";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import commerce from "./lib/Commerce";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import ThankYou from "./ThankYou";
import Signin from "./Signin";

function App() {

  const [productsList , setProductsList] = useState([])
  const [cart , setCart] = useState([])

  const fetchProducts = async ()=>{
    const response = await commerce.products.list()
    //console.log(response)
    setProductsList(response.data)
  } 
  const addToCart = async (proId,qty)=>{
    const response = await commerce.cart.add(proId,qty)
    console.log(response)
    setCart(response.cart)
  } 

  const fetchCart = async()=>{
    setCart(await commerce.cart.retrieve())
  }

  const removefromCart=async(proId)=>{
    const responsse = await commerce.cart.remove(proId)
    setCart(responsse.cart)
  }
  useEffect(()=>{
    fetchProducts()
    fetchCart()
  },[])
  return (
    <Router>
      <div className="App">
        <Header cart={cart}/>
        <Switch>
          <Route exact path="/">
                <div className="banner">
                      <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt="err"/>
                  </div>
            <Product productsList={productsList} addToCart={addToCart}/>
          </Route>
          <Route exact path="/cart">
                <ShoppingCart cart={cart} removefromCart={removefromCart}/>
          </Route>
          <Route exact path="/checkout">
                <Checkout/>
          </Route>
          <Route exact path="/orderConfirmed">
                <ThankYou/>
          </Route>
          <Route exact path="/signin">
                <Signin/>
          </Route>
          </Switch>  
          </div>
    </Router>
  )
}

export default App;
