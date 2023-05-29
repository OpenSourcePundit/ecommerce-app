import React from "react";
import {useContext } from "react";
import {DataContext} from "../../Contexts/dataContext"
import { ProductCard } from "../../components/productcard/productcard";

export const ProductListingPage = () => {
  
  const {products} = useContext(DataContext);
  // console.log(products);
  const productData = products;
  const {filterCategory} = useContext(DataContext);

  return (
    <div className="product-container">
       Product listing
       {products.map((prod)=>{
        return(
          <div className="productCard">
            <ProductCard prod={prod} />
          </div>
        )

       })}
    </div>
   
  );
};
