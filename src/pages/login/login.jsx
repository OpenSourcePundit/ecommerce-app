import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { DataContext } from "../../Contexts/dataContext";
import "./login.scss";
import { AuthContext } from "../../Contexts/authcontext/authcontext";


export const Login = () => {
  const location = useLocation();
  const {dataDispatch,cart} = useContext(DataContext);
  const {isLogIn, setIsLogIn,} = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("adarshbalika@gmail.com");
  const [password, setPassword] = useState("adarshbalika");
  console.log("loginCheck0:",isLogIn);
  
  const handleSubmit = async (e) => {
     e.preventDefault();
    try {
        const creds = {
          email: email,
          password: password,
        } 
        console.log(creds);
        const response = await fetch(`/api/auth/login`, {
          method: 'POST',
          body: JSON.stringify(creds)
        });
        // saving the encodedToken in the localStorage
        const result = await response.json();
        if(result.encodedToken != undefined){
          setIsLogIn(true);
        }
        localStorage.setItem("encodedToken", result.encodedToken);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("name", result.foundUser.firstName);
        navigate(location?.state?.from?.pathname);
      } catch (error) {
        console.log(error);
      }
    
    try{
      const response = await fetch("/api/user/cart",{
        method: "GET",
        headers: {
          "authorization": localStorage.getItem("encodedToken"),
        }
      })
      const result =  await response.json();
      dataDispatch({
        type:"fetch_cart",
        payload: result.cart,
      })
  } 
  catch(err){
      console.log(err);
  }
  try{
    const response = await fetch("/api/user/wishlist",{
      method: "GET",
      headers: {
        "authorization": localStorage.getItem("encodedToken"),
      }
    })
    const result =  await response.json();
    dataDispatch({
      type:"fetch_wishlist",
      payload: result.wishlist,
    })
} 
catch(err){
    console.log(err);
}



  };

  

  return (
    <div className="Container">
      <div className="loginSection">
        <h1>Log In</h1>
        <form action="">
          <label  htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="***********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btns">
            <button className="btn btn1" type="button" onClick={(e) => handleSubmit(e)}>Log In</button>
            {/* <button className="btn btn2" type="submit" onClick={(e)=>loginAsGuest(e)} >Log In as Guest</button> */}
          </div>
        </form>
        <button onClick={()=> navigate('../signup')}>Don't have account? Register here</button>
      </div>

     
    </div>
  );
};