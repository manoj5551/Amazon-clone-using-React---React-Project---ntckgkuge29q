import React from 'react'
import { Link } from 'react-router-dom'
import "./css/header.css"


function Header({cart}) {
  return (
    <>
    <div className="header">
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" className="header__logo"></img>
        </Link>
        <div className="header__search">
            <input type="text" />
            <img className="searchimg" alt="err" src="https://www.shutterstock.com/image-vector/search-icon-zoom-sign-flat-260nw-1496637569.jpg"/>
        </div>
        <div className="header__nav">
              <div className="header__option">
                <span className="header__option1">Hello Guest</span>
                <Link to="/signin">
                <span className="header__option2">Sign In</span>
                </Link>
              </div>
              <div className="header__option">
                <span className="header__option1">Return</span>
                <span className="header__option2">& Orders</span>
              </div>
              <div className="header__option">
                <span className="header__option1">Your</span>
                <span className="header__option2">Prime</span>
              </div>
              <div className="header__optionBasket">
                <Link to="/cart">
                <img className="basketimg" alt="err" src="https://img.favpng.com/3/5/16/shopping-cart-amazon-com-online-shopping-shopping-centre-png-favpng-xFtj3xz6nXYnYgptLLFBikk9E.jpg"/>
                <span className="basketnumber">{cart?.total_items}</span>
                </Link>
              </div>
        </div>
    </div>
     
     <div className="header__bottom">
        <ul>
          <li>All</li>
          <li>Todays deal</li>
          <li>New release</li>
          <li>Mobile</li>
          <li>Computer</li>
          <li>Cloths</li>
          <li>Shoes</li>
          <li>Fashion</li>
          <li>Electronics</li>
          <li>Home&Kitchen</li>
          <li>
            <img src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/SWM_400x39_Crushed-S2._CB620377409_.jpg" alt="err"/>
          </li>
        </ul>
     </div>
     </>
  )
}

export default Header
