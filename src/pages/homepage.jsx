import { NavLink ,Link} from "react-router-dom";
import { useState,useEffect,React} from "react";

export function HomePage() {
    const [products,setProduct] = useState();
    const [category,setCategory] = useState([]);

    


    const getData = async () => {
        try {
          fetch("/api/categories")
          .then(response => response.json())
        .then(data => setCategory(data.categories));          
        } catch (e) {
          console.error(e);
        }
      };

      useEffect(() => {
        getData();
      }, []);

    return(
        <>
        <div className="home-page-image">
            <img src="https://i.ibb.co/F4gnwFr/20230109210754-IMG-2258.jpg" alt="not loaded"/>
        </div>
<div className="category-grid">
    {category.map(({categoryName,description,_id})=>{return(
        <Link style={{color:"black",textDecoration:"none"}} to="/products/" value={categoryName} onClick={()=>{console.log(categoryName)}} key={_id}>
        <div className="box" key={_id}>
        <div className="detailsbox">
            <h4>{categoryName}</h4>
            <p className="details">
                {description}
            </p>
        </div>
        </div>
        </Link>

    )})}
    
</div>
        </>
        
    )
}