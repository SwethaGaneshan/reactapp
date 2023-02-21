import React from "react";
import "../list/styles.css";
class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          imgUrl: <img src="/jacke.png"></img>,
          productName: "Mens Cotton Jacket",
          category: "men's clothing",
          price: "109.85",
        },
        {
          imgUrl: <img src="/ladieswatch.jpg"></img>,
          productName: "Dazzled Plus SmartWatch",
          price: "678",
          category: "Ladies Watch",
        },
        {
          imgUrl: <img src="/shoes.jpg"></img>,
          productName: "BATA womens Hearts Sneaker",
          price: "345",
          category: "Shoes",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container row mt-5">
        <table className="table table-hover">
          <thead className="table-active">
            <tr>
              <th>IMG</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productList.map((details, index) => (
              <tr key={index}>
                <td>{details.imgUrl}</td>
                <td>{details.productName}</td>
                <td>{details.price}</td>
                <td>{details.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ProductView;
