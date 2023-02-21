import React from "react";
import "./userliststyles.css";
class Userlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      userViews: [
        {
          name: "Anu",
          age: "20",
          date: new Date(),
        },
        {
          name: "Akil",
          age: "29",
          date: new Date(),
        },
        {
          name: "Ajay",
          age: "30",
          date: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="container row mt-4 justify-content-center"
        style={{
          width: "900px",
          heigth: "500px",
          fontSize: "20px",
          marginLeft: "1px",
        }}
      >
        <table className="table table-hover mt-2">
          <thead className="table-active">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userViews.map((details, index) => (
              <tr key={index}>
                <td>{details.name}</td>
                <td>{details.age}</td>
                <td>{details.date.toString()}</td>
                <td>
                  <button
                    className="btn-warning"
                    style={{ backgroundColor: "orange" }}
                  >
                    UPDATE
                  </button>
                </td>
                <td>
                  <button
                    className="userbtn"
                    style={{ backgroundColor: "red" }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary col-3">ADD USER+</button>
      </div>
    );
  }
}
export default Userlist;
