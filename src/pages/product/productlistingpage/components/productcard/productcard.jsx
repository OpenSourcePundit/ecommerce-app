import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillHeart} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../../../../Contexts/dataContext";
import { AuthContext} from "../../../../../Contexts/authcontext/authcontext";
import "./productcard.css";

export const ProductCard = ({ prod }) => {
  const navigate = useNavigate();
  let result = {};
  let result1 = {};
  let { dataDispatch, cart, wishlist } = useContext(DataContext);
  const {isLogIn} = useContext(AuthContext);

  // const productdetailsclickHandler = () => {
  //   navigate(`./${prod._id}`);
  // };

  const isInCart = cart.some((item) => item._id === prod._id);
  const {
    _id,
    title,
    author,
    image,
    price,
    newPrice,
    discount,
    rating,
    Language,
  } = prod;

  const handleAddCart = async (e,prod) => {
    
    e.stopPropagation();
    if(isLogIn)
      
    {try {
      const prod1 = {
        product: prod,
      };
      const encodedToken = localStorage.getItem("encodedToken");
      const response = await fetch(`/api/user/cart`, {
        method: "POST",
        headers: {
          authorization: encodedToken,
        },
        body: JSON.stringify(prod1),
      });
      // saving the encodedToken in the localStorage
      result = await response.json();
      console.log("result",result.cart);
      dataDispatch({
        type: "handleCart",
        payload: result.cart,
      });
    } catch (error) {
      console.log(error);
    }}else{
      navigate("../login");
    }
  };

  const isInWishlist = wishlist.some((item) => item._id === prod._id);

  const handleWishlist = async (e,prod) => {
    e.stopPropagation();

   if(isLogIn) {try {
      const encodedToken = localStorage.getItem("encodedToken");
      const response = await fetch(
        isInWishlist ? `/api/user/wishlist/${prod._id}` : `/api/user/wishlist`,
        {
          method: isInWishlist ? "DELETE" : "POST",
          headers: {
            authorization: encodedToken,
          },
          body: isInWishlist ? "" : JSON.stringify({ product: prod }),
        }
      );
      // saving the encodedToken in the localStorage
      result1 = await response.json();

      dataDispatch({
        type: "handleWishlist",
        payload: result1.wishlist,
      });
      console.log("wishlist", wishlist, "productid", prod._id);
    } catch (error) {
      console.log(error);
    }}else{
      navigate("../login");
    }
  };

  return (
    // <div className="container">
    <div className="card" onClick={()=>navigate(`./${_id}`)}>
      <div className="img" >
        <img src={prod.image} alt="" width="auto" height="auto" />
      </div>
      <div className="content">
        <div className="review-container">
          <div className="stars">
            {/* <span>Reviews</span> */}
            {[1, 2, 3, 4, 5].map((i) =>
              i <= prod.rating ? (
                <FontAwesomeIcon icon={faStar} style={{ color: "#ff5e00ff" }} />
              ) : (
                <FontAwesomeIcon icon={faStar}  />
              )
            )}
          </div>
        </div>
        
        <div className="name">{prod.title}</div>
        <div className="price">
          <span className="new-price"> &#8377;{prod.newPrice}</span>
          &nbsp;
          <span className="actual-price"> &#8377;{prod.price}</span>

        </div>
        <div className="description">
          <p><span>Author :</span> {prod.author}</p>
          <p><span>Category :</span> {prod.categoryName}</p>
          <p><span>Language :</span> {prod.Language}</p>
        </div>
      </div>
      <div className="button-container">
        <div className="cart-button">
          {isInCart ? (
            <button 
              className="btn btn-secondary"
              onClick={(e) =>{e.stopPropagation();
 navigate("/cart")}}
            >
              <FaShoppingCart />
              <span> Go to Cart </span>
            </button>
          ) : (
            <button
              className="btn"
              style={{}}
              onClick={(e) => handleAddCart(e,prod)}
            >
              <FaShoppingCart />
              <span> Add to Cart</span>
            </button>
          )}
        </div>
        {/* <button className="cart-button">
            <span>
              Add To Cart
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </button> */}

        {/* <button className="wishlist-button">
            {" "}
            <FontAwesomeIcon icon={faHeart} />
          </button> */}
        <div className="wishlist-button">
          {isInWishlist ? (
            <button
              className="remove-heart"
              onClick={(e) => handleWishlist(e,prod)}
            >
              {" "}
              <AiFillHeart />{" "}
            </button>
          ) : (
            <button className="add-heart" onClick={(e) => handleWishlist(e,prod)}>
              {" "}
              <AiFillHeart />{" "}
            </button>
          )}
        </div>
      </div>
    </div>
    // </div>
    
  );
};
