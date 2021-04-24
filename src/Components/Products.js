import React from "react";
import productData from "../data/productData";
import formatPrice from "../helpers/formatPrice";
import "./Products.css"

const Products = ({ cartItems }) => {
  return (
    <div>
      <h1>My Garage Sale</h1>
      <ul className="Products">
        {productData.map((product) => {
          const { name, price, img, description } = product;
          return (
            <li>
              <h2>{name}</h2>
              <p>Price: {formatPrice(price)}</p>
              <button onClick={() => cartItems({ name, price })}>Add To Cart</button>
              <img src={img} alt="product" />
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
