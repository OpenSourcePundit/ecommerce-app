import {React,useState} from "react";
import "./login.css";

export const Login = () => {
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("are",e);
            console.log("aarrrreeeee",e.target);
        }
        // onChange={(e)=>handleSubmit(e)}
        // onClick={(e)=>handleSubmit(e)}

    return(
        <div className="main-container">
        <div className="auth-form-container">
            <form className="login-form"  onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="email">Email</label>
                <input type="email"   id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password"   id="password" name="password"   />
                <button type="submit" >Log In</button>
            </form>
            <button>register</button>
        </div>
        </div>
    )
}