import React from "react";
import { useContext } from "react";
import { DataContext } from "../Contexts/dataContext";
import { ProductCard } from "../../components/productcard/productcard";
import { ProductFilter} from "./filter";
import "./productlistingpage.css";

export const ProductListingPage = () => {
  const { products } = useContext(DataContext);
  // console.log(products);
  const productData = products;
  const { filterCategory } = useContext(DataContext);

  return (
    <div className="main">
      <div className="filter">{<ProductFilter/>}</div>
      <div className="product-section">
        <div className="search-result">{/* no of products */}
        hqethjwryweqfgwehtj</div>
        <div className="product-container">
          {products.map((prod) => {
            return (
              <div className="product-card">
                <ProductCard prod={prod} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
