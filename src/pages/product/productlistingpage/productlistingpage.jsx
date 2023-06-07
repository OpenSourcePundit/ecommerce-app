import React from "react";
import { useContext } from "react";
import { DataContext } from "../../../Contexts/dataContext";
import { ProductCard } from "./components/productcard/productcard";
import { ProductFilter} from "./components/filter/filter";
import "./productlistingpage.css";

export const ProductListingPage = () => {
  let {
    sortBy,
    priceRange,
    rating,
    products,
    activeFilterCategory,search } = useContext(DataContext);

  let searchData = products.filter((prod)=>prod.title.toLowerCase().includes(search.toLowerCase()))

  let priceFilter = (search!==""?searchData:products).filter((item) => item.newPrice <= priceRange);
  let CategoryFilter =
    activeFilterCategory.length === 0
      ? priceFilter
      : priceFilter.filter((item) =>
          activeFilterCategory.includes(item.categoryName)
        );
  let RatingFilter =
    rating.length === 0
      ? CategoryFilter
      : CategoryFilter.filter((item) => item.rating >= rating);
  let finalData =
    sortBy.length === 0
      ? RatingFilter
      : sortBy === "lowToHigh"
      ? RatingFilter.sort(function (a, b) {
          return a.newPrice - b.newPrice;
        })
      : RatingFilter.sort(function (a, b) {
          return b.newPrice - a.newPrice;
        });
 


  return (
    <div className="main">
      <ProductFilter/>
      <div className="product-section">
        <div className="search-result"> {finalData.length > 0 ? (
            <>
              <h3>Showing <span>({finalData.length} products)</span></h3>
              
            </>
          ) : (
            <h1>Sorry , Products are not available for chosen category.</h1>
          )}</div>
        <div className="product-container">
          {finalData.map((prod,index) => {
            return (
              <ProductCard prod={prod} index={index}  />
            );
          })}
        </div>
      </div>
    </div>
  );
};
