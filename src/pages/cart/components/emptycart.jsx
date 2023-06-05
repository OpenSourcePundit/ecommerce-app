import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./emptycart.scss";


export const EmptyCart = () => {
  const navigate = useNavigate();
    return (
    <div className='empty-cart-container'>
      <div className="container">
        <div className='cart-icon'><img src="https://i.ibb.co/H41ShNt/cart.webp" alt="cart" /></div>
        <p>Opps! Your cart looks empty!</p>
        <p>Add Books to your cart from our books collection</p>
        <button onClick={()=> navigate('/products')} >Continue Shopping <span><FaShoppingCart/></span></button>
      </div>
    </div>
  )
}

