import { useContext } from "react";
import { AuthContext } from "../Contexts/authcontext/authcontext";

export const loginHandler = async ({email,password,setIsLogIn}) => {
console.log("emmm:",email,password)
    
      const creds = {
        email: email,
        password: password,
      };
      console.log("emmm11:",email,password)
try { console.log("emmm11:",email,password)
      const response = await fetch(`/api/auth/login`, {
        method: "POST",
        body: JSON.stringify(creds),
      });
      // saving the encodedToken in the localStorage
      const result = await response.json();
      console.log("resultLogin",result)
      if (result.encodedToken !== undefined) {
        setIsLogIn(true);
      }
      localStorage.setItem("encodedToken", result?.encodedToken);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("name", result?.foundUser?.firstName);
      
    } catch (error) {
      console.log("error",error);
    }

}