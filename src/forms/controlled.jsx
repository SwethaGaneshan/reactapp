import React from "react";
import "./fomsstyle.css";
class Controlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      success: false,
      failed: false,
    };
  }
  userChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submit = () => {
    let uname = this.state.username;
    let word = this.state.password;
    if (uname === "Swetha@gmail.com" && word === "2402") {
      this.setState({
        success: true,
        failed: false,
      });
    } else {
      this.setState({
        success: false,
        failed: true,
      });
    }
  };

  render() {
    return (
      <div className="logincontrolled">
        <h3>LOGIN FORM</h3>
        <div className="mb-3">
          <input
            name="username"
            type="email"
            className="form-control"
            placeholder="Username"
            value={this.state.username}
            onChange={this.userChange}
          ></input>
        </div>
        <div className="mb-4">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.userChange}
          ></input>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-info" onClick={this.submit}>
            SUBMIT
          </button>
        </div>
        <Validate success={this.state.success} failed={this.state.failed} />
      </div>
    );
  }
}
function Validate(props) {
  if (props.success || props.failed) {
    return props.success ? (
      <h4 className="logsuc">LOGIN SUCCESSFULLY!!!</h4>
    ) : (
      <h4 className="logfai">LOGIN FAILED!</h4>
    );
  }
}
export default Controlled;
