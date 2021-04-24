import React from "react";
import "./App.css";
import CheckoutForm from "./Components/CheckoutForm";
import Products from "./Components/Products";
import ShoppingCart from "./Components/ShoppingCart";

class App extends React.Component {
  state = { productInfo: [] }


  addToCart = (items) => {
    this.setState((prevState) => {
      return {
        productInfo: [...prevState.productInfo, items]
      }
    })
  }

  render() {
    const { productInfo } = this.state


  return (
    <div className="App">
  <Products cartItems={this.addToCart}/>
  <ShoppingCart productInfo={productInfo}/>
  <CheckoutForm />
  </div>
  )

  }
}


export default App;
