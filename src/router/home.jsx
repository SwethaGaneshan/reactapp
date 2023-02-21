import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./homestyle.css";
import HelloWorld from "../API/HelloWorld";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: " ",
    };
    this.getMessage = this.getMessage.bind(this);
  }
  getMessage() {
    // HelloWorld.retrieveMessage()
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({
    //       message: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    HelloWorld.retrieveBeanMessage()
      .then((response) => {
        console.log(response.data.message);
        this.setState({
          message: response.data.message,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // let user = Authentication.getLoggedInUser();
    // HelloWorld.retrievePathMessage(user)
    //   .then((response) => {
    //     console.log(response.data.message);
    //     this.setState({
    //       message: response.data.message,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div className="homes">
        <h1 className="mt-5">WELCOME </h1>
        <h2>{this.props.params.name}</h2>
        <Link className="btn btn-success" to="/product">
          Click button to view products
        </Link>
        <div className="row mt-5 col-1">
          <button className="btn btn-success sm" onClick={this.getMessage}>
            Message
          </button>{" "}
        </div>

        <h4 classname="row">{this.state.message}</h4>
      </div>
    );
  }
}
export default Home;
