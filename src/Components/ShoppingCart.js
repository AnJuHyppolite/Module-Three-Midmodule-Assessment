import React from "react";

const ShoppingCart = ( {productInfo, subTotal, tax, total} ) => {
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
      <h3>Subtotal: ${subTotal}</h3>
      <h3>Tax: ${tax}</h3>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default ShoppingCart;
