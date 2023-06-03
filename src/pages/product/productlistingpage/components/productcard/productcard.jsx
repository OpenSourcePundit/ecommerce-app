import {React} from 'react'
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCartShopping,faUser,faBars,faStar} from '@fortawesome/free-solid-svg-icons'

import "./productcard.css";

export const ProductCard = ({prod}) =>{     
    const navigate = useNavigate();

    const productdetailsclickHandler = () =>{
        //console.log(e.target.value);
        console.log(prod);
        navigate(`./${prod._id}`);        
    }
    return(
        // <div className="container">
            <div className="card" onClick={productdetailsclickHandler}>

                <div className="img">
                    <img src={prod.image} alt="" width="auto" height="200px" />
                </div>
                <div className="content">
                    <div className="review-container">
                        <div className="stars">
                        <span>Reviews</span>
                        {[1,2,3,4,5].map((i)=>
                            i<=prod.rating ? < FontAwesomeIcon icon={faStar} style={{color: "#f08c00",}} />
                            :<FontAwesomeIcon icon={faStar} />                        
                        )}
                        </div>                        
                    </div>
                    <h5 className="price">Rs.{prod.newPrice}</h5>
                    <div className="name">{prod.title}</div>
                    <div className="description">
                        <p>Author:{prod.author}</p>
                        <p>Category{prod.categoryName}</p>
                        <p>Original Price: Rs.{prod.price}</p>
                    </div>
                    <div className="button-container">                        
                        <button className="cart-button">
                            <span>Add To Cart<FontAwesomeIcon icon={faCartShopping} /></span>
                        </button>  
                <button className="wishlist-button"> <FontAwesomeIcon icon={faHeart}/></button>

                    </div>
                </div>

            </div>
        // </div>
    )
}


