import "./counterstyle.css";
import React from "react";
class Counts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    };
  }
  sumofthree = (sums) => {
    this.setState({
      sum: this.state.sum + sums,
    });
  };
  reset = () => {
    this.setState({
      sum: 0,
    });
  };
  render() {
    return (
      <div className="ThreeCount">
        <CounterApp Sumofthree={this.sumofthree} />
        <CounterApp add={4} Sumofthree={this.sumofthree} />
        <CounterApp add={6} Sumofthree={this.sumofthree} />

        <div className="sum">{this.state.sum}</div>
        <button className="btn btn-secondary" onClick={this.reset}>
          RESET
        </button>
      </div>
    );
  }
}
export class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div className="counterapp">
        <button className="btn btn-success" onClick={this.plusvalue}>
          +{this.props.add}
        </button>
        <label className="Value">{this.state.value}</label>
        <button className="btn btn-danger" onClick={this.minusvalue}>
          -{this.props.add}
        </button>
      </div>
    );
  }
  plusvalue = () => {
    this.setState({
      value: this.state.value + this.props.add,
    });
    this.props.Sumofthree(this.props.add);
  };

  minusvalue = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - this.props.add,
      });
      this.props.Sumofthree(-this.props.add);
    }
  };
}
CounterApp.defaultProps = {
  add: 2,
};

export default Counts;
