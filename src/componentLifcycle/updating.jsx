import React from "react";
class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "HELLO",
    };
  }

  shouldComponentUpdate() {
    return true;
  }
  changeGreet = () => {
    this.setState({
      greeting: "WELCOME",
    });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("previous").innerHTML =
      "Previous : " + prevState.greeting;
  }
  componentDidUpdate() {
    document.getElementById("current").innerHTML =
      "Current : " + this.state.greeting;
  }
  render() {
    return (
      <div className="component">
        <h3>{this.state.greeting}</h3>
        <button className="btn btn-info" onClick={this.changeGreet}>
          Click Me!
        </button>
        <div id="previous"></div>
        <div id="current"></div>
      </div>
    );
  }
}

export default Updating;
