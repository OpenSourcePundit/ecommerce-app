import React from 'react'
import { useContext} from 'react'
import { DataContext } from '../../Contexts/dataContext'
import {EmptyWishlist} from "./components/emptywishlist"
import SingleWishlistCard from "./components/wishlistcard"
import {AuthContext} from "../../Contexts/authcontext/authcontext"
import "./wishlist.scss";

export const Wishlist = () => {

    const {wishlist} = useContext(DataContext);
    const {setIsLogIn} = useContext(AuthContext);

    console.log("wishList Main",wishlist);
    
    if(localStorage.getItem("encodedToken")!=undefined){setIsLogIn(true)}
  
    return (
    wishlist.length >= 1 ? (
        <div className='wishlist-container'>
          <div className="wishlist-title" >
            <p>Wishlist <span>{wishlist.length}</span></p>
          </div>
        
              <div className="wishlist-cards">
              {
                wishlist.map((card, index)=>(
                    <SingleWishlistCard card={card} index={index}/>
                ) )
              }
              </div>   
          </div>    
      
      ) : (
        <EmptyWishlist/>
      )
    )
  
      }

