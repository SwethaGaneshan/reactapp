import React from "react";
import "./fomsstyle.css";
class UnControlled extends React.Component {
  constructor(props) {
    super(props);
    this.user = React.createRef();
    this.pass = React.createRef();
  }
  submit = () => {
    let uname = this.user.current.value;
    let word = this.pass.current.value;
    if (uname === "Swetha@gmail.com" && word === "2402") {
      alert("LOGIN SUCCESSFULLY!");
    } else {
      alert("PLEASE ENTER A VALID USERNAME AND PASSWORD!");
    }
  };
  render() {
    return (
      <div className="loginuncontrolled">
        <h3>LOGIN FORM</h3>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Username"
            ref={this.user}
          ></input>
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            ref={this.pass}
          ></input>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-info" onClick={this.submit}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}
export default UnControlled;
