import React from "react";
import {links,useParams} from "react-router-dom";
import "./productdetailspage";

export function ProductDetailsPage () {
    const {productId} = useParams();
    return(
        <div className="main-page-container">
            <div className="main-container">
                <div className="product-image-container">

                </div>
                <div className="product-details-container">
                    
                </div>
            </div>
            <h1>productdetails</h1>
            <p>productdetails:{productId}</p>

        </div>
    )
}