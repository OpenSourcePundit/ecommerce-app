import React from "react";

import "./navbar.css";
import logo from "../../Utils/black_on_trans.png"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "../../Contexts/dataContext";
import {AuthContext} from "../../Contexts/authcontext/authcontext"
import { HamMenu } from "./hammenu";

export function Navbar() {
  const navigate = useNavigate();

  const { dataDispatch, cartLength, wishlistLength } =
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
            <img src={logo} alt="bibliotec" srcset="" />
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
        <div className={`icons ${isLogIn?'visible':'hidden'}`}  >
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
        </div>
        {!isLogIn &&<div className="icons login-btn">
       <Link to="/login" className=" icons nav-icons">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>}
         <div className="ham-icon nav-icons">
            <HamMenu/>
          </div>
      </nav>
    </>
  );
}
