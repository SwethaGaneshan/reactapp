import React from "react";
import "../details/crudstyles.css";
class Adduser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      userViews: [
        {
          name: "Anu",
          age: "20",
        },
        {
          name: "Akil",
          age: "29",
        },
        {
          name: "Ajay",
          age: "30",
        },
      ],
    };
  }
  userChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addDet = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.age) {
      var addUserViews = this.state.userViews;
      var userViewObj = {
        name: this.state.name,
        age: this.state.age,
      };
      addUserViews.push(userViewObj);
      this.setState({
        userViews: addUserViews,
      });
    } else {
    }
  };

  render() {
    return (
      <div className="addDetails mt-5 col-4">
        <div className="mb-3">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Name"
            value={this.state.name}
            onChange={this.userChange}
          ></input>
        </div>
        <div className="mb-4">
          <input
            name="age"
            type="text"
            className="form-control"
            placeholder="Age"
            value={this.state.age}
            onChange={this.userChange}
          ></input>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-info" onClick={this.addDet}>
            ADD DETAILS
          </button>
        </div>
      </div>
    );
  }
}
export default Adduser();
