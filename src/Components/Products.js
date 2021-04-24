import React from "react";
import "./Products.css";
import formatPrice from "../helpers/formatPrice";
import productData from "../data/productData";

const Products = ({ cartItems }) => {
  return (
    <div>
      <h1>My Garage Sale</h1>
      <ul className="Products">
        {productData.map((product) => {
          const { name, price, img, description, id } = product;
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>Price: {formatPrice(price)}</p>
              <button onClick={() => cartItems({ name, price })}>
                Add To Cart
              </button>
              <img src={img} alt="product" />
              <p className="Description">{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
