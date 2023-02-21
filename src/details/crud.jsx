import React from "react";
import "./crudstyles.css";
class Crud extends React.Component {
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
  delete = (index) => {
    var addUserViews = this.state.userViews;
    addUserViews.splice(index, 1);
    this.setState({
      userViews: addUserViews,
    });
  };

  render() {
    return (
      <>
        <div className="container row mt-3">
          <table className="table table-hover mt-2">
            <thead className="table-active">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.userViews.map((details, index) => (
                <tr key={index}>
                  <td>{details.name}</td>
                  <td>{details.age}</td>
                  <td>
                    <button className="btn btn-warning">UPDATE</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.delete(index)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            <button
              type="submit"
              className="btn btn-info"
              onClick={this.addDet}
            >
              ADD DETAILS
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Crud;
