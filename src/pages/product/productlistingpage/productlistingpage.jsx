import React from "react";
import { useContext,useState } from "react";
import { DataContext } from "../../../Contexts/dataContext";
import { ProductCard } from "./components/productcard/productcard";
import { ProductFilter} from "./components/filter/filter";
import "./productlistingpage.css";

export const ProductListingPage = () => {
  let { 
    dataDispatch,
    category,
    filterCategory,
    sortBy,
    priceRange,
    rating,
    products,
    activeFilterCategory, } = useContext(DataContext);


  //Nested filter created:

  let priceFilter = products.filter((item) => item.newPrice <= priceRange);
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
      <div className="filter">{<ProductFilter/>}</div>
      <div className="product-section">
        <div className="search-result"> {finalData.length > 0 ? (
            <>
              <h3>Showing All Products</h3>
              <span>({finalData.length} products)</span>
            </>
          ) : (
            <h1>Sorry , Products are not available for chosen category.</h1>
          )}</div>
        <div className="product-container">
          {finalData.map((prod) => {
            return (
              <ProductCard prod={prod}  />
            );
          })}
        </div>
      </div>
    </div>
  );
};
