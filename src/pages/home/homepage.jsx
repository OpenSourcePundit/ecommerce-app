import { NavLink ,Link,useNavigate} from "react-router-dom";
import { useContext,React} from "react";
import {dataContext} from "../../Contexts/dataContext"; 

export function HomePage() {
    // const getData = async () => {
    //     try {
    //       fetch("/api/categories")
    //       .then(response => response.json())
    //     .then(data => setCategory(data.categories));
        
    //     // fetch("/api/products")
    //     //   .then(response => response.json())
    //     // .then(data => setCategory(data.products.products));
               
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   };

    //   useEffect(() => {
    //     getData();
    //     console.log(category);   
    //   }, []);

    const navigate = useNavigate();
    const {dataDispatch,category,filterCategory} = useContext(dataContext);

    const setCategory = (categoryName) => {

    }
    
    return(
        
    )
}