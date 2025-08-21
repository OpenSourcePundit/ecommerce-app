import React from "react";
import { useState, useContext } from "react";
import {BiHide,BiShow} from "react-icons/bi"
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "../../Contexts/dataContext";
import "./login.scss";
import { AuthContext } from "../../Contexts/authcontext/authcontext";
import { loginHandler } from "../../Utils/utils.js";
export const Login = () => {
  const location = useLocation();
  const { dataDispatch} = useContext(DataContext);
  const { isLogIn, setIsLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("adarshbalika@gmail.com");
  const [password, setPassword] = useState("adarshbalika");
  const [showPassword,setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("atlogin",email,password)
    await loginHandler({email,password,setIsLogIn});

    // try {
    //   const creds = {
    //     email: email,
    //     password: password,
    //   };
    //   const response = await fetch(`/api/auth/login`, {
    //     method: "POST",
    //     body: JSON.stringify(creds),
    //   });
    //   // saving the encodedToken in the localStorage
    //   const result = await response.json();
    //   console.log("resultLogin",result)
    //   if (result.encodedToken !== undefined) {
    //     setIsLogIn(true);
    //   }
    //   localStorage.setItem("encodedToken", result.encodedToken);
    //   localStorage.setItem("email", email);
    //   localStorage.setItem("password", password);
    //   localStorage.setItem("name", result.foundUser.firstName);
      
    // } catch (error) {
    //   console.log("error",error);
    // }

  if(isLogIn)
 {     
  try {
      const response = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      });
      const result = await response.json();
      dataDispatch({
        type: "fetch_cart",
        payload: result.cart,
      });
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      });
      const result = await response.json();
      dataDispatch({
        type: "fetch_wishlist",
        payload: result.wishlist,
      });
    } catch (err) {
      console.log(err);
    }
    }
    (location?.state)?(navigate(location?.state?.from?.pathname)):(navigate("/products"));
  };

  return (
    <div className="Container">
      <div className="login-img"></div>
       <div className="login-section">
         <div className="login-section-form">
        <h1>Log In</h1>
        <form action="">
         
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          
        <div className="password-section">
            <input
            type={showPassword?"text":"password"}
            value={password}
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="show-password" onClick={()=>setShowPassword(!showPassword)}>
            {showPassword? <BiHide size="20px"/> : <BiShow size="20px"/>}

          </div>
        </div>
          
          <div className="btns">
            <button
              className="btn btn1"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              Log In
            </button>
            {/* <button className="btn btn2" type="submit" onClick={(e)=>loginAsGuest(e)} >Log In as Guest</button> */}
          </div>
        </form>
        <button onClick={() => navigate("../signup")}>
          Don't have account? Register here
        </button>
      </div>
       </div>
    </div>
  );
};
