import React from "react";
import {useContext } from "react";
import {DataContext} from "../../Contexts/dataContext"


export const ProductListingPage = () => {
  
  const {products} = useContext(DataContext);
  //console.log(products);
  const productData = products;
  const {filterCategory} = useContext(DataContext);

  return (
    <div className="product-container">
       Product listing
    </div>
   
  );
};
