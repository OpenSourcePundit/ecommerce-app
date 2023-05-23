import React, { useState } from "react";

 import "./navbar.css";

 import { Link,useNavigate } from "react-router-dom";
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
    <nav className="navbar">
      <h2 className="logo">
        <Link  to="/">BOOK SHOP</Link>
      </h2>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Search for something..."
        />
      </div>
      <div className="top-links">
           <>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
             <Link to="/signup">
             <button className="btn">Signup</button>
           </Link>
           </>
          
        <Link to="/products">
          <button className="btn">Shop</button>
        </Link>
        <Link to="/wishlist" className="child-ecom">
          <span className="badgeecom two">length</span>
        </Link>
         <Link to="/login" className="child-ecom">
         <span className="badgeecom two">len</span>
       </Link>
       
        <Link to="/cart" className="child-ecom">
          <span className="badgeecom two">tokn</span>
        </Link>
          <Link to="/login" className="child-ecom">
          <span className="badgeecom two">token</span>
        </Link>
      </div>
    </nav>
  );
};
