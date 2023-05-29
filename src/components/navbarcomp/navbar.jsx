import React, { useState } from "react";

 import "./navbar.css";
import booklogo from "../../biblioteclogo.png" 
 import { Link,useNavigate } from "react-router-dom";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faHeart,faCartShopping,faUser,faBars} from '@fortawesome/free-solid-svg-icons'

// import { useCartContext,useFilter,useWishListContext } from "../../context";
export function Navbar() {
  // const [searchValue, setSearchValue] = useState();
  // const {cartProducts} = useCartContext()
  // const {wishListState} = useWishListContext();
  // const {dispatch} = useFilter();

  // const itemInCartReducer = (prev,curr)=> prev+curr.qty;
  // const totalItemsInCart = cartProducts.cart.reduce(itemInCartReducer,0)
  

  // const navigate = useNavigate();
  // let token = localStorage.getItem("token");
  // const LogUserOut = () => {
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };

  return (
    <>


    <nav className="navbar">
      <div className="logo">
        <a href="/"><img src={booklogo} alt="bibliotec" srcset="" /></a>
      </div>
      <div className="searchbox">
        <form>
          <input type="text" placeholder="Search here" />
        </form>
      </div>
      <div className="icons">
        <a href="/wishlist" className="nav-icons"><FontAwesomeIcon icon={faHeart} /></a>
        <a href="/cart" className="nav-icons"><FontAwesomeIcon icon={faCartShopping} /></a>
        <a href="/login" className="nav-icons"><FontAwesomeIcon icon={faUser} /></a>
        <a href="" className="nav-icons"><FontAwesomeIcon icon={faBars} /></a>
      </div>
      </nav>
      {/* <div className="links">
        <a href="/cart"> Cart</a><br/>
        <a href="/wishlist">Wishlist</a><br/>
        <a href="/orders">Orders</a><br/>
        <a href="/address">Addresses</a><br/>
        <a href="/login"><FontAwesomeIcon icon={faUser} /> Login</a><br/>
      </div> */}
      </>
    
  );
};
export function Footer(){
  return(
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright © 2023</p>
      </div>
    </footer>
  )
}
