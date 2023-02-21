import React from "react";
class UnMounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }
  removeGreet = () => {
    this.setState({ display: false });
  };
  render() {
    let greet;
    if (this.state.display) {
      greet = <Greeting />;
    }
    return (
      <div className="component">
        {greet}
        <button className="btn btn-info" onClick={this.removeGreet}>
          Delete
        </button>
      </div>
    );
  }
}

class Greeting extends React.Component {
  componentWillUnmount() {
    alert("Greeting will be removed");
  }
  render() {
    return <h3>WELCOME</h3>;
  }
}

export default UnMounting;
