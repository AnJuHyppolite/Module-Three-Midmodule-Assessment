import React from "react";
import "./App.css";
import CheckoutForm from "./Components/CheckoutForm";
// import formatPrice from "./helpers/formatPrice";
import Products from "./Components/Products";
import ShoppingCart from "./Components/ShoppingCart";

class App extends React.Component {
  state = { productInfo: [] };

  addToCart = (item) => {
    this.setState((prevState) => {
      return {
        productInfo: [...prevState.productInfo, item],
      };
    });
  };

  getSubTotal = () => {
    let subTotal = 0;
    const { productInfo } = this.state;
    productInfo.forEach((purchase) => {
      subTotal += purchase.price;
      // debugger
    });
    return subTotal.toFixed(2);
  };

  getTax = () => {
    const { productInfo } = this.state;
    let subTotal = 0;
    let taxRate = 0.05;
    let tax = 0;
    productInfo.forEach((purchase) => {
      subTotal += purchase.price;
      tax = subTotal * taxRate;
    });
    return tax.toFixed(2);
  };

  getTotal = () => {
    const { productInfo } = this.state;
    let subTotal = 0;
    let taxRate = 0.05;
    let tax = 0;
    let total = 0;
    productInfo.forEach((purchase) => {
      subTotal += purchase.price;
      tax = subTotal * taxRate;
      total = subTotal + tax;
    });

    return total.toFixed(2);
  };

  render() {
    const { productInfo } = this.state;
    const subTotal = this.getSubTotal();
    const tax = this.getTax();
    const total = this.getTotal();

    return (
      <div className="App">
        <Products cartItems={this.addToCart} />
        <ShoppingCart
          productInfo={productInfo}
          subTotal={subTotal}
          tax={tax}
          total={total}
        />
        <CheckoutForm />
      </div>
    );
  }
}

export default App;
