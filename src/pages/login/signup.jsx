import React from 'react'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {BiHide,BiShow} from "react-icons/bi"

import "./login.scss";
import { AuthContext } from '../../Contexts/authcontext/authcontext';

export const Signup = () => {

  const navigate = useNavigate();
  const {isLogIn, setIsLogIn, item} = useContext(AuthContext);
  const [showPassword,setShowPassword] = useState(false);
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const creds = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }
      const response = await fetch(`/api/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(creds)
      });
      // saving the encodedToken in the localStorage
      const result = await response.json();
      console.log("result",result);
      
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      if(result.encodedToken != undefined ){
      localStorage.setItem("encodedToken", result.encodedToken);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("name", result.createdUser.firstName);
      setIsLogIn(true);
      
      }
      else{
        alert(result.errors);
      }
    } catch (error) {
      // console.log(error);
      
    }





  };
  return (
    <div className="Container">
      <div className="login-img"></div>
      <div className="login-section">
        <div className="login-section-form">
        <h1>Sign UP</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          
           
          <input
            type="text"
            value={firstName}
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
            
           
          <input
            type="text"
            value={lastName}
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
            
       
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
            <button className="btn btn1 " type="submit">Create New Account</button>
            {/* <button className="btn btn2" type="submit">Log In as Guest</button> */}
          </div>
        </form>
        <button onClick={()=>navigate('/login')} >Already have account? Log In </button>
      </div>
      </div>
    </div>

  )
}

