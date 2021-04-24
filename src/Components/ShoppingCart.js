import React from "react";
import formatPrice from "../helpers/formatPrice";

const ShoppingCart = ({ productInfo, subTotal, tax, total }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {productInfo.map((item) => {
          const { name, price, id } = item;
          return (
            <li key={id}>
              {name}: {formatPrice(price)}
            </li>
          );
        })}
      </ul>
      <h3>Subtotal: ${subTotal}</h3>
      <h3>Tax: ${tax}</h3>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default ShoppingCart;
