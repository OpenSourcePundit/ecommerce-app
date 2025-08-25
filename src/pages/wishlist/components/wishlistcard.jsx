import React from "react";
import { useContext } from "react";
import { DataContext } from "../../../Contexts/dataContext";
import { useNavigate } from "react-router-dom";
import "./wishlistcard.scss";

const SingleWishlistCard = ({ card, index, setLoading }) => {
  setLoading(true);
  const { cart, wishlist, dataDispatch } = useContext(DataContext);
  const navigate = useNavigate();
  setLoading(false);

  const isInCart = cart.some((item) => item._id === card._id);

  const handleRemove = async (card) => {
    setLoading(true);

    try {
      const encodedToken = localStorage.getItem("encodedToken");
      const response = await fetch(`/api/user/wishlist/${card._id}`, {
        method: "DELETE",
        headers: {
          authorization: encodedToken,
        },
      });
      // saving the encodedToken in the localStorage
      const result = await response.json();
      console.log(result.cart);
      dataDispatch({
        type: "handleWishlist",
        payload: result.wishlist,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMoveToCart = async (card) => {
    setLoading(true);
    try {
      const encodedToken = localStorage.getItem("encodedToken");
      const response = await fetch(`/api/user/cart`, {
        method: "POST",
        headers: {
          authorization: encodedToken,
        },
        body: JSON.stringify({
          product: card,
        }),
      });
      // saving the encodedToken in the localStorage
      const result = await response.json();

      dataDispatch({
        type: "handleCart",
        payload: result.cart,
      });
    } catch (error) {
      console.log(error);
    }

    try {
      const encodedToken = localStorage.getItem("encodedToken");
      const response = await fetch(`/api/user/wishlist/${card._id}`, {
        method: "DELETE",
        headers: {
          authorization: encodedToken,
        },
      });
      // saving the encodedToken in the localStorage
      const result = await response.json();
      //console.log("move to wishlist cart result",result.cart);
      dataDispatch({
        type: "handleWishlist",
        payload: result.wishlist,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const { _id, title, author, image, newPrice, price, categoryName, Language } =
    card;
  return (
    <div className="wish-card" key={_id}>
      <div className="wish-card-container">
        <div className="wish-card-image">
          <img src={image} alt={title} />
        </div>
        <div className="wish-card-details">
          <h3 className="name">{title}</h3>
          {/* <h4 className='wish-card-author'>Author: <span>{author}</span> </h4> */}
          <div className="price">
            <span className="new-price"> &#8377;{newPrice}</span>
            &nbsp;
            <span className="actual-price"> &#8377;{price}</span>
          </div>
          <div className="description">
            <p>Author:{author}</p>
            <p>Category{categoryName}</p>
            <p>Language:{Language}</p>
          </div>

          <div className="wish-card-btn">
            <button
              className="wish-remove-btn btn"
              onClick={() => handleRemove(card)}
            >
              Remove
            </button>
            {isInCart ? (
              <button
                className="wish-move-btn btn "
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="wish-move-btn btn"
                onClick={() => handleMoveToCart(card)}
              >
                Move to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWishlistCard;
