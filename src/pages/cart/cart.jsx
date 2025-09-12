import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { SingleCartCard } from './components/cartCard'
import { EmptyCart } from './components/emptycart';
import "./cart.scss";
import { DataContext } from '../../Contexts/dataContext';


export const Cart = () => {

const {cart, dataDispatch,cartLength} = useContext(DataContext);
  



  const getData = async() =>{
    const token = localStorage.getItem("encodedToken");
    try{
        const response = await fetch("/api/user/cart",{
          method: "GET",
          headers: {
            "authorization": token,
          }
        })
        const result =  await response.json();
        dataDispatch({
          type:"updateCart",
          payload: result.cart
        })
    }
    catch(err){
        console.log(err);
    }
  }
  
  useEffect(()=>{
    getData();
  },[]);

   

  return (
    cart.length >= 1 ? (
      <div className='cart-container'>
        <div className="cart-title" ><p>Cart : <span>{cartLength}</span></p></div>
        <div className="cart-main-container">
            <div className="cart-cards">
            {
              cart.map((card, index)=>(
                  <SingleCartCard card={card} index={index}/>
              ) )
            }
            </div>
            <div className="price-section">
              <div className='price-section-heading'>Price Details</div>
            {
              cart.map(({_id, title, price, qty})=>{
                return(
                  <div className="price" key={_id}>
                    <p className='title1'>  {title}{" "}({qty}) </p>
                    <p className='amount'>{`₹ ${price * qty}`}</p>
                  </div>
                )
              })
            }
            <div className="discount">
              <p className='dis1'>Discount </p>
                
              <p className='number'>-
                {cart.reduce((total, acc)=> total + (acc.price - acc.newPrice)*(acc.qty) , 0)}
              </p>
            </div>
            <div className="total-price">
              <p className='dis1'>Total Price</p>
              <p className='number'> ₹{' '}
              {
                Math.floor(cart.reduce((total, acc)=> total + acc.newPrice * acc.qty, 0))
              }
              </p>
            </div>

            <div className="checkout">
              <button className='checkBtn btn'>Checkout</button>  
            </div> 

            </div>

               
        </div>    
    </div>
    ) : (
      <EmptyCart/>
    )
  )
}

 