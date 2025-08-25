import React from "react";
import { useContext } from "react";
import { useParams, useNavigate,Navigate, useLocation } from "react-router-dom";
import { DataContext } from "../../../Contexts/dataContext";
import { AiFillStar,AiOutlineHeart, } from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa"
import { BsTagFill, BsLightningFill } from "react-icons/bs";
import { AuthContext} from "../../../Contexts/authcontext/authcontext"

import "./productdetailspage.scss";

export const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let result = {};
  let result1 = {};

  const { productId } = useParams();
  const { products, dataDispatch,cart, wishlist } = useContext(DataContext);
  const { isLogIn} = useContext(AuthContext);

  
  const product = products.find((prod) => prod._id === productId);

  const {
    _id, title, author, image, price, newPrice, discount,
    Pages, Language, rating, categoryName, cashOnDelivery,
    fastDelivery,
  } = product;
  
  
  const isInCart = cart.some((item)=> item._id === product._id);
  const handleAddCart = async (prod) => {
    if(isLogIn){
      try {
       const prod1 = {
        product: prod
       }
       const encodedToken = localStorage.getItem("encodedToken");
        const response = await fetch(`/api/user/cart`, {
          method: 'POST',
          headers: {
            "authorization": encodedToken
          },
          body: JSON.stringify(prod1)
        });
        // saving the encodedToken in the localStorage
        result = await response.json();
        
        dataDispatch({
          type: "handleCart",
          payload: result.cart,
        })
      } catch (error) {
        console.log(error);
      }
    }else{
        navigate("/login",{state:{from:location}})
    }
    }
    const isInWishlist = wishlist.some((item)=> item._id === product._id);
    
    
    const handleWishlist = async (prod) => {
      if(isLogIn){try {
         const encodedToken = localStorage.getItem("encodedToken");
          const response = await fetch ( isInWishlist ? `/api/user/wishlist/${prod._id}` : `/api/user/wishlist`, {
            method: isInWishlist ? 'DELETE' : 'POST', 
            headers: {
              "authorization": encodedToken
            },           
            body: isInWishlist ? ("") : (JSON.stringify({product: prod}))
          });
          // saving the encodedToken in the localStorage
          result1 = await response.json();
         
          dataDispatch({
            type: "handleWishlist",
            payload: result1.wishlist,
          })
          console.log("wishlist", wishlist, "productid", product._id );
        } catch (error) {
          console.log(error);
        }
      }else{
        navigate("/login",{state:{from:location}})
      }
    }


  return (
    <div className="product-page-container" key={_id} >
      <div className="product-page-main">
        <div className="main-sections">
          <div className="image-container">
            <img src={image} alt=""/>
          </div>

          <div className="details-container">
            <div className="title">
              <div>{title}</div>
            </div>
            <div className="rating">
              <h4>{rating}</h4>
              <h5>
                <AiFillStar />
              </h5>
            </div>
            <div className="price-details">
              <div className="cprice">
                <h4>₹{newPrice} </h4>
              </div>
              <div className="oprice">
                <h4>₹{price}</h4>
              </div>
              <div className="discount">
                <h4>({discount}% OFF)</h4>
              </div>
            </div>
            <div className="few-left">
              
                <p>
                  <BsLightningFill />
                </p>
                <h5> Hurry, Only Few Left</h5>
              
            </div>
            
            <div className="tag-section">
                <div className="tag">
                    <h5><BsTagFill/></h5><p>FastDelivery {fastDelivery ?"Available":"Unavailabe" }</p>
                </div>
                <div className="tag">
                    <h5><BsTagFill/></h5><p>Inclusive of All Taxes</p>
                </div>
                {cashOnDelivery && <div className="tag">
                    <h5><BsTagFill/></h5><p>Cash On Delivery</p>
                </div>}
                
            </div>
               
           
            
            <div className="highlights-section">
              <div className="highlight">
                    
                        <p className="auth">Pages: </p>
                        <p className="cate">{Pages}</p>
                    
                </div>
                <div className="highlight">
                    
                        <p className="auth">Author: </p>
                        <p className="cate">{author}</p>
                    
                </div>
                <div className="highlight">
                    
                        <p className="auth">Category: </p>
                        <p className="cate">{categoryName}</p>
                    
                </div>
                <div className="highlight">
                    
                        <p className="auth">Language: </p>
                        <p className="cate">{Language}</p>
                    
                </div>
            </div>
          </div>
        </div>
        <div className="buttons">
            {
          isInCart ? <button className='btn btn-secondary' id="detail-pg-cart" onClick={()=> navigate('/cart')}>
                    <FaShoppingCart/><span> Go to Cart </span>
                </button>
              :
              <button className='btn' id="detail-pg-cart"  onClick={()=>handleAddCart(product)}>
              <FaShoppingCart/><span> Add to Cart</span>
             </button> 
        } 
            {
        isInWishlist ? <button className='btn un-wishlist' id="detail-pg-wishlist" onClick={()=> handleWishlist(product)}>
                    <AiOutlineHeart/><span> Un-Wishlist </span>
                </button>
              :
              <button className='btn ' id="detail-pg-wishlist" style={{}} onClick={()=>handleWishlist(product)}>
              <AiOutlineHeart/><span >Wishlist</span>
             </button> 
        }


            {/* <button className="btn" ><AiOutlineHeart/> <span>Add to Wishlist</span> </button>    */}
        </div>
      </div>
    </div>
  );
};