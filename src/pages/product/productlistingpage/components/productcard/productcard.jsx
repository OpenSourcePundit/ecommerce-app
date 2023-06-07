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

  const handleAddCart = async (prod) => {
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

  const handleWishlist = async (prod) => {
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
    <div className="card" >
      <div className="img" onClick={()=>navigate(`./${_id}`)}>
        <img src={prod.image} alt="" width="auto" height="200px" />
      </div>
      <div className="content">
        <div className="review-container">
          <div className="stars">
            <span>Reviews</span>
            {[1, 2, 3, 4, 5].map((i) =>
              i <= prod.rating ? (
                <FontAwesomeIcon icon={faStar} style={{ color: "#f08c00" }} />
              ) : (
                <FontAwesomeIcon icon={faStar} />
              )
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
      </div>
      <div className="button-container">
        <div className="cart-button">
          {isInCart ? (
            <button
              className="btn"
              style={{}}
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart />
              <span> Go to Cart </span>
            </button>
          ) : (
            <button
              className="btn"
              style={{}}
              onClick={() => handleAddCart(prod)}
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
              onClick={() => handleWishlist(prod)}
            >
              {" "}
              <AiFillHeart />{" "}
            </button>
          ) : (
            <button className="add-heart" onClick={() => handleWishlist(prod)}>
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
