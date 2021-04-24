import React from "react";

class CheckoutForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    const { total } = this.props;
    if (!firstName || !lastName || !email) {
      alert("Input is not valid. Please complete all the fields.");
    } else if (creditCard.length !== 16) {
      alert("Credit card number is not valid.");
    } else if (zipCode.length !== 5) {
      alert("Zip code is not valid.");
    } else {
      alert(`Purchase complete. You will be charged $${total}. 
                    Thank you for shopping at AnJu's Garage!`);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Checkout</h2>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={this.handleChange}
            id="firstName"
            name="firstName"
            firstName="firstName"
            value={firstName}
            placeholder="First Name"
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={this.handleChange}
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            id="email"
            name="email"
            value={email}
            placeholder="Email"
          />
          <br />
          <label htmlFor="creditCard">Credit Card</label>
          <input
            onChange={this.handleChange}
            id="creditCard"
            name="creditCard"
            value={creditCard}
            placeholder="Credit Card"
          />
          <br />
          <label htmlFor="zipCode">Zip Code</label>
          <input
            onChange={this.handleChange}
            id="zipCode"
            name="zipCode"
            value={zipCode}
            placeholder="Zip Code"
          />
          <br />
          <button type="submit">Buy Now</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
