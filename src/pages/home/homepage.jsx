import {Link,useNavigate} from "react-router-dom";
import { useContext,React} from "react";
import {DataContext} from "../../Contexts/dataContext"; 
import { AuthContext } from "../../Contexts/authcontext/authcontext";
import booklogo from "../../biblioteclogo.png" 

import "./homepage.css";
export function HomePage() {
   

    const navigate = useNavigate();
    const {dataDispatch,category} = useContext(DataContext);
    const {isLogIn} = useContext(AuthContext);
    const categoryHandler = (categoryName) =>{
   
      dataDispatch({
        type:"Filter-Categories",
        payload: categoryName
      })
      navigate("/products")
    }
  
    const handleShowBtn = () =>{
      dataDispatch({
        type:"show_btn",
        payload: "All"
      })
  
      navigate('/products');
    }



    return(
      
        <div className="home-container">
          <div className="home-img-container">
            <div className="bg-img-container"></div>
            <div className="home-page-text">
              <div className="main-text">
                <h4>
                  Welcome to <a href="/"><img src={""} alt="bibliotec" srcset="" /></a>
                </h4>
                <div>
                  <h1 className="main-text-title">For All Your</h1>
                  <h1 className="main-text-title">Reading Needs</h1>
                </div>
                <Link to="/products">
                  <button className="link-btn shop-now-btn" onClick={handleShowBtn}>SHOP NOW</button>
                </Link>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
  
          <div className="category-container flex-center">
            <div className="container">
              <div className="category-heading text-center">
                <h2>Featured Book Categories</h2>
                <p className="paragraph-md">
                  There are many categories of books available at Biblotec. Choose your favorite one
                  now.
                </p>
              </div>
              <div className="category-row">
                {category &&
                  category.map(({ _id, categoryName, description }) => {
                    return (
                      <div className="box" key={_id} 
                         onClick={() => categoryHandler(categoryName)}
                      >
                        <div className="detail-box text-center">
                          <h4>{categoryName}</h4>
                          <p className="paragraph-sm">{description}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
    )
}