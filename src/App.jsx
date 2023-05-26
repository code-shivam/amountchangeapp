import React, { Component } from "react";
import formatNumber from "format-number";
// import photographer from "./images/girl.png";
import { Doneteten, Donetefive } from "./reduxslice/counterSlice";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { totalAmount, userName, Doneteten, Donetefive } = this.props;
    return (
      <div className="App">
        <img
          className="App__userpic"
          src={"https://image.ibb.co/nC8vGp/girl.png"}
          alt="photographer"
        />
        <p className="App__username">Hello, {userName}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={() => Doneteten(10000)} data-amount="10000">WITHDRAW $10,000</button>
          <button onClick={() => Donetefive(5000)} data-amount="5000">WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalAmount: state.counter.totalAmount,
    userName: state.counter.username,
  };
};

const mapDispatchToProps = {
  Doneteten,
  Donetefive,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
