// import React, { useEffect, useState } from "react";
// import { useContext } from "react";
// import { DataContext } from "../../../Contexts/dataContext";
// import { ProductCard } from "./components/productcard/productcard";
// import { ProductFilter} from "./components/filter/filter";
// import "./productlistingpage.css";
// import { LoadingFallBack } from "../../../components/loader/loading-fallback";

// export const ProductListingPage = () => {
//   const [searchLoad,setSearchLoad] = useState(true);
//   const [finalData,setFinalData] = useState([]);

//   let {
//     sortBy,
//     priceRange,
//     rating,
//     products,
//     activeFilterCategory,search } = useContext(DataContext);

//   useEffect(()=>{    

//     setSearchLoad(true);
//   let searchData = products.filter((prod)=>prod.title.toLowerCase().includes(search.toLowerCase()))

//   let priceFilter = (search!==""?searchData:products).filter((item) => item.newPrice <= priceRange);
//   let CategoryFilter =
//     activeFilterCategory.length === 0
//       ? priceFilter
//       : priceFilter.filter((item) =>
//           activeFilterCategory.includes(item.categoryName)
//         );
//   let RatingFilter =
//     rating.length === 0
//       ? CategoryFilter
//       : CategoryFilter.filter((item) => item.rating >= rating);

//       console.log("Rating filter:",RatingFilter)
//       console.log("finaldatabefore:",finalData)
//   setFinalData([...sortBy.length === 0
//       ? RatingFilter
//       : sortBy === "lowToHigh"
//       ? RatingFilter.sort(function (a, b) {
//           return a.newPrice - b.newPrice;
//         })
//       : RatingFilter.sort(function (a, b) {
//           return b.newPrice - a.newPrice;
//         })],(prev)=>console.log("prevvalue:",prev,"currentvalue:",finalData))
//         setTimeout(()=>setSearchLoad(false),300);
//         // setSearchLoad(false)
//   },[sortBy,
//     priceRange,
//     rating,
//     products,
//     activeFilterCategory,search])

// // Do you have experience in integrating NSE, BSE MFU APIs for transactions like lumpsum, SIP, Redemption and etc?
  
 


//   return (
//     <div className="main">
//       <ProductFilter/>
//       <LoadingFallBack isLoading={searchLoad}>
//       <div className="product-section">
//         <div className="search-result"> {finalData?.length > 0 ? (
//             <>
//               <h3>Showing <span>({finalData?.length} products)</span></h3>
              
//             </>
//           ) : (
//             <h1>Sorry , Products are not available for chosen category.</h1>
//           )}</div>
//         <div className="product-container">
//           {finalData?.map((prod,index) => {
//             return (
//               <ProductCard prod={prod} index={index}  />
//             );
//           })}
//         </div>
//       </div>
//       </LoadingFallBack>

//     </div>
//   );
// };

import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../../Contexts/dataContext";
import { ProductCard } from "./components/productcard/productcard";
import { ProductFilter } from "./components/filter/filter";
import "./productlistingpage.css";
import { LoadingFallBack } from "../../../components/loader/loading-fallback";
import { FaFilter } from "react-icons/fa";
export const ProductListingPage = () => {
  const [searchLoad, setSearchLoad] = useState(true);
  const [finalData, setFinalData] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // ✅ NEW

  let {
    sortBy,
    priceRange,
    rating,
    products,
    activeFilterCategory,
    search,
  } = useContext(DataContext);

  useEffect(() => {
    setSearchLoad(true);
    let searchData = products.filter((prod) =>
      prod.title.toLowerCase().includes(search.toLowerCase())
    );

    let priceFilter = (search !== "" ? searchData : products).filter(
      (item) => item.newPrice <= priceRange
    );
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

    setFinalData([
      ...(sortBy.length === 0
        ? RatingFilter
        : sortBy === "lowToHigh"
        ? RatingFilter.sort((a, b) => a.newPrice - b.newPrice)
        : RatingFilter.sort((a, b) => b.newPrice - a.newPrice)),
    ]);
    setTimeout(() => setSearchLoad(false), 300);
  }, [sortBy, priceRange, rating, products, activeFilterCategory, search]);

  return (
    <div className="main">
      {/* ✅ Hamburger button visible only on small screens */}
      <button
        className="filter-toggle-btn"
        onClick={() => setShowFilter(!showFilter)}
      >
        <FaFilter />
      </button>

      {/* Sidebar filter */}
      <div className={`filter-wrapper ${showFilter ? "open" : ""}`}>
        <ProductFilter />
      </div>

      <LoadingFallBack isLoading={searchLoad}>
        <div className="product-section">
          <div className="search-result">
            {finalData?.length > 0 ? (
              <>
                <h3>
                  Showing <span>({finalData?.length} products)</span>
                </h3>
              </>
            ) : (
              <h1>
                Sorry , Products are not available for chosen category.
              </h1>
            )}
          </div>
          <div className="product-container">
            {finalData?.map((prod, index) => {
              return <ProductCard prod={prod} index={index} />;
            })}
          </div>
        </div>
      </LoadingFallBack>
    </div>
  );
};
