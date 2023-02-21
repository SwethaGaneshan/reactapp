import React from "react";
import Home from "./home";
import Login from "./login";
// import ProductView from "./viewproducts";
import Error from "./error";
import navigation from "./navigate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useparams from "./params";
import Navbar from "./navbar/nav";
import Userlist from "./userlist";
import Authenticated from "./navbar/AuthenticatedRiuter";
import Footer from "./navbar/footer";
function Todo() {
  const Loginnavigation = navigation(Login);
  const Homeuseparams = useparams(Home);
  const Navbarnavigation = navigation(Navbar);
  return (
    <div className="todo">
      <BrowserRouter>
        <Navbarnavigation />
        <Routes>
          <Route path="/login" element={<Loginnavigation />}></Route>
          <Route
            path="/home"
            element={
              <Authenticated>
                <Homeuseparams />
              </Authenticated>
            }
          ></Route>
          {/* <Route path="/product" element={<ProductView />}></Route> */}
          <Route
            path="/list"
            element={
              <Authenticated>
                <Userlist />
              </Authenticated>
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default Todo;
