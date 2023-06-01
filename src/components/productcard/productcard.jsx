import {React,useContext} from 'react'
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
        <div className="container">
            <div className="card" onClick={productdetailsclickHandler}>
                <div className="img">
                    <img src={prod.img} alt="" width="auto" height="200px" />
                </div>
                <div className="content">
                    <div className="review-container">
                        <div className="stars">
                        <span>Reviews</span>
                        {[1,2,3,4,5].map((i)=>
                            i<=prod.rating ? <FontAwesomeIcon icon={faStar} style={{color: "#f08c00",}} />
                            :<FontAwesomeIcon icon={faStar} />                        
                        )}
                        </div>                        
                    </div>
                    <h5 className="price">Rs.{prod.price}</h5>
                    <div className="name">{prod.title}</div>
                    <div className="description">
                        <p>Author:{prod.author}</p>
                        <p>Category{prod.categoryName}</p>
                        <p>Original Price: Rs.{prod.originalPrice}</p>
                    </div>
                    <div className="button-container">
                        <div className="wishlist-button">
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                        <div className="card-button">
                            <p>Add To Cart</p>
                            <FontAwesomeIcon icon={faCartShopping} />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// export const ProductCard = ({prod}) => {

//   const navigate = useNavigate();
//     const {_id, title, author, image, price, newPrice, discount,
//         rating,Language,  } = prod;
//   return (
//     <div className='product-card' key={_id}>
//       {/* <Link to={`/products/${_id}`}> */}
//        <div className="card-image" onClick={()=> navigate(`/products/${_id}`)} > 
//           <img className='image' src={image} alt={"random"}  />
          
//       </div>
//       {/* </Link> */}
//       <div className="heart">
//             <AiOutlineHeart/>
//       </div>
//       <div className="card-details">
//         <div className="title-rating">
//           <h3>{title}</h3> 
//         </div>
//         <div className="author">
//           <p>{author}</p>
//           <div className="rating">
//             <h4>{rating}</h4>
//             <h5><AiFillStar/></h5>
//           </div>
//         </div>
//         <div className="language">
//           <p>Language: {Language}</p>
//         </div>
//         <div className="price-details">
//           <div className="cprice">
//             <h4>₹{newPrice} </h4>
//           </div>
//           <div className="oprice">
//             <h4>₹{price}</h4>
//           </div>
//           <div className="discount">
//             <h4>({discount}% OFF)</h4>
//           </div>
//         </div>
        
//       </div>
//       <div className="button">
//         <button className='btn'>
//           <FaShoppingCart/><span>Add to cart</span>
//         </button>
//       </div>
//     </div>
//   )
// }

