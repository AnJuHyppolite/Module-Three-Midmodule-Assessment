import React from "react";
import "./App.css";
import Products from "./Components/Products";

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


  return (
    <div>
    <h1>Hello, world!</h1>;
  <Products cartItems={this.addToCart}/>
  </div>
  )

  }
}


export default App;
