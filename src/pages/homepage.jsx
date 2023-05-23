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
        
        // fetch("/api/products")
        //   .then(response => response.json())
        // .then(data => setCategory(data.products.products));
               
        } catch (e) {
          console.error(e);
        }
      };

      useEffect(() => {
        getData();
        console.log(category);   
      }, []);

    return(
        <>
        <div className="home-page-image">
            <img style={{maxHeight:"20rem"}} src="https://media.istockphoto.com/id/1222550815/photo/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-foreground.jpg?s=1024x1024&w=is&k=20&c=pYHl6LmsXYhgUE9OjBW-d_gUynzSjTI8pMnILwSQm9I=" alt="not loaded"/>
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