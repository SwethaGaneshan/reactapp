import React from "react";
import { Navigate } from "react-router-dom";
import Authentication from "./Authentication";
class Authenticated extends React.Component {
  render() {
    if (Authentication.isUseLoggedIn()) {
      return {
        ...this.props.children,
      };
    } else {
      return <Navigate to="/login" />;
    }
  }
}
export default Authenticated;
