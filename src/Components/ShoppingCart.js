import React from "react";

const ShoppingCart = ( {productInfo} ) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {productInfo.map((item) => {
            const { name, price } = item
          return (
            <li>
              {name}: {price}
            </li>
          );
        })}
      </ul>
      <h3>Subtotal: </h3>
      <h3>Tax: </h3>
      <h3>Total: </h3>
    </div>
  );
};

export default ShoppingCart;
