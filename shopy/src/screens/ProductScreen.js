import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/rating.js";
import data from "../data.js";

export default function ProductScreen() {
  const { slug } = useParams();
  console.log(data);
  const Product = data.products.find((x) => String(x.slug) === slug);

  if (!Product) {
    return <div>Product not found !</div>;
  }
  return (
    <div>
      <Link to="/">Back to Homepage</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={Product.image} alt={Product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>{Product.name}</li>
            <li>
              <Rating
                rating={Product.rating}
                numReviews={Product.numReviews}
              ></Rating>
            </li>
            <li> Price :Shs{Product.price}</li>
            <li>Description:{Product.description}</li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">Shs{Product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {Product.CountInStock > 0 ? (
                      <span className="success"> In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
