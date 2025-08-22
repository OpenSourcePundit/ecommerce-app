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
            
              <div className="main-text">
                
                
                  <div className="main-text-title"> The Book Lover's Dreamland Awaits!</div>
                  <div className="sub-text-title">Welcome to the ultimate book lover's paradise!<br/> Join our community and contribute to the ever-evolving <br/>library of stories, where every book has a chance to inspire someone new.</div>
                
                <Link to="/products">
                  <button className="btn shop-now-btn" onClick={handleShowBtn}>SHOP NOW</button>
                </Link>
              </div>
            
          </div>
  
          <div className="category-container ">
              <div className="main-text-title ">
                Featured Book Categories
              </div>
              <div className="category-row">
                {category &&
                  category.map(({ _id, categoryName, description }) => {
                    return (
                      <div className="box" key={_id} 
                         onClick={() => categoryHandler(categoryName)}
                      >
                        <div className="detail-box text-center">
                          <div className="category-title">{categoryName}</div>
                          <p className="paragraph-sm">{description}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            
          </div>
        </div>
    )
}