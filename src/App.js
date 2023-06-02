import "./App.css";
import MockAPI from "./pages/mockman";
import  {HomePage}  from "./pages/home/homepage";
import  {Signup}  from "./pages/signup";
import  {Wishlist}  from "./pages/wishlist";
import  {Cart}  from "./pages/cart/cart";

import {Routes,Route} from 'react-router-dom';
import {Login} from "./pages/login/login";
import {Navbar} from "./components/navbarcomp/navbar.jsx";
import {Footer} from "./components/footer/footer.jsx";
import {ProductListingPage} from "./pages/product/productlistingpage/productlistingpage";
import {ProductDetailsPage } from "./pages/product/productdetailspage/productdetailspage";

function App() {
  return (
    <div className="App">
       {/* <div className="grid-child container-below-top">
                <div className="mod-custom custom banner-overlay" id="mod-custom238">
                      <div className="overlay">
                            <div className="ms-3 navbar-brand navbar-brand d-flex justify-content-between d-none d-md-block">
                               <a className="brand-logo text-decoration-none" href="/index.php">
    	                         <span className="fw-bold" title="web-eau.net">web-eau.net</span>
  	                           </a>
	                            <div className="site-description px-2">
                              <span className="small fst-italic">(prononcez web honnête)</span>
                              </div>
                              <img className="fs-3" src="/images/svg/ukrTrident.svg" alt="Ukraine Support" title="web-eau.net stands with Ukraine" width="21" height="35" loading="lazy"/>
                           </div>
                       </div>
                 </div>
        </div> */}
       <Navbar/>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductListingPage/>}/>
          <Route path="/products/:productId" element={<ProductDetailsPage/>}/>
          <Route path="/mockman" element={<MockAPI/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
