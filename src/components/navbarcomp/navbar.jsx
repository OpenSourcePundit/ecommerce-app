import React, { useState } from "react";

import "./navbar.css";
import booklogo from "../../biblioteclogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "../../Contexts/dataContext";
import {AuthContext} from "../../Contexts/authcontext/authcontext"

// import { useCartContext,useFilter,useWishListContext } from "../../context";
export function Navbar() {
  // const [searchValue, setSearchValue] = useState();
  // const {cartProducts} = useCartContext()
  // const {wishListState} = useWishListContext();
  // const {dispatch} = useFilter();

  // const itemInCartReducer = (prev,curr)=> prev+curr.qty;
  // const totalItemsInCart = cartProducts.cart.reduce(itemInCartReducer,0)
  const navigate = useNavigate();

  // const navigate = useNavigate();
  // let token = localStorage.getItem("token");
  // const LogUserOut = () => {
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };
  const { products, dataDispatch, cartLength, wishlistLength } =
    useContext(DataContext);
    const {isLogIn} = useContext(AuthContext)
  const handleSearch = (value) => {
    navigate("/products");
    dataDispatch({ type: "HandleSearch", payload: value });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={booklogo} alt="bibliotec" srcset="" />
          </Link>
        </div>
        <div className="searchbox">
          <form>
            <input className="input"
              type="text"
              placeholder="Search here"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="icons">
          <Link to="/wishlist" className="nav-icons">
            <FontAwesomeIcon icon={faHeart} />{" "}
            <span className="lengthItem">{wishlistLength}</span>{" "}
          </Link>
          <Link to="/cart" className="nav-icons">
            <FontAwesomeIcon icon={faCartShopping} />{" "}
            <span className="lengthItem">{cartLength}</span>
          </Link>
          <Link to="/profile" className="nav-icons">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <h3 className="nav-icons">
            {isLogIn && localStorage.getItem("name")}
          </h3>
        </div>
      </nav>
    </>
  );
}
