import React, { useEffect } from "react";
import data from "../data.js";
import Rating from "./rating.js";

export default function Product(props) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="row center">
      {data.products.map((product) => (
        <div key={product.slug} className="card">
          <a href={`/product/${product.slug}`}>
            <img
              className="medium"
              src={product.image}
              alt={product.name}
            ></img>
          </a>
          <div className="cart-body">
            <a href="product.html">
              <h2>{product.name}</h2>
            </a>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
            <div className="price">Shs {product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
