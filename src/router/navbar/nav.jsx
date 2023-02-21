import "./navstyles.css";
import { Link } from "react-router-dom";
import Authenticated from "./AuthenticatedRiuter";
import Authentication from "./Authentication";
function Navbar() {
  var isLoggedIn = Authentication.isUseLoggedIn();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info mt-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/login">
          <h1>LOGO</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {isLoggedIn && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  <h2>HOME</h2>
                </Link>
              </li>
              <li className="nav-item-end">
                <Link className="nav-link active" to="/list">
                  <h2>LIST</h2>
                </Link>
              </li>
            </ul>
          )}
          {isLoggedIn && (
            <div className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/login"
                onClick={() => Authenticated.removeUser}
              >
                <h2>LOG OUT</h2>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
