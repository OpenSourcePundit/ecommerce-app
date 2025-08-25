import React from 'react'
import {AiFillHeart} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import "./emptywishlist.scss";


export const EmptyWishlist = () => {
  const navigate = useNavigate();
    return (
    <div className='empty-wishlist-container'>
      <div className="container">
        <div className='wishlist-icon'><img src="https://i.ibb.co/xCdQ6RF/Wishlist-Icon.png" alt="cart" /></div>
        <p>Opps! Your Wishlist looks empty!</p>
        {/* <p>Add Books to your Wishlist from our books collection</p> */}
        <button onClick={()=> navigate('/products')} >Continue Shopping <span><AiFillHeart/></span></button>
      </div>
    </div>
  )
}

