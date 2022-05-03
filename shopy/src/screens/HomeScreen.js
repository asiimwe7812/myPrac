import React, { useEffect, useState } from "react";
import Product from "../components/Product.js";
import axios from "axios";
function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="row center">
        {products.map((product) => (
          <Product key={product.slug} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
