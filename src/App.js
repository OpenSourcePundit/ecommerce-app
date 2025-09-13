import React from "react"
import "./App.css";
import {useContext} from "react";
import {Routes,Route,Navigate,useLocation} from 'react-router-dom';


import MockAPI from "./pages/mockman";
import  {HomePage}  from "./pages/home/homepage";
import  {Signup}  from "./pages/login/signup";
import  {Wishlist}  from "./pages/wishlist/wishlist";
import  {Cart}  from "./pages/cart/cart";
import { LoadingFallBack } from "./components/loader/loading-fallback.jsx";

import {Login} from "./pages/login/login";
import {Navbar} from "./components/navbarcomp/navbar.jsx";
import {Footer} from "./components/footer/footer.jsx";
import {ProductListingPage} from "./pages/product/productlistingpage/productlistingpage";
import {ProductDetailsPage } from "./pages/product/productdetailspage/productdetailspage";
import {Profile} from "./pages/profile/profile";
import {AuthContext} from "./Contexts/authcontext/authcontext";

function App() {

   const {isLogIn,isLoading} = useContext(AuthContext);
  

   const RequiresAuth = ({children, isLogIn})=>{
     const location = useLocation();
     return isLogIn ? children :( <Navigate to="/login" state={{from:location}}  />)
   }
   


  return (
    <div className="App">
      
       <LoadingFallBack isLoading={isLoading}>
         <Navbar/>
         
       <Routes>
        
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductListingPage/>}/>
          <Route path="/products/:productId" element={<ProductDetailsPage/>}/>
          <Route path="/mockman" element={<MockAPI/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/cart" element={  <RequiresAuth isLogIn={isLogIn}>  <Cart/> </RequiresAuth>  } />
          <Route path="/login" element={   <Login />} />
          <Route path="/wishlist"  element={   <RequiresAuth isLogIn={isLogIn}>   <Wishlist/> </RequiresAuth> } />
          <Route path="/profile" element={  <RequiresAuth isLogIn={isLogIn}>  <Profile /> </RequiresAuth>  } />
         
       </Routes>
        
       <Footer/>
       </LoadingFallBack>
    </div>
  );
}

export default App;
