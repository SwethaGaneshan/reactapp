import React from "react";
class Mounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "HELLO",
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     color: props.greet,
  //   };
  // }
  render() {
    return <div className="component">{this.state.greeting}</div>;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: "WELCOME",
      });
    }, 4000);
  }
}

export default Mounting;
