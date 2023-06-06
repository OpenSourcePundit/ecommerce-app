import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Contexts/dataContext";
import "./login.scss";
import { AuthContext } from "../../Contexts/authcontext/authcontext";

export const Login = () => {

  const {dataDispatch,cart} = useContext(DataContext);
  const {isLogIn, setIsLogIn, item} = useContext(AuthContext);
  console.log("Item", item);
  const navigate = useNavigate();

  const [email, setEmail] = useState("adarshbalika@gmail.com");
  const [password, setPassword] = useState("adarshbalika");
  console.log("loginCheck0:",isLogIn);
  
  const handleSubmit = async (e) => {
console.log("yha pahuche");
    // e.preventDefault();
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
          console.log("loginCheckx:",isLogIn);
        }
        console.log(result)
        
        console.log("loginCheck1:",isLogIn);
        localStorage.setItem("encodedToken", result.encodedToken);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("name", result.foundUser.firstName);
      } catch (error) {
        console.log(error);
      }
      console.log("cartbefore0",cart)
      try{
        const response = await fetch("/api/user/cart",{
          method: "GET",
          headers: {
            "authorization": localStorage.getItem("encodedToken"),
          }
        })
        const result =  await response.json();
        console.log("cartbtw1",cart)
        dataDispatch({
          type:"fetch_cart",
          payload: result.cart,
        })
    }

      catch(err){
        console.log(err);
    }
    console.log("cartafter",cart);
  };

 

  console.log("loginCheck2:",isLogIn);
  

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