import {React,useState,useContext} from "react";
import {useNavigate} from "react-router-dom";
import {DataContext} from "../../Contexts/dataContext"
import "./login.css";

export const Login = () => {
    const {dataDispatch, cartLength, wishlistLength,  cart, wishlist} = useContext(DataContext);
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const creds = {
          email: email,
          password: password,
        } 
        const response = await fetch(`/api/auth/login`, {
          method: 'POST',
          body: JSON.stringify(creds)
        });
        // saving the encodedToken in the localStorage
        const result = await response.json();
        localStorage.setItem("encodedToken", result.encodedToken);
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
  };


  const handleLogout = ()=>{
    localStorage.removeItem("encodedToken");
    dataDispatch({
      type:"logout",
      
    })
  }


    return(
        <div className="main-container">
        <div className="auth-form-container">
            <form className="login-form"  onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email}  id="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password"  value={password} id="password" name="password"  onChange={(e)=>setPassword(e.target.value)}  />
                <button type="submit" >Log In</button>
            </form>
            <button>register</button>
            <button onClick={handleLogout}>logout</button>
        </div>
        </div>
    )
}